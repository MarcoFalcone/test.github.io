(this.webpackJsonpreactapi=this.webpackJsonpreactapi||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),r=c(9),o=c(6),l=c.n(o),d=c(8),u=c(4),j=c(0),b=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("input",{value:e.value,onChange:function(t){return e.setSearch(t.target.value)},className:"searchbox",placeholder:"search movies"})})},h=function(e){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("header",{children:e.title}),Object(j.jsx)("div",{className:"left",onClick:function(){document.getElementById("collection").scrollLeft+=-1e3},children:"\u276e"}),Object(j.jsx)("div",{className:"right",onClick:function(){document.getElementById("collection").scrollLeft+=1e3},children:"\u276f"}),Object(j.jsx)("div",{className:"collection",id:"collection",children:e.movies.map((function(t){return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:""}),Object(j.jsxs)("div",{className:"over",children:[Object(j.jsx)("p",{children:t.overview}),Object(j.jsxs)("p",{children:["\u2606",t.vote_average]}),Object(j.jsx)("p",{onClick:function(){return e.handlelist(t)},children:e.function})]})]},t.id)}))})]})},f=(c(16),function(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),f=o[0],v=o[1],p=Object(n.useState)(""),m=Object(u.a)(p,2),O=m[0],x=m[1],g=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",t="https://api.themoviedb.org/3/search/movie?api_key=77de0ebb8c18224df76cf38477a907f5&query=".concat(O),e.next=4,fetch("https://api.themoviedb.org/3/discover/movie?api_key=77de0ebb8c18224df76cf38477a907f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 4:return c=e.sent,e.next=7,c.json();case 7:return n=e.sent,e.next=10,fetch(t);case 10:return s=e.sent,e.next=13,s.json();case 13:(i=e.sent).results?a(i.results):a(n.results);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){g()}),[O]);return Object(j.jsxs)("div",{className:"overlay",children:[Object(j.jsxs)("div",{className:"topbar",children:[Object(j.jsx)("h1",{className:"header",children:"SINEMA"}),Object(j.jsx)(b,{search:O,setSearch:x})]}),Object(j.jsx)(h,{title:"Movies",movies:s,handlelist:function(e){var t=[].concat(Object(r.a)(f),[e]);v(t)},function:"ADD TO LIST"}),Object(j.jsx)(h,{title:"My list",movies:f,handlelist:function(e){var t=f.filter((function(t){return t.id!==e.id}));v(t)},function:"REMOVE FROM LIST"})]})});i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a2decbf4.chunk.js.map