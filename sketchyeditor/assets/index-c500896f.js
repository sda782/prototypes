(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $(){}function Be(t,e){for(const n in e)t[n]=e[n];return t}function Oe(t){return t()}function ye(){return Object.create(null)}function M(t){t.forEach(Oe)}function Le(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Fe(t){return Object.keys(t).length===0}function Se(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function C(t){let e;return Se(t,n=>e=n)(),e}function R(t,e,n){t.$$.on_destroy.push(Se(e,n))}function Ie(t,e,n,o){if(t){const i=Ne(t,e,n,o);return t[0](i)}}function Ne(t,e,n,o){return t[1]&&o?Be(n.ctx.slice(),t[1](o(e))):n.ctx}function Je(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],r=Math.max(e.dirty.length,i.length);for(let l=0;l<r;l+=1)s[l]=e.dirty[l]|i[l];return s}return e.dirty|i}return e.dirty}function Re(t,e,n,o,i,s){if(i){const r=Ne(e,n,o,s);t.p(r,i)}}function Ue(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function fe(t,e,n){return t.set(n),e}function g(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Xe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function he(t){return document.createTextNode(t)}function P(){return he(" ")}function ge(){return he("")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ye(t){return Array.from(t.childNodes)}function De(t,e){e=""+e,t.data!==e&&(t.data=e)}function x(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let W;function X(t){W=t}function We(){if(!W)throw new Error("Function called outside component initialization");return W}function He(t){We().$$.on_mount.push(t)}function ae(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(o=>o.call(this,e))}const J=[],N=[];let U=[];const de=[],Ke=Promise.resolve();let _e=!1;function Qe(){_e||(_e=!0,Ke.then(Me))}function pe(t){U.push(t)}function te(t){de.push(t)}const ue=new Set;let F=0;function Me(){if(F!==0)return;const t=W;do{try{for(;F<J.length;){const e=J[F];F++,X(e),Ve(e.$$)}}catch(e){throw J.length=0,F=0,e}for(X(null),J.length=0,F=0;N.length;)N.pop()();for(let e=0;e<U.length;e+=1){const n=U[e];ue.has(n)||(ue.add(n),n())}U.length=0}while(J.length);for(;de.length;)de.pop()();_e=!1,ue.clear(),X(t)}function Ve(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pe)}}function Ze(t){const e=[],n=[];U.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),U=e}const ee=new Set;let T;function Y(){T={r:0,c:[],p:T}}function D(){T.r||M(T.c),T=T.p}function p(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function m(t,e,n,o){if(t&&t.o){if(ee.has(t))return;ee.add(t),T.c.push(()=>{ee.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function ne(t,e,n){const o=t.$$.props[e];o!==void 0&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function S(t){t&&t.c()}function E(t,e,n,o){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),o||pe(()=>{const r=t.$$.on_mount.map(Oe).filter(Le);t.$$.on_destroy?t.$$.on_destroy.push(...r):M(r),t.$$.on_mount=[]}),s.forEach(pe)}function O(t,e){const n=t.$$;n.fragment!==null&&(Ze(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(J.push(t),Qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(t,e,n,o,i,s,r,l=[-1]){const c=W;X(t);const u=t.$$={fragment:null,ctx:[],props:s,update:$,not_equal:i,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ye(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return u.ctx&&i(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&et(t,a)),d}):[],u.update(),f=!0,M(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){const a=Ye(e.target);u.fragment&&u.fragment.l(a),a.forEach(w)}else u.fragment&&u.fragment.c();e.intro&&p(t.$$.fragment),E(t,e.target,e.anchor,e.customElement),Me()}X(c)}class B{$destroy(){O(this,1),this.$destroy=$}$on(e,n){if(!Le(n))return $;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!Fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const I=[];function K(t,e=$){let n;const o=new Set;function i(l){if(j(t,l)&&(t=l,n)){const c=!I.length;for(const u of o)u[1](),I.push(u,t);if(c){for(let u=0;u<I.length;u+=2)I[u][0](I[u+1]);I.length=0}}}function s(l){i(l(t))}function r(l,c=$){const u=[l,c];return o.add(u),o.size===1&&(n=e(i)||$),l(t),()=>{o.delete(u),o.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:r}}let A=K(void 0),G=K(void 0),L=K(),oe=K(void 0),ie=K();const Q=13,H=()=>{let t=C(ie);t.clearRect(0,0,t.canvas.width,t.canvas.height),C(L).forEach(e=>{tt(e)})},tt=t=>{let e=C(ie);e&&(e.lineWidth=10,e.strokeStyle="white",e.beginPath(),e.moveTo(t.startPosition.x+Q,t.startPosition.y+Q),e.lineTo(t.endPosition.x+Q,t.endPosition.y+Q),e.stroke())},re={x:36,y:16},le={x:-18,y:-8},se={x:900,y:506},V=t=>{let e=t.x/se.x*re.x+le.x,n=-1*(t.y/se.y*re.y+le.y);return{x:e,y:n}},Z=t=>{let e=(t.x-le.x)/re.x*se.x,n=(t.y-le.y)/re.y*se.y;return console.log({x:e,y:n}),{x:e,y:n}},nt=t=>{if(t===void 0)return;const e=t.item(0),n=new FileReader;n.onload=ot,n.readAsText(e)},ot=t=>{const e=JSON.parse(t.target.result);console.log(e),je(),qe(Z(e.playerPosition)),Te(Z(e.goalPosition)),e.platforms.forEach(n=>{const o={startPosition:Z(n.startPosition),endPosition:Z(n.endPosition)};Ae(o)})},je=()=>{A.set(void 0),G.set(void 0),L.set([]),H()},qe=t=>{if(C(A))return;const e={position:t,label:"Player"};A.set(e)},Te=t=>{if(C(G))return;const e={position:t,label:"Goal"};G.set(e)},Ae=t=>{let e={startPosition:{...t.startPosition},endPosition:{...t.endPosition}};C(L)===void 0?L.set([e]):L.update(n=>[...n,e]),H()},it=()=>{A.set(void 0)},rt=()=>{G.set(void 0)},$e=t=>{let e=C(L),n=e.findIndex(o=>o===t);e.splice(n,1),L.set(e),H()},lt=()=>{let t={playerPosition:V(C(A).position),goalPosition:V(C(G).position),platforms:C(L).map(e=>({startPosition:V(e.startPosition),endPosition:V(e.endPosition)}))};console.log(t),st(JSON.stringify(t),"level.sketchy","text/plain")},st=(t,e,n)=>{var o=document.createElement("a"),i=new Blob([t],{type:n});o.href=URL.createObjectURL(i),o.download=e,o.click(),window.alert(`${e} downloaded`)};function ct(t){let e,n,o,i,s,r,l,c,u,f,a,d,_,h,q,be;return{c(){e=v("div"),n=v("input"),o=P(),i=v("button"),i.textContent="Load",s=P(),r=v("button"),r.textContent="Save",l=P(),c=v("button"),c.textContent="Clear",u=P(),f=v("button"),f.textContent="Player",a=P(),d=v("button"),d.textContent="Goal",_=P(),h=v("button"),h.textContent="Platform",n.hidden=!0,y(n,"type","file"),y(n,"accept",".sketchy"),y(n,"class","svelte-19n6el3"),y(i,"class","svelte-19n6el3"),y(r,"class","svelte-19n6el3"),y(c,"class","svelte-19n6el3"),y(f,"class","svelte-19n6el3"),y(d,"class","svelte-19n6el3"),y(h,"class","svelte-19n6el3"),x(e,"display","flex"),x(e,"gap","10px"),x(e,"margin-top","1em")},m(ce,ze){k(ce,e,ze),g(e,n),t[6](n),g(e,o),g(e,i),g(e,s),g(e,r),g(e,l),g(e,c),g(e,u),g(e,f),g(e,a),g(e,d),g(e,_),g(e,h),q||(be=[b(n,"change",t[5]),b(i,"click",t[7]),b(r,"click",lt),b(c,"click",je),b(f,"click",t[8]),b(d,"click",t[9]),b(h,"click",t[10])],q=!0)},p:$,i:$,o:$,d(ce){ce&&w(e),t[6](null),q=!1,M(be)}}}function ut(t,e,n){const o={x:400,y:250},i={x:600,y:250},s={startPosition:{x:100,y:100},endPosition:{x:200,y:200}};let r,l;function c(){l=this.files,n(0,l)}function u(h){N[h?"unshift":"push"](()=>{r=h,n(1,r)})}const f=()=>{r&&r.click()},a=()=>qe({...o}),d=()=>Te({...i}),_=()=>Ae({...s});return t.$$.update=()=>{t.$$.dirty&1&&nt(l)},[l,r,o,i,s,c,u,f,a,d,_]}class ft extends B{constructor(e){super(),z(this,e,ut,ct,j,{})}}function at(t){let e,n,o,i;const s=t[6].default,r=Ie(s,t,t[5],null);return{c(){e=v("div"),r&&r.c(),y(e,"class","figure circle svelte-1rx0fps"),x(e,"background-color",t[1]),x(e,"top",t[0].y+"px"),x(e,"left",t[0].x+"px")},m(l,c){k(l,e,c),r&&r.m(e,null),n=!0,o||(i=[b(window,"mouseup",t[4]),b(window,"mousemove",t[3]),b(e,"mousedown",t[2]),b(e,"mousedown",t[7]),b(e,"contextmenu",t[8]),b(e,"contextmenu",dt)],o=!0)},p(l,[c]){r&&r.p&&(!n||c&32)&&Re(r,s,l,l[5],n?Je(s,l[5],c,null):Ue(l[5]),null),(!n||c&2)&&x(e,"background-color",l[1]),(!n||c&1)&&x(e,"top",l[0].y+"px"),(!n||c&1)&&x(e,"left",l[0].x+"px")},i(l){n||(p(r,l),n=!0)},o(l){m(r,l),n=!1},d(l){l&&w(e),r&&r.d(l),o=!1,M(i)}}}const dt=t=>t.preventDefault();function _t(t,e,n){let{$$slots:o={},$$scope:i}=e,{position:s}=e,{color:r}=e,l=!1;const c=()=>{l=!0},u=_=>{if(l){let h=s.x+_.movementX;h>=0&&h<=900-26&&n(0,s.x=h,s);let q=s.y+_.movementY;q>=0&&q<=506-26&&n(0,s.y=q,s)}},f=()=>{l=!1};function a(_){ae.call(this,t,_)}function d(_){ae.call(this,t,_)}return t.$$set=_=>{"position"in _&&n(0,s=_.position),"color"in _&&n(1,r=_.color),"$$scope"in _&&n(5,i=_.$$scope)},[s,r,c,u,f,i,o,a,d]}class me extends B{constructor(e){super(),z(this,e,_t,at,j,{position:0,color:1})}}function ve(t){let e,n;return e=new me({props:{position:t[0].position,color:t[1],$$slots:{default:[pt]},$$scope:{ctx:t}}}),e.$on("contextmenu",t[2]),{c(){S(e.$$.fragment)},m(o,i){E(e,o,i),n=!0},p(o,i){const s={};i&1&&(s.position=o[0].position),i&2&&(s.color=o[1]),i&9&&(s.$$scope={dirty:i,ctx:o}),e.$set(s)},i(o){n||(p(e.$$.fragment,o),n=!0)},o(o){m(e.$$.fragment,o),n=!1},d(o){O(e,o)}}}function we(t){let e,n=t[0].label+"",o;return{c(){e=v("span"),o=he(n),y(e,"class","label svelte-15kq1cq")},m(i,s){k(i,e,s),g(e,o)},p(i,s){s&1&&n!==(n=i[0].label+"")&&De(o,n)},d(i){i&&w(e)}}}function pt(t){let e,n=t[0].label&&we(t);return{c(){n&&n.c(),e=ge()},m(o,i){n&&n.m(o,i),k(o,e,i)},p(o,i){o[0].label?n?n.p(o,i):(n=we(o),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(o){n&&n.d(o),o&&w(e)}}}function mt(t){let e,n,o=t[0]&&ve(t);return{c(){o&&o.c(),e=ge()},m(i,s){o&&o.m(i,s),k(i,e,s),n=!0},p(i,[s]){i[0]?o?(o.p(i,s),s&1&&p(o,1)):(o=ve(i),o.c(),p(o,1),o.m(e.parentNode,e)):o&&(Y(),m(o,1,1,()=>{o=null}),D())},i(i){n||(p(o),n=!0)},o(i){m(o),n=!1},d(i){o&&o.d(i),i&&w(e)}}}function ht(t,e,n){let{figure:o}=e,{color:i}=e;function s(r){ae.call(this,t,r)}return t.$$set=r=>{"figure"in r&&n(0,o=r.figure),"color"in r&&n(1,i=r.color)},[o,i,s]}class Ge extends B{constructor(e){super(),z(this,e,ht,mt,j,{figure:0,color:1})}}function gt(t){let e,n,o,i,s,r;function l(a){t[2](a)}let c={color:"white"};t[0].startPosition!==void 0&&(c.position=t[0].startPosition),e=new me({props:c}),N.push(()=>ne(e,"position",l)),e.$on("contextmenu",t[3]),e.$on("mousedown",t[1]);function u(a){t[4](a)}let f={color:"white"};return t[0].endPosition!==void 0&&(f.position=t[0].endPosition),i=new me({props:f}),N.push(()=>ne(i,"position",u)),i.$on("contextmenu",t[5]),i.$on("mousedown",t[1]),{c(){S(e.$$.fragment),o=P(),S(i.$$.fragment)},m(a,d){E(e,a,d),k(a,o,d),E(i,a,d),r=!0},p(a,[d]){const _={};!n&&d&1&&(n=!0,_.position=a[0].startPosition,te(()=>n=!1)),e.$set(_);const h={};!s&&d&1&&(s=!0,h.position=a[0].endPosition,te(()=>s=!1)),i.$set(h)},i(a){r||(p(e.$$.fragment,a),p(i.$$.fragment,a),r=!0)},o(a){m(e.$$.fragment,a),m(i.$$.fragment,a),r=!1},d(a){O(e,a),a&&w(o),O(i,a)}}}function bt(t,e,n){let o;R(t,oe,f=>n(6,o=f));let{platform:i}=e;const s=()=>{fe(oe,o=i,o)};function r(f){t.$$.not_equal(i.startPosition,f)&&(i.startPosition=f,n(0,i))}const l=()=>$e(i);function c(f){t.$$.not_equal(i.endPosition,f)&&(i.endPosition=f,n(0,i))}const u=()=>$e(i);return t.$$set=f=>{"platform"in f&&n(0,i=f.platform)},[i,s,r,l,c,u]}class yt extends B{constructor(e){super(),z(this,e,bt,gt,j,{platform:0})}}function $t(t){let e,n,o;return{c(){e=v("canvas"),x(e,"z-index","-999"),x(e,"position","fixed"),y(e,"width","900"),y(e,"height","506")},m(i,s){k(i,e,s),t[4](e),n||(o=[b(window,"mouseup",t[2]),b(window,"mousemove",t[3])],n=!0)},p:$,i:$,o:$,d(i){i&&w(e),t[4](null),n=!1,M(o)}}}function vt(t,e,n){let o,i;R(t,ie,u=>n(5,o=u)),R(t,oe,u=>n(1,i=u));let s;He(()=>{fe(ie,o=s.getContext("2d"),o)});const r=()=>{i&&(H(),fe(oe,i=void 0,i))},l=()=>{i&&H()};function c(u){N[u?"unshift":"push"](()=>{s=u,n(0,s)})}return[s,i,r,l,c]}class wt extends B{constructor(e){super(),z(this,e,vt,$t,j,{})}}function Pe(t,e,n){const o=t.slice();return o[7]=e[n],o}function ke(t){let e,n,o;function i(r){t[3](r)}let s={color:"cyan"};return t[0]!==void 0&&(s.figure=t[0]),e=new Ge({props:s}),N.push(()=>ne(e,"figure",i)),e.$on("contextmenu",t[4]),{c(){S(e.$$.fragment)},m(r,l){E(e,r,l),o=!0},p(r,l){const c={};!n&&l&1&&(n=!0,c.figure=r[0],te(()=>n=!1)),e.$set(c)},i(r){o||(p(e.$$.fragment,r),o=!0)},o(r){m(e.$$.fragment,r),o=!1},d(r){O(e,r)}}}function xe(t){let e,n,o;function i(r){t[5](r)}let s={color:"magenta"};return t[1]!==void 0&&(s.figure=t[1]),e=new Ge({props:s}),N.push(()=>ne(e,"figure",i)),e.$on("contextmenu",t[6]),{c(){S(e.$$.fragment)},m(r,l){E(e,r,l),o=!0},p(r,l){const c={};!n&&l&2&&(n=!0,c.figure=r[1],te(()=>n=!1)),e.$set(c)},i(r){o||(p(e.$$.fragment,r),o=!0)},o(r){m(e.$$.fragment,r),o=!1},d(r){O(e,r)}}}function Ce(t){let e,n,o=t[2],i=[];for(let r=0;r<o.length;r+=1)i[r]=Ee(Pe(t,o,r));const s=r=>m(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=ge()},m(r,l){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(r,l);k(r,e,l),n=!0},p(r,l){if(l&4){o=r[2];let c;for(c=0;c<o.length;c+=1){const u=Pe(r,o,c);i[c]?(i[c].p(u,l),p(i[c],1)):(i[c]=Ee(u),i[c].c(),p(i[c],1),i[c].m(e.parentNode,e))}for(Y(),c=o.length;c<i.length;c+=1)s(c);D()}},i(r){if(!n){for(let l=0;l<o.length;l+=1)p(i[l]);n=!0}},o(r){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)m(i[l]);n=!1},d(r){Xe(i,r),r&&w(e)}}}function Ee(t){let e,n;return e=new yt({props:{platform:t[7]}}),{c(){S(e.$$.fragment)},m(o,i){E(e,o,i),n=!0},p(o,i){const s={};i&4&&(s.platform=o[7]),e.$set(s)},i(o){n||(p(e.$$.fragment,o),n=!0)},o(o){m(e.$$.fragment,o),n=!1},d(o){O(e,o)}}}function Pt(t){let e,n,o,i,s,r,l,c;n=new wt({});let u=t[0]&&ke(t),f=t[1]&&xe(t),a=t[2]&&Ce(t);return{c(){e=v("div"),S(n.$$.fragment),o=P(),u&&u.c(),i=P(),f&&f.c(),s=P(),a&&a.c(),y(e,"id","container"),y(e,"class","svelte-1r66qiu")},m(d,_){k(d,e,_),E(n,e,null),g(e,o),u&&u.m(e,null),g(e,i),f&&f.m(e,null),g(e,s),a&&a.m(e,null),r=!0,l||(c=b(e,"contextmenu",kt),l=!0)},p(d,[_]){d[0]?u?(u.p(d,_),_&1&&p(u,1)):(u=ke(d),u.c(),p(u,1),u.m(e,i)):u&&(Y(),m(u,1,1,()=>{u=null}),D()),d[1]?f?(f.p(d,_),_&2&&p(f,1)):(f=xe(d),f.c(),p(f,1),f.m(e,s)):f&&(Y(),m(f,1,1,()=>{f=null}),D()),d[2]?a?(a.p(d,_),_&4&&p(a,1)):(a=Ce(d),a.c(),p(a,1),a.m(e,null)):a&&(Y(),m(a,1,1,()=>{a=null}),D())},i(d){r||(p(n.$$.fragment,d),p(u),p(f),p(a),r=!0)},o(d){m(n.$$.fragment,d),m(u),m(f),m(a),r=!1},d(d){d&&w(e),O(n),u&&u.d(),f&&f.d(),a&&a.d(),l=!1,c()}}}const kt=t=>t.preventDefault();function xt(t,e,n){let o,i,s;R(t,A,f=>n(0,o=f)),R(t,G,f=>n(1,i=f)),R(t,L,f=>n(2,s=f));function r(f){o=f,A.set(o)}const l=()=>it();function c(f){i=f,G.set(i)}return[o,i,s,r,l,c,()=>rt()]}class Ct extends B{constructor(e){super(),z(this,e,xt,Pt,j,{})}}function Et(t){let e,n,o,i,s,r;return e=new Ct({}),o=new ft({}),{c(){S(e.$$.fragment),n=P(),S(o.$$.fragment),i=P(),s=v("p"),s.innerHTML="<em>Sketchy Level Editor</em>"},m(l,c){E(e,l,c),k(l,n,c),E(o,l,c),k(l,i,c),k(l,s,c),r=!0},p:$,i(l){r||(p(e.$$.fragment,l),p(o.$$.fragment,l),r=!0)},o(l){m(e.$$.fragment,l),m(o.$$.fragment,l),r=!1},d(l){O(e,l),l&&w(n),O(o,l),l&&w(i),l&&w(s)}}}class Ot extends B{constructor(e){super(),z(this,e,null,Et,j,{})}}new Ot({target:document.getElementById("app")});
