import{s as N,n as V,b as ne,o as _e,x as pe}from"../chunks/scheduler.BK7OUWki.js";import{S as q,i as A,e as v,c as _,d as b,g as f,n as m,z as Y,j as D,b as J,f as K,k as d,l as W,t as j,r as X,a as $,p as x,o as re,A as ge,v as z,s as L,w as R,h as T,x as B,y as U,m as O,B as be}from"../chunks/index.B2sn9U7M.js";import{e as ae,l as ie,g as ce,a as oe,b as we,c as ke}from"../chunks/ApiService.DcW7cWTv.js";import{w as ve}from"../chunks/index.9_oGSIBb.js";/* empty css                       */function ye(i){let e,s=i[1].lunches[0].type_of_lunch+"",t;return{c(){e=v("p"),t=J(s),this.h()},l(l){e=_(l,"P",{class:!0});var a=b(e);t=K(a,s),a.forEach(f),this.h()},h(){m(e,"class","lunch svelte-6y88je")},m(l,a){D(l,e,a),d(e,t)},p(l,a){a&2&&s!==(s=l[1].lunches[0].type_of_lunch+"")&&W(t,s)},d(l){l&&f(e)}}}function Ee(i){let e,s=i[1].name+"",t;return{c(){e=v("p"),t=J(s),this.h()},l(l){e=_(l,"P",{class:!0});var a=b(e);t=K(a,s),a.forEach(f),this.h()},h(){m(e,"class","name svelte-6y88je")},m(l,a){D(l,e,a),d(e,t)},p(l,a){a&2&&s!==(s=l[1].name+"")&&W(t,s)},d(l){l&&f(e)}}}function Ie(i){let e,s;function t(n,r){return n[3]?Ee:ye}let l=t(i),a=l(i);return{c(){e=v("td"),a.c(),this.h()},l(n){e=_(n,"TD",{id:!0,class:!0});var r=b(e);a.l(r),r.forEach(f),this.h()},h(){m(e,"id",s=i[1].id),m(e,"class","svelte-6y88je"),Y(e,"selectedOut",i[1].id===i[0].id&&i[2]===!1),Y(e,"selected",i[2]===!0&&i[1].id===i[0].id)},m(n,r){D(n,e,r),a.m(e,null)},p(n,[r]){l===(l=t(n))&&a?a.p(n,r):(a.d(1),a=l(n),a&&(a.c(),a.m(e,null))),r&2&&s!==(s=n[1].id)&&m(e,"id",s),r&7&&Y(e,"selectedOut",n[1].id===n[0].id&&n[2]===!1),r&7&&Y(e,"selected",n[2]===!0&&n[1].id===n[0].id)},i:V,o:V,d(n){n&&f(e),a.d()}}}function je(i,e,s){let{user:t}=e,{user_:l}=e,{userScaned:a}=e,{name:n}=e;return i.$$set=r=>{"user"in r&&s(0,t=r.user),"user_"in r&&s(1,l=r.user_),"userScaned"in r&&s(2,a=r.userScaned),"name"in r&&s(3,n=r.name)},i.$$.update=()=>{if(i.$$.dirty&1){const r=document.getElementById(t.id);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}},[t,l,a,n]}class ue extends q{constructor(e){super(),A(this,e,je,Ie,N,{user:0,user_:1,userScaned:2,name:3})}}function fe(i,e,s){const t=i.slice();return t[3]=e[s],t[5]=s,t}function he(i){let e,s,t=ae(i[0]),l=[];for(let n=0;n<t.length;n+=1)l[n]=de(fe(i,t,n));const a=n=>$(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=re()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=re()},m(n,r){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(n,r);D(n,e,r),s=!0},p(n,r){if(r&7){t=ae(n[0]);let c;for(c=0;c<t.length;c+=1){const o=fe(n,t,c);l[c]?(l[c].p(o,r),j(l[c],1)):(l[c]=de(o),l[c].c(),j(l[c],1),l[c].m(e.parentNode,e))}for(X(),c=t.length;c<l.length;c+=1)a(c);x()}},i(n){if(!s){for(let r=0;r<t.length;r+=1)j(l[r]);s=!0}},o(n){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)$(l[r]);s=!1},d(n){n&&f(e),ge(l,n)}}}function de(i){let e,s,t,l,a,n;return s=new ue({props:{user:i[1],user_:i[3],userScaned:i[2],name:!0}}),l=new ue({props:{user:i[1],user_:i[3],userScaned:i[2],name:!1}}),{c(){e=v("tr"),z(s.$$.fragment),t=L(),z(l.$$.fragment),a=L(),this.h()},l(r){e=_(r,"TR",{class:!0});var c=b(e);R(s.$$.fragment,c),t=T(c),R(l.$$.fragment,c),a=T(c),c.forEach(f),this.h()},h(){m(e,"class","svelte-10zwfjg"),Y(e,"alternate",i[5]%2===0)},m(r,c){D(r,e,c),B(s,e,null),d(e,t),B(l,e,null),d(e,a),n=!0},p(r,c){const o={};c&2&&(o.user=r[1]),c&1&&(o.user_=r[3]),c&4&&(o.userScaned=r[2]),s.$set(o);const h={};c&2&&(h.user=r[1]),c&1&&(h.user_=r[3]),c&4&&(h.userScaned=r[2]),l.$set(h)},i(r){n||(j(s.$$.fragment,r),j(l.$$.fragment,r),n=!0)},o(r){$(s.$$.fragment,r),$(l.$$.fragment,r),n=!1},d(r){r&&f(e),U(s),U(l)}}}function De(i){let e,s,t,l=i[0]&&he(i);return{c(){e=v("table"),s=v("tbody"),l&&l.c(),this.h()},l(a){e=_(a,"TABLE",{class:!0});var n=b(e);s=_(n,"TBODY",{class:!0});var r=b(s);l&&l.l(r),r.forEach(f),n.forEach(f),this.h()},h(){m(s,"class","svelte-10zwfjg"),m(e,"class","svelte-10zwfjg")},m(a,n){D(a,e,n),d(e,s),l&&l.m(s,null),t=!0},p(a,[n]){a[0]?l?(l.p(a,n),n&1&&j(l,1)):(l=he(a),l.c(),j(l,1),l.m(s,null)):l&&(X(),$(l,1,1,()=>{l=null}),x())},i(a){t||(j(l),t=!0)},o(a){$(l),t=!1},d(a){a&&f(e),l&&l.d()}}}function Le(i,e,s){let{users:t}=e,{user:l}=e,{userScaned:a}=e;return i.$$set=n=>{"users"in n&&s(0,t=n.users),"user"in n&&s(1,l=n.user),"userScaned"in n&&s(2,a=n.userScaned)},[t,l,a]}class Te extends q{constructor(e){super(),A(this,e,Le,De,N,{users:0,user:1,userScaned:2})}}const G=ve(0),Q=ve(0);function Ve(i){let e,s,t,l,a,n,r="Vydaných <br/> obědů",c,o,h,u,p,g,w="Zbývajících <br/> obědů";return{c(){e=v("div"),s=v("div"),t=v("p"),l=J(i[0]),a=L(),n=v("p"),n.innerHTML=r,c=L(),o=v("div"),h=v("p"),u=J(i[1]),p=L(),g=v("p"),g.innerHTML=w,this.h()},l(y){e=_(y,"DIV",{class:!0});var E=b(e);s=_(E,"DIV",{class:!0});var M=b(s);t=_(M,"P",{class:!0});var H=b(t);l=K(H,i[0]),H.forEach(f),a=T(M),n=_(M,"P",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-o635o0"&&(n.innerHTML=r),M.forEach(f),c=T(E),o=_(E,"DIV",{class:!0});var I=b(o);h=_(I,"P",{class:!0});var Z=b(h);u=K(Z,i[1]),Z.forEach(f),p=T(I),g=_(I,"P",{class:!0,"data-svelte-h":!0}),O(g)!=="svelte-1yglfq2"&&(g.innerHTML=w),I.forEach(f),E.forEach(f),this.h()},h(){m(t,"class","main-content svelte-18a8swc"),m(n,"class","static svelte-18a8swc"),m(s,"class","item svelte-18a8swc"),m(h,"class","main-content svelte-18a8swc"),m(g,"class","static svelte-18a8swc"),m(o,"class","item svelte-18a8swc"),m(e,"class","flex-container svelte-18a8swc")},m(y,E){D(y,e,E),d(e,s),d(s,t),d(t,l),d(s,a),d(s,n),d(e,c),d(e,o),d(o,h),d(h,u),d(o,p),d(o,g)},p(y,[E]){E&1&&W(l,y[0]),E&2&&W(u,y[1])},i:V,o:V,d(y){y&&f(e)}}}function $e(i,e,s){let t,l,a,n;return ne(i,Q,r=>s(2,a=r)),ne(i,G,r=>s(3,n=r)),i.$$.update=()=>{i.$$.dirty&8&&s(1,t=n),i.$$.dirty&4&&s(0,l=a)},[l,t,a,n]}class Se extends q{constructor(e){super(),A(this,e,$e,Ve,N,{})}}function Me(i){let e,s='<i class="fi fi-br-list svelte-1luwmoo"></i> <p>Seznam je prázdný</p>';return{c(){e=v("div"),e.innerHTML=s,this.h()},l(t){e=_(t,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-4aafpf"&&(e.innerHTML=s),this.h()},h(){m(e,"class","static svelte-1luwmoo")},m(t,l){D(t,e,l)},p:V,i:V,o:V,d(t){t&&f(e)}}}class He extends q{constructor(e){super(),A(this,e,null,Me,N,{})}}function Ce(i){let e,s='<i class="fi fi-br-credit-card svelte-1nfjehs"></i> <p class="svelte-1nfjehs">Čeká se na přiložení ISIC karty.</p>';return{c(){e=v("div"),e.innerHTML=s,this.h()},l(t){e=_(t,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1yf1b2c"&&(e.innerHTML=s),this.h()},h(){m(e,"class","item-info-2 item-info svelte-1nfjehs")},m(t,l){D(t,e,l)},p:V,d(t){t&&f(e)}}}function Oe(i){let e,s='<p class="svelte-1nfjehs">Žák neexistuje</p>';return{c(){e=v("div"),e.innerHTML=s,this.h()},l(t){e=_(t,"DIV",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-olpttk"&&(e.innerHTML=s),this.h()},h(){m(e,"class","item-info-3 item-info svelte-1nfjehs")},m(t,l){D(t,e,l)},p:V,d(t){t&&f(e)}}}function Pe(i){let e,s,t,l,a,n,r,c,o=i[5]===1&&me();return{c(){e=v("div"),s=v("div"),t=v("p"),l=J(i[2]),a=L(),o&&o.c(),n=L(),r=v("p"),c=J(i[0]),this.h()},l(h){e=_(h,"DIV",{class:!0});var u=b(e);s=_(u,"DIV",{class:!0});var p=b(s);t=_(p,"P",{class:!0});var g=b(t);l=K(g,i[2]),g.forEach(f),a=T(p),o&&o.l(p),p.forEach(f),n=T(u),r=_(u,"P",{class:!0});var w=b(r);c=K(w,i[0]),w.forEach(f),u.forEach(f),this.h()},h(){m(t,"class","item-lunch svelte-1nfjehs"),Y(t,"selected",i[5]===1),m(s,"class","item-lunchout svelte-1nfjehs"),m(r,"class","item-name svelte-1nfjehs"),m(e,"class","item-info-1 item-info svelte-1nfjehs")},m(h,u){D(h,e,u),d(e,s),d(s,t),d(t,l),d(s,a),o&&o.m(s,null),d(e,n),d(e,r),d(r,c)},p(h,u){u&4&&W(l,h[2]),u&32&&Y(t,"selected",h[5]===1),h[5]===1?o||(o=me(),o.c(),o.m(s,null)):o&&(o.d(1),o=null),u&1&&W(c,h[0])},d(h){h&&f(e),o&&o.d()}}}function me(i){let e,s="Obed jiz vydan";return{c(){e=v("p"),e.textContent=s,this.h()},l(t){e=_(t,"P",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-10mmy62"&&(e.textContent=s),this.h()},h(){m(e,"class","item-lunchout-1 svelte-1nfjehs")},m(t,l){D(t,e,l)},d(t){t&&f(e)}}}function ze(i){let e,s;return e=new He({}),{c(){z(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p:V,i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){U(e,t)}}}function Re(i){let e,s;return e=new Te({props:{users:i[3],user:i[4],userScaned:i[6]}}),{c(){z(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p(t,l){const a={};l&8&&(a.users=t[3]),l&16&&(a.user=t[4]),l&64&&(a.userScaned=t[6]),e.$set(a)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){U(e,t)}}}function Be(i){let e,s,t,l,a,n,r,c='<p class="svelte-1nfjehs">Již vydané obědy</p>',o,h,u,p,g,w,y,E;function M(k,S){return k[1]?Pe:k[1]===0?Oe:Ce}let H=M(i),I=H(i);const Z=[Re,ze],P=[];function ee(k,S){return k[1]===0||k[1]||k[3]?0:1}return u=ee(i),p=P[u]=Z[u](i),y=new Se({}),{c(){e=v("link"),s=L(),t=v("div"),l=v("div"),I.c(),a=L(),n=v("div"),r=v("div"),r.innerHTML=c,o=L(),h=v("div"),p.c(),g=L(),w=v("div"),z(y.$$.fragment),this.h()},l(k){const S=be("svelte-nsgab",document.head);e=_(S,"LINK",{rel:!0,href:!0,class:!0}),S.forEach(f),s=T(k),t=_(k,"DIV",{class:!0});var C=b(t);l=_(C,"DIV",{class:!0});var te=b(l);I.l(te),te.forEach(f),a=T(C),n=_(C,"DIV",{class:!0});var F=b(n);r=_(F,"DIV",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-1xhe6s"&&(r.innerHTML=c),o=T(F),h=_(F,"DIV",{class:!0});var se=b(h);p.l(se),se.forEach(f),F.forEach(f),g=T(C),w=_(C,"DIV",{class:!0});var le=b(w);R(y.$$.fragment,le),le.forEach(f),C.forEach(f),this.h()},h(){m(e,"rel","stylesheet"),m(e,"href","https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap"),m(e,"class","svelte-1nfjehs"),m(l,"class","item-1 item grid-container-info svelte-1nfjehs"),m(r,"class","item-table-1 svelte-1nfjehs"),m(h,"class","item-table-2 svelte-1nfjehs"),m(n,"class","item-2 item grid-container-table svelte-1nfjehs"),m(w,"class","item-3 item svelte-1nfjehs"),m(t,"class","grid-container svelte-1nfjehs")},m(k,S){d(document.head,e),D(k,s,S),D(k,t,S),d(t,l),I.m(l,null),d(t,a),d(t,n),d(n,r),d(n,o),d(n,h),P[u].m(h,null),d(t,g),d(t,w),B(y,w,null),E=!0},p(k,[S]){H===(H=M(k))&&I?I.p(k,S):(I.d(1),I=H(k),I&&(I.c(),I.m(l,null)));let C=u;u=ee(k),u===C?P[u].p(k,S):(X(),$(P[C],1,1,()=>{P[C]=null}),x(),p=P[u],p?p.p(k,S):(p=P[u]=Z[u](k),p.c()),j(p,1),p.m(h,null))},i(k){E||(j(p),j(y.$$.fragment,k),E=!0)},o(k){$(p),$(y.$$.fragment,k),E=!1},d(k){k&&(f(s),f(t)),f(e),I.d(),P[u].d(),U(y)}}}function Ue(i,e,s){let t="",l="",a="",n="",r="",c="",o="",h="",u=0,p=0,g=0,w=!1;_e(()=>{window.addEventListener("keydown",E),y()}),pe(()=>{window.removeEventListener("keydown",E)});async function y(){s(3,o=await ie()),p=await ce(),g=await oe(),G.set(p),Q.set(g)}const E=async M=>{M.key==="Enter"?(s(1,n=await we(t)),s(3,o=await ie()),c=await ke(),p=await ce(),g=await oe(),G.set(p),Q.set(g),s(4,h=""),n!==0&&(c.length>0&&c.forEach(H=>{H.id===t&&(s(4,h=H),s(6,w=!1))}),h===""&&(s(6,w=!0),s(4,h=n)),s(0,l=n.name),a=n.lunches[0],s(2,r=a.type_of_lunch),s(5,u=0),a.lunch_out===2&&s(5,u=1),r===0&&(s(2,r="Nemá obědnaný oběd."),s(5,u=0))),t=""):(t+=M.key,console.log(t))};return[l,n,r,o,h,u,w]}class Ne extends q{constructor(e){super(),A(this,e,Ue,Be,N,{})}}function qe(i){let e,s,t='<p class="svelte-hl43s8">Výdejový systém bědů</p>',l,a,n,r,c,o,h,u,p='<img src="/1itglogo.png" alt="ITlogo" class="svelte-hl43s8"/>';return{c(){e=v("div"),s=v("div"),s.innerHTML=t,l=L(),a=v("div"),n=v("i"),r=L(),c=v("p"),o=J(i[0]),h=L(),u=v("div"),u.innerHTML=p,this.h()},l(g){e=_(g,"DIV",{class:!0});var w=b(e);s=_(w,"DIV",{class:!0,"data-svelte-h":!0}),O(s)!=="svelte-16u4u4b"&&(s.innerHTML=t),l=T(w),a=_(w,"DIV",{class:!0});var y=b(a);n=_(y,"I",{class:!0}),b(n).forEach(f),r=T(y),c=_(y,"P",{class:!0});var E=b(c);o=K(E,i[0]),E.forEach(f),y.forEach(f),h=T(w),u=_(w,"DIV",{class:!0,"data-svelte-h":!0}),O(u)!=="svelte-ot9a23"&&(u.innerHTML=p),w.forEach(f),this.h()},h(){m(s,"class","item-1 svelte-hl43s8"),m(n,"class","fi fi-br-clock svelte-hl43s8"),m(c,"class","svelte-hl43s8"),m(a,"class","item-2 svelte-hl43s8"),m(u,"class","item-3 svelte-hl43s8"),m(e,"class","flex-container svelte-hl43s8")},m(g,w){D(g,e,w),d(e,s),d(e,l),d(e,a),d(a,n),d(a,r),d(a,c),d(c,o),d(e,h),d(e,u)},p(g,[w]){w&1&&W(o,g[0])},i:V,o:V,d(g){g&&f(e)}}}function Ae(i,e,s){let t=new Date,[l,a,n]=t.toLocaleDateString().split("/");return t=`${a}/${l}/${n}`,[t]}class Ye extends q{constructor(e){super(),A(this,e,Ae,qe,N,{})}}function Je(i){let e,s,t,l,a,n,r,c;return l=new Ye({}),r=new Ne({}),{c(){e=v("body"),s=v("div"),t=v("div"),z(l.$$.fragment),a=L(),n=v("div"),z(r.$$.fragment),this.h()},l(o){e=_(o,"BODY",{});var h=b(e);s=_(h,"DIV",{class:!0});var u=b(s);t=_(u,"DIV",{class:!0});var p=b(t);R(l.$$.fragment,p),p.forEach(f),a=T(u),n=_(u,"DIV",{class:!0});var g=b(n);R(r.$$.fragment,g),g.forEach(f),u.forEach(f),h.forEach(f),this.h()},h(){m(t,"class","item-1"),m(n,"class","item-2 svelte-9heui7"),m(s,"class","flex-container svelte-9heui7")},m(o,h){D(o,e,h),d(e,s),d(s,t),B(l,t,null),d(s,a),d(s,n),B(r,n,null),c=!0},p:V,i(o){c||(j(l.$$.fragment,o),j(r.$$.fragment,o),c=!0)},o(o){$(l.$$.fragment,o),$(r.$$.fragment,o),c=!1},d(o){o&&f(e),U(l),U(r)}}}class Ke extends q{constructor(e){super(),A(this,e,null,Je,N,{})}}function We(i){let e,s;return e=new Ke({}),{c(){z(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){B(e,t,l),s=!0},p:V,i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){U(e,t)}}}class xe extends q{constructor(e){super(),A(this,e,null,We,N,{})}}export{xe as component};
