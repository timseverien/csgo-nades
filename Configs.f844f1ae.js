import{h as r}from"./chunks/e3b0c442.50e1f76f.js";import{e,F as i,V as n}from"./chunks/index.dcee2b4b.js";import"./chunks/preact.module.79f7e9d4.js";const a=({children:t,component:o="div"})=>e(o,{class:r.container,children:t}),l=`
alias "+jumpthrow" "+jump;-attack";
alias "-jumpthrow" "-jump";
bind alt "+jumpthrow"
`.trim(),s=`
bot_kick
ammo_grenade_limit_total 5
mp_autoteambalance 0
mp_buy_anywhere 1
mp_buytime 9999
mp_freezetime 0
mp_limitteams 0
mp_maxmoney 60000
mp_respawn_on_death_ct 1
mp_respawn_on_death_t 1
mp_roundtime 60
mp_roundtime_defuse 60
mp_startmoney 60000
mp_warmup_end
sv_cheats 1
sv_grenade_trajectory 1
sv_grenade_trajectory_time 15
sv_infinite_ammo 1
sv_showimpacts 1
sv_showimpacts_time 10

bind ] sv_rethrow_last_grenade
bind x noclip
`.trim(),m=()=>e(a,{component:"main",children:e(i,{children:[e("h1",{children:[e(n,{children:"Counter-Strike: Global Offensive"})," Configs for nades"]}),e("h2",{children:"Jump throw bind"}),e("p",{children:"Timing your throw while you jump is pretty hard. Not with this config! This lets you bind a button to perform a jump throw."}),e("h3",{children:"Usage:"}),e("ul",{children:[e("li",{children:"Pick the util you wish to throw"}),e("li",{children:"Hold down your mouse button to get ready to throw \u2014 but don\u2019t release it yet!"}),e("li",{children:["Press ",e("code",{children:"alt"})," to jump and release the nade"]})]}),e("pre",{children:e("code",{children:l})}),e("h2",{children:"Practise nades"}),e("p",{children:"Want to try some nades out without wasting valuable utils mid-match? The config below removes all distractions and temporarily shows the trajectory of your utils \u2014 perfect to tweak your nades or discover new ones!"}),e("h3",{children:"Usage:"}),e("ul",{children:[e("li",{children:["After a loading a map, run the config below with"," ",e("code",{children:"exec name_of_your_config_file"})]}),e("li",{children:["Press ",e("code",{children:"]"})," to rethrow the last grenade \u2014 this allows you to observe the trajectory from another angle"]}),e("li",{children:["Press ",e("code",{children:"x"})," to fly around the map"]})]}),e("pre",{children:e("code",{children:s})})]})});export{m as Configs};
