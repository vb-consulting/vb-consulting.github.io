import{S as t,i as a,s,e,h as l,c as i,a as n,d as o,j as r,v as h,b as c,f as d,l as b,n as u,t as g,k as f,m}from"../index-89f6e244.js";function p(t){let a,s,u,p,k,v,y,w,E;return{c(){a=e("a"),s=g(t[1]),u=g(" on GitHub\n            "),p=e("i"),v=l(),y=e("a"),w=g("Follow me on LinkedIn\n            "),E=e("i"),this.h()},l(e){a=i(e,"A",{class:!0,target:!0,"data-bs-toggle":!0,"data-bs-html":!0,title:!0,href:!0,style:!0});var l=n(a);s=f(l,t[1]),u=f(l," on GitHub\n            "),p=i(l,"I",{class:!0}),n(p).forEach(o),l.forEach(o),v=r(e),y=i(e,"A",{class:!0,target:!0,"data-bs-toggle":!0,"data-bs-html":!0,title:!0,href:!0,style:!0});var h=n(y);w=f(h,"Follow me on LinkedIn\n            "),E=i(h,"I",{class:!0}),n(E).forEach(o),h.forEach(o),this.h()},h(){c(p,"class","bi bi-github"),c(a,"class","btn btn-link rl-arrow"),c(a,"target","_blank"),c(a,"data-bs-toggle","tooltip"),c(a,"data-bs-html","true"),c(a,"title",k=t[1]+" on GitHub"),c(a,"href",t[0]),h(a,"display","inline-grid"),c(E,"class","bi bi-linkedin"),c(y,"class","btn btn-link rl-arrow"),c(y,"target","_blank"),c(y,"data-bs-toggle","tooltip"),c(y,"data-bs-html","true"),c(y,"title","I post software development content almost daily..."),c(y,"href","https://www.linkedin.com/in/vb-software/"),h(y,"display","inline-grid")},m(t,e){d(t,a,e),b(a,s),b(a,u),b(a,p),d(t,v,e),d(t,y,e),b(y,w),b(y,E)},p(t,e){2&e&&m(s,t[1]),2&e&&k!==(k=t[1]+" on GitHub")&&c(a,"title",k),1&e&&c(a,"href",t[0])},d(t){t&&o(a),t&&o(v),t&&o(y)}}}function k(t){let a,s,g,f,m=t[0]&&p(t);return{c(){a=e("footer"),s=e("div"),m&&m.c(),g=l(),f=e("div"),this.h()},l(t){a=i(t,"FOOTER",{class:!0});var e=n(a);s=i(e,"DIV",{style:!0});var l=n(s);m&&m.l(l),l.forEach(o),g=r(e),f=i(e,"DIV",{class:!0,"data-bs-toggle":!0,"data-bs-html":!0,title:!0}),n(f).forEach(o),e.forEach(o),this.h()},h(){h(s,"display","flex"),h(s,"justify-content","center"),c(f,"class","mt-5 mb-5 background-floki svelte-1fna8f1"),c(f,"data-bs-toggle","tooltip"),c(f,"data-bs-html","true"),c(f,"title","Floki is a developer dog."),c(a,"class","mt-5 py-5 text-center")},m(t,e){d(t,a,e),b(a,s),m&&m.m(s,null),b(a,g),b(a,f)},p(t,[a]){t[0]?m?m.p(t,a):(m=p(t),m.c(),m.m(s,null)):m&&(m.d(1),m=null)},i:u,o:u,d(t){t&&o(a),m&&m.d()}}}function v(t,a,s){let{request:e}=a,{data:l}=a,i="",n="";if(0!=l.githubLink){i="string"==typeof l.githubLink?l.githubLink:"home"==e.route?"https://github.com/vb-consulting/":"https://github.com/vb-consulting/"+e.permalink.split("/")[1]+"/";let t=i.split("/");n=""==t[t.length-1]?t[t.length-2]:t[t.length-1]}return t.$$set=t=>{"request"in t&&s(2,e=t.request),"data"in t&&s(3,l=t.data)},[i,n,e,l]}class y extends t{constructor(t){super(),a(this,t,v,k,s,{request:2,data:3})}}export{y as default};
