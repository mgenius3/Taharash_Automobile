(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{8514:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[blog]",function(){return r(4100)}])},4642:function(e,n,r){"use strict";var t=r(7568),s=r(1438),o=r(2951),i=r(4051),a=r.n(i),c=function(){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(0,s.Z)(this,e),this.baseURL=n,this.token=r}return(0,o.Z)(e,[{key:"get",value:function(e){var n=this;return(0,t.Z)(a().mark((function r(){var t,s,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("/serve"+n.baseURL+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}});case 3:if((t=r.sent).ok){r.next=9;break}return r.next=7,t.json();case 7:throw s=r.sent,new Error(s.msg);case 9:return r.next=11,t.json();case 11:return o=r.sent,r.abrupt("return",{response:o.msg,error:null});case 15:return r.prev=15,r.t0=r.catch(0),r.abrupt("return",{response:null,error:r.t0.message});case 18:case"end":return r.stop()}}),r,null,[[0,15]])})))()}},{key:"post",value:function(e,n){var r=this;return(0,t.Z)(a().mark((function t(){var s,o,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/serve"+r.baseURL+e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)},body:JSON.stringify(n)});case 3:if((s=t.sent).ok){t.next=9;break}return t.next=7,s.json();case 7:throw o=t.sent,new Error(o.msg);case 9:return t.next=11,s.json();case 11:return i=t.sent,t.abrupt("return",{response:i.msg,error:null});case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",{response:null,error:t.t0.message});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}},{key:"delete",value:function(e){var n=this;return(0,t.Z)(a().mark((function r(){var t,s,o;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("/serve"+n.baseURL+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}});case 3:if((t=r.sent).ok){r.next=9;break}return r.next=7,t.json();case 7:throw s=r.sent,new Error(s.msg);case 9:return r.next=11,t.json();case 11:return o=r.sent,r.abrupt("return",{response:o.msg,error:null});case 15:return r.prev=15,r.t0=r.catch(0),r.abrupt("return",{response:null,error:r.t0.message});case 18:case"end":return r.stop()}}),r,null,[[0,15]])})))()}}]),e}();n.Z=c},4100:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var t=r(7568),s=r(4051),o=r.n(s),i=r(5893),a=r(7294),c=r(1708),u=r(1163),l=r(4642),d=r(2920);function h(){var e=new l.Z("/blog"),n=(0,u.useRouter)().query.blog,r=(0,a.useState)([]),s=r[0],h=r[1];return(0,a.useEffect)((function(){var r=function(){var r=(0,t.Z)(o().mark((function r(){var t,s,i;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(n),void 0==n){r.next=9;break}return r.next=4,e.get("/".concat(n));case 4:t=r.sent,s=t.response,i=t.error,console.log(s),i?d.Am.error("unable to fetch blog, refresh"):h(s);case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[n]),(0,i.jsx)(c.Z,{children:(0,i.jsx)("div",{id:"blog",children:null===s||void 0===s?void 0:s.map((function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{style:{fontSize:"40px",fontWeight:"bolder",margin:"10px",textAlign:"center",opacity:"0.6",padding:"10px"},className:"mx-3 mx-lg-5",children:"".concat(null===e||void 0===e?void 0:e.name)}),(0,i.jsxs)("section",{className:"blog_body_main",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"d1",children:[(null===e||void 0===e?void 0:e.introduction)?(0,i.jsx)("h3",{children:"Introduction"}):null,(0,i.jsx)("p",{children:(0,i.jsx)("pre",{children:"".concat(JSON.parse(null===e||void 0===e?void 0:e.introduction).name)})}),(null===e||void 0===e?void 0:e.introduction)&&(0,i.jsx)("img",{src:"".concat(JSON.parse(null===e||void 0===e?void 0:e.introduction).imageurl)})]}),(0,i.jsx)("div",{className:"d2",children:(0,i.jsx)("img",{})}),(0,i.jsxs)("div",{className:"d3",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{})}),(0,i.jsx)("span",{})]}),(null===e||void 0===e?void 0:e.sub_heading)&&JSON.parse(null===e||void 0===e?void 0:e.sub_heading).map((function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"d6",children:[(0,i.jsx)("h6",{children:null===e||void 0===e?void 0:e.title}),(0,i.jsx)("p",{children:(0,i.jsx)("pre",{children:null===e||void 0===e?void 0:e.body})})]}),(0,i.jsx)("div",{className:"d7",children:(0,i.jsx)("img",{src:null===e||void 0===e?void 0:e.imageurl})})]})})),(0,i.jsxs)("div",{className:"d9",children:[(0,i.jsx)("h5",{children:"Conclusion"}),(0,i.jsx)("p",{children:null===e||void 0===e?void 0:e.conclusion})]})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("p",{children:["Written @ ",new Date(null===e||void 0===e?void 0:e.created_at).toDateString()]})}),(0,i.jsx)("hr",{})]}),(0,i.jsx)("section",{className:"blog_footer",children:(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"latest",children:[(0,i.jsx)("h6",{children:"Taharish blog"}),(0,i.jsx)("h3",{children:"From the blog"}),(0,i.jsx)("p",{children:"The latest industry news, interviews, technologies, and resources."}),(0,i.jsx)("button",{children:"View all Blogs"})]})})})]})}))})})}},1438:function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}r.d(n,{Z:function(){return t}})},2951:function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}r.d(n,{Z:function(){return s}})}},function(e){e.O(0,[82,160,715,5,708,774,888,179],(function(){return n=8514,e(e.s=n);var n}));var n=e.O();_N_E=n}]);