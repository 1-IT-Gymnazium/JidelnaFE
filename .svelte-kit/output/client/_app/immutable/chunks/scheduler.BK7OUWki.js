function k(){}function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function M(){return Object.create(null)}function j(t){t.forEach(w)}function D(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(E(n,e))}function U(t,n,e,o){if(t){const c=y(t,n,e,o);return t[0](c)}}function y(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function A(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const a=[],f=Math.max(n.dirty.length,c.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|c[u];return a}return n.dirty|c}return n.dirty}function B(t,n,e,o,c,a){if(c){const f=y(n,e,o,a);t.p(f,c)}}function C(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let i;function h(t){i=t}function b(){if(!i)throw new Error("Function called outside component initialization");return i}function G(t){b().$$.on_mount.push(t)}function H(t){b().$$.after_update.push(t)}function I(t){b().$$.on_destroy.push(t)}function J(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const l=[],g=[];let r=[];const _=[],m=Promise.resolve();let p=!1;function v(){p||(p=!0,m.then(q))}function K(){return v(),m}function O(t){r.push(t)}function L(t){_.push(t)}const d=new Set;let s=0;function q(){if(s!==0)return;const t=i;do{try{for(;s<l.length;){const n=l[s];s++,h(n),z(n.$$)}}catch(n){throw l.length=0,s=0,n}for(h(null),l.length=0,s=0;g.length;)g.pop()();for(let n=0;n<r.length;n+=1){const e=r[n];d.has(e)||(d.add(e),e())}r.length=0}while(l.length);for(;_.length;)_.pop()();p=!1,d.clear(),h(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function N(t){const n=[],e=[];r.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),r=n}export{A as a,S as b,U as c,H as d,g as e,M as f,C as g,q as h,D as i,P as j,O as k,N as l,i as m,k as n,G as o,h as p,w as q,j as r,F as s,K as t,B as u,l as v,v as w,I as x,J as y,L as z};