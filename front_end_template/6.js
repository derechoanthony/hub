(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{444:function(e,n,t){"use strict";function r(e,n){return e===n}t.d(n,"a",function(){return a});var a=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=0,c=r.pop(),i=function(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every(function(e){return"function"==typeof e})){var t=n.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}(r),u=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(t)),l=e(function(){for(var e=[],n=i.length,t=0;t<n;t++)e.push(i[t].apply(null,arguments));return u.apply(null,e)});return l.resultFunc=c,l.dependencies=i,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,t=null,a=null;return function(){return function(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}(n,t,arguments)||(a=e.apply(null,arguments)),t=arguments,a}})},450:function(e,n,t){"use strict";var r=t(8),a=t.n(r),o=t(444),c=Object(o.a)(function(e){return e.organization},function(e){return e.common},function(e,n){return a()({organization:a()({},e)},n)}),i=Object(o.a)(function(e){return e.survey},function(e){return e.common},function(e,n){return a()({survey:a()({},e)},n)}),u=Object(o.a)(function(e){return e.user},function(e){return e.common},function(e,n){return a()({user:a()({},e)},n)}),l=Object(o.a)(function(e){return e.resources},function(e){return e.common},function(e,n){return a()({resources:a()({},e)},n)}),s=Object(o.a)(function(e){return e.library},function(e){return e.common},function(e,n){return a()({library:a()({},e)},n)}),f=Object(o.a)(function(e){return e.report},function(e){return e.common},function(e,n){return a()({report:a()({},e)},n)});t.d(n,"b",function(){return c}),t.d(n,"e",function(){return i}),t.d(n,"f",function(){return u}),t.d(n,"d",function(){return l}),t.d(n,"a",function(){return s}),t.d(n,"c",function(){return f})},455:function(e,n,t){"use strict";var r=t(59),a=t.n(r),o=t(23),c=t.n(o),i=t(35),u=t.n(i),l=t(36),s=t.n(l),f=t(37),p=t.n(f),m=t(38),d=t.n(m),h=t(39),b=t.n(h),v=t(0),g=t.n(v),y=t(430),j=t(264),O=t(519),k=t(441),C=t(24);n.a=function(e){return function(n){function t(e){var n;return u()(this,t),(n=p()(this,d()(t).call(this,e))).handleBreadCrumbClick=function(e){var t=e.path,r=e.type,a=e.entity,o=void 0===a?"":a,i=n.props,u=i.history,l=i.dispatch,s=i.breadCrumbs,f=c()(s);if(t){var p=f.findIndex(function(e){return e.path===t})+1;f.splice(p,f.length),l(Object(C.j)(f)),l(Object(C.k)(o)),l(Object(C.h)(e)),"parent"===r&&u.push(t)}},n}return b()(t,n),s()(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.route,t=e.dispatch;document.title=n.label||"Agile Wave Template",t(Object(C.a)()),t(Object(C.j)(n)),t(Object(C.h)(n))}},{key:"render",value:function(){var n=this,t=this.props,r=t.breadCrumbs,o=void 0===r?[]:r,c=t.activeData,i=(o[o.length-1]||{}).label||"",u=o.length>1;return g.a.createElement(g.a.Fragment,null,g.a.createElement(O.a,{"aria-label":"breadcrumb",className:u?"":"homeIcon"},g.a.createElement(y.a,null,"home"),o.map(function(e,t){var r=e.label;return t<o.length-1?g.a.createElement(k.a,{key:(new Date).toISOString()+t,color:"inherit",onClick:function(){return n.handleBreadCrumbClick(e)}},r):g.a.createElement(j.a,{key:(new Date).toISOString()+t,color:"textPrimary"},r)})),g.a.createElement(j.a,{variant:"h4",gutterBottom:!0},i),g.a.createElement(e,a()({key:c.path},this.props)))}}]),t}(v.PureComponent)}},519:function(e,n,t){"use strict";var r=t(1),a=t(40),o=t(3),c=t(0),i=(t(75),t(7),t(4)),u=t(5),l=t(264),s=t(18),f=t(63),p=Object(f.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(88);var d=Object(u.a)(function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(s.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}},{name:"PrivateBreadcrumbCollapsed"})(function(e){var n=e.classes,t=Object(o.a)(e,["classes"]);return c.createElement(m.a,Object(r.a)({component:"li",className:n.root,focusRipple:!0},t),c.createElement(p,{className:n.icon}))});var h=c.forwardRef(function(e,n){var t=e.children,u=e.classes,s=e.className,f=e.component,p=void 0===f?"nav":f,m=e.expandText,h=void 0===m?"Show path":m,b=e.itemsAfterCollapse,v=void 0===b?1:b,g=e.itemsBeforeCollapse,y=void 0===g?1:g,j=e.maxItems,O=void 0===j?8:j,k=e.separator,C=void 0===k?"/":k,E=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=c.useState(!1),x=w[0],S=w[1],N=c.Children.toArray(t).filter(function(e){return c.isValidElement(e)}).map(function(e,n){return c.createElement("li",{className:u.li,key:"child-".concat(n)},e)});return c.createElement(l.a,Object(r.a)({ref:n,component:p,color:"textSecondary",className:Object(i.a)(u.root,s)},E),c.createElement("ol",{className:u.ol},function(e,n,t){return e.reduce(function(r,a,o){return o<e.length-1?r=r.concat(a,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:n},t)):r.push(a),r},[])}(x||O&&N.length<=O?N:function(e){return y+v>=e.length?e:[].concat(Object(a.a)(e.slice(0,y)),[c.createElement(d,{"aria-label":h,key:"ellipsis",onClick:function(){S(!0)}})],Object(a.a)(e.slice(e.length-v,e.length)))}(N),u.separator,C)))});n.a=Object(u.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},862:function(e,n,t){"use strict";t.r(n);var r=t(35),a=t.n(r),o=t(36),c=t.n(o),i=t(37),u=t.n(i),l=t(38),s=t.n(l),f=t(39),p=t.n(f),m=t(0),d=t.n(m),h=t(90),b=t(450),v=t(455),g=function(e){function n(e){return a()(this,n),u()(this,s()(n).call(this,e))}return p()(n,e),c()(n,[{key:"render",value:function(){return d.a.createElement("div",null,"This is Reports")}}]),n}(m.PureComponent);n.default=Object(h.b)(b.c)(Object(v.a)(g))}}]);
//# sourceMappingURL=6.js.map