(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[109,697],{5221:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return p}});var n=e(5612),a=e(6304),i=e(3873),s=e(8220),c="trendMovies_title__upJJa",u=e(184);var o=function(){var t=(0,n.s)({getFetch:s.Df}).state,r=t.items,e=t.loading,o=t.error;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{className:c,children:"Trending today"}),e&&(0,u.jsx)(a.default,{}),o&&(0,u.jsx)("p",{children:"Something gone wrong..."}),(0,u.jsx)(i.Z,{items:r})]})},f=e(6119);var p=function(){return(0,u.jsx)("main",{children:(0,u.jsx)(f.Z,{children:(0,u.jsx)(o,{})})})}},6119:function(t,r,e){"use strict";e.d(r,{Z:function(){return i}});var n="container_container__7D7mb",a=e(184);var i=function(t){var r=t.children;return(0,a.jsx)("div",{className:n,children:r})}},6304:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return s}});e(3158);var n=e(6373),a="loader_box__6R4dw",i=e(184);var s=function(){return(0,i.jsx)("div",{className:a,children:(0,i.jsx)(n.g4,{color:"grey",ariaLabel:"loading"})})}},3873:function(t,r,e){"use strict";e.d(r,{Z:function(){return p}});var n=e(501),a=e(6871),i="moviesListItem_item__cq7Zn",s="moviesListItem_img__EPd9N",c=e(184);var u=function(t){var r=t.title,e=t.poster_path;return(0,c.jsxs)("li",{className:i,children:[(0,c.jsx)("img",{className:s,src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(e),alt:r,width:"150"}),(0,c.jsx)("h3",{children:r})]})},o="moviesList_list__ddhEG";function f(t){var r=t.items,e=(0,a.TH)(),i=r.map((function(t){var r=t.id,a=t.title,i=t.poster_path;return(0,c.jsx)("li",{children:(0,c.jsx)(n.rU,{to:"/movies/".concat(r),state:{from:e},children:(0,c.jsx)(u,{title:a,poster_path:i})})},r)}));return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:o,children:i})})}var p=f;f.defaultProps={items:[]}},5612:function(t,r,e){"use strict";e.d(r,{s:function(){return v}});var n=e(907);var a=e(181);function i(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=e(1413),c=e(5861),u=e(885),o=e(7757),f=e.n(o),p=e(2007),d=e.n(p),l=e(2791);function v(t){var r=t.getFetch,e=t.array,n=void 0===e?[]:e,a=t.params,o=t.firstRender,p=void 0===o?{}:o,d=(0,l.useState)({items:[],loading:!1,error:null}),v=(0,u.Z)(d,2),h=v[0],m=v[1];return(0,l.useEffect)((function(){function t(){return(t=(0,c.Z)(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m((function(t){return(0,s.Z)((0,s.Z)({},t),{},{loading:!0})})),t.prev=1,t.next=4,r(a);case 4:e=t.sent,m((function(t){return(0,s.Z)((0,s.Z)({},t),{},{items:[].concat(i(t.items),i(e))})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),m((function(r){return(0,s.Z)((0,s.Z)({},r),{},{error:t.t0})}));case 11:return t.prev=11,m((function(t){return(0,s.Z)((0,s.Z)({},t),{},{loading:!1})})),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}p.current?p.current=!1:function(){t.apply(this,arguments)}()}),i(n)),{state:h,setState:m}}v.defaultProps={getFetch:function(){},array:[],firstRender:{}},v.propTypes={getFetch:d().func.isRequired,array:d().array,params:d().string,firstRender:d().object}},8220:function(t,r,e){"use strict";e.d(r,{Df:function(){return u},M1:function(){return f},NV:function(){return d},TP:function(){return o},tx:function(){return p}});var n=e(5861),a=e(7757),i=e.n(a),s=e(4569),c=e.n(s)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"de419034fa7ae645a6c15de713b25b76"}}),u=function(){var t=(0,n.Z)(i().mark((function t(){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("trending/movie/day",{params:{page:1}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},888:function(t,r,e){"use strict";var n=e(9047);function a(){}function i(){}i.resetWarningCache=a,t.exports=function(){function t(t,r,e,a,i,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:a};return e.PropTypes=e,e}},2007:function(t,r,e){t.exports=e(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=109.5ca68bcf.chunk.js.map