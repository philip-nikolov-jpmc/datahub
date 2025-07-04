# Adding Google Workload Identity Federation to DataHub GCS Ingestion Source

## Executive Summary

This document analyzes what would be required to add Google Workload Identity Federation support to the DataHub GCS ingestion source, providing a more secure and modern authentication mechanism compared to the current HMAC key-based approach.

## Current State Analysis

### Current Authentication Mechanism

The DataHub GCS ingestion source currently uses **HMAC keys** for authentication:

```python
class HMACKey(ConfigModel):
    hmac_access_id: str = Field(description="Access ID")
    hmac_access_secret: SecretStr = Field(description="Secret")

class GCSSourceConfig(...):
    credential: HMACKey = Field(
        description="Google cloud storage [HMAC keys](https://cloud.google.com/storage/docs/authentication/hmackeys)",
    )
```

### Current Implementation Architecture

The GCS source works by:
1. Converting GCS URIs to S3-compatible format (`gs://` → `s3://`)
2. Using the S3Source with HMAC credentials as AWS-style credentials
3. Leveraging an object store adapter pattern for GCS-specific customizations

```python
s3_config = DataLakeSourceConfig(
    path_specs=s3_path_specs,
    aws_config=AwsConnectionConfig(
        aws_endpoint_url="https://storage.googleapis.com",
        aws_access_key_id=self.config.credential.hmac_access_id,
        aws_secret_access_key=self.config.credential.hmac_access_secret.get_secret_value(),
        aws_region="auto",
    ),
    # ...
)
```

## Google Workload Identity Federation Overview

### What is Workload Identity Federation?

Workload Identity Federation (WIF) allows external workloads to access Google Cloud resources using federated identities instead of service account keys. It supports:

- **External Identity Providers**: AWS, Azure, OIDC, SAML 2.0
- **Deployment Platforms**: GitHub Actions, GitLab CI, Kubernetes
- **Token Exchange**: OAuth 2.0 token exchange specification
- **Temporary Credentials**: Short-lived access tokens without long-term secrets

### Key Components

1. **Workload Identity Pool**: Entity that manages external identities
2. **Workload Identity Provider**: Describes relationship between Google Cloud and external IdP
3. **Attribute Mapping**: Maps external token attributes to Google Cloud attributes
4. **Credential Configuration**: File that defines how to obtain and use external credentials

## Implementation Requirements

### 1. New Authentication Configuration

Add support for Workload Identity Federation alongside existing HMAC authentication:

```python
from typing import Union, Optional
from datahub.ingestion.source.common.gcp_credentials_config import GCPCredential

class WorkloadIdentityConfig(ConfigModel):
    """Configuration for Workload Identity Federation"""
    credential_source_file: Optional[str] = Field(
        default=None,
        description="Path to file containing external credential (OIDC token, SAML assertion)"
    )
    credential_source_url: Optional[str] = Field(
        default=None, 
        description="URL to retrieve external credential from"
    )
    credential_source_executable: Optional[str] = Field(
        default=None,
        description="Command to execute to retrieve external credential"
    )
    audience: str = Field(
        description="The workload identity pool provider audience"
    )
    subject_token_type: str = Field(
        default="urn:ietf:params:oauth:token-type:id_token",
        description="The subject token type"
    )
    token_url: Optional[str] = Field(
        default="https://sts.googleapis.com/v1/token",
        description="The STS token exchange endpoint"
    )
    service_account_impersonation_url: Optional[str] = Field(
        default=None,
        description="URL for service account impersonation"
    )

class GCSSourceConfig(StatefulIngestionConfigBase, DatasetSourceConfigMixin, PathSpecsConfigMixin):
    # Support both authentication methods
    credential: Optional[Union[HMACKey, GCPCredential, WorkloadIdentityConfig]] = Field(
        default=None,
        description="Authentication credentials for GCS access"
    )
    
    # For backward compatibility
    hmac_credential: Optional[HMACKey] = Field(
        default=None,
        description="HMAC credentials (legacy, use credential field instead)"
    )
```

### 2. Google Auth Library Integration

