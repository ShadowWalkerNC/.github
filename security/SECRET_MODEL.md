# secret model
Use an encrypted local vault for development and provider-native stores in production. Prefer references/metadata instead of plaintext secret copies. Never commit values, emit secrets in logs or treat .env discovery as permission to read it. Token scope, storage, rotation and revocation are documented per integration; configuring a new secret is an approved operation.

Related: [security standard](../standards/SECURITY_STANDARD.md) and [current approvals](../execution/APPROVALS.yaml).
