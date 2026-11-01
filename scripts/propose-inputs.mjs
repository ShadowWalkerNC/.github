// Environment-only workflow adapter; all proposal behavior lives in the shared implementation.
import { propose } from './lib/proposal.mjs';
try {
  const options = { target: 'target', source: 'library-source', repo: process.env.TARGET_REPOSITORY, scope: process.env.ADOPTION_SCOPE, ref: process.env.LIBRARY_REF, version: process.env.LIBRARY_VERSION };
  for (const [field, env] of [['standards','SELECTED_STANDARDS'],['playbooks','SELECTED_PLAYBOOKS']]) if (process.env[env]) options[field] = process.env[env].split(',');
  if (process.env.SELECTED_PRESET) options.preset = process.env.SELECTED_PRESET;
  console.log(JSON.stringify(await propose(options), null, 2));
} catch (error) { console.error(`ERROR: ${error.message}`); process.exitCode = 1; }