Leverage the existing Google Auth library infrastructure already used by BigQuery:

```python
from google.auth import identity_pool
from google.auth.transport.requests import Request
import google.auth.transport.requests

class GCSWorkloadIdentityAuth:
    """Handles Workload Identity Federation authentication for GCS"""
    
    def __init__(self, config: WorkloadIdentityConfig):
        self.config = config
        self._credentials = None
        
    def get_credentials(self):
        """Get or refresh Workload Identity Federation credentials"""
        if self._credentials is None or self._credentials.expired:
            self._credentials = identity_pool.Credentials(
                audience=self.config.audience,
                subject_token_type=self.config.subject_token_type,
                token_url=self.config.token_url,
                credential_source=self._get_credential_source(),
                service_account_impersonation_url=self.config.service_account_impersonation_url
            )
        return self._credentials
    
    def _get_credential_source(self):
        """Build credential source configuration"""
        if self.config.credential_source_file:
            return {"file": self.config.credential_source_file}
        elif self.config.credential_source_url:
            return {"url": self.config.credential_source_url}
        elif self.config.credential_source_executable:
            return {"executable": {"command": self.config.credential_source_executable}}
        else:
            raise ValueError("No credential source specified")
    
    def get_access_token(self):
        """Get a fresh access token"""
        credentials = self.get_credentials()
        request = google.auth.transport.requests.Request()
        credentials.refresh(request)
        return credentials.token
```

### 3. Enhanced GCS Source Implementation

Modify the GCS source to support multiple authentication methods:

```python
class GCSSource(StatefulIngestionSourceBase):
    def __init__(self, config: GCSSourceConfig, ctx: PipelineContext):
        super().__init__(config, ctx)
        self.config = config
        self.report = GCSSourceReport()
        self.platform: str = PLATFORM_GCS
        
        # Initialize authentication
        self._auth_handler = self._create_auth_handler()
        self.s3_source = self.create_equivalent_s3_source(ctx)

    def _create_auth_handler(self):
        """Create appropriate authentication handler based on configuration"""
        # Determine which credential type is being used
        credential = self.config.credential or self.config.hmac_credential
        
        if isinstance(credential, WorkloadIdentityConfig):
            return GCSWorkloadIdentityAuth(credential)
        elif isinstance(credential, GCPCredential):
            return GCSServiceAccountAuth(credential)
        elif isinstance(credential, HMACKey):
            return GCSHMACAuth(credential)
        else:
            raise ValueError("No valid authentication configuration provided")

    def create_equivalent_s3_config(self):
        """Create S3-compatible config with appropriate authentication"""
        s3_path_specs = self.create_equivalent_s3_path_specs()
        
        if isinstance(self._auth_handler, GCSWorkloadIdentityAuth):
            # Use temporary credentials from Workload Identity Federation
            token = self._auth_handler.get_access_token()
            
            s3_config = DataLakeSourceConfig(
                path_specs=s3_path_specs,
                aws_config=AwsConnectionConfig(
                    aws_endpoint_url="https://storage.googleapis.com",
                    aws_session_token=token,  # Use OAuth token as session token
                    aws_region="auto",
                ),
                env=self.config.env,
                max_rows=self.config.max_rows,
                number_of_files_to_sample=self.config.number_of_files_to_sample,
            )
        else:
            # Fall back to existing HMAC implementation
            s3_config = self._create_hmac_s3_config(s3_path_specs)
            
        return s3_config
```

### 4. Credential Refresh Mechanism

Implement automatic credential refresh for long-running ingestion jobs:

```python
from threading import Timer
import time

class TokenRefreshManager:
    """Manages automatic refresh of Workload Identity Federation tokens"""
    
    def __init__(self, auth_handler: GCSWorkloadIdentityAuth, refresh_interval: int = 3000):
        self.auth_handler = auth_handler
        self.refresh_interval = refresh_interval  # 50 minutes (tokens valid for 1 hour)
        self._timer = None
        
    def start_refresh_timer(self):
        """Start automatic token refresh"""
        self._schedule_refresh()
        
    def stop_refresh_timer(self):
        """Stop automatic token refresh"""
        if self._timer:
            self._timer.cancel()
            
    def _schedule_refresh(self):
        """Schedule next token refresh"""
        self._timer = Timer(self.refresh_interval, self._refresh_token)
        self._timer.start()
        
    def _refresh_token(self):
        """Refresh the access token"""
        try:
            self.auth_handler.get_access_token()
            logger.info("Successfully refreshed Workload Identity Federation token")
        except Exception as e:
            logger.error(f"Failed to refresh token: {e}")
        finally:
            self._schedule_refresh()
```

