(this["webpackJsonpreact-new-repository"]=this["webpackJsonpreact-new-repository"]||[]).push([[0],{18:function(t,e,n){t.exports={filmPoster:"FilmList_filmPoster__2dH60",filmsItem:"FilmList_filmsItem__2C-by"}},22:function(t,e,n){t.exports={filmList:"HomePage_filmList__11YPR"}},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(33),s=n.n(c),i=n(2),o=n(8),h=n.n(o),u=n(10),l=n(12),p=n(13),j=n(15),d=n(14),m=n(16),f=n.n(m);function b(){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()({method:"GET",url:"https://api.themoviedb.org/3/trending/movie/week?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){return f()({method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(t,"?api_key=8d4e0a5a0c37d4780eefdf617d0feea1")})}function x(t){return f()({method:"GET",url:"https://api.themoviedb.org/3/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query="+t})}var y=n(7),g=n(18),w=n.n(g),k=n(0),_=function(t){var e=t.movies,n=t.history,r=t.query;return Object(k.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.title,c=t.poster_path;return Object(k.jsxs)("li",{className:w.a.filmsItem,children:[c&&Object(k.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c),alt:a,className:w.a.filmPoster}),Object(k.jsx)(y.c,{to:{pathname:"/movies/".concat(e),state:{id:e,from:n.location,query:r}},children:a})]},e)}))})},S=n(22),q=n.n(S),C=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={movies:[]},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:e=t.sent,this.setState({movies:e.data.results});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.movies;return Object(k.jsx)(_,{movies:t,history:this.props.history.location,className:q.a.filmList})}}]),n}(r.Component),E=n(19),F=function(t){var e=t.match,n=Object(i.f)();console.log("history",n);var a=Object(r.useState)([]),c=Object(E.a)(a,2),s=c[0],o=c[1];return console.log("cast",s),Object(r.useEffect)((function(){var t;(t=e.params.id,f.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"))).then((function(t){return o(t.data.cast)}))}),[e.params.id]),Object(k.jsxs)(k.Fragment,{children:[s.length>0&&Object(k.jsx)("h1",{children:"Cast"}),Object(k.jsx)("ul",{children:s.length>0?s.map((function(t){var e=t.name,n=t.id,r=t.profile_path,a=t.title;return Object(k.jsxs)("li",{children:[r&&Object(k.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r),alt:a}),Object(k.jsx)("h2",{children:e})]},n)})):Object(k.jsx)("li",{children:Object(k.jsx)("p",{children:"Sorry, but there is no information about cast in this film"})})})]})},G=function(t){var e=t.match,n=Object(i.f)();console.log("history",n);var a=Object(r.useState)([]),c=Object(E.a)(a,2),s=c[0],o=c[1];return console.log("reviews",s),Object(r.useEffect)((function(){var t;(t=e.params.id,f.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=8d4e0a5a0c37d4780eefdf617d0feea1"))).then((function(t){return o(t.data.results)}))}),[e.params.id]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{children:"Reviews"}),Object(k.jsx)("ul",{children:s.length>0?s.map((function(t){var e=t.author,n=t.content,r=t.created_at,a=t.id;return Object(k.jsxs)("li",{children:[Object(k.jsx)("h2",{children:e}),Object(k.jsx)("p",{children:n}),Object(k.jsx)("time",{children:r})]},a)})):Object(k.jsx)("li",{children:Object(k.jsx)("p",{children:"Sorry, but there is no information about reviews in this film"})})})]})},L=(n(67),n(68),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={film:{}},t.handleGoBack=function(){var e,n;t.props.history.push((null===(e=t.props.location)||void 0===e||null===(n=e.state)||void 0===n?void 0:n.from)||"/")},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("props",this.props),e=this.props.match.params.id,t.next=4,O(e);case 4:n=t.sent,this.setState({film:n.data}),console.log("response",n);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.film,e=t.title,n=t.overview,r=t.poster_path,a=this.props.match,c=a.url,s=a.path,o=this.props;return console.log("review",o),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("button",{type:"button",onClick:this.handleGoBack,children:"Go back"}),Object(k.jsx)("h1",{children:e}),r&&Object(k.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:e}),Object(k.jsx)("p",{children:n}),Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)(y.b,{to:{pathname:"".concat(c,"/cast"),state:this.props.location.state},children:"Cast"})}),Object(k.jsx)("li",{children:o.lenght>0&&Object(k.jsx)(y.b,{to:{pathname:"".concat(c,"/reviews"),state:this.props.location.state},children:"Reviews"})})]}),Object(k.jsx)(i.a,{path:"".concat(s,"/cast"),component:F}),o.lenght>0&&Object(k.jsx)(i.a,{path:"".concat(s,"/reviews"),component:G})]})}}]),n}(r.Component)),P=function(){return Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)(y.c,{to:"/",children:"Home"})}),Object(k.jsx)("li",{children:Object(k.jsx)(y.c,{to:"/movies",children:"Movies"})})]})},M=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={query:"",films:[]},t.handleSubmit=function(e){e.preventDefault(),x(t.state.query).then((function(e){t.setState({films:e.data.results}),t.onQueryChange()}))},t.handleChange=function(e){t.setState({query:e.target.value})},t.onQueryChange=function(){var e=t.props,n=e.history,r=e.location;n.push({pathname:r.pathname,search:"query=".concat(t.state.query.trim())})},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=new URLSearchParams(this.props.location.search)).get("query")){t.next=6;break}return t.next=4,x(e.get("query"));case 4:n=t.sent,this.setState({films:n.data.results});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.query,n=t.films;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(k.jsx)("input",{type:"text",value:e,onChange:this.handleChange}),Object(k.jsx)("button",{children:"Search"})]}),Object(k.jsx)(_,{movies:n,history:this.props.history,query:e})]})}}]),n}(r.Component);n(69),n(70),n(71),n(72);var D=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(P,{}),Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{exact:!0,path:"/",component:C}),Object(k.jsx)(i.a,{path:"/movies/:id",component:L}),Object(k.jsx)(i.a,{path:"/movies",component:M})]})]})};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(y.a,{children:Object(k.jsx)(D,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.30602883.chunk.js.map