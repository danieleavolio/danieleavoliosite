import{S as re,i as oe,s as ie,e as $,t as G,c as q,a as w,h as H,d as c,b as v,g as h,F as g,Z,a6 as X,k as I,l as x,m as y,a3 as Q,j as z,q as P,w as ne,x as ce,y as ue,o as C,B as fe,p as _e,a7 as ee,a0 as ve,Y as he,K as de,n as me,U as ge,N as $e}from"../../chunks/vendor-bc34623b.js";import{P as qe}from"../../chunks/PostTag-fd67d1e4.js";/* empty css                                                        */import"../../chunks/filters-cc608ede.js";import"../../chunks/singletons-d1fb5791.js";function be(n){let t,a,l;return{c(){t=$("footer"),a=G(`\xA9 2021 All rights reserved. Design & Code by Daniele Avolio.\r
`),l=G(">"),this.h()},l(s){t=q(s,"FOOTER",{class:!0});var r=w(t);a=H(r,`\xA9 2021 All rights reserved. Design & Code by Daniele Avolio.\r
`),r.forEach(c),l=H(s,">"),this.h()},h(){v(t,"class","svelte-1w13f4y")},m(s,r){h(s,t,r),g(t,a),h(s,l,r)},p:Z,i:Z,o:Z,d(s){s&&c(t),s&&c(l)}}}class Ee extends re{constructor(t){super();oe(this,t,null,be,ie,{})}}function te(n,t,a){const l=n.slice();return l[1]=t[a],l}function le(n){let t,a=n[0].title+"",l,s,r,E,p,o,f,b,d,M,T=n[0].authors[0].name+"",L,R,B,F=n[0].date+"",S,N,k,O,U,A,D,V=n[0].tags,u=[];for(let e=0;e<V.length;e+=1)u[e]=se(te(n,V,e));const pe=e=>C(u[e],1,1,()=>{u[e]=null});let m=n[0].content&&ae(n);return{c(){t=$("h1"),l=G(a),s=I(),r=$("div");for(let e=0;e<u.length;e+=1)u[e].c();E=I(),p=$("div"),o=$("img"),b=I(),d=$("div"),M=$("p"),L=G(T),R=I(),B=$("p"),S=G(F),N=I(),k=$("img"),U=I(),m&&m.c(),A=x(),this.h()},l(e){t=q(e,"H1",{class:!0});var i=w(t);l=H(i,a),i.forEach(c),s=y(e),r=q(e,"DIV",{class:!0});var _=w(r);for(let Y=0;Y<u.length;Y+=1)u[Y].l(_);_.forEach(c),E=y(e),p=q(e,"DIV",{class:!0});var j=w(p);o=q(j,"IMG",{class:!0,src:!0,alt:!0}),b=y(j),d=q(j,"DIV",{class:!0});var K=w(d);M=q(K,"P",{});var J=w(M);L=H(J,T),J.forEach(c),R=y(K),B=q(K,"P",{});var W=w(B);S=H(W,F),W.forEach(c),K.forEach(c),j.forEach(c),N=y(e),k=q(e,"IMG",{class:!0,src:!0,alt:!0}),U=y(e),m&&m.l(e),A=x(),this.h()},h(){v(t,"class","svelte-1qd3846"),v(r,"class","tags svelte-1qd3846"),v(o,"class","avatar svelte-1qd3846"),Q(o.src,f=n[0].authors[0].picture.url)||v(o,"src",f),v(o,"alt",""),v(d,"class","name-date"),v(p,"class","author svelte-1qd3846"),v(k,"class","cover svelte-1qd3846"),Q(k.src,O=n[0].coverImage.url)||v(k,"src",O),v(k,"alt","")},m(e,i){h(e,t,i),g(t,l),h(e,s,i),h(e,r,i);for(let _=0;_<u.length;_+=1)u[_].m(r,null);h(e,E,i),h(e,p,i),g(p,o),g(p,b),g(p,d),g(d,M),g(M,L),g(d,R),g(d,B),g(B,S),h(e,N,i),h(e,k,i),h(e,U,i),m&&m.m(e,i),h(e,A,i),D=!0},p(e,i){if((!D||i&1)&&a!==(a=e[0].title+"")&&z(l,a),i&1){V=e[0].tags;let _;for(_=0;_<V.length;_+=1){const j=te(e,V,_);u[_]?(u[_].p(j,i),P(u[_],1)):(u[_]=se(j),u[_].c(),P(u[_],1),u[_].m(r,null))}for(me(),_=V.length;_<u.length;_+=1)pe(_);_e()}(!D||i&1&&!Q(o.src,f=e[0].authors[0].picture.url))&&v(o,"src",f),(!D||i&1)&&T!==(T=e[0].authors[0].name+"")&&z(L,T),(!D||i&1)&&F!==(F=e[0].date+"")&&z(S,F),(!D||i&1&&!Q(k.src,O=e[0].coverImage.url))&&v(k,"src",O),e[0].content?m?m.p(e,i):(m=ae(e),m.c(),m.m(A.parentNode,A)):m&&(m.d(1),m=null)},i(e){if(!D){for(let i=0;i<V.length;i+=1)P(u[i]);D=!0}},o(e){u=u.filter(Boolean);for(let i=0;i<u.length;i+=1)C(u[i]);D=!1},d(e){e&&c(t),e&&c(s),e&&c(r),ve(u,e),e&&c(E),e&&c(p),e&&c(N),e&&c(k),e&&c(U),m&&m.d(e),e&&c(A)}}}function se(n){let t,a;return t=new qe({props:{tag:n[1]}}),{c(){ne(t.$$.fragment)},l(l){ce(t.$$.fragment,l)},m(l,s){ue(t,l,s),a=!0},p(l,s){const r={};s&1&&(r.tag=l[1]),t.$set(r)},i(l){a||(P(t.$$.fragment,l),a=!0)},o(l){C(t.$$.fragment,l),a=!1},d(l){fe(t,l)}}}function ae(n){let t,a,l=ee(n[0].content)+"";return{c(){t=$("div"),a=$("p"),this.h()},l(s){t=q(s,"DIV",{class:!0});var r=w(t);a=q(r,"P",{});var E=w(a);E.forEach(c),r.forEach(c),this.h()},h(){v(t,"class","content svelte-1qd3846")},m(s,r){h(s,t,r),g(t,a),a.innerHTML=l},p(s,r){r&1&&l!==(l=ee(s[0].content)+"")&&(a.innerHTML=l)},d(s){s&&c(t)}}}function ke(n){let t,a,l,s,r,E,p;document.title=t=n[0].slug;let o=n[0]&&le(n);return r=new Ee({}),{c(){a=I(),l=$("div"),o&&o.c(),s=I(),ne(r.$$.fragment),this.h()},l(f){he('[data-svelte="svelte-w77ni5"]',document.head).forEach(c),a=y(f),l=q(f,"DIV",{class:!0});var d=w(l);o&&o.l(d),s=y(d),ce(r.$$.fragment,d),d.forEach(c),this.h()},h(){v(l,"class","project svelte-1qd3846")},m(f,b){h(f,a,b),h(f,l,b),o&&o.m(l,null),g(l,s),ue(r,l,null),p=!0},p(f,[b]){(!p||b&1)&&t!==(t=f[0].slug)&&(document.title=t),f[0]?o?(o.p(f,b),b&1&&P(o,1)):(o=le(f),o.c(),P(o,1),o.m(l,s)):o&&(me(),C(o,1,1,()=>{o=null}),_e())},i(f){p||(P(o),P(r.$$.fragment,f),E||de(()=>{E=ge(l,$e,{y:-100,duration:1e3,delay:500}),E.start()}),p=!0)},o(f){C(o),C(r.$$.fragment,f),p=!1},d(f){f&&c(a),f&&c(l),o&&o.d(),fe(r)}}}async function je(n){const t=n.params.slug,a=new X.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/cl0se3jqv0c2e01w2c4b7ejbv/master",{headers:{}}),l=X.gql`
			query SinglePost {
				post(where: { slug: "${t}" }) {
					authors {
						name
						picture{
							url
						}
					}
					content
					coverImage {
						url
					}
					date
					tags
					title
					slug
				}
			}
		`,{post:s}=await a.request(l);return{props:{post:s}}}function we(n,t,a){let{post:l}=t;return n.$$set=s=>{"post"in s&&a(0,l=s.post)},[l]}class Ae extends re{constructor(t){super();oe(this,t,we,ke,ie,{post:0})}}export{Ae as default,je as load};