### 5. Configuration Validation

Add comprehensive validation for Workload Identity Federation configuration:

```python
@validator("credential")
def validate_credential_config(cls, v):
    """Validate credential configuration"""
    if isinstance(v, WorkloadIdentityConfig):
        # Ensure exactly one credential source is specified
        sources = [
            v.credential_source_file,
            v.credential_source_url, 
            v.credential_source_executable
        ]
        source_count = sum(1 for source in sources if source is not None)
        
        if source_count != 1:
            raise ValueError(
                "Exactly one credential source must be specified: "
                "credential_source_file, credential_source_url, or credential_source_executable"
            )
            
        # Validate audience format
        if not v.audience.startswith("//iam.googleapis.com/projects/"):
            raise ValueError(
                "Audience must be in format: "
                "//iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/providers/PROVIDER_ID"
            )
            
    return v
```

## Dependencies and Requirements

### 1. Python Package Dependencies

Add to `setup.py`:

```python
"google-auth>=2.30.0",  # For identity_pool module
"google-auth-httplib2>=0.1.0",  # For HTTP transport
```

### 2. Environment Variable Support

Support standard Google Cloud environment variables:

- `GOOGLE_APPLICATION_CREDENTIALS`: Path to credential configuration file
- `GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES`: Enable executable-sourced credentials
- `GOOGLE_CLOUD_PROJECT`: Default project ID

### 3. Credential Configuration File Support

Support the standard Google Cloud credential configuration file format:

```json
{
  "type": "external_account",
  "audience": "//iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/providers/PROVIDER_ID",
  "subject_token_type": "urn:ietf:params:oauth:token-type:id_token",
  "token_url": "https://sts.googleapis.com/v1/token",
  "credential_source": {
    "file": "/path/to/token"
  },
  "service_account_impersonation_url": "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/SA_EMAIL:generateIdToken"
}
```

## Configuration Examples

### 1. File-based OIDC Token

```yaml
source:
  type: gcs
  config:
    credential:
      type: workload_identity
      audience: "//iam.googleapis.com/projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider"
      credential_source_file: "/var/run/secrets/tokens/gcp-ksa/token"
      subject_token_type: "urn:ietf:params:oauth:token-type:id_token"
    path_specs:
      - include: "gs://my-bucket/data/**/*.parquet"
```

### 2. URL-based Token Source

```yaml
source:
  type: gcs
  config:
    credential:
      type: workload_identity
      audience: "//iam.googleapis.com/projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider"
      credential_source_url: "http://169.254.169.254/metadata/identity/oauth2/token?audience=api://AzureADTokenExchange"
      subject_token_type: "urn:ietf:params:oauth:token-type:id_token"
    path_specs:
      - include: "gs://my-bucket/data/**/*.parquet"
```

### 3. Executable-based Token Source

```yaml
source:
  type: gcs
  config:
    credential:
      type: workload_identity
      audience: "//iam.googleapis.com/projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider"
      credential_source_executable: "/usr/local/bin/get-token.sh"
      subject_token_type: "urn:ietf:params:oauth:token-type:id_token"
    path_specs:
      - include: "gs://my-bucket/data/**/*.parquet"
```

### 4. Service Account Impersonation

```yaml
source:
  type: gcs
  config:
    credential:
      type: workload_identity
      audience: "//iam.googleapis.com/projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider"
      credential_source_file: "/var/run/secrets/tokens/gcp-ksa/token"
      service_account_impersonation_url: "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/my-sa@my-project.iam.gserviceaccount.com:generateIdToken"
    path_specs:
      - include: "gs://my-bucket/data/**/*.parquet"
```

