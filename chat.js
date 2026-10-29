/* Metro Team · Messages. Loaded by index.html with <script src="chat.js"></script> (last thing before </body>). */
(()=>{
const SB_URL='https://cajmnenfxuelwodsqfoz.supabase.co',SB_KEY='sb_publishable_JHzQ_tMRfK-3InYZZupwQQ_Q9aIKka1',SK='mt-chat-auth';
const CH={sb:null,state:'idle',err:'',me:null,convs:[],unread:{},total:0,msgs:{},active:null,priv:true,pending:null,poll:0,rt:null,busy:false,loading:false,again:false,note:'',draft:''};
const ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12Z"/></svg>';
const css=`
.nbadge{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 5px;border-radius:99px;background:#e5484d;color:#fff;font-size:11px;font-weight:800;line-height:1;margin-left:2px}
.chat{display:grid;grid-template-columns:minmax(260px,330px) minmax(0,1fr);gap:14px;height:calc(100vh - 310px);min-height:540px}
.chl,.cht{background:var(--card);border:1px solid var(--ln);border-radius:14px;box-shadow:var(--sh);min-width:0;display:flex;flex-direction:column;overflow:hidden}
.chlh{padding:12px 14px;border-bottom:1px solid var(--ln);display:grid;gap:8px}.chlh b{font-family:var(--disp);font-size:17px}
#chlist{flex:1;overflow:auto}
.chi{display:block;width:100%;text-align:left;background:none;border:0;border-bottom:1px solid var(--ln);padding:11px 14px;cursor:pointer;color:var(--ink)}
.chi:hover,.chi.on{background:rgba(43,97,216,.09)}
.chi .cr{display:flex;gap:8px;align-items:center}.chi b{flex:1;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chi small{color:var(--mu);font-size:12px}
.chi .pv{display:block;color:var(--mu);font-size:13.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px}
.chs{padding:8px 14px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--mu);background:rgba(100,116,139,.09)}
.chm{padding:26px 18px;text-align:center;color:var(--mu)}
#chhead{padding:12px 16px;border-bottom:1px solid var(--ln);display:flex;gap:10px;align-items:center;font-weight:700;min-height:56px}
#chmsgs{flex:1;overflow:auto;padding:14px 16px;display:flex;flex-direction:column;gap:6px}
.chd{align-self:center;font-size:12px;color:var(--mu);margin:8px 0 2px}
.bub{max-width:min(78%,560px);padding:8px 12px;border-radius:14px;white-space:pre-wrap;overflow-wrap:anywhere;font-size:15.5px;line-height:1.45}
.bub.me{align-self:flex-end;background:#2b61d8;color:#fff;border-bottom-right-radius:4px}
.bub.th{align-self:flex-start;background:#eef2f9;color:#15243f;border-bottom-left-radius:4px}
html[data-theme=dark] .bub.th{background:#1a2943;color:#e2eaff}
.bub small{display:block;font-size:11px;opacity:.7;margin-top:3px;white-space:normal}
.bub .tag,.bub .sn{display:block;font-weight:800;font-size:11px;letter-spacing:.05em;opacity:.85;margin-bottom:2px;text-transform:uppercase}
#chnote{padding:0 14px;font-size:13px;color:var(--bad)}#chnote:not(:empty){padding-bottom:6px}
#chcomp{border-top:1px solid var(--ln);padding:10px 12px;display:flex;gap:8px;align-items:flex-end}
#chtx{flex:1;resize:none;max-height:140px;min-height:44px}
.chp{display:grid;gap:10px;max-width:380px;margin:30px auto;padding:24px;background:var(--card);border:1px solid var(--ln);border-radius:14px;box-shadow:var(--sh)}
.chp p{margin:0;color:var(--mu);font-size:14px}
.cha{padding:10px 14px;border-top:1px solid var(--ln);max-height:55%;overflow:auto}.cha summary{cursor:pointer;font-weight:700}
.cha label{display:flex;gap:8px;align-items:center;margin:6px 0;font-size:14px}.cha .in{margin:6px 0}
.bcl{max-height:120px;overflow:auto;border:1px solid var(--ln);border-radius:8px;padding:2px 10px}
.chb{display:none!important}
@media(max-width:800px){.chat{grid-template-columns:1fr;height:calc(100vh - 250px)}.chat .cht{display:none}.chat.t .cht{display:flex}.chat.t .chl{display:none}.chat.t .chb{display:inline-flex!important}}`;
const st=document.createElement('style');st.textContent=css;document.head.append(st);

const key=()=>isA()?'admin':S.me;
const nm=k=>k=='admin'?'Admin':((AG().find(a=>a.k==k)||{}).name||k);
const jk=t=>{try{return JSON.parse(atob(t.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).app_metadata?.agent_key||null}catch(e){return null}};
const tm=d=>new Date(d).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),
 dy=d=>{const x=new Date(d);return x.toDateString()==new Date().toDateString()?'Today':x.toLocaleDateString([],{weekday:'short',day:'numeric',month:'short'})},
 when=d=>d?(new Date(d).toDateString()==new Date().toDateString()?tm(d):new Date(d).toLocaleDateString([],{day:'numeric',month:'short'})):'';
const errMsg=m=>/private_chats_disabled/.test(m)?'Private chats between agents are switched off by the admin.':/slow_down/.test(m)?'You are sending messages too fast. Wait a moment.':/not_signed_in|jwt/i.test(m)?'Your Messages session ended. Log out and back in.':/admin_only/.test(m)?'Only the admin can do that.':'That could not be sent. Try again.';

/* ---------- connection ---------- */
const sdk=()=>window.supabase?Promise.resolve():new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js';s.onload=ok;s.onerror=()=>no(new Error('sdk'));document.head.append(s)});
async function client(){await sdk();return CH.sb||(CH.sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{storage:sessionStorage,storageKey:SK,persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}}))}
function stop(){clearInterval(CH.poll);if(CH.rt&&CH.sb){try{CH.sb.removeChannel(CH.rt)}catch(e){}}CH.rt=null;Object.assign(CH,{convs:[],unread:{},total:0,msgs:{},active:null})}
function chatAuth(role,k,p){return CH.pending=(async()=>{stop();CH.state='auth';CH.err='';ui();
 try{try{sessionStorage.removeItem(SK)}catch(e){}
  const r=await fetch(SB_URL+'/functions/v1/metro-login',{method:'POST',headers:{'Content-Type':'application/json',apikey:SB_KEY,Authorization:'Bearer '+SB_KEY},body:JSON.stringify({role,k,password:p})});
  let j={};try{j=await r.json()}catch(e){}
  if(!r.ok){if(j.error=='default_password'){CH.state='default';CH.err=''}else{CH.state='error';CH.err=j.error=='disabled'?'This account is disabled.':j.error=='wrong'?'Messages could not verify your password.':(!j.error&&r.status==401)?'Messages are not set up yet. In Supabase, open Edge Functions, then metro-login, and turn off "Verify JWT".':'Messages are unavailable right now. Try again in a minute.'}return ui()}
  const sb=await client(),{error}=await sb.auth.setSession({access_token:j.access_token,refresh_token:j.refresh_token});if(error)throw error;
  await init()}catch(e){CH.state='error';CH.err='Messages could not start. Check your internet and try again.';ui()}})()}
