import{S as Y,i as Z,s as z,e as q,t as J,c as E,a as F,h as M,d as v,b as j,g as N,F as k,G as et,j as st,Z as H,a6 as K,w as x,x as B,y as C,X as at,q as b,o as y,B as G,k as I,Y as lt,m as V,p as Q,K as rt,a0 as ot,a1 as nt,V as it,W as ct,n as U,U as ft,N as ut}from"../chunks/vendor-bc34623b.js";import{b as _t,p as pt}from"../chunks/filters-cc608ede.js";import{P as O}from"../chunks/PostsList-73fc94da.js";import{R as gt}from"../chunks/RemoveFilter-2f519abb.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/PostTag-fd67d1e4.js";function mt(r){let t,s,e,n;return{c(){t=q("p"),s=J(r[1]),this.h()},l(o){t=E(o,"P",{class:!0});var a=F(t);s=M(a,r[1]),a.forEach(v),this.h()},h(){j(t,"class","tag svelte-27i8c6")},m(o,a){N(o,t,a),k(t,s),e||(n=et(t,"click",r[2]),e=!0)},p(o,[a]){a&2&&st(s,o[1])},i:H,o:H,d(o){o&&v(t),e=!1,n()}}}function ht(r,t,s){let{tag:e}=t,{tagScelto:n}=t;const o=()=>s(0,n=e);return r.$$set=a=>{"tag"in a&&s(1,e=a.tag),"tagScelto"in a&&s(0,n=a.tagScelto)},[n,e,o]}class dt extends Y{constructor(t){super();Z(this,t,ht,mt,z,{tag:1,tagScelto:0})}}function W(r,t,s){const e=r.slice();return e[9]=t[s],e}function X(r){let t,s,e;function n(a){r[4](a)}let o={tag:r[9]};return r[1]!==void 0&&(o.tagScelto=r[1]),t=new dt({props:o}),it.push(()=>ct(t,"tagScelto",n)),{c(){x(t.$$.fragment)},l(a){B(t.$$.fragment,a)},m(a,u){C(t,a,u),e=!0},p(a,u){const d={};!s&&u&2&&(s=!0,d.tagScelto=a[1],at(()=>s=!1)),t.$set(d)},i(a){e||(b(t.$$.fragment,a),e=!0)},o(a){y(t.$$.fragment,a),e=!1},d(a){G(t,a)}}}function vt(r){let t,s;return t=new O({props:{posts:r[2]}}),{c(){x(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,n){C(t,e,n),s=!0},p(e,n){const o={};n&4&&(o.posts=e[2]),t.$set(o)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){G(t,e)}}}function bt(r){let t,s;return t=new O({props:{posts:r[0]}}),{c(){x(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,n){C(t,e,n),s=!0},p(e,n){const o={};n&1&&(o.posts=e[0]),t.$set(o)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){G(t,e)}}}function $t(r){let t,s,e,n,o,a,u,d,h,w,c,p,m,D,S=r[3],i=[];for(let l=0;l<S.length;l+=1)i[l]=X(W(r,S,l));const tt=l=>y(i[l],1,1,()=>{i[l]=null});h=new gt({props:{theme:"posts"}});const R=[bt,vt],$=[];function T(l,_){return l[2].length==0?0:1}return p=T(r),m=$[p]=R[p](r),{c(){t=I(),s=q("div"),e=q("h1"),n=J("Posts"),a=I(),u=q("div");for(let l=0;l<i.length;l+=1)i[l].c();d=I(),x(h.$$.fragment),w=I(),c=q("div"),m.c(),this.h()},l(l){lt('[data-svelte="svelte-1ucjnix"]',document.head).forEach(v),t=V(l),s=E(l,"DIV",{class:!0});var g=F(s);e=E(g,"H1",{class:!0});var f=F(e);n=M(f,"Posts"),f.forEach(v),a=V(g),u=E(g,"DIV",{class:!0});var P=F(u);for(let L=0;L<i.length;L+=1)i[L].l(P);d=V(P),B(h.$$.fragment,P),P.forEach(v),w=V(g),c=E(g,"DIV",{class:!0});var A=F(c);m.l(A),A.forEach(v),g.forEach(v),this.h()},h(){document.title="Posts",j(e,"class","svelte-1vx4usr"),j(u,"class","tag-list svelte-1vx4usr"),j(c,"class","post svelte-1vx4usr"),j(s,"class","container svelte-1vx4usr")},m(l,_){N(l,t,_),N(l,s,_),k(s,e),k(e,n),k(s,a),k(s,u);for(let g=0;g<i.length;g+=1)i[g].m(u,null);k(u,d),C(h,u,null),k(s,w),k(s,c),$[p].m(c,null),D=!0},p(l,[_]){if(_&10){S=l[3];let f;for(f=0;f<S.length;f+=1){const P=W(l,S,f);i[f]?(i[f].p(P,_),b(i[f],1)):(i[f]=X(P),i[f].c(),b(i[f],1),i[f].m(u,d))}for(U(),f=S.length;f<i.length;f+=1)tt(f);Q()}let g=p;p=T(l),p===g?$[p].p(l,_):(U(),y($[g],1,1,()=>{$[g]=null}),Q(),m=$[p],m?m.p(l,_):(m=$[p]=R[p](l),m.c()),b(m,1),m.m(c,null))},i(l){if(!D){o||rt(()=>{o=ft(e,ut,{y:-100,duration:500}),o.start()});for(let _=0;_<S.length;_+=1)b(i[_]);b(h.$$.fragment,l),b(m),D=!0}},o(l){i=i.filter(Boolean);for(let _=0;_<i.length;_+=1)y(i[_]);y(h.$$.fragment,l),y(m),D=!1},d(l){l&&v(t),l&&v(s),ot(i,l),G(h),$[p].d()}}}async function Ft(){const r=new K.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/cl0se3jqv0c2e01w2c4b7ejbv/master",{headers:{}}),t=K.gql`
			query Posts {
				posts(orderBy: publishedAt_DESC) {
					tags
					content
					date
					id
					slug
					title
					authors {
						name
						picture {
							url
						}
					}
					coverImage {
						url
					}
				}
			}
		`,{posts:s}=await r.request(t);return{props:{posts:s}}}function kt(r,t,s){let e,n;nt(r,pt,c=>s(6,n=c));let{posts:o}=t,a="",u=[];o.forEach(c=>{u=[...u,...c.tags]});let d=[...new Set(u.map(c=>c))];const h=c=>o.filter(p=>p.tags.includes(c));_t(()=>{s(2,e=h(n))});function w(c){a=c,s(1,a)}return r.$$set=c=>{"posts"in c&&s(0,o=c.posts)},r.$$.update=()=>{r.$$.dirty&2&&s(2,e=h(a))},[o,a,e,d,w]}class jt extends Y{constructor(t){super();Z(this,t,kt,$t,z,{posts:0})}}export{jt as default,Ft as load};
