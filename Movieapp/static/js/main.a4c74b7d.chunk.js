(this.webpackJsonpreactapi=this.webpackJsonpreactapi||[]).push([[0],{10:function(e,t,s){},21:function(e,t,s){},23:function(e,t,s){},24:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(7),a=s.n(n),r=s(15),o=s(4),l=s.n(o),d=s(8),u=s(2),j=s(9),b=s(14),h=(s(21),s(0)),f=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",{onChange:function(t){return e.setSearch(t.target.value)},className:"searchbox",placeholder:"search movies ..."})})},p=(s(10),function(e){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("header",{children:e.title}),Object(h.jsx)("div",{className:"left",onClick:function(){document.getElementById(e.id).scrollLeft+=-1500},children:"\u276e"}),Object(h.jsx)("div",{className:"right",onClick:function(){document.getElementById(e.id).scrollLeft+=1500},children:"\u276f"}),Object(h.jsx)("div",{className:"collection",id:e.id,children:e.movies.map((function(t,s){return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:""}),Object(h.jsxs)("div",{className:"over",children:[Object(h.jsx)("p",{children:t.overview}),Object(h.jsxs)("p",{children:["\u2606",t.vote_average]}),Object(h.jsx)("p",{onClick:function(){return e.handlelist(t)},children:e.function})]})]},s)}))})]})}),v=function(e){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("header",{children:e.title}),Object(h.jsx)("div",{className:"collection",id:e.id,children:e.movies.map((function(t,s){return Object(h.jsx)("div",{className:"movie",onClick:function(){return e.toggle(t)},children:Object(h.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:""})},s)}))})]})},m=(s(23),function(e){return Object(h.jsx)(h.Fragment,{children:e.movie.map((function(t,s){return Object(h.jsxs)("div",{className:"moviemobile",children:[Object(h.jsx)("p",{className:"close",onClick:e.close,children:"\u2715"}),Object(h.jsxs)("div",{className:"insidecont",children:[Object(h.jsx)("img",{className:"postermobile",src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:""}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("p",{children:t.overview}),Object(h.jsxs)("p",{children:["\u2606",t.vote_average]})]})]}),Object(h.jsx)("p",{className:"button",onClick:function(){return e.handlelist(t)},children:e.function})]},s)}))})}),O=(s(24),function(e){var t=Object(b.useMediaQuery)({query:"(max-width: 1024px)"}),s=Object(c.useState)([]),i=Object(u.a)(s,2),n=i[0],a=i[1],o=Object(c.useState)([]),O=Object(u.a)(o,2),g=O[0],x=O[1],y=Object(c.useState)([]),_=Object(u.a)(y,2),S=_[0],N=_[1],k=Object(c.useState)([]),T=Object(u.a)(k,2),w=T[0],D=T[1],I=Object(c.useState)([]),L=Object(u.a)(I,2),A=L[0],M=L[1],C=Object(c.useState)([]),E=Object(u.a)(C,2),U=E[0],F=E[1],R=Object(c.useState)([]),B=Object(u.a)(R,2),q=B[0],H=B[1],J=Object(c.useState)([]),V=Object(u.a)(J,2),W=V[0],Q=V[1],z=Object(c.useState)(""),G=Object(u.a)(z,2),K=G[0],P=G[1],X=Object(c.useState)([]),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=Object(c.useState)(),te=Object(u.a)(ee,2),se=te[0],ce=te[1],ie=function(){var e=Object(d.a)(l.a.mark((function e(){var t,s,c,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",t="https://api.themoviedb.org/3/search/movie?api_key=77de0ebb8c18224df76cf38477a907f5&query=".concat(K),e.next=4,fetch("https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 4:return s=e.sent,e.next=7,s.json();case 7:return c=e.sent,e.next=10,fetch(t);case 10:return i=e.sent,e.next=13,i.json();case 13:(n=e.sent).results?H(n.results):H(c.results);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(d.a)(l.a.mark((function e(){var t,s,c,i,n,r,o,d,u,j,b,h,f,p,v,m,O;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=28&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",t="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=35&ssort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",s="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=27&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",c="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=10749&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",i="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=878&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",n="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=53&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",e.next=8,fetch("https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=28&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22");case 8:return r=e.sent,e.next=11,r.json();case 11:return o=e.sent,e.next=14,fetch(t);case 14:return d=e.sent,e.next=17,d.json();case 17:return u=e.sent,e.next=20,fetch(s);case 20:return j=e.sent,e.next=23,j.json();case 23:return b=e.sent,e.next=26,fetch(c);case 26:return h=e.sent,e.next=29,h.json();case 29:return f=e.sent,e.next=32,fetch(i);case 32:return p=e.sent,e.next=35,p.json();case 35:return v=e.sent,e.next=38,fetch(n);case 38:return m=e.sent,e.next=41,m.json();case 41:O=e.sent,a(o.results),x(u.results),N(b.results),D(f.results),M(v.results),F(O.results);case 48:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){ie()}),[K]),Object(c.useEffect)((function(){ne()}),[]);var ae=function(e){var t=Object(r.a)(W);W.some((function(t){return e.id===t.id}))||t.push(e),Q(t)},re=function(e){var t=W.filter((function(t){return t.id!==e.id}));Q(t)},oe=function(e){var t=[];t.push(e),$(t),ce({tag:"ADD TO LIST",action:ae})},le=function(){$([])};return t?Object(h.jsxs)("div",{className:"overlay",children:[Object(h.jsxs)("div",{className:"top",children:[Object(h.jsx)("img",{className:"header",src:"logo.svg",alt:""}),Object(h.jsx)(f,{search:K,setSearch:P})]}),Object(h.jsx)(v,{toggle:oe,movies:q,handlelist:ae}),Object(h.jsx)(v,{toggle:oe,title:"Action",movies:n,handlelist:ae}),Object(h.jsx)(v,{toggle:oe,title:"Comedy",movies:g,handlelist:ae}),Object(h.jsx)(v,{toggle:oe,title:"Horror",movies:S,handlelist:ae}),Object(h.jsx)(v,{toggle:oe,title:"Romance",movies:w,handlelist:ae}),Object(h.jsx)(v,{toggle:oe,title:"Sci-fi",movies:A,handlelist:ae}),Object(h.jsx)(v,{toggle:oe,title:"Thriller",movies:U,handlelist:ae}),Object(h.jsx)(v,{toggle:function(e){var t=[];t.push(e),$(t),ce({tag:"REMOVE FROM LIST",action:re})},title:"My list",movies:W,handlelist:re}),Object(h.jsx)(j.Transition,{native:!0,items:Z,from:{opacity:0,height:0},enter:{opacity:1,height:500},leave:{opacity:0,height:0},config:{duration:200},children:function(e){return e&&function(e){return Object(h.jsx)(j.animated.div,{className:"popup",style:e,children:Object(h.jsx)(m,{movie:Z,close:le,handlelist:se.action,function:se.tag})})}}}),Object(h.jsx)("footer",{children:"Work by Marco Falcone"})]}):Object(h.jsxs)("div",{className:"overlay",children:[Object(h.jsxs)("div",{className:"top",children:[Object(h.jsx)("img",{className:"header",src:"logo.svg",alt:""}),Object(h.jsx)(f,{search:K,setSearch:P})]}),Object(h.jsx)(p,{movies:q,handlelist:ae,function:"ADD TO LIST",id:"search"}),Object(h.jsx)(p,{title:"Action",movies:n,handlelist:ae,function:"ADD TO LIST",id:"action"}),Object(h.jsx)(p,{title:"Comedy",movies:g,handlelist:ae,function:"ADD TO LIST",id:"comedy"}),Object(h.jsx)(p,{title:"Horror",movies:S,handlelist:ae,function:"ADD TO LIST",id:"horror"}),Object(h.jsx)(p,{title:"Romance",movies:w,handlelist:ae,function:"ADD TO LIST",id:"romance"}),Object(h.jsx)(p,{title:"Sci-fi",movies:A,handlelist:ae,function:"ADD TO LIST",id:"scifi"}),Object(h.jsx)(p,{title:"Thriller",movies:U,handlelist:ae,function:"ADD TO LIST",id:"thriller"}),Object(h.jsx)(p,{title:"My list",movies:W,handlelist:re,function:"REMOVE FROM LIST",id:"mylist"}),Object(h.jsx)("footer",{children:"Work by Marco Falcone"})]})});a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a4c74b7d.chunk.js.map