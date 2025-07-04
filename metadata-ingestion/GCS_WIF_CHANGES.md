# GCS Metadata Ingestion Connector - Workload Identity Federation Support

This document describes the changes made to add Workload Identity Federation support to the GCS metadata ingestion connector.

## Overview

The GCS connector now supports two authentication methods:
1. **HMAC Keys** (default) - The existing authentication method
2. **Workload Identity Federation** (new) - Uses Google Cloud workload identity federation

## Configuration Changes

### New Fields

- `auth_type`: (Optional) Authentication type to use. Defaults to `"hmac"`. Set to `"workload_identity_federation"` to use Workload Identity Federation.
- `gcp_wif_configuration`: (Optional) Path to the Google Cloud Workload Identity Federation configuration JSON file. Required when `auth_type` is `"workload_identity_federation"`.

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

```yaml
source:
  type: gcs
  config:
    auth_type: workload_identity_federation
    gcp_wif_configuration: "/path/to/gcp_wif_configuration.json"
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

3. **Use the configuration file path in your DataHub recipe:**
   Set `gcp_wif_configuration` to the path of the generated JSON file.

## Implementation Details

### Changes Made

1. **Added authentication type enum:** `GCSAuthType` with values `HMAC` and `WORKLOAD_IDENTITY_FEDERATION`
2. **Modified configuration class:** Added validation to ensure required fields are present based on auth type
3. **Updated connection logic:** Modified `create_equivalent_s3_config()` method to handle both authentication types
4. **Environment variable setup:** For WIF, the `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set to point to the configuration file

### Backward Compatibility

- All existing configurations continue to work unchanged
- Default authentication type is HMAC
- No breaking changes to the API

### Validation

The configuration validates that:
- When `auth_type` is `"hmac"`, the `credential` field is required
- When `auth_type` is `"workload_identity_federation"`, the `gcp_wif_configuration` field is required
- Path specs must use the `gs://` prefix

## Security Benefits

Workload Identity Federation provides several security advantages over HMAC keys:

1. **No long-lived credentials:** Uses temporary tokens instead of permanent keys
2. **Automatic credential rotation:** Tokens are automatically refreshed
3. **Fine-grained access control:** Can be configured with specific conditions and attribute mappings
4. **Audit trail:** Better monitoring and logging of credential usage
5. **Reduced key management overhead:** No need to store, rotate, or manage service account keys

## References

- [Google Cloud Workload Identity Federation Documentation](https://cloud.google.com/iam/docs/workload-identity-federation)
- [Configure Workload Identity Federation with other identity providers](https://cloud.google.com/iam/docs/workload-identity-federation-with-other-providers)
- [DataHub Metadata Ingestion Development Guide](https://docs.datahub.com/docs/metadata-ingestion/developing/)