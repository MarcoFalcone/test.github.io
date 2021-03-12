(this.webpackJsonpreactapi=this.webpackJsonpreactapi||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(8),a=c.n(s),r=c(14),o=c(4),l=c.n(o),d=c(9),u=c(2),j=c(5),b=(c(20),c(0)),f=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",{onChange:function(t){return e.setSearch(t.target.value)},className:"searchbox",placeholder:"search movies ..."})})},h=c(10),p=(c(22),c(23),function(e){var t="https://image.tmdb.org/t/p/w500",c=Object(h.useMediaQuery)({query:"(min-device-width: 1225px)"}),n=Object(h.useMediaQuery)({query:"(max-device-width: 1224px)"});return Object(b.jsxs)(b.Fragment,{children:[c&&Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("header",{children:e.title}),Object(b.jsx)("div",{className:"left",onClick:function(){document.getElementById(e.id).scrollLeft+=-1500},children:"\u276e"}),Object(b.jsx)("div",{className:"right",onClick:function(){document.getElementById(e.id).scrollLeft+=1500},children:"\u276f"}),Object(b.jsx)("div",{className:"collection",id:e.id,children:e.movies.map((function(c,n){return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{className:"poster",src:t+c.poster_path,alt:""}),Object(b.jsxs)("div",{className:"over",children:[Object(b.jsx)("p",{children:c.overview}),Object(b.jsxs)("p",{children:["\u2606",c.vote_average]}),Object(b.jsx)("p",{onClick:function(){return e.handlelist(c)},children:e.function})]})]},n)}))})]}),n&&Object(b.jsxs)("div",{className:"containerDevice",children:[Object(b.jsx)("header",{className:"headerDevice",children:e.title}),Object(b.jsx)("div",{className:"collectionDevice",children:e.movies.map((function(c,n){return Object(b.jsx)("div",{className:"movieDevice",onClick:function(){return e.toggle(c)},children:Object(b.jsx)("img",{className:"posterDevice",src:t+c.poster_path,alt:""})},n)}))})]})]})}),v=(c(24),function(e){return Object(b.jsx)(b.Fragment,{children:e.movie.map((function(t,c){return Object(b.jsxs)("div",{className:"moviemobile",children:[Object(b.jsx)("p",{className:"close",onClick:e.close,children:"\u2715"}),Object(b.jsx)("div",{className:"insidecont",children:Object(b.jsxs)("div",{className:"info",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("img",{className:"postermobile",src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:""}),t.overview]}),Object(b.jsxs)("p",{children:["\u2606",t.vote_average]})]})}),Object(b.jsx)("p",{className:"button",onClick:function(){return e.handlelist(t)},children:e.function})]},c)}))})}),m=(c(25),function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)([]),o=Object(u.a)(a,2),h=o[0],m=o[1],O=Object(n.useState)([]),g=Object(u.a)(O,2),x=g[0],y=g[1],_=Object(n.useState)([]),S=Object(u.a)(_,2),D=S[0],N=S[1],T=Object(n.useState)([]),k=Object(u.a)(T,2),w=k[0],I=k[1],L=Object(n.useState)([]),A=Object(u.a)(L,2),E=A[0],M=A[1],U=Object(n.useState)([]),C=Object(u.a)(U,2),F=C[0],R=C[1],q=Object(n.useState)([]),B=Object(u.a)(q,2),J=B[0],Q=B[1],V=Object(n.useState)(""),H=Object(u.a)(V,2),W=H[0],z=H[1],G=Object(n.useState)(!1),K=Object(u.a)(G,2),P=K[0],X=K[1],Y=Object(n.useState)([]),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(),ce=Object(u.a)(te,2),ne=ce[0],ie=ce[1],se=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",t="https://api.themoviedb.org/3/search/movie?api_key=77de0ebb8c18224df76cf38477a907f5&query=".concat(W),e.next=4,fetch("https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 4:return c=e.sent,e.next=7,c.json();case 7:return n=e.sent,e.next=10,fetch(t);case 10:return i=e.sent,e.next=13,i.json();case 13:(s=e.sent).results?R(s.results):R(n.results);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,i,a,r,o,d,u,j,b,f,h,p,v,O,g;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=28&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",t="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=35&ssort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",c="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=27&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",n="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=10749&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",i="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=878&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",a="https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=53&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22",e.next=8,fetch("https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&with_genres=28&sort_by=popularity.desc&language=en-US&include_adult=false&include_video=false&page=1%22");case 8:return r=e.sent,e.next=11,r.json();case 11:return o=e.sent,e.next=14,fetch(t);case 14:return d=e.sent,e.next=17,d.json();case 17:return u=e.sent,e.next=20,fetch(c);case 20:return j=e.sent,e.next=23,j.json();case 23:return b=e.sent,e.next=26,fetch(n);case 26:return f=e.sent,e.next=29,f.json();case 29:return h=e.sent,e.next=32,fetch(i);case 32:return p=e.sent,e.next=35,p.json();case 35:return v=e.sent,e.next=38,fetch(a);case 38:return O=e.sent,e.next=41,O.json();case 41:g=e.sent,s(o.results),m(u.results),y(b.results),N(h.results),I(v.results),M(g.results);case 48:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){se()}),[W]),Object(n.useEffect)((function(){ae()}),[]);var re=function(e){var t=Object(r.a)(J);J.some((function(t){return e.id===t.id}))||t.push(e),Q(t),X(!0),setTimeout((function(){return X(!1)}),2e3)},oe=function(e){var t=J.filter((function(t){return t.id!==e.id}));Q(t)},le=function(e){var t=[];t.push(e),ee(t),ie({tag:"ADD TO LIST",action:re})},de=function(){ee([])};return Object(b.jsxs)("div",{className:"overlay",children:[Object(b.jsxs)("div",{className:"top",children:[Object(b.jsx)("img",{className:"header",src:"logo.svg",alt:""}),Object(b.jsx)(f,{search:W,setSearch:z})]}),Object(b.jsx)(p,{toggle:le,movies:F,handlelist:re,function:"ADD TO LIST",id:"search"}),Object(b.jsx)(p,{toggle:le,title:"Action",movies:i,handlelist:re,function:"ADD TO LIST",id:"action"}),Object(b.jsx)(p,{toggle:le,title:"Comedy",movies:h,handlelist:re,function:"ADD TO LIST",id:"comedy"}),Object(b.jsx)(p,{toggle:le,title:"Horror",movies:x,handlelist:re,function:"ADD TO LIST",id:"horror"}),Object(b.jsx)(p,{toggle:le,title:"Romance",movies:D,handlelist:re,function:"ADD TO LIST",id:"romance"}),Object(b.jsx)(p,{toggle:le,title:"Sci-fi",movies:w,handlelist:re,function:"ADD TO LIST",id:"scifi"}),Object(b.jsx)(p,{toggle:le,title:"Thriller",movies:E,handlelist:re,function:"ADD TO LIST",id:"thriller"}),Object(b.jsx)(p,{toggle:function(e){var t=[];t.push(e),ee(t),ie({tag:"REMOVE FROM LIST",action:oe})},title:"My list",movies:J,handlelist:oe,function:"REMOVE FROM LIST",id:"mylist"}),Object(b.jsx)(j.Transition,{native:!0,items:$,from:{opacity:0,height:0},enter:{opacity:1,height:500},leave:{opacity:0,height:0},config:{duration:200},children:function(e){return e&&function(e){return Object(b.jsx)(j.animated.div,{className:"popup",style:e,children:Object(b.jsx)(v,{movie:$,close:de,handlelist:ne.action,function:ne.tag})})}}}),Object(b.jsx)(j.Transition,{native:!0,items:P,from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:{duration:100},children:function(e){return e&&function(e){return Object(b.jsx)(j.animated.div,{className:"alert",style:e,children:Object(b.jsx)("p",{children:"ADDED TO LIST"})})}}}),Object(b.jsx)("footer",{children:"Work by Marco Falcone"})]})});a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.90d15669.chunk.js.map