function boot(){if(CH.pending||!S.role)return;CH.pending=(async()=>{try{const sb=await client(),{data}=await sb.auth.getSession(),s=data&&data.session;
 if(s&&jk(s.access_token)==key()){await init();return}
 if(s)await sb.auth.signOut({scope:'local'});CH.state='needauth';ui()}catch(e){CH.state='needauth';ui()}})()}
async function init(){const sb=CH.sb,{data}=await sb.auth.getSession(),s=data&&data.session;if(!s)throw new Error('nosession');CH.me=jk(s.access_token)||key();sb.realtime.setAuth(s.access_token);
 await load();CH.state='ok';
 CH.rt=sb.channel('mt-live').on('postgres_changes',{event:'INSERT',schema:'public',table:'messages'},soon).on('postgres_changes',{event:'*',schema:'public',table:'settings'},soon).subscribe();
 clearInterval(CH.poll);CH.poll=setInterval(()=>{if(!document.hidden)load()},20000);ui()}
let tmr=0;const soon=()=>{clearTimeout(tmr);tmr=setTimeout(load,250)};

/* ---------- data ---------- */
const tot=()=>{CH.total=Object.values(CH.unread).reduce((t,n)=>t+n,0);badge()};
async function thread(cid,mark){const {data,error}=await CH.sb.from('messages').select('*').eq('conversation_id',cid).order('created_at',{ascending:false}).limit(200);if(error)return;CH.msgs[cid]=data.reverse();
 const c=CH.convs.find(x=>x.id==cid);if(mark&&c&&(c.user_a==CH.me||c.user_b==CH.me)&&CH.unread[cid]>0&&S.tab=='chat'&&!document.hidden){await CH.sb.rpc('mark_read',{p_conv:cid});CH.unread[cid]=0}}