## Implementation Phases

### Phase 1: Core Infrastructure (MVP)
- [ ] Add WorkloadIdentityConfig class
- [ ] Implement GCSWorkloadIdentityAuth
- [ ] Add basic file-based token support
- [ ] Update configuration validation
- [ ] Add unit tests

### Phase 2: Enhanced Features  
- [ ] Add URL-based token support
- [ ] Add executable-based token support
- [ ] Implement token refresh mechanism
- [ ] Add comprehensive error handling
- [ ] Add integration tests

### Phase 3: Production Features
- [ ] Add credential configuration file support
- [ ] Implement service account impersonation
- [ ] Add performance monitoring
- [ ] Add comprehensive documentation
- [ ] Add migration guide from HMAC

## Security Considerations

### 1. Token Security
- Tokens should be stored in memory only
- Implement secure token refresh mechanisms
- Support token expiration handling
- Validate token audience and issuer

### 2. Credential Source Security
- File-based: Ensure proper file permissions (600)
- URL-based: Validate HTTPS and certificate verification
- Executable-based: Validate executable permissions and paths

### 3. Error Handling
- Don't log sensitive token data
- Implement proper authentication failure handling
- Support graceful degradation for token refresh failures

## Migration Strategy

### 1. Backward Compatibility
- Keep existing HMAC authentication support
- Support gradual migration through dual configuration support
- Provide clear migration documentation

### 2. Configuration Migration
```python
# Old configuration
credential:
  hmac_access_id: "HMAC_ACCESS_ID"
  hmac_access_secret: "HMAC_SECRET"

# New configuration (with backward compatibility)
credential:
  type: workload_identity
  audience: "//iam.googleapis.com/projects/..."
  credential_source_file: "/path/to/token"
```

### 3. Deployment Strategy
- Deploy with feature flag for Workload Identity Federation
- Test in development environments first
- Gradual rollout to production environments
- Monitor authentication success/failure rates

## Testing Strategy

### 1. Unit Tests
- Configuration validation
- Authentication handler creation
- Token refresh mechanisms
- Error handling scenarios

### 2. Integration Tests
- End-to-end authentication flow
- GCS data ingestion with WIF
- Token refresh during long-running jobs
- Different credential source types

### 3. Performance Tests
- Token acquisition latency
- Authentication overhead compared to HMAC
- Memory usage during token refresh

## Documentation Requirements

### 1. User Documentation
- Configuration guide for different deployment scenarios
- Migration guide from HMAC keys
- Troubleshooting guide
- Security best practices

### 2. Developer Documentation
- Architecture overview
- API documentation
- Extension points for custom authentication
- Testing guidelines

## Benefits of Implementation

### 1. Security Improvements
- **No Long-term Secrets**: Eliminates need for HMAC key management
- **Short-lived Tokens**: Reduces impact of credential compromise
- **Centralized Identity Management**: Leverages existing identity providers
- **Audit Trail**: Better logging and monitoring capabilities

### 2. Operational Benefits
- **Automated Credential Rotation**: No manual key rotation required
- **Simplified Deployment**: No secret management in deployment pipelines
- **Cloud-native Authentication**: Follows Google Cloud best practices
- **Platform Integration**: Works seamlessly with Kubernetes, CI/CD systems

### 3. Compliance Benefits
- **Reduced Attack Surface**: Fewer long-term credentials to secure
- **Identity Federation**: Supports enterprise identity requirements
- **Audit Requirements**: Better credential usage tracking
- **Zero Trust Architecture**: Aligns with modern security principles

## Conclusion

Adding Google Workload Identity Federation support to the DataHub GCS ingestion source would provide significant security and operational improvements. The implementation leverages existing Google Cloud authentication infrastructure and can be done in a backward-compatible manner.

The key benefits include eliminating long-term secret management, providing automatic credential rotation, and enabling better integration with modern cloud-native deployment patterns.

The estimated development effort is approximately 2-3 weeks for the core implementation, with additional time needed for comprehensive testing, documentation, and migration support.