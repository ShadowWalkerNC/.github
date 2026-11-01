#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { plan, diff, apply, check } from './lib/adoption.mjs';
import { propose } from './lib/proposal.mjs';
try {
  const [command, ...args] = process.argv.slice(2);
  if (!['preview', 'apply', 'upgrade', 'check', 'propose'].includes(command)) throw new Error('Usage: standards.mjs preview|apply|upgrade|check|propose --target PATH --repo owner/name [--source PATH --ref REF --version X.Y.Z]');
  const { values } = parseArgs({ args, options: Object.fromEntries(['target','repo','scope','source','ref','version','standards','playbooks','preset','overrides'].map(x => [x, { type: 'string' }])) });
  const opts = { ...values };
  for (const field of ['standards','playbooks','overrides']) if (opts[field] !== undefined) opts[field] = opts[field] ? opts[field].split(',') : [];
  if (command === 'check') console.log(JSON.stringify({ status: 'PASS', ...check(opts) }, null, 2));
  else if (command === 'propose') console.log(JSON.stringify(await propose(opts), null, 2));
  else {
    const result = plan({ ...opts, requireInstalled: command === 'upgrade' });
    if (command === 'preview') console.log(diff(result.changes) || 'No changes.');
    else console.log(`Applied ${apply(result)} file changes to ${result.repo}. Review and commit the diff.`);
  }
} catch (error) { console.error(`ERROR: ${error.message}`); process.exitCode = 1; }