async function load(){const sb=CH.sb;if(!sb)return;if(CH.loading){CH.again=true;return}CH.loading=true;
 try{const [c,u,s]=await Promise.all([sb.from('conversations').select('*').order('last_at',{ascending:false,nullsFirst:false}).limit(500),sb.rpc('my_unread'),sb.from('settings').select('private_chats').eq('id',1).maybeSingle()]);
  if(c.error){if(/jwt|expired|PGRST301/i.test((c.error.message||'')+(c.error.code||''))){CH.state='needauth';ui()}return}
  CH.convs=c.data||[];CH.unread={};(u.data||[]).forEach(r=>CH.unread[r.conversation_id]=+r.n);if(s.data)CH.priv=s.data.private_chats;
  const A=CH.active;if(A){if(!A.cid&&A.peer){const o=[CH.me,A.peer].sort(),f=CH.convs.find(x=>x.user_a==o[0]&&x.user_b==o[1]);if(f)A.cid=f.id}if(A.cid)await thread(A.cid,true)}
  tot();ui()}catch(e){}finally{CH.loading=false;if(CH.again){CH.again=false;soon()}}}
async function open(cid,peer){const me=CH.me;let c=cid&&CH.convs.find(x=>x.id==cid);
 if(!c&&peer){const o=[me,peer].sort();c=CH.convs.find(x=>x.user_a==o[0]&&x.user_b==o[1])}
 const own=!c||c.user_a==me||c.user_b==me,other=c?(c.user_a==me?c.user_b:c.user_a):peer;
 CH.active={cid:c?c.id:null,peer:own?other:null,title:own?nm(other):nm(c.user_a)+' ↔ '+nm(c.user_b)};paint();
 if(c){await thread(c.id,true);tot();paint()}}
async function send(){const tx=$('#chtx'),body=tx.value.trim(),A=CH.active;if(!body||!A||!A.peer||CH.busy)return;
 CH.busy=true;$('#chsend').disabled=true;const {data,error}=await CH.sb.rpc('send_message',{p_peer:A.peer,p_body:body});CH.busy=false;$('#chsend').disabled=false;
 if(error){CH.note=errMsg(error.message||'');return paint()}
 tx.value='';CH.draft='';CH.note='';A.cid=data.conversation_id;await load();const m=$('#chmsgs');if(m)m.scrollTop=m.scrollHeight}
async function broadcast(){const tx=$('#bctx'),n=$('#bcn'),body=tx.value.trim(),ks=[...document.querySelectorAll('.bcr:checked')].map(x=>x.value);
 if(!body)return n.textContent='Write a message first.';if(!ks.length)return n.textContent='Pick at least one agent.';
 if(!confirm('Send this message to '+ks.length+' agent'+(ks.length==1?'':'s')+'?'))return;
 n.textContent='Sending…';const {error}=await CH.sb.rpc('send_broadcast',{p_to:ks.map(k=>({k,name:nm(k)})),p_body:body});
 if(error)return n.textContent=errMsg(error.message||'');tx.value='';n.textContent='Sent to '+ks.length+' agent'+(ks.length==1?'':'s')+'.';await load()}
async function setPriv(t){const {error}=await CH.sb.rpc('set_private_chats',{p_on:t.checked});if(error){t.checked=!t.checked;CH.note=errMsg(error.message||'');paint()}else{CH.priv=t.checked;CH.note=''}}

/* ---------- screen ---------- */
function badge(){const b=document.querySelector('#tabs [data-t=chat]');if(!b)return;let s=b.querySelector('.nbadge');
 if(CH.total>0){if(!s){s=document.createElement('span');s.className='nbadge';b.append(s)}s.textContent=CH.total>99?'99+':CH.total}else if(s)s.remove()}
