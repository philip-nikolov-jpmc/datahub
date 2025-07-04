# GCS Metadata Ingestion Connector - Workload Identity Federation Support

This document describes the changes made to add Workload Identity Federation support to the GCS metadata ingestion connector.

## Overview

The GCS connector now supports two authentication methods:
1. **HMAC Keys** (default) - The existing authentication method
2. **Workload Identity Federation** (new) - Uses Google Cloud workload identity federation

## Configuration Changes

### New Fields

- `auth_type`: (Optional) Authentication type to use. Defaults to `"hmac"`. Set to `"workload_identity_federation"` to use Workload Identity Federation.
- `gcp_wif_configuration`: (Optional) Path to the Google Cloud Workload Identity Federation configuration JSON file. Required when `auth_type` is `"workload_identity_federation"` and `gcp_wif_configuration_json` is not provided.
- `gcp_wif_configuration_json`: (Optional) Google Cloud Workload Identity Federation configuration as JSON string or dict. Alternative to `gcp_wif_configuration` file path. Required when `auth_type` is `"workload_identity_federation"` and `gcp_wif_configuration` is not provided.

### Modified Fields

- `credential`: Now optional. Required when `auth_type` is `"hmac"`.

## Usage Examples

### HMAC Authentication (Default)

```yaml
# Existing configuration continues to work unchanged
source:
  type: gcs
  config:
    # auth_type: hmac  # Optional, this is the default
    credential:
      hmac_access_id: "your_access_id"
      hmac_access_secret: "your_secret_key"
    path_specs:
      - include: "gs://my-bucket/**/*.parquet"
```

### Workload Identity Federation

#### Option 1: Using Configuration File Path

```yaml
source:
  type: gcs
  config:
    auth_type: workload_identity_federation
    gcp_wif_configuration: "/path/to/gcp_wif_configuration.json"
    path_specs:
      - include: "gs://my-bucket/**/*.parquet"
```

#### Option 2: Using Configuration Content (JSON String)

```yaml
source:
  type: gcs
  config:
    auth_type: workload_identity_federation
    gcp_wif_configuration_json: |
      {
        "type": "external_account",
        "audience": "//iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/providers/PROVIDER_ID",
        "subject_token_type": "urn:ietf:params:oauth:token-type:jwt",
        "token_url": "https://sts.googleapis.com/v1/token",
        "credential_source": {
          "file": "/var/run/secrets/tokens/gcp-ksa/token"
        },
        "service_account_impersonation_url": "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/SERVICE_ACCOUNT_EMAIL:generateAccessToken"
      }
    path_specs:
      - include: "gs://my-bucket/**/*.parquet"
```

#### Option 3: Using Configuration Content (Dict)

```yaml
source:
  type: gcs
  config:
    auth_type: workload_identity_federation
    gcp_wif_configuration_json:
      type: external_account
      audience: "//iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/providers/PROVIDER_ID"
      subject_token_type: "urn:ietf:params:oauth:token-type:jwt"
      token_url: "https://sts.googleapis.com/v1/token"
      credential_source:
        file: "/var/run/secrets/tokens/gcp-ksa/token"
      service_account_impersonation_url: "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/SERVICE_ACCOUNT_EMAIL:generateAccessToken"
    path_specs:
      - include: "gs://my-bucket/**/*.parquet"
```

## Setting up Workload Identity Federation

To use workload identity federation, you need to:

1. **Set up Workload Identity Federation in Google Cloud:**
   - Create a workload identity pool
   - Create a workload identity provider
   - Configure attribute mappings and conditions
   - Grant access to your external identity

2. **Create the credential configuration file:**
   ```bash
   gcloud iam workload-identity-pools create-cred-config \
       projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/providers/PROVIDER_ID \
       --service-account=SERVICE_ACCOUNT_EMAIL \
       --output-file=gcp_wif_configuration.json \
       --credential-source-file=TOKEN_FILE
   ```

3. **Use the configuration in your DataHub recipe:**
   - **Option A:** Set `gcp_wif_configuration` to the path of the generated JSON file
   - **Option B:** Copy the content of the JSON file and use `gcp_wif_configuration_json` to embed it directly in your recipe

## Implementation Details

### Changes Made

1. **Added authentication type enum:** `GCSAuthType` with values `HMAC` and `WORKLOAD_IDENTITY_FEDERATION`
2. **Modified configuration class:** Added validation to ensure required fields are present based on auth type
3. **Added flexible WIF configuration:** Support for both file path (`gcp_wif_configuration`) and direct JSON content (`gcp_wif_configuration_json`)
4. **Updated connection logic:** Modified `create_equivalent_s3_config()` method to handle both authentication types
5. **Environment variable setup:** For WIF, the `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set to point to the configuration file
6. **Temporary file management:** When using JSON content, a temporary file is created and automatically cleaned up after ingestion
7. **Comprehensive validation:** Ensures only one WIF configuration method is used and validates JSON format

### Backward Compatibility

- All existing configurations continue to work unchanged
- Default authentication type is HMAC
- No breaking changes to the API

### Validation

The configuration validates that:
- When `auth_type` is `"hmac"`, the `credential` field is required
- When `auth_type` is `"workload_identity_federation"`, either `gcp_wif_configuration` (file path) or `gcp_wif_configuration_json` (JSON content) is required, but not both
- When using `gcp_wif_configuration_json`, the content must be valid JSON (if string) or a dictionary
- Path specs must use the `gs://` prefix

## Security Benefits

Workload Identity Federation provides several security advantages over HMAC keys:

1. **No long-lived credentials:** Uses temporary tokens instead of permanent keys
2. **Automatic credential rotation:** Tokens are automatically refreshed
3. **Fine-grained access control:** Can be configured with specific conditions and attribute mappings
4. **Audit trail:** Better monitoring and logging of credential usage
5. **Reduced key management overhead:** No need to store, rotate, or manage service account keys

### Additional Benefits of JSON Content Option

When using `gcp_wif_configuration_json` instead of a file path:

1. **Simplified deployment:** No need to manage separate configuration files
2. **Container-friendly:** Easier to use in containerized environments where mounting files may be complex
3. **Configuration management:** WIF configuration can be stored alongside other configuration in your recipe
4. **CI/CD integration:** Can be easily templated and injected during deployment pipelines
5. **Version control:** Configuration changes are tracked with your recipe changes

## References

- [Google Cloud Workload Identity Federation Documentation](https://cloud.google.com/iam/docs/workload-identity-federation)
- [Configure Workload Identity Federation with other identity providers](https://cloud.google.com/iam/docs/workload-identity-federation-with-other-providers)
- [DataHub Metadata Ingestion Development Guide](https://docs.datahub.com/docs/metadata-ingestion/developing/)