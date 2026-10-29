/* Metro Team · Messages (corporate layout). Loaded by index.html with <script src="chat.js"></script> (last thing before </body>). */
(()=>{
const SB_URL='https://cajmnenfxuelwodsqfoz.supabase.co',SB_KEY='sb_publishable_JHzQ_tMRfK-3InYZZupwQQ_Q9aIKka1',SK='mt-chat-auth',RK='mt-emoji-recent';
const CH={sb:null,state:'idle',err:'',me:null,convs:[],unread:{},total:0,msgs:{},active:null,priv:true,pending:null,poll:0,rt:null,busy:false,loading:false,again:false,note:'',draft:'',pane:'list',q:'',emo:false,cat:'Smileys',fx:new Set(),fxp:{},p0:undefined,c0:undefined,chatOn:(()=>{try{return localStorage.getItem('mt-chaton')==='0'?false:undefined}catch(e){}})()};
const svg=(p,w,x)=>`<svg viewBox="0 0 24 24" width="${w}" height="${w}" fill="none" stroke="${x||'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const ICON=svg('<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12Z"/>',18);
const SMILE=svg('<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4 4 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01" stroke-width="3"/>',22),
 KEYB=svg('<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M7 15h10" stroke-width="2.4"/>',22),
 UP=svg('<path d="M12 19V5M5 12l7-7 7 7"/>',16,'#fff'),
 COMPOSE=svg('<path d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><path d="M18.4 2.6a2 2 0 0 1 2.8 2.8L12 14.6 8 15.4l.8-4Z"/>',18),
 DOTS='<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg>',
 CHEV=svg('<path d="M15 5l-7 7 7 7"/>',20),
 LOCK=svg('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',18),
 BELL=svg('<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',22),
 PEN=svg('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',15);
const EMO=[
 ['😀','Smileys','😀 😃 😄 😁 😆 😅 😂 🤣 🙂 😉 😊 😇 🥰 😍 🤩 😘 😋 😛 😜 🤪 😎 🤓 🥳 😏 😌 😴 🤔 🤗 🤭 🫡 😬 🙄 😮 😢 😭 😤 😡 🥺 😱 🤒 🤕 🥵 🥶 🤯'],
 ['👋','Gestures','👍 👎 👏 🙌 🙏 🤝 👋 ✌️ 🤞 🤟 🤙 👌 🤌 💪 🫶 ✋ 👀 🧠 ☝️ 👆 👇 👉 👈 🫵 💃 🕺 🙋 🙆 🙅 🤷 🤦 🙇'],
 ['❤️','Hearts','❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 ✨ ⭐ 🌟 💫 🔥 💯 ✅ ❌ ⚠️ ❓ ❗ 💬 💭 🔔'],
 ['🎉','Celebrate','🎉 🎊 🥂 🍾 🎂 🎁 🏆 🥇 🥈 🥉 🏅 🎯 🚀 💡 📞 ☎️ 📱 💻 📊 📈 📋 📌 📎 ✏️ 📅 ⏰ 💰 💵 🛡️ 🔑 🔒 📣'],
 ['🐶','Animals','🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐸 🐵 🙈 🐔 🐧 🐦 🦅 🦋 🐝 🐢 🐍 🐘 🦒 🌸 🌹 🌻 🌴 🌳 🍀'],
 ['🍕','Food','🍕 🍔 🍟 🌭 🍗 🍖 🥩 🍚 🍞 🥪 🌮 🍝 🍜 🥗 🍳 🥚 🍎 🍌 🍉 🍊 🍇 🍓 🍍 🥭 🥤 ☕ 🍵 🍺 🍰 🍫 🍪 🍦'],
 ['⚽','Activities','⚽ 🏀 🏈 ⚾ 🎾 🏐 🏓 🥊 🎮 🎧 🎤 🎵 🎶 🎬 📷 🎲 🧩 🏃 🚴 🏊 🧘 🏋️ 🎣'],
 ['🚗','Travel','🚗 🚕 🚌 🚑 🚒 🚓 🏍️ 🚲 ✈️ 🚂 🚢 🏠 🏢 🏥 🏫 🏦 🌍 🌅 🌙 ☀️ ⛅ 🌧️ ⚡ ❄️ 🌈']
].map(c=>({i:c[0],n:c[1],e:c[2].split(' ')}));
const recGet=()=>{try{return JSON.parse(localStorage.getItem(RK))||[]}catch(e){return[]}},
 recAdd=e=>{try{localStorage.setItem(RK,JSON.stringify([e,...recGet().filter(x=>x!=e)].slice(0,24)))}catch(x){}},
 cats=()=>{const r=recGet();return r.length?[{i:'🕘',n:'Recent',e:r},...EMO]:EMO};

const css=`
.nbadge{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 5px;border-radius:99px;background:#e5484d;color:#fff;font-size:11px;font-weight:800;line-height:1;margin-left:2px}
body.inchat #wel,body.inchat .ft{display:none}body.inchat main{padding-top:14px;padding-bottom:20px}
.chat{--ib:#2b61d8;--ir:#f1f4f9;--ig:#6b7a92;--om:#e7efff;--ob:#cddcfb;display:flex;flex-direction:column;height:calc(100dvh - 190px);min-height:460px;background:var(--card);border:1px solid var(--ln);border-radius:12px;overflow:hidden;box-shadow:var(--sh)}
html[data-theme=dark] .chat{--ir:#1a2943;--ig:#9aa5bb;--om:#1f3a73;--ob:#2d4f9a}
.chcols{flex:1;display:grid;grid-template-columns:minmax(290px,340px) minmax(0,1fr);min-height:0}
.chbn{display:flex;align-items:center;gap:8px;padding:9px 16px;font-size:14px;background:#fff7e0;color:#6b4a00;border-bottom:1px solid #efd68a}.chbn[hidden]{display:none}.chbn svg{flex:none}
.chbn.i{background:var(--ir);color:var(--ink);border-bottom-color:var(--ln)}
html[data-theme=dark] .chbn{background:#3a2f12;color:#f2d58a;border-bottom-color:#5b4a1c}html[data-theme=dark] .chbn.i{background:var(--ir);color:var(--ink);border-bottom-color:var(--ln)}
.chl{display:flex;flex-direction:column;min-width:0;min-height:0;border-right:1px solid var(--ln)}
.cht{display:flex;flex-direction:column;min-width:0;min-height:0}
.chlh{padding:14px 14px 8px 16px;display:flex;align-items:center;gap:8px}
.chlh h3{flex:1;margin:0;font-family:var(--disp);font-size:20px;font-weight:700;letter-spacing:-.01em;color:var(--ink)}
.cib{min-width:32px;height:32px;border-radius:8px;border:1px solid var(--ln2);background:var(--card);color:var(--ink);display:grid;place-items:center;cursor:pointer;padding:0}
.cib:hover{background:var(--ir)}.cib.tx{padding:0 12px;font-size:14px;font-weight:600}
.chq{padding:2px 14px 10px}.chq input{width:100%;border:1px solid var(--ln2);outline:0;background:var(--card);border-radius:8px;padding:8px 12px;font:inherit;font-size:15px;color:var(--ink)}.chq input:focus{border-color:var(--ib)}
#chlist{flex:1;overflow:auto;min-height:0}
.chi{display:flex;gap:10px;align-items:center;width:100%;text-align:left;background:none;border:0;border-left:3px solid transparent;padding:10px 14px 10px 13px;cursor:pointer;color:var(--ink);font:inherit}
.chi:hover{background:var(--ir)}.chi.on{background:var(--ir);border-left-color:var(--ib)}
.chi .tx{flex:1;min-width:0}.chi .t1{display:flex;gap:8px;align-items:baseline}
.chi .t1 b{flex:1;font-size:15px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chi .t1 small{color:var(--ig);font-size:12px}
.chi .pv{display:block;color:var(--ig);font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px}
.cbd{min-width:20px;height:20px;padding:0 6px;border-radius:99px;background:var(--ib);color:#fff;font-size:12px;font-weight:700;display:grid;place-items:center;flex:none}
.chs{padding:12px 16px 4px;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--ig)}
.av{width:36px;height:36px;border-radius:50%;flex:none;display:grid;place-items:center;font-weight:700;font-size:13px;background:#e8ecf3;color:#4a5a78}
.av.ad{background:#dfe9ff;color:#1c4fb8}.av.sm{width:30px;height:30px;font-size:11.5px}
html[data-theme=dark] .av{background:#243049;color:#c3cde0}html[data-theme=dark] .av.ad{background:#1f3a73;color:#bcd0f7}
.chh{display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:1px solid var(--ln);min-height:62px}
.chh .hid{display:flex;align-items:center;gap:10px;min-width:0}.chh b{display:block;font-size:16px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chh small{display:block;font-size:13px;color:var(--ig)}
.chb{display:none;align-items:center;border:0;background:none;color:var(--ib);cursor:pointer;padding:6px 4px 6px 0;font:inherit;font-size:15px}
#chmsgs{flex:1;overflow:auto;padding:10px 16px 8px;display:flex;flex-direction:column;min-height:0}
.chd{display:flex;align-items:center;gap:10px;font-size:12px;color:var(--ig);margin:14px 0 8px}.chd::before,.chd::after{content:"";flex:1;border-top:1px solid var(--ln)}.chd b{font-weight:600}
.mrow{display:flex;gap:8px;max-width:84%;margin-top:3px}.mrow.gap{margin-top:12px}.mrow.th{align-self:flex-start}.mrow.me{align-self:flex-end;flex-direction:row-reverse}
.mcol{min-width:0;display:flex;flex-direction:column}.mrow.me .mcol{align-items:flex-end}.sp{width:30px;flex:none}
.mh{display:flex;gap:8px;align-items:baseline;margin:0 2px 3px;font-size:12px;color:var(--ig)}.mh b{color:var(--ink);font-weight:700;font-size:13px}
.mh .tag{padding:0 7px;border-radius:99px;background:#fff1d6;color:#7a5200;font-size:11px;font-weight:700}html[data-theme=dark] .mh .tag{background:#3a2f12;color:#f2d58a}
.mc{padding:8px 12px;border-radius:4px 12px 12px 12px;background:var(--ir);border:1px solid var(--ln);white-space:pre-wrap;overflow-wrap:anywhere;font-size:15.5px;line-height:1.45;color:var(--ink)}
.mrow.me .mc{border-radius:12px 4px 12px 12px;background:var(--om);border-color:var(--ob)}
.bub.jb{background:none;color:inherit;font-size:46px;line-height:1.15;padding:0 4px;white-space:nowrap}
.bub.jb{overflow:visible;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}
.fxe{display:inline-block;margin:0 2px;transform-origin:50% 60%;animation-delay:var(--d,0s);animation-fill-mode:both}
.play .fx-pop{animation:fPop .5s cubic-bezier(.3,1.6,.5,1)}
.play .fx-laugh{animation:fLaugh 1.2s ease-in-out}
.play .fx-smirk{animation:fSmirk 1.4s ease-in-out}
.play .fx-fire{transform-origin:50% 90%;animation:fFire 1.5s ease-in-out}
.play .fx-beat{animation:fBeat 1.2s ease-in-out}
.play .fx-cry{animation:fCry 1.3s ease-in-out}
.play .fx-clap{animation:fClap .9s ease-in-out}
.play .fx-up{transform-origin:30% 80%;animation:fUp .9s cubic-bezier(.3,1.5,.5,1)}
.play .fx-party{animation:fParty 1s cubic-bezier(.3,1.5,.5,1)}
.play .fx-mad{animation:fMad .8s linear}
.play .fx-shock{animation:fShock 1s ease-out}
.play .fx-cold{animation:fCold 1s linear}
.play .fx-sleep{animation:fSleep 2s ease-in-out}
.play .fx-think{animation:fThink 1.6s ease-in-out}
.play .fx-wave{transform-origin:70% 80%;animation:fWave 1.1s ease-in-out}
.play .fx-pray{animation:fPray 1.2s ease-in-out}
.play .fx-cool{animation:fCool .9s cubic-bezier(.3,1.4,.5,1)}
.play .fx-shine{animation:fShine 1.2s ease-in-out}
@keyframes fPop{0%{transform:scale(.4)}100%{transform:none}}
@keyframes fLaugh{0%,100%{transform:none}8%,32%,56%,80%{transform:translateY(-8%) rotate(-14deg) scale(1.18)}20%,44%,68%,92%{transform:translateY(-8%) rotate(14deg) scale(1.18)}}
@keyframes fSmirk{0%,100%{transform:none}25%,65%{transform:translateX(14%) rotate(12deg) scale(1.12)}}
@keyframes fFire{0%,100%{transform:none;filter:none}15%{transform:scale(1.1,1.22) skewX(-5deg);filter:drop-shadow(0 -4px 10px #ff6a00)}30%{transform:scale(.94,1.04) skewX(5deg);filter:drop-shadow(0 -2px 6px #ff9500)}45%{transform:scale(1.12,1.3) skewX(-4deg);filter:drop-shadow(0 -6px 14px #ff4500)}60%{transform:scale(.96,1.08) skewX(4deg);filter:drop-shadow(0 -3px 8px #ff8a00)}80%{transform:scale(1.06,1.18) skewX(-3deg);filter:drop-shadow(0 -4px 10px #ff6a00)}}
@keyframes fBeat{0%,100%{transform:none}14%,42%{transform:scale(1.35)}28%,70%{transform:scale(1)}}
@keyframes fCry{0%,100%{transform:none}10%,30%,50%,70%{transform:translateY(10%) rotate(-5deg)}20%,40%,60%,80%{transform:translateY(0) rotate(5deg)}}
@keyframes fClap{0%,100%{transform:none}10%,30%,50%,70%{transform:scale(1.3)}20%,40%,60%,80%{transform:scale(.88)}}
@keyframes fUp{0%{transform:none}35%{transform:translateY(-18%) rotate(-22deg) scale(1.3)}65%{transform:rotate(6deg) scale(1.1)}100%{transform:none}}
@keyframes fParty{0%{transform:scale(.5) rotate(0)}40%{transform:scale(1.4) rotate(-18deg)}60%{transform:scale(1.2) rotate(14deg)}80%{transform:rotate(-6deg)}100%{transform:none}}
@keyframes fMad{0%,100%{transform:none;filter:none}10%,50%,90%{transform:translateX(-7%) scale(1.1);filter:drop-shadow(0 0 8px #ff3b30)}30%,70%{transform:translateX(7%) scale(1.1);filter:drop-shadow(0 0 8px #ff3b30)}}
@keyframes fShock{0%{transform:scale(1)}15%{transform:scale(1.55)}30%,50%,70%{transform:scale(1.4) translateX(-3%)}40%,60%,80%{transform:scale(1.4) translateX(3%)}100%{transform:none}}
@keyframes fCold{0%,100%{transform:none}10%,30%,50%,70%,90%{transform:translateX(-4%)}20%,40%,60%,80%{transform:translateX(4%)}}
@keyframes fSleep{0%,100%{transform:none}50%{transform:rotate(-12deg) translateY(8%) scale(.94)}}
@keyframes fThink{0%,100%{transform:none}30%{transform:rotate(-12deg) translateY(-4%)}70%{transform:rotate(10deg) translateY(-4%)}}
@keyframes fWave{0%,100%{transform:none}15%,45%,75%{transform:rotate(22deg)}30%,60%,90%{transform:rotate(-18deg)}}
@keyframes fPray{0%,100%{transform:none}25%,65%{transform:translateY(-12%) scale(1.18)}45%{transform:none}}
@keyframes fCool{0%{transform:translateY(-45%) rotate(-8deg)}60%{transform:translateY(8%)}100%{transform:none}}
@keyframes fShine{0%,100%{transform:none}50%{transform:rotate(180deg) scale(1.35)}}
@media(prefers-reduced-motion:reduce){.play .fxe{animation:none}}
.chdl{align-self:flex-end;font-size:12px;color:var(--ig);margin:3px 2px 0}
.chm{margin:auto;padding:26px 18px;text-align:center;color:var(--ig);font-size:16px}.chm small{font-size:14px}
#chnote{padding:0 16px;font-size:13px;color:var(--bad)}#chnote:not(:empty){padding-bottom:6px}
#chcomp{padding:8px 16px 12px;flex:none}#chcomp[hidden]{display:none}
.cbox{border:1px solid var(--ln2);border-radius:10px;background:var(--card)}.cbox:focus-within{border-color:var(--ib);box-shadow:0 0 0 3px rgba(43,97,216,.14)}.cbox.off{background:var(--ir)}
#chtx{display:block;width:100%;border:0;outline:0;resize:none;background:none;color:var(--ink);font:inherit;font-size:15.5px;line-height:1.4;padding:10px 12px 4px;max-height:120px;min-height:44px;overflow-y:auto}
.ctb{display:flex;align-items:center;gap:6px;padding:4px 8px 8px}
.cemo{width:32px;height:32px;border:0;border-radius:8px;background:none;color:var(--ig);display:grid;place-items:center;cursor:pointer;padding:0}.cemo:hover{background:var(--ir)}
#chsend{border:0;background:var(--ib);color:#fff;border-radius:8px;padding:7px 18px;font-weight:600;font-size:14px;cursor:pointer}#chsend:disabled{background:rgba(120,130,150,.3);cursor:default}
#chemo{height:270px;flex:none;display:flex;flex-direction:column;border-top:1px solid var(--ln);background:var(--card)}#chemo[hidden]{display:none}
.egrid{flex:1;overflow:auto;padding:8px 10px;display:grid;grid-template-columns:repeat(auto-fill,minmax(42px,1fr));align-content:start;gap:2px}
.egrid button{border:0;background:none;font-size:28px;line-height:1;padding:6px 0;cursor:pointer;border-radius:8px}.egrid button:hover{background:rgba(120,130,150,.18)}
.elab{grid-column:1/-1;font-size:12px;font-weight:700;color:var(--ig);padding:4px 4px 2px;text-transform:uppercase;letter-spacing:.05em}
.etabs{display:flex;border-top:1px solid var(--ln);overflow-x:auto}
.etabs button{flex:1;min-width:44px;border:0;border-bottom:2px solid transparent;background:none;font-size:20px;padding:8px 0;cursor:pointer;opacity:.45}.etabs button.on{opacity:1;border-bottom-color:var(--ib)}
.cadm{padding:4px 18px 18px}.cadm h4{margin:18px 0 4px;font-size:13px;color:var(--ig);text-transform:uppercase;letter-spacing:.05em;font-family:inherit}
.crow{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--ln);font-size:16px}.crow small{display:block;color:var(--ig);font-size:13px;margin-top:2px}
.sw{-webkit-appearance:none;appearance:none;width:51px;height:31px;border-radius:99px;background:rgba(120,130,150,.35);position:relative;cursor:pointer;flex:none;border:0;transition:background .2s}
.sw::after{content:"";position:absolute;top:2px;left:2px;width:27px;height:27px;border-radius:50%;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.3);transition:left .2s}.sw:checked{background:#34c759}.sw:checked::after{left:22px}
.bcl{max-height:130px;overflow:auto;margin:6px 0;border:1px solid var(--ln);border-radius:10px;padding:2px 12px}.bcl label{display:flex;gap:8px;align-items:center;padding:5px 0;font-size:15px}
.cadm .in{font-size:16px;margin-top:6px}.brow{display:flex;gap:10px;align-items:center;margin-top:8px}#bcn{font-size:13px;color:var(--ig)}
.chp{display:grid;gap:10px;max-width:380px;margin:30px auto;padding:24px;background:var(--card);border:1px solid var(--ln);border-radius:16px;box-shadow:var(--sh)}.chp p{margin:0;color:var(--mu);font-size:14px}
.ped{align-self:center;border:0;background:none;color:var(--ig);width:26px;height:26px;border-radius:6px;display:grid;place-items:center;cursor:pointer;padding:0;opacity:0;flex:none}
.mrow:hover .ped,.ped:focus-visible{opacity:1}.ped:hover{background:var(--ir);color:var(--ink)}@media(hover:none){.ped{opacity:.55}}
.ed{margin-left:8px;font-size:11px;color:var(--ig);white-space:nowrap}
.chedit{display:flex;align-items:center;gap:10px;padding:6px 10px;margin-bottom:6px;border-left:3px solid var(--ib);background:var(--ir);border-radius:6px;font-size:13px;color:var(--ig)}.chedit[hidden]{display:none}.chedit span{flex:1;font-weight:600}
.chedit button{border:0;background:none;color:var(--ib);font-weight:600;cursor:pointer;font-size:13px}
#chtoast{position:fixed;top:88px;right:16px;z-index:80;width:min(350px,calc(100vw - 32px));display:flex;gap:10px;align-items:flex-start;padding:12px 12px 12px 14px;background:var(--card);color:var(--ink);border:1px solid var(--ln2);border-left:4px solid #d7a744;border-radius:10px;box-shadow:var(--sh2);opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .2s,transform .2s;font-size:14px;line-height:1.4;cursor:pointer}
#chtoast.on{opacity:1;transform:none;pointer-events:auto}#chtoast.ok{border-left-color:#16845b}
#chtoast .ti{color:#b7791f;flex:none;margin-top:1px}#chtoast.ok .ti{color:#16845b}#chtoast .tt{flex:1;color:var(--mu)}#chtoast b{display:block;color:var(--ink);font-size:15px;margin-bottom:2px}
#chtoast button{border:0;background:none;color:var(--mu);font-size:20px;line-height:1;cursor:pointer;padding:0 2px}
@media(max-width:800px){.chat{height:calc(100dvh - 150px)}.chcols{grid-template-columns:1fr}.chat .cht{display:none}.chat.t .cht{display:flex}.chat.t .chl{display:none}.chat.t .chb{display:inline-flex}#chemo{height:250px}.mrow{max-width:92%}#chtoast{top:80px}}
@media(prefers-reduced-motion:reduce){#chtoast{transition:none}}`;
const st=document.createElement('style');st.textContent=css;document.head.append(st);

const key=()=>isA()?'admin':S.me;
const nm=k=>k=='admin'?'Admin':((AG().find(a=>a.k==k)||{}).name||k);
const ini=n=>{const w=String(n).trim().split(/\s+/);return((w[0]||'?')[0]+(w.length>1?w[w.length-1][0]:'')).toUpperCase()};
const av=(k,z)=>`<span class="av${k=='admin'?' ad':''}${z?' '+z:''}">${esc(ini(nm(k)))}</span>`;
const jk=t=>{try{return JSON.parse(atob(t.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).app_metadata?.agent_key||null}catch(e){return null}};
const tm=d=>new Date(d).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),
 sd=(a,b)=>a.toDateString()==b.toDateString(),
 dy=d=>{const x=new Date(d),n=new Date(),y=new Date(n.getFullYear(),n.getMonth(),n.getDate()-1);return sd(x,n)?'Today':sd(x,y)?'Yesterday':x.toLocaleDateString([],{weekday:'short',day:'numeric',month:'short'})},
 when=d=>{if(!d)return'';const x=new Date(d),n=new Date(),days=(new Date(n.getFullYear(),n.getMonth(),n.getDate())-new Date(x.getFullYear(),x.getMonth(),x.getDate()))/864e5;return days<1?tm(d):days<2?'Yesterday':days<7?x.toLocaleDateString([],{weekday:'long'}):x.toLocaleDateString([],{day:'numeric',month:'short'})},
 jumbo=b=>{const t=b.trim();if(!/^[\p{Extended_Pictographic}\u200d\ufe0f\p{Emoji_Modifier}\s]+$/u.test(t))return false;const s=t.replace(/\s/g,''),n=window.Intl&&Intl.Segmenter?[...new Intl.Segmenter().segment(s)].length:[...s].length;return n>0&&n<=3};
const FXS={laugh:'😂 🤣 😆 😄 😁 😀 😃 😹',smirk:'😏',fire:'🔥 🥵',beat:'❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💕 💞 💓 💗 💖 💘 💝 😍 🥰 😘',cry:'😭 😢 🥺',clap:'👏 🙌',up:'👍 👌 💪 🤝',party:'🎉 🎊 🥳 🏆 🥇 🚀',mad:'😡 😤',shock:'😱 😮 🤯',cold:'🥶',sleep:'😴',think:'🤔 🙄 🧠',wave:'👋 🤟 🤙',pray:'🙏',cool:'😎 🤓',shine:'✨ ⭐ 🌟 💫 💯'},FXM={},fxc=g=>g.replace(/[\ufe0f\u{1F3FB}-\u{1F3FF}]/gu,'');
Object.entries(FXS).forEach(([k,v])=>v.split(' ').forEach(e=>FXM[fxc(e)]=k));
const fxHtml=b=>{const t=b.trim().replace(/\s+/g,''),gs=window.Intl&&Intl.Segmenter?[...new Intl.Segmenter().segment(t)].map(x=>x.segment):[...t];return gs.map((g,i)=>`<span class="fxe fx-${FXM[fxc(g)]||'pop'}" style="--d:${i*.18}s">${g}</span>`).join('')};
const errMsg=m=>/cannot_edit/.test(m)?'You can only edit your own messages.':/edit_message|PGRST202|schema cache/.test(m)?'Editing needs the one-time Supabase update. Ask your admin.':/private_chats_disabled/.test(m)?'Private chats between agents are switched off by the admin.':/slow_down/.test(m)?'You are sending messages too fast. Wait a moment.':/not_signed_in|jwt/i.test(m)?'Your Messages session ended. Log out and back in.':/admin_only/.test(m)?'Only the admin can do that.':'That could not be sent. Try again.';

/* ---------- connection ---------- */
const sdk=()=>window.supabase?Promise.resolve():new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js';s.onload=ok;s.onerror=()=>no(new Error('sdk'));document.head.append(s)});
async function client(){await sdk();return CH.sb||(CH.sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{storage:sessionStorage,storageKey:SK,persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}}))}
function stop(){clearInterval(CH.poll);if(CH.rt&&CH.sb){try{CH.sb.removeChannel(CH.rt)}catch(e){}}CH.rt=null;Object.assign(CH,{convs:[],unread:{},total:0,msgs:{},active:null,pane:'list',q:'',fx:new Set(),fxp:{},p0:undefined,c0:undefined,edit:null})}
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
 CH.rt=sb.channel('mt-live').on('postgres_changes',{event:'*',schema:'public',table:'messages'},soon).on('postgres_changes',{event:'*',schema:'public',table:'settings'},soon).subscribe();
 clearInterval(CH.poll);CH.poll=setInterval(()=>{if(!document.hidden)load()},20000);ui()}
let tmr=0;const soon=()=>{clearTimeout(tmr);tmr=setTimeout(load,250)};

/* ---------- data ---------- */
const tot=()=>{CH.total=Object.values(CH.unread).reduce((t,n)=>t+n,0);badge()};
async function thread(cid,mark){const {data,error}=await CH.sb.from('messages').select('*').eq('conversation_id',cid).order('created_at',{ascending:false}).limit(200);if(error)return;CH.msgs[cid]=data.reverse();if(!CH.fxp[cid]){CH.fxp[cid]=1;data.forEach(m=>CH.fx.add(m.id))}
 const c=CH.convs.find(x=>x.id==cid);if(mark&&c&&(c.user_a==CH.me||c.user_b==CH.me)&&CH.unread[cid]>0&&S.tab=='chat'&&!document.hidden){await CH.sb.rpc('mark_read',{p_conv:cid});CH.unread[cid]=0}}
async function load(){const sb=CH.sb;if(!sb)return;if(CH.loading){CH.again=true;return}CH.loading=true;
 try{const [c,u,s]=await Promise.all([sb.from('conversations').select('*').order('last_at',{ascending:false,nullsFirst:false}).limit(500),sb.rpc('my_unread'),sb.from('settings').select('*').eq('id',1).maybeSingle()]);
  if(c.error){if(/jwt|expired|PGRST301/i.test((c.error.message||'')+(c.error.code||''))){CH.state='needauth';ui()}return}
  CH.convs=c.data||[];CH.unread={};(u.data||[]).forEach(r=>CH.unread[r.conversation_id]=+r.n);if(s.data){const d=s.data,nv=d.private_chats,pv=CH.p0,co=d.chat_enabled!==false,po=CH.c0;CH.priv=nv;CH.p0=nv;CH.chatOn=co;CH.c0=co;try{localStorage.setItem('mt-chaton',co?'1':'0')}catch(e){}
   if(CH.me!='admin'){if(po!==undefined&&po!==co)toast(co?'ok':'warn',co?'Messages are available again':'Messages switched off by admin',co?'The Messages tab is back.':'The Messages tab has been hidden. Ask your team lead if you need to reach them.');else if(co)privNote(nv,pv)}
   syncTab()}
  const A=CH.active;if(A){if(!A.cid&&A.peer){const o=[CH.me,A.peer].sort(),f=CH.convs.find(x=>x.user_a==o[0]&&x.user_b==o[1]);if(f)A.cid=f.id}if(A.cid)await thread(A.cid,true)}
  tot();ui()}catch(e){}finally{CH.loading=false;if(CH.again){CH.again=false;soon()}}}
async function open(cid,peer){endEdit();const me=CH.me;let c=cid&&CH.convs.find(x=>x.id==cid);
 if(!c&&peer){const o=[me,peer].sort();c=CH.convs.find(x=>x.user_a==o[0]&&x.user_b==o[1])}
 const own=!c||c.user_a==me||c.user_b==me,other=c?(c.user_a==me?c.user_b:c.user_a):peer;
 CH.active={cid:c?c.id:null,peer:own?other:null,title:own?nm(other):nm(c.user_a)+' ↔ '+nm(c.user_b)};CH.pane='list';CH.q='';CH.emo=false;CH.note='';paint();
 if(c){await thread(c.id,true);tot();paint()}}
async function send(){const tx=$('#chtx'),body=tx.value.trim(),A=CH.active;if(!body||!A||!A.peer||CH.busy)return;
 if(CH.edit)return doEdit(body,A);
 CH.busy=true;sync();const {data,error}=await CH.sb.rpc('send_message',{p_peer:A.peer,p_body:body});CH.busy=false;
 if(error){CH.note=errMsg(error.message||'');sync();return paint()}
 tx.value='';CH.draft='';CH.note='';sync();if(!A.cid)CH.fxp[data.conversation_id]=1;A.cid=data.conversation_id;await load();const m=$('#chmsgs');if(m)m.scrollTop=m.scrollHeight}
function endEdit(){if(!CH.edit)return;CH.edit=null;CH.draft=CH.draftBak||'';CH.draftBak='';const tx=$('#chtx');if(tx){tx.value=CH.draft;sync()}}
function startEdit(id){const A=CH.active,m=A&&(CH.msgs[A.cid]||[]).find(x=>String(x.id)==String(id));if(!m||m.sender!=CH.me||m.broadcast_id)return;
 const tx=$('#chtx');if(!CH.edit)CH.draftBak=tx.value;CH.edit={id:m.id};CH.note='';tx.value=m.body;CH.draft=m.body;CH.emo=false;paint();tx.focus();try{tx.setSelectionRange(tx.value.length,tx.value.length)}catch(e){}}
function cancelEdit(){endEdit();CH.note='';paint()}
async function doEdit(body,A){const m=(CH.msgs[A.cid]||[]).find(x=>x.id==CH.edit.id);if(m&&m.body==body)return cancelEdit();
 CH.busy=true;sync();const {error}=await CH.sb.rpc('edit_message',{p_id:CH.edit.id,p_body:body});CH.busy=false;
 if(error){CH.note=errMsg(error.message||'');sync();return paint()}
 CH.edit=null;CH.draft=CH.draftBak||'';CH.draftBak='';const tx=$('#chtx');tx.value=CH.draft;CH.note='';sync();await load()}
async function broadcast(){const tx=$('#bctx'),n=$('#bcn'),body=tx.value.trim(),ks=[...document.querySelectorAll('.bcr:checked')].map(x=>x.value);
 if(!body)return n.textContent='Write a message first.';if(!ks.length)return n.textContent='Pick at least one agent.';
 if(!confirm('Send this message to '+ks.length+' agent'+(ks.length==1?'':'s')+'?'))return;
 n.textContent='Sending…';const {error}=await CH.sb.rpc('send_broadcast',{p_to:ks.map(k=>({k,name:nm(k)})),p_body:body});
 if(error)return n.textContent=errMsg(error.message||'');tx.value='';n.textContent='Sent to '+ks.length+' agent'+(ks.length==1?'':'s')+'.';await load()}
async function setPriv(t){const {error}=await CH.sb.rpc('set_private_chats',{p_on:t.checked});
 if(error){t.checked=!t.checked;CH.note=errMsg(error.message||'');paint()}
 else{CH.priv=t.checked;CH.p0=t.checked;CH.note='';paint();toast(t.checked?'ok':'warn',t.checked?'Private chats turned on':'Private chats turned off',t.checked?'Agents were notified that they can message each other again.':'Agents were notified that the admin switched private chats off. They can still message you.')}}
function toast(kind,title,text){let t=$('#chtoast');if(!t){t=document.createElement('div');t.id='chtoast';t.setAttribute('role','status');document.body.append(t);t.addEventListener('click',()=>t.classList.remove('on'))}
 t.className=kind;t.innerHTML=`<span class=ti>${BELL}</span><span class=tt><b>${esc(title)}</b>${esc(text)}</span><button type=button aria-label="Dismiss">×</button>`;
 requestAnimationFrame(()=>t.classList.add('on'));clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),10000)}
function privNote(nv,pv){let seen='';try{seen=sessionStorage.getItem('mt-privn')||''}catch(e){}
 const off=()=>toast('warn','Private chats turned off by admin','You can no longer message other agents. You can still message the admin.'),
  on=()=>toast('ok','Private chats are back on','You can message other agents again.');
 if(pv===undefined){if(nv===false&&seen!='off')off();else if(nv&&seen=='off')on()}else if(pv!==nv)nv?on():off();
 try{sessionStorage.setItem('mt-privn',nv?'on':'off')}catch(e){}}

const tabOK=()=>isA()||CH.chatOn!==false;
function syncTab(){const has=!!document.querySelector('#tabs [data-t=chat]');if(has!==tabOK()&&$('#app')&&!$('#app').hidden){if(S.tab=='chat'&&!tabOK())S.tab='home';window.render()}}
async function setChatOn(t){const {error}=await CH.sb.rpc('set_chat_enabled',{p_on:t.checked});
 if(error){t.checked=!t.checked;toast('warn','Could not change this setting',/set_chat_enabled|PGRST202|schema cache|not exist/i.test(error.message||'')?'Run the one-time SQL step in Supabase first.':errMsg(error.message||''));return}
 CH.chatOn=t.checked;CH.c0=t.checked;paint();toast(t.checked?'ok':'warn',t.checked?'Messages tab is visible to agents':'Messages tab hidden from agents',t.checked?'Agents can open Messages again.':'The tab disappears for agents within seconds. You can still use it.')}

/* ---------- screen ---------- */
function badge(){const b=document.querySelector('#tabs [data-t=chat]');if(!b)return;let s=b.querySelector('.nbadge');
 if(CH.total>0){if(!s){s=document.createElement('span');s.className='nbadge';b.append(s)}s.textContent=CH.total>99?'99+':CH.total}else if(s)s.remove()}
function status(){const s=CH.state;
 if(s=='default')return `<div class=chp><b>Choose your own password first</b><p>Everyone knows the default password, so Messages stay locked until you set one of your own.</p><button class=btn id=chpwd>Change my password</button></div>`;
 if(s=='needauth'||s=='error')return `<div class=chp><b>${s=='error'?'Messages unavailable':'Open Messages'}</b><p${CH.err?' style="color:var(--bad)"':''}>${esc(CH.err||'For your security, enter your password to open Messages.')}</p><input class=in id=chpw type=password placeholder="Password" autocomplete=current-password><button class=btn id=chgo>Open Messages</button></div>`;
 return '<div class=chm>Connecting to Messages…</div>'}
function shell(){return `<div class=chat><div class=chbn id=chbn hidden></div><div class=chcols><aside class=chl><div class=chlh id=chlh></div><div class=chq id=chqw><input id=chq type=search placeholder="Search" value="${esc(CH.q)}" autocomplete=off></div><div id=chlist></div></aside>
<section class=cht><div class=chh id=chhead></div><div id=chmsgs></div><div id=chnote></div>
<div id=chcomp hidden><div class=chedit id=chedit hidden><span>Editing message</span><button type=button data-edc>Cancel</button></div><div class=cbox id=chbox><textarea id=chtx rows=1 maxlength=4000 placeholder="Type a message">${esc(CH.draft)}</textarea><div class=ctb><button class=cemo id=chemob type=button aria-label="Emoji">${SMILE}</button><span style="flex:1"></span><button id=chsend type=button disabled>Send</button></div></div></div>
<div id=chemo hidden></div></section></div></div>`}
function ui(){const r=$('#chatroot');badge();if(!r)return;
 if(CH.state!='ok'){r.dataset.mode='x';r.dataset.sk='';r.innerHTML=status();return}
 if(r.dataset.mode!='ok'||r.dataset.sk!=CH.me){r.dataset.mode='ok';r.dataset.sk=CH.me;r.innerHTML=shell();CH.emo=false}paint()}
function sync(){const tx=$('#chtx'),sb=$('#chsend');if(!tx)return;tx.style.height='auto';tx.style.height=Math.min(120,tx.scrollHeight)+'px';if(sb)sb.disabled=!tx.value.trim()||tx.disabled||CH.busy}
const sub=k=>{if(k=='admin')return'Team lead';const a=AG().find(x=>x.k==k);return a?'Agent · ID '+a.id:'Agent'};
function people(q){const me=CH.me,ad=me=='admin',off=!ad&&!CH.priv;const L=[];if(!ad)L.push('admin');AG().filter(a=>a.k!=me&&!a.off).forEach(a=>L.push(a.k));
 const f=L.filter(k=>nm(k).toLowerCase().includes(q));
 return f.length?f.map(k=>{const d=off&&k!='admin';return `<button class=chi data-chp="${k}"${d?' disabled style="opacity:.5;cursor:default"':''}>${av(k)}<span class=tx><span class=t1><b>${esc(nm(k))}</b></span><span class=pv>${d?'Private chats are off':esc(sub(k))}</span></span></button>`}).join(''):'<div class=chm>No one found.</div>'}
function convs(q){const me=CH.me,A=CH.active,mine=[],oth=[];
 CH.convs.forEach(c=>{const own=c.user_a==me||c.user_b==me,t=own?nm(c.user_a==me?c.user_b:c.user_a):nm(c.user_a)+' '+nm(c.user_b);if(!t.toLowerCase().includes(q))return;(own?mine:oth).push(c)});
 const row=c=>{const own=c.user_a==me||c.user_b==me,o=own?(c.user_a==me?c.user_b:c.user_a):null,t=own?nm(o):nm(c.user_a)+' ↔ '+nm(c.user_b),n=CH.unread[c.id]||0;
  return `<button class="chi${A&&A.cid==c.id?' on':''}" data-chc="${c.id}">${own?av(o):'<span class=av>↔</span>'}<span class=tx><span class=t1><b${n?' style="font-weight:800"':''}>${esc(t)}</b><small>${when(c.last_at)}</small></span><span class=pv>${c.last_sender==me?'You: ':''}${esc(c.last_text||'')}</span></span>${n?`<span class=cbd>${n}</span>`:''}</button>`};
 return(mine.length?mine.map(row).join(''):`<div class=chm>${q?'No matches.':'No chats yet.<br><small>Use the new chat button to start one.</small>'}</div>`)+(oth.length?`<div class=chs>Agent chats (read only)</div>`+oth.map(row).join(''):'')}
function adminHtml(){return `<div class=cadm><label class=crow><span>Private chats between agents<small>When off, agents get a notice and can only message the admin.</small></span><input type=checkbox class=sw id=chpriv></label>
<label class=crow><span>Messages tab for agents<small>When off, the Messages tab disappears for all agents.</small></span><input type=checkbox class=sw id=chon></label>
<h4>Broadcast to agents</h4><label class=crow><span>All agents</span><input type=checkbox id=bcall checked></label><div class=bcl>${AG().filter(a=>!a.off).map(a=>`<label><input type=checkbox class=bcr value=${a.k} checked> ${esc(a.name)}</label>`).join('')}</div>
<textarea class=in id=bctx rows=3 maxlength=4000 placeholder="Message to send…"></textarea><div class=brow><button class="btn s" id=bcsend type=button>Send broadcast</button><span id=bcn></span></div></div>`}
function paintLeft(){const H=$('#chlh'),B=$('#chlist'),Q=$('#chqw');if(!H)return;const pane=CH.pane,ad=CH.me=='admin';
 H.innerHTML=pane=='list'?`<h3>Chats</h3>${ad?`<button class=cib id=chadm type=button aria-label="Admin tools" title="Admin tools">${DOTS}</button>`:''}<button class=cib id=chnew type=button aria-label="New chat" title="New chat">${COMPOSE}</button>`
  :`<h3>${pane=='new'?'New chat':'Admin tools'}</h3><button class="cib tx" data-chx type=button>${pane=='new'?'Cancel':'Done'}</button>`;
 Q.hidden=pane=='admin';
 if(pane=='admin'){if(B.dataset.p!='admin'){B.innerHTML=adminHtml();B.dataset.p='admin'}const pv=$('#chpriv');if(pv&&document.activeElement!==pv)pv.checked=CH.priv;const co=$('#chon');if(co&&document.activeElement!==co)co.checked=CH.chatOn!==false;return}
 B.dataset.p=pane;const q=CH.q.trim().toLowerCase();B.innerHTML=pane=='new'?people(q):convs(q)}
function emoPaint(){const p=$('#chemo');if(!p)return;const A=CH.active,show=CH.emo&&A&&A.peer;p.hidden=!show;if(!show)return;
 const cs=cats(),c=cs.find(x=>x.n==CH.cat)||cs[0];
 p.innerHTML=`<div class=egrid><div class=elab>${c.n}</div>${c.e.map(e=>`<button type=button data-em="${e}">${e}</button>`).join('')}</div><div class=etabs>${cs.map(x=>`<button type=button data-ec="${x.n}" class="${x===c?'on':''}" aria-label="${x.n}">${x.i}</button>`).join('')}</div>`}
function putEmo(e){const tx=$('#chtx');if(!tx||tx.disabled)return;const a=tx.selectionStart==null?tx.value.length:tx.selectionStart,b=tx.selectionEnd==null?a:tx.selectionEnd;
 tx.value=tx.value.slice(0,a)+e+tx.value.slice(b);const c=a+e.length;try{tx.setSelectionRange(c,c)}catch(x){}CH.draft=tx.value;recAdd(e);sync()}
function banner(){const b=$('#chbn');if(!b)return;const ad=CH.me=='admin',po=!CH.priv,co=CH.chatOn===false,show=ad?(po||co):po;b.hidden=!show;b.className='chbn'+(ad?' i':'');
 if(show)b.innerHTML=LOCK+(ad?'<span>'+[co?'The Messages tab is hidden from agents.':'',po?'Private chats are off. Agents have been notified and can only message you.':''].filter(Boolean).join(' ')+'</span>':'<span>Private chats between agents have been switched off by the admin. You can still message the admin.</span>')}
function paintThread(){const me=CH.me,A=CH.active,hd=$('#chhead'),ml=$('#chmsgs'),cp=$('#chcomp');if(!hd)return;
 if(!A){hd.innerHTML='';ml.innerHTML='<div class=chm>Select a chat<br><small>or use the new chat button to start one.</small></div>';ml.dataset.k='';cp.hidden=true;$('#chemo').hidden=true;$('#chnote').textContent='';return}
 const ro=!A.peer,bk=CH.total-(CH.unread[A.cid]||0);
 hd.innerHTML=`<button class=chb data-chback type=button aria-label="Back">${CHEV}${bk>0?`<span>${bk}</span>`:'<span>Chats</span>'}</button><div class=hid>${ro?'<span class=av>↔</span>':av(A.peer)}<div><b>${esc(A.title)}</b><small>${ro?'Agent chat · read only':esc(sub(A.peer))}</small></div></div>`;
 const ms=CH.msgs[A.cid]||[],k=A.cid+'|'+ms.length+'|'+(ms.length?ms[ms.length-1].id:0)+'|'+ms.reduce((t,m)=>t+(m.edited_at?Date.parse(m.edited_at)%1e9:0),0);
 if(ml.dataset.k!=k){const nb=ml.dataset.c!=String(A.cid)||ml.scrollHeight-ml.scrollTop-ml.clientHeight<90,H=36e5;let h='';
  ms.forEach((m,i)=>{const p=ms[i-1],n=ms[i+1],t=new Date(m.created_at),mine=m.sender==me,
   grp=(a,b)=>a&&b&&a.sender==b.sender&&a.broadcast_id==b.broadcast_id&&(new Date(b.created_at)-new Date(a.created_at))<H,
   newDay=!p||!sd(new Date(p.created_at),t),gap=!p||t-new Date(p.created_at)>=H;
   if(newDay||gap)h+=`<div class=chd><b>${dy(m.created_at)}</b> ${tm(m.created_at)}</div>`;
   const first=!grp(p,m)||newDay,jb=jumbo(m.body),fresh=jb&&!CH.fx.has(m.id);if(jb)CH.fx.add(m.id);
   const head=first?`<div class=mh><b>${mine?'You':esc(nm(m.sender))}</b><span>${tm(m.created_at)}</span>${m.broadcast_id?'<span class=tag>Announcement</span>':''}</div>`:'',
    body=jb?`<div class="bub jb${fresh?' play':''}" title="${tm(m.created_at)}">${fxHtml(m.body)}</div>`:`<div class=mc title="${tm(m.created_at)}">${esc(m.body)}${m.edited_at?'<span class=ed>edited</span>':''}</div>`;
   h+=`<div class="mrow ${mine?'me':'th'}${first?' gap':''}">${mine?'':(first?av(m.sender,'sm'):'<span class=sp></span>')}<div class=mcol>${head}${body}</div>${mine&&!ro&&!m.broadcast_id?`<button class=ped type=button data-edm="${m.id}" title="Edit message" aria-label="Edit message">${PEN}</button>`:''}</div>`;
   if(!n&&mine)h+='<div class=chdl>Delivered</div>'});
  ml.innerHTML=h||'<div class=chm>No messages yet.<br><small>Say hello!</small></div>';ml.dataset.k=k;ml.dataset.c=String(A.cid);if(nb)ml.scrollTop=ml.scrollHeight}
 const blocked=!ro&&me!='admin'&&A.peer!='admin'&&!CH.priv,tx=$('#chtx');cp.hidden=ro;tx.disabled=blocked;tx.placeholder=blocked?'Private chats are switched off':'Type a message';$('#chbox').classList.toggle('off',blocked);$('#chedit').hidden=!CH.edit;$('#chsend').textContent=CH.edit?'Save':'Send';sync();
 $('#chnote').textContent=blocked?'Private chats between agents are switched off by the admin.':CH.note;
 $('#chemob').innerHTML=CH.emo?KEYB:SMILE;emoPaint()}
function paint(){const c=$('.chat');if(!c)return;c.classList.toggle('t',!!CH.active);banner();paintLeft();paintThread()}
function mount(){boot();ui();if(CH.state=='ok')load()}

/* ---------- events ---------- */
document.addEventListener('click',e=>{const b=e.target.closest('#chatroot button');if(!b)return;const q=$('#chq');
 if(b.dataset.chc)open(b.dataset.chc);
 else if(b.dataset.chp){if(!b.disabled)open(null,b.dataset.chp)}
 else if(b.dataset.chback){CH.active=null;CH.emo=false;paint()}
 else if(b.id=='chnew'){CH.pane='new';CH.q='';if(q)q.value='';paint()}
 else if(b.id=='chadm'){CH.pane='admin';paint()}
 else if(b.dataset.chx){CH.pane='list';CH.q='';if(q)q.value='';paint();$('#chlist').dataset.p=''}
 else if(b.id=='chsend')send();
 else if(b.id=='chemob'){CH.emo=!CH.emo;$('#chemob').innerHTML=CH.emo?KEYB:SMILE;emoPaint();const m=$('#chmsgs');if(m)m.scrollTop=m.scrollHeight;if(CH.emo)$('#chtx').blur();else $('#chtx').focus()}
 else if(b.dataset.em)putEmo(b.dataset.em);
 else if(b.dataset.ec){CH.cat=b.dataset.ec;emoPaint()}
 else if(b.dataset.edm)startEdit(b.dataset.edm);
 else if(b.dataset.edc)cancelEdit();
 else if(b.id=='bcsend')broadcast();
 else if(b.id=='chgo'){const p=$('#chpw').value;if(p)chatAuth(isA()?'admin':'agent',isA()?null:S.me,p)}
 else if(b.id=='chpwd'){const x=$('#cpw');if(x)x.click()}});
document.addEventListener('click',e=>{const b=e.target.closest('#chatroot .bub.jb');if(!b)return;b.classList.remove('play');void b.offsetWidth;b.classList.add('play')});
document.addEventListener('keydown',e=>{if(e.key!='Enter'||e.shiftKey)return;const t=e.target;
 if(t.id=='chtx'){if(matchMedia('(pointer:coarse)').matches)return;e.preventDefault();send()}
 else if(t.id=='chpw'){e.preventDefault();const g=$('#chgo');if(g)g.click()}});
document.addEventListener('keydown',e=>{if(e.key=='Escape'&&CH.edit&&e.target.id=='chtx')cancelEdit()});
document.addEventListener('input',e=>{const t=e.target;if(t.id=='chtx'){CH.draft=t.value;sync()}else if(t.id=='chq'){CH.q=t.value;paintLeft()}});
document.addEventListener('change',e=>{const t=e.target;
 if(t.id=='chpriv')setPriv(t);else if(t.id=='chon')setChatOn(t);else if(t.id=='bcall')document.querySelectorAll('.bcr').forEach(x=>x.checked=t.checked)});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&CH.state=='ok')load()});
document.addEventListener('click',e=>{if(e.target.closest('#out')){try{sessionStorage.removeItem(SK)}catch(x){}}},true);

/* ---------- hooks into the existing page ---------- */
const _render=window.render;
window.render=function(){if(S.tab=='chat'&&!tabOK())S.tab='home';_render.apply(this,arguments);document.body.classList.toggle('inchat',S.tab=='chat');const tb=$('#tabs');if(!tb||!tb.children.length)return;
 if(!tabOK())return badge();
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