function status(){const s=CH.state;
 if(s=='default')return `<div class=chp><b>Choose your own password first</b><p>Everyone knows the default password, so Messages stay locked until you set one of your own.</p><button class=btn id=chpwd>Change my password</button></div>`;
 if(s=='needauth'||s=='error')return `<div class=chp><b>${s=='error'?'Messages unavailable':'Open Messages'}</b><p${CH.err?' style="color:var(--bad)"':''}>${esc(CH.err||'For your security, enter your password to open Messages.')}</p><input class=in id=chpw type=password placeholder="Password" autocomplete=current-password><button class=btn id=chgo>Open Messages</button></div>`;
 return '<div class=chm>Connecting to Messages…</div>'}
const opts=()=>{const me=CH.me,ad=me=='admin',off=!ad&&!CH.priv;let o='<option value="">Start a new chat…</option>';if(!ad)o+='<option value=admin>Admin</option>';
 AG().filter(a=>a.k!=me&&!a.off).forEach(a=>o+=`<option value=${a.k}${off?' disabled':''}>${esc(a.name)}${off?' (off)':''}</option>`);return o};
function shell(){const ad=CH.me=='admin';
 const tools=ad?`<details class=cha><summary>Admin tools</summary><label><input type=checkbox id=chpriv> Allow private chats between agents</label>
<p class=note style="padding:0 0 6px">When off, agents can only message the admin.</p><b>Broadcast to agents</b>
<label><input type=checkbox id=bcall checked> All agents</label><div class=bcl>${AG().filter(a=>!a.off).map(a=>`<label><input type=checkbox class=bcr value=${a.k} checked> ${esc(a.name)}</label>`).join('')}</div>
<textarea class=in id=bctx rows=3 maxlength=4000 placeholder="Message to send…"></textarea><div style="display:flex;gap:10px;align-items:center"><button class="btn s" id=bcsend>Send broadcast</button><span id=bcn class=note style="padding:0"></span></div></details>`:'';
 return `<div class=chat><aside class=chl><div class=chlh><b>Messages</b><select class=in id=chpick>${opts()}</select></div><div id=chlist></div>${tools}</aside>
<section class=cht><div id=chhead></div><div id=chmsgs></div><div id=chnote></div><div id=chcomp hidden><textarea class=in id=chtx rows=1 maxlength=4000 placeholder="Type a message…">${esc(CH.draft)}</textarea><button class=btn id=chsend>Send</button></div></section></div>`}
function ui(){const r=$('#chatroot');badge();if(!r)return;
 if(CH.state!='ok'){r.dataset.mode='x';r.dataset.sk='';r.innerHTML=status();return}
 const sk=CH.me+'|'+(CH.me=='admin'?'':CH.priv);if(r.dataset.mode!='ok'||r.dataset.sk!=sk){r.dataset.mode='ok';r.dataset.sk=sk;r.innerHTML=shell()}paint()}
function paint(){const me=CH.me,A=CH.active,L=$('#chlist');if(!L)return;
 const mine=[],oth=[];CH.convs.forEach(c=>(c.user_a==me||c.user_b==me?mine:oth).push(c));
 const row=c=>{const own=c.user_a==me||c.user_b==me,t=own?nm(c.user_a==me?c.user_b:c.user_a):nm(c.user_a)+' ↔ '+nm(c.user_b),n=CH.unread[c.id]||0;
  return `<button class="chi${A&&A.cid==c.id?' on':''}" data-chc="${c.id}"><span class=cr><b>${esc(t)}</b><small>${when(c.last_at)}</small>${n?`<span class=nbadge>${n}</span>`:''}</span><span class=pv>${c.last_sender==me?'You: ':''}${esc(c.last_text||'')}</span></button>`};
 L.innerHTML=(mine.length?mine.map(row).join(''):'<div class=chm>No conversations yet. Start one above.</div>')+(oth.length?`<div class=chs>Agent chats (read only)</div>`+oth.map(row).join(''):'');
 $('.chat').classList.toggle('t',!!A);
 const pv=$('#chpriv');if(pv&&document.activeElement!==pv)pv.checked=CH.priv;
 const hd=$('#chhead'),ml=$('#chmsgs'),cp=$('#chcomp');
 if(!A){hd.innerHTML='<b>Select a conversation</b>';ml.innerHTML='<div class=chm>Pick a conversation on the left, or start a new chat.</div>';ml.dataset.k='';cp.hidden=true;$('#chnote').textContent='';return}
 const ro=!A.peer;hd.innerHTML=`<button class="btn g s chb" data-chback>‹ Back</button><span>${esc(A.title)}${ro?' <small style="color:var(--mu);font-weight:500">· read only</small>':''}</span>`;
 const ms=CH.msgs[A.cid]||[],k=A.cid+'|'+ms.length+'|'+(ms.length?ms[ms.length-1].id:0);
 if(ml.dataset.k!=k){const nb=ml.dataset.c!=String(A.cid)||ml.scrollHeight-ml.scrollTop-ml.clientHeight<90;let h='',last='';
  ms.forEach(m=>{const d=dy(m.created_at);if(d!=last){h+=`<div class=chd>${d}</div>`;last=d}
   h+=`<div class="bub ${m.sender==me?'me':'th'}">${ro?`<span class=sn>${esc(nm(m.sender))}</span>`:''}${m.broadcast_id?'<span class=tag>Announcement</span>':''}${esc(m.body)}<small>${tm(m.created_at)}</small></div>`});
  ml.innerHTML=h||'<div class=chm>No messages yet. Say hello!</div>';ml.dataset.k=k;ml.dataset.c=String(A.cid);if(nb)ml.scrollTop=ml.scrollHeight}
 const blocked=!ro&&me!='admin'&&A.peer!='admin'&&!CH.priv;cp.hidden=ro;$('#chtx').disabled=blocked;$('#chsend').disabled=blocked||CH.busy;
 $('#chnote').textContent=blocked?'Private chats between agents are switched off by the admin.':CH.note}
