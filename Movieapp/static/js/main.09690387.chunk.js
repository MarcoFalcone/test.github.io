(this.webpackJsonpreactapi=this.webpackJsonpreactapi||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(7),a=c.n(n),r=c(14),o=c(4),l=c.n(o),d=c(8),u=c(2),j=c(10),b=c(9),h=(c(20),c(0)),f=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",{onChange:function(t){return e.setSearch(t.target.value)},className:"searchbox",placeholder:"search movies ..."})})},p=(c(22),function(e){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("header",{children:e.title}),Object(h.jsx)("div",{className:"left",onClick:function(){document.getElementById(e.id).scrollLeft+=-1500},children:"\u276e"}),Object(h.jsx)("div",{className:"right",onClick:function(){document.getElementById(e.id).scrollLeft+=1500},children:"\u276f"}),Object(h.jsx)("div",{className:"collection",id:e.id,children:e.movies.map((function(t,c){return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:""}),Object(h.jsxs)("div",{className:"over",children:[Object(h.jsx)("p",{children:t.overview}),Object(h.jsxs)("p",{children:["\u2606",t.vote_average]}),Object(h.jsx)("p",{onClick:function(){return e.handlelist(t)},children:e.function})]})]},c)}))})]})}),v=(c(23),function(e){return Object(h.jsxs)("div",{className:"containerDevice",children:[Object(h.jsx)("header",{className:"headerDevice",children:e.title}),Object(h.jsx)("div",{className:"collectionDevice",children:e.movies.map((function(t,c){return Object(h.jsx)("div",{className:"movieDevice",onClick:function(){return e.toggle(t)},children:Object(h.jsx)("img",{className:"posterDevice",src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:""})},c)}))})]})}),m=(c(24),function(e){return Object(h.jsx)(h.Fragment,{children:e.movie.map((function(t,c){return Object(h.jsxs)("div",{className:"moviemobile",children:[Object(h.jsx)("p",{className:"close",onClick:e.close,children:"\u2715"}),Object(h.jsx)("div",{className:"insidecont",children:Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("img",{className:"postermobile",src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:""}),t.overview]}),Object(h.jsxs)("p",{children:["\u2606",t.vote_average]})]})}),Object(h.jsx)("p",{className:"button",onClick:function(){return e.handlelist(t)},children:e.function})]},c)}))})}),O=(c(25),function(e){var t=Object(b.useMediaQuery)({query:"(min-device-width: 1225px)"}),c=Object(b.useMediaQuery)({query:"(max-device-width: 1224px)"}),i=Object(s.useState)([]),n=Object(u.a)(i,2),a=n[0],o=n[1],O=Object(s.useState)([]),g=Object(u.a)(O,2),x=g[0],y=g[1],_=Object(s.useState)([]),S=Object(u.a)(_,2),N=S[0],k=S[1],D=Object(s.useState)([]),T=Object(u.a)(D,2),w=T[0],I=T[1],L=Object(s.useState)([]),A=Object(u.a)(L,2),M=A[0],C=A[1],E=Object(s.useState)([]),U=Object(u.a)(E,2),F=U[0],R=U[1],q=Object(s.useState)([]),B=Object(u.a)(q,2),H=B[0],J=B[1],Q=Object(s.useState)([]),V=Object(u.a)(Q,2),W=V[0],z=V[1],G=Object(s.useState)(""),K=Object(u.a)(G,2),P=K[0],X=K[1],Y=Object(s.useState)([]),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=Object(s.useState)(),ce=Object(u.a)(te,2),se=ce[0],ie=ce[1],ne=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,s,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",t="https://api.themoviedb.org/3/search/movie?api_key=77de0ebb8c18224df76cf38477a907f5&query=".concat(P),e.next=4,fetch("https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.next=10,fetch(t);case 10:return i=e.sent,e.next=13,i.json();case 13:(n=e.sent).results?J(n.results):J(s.results);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,s,i,n,a,r,d,u,j,b,h,f,p,v,m,O;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=28&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",t="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=35&ssort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",c="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=27&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",s="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=10749&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",i="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=878&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",n="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=53&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",e.next=8,fetch("https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=28&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22");case 8:return a=e.sent,e.next=11,a.json();case 11:return r=e.sent,e.next=14,fetch(t);case 14:return d=e.sent,e.next=17,d.json();case 17:return u=e.sent,e.next=20,fetch(c);case 20:return j=e.sent,e.next=23,j.json();case 23:return b=e.sent,e.next=26,fetch(s);case 26:return h=e.sent,e.next=29,h.json();case 29:return f=e.sent,e.next=32,fetch(i);case 32:return p=e.sent,e.next=35,p.json();case 35:return v=e.sent,e.next=38,fetch(n);case 38:return m=e.sent,e.next=41,m.json();case 41:O=e.sent,o(r.results),y(u.results),k(b.results),I(f.results),C(v.results),R(O.results);case 48:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){ne()}),[P]),Object(s.useEffect)((function(){ae()}),[]);var re=function(e){var t=Object(r.a)(W);W.some((function(t){return e.id===t.id}))||t.push(e),z(t)},oe=function(e){var t=W.filter((function(t){return t.id!==e.id}));z(t)},le=function(e){var t=[];t.push(e),ee(t),ie({tag:"ADD TO LIST",action:re})},de=function(){ee([])};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"overlay",children:[Object(h.jsxs)("div",{className:"top",children:[Object(h.jsx)("img",{className:"header",src:"logo.svg",alt:""}),Object(h.jsx)(f,{search:P,setSearch:X})]}),t&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{movies:H,handlelist:re,function:"ADD TO LIST",id:"search"}),Object(h.jsx)(p,{title:"Action",movies:a,handlelist:re,function:"ADD TO LIST",id:"action"}),Object(h.jsx)(p,{title:"Comedy",movies:x,handlelist:re,function:"ADD TO LIST",id:"comedy"}),Object(h.jsx)(p,{title:"Horror",movies:N,handlelist:re,function:"ADD TO LIST",id:"horror"}),Object(h.jsx)(p,{title:"Romance",movies:w,handlelist:re,function:"ADD TO LIST",id:"romance"}),Object(h.jsx)(p,{title:"Sci-fi",movies:M,handlelist:re,function:"ADD TO LIST",id:"scifi"}),Object(h.jsx)(p,{title:"Thriller",movies:F,handlelist:re,function:"ADD TO LIST",id:"thriller"}),Object(h.jsx)(p,{title:"My list",movies:W,handlelist:oe,function:"REMOVE FROM LIST",id:"mylist"})]}),c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{toggle:le,movies:H,handlelist:re}),Object(h.jsx)(v,{toggle:le,title:"Action",movies:a,handlelist:re}),Object(h.jsx)(v,{toggle:le,title:"Comedy",movies:x,handlelist:re}),Object(h.jsx)(v,{toggle:le,title:"Horror",movies:N,handlelist:re}),Object(h.jsx)(v,{toggle:le,title:"Romance",movies:w,handlelist:re}),Object(h.jsx)(v,{toggle:le,title:"Sci-fi",movies:M,handlelist:re}),Object(h.jsx)(v,{toggle:le,title:"Thriller",movies:F,handlelist:re}),Object(h.jsx)(v,{toggle:function(e){var t=[];t.push(e),ee(t),ie({tag:"REMOVE FROM LIST",action:oe})},title:"My list",movies:W,handlelist:oe}),Object(h.jsx)(j.Transition,{native:!0,items:$,from:{opacity:0,height:0},enter:{opacity:1,height:500},leave:{opacity:0,height:0},config:{duration:200},children:function(e){return e&&function(e){return Object(h.jsx)(j.animated.div,{className:"popup",style:e,children:Object(h.jsx)(m,{movie:$,close:de,handlelist:se.action,function:se.tag})})}}})]}),Object(h.jsx)("footer",{children:"Work by Marco Falcone"})]})})});a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.09690387.chunk.js.map