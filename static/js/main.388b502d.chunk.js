(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{29:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(18),r=c.n(i),s=c(4),o=c.n(s),l=c(6),d=c(5),u=(c(29),c(19)),f=c.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),h=c(20),j=c(23),b=c.n(j),v=c(0),p=function(e){var t=e.title,c=e.fetchUrl,a=e.isLargeRow,i=Object(n.useState)([]),r=Object(d.a)(i,2),s=r[0],u=r[1],j=Object(n.useState)(""),p=Object(d.a)(j,2),O=p[0],g=p[1],m=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(c);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m()}),[c]);return Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("div",{className:"poster",children:s.map((function(e){return Object(v.jsx)("img",{onClick:function(){return function(e){O?g(""):b()((null===e||void 0===e?void 0:e.name)||" ").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return e}))}(e)},src:"".concat("https://image.tmdb.org/t/p/original").concat(a?e.poster_path:e.backdrop_path),alt:e.title,title:e.title,className:"poster_img ".concat(a&&"poster_largeimg")},e.id)}))}),O&&Object(v.jsx)(h.a,{videoId:O,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},O="378fd6c520f8574346fa45bfe688d238",g={fetchTrending:"/trending/all/week?api_key=".concat(O,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(O,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(O,"&language=en-US"),fetchActionMovies:"/discover/tv?api_key=".concat(O,"&language=en-US&page=1"),fetchComedyMovies:"/discover/tv?api_key=".concat(O,"&with_genres=35"),fetchHorrorMovies:"/discover/tv?api_key=".concat(O,"&with_genres=27"),FetchRomnceMovies:"/discover/tv?api_key=".concat(O,"&language=en-US&page=1"),fetchDocumentries:"/discover/tv?api_key=".concat(O,"&with_genres=99")},m=(c(69),function(){var e,t,c=Object(n.useState)([]),a=Object(d.a)(c,2),i=a[0],r=a[1],s=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(g.fetchNetflixOriginals);case 2:t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:"Banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundSize:"cover",backgroundPosition:"center center"},children:[Object(v.jsxs)("div",{className:"Banner_content",children:[Object(v.jsxs)("h1",{className:"Banner_title",children:[" ",(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)]}),Object(v.jsx)("button",{className:"buttons",children:"Play"}),Object(v.jsx)("button",{className:"buttons",children:"My List"}),Object(v.jsx)("p",{className:"description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(v.jsx)("div",{className:"banner-fade"})]})})}),x=(c(70),c(71),function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(v.jsxs)("div",{className:"Navbar ".concat(c&&"Nav_black"),children:[Object(v.jsx)("img",{className:"logo",alt:"logo",src:"https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8"}),Object(v.jsx)("img",{className:"avatar",alt:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"})]})});var w=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x,{}),Object(v.jsx)(m,{}),Object(v.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:g.fetchNetflixOriginals,isLargeRow:!0}),Object(v.jsx)(p,{title:"TRENDING",fetchUrl:g.fetchTrending}),Object(v.jsx)(p,{title:"TOP RATED",fetchUrl:g.fetchTopRated}),Object(v.jsx)(p,{title:"ACTION MOVIES",fetchUrl:g.fetchActionMovies}),Object(v.jsx)(p,{title:"COMEDY MONIES",fetchUrl:g.fetchComedyMovies}),Object(v.jsx)(p,{title:"ROMANTIC MOVIE",fetchUrl:g.FetchRomnceMovies}),Object(v.jsx)(p,{title:"DOCUMENTRIES",fetchUrl:g.fetchDocumentries})]})})};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.388b502d.chunk.js.map