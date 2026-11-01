import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, cpSync, readFileSync, writeFileSync, readdirSync, rmSync, existsSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { plan, apply, check, diff, git, sha256 } from '../scripts/lib/adoption.mjs';
import { propose, githubApi } from '../scripts/lib/proposal.mjs';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
function init(path) { mkdirSync(path,{recursive:true}); git(path,'init','-b','main'); git(path,'config','user.name','Fixture'); git(path,'config','user.email','fixture@example.invalid'); }
function commit(path) { git(path,'add','.'); git(path,'commit','-m','fixture'); return git(path,'rev-parse','HEAD').trim(); }
function fixture(t,repo='example/product') {
  const temp=mkdtempSync(join(tmpdir(),'standards-test-')); t.after(()=>rmSync(temp,{recursive:true,force:true}));
  const source=join(temp,'source'), target=join(temp,'target'); init(source); init(target);
  for(const dir of ['core','standards','playbooks','presets']) cpSync(join(ROOT,dir),join(source,dir),{recursive:true});
  cpSync(join(ROOT,'library.json'),join(source,'library.json'));
  const ref=commit(source); git(source,'remote','add','origin','https://github.com/ShadowWalkerNC/.github.git'); git(target,'remote','add','origin',`https://github.com/${repo}.git`);
  writeFileSync(join(target,'AGENTS.md'),'# My project\n\nKeep my local instructions.\n');commit(target);
  return { source,target,ref,version:'1.0.0',scope:'Fixture feature',repo };
}
function snapshot(path) {
  const result={};
  function walk(at,prefix='') { for(const e of readdirSync(at,{withFileTypes:true})) {
    if(e.name==='.git')continue;const key=prefix+e.name;
    if(e.isDirectory())walk(join(at,e.name),key+'/');else result[key]=sha256(readFileSync(join(at,e.name)));
  }} walk(path);return result;
}
function advance(opts) {
  const file=join(opts.source,'library.json'),c=JSON.parse(readFileSync(file));c.version='1.1.0';writeFileSync(file,JSON.stringify(c,null,2)+'\n');
  const core=join(opts.source,'core/WORKING_AGREEMENTS.md');writeFileSync(core,readFileSync(core,'utf8')+'\nAdditional fixture guidance.\n');
  return {...opts,ref:commit(opts.source),version:'1.1.0'};
}
test('preview has useful diffs and no target writes; fresh apply is repeatable and offline',t=>{
 const opts=fixture(t);const before=snapshot(opts.target);const result=plan({...opts,standards:['TESTING_STANDARD'],playbooks:['bug-fix']});
 assert.match(diff(result.changes),/ADD .standards\/lock.json/);assert.deepEqual(snapshot(opts.target),before);
 assert.ok(apply(result)>0);assert.match(readFileSync(join(opts.target,'AGENTS.md'),'utf8'),/Keep my local instructions/);
 assert.equal(plan({...opts,standards:['TESTING_STANDARD'],playbooks:['bug-fix']}).changes.length,0);
 assert.equal(check({...opts,source:undefined}).sourceVerified,false);assert.equal(check(opts).sourceVerified,true);
 assert.equal(existsSync(join(opts.target,'.standards/presets')),false);
 const agents=join(opts.target,'AGENTS.md');writeFileSync(agents,readFileSync(agents,'utf8')+'\nA new local rule.\n');
 assert.equal(plan({...opts}).changes.length,0);assert.match(readFileSync(agents,'utf8'),/new local rule/);
});
test('upgrade preserves selection and overrides; explicit clearing removes unselected presets',t=>{
 const opts=fixture(t);mkdirSync(join(opts.target,'docs'));writeFileSync(join(opts.target,'docs/design.md'),'Local brand.\n');
 apply(plan({...opts,preset:'reading',standards:['API_STANDARD'],overrides:['docs/design.md']}));
 assert.ok(existsSync(join(opts.target,'.standards/presets/reading.md')));assert.equal(existsSync(join(opts.target,'.standards/presets/creative.md')),false);
 const newer=advance(opts);const preview=plan({...newer,requireInstalled:true});
 assert.deepEqual(preview.lock.selection.standards,['API_STANDARD']);assert.deepEqual(preview.lock.overrides,['docs/design.md']);
 apply(preview);assert.equal(check(newer).sourceVerified,true);assert.equal(readFileSync(join(opts.target,'docs/design.md'),'utf8'),'Local brand.\n');
 apply(plan({...newer,preset:'',standards:[],overrides:[]}));assert.equal(existsSync(join(opts.target,'.standards/presets/reading.md')),false);
 assert.equal(existsSync(join(opts.target,'.standards/standards/DESIGN_AND_CODE_BIBLE.md')),false);assert.equal(plan({...newer}).changes.length,0);
});
test('edited managed files and AGENTS blocks fail without writes',t=>{
 const opts=fixture(t);apply(plan(opts));const path=join(opts.target,'.standards/core/WORKING_AGREEMENTS.md');writeFileSync(path,'edited');
 const before=snapshot(opts.target);assert.throws(()=>plan(opts),/Locally modified/);assert.deepEqual(snapshot(opts.target),before);
});
test('managed AGENTS block edits are rejected while ordinary rules remain local',t=>{
 const opts=fixture(t);apply(plan(opts));const file=join(opts.target,'AGENTS.md');writeFileSync(file,readFileSync(file,'utf8').replace('Read [.standards','Altered [.standards'));
 assert.throws(()=>check(opts),/managed AGENTS/);
});
test('invalid target, version, ref, selection and missing source fail without writes',t=>{
 const opts=fixture(t);const before=snapshot(opts.target);
 for(const bad of [{repo:'other/product'},{version:'9.9.9'},{ref:'missing-ref'},{ref:'--help'},{source:join(opts.source,'absent')},{target:undefined},{scope:''},{repo:undefined},{standards:['unknown']},{standards:['__proto__']},{standards:['DESIGN_AND_CODE_BIBLE']},{overrides:['../outside']},{requireInstalled:true}]) assert.throws(()=>plan({...opts,...bad}));
 assert.deepEqual(snapshot(opts.target),before);
});
test('unmanaged conflicts and path traversal fail before writes',t=>{
 const opts=fixture(t);mkdirSync(join(opts.target,'.standards/core'),{recursive:true});writeFileSync(join(opts.target,'.standards/core/WORKING_AGREEMENTS.md'),'Mine.');
 const before=snapshot(opts.target);assert.throws(()=>plan(opts),/Unmanaged file conflict/);assert.deepEqual(snapshot(opts.target),before);
});
test('symlink target ancestors are rejected',t=>{
 const opts=fixture(t);const outside=join(opts.source,'outside');mkdirSync(outside);
 try { symlinkSync(outside,join(opts.target,'.standards'),process.platform==='win32'?'junction':'dir'); }
 catch(e) { if(process.platform==='win32'&&e.code==='EPERM'){t.skip('symlink privilege unavailable');return;}throw e; }
 assert.throws(()=>plan(opts),/Symlink/);assert.deepEqual(readdirSync(outside),[]);
});
test('source verification detects a forged but internally consistent local checksum',t=>{
 const opts=fixture(t);apply(plan(opts));const path=join(opts.target,'.standards/core/WORKING_AGREEMENTS.md');writeFileSync(path,'forged guidance\n');
 const file=join(opts.target,'.standards/lock.json'),lock=JSON.parse(readFileSync(file));lock.managedFiles.find(f=>f.path.endsWith('WORKING_AGREEMENTS.md')).sha256=sha256('forged guidance\n');writeFileSync(file,JSON.stringify(lock,null,2)+'\n');
 assert.equal(check({...opts,source:undefined}).sourceVerified,false);assert.throws(()=>check(opts),/Pinned source/);
});
test('concurrent edits between preview and apply fail before any file writes',t=>{
 const opts=fixture(t);const result=plan(opts);writeFileSync(join(opts.target,'AGENTS.md'),'Concurrent edit.');const before=snapshot(opts.target);
 assert.throws(()=>apply(result),/Concurrent change/);assert.deepEqual(snapshot(opts.target),before);
});
test('proposal checks authorization before writes and never pushes to default branch',async t=>{
 const opts=fixture(t,'ShadowWalkerNC/test-product');const before=snapshot(opts.target);
 await assert.rejects(()=>propose(opts,{api:async()=>({permissions:{push:false}})}),/Unauthorized/);assert.deepEqual(snapshot(opts.target),before);
 await assert.rejects(()=>githubApi('', 'GET','/repos/example/product'),/required/);
 const requests=[],pushes=[];const base=git(opts.target,'rev-parse','HEAD').trim();
 const result=await propose(opts,{
  api:async(method,path,body)=>{requests.push({method,path,body});if(path.endsWith('/pulls'))return{html_url:'https://github.com/fixture/pull/1'};if(path.includes('/git/ref/'))return{object:{sha:base}};return{full_name:opts.repo,permissions:{push:true},default_branch:'main'};},
  run:(cwd,...args)=>{if(args[0]==='push'){pushes.push(args);return'';}return git(cwd,...args);}
 });
 assert.match(result.branch,/^standards\/v1.0.0-/);assert.deepEqual(pushes,[['push','origin',`HEAD:refs/heads/${result.branch}`]]);
 assert.equal(requests.filter(x=>x.method==='POST').length,1);assert.equal(requests.at(-1).body.base,'main');assert.equal(requests.some(x=>/merge/.test(x.path)),false);
});
test('CLI rejects malformed options and preview is non-mutating',t=>{
 const opts=fixture(t);const before=snapshot(opts.target);const args=['scripts/standards.mjs','preview',...Object.entries(opts).flatMap(([k,v])=>['--'+k,v])];
 const result=execFileSync(process.execPath,args,{cwd:ROOT,encoding:'utf8'});assert.match(result,/ADD/);assert.deepEqual(snapshot(opts.target),before);
 assert.throws(()=>execFileSync(process.execPath,['scripts/standards.mjs','apply','--unknown','x'],{cwd:ROOT,stdio:'pipe'}));
});
test('invalid lock records and changed source origin fail without writes',t=>{
 const opts=fixture(t);git(opts.source,'remote','set-url','origin','https://github.com/example/not-the-library.git');
 const before=snapshot(opts.target);assert.throws(()=>plan(opts),/Source origin/);assert.deepEqual(snapshot(opts.target),before);
 git(opts.source,'remote','set-url','origin','https://github.com/ShadowWalkerNC/.github.git');apply(plan(opts));
 const file=join(opts.target,'.standards/lock.json'),lock=JSON.parse(readFileSync(file));lock.managedFiles.push(lock.managedFiles[0]);writeFileSync(file,JSON.stringify(lock));
 assert.throws(()=>check(opts),/unique|duplicate|items/i);
});
test('proposal base mismatch and dirty target cannot create branches or writes',async t=>{
 const opts=fixture(t,'ShadowWalkerNC/test-product');const before=snapshot(opts.target);const calls=[];
 const api=async(method,path)=>path.includes('/git/ref/')?{object:{sha:'0'.repeat(40)}}:{full_name:opts.repo,permissions:{push:true},default_branch:'main'};
 await assert.rejects(()=>propose(opts,{api,run:(cwd,...args)=>{calls.push(args[0]);return git(cwd,...args);}}),/default-branch head/);
 assert.equal(calls.includes('switch'),false);assert.deepEqual(snapshot(opts.target),before);
 writeFileSync(join(opts.target,'local.txt'),'My work.');const dirty=snapshot(opts.target);
 await assert.rejects(()=>propose(opts,{api}),/clean target/);assert.deepEqual(snapshot(opts.target),dirty);
});