function mount(){boot();ui();if(CH.state=='ok')load()}

/* ---------- events ---------- */
document.addEventListener('click',e=>{const b=e.target.closest('#chatroot button');if(!b)return;
 if(b.dataset.chc)open(b.dataset.chc);else if(b.dataset.chback){CH.active=null;paint()}
 else if(b.id=='chsend')send();else if(b.id=='bcsend')broadcast();
 else if(b.id=='chgo'){const p=$('#chpw').value;if(p)chatAuth(isA()?'admin':'agent',isA()?null:S.me,p)}
 else if(b.id=='chpwd'){const x=$('#cpw');if(x)x.click()}});
document.addEventListener('keydown',e=>{if(e.key!='Enter'||e.shiftKey)return;const t=e.target;
 if(t.id=='chtx'){e.preventDefault();send()}else if(t.id=='chpw'){e.preventDefault();const g=$('#chgo');if(g)g.click()}});
document.addEventListener('input',e=>{if(e.target.id=='chtx')CH.draft=e.target.value});
document.addEventListener('change',e=>{const t=e.target;
 if(t.id=='chpick'&&t.value){const v=t.value;t.value='';open(null,v)}else if(t.id=='chpriv')setPriv(t);
 else if(t.id=='bcall')document.querySelectorAll('.bcr').forEach(x=>x.checked=t.checked)});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&CH.state=='ok')load()});
document.addEventListener('click',e=>{if(e.target.closest('#out')){try{sessionStorage.removeItem(SK)}catch(x){}}},true);

/* ---------- hooks into the existing page ---------- */
const _render=window.render;
window.render=function(){_render.apply(this,arguments);const tb=$('#tabs');if(!tb||!tb.children.length)return;
 if(!tb.querySelector('[data-t=chat]')){const b=document.createElement('button');b.dataset.t='chat';b.innerHTML=`<span class="nav-ico" aria-hidden="true">${ICON}</span><span>Messages</span>`;tb.insertBefore(b,tb.lastElementChild)}
 const cb=tb.querySelector('[data-t=chat]');cb.className=S.tab=='chat'?'on':'';cb.removeAttribute('aria-current');
 if(S.tab=='chat'){cb.setAttribute('aria-current','page');$('#main').innerHTML='<div id=chatroot></div>';mount()}
 badge()};
const _login=window.login;
window.login=async function(){await _login.apply(this,arguments);const L=window.MT_LOGIN;window.MT_LOGIN=null;if(L&&$('#gate').hidden)chatAuth(L.role,L.k,L.p)};
const _enter=window.enter;
window.enter=function(){const r=_enter.apply(this,arguments);setTimeout(boot,60);return r};
const _cpw=window.changePw;
window.changePw=async function(){const n=$('#pn').value.trim();await _cpw.apply(this,arguments);if(!$('#pdlg').open&&!isA()&&S.me&&n.length>=6)chatAuth('agent',S.me,n)};
if($('#app')&&!$('#app').hidden)setTimeout(()=>{window.render();boot()},0);
})();
