# P05 route contract review resolution
Antigravity source-only session8308 completed exit0. Source review is not runtime verification.

Accepted: nested reservation tenant mismatch now reports TENANT_MISMATCH explicitly. The parity suite now takes version/source/tenant from producer AST, checks existing-table fallback as a third context, and refuses executable calls. Root identified and fixed inherited optional-field type-guard bypass with a regression. No application route changes.

Not broadened without source evidence: null note/orderId/managerId are not declared by the inspected route/helper types; authorized manager helper returns string or absent and removes falsy IDs. Arbitrary malformed input/DB values are not automatically valid contracts. Reservation table_id is explicitly normalized to string/null by both producers, so omitting it is invalid. Tests and docs distinguish unsupported malformed values from observed nullable/undefined producer fields.

Preserved intentionally: snake_case reservation keys match the existing producer; empty fromServerId comes from its normalization; newer optional fields explicitly include undefined while original interfaces retain exactOptionalPropertyTypes. Domain semantic validation remains separate.

Coverage limit: fixtures evaluate payload data expressions from source, not earlier variable initializers, manager auth, route execution or actual DB results. No live acceptance claim. Unsupported expressions fail instead of executing source. Seven sites, three fixture contexts, in-memory/JSON checks are covered.

Final evidence: P05_ROUTE_CONTRACT_VERIFICATION.json. Eleven supported event contracts; nine declared-only payload specifications and one unversioned outbox transport remain. No full P05 exit or P06 migration inferred.
