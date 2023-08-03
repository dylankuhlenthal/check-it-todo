import{_ as g,a as x}from"./LoadingBar.0f46e11b.js";import{o,c as r,j as u,a as e,s as k,r as b,t as w,f as d,m as y,T as $,C as B,D as C,b as t,w as h,n as M,F as j}from"./entry.1f5a721a.js";import{_ as A}from"./nuxt-link.5b028e57.js";import{a as f}from"./userStore.09bcc8e8.js";const z={class:"w-8 h-8 rounded-full hover:bg-purple-100 flex justify-center items-center cursor-pointer active:bg-purple-200 border border-black bg-white duration-100"},N={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},V=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"},null,-1),S=[V],H={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5"},L=e("path",{"fill-rule":"evenodd",d:"M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z","clip-rule":"evenodd"},null,-1),T=[L],U={key:2,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},O=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),D=[O],F={__name:"NavButton",props:["icon"],setup(l){return(n,a)=>(o(),r("li",z,[l.icon=="clipboard"?(o(),r("svg",N,S)):u("",!0),l.icon=="calendar"?(o(),r("svg",H,T)):u("",!0),l.icon=="check-circle"?(o(),r("svg",U,D)):u("",!0)]))}},R={class:"relative"},E={class:"hidden sm:block"},q=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.7",stroke:"currentColor",class:"w-6 h-6 sm:w-5 sm:h-5 stroke-gray-800 ml-1 group-hover:stroke-purple-600 duration-150"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"})],-1),G={key:0,class:"absolute top-0 left-0 bg-black/10 w-full h-full flex justify-center items-center"},I={id:"side-bar",class:"absolute top-0 right-0 w-60 h-full pt-3 bg-gray-50 shadow-lg"},J=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1),K=[J],P={class:"w-full flex flex-col mb-2"},Q=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-10 h-10 sm:w-10 sm:h-10 stroke-gray-700 mx-auto"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"})],-1),W={class:"uppercase text-xs font-bold text-gray-700 text-center mx-auto"},X={__name:"UserButton",setup(l){const n=f(),{displayName:a}=k(n),c=b(!1);return(v,s)=>(o(),r("div",R,[e("div",{onClick:s[0]||(s[0]=i=>c.value=!0),class:"text-xs text-gray-800 hover:text-purple-600 uppercase font-bold select-none flex justify-center items-center px-2 py-1 rounded border-transparent cursor-pointer duration-150 group"},[e("span",E,w(d(a)),1),q]),(o(),y($,{to:"body"},[d(c)?(o(),r("div",G,[e("div",I,[(o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-7 h-7 p-1 absolute top-1 right-[208px] hover:bg-gray-100 active:bg-gray-200 rounded-full cursor-pointer",onClick:s[1]||(s[1]=i=>c.value=!1)},K)),e("div",P,[Q,e("span",W,w(d(a)),1)]),e("ul",null,[e("li",{class:"w-full px-2 py-3 bg-white uppercase text-sm font-bold border-l-transparent border-r-transparent border select-none hover:text-purple-700 hover:shadow-inner duration-150 cursor-pointer",onClick:s[2]||(s[2]=(...i)=>d(n).signOut&&d(n).signOut(...i))}," Sign Out ")])])])):u("",!0)]))]))}},Y={class:"fixed flex justify-between items-center w-full h-14 px-4 bg-gray-100 shadow bg-opacity-90"},Z=e("div",{class:"flex w-1/3 justify-start"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 fill-purple-600"},[e("path",{"fill-rule":"evenodd",d:"M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z","clip-rule":"evenodd"})]),e("h1",{class:"font-bold text-lg sm:text-xl lowercase site-logo"}," Check it ")],-1),ee={class:"flex gap-2"},te={class:"w-1/3 flex justify-end"},oe={class:"w-screen h-screen pt-[60px]"},ae={__name:"default",setup(l){const n=f(),a=B();return C(async()=>{await n.verifyUser()===!1&&a.push("/")}),(c,v)=>{const s=g,i=x,p=F,_=A,m=X;return o(),r(j,null,[t(s),t(i),e("div",null,[e("nav",Y,[Z,e("div",null,[e("ul",ee,[t(_,{to:"/dashboard"},{default:h(()=>[t(p,{icon:"clipboard"})]),_:1}),t(_,{to:"/today"},{default:h(()=>[t(p,{icon:"calendar"})]),_:1}),t(_,{to:"/completed"},{default:h(()=>[t(p,{icon:"check-circle"})]),_:1})])]),e("div",te,[t(m)])])]),e("div",oe,[M(c.$slots,"default")])],64)}}};export{ae as default};
