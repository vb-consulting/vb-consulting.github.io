import{S as t,i as e,s as r,x as s,f as n,n as l,d as a,h,e as i,j as o,c,a as f,b as u,g as d,t as m,k,l as L,m as p}from"../index-89f6e244.js";function g(t,e,r){const s=t.slice();return s[1]=e[r],s}function x(t){let e,r,s=t[0].otherLinksTitle&&v(t),l=t[0].otherLinks,m=[];for(let e=0;e<l.length;e+=1)m[e]=b(g(t,l,e));return{c(){s&&s.c(),e=h(),r=i("div");for(let t=0;t<m.length;t+=1)m[t].c();this.h()},l(t){s&&s.l(t),e=o(t),r=c(t,"DIV",{class:!0});var n=f(r);for(let t=0;t<m.length;t+=1)m[t].l(n);n.forEach(a),this.h()},h(){u(r,"class","d-flex justify-content-center row")},m(t,l){s&&s.m(t,l),n(t,e,l),n(t,r,l);for(let t=0;t<m.length;t+=1)m[t]&&m[t].m(r,null)},p(t,n){if(t[0].otherLinksTitle?s?s.p(t,n):(s=v(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),1&n){let e;for(l=t[0].otherLinks,e=0;e<l.length;e+=1){const s=g(t,l,e);m[e]?m[e].p(s,n):(m[e]=b(s),m[e].c(),m[e].m(r,null))}for(;e<m.length;e+=1)m[e].d(1);m.length=l.length}},d(t){s&&s.d(t),t&&a(e),t&&a(r),d(m,t)}}}function v(t){let e,r,s=t[0].otherLinksTitle+"";return{c(){e=i("div"),r=m(s),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=f(e);r=k(n,s),n.forEach(a),this.h()},h(){u(e,"class","text-muted text-center fs-_7rem mb-2")},m(t,s){n(t,e,s),L(e,r)},p(t,e){1&e&&s!==(s=t[0].otherLinksTitle+"")&&p(r,s)},d(t){t&&a(e)}}}function b(t){let e,r,s,l,d,g=t[1].title+"";return{c(){e=i("a"),r=i("span"),s=m(g),l=h(),this.h()},l(t){e=c(t,"A",{class:!0,href:!0});var n=f(e);r=c(n,"SPAN",{class:!0});var h=f(r);s=k(h,g),h.forEach(a),l=o(n),n.forEach(a),this.h()},h(){u(r,"class",""),u(e,"class","btn btn-sm text-start sidebar-link me-1"),u(e,"href",d=t[1].url)},m(t,a){n(t,e,a),L(e,r),L(r,s),L(e,l)},p(t,r){1&r&&g!==(g=t[1].title+"")&&p(s,g),1&r&&d!==(d=t[1].url)&&u(e,"href",d)},d(t){t&&a(e)}}}function E(t){let e,r=t[0].otherLinks&&t[0].otherLinks.length>0&&x(t);return{c(){r&&r.c(),e=s()},l(t){r&&r.l(t),e=s()},m(t,s){r&&r.m(t,s),n(t,e,s)},p(t,[s]){t[0].otherLinks&&t[0].otherLinks.length>0?r?r.p(t,s):(r=x(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:l,o:l,d(t){r&&r.d(t),t&&a(e)}}}function T(t,e,r){let{data:s}=e;return s.otherLinks&&s.otherLinks.length>0&&(s.frontmatter?.nextUrl&&(s.otherLinks=s.otherLinks.filter((t=>t.url!=s.frontmatter.nextUrl))),s.frontmatter?.prevUrl&&(s.otherLinks=s.otherLinks.filter((t=>t.url!=s.frontmatter.prevUrl)))),t.$$set=t=>{"data"in t&&r(0,s=t.data)},[s]}class U extends t{constructor(t){super(),e(this,t,T,E,r,{data:0})}}export{U as default};
