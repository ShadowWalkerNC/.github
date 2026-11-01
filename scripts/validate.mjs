#!/usr/bin/env node
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { validateTree } from './lib/validation.mjs';
try {
  const { values }=parseArgs({ options:{ root:{type:'string'} } });
  const root=values.root??resolve(dirname(fileURLToPath(import.meta.url)),'..');
  console.log(JSON.stringify(validateTree(root),null,2));
} catch(error) { console.error(`FAIL: ${error.message}`); process.exitCode=1; }
