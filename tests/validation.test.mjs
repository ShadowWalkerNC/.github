import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, cpSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateTree } from '../scripts/lib/validation.mjs';
const ROOT=resolve(dirname(fileURLToPath(import.meta.url)),'..');
function copy(t){const root=mkdtempSync(join(tmpdir(),'standards-validate-'));t.after(()=>rmSync(root,{recursive:true,force:true}));cpSync(ROOT,root,{recursive:true,filter:p=>!p.split(/[\\/]/).some(s=>['node_modules','.git'].includes(s))});return root;}
function edit(root,path,fn){const p=join(root,path);writeFileSync(p,fn(readFileSync(p,'utf8')));}
test('active repository validates without asserting historic product acceptance',()=>{const result=validateTree(ROOT);assert.equal(result.status,'PASS');assert.equal(result.reconciledRows,108);});
for(const [name,change,pattern] of [
 ['duplicate ID',r=>edit(r,'portfolio/index.json',s=>{const x=JSON.parse(s);x.entries[1].id=x.entries[0].id;return JSON.stringify(x);}),/Duplicate portfolio/],
 ['forbidden public field',r=>edit(r,'portfolio/index.json',s=>{const x=JSON.parse(s);x.entries[0].localPath='private-location';return JSON.stringify(x);}),/additional properties/],
 ['broken link',r=>edit(r,'README.md',s=>s+'\n[broken](absent.md)\n'),/Broken local link/],
 ['broken anchor',r=>edit(r,'README.md',s=>s+'\n[broken](core/WORKING_AGREEMENTS.md#missing)\n'),/Broken anchor/],
 ['invalid schema',r=>edit(r,'library.json',s=>{const x=JSON.parse(s);x.version='not-a-version';return JSON.stringify(x);}),/pattern/],
 ['unknown reference',r=>edit(r,'portfolio/reconciliation.json',s=>{const x=JSON.parse(s);x.rows.find(x=>x.targetId).targetId='absent';return JSON.stringify(x);}),/Unknown reconciliation/],
 ['obsolete navigation',r=>edit(r,'README.md',s=>s+'\n[old](CURRENT_STATE.md)\n'),/superseded/],
 ['automatic enrollment',r=>edit(r,'.github/workflows/auto-bootstrap.yml',s=>s+'\nschedule:\n'),/enrollment/],
 ['workstation path',r=>edit(r,'archive/README.md',s=>s+'\n'+['C:', 'Users', 'person', 'Documents'].join('\\')+'\n'),/Workstation/]
])test(`validator rejects ${name}`,t=>{const root=copy(t);change(root);assert.throws(()=>validateTree(root),pattern);});
