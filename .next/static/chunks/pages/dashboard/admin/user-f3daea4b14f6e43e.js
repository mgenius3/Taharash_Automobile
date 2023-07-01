(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[707],{3834:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/admin/user",function(){return t(7741)}])},1164:function(e,n,t){"use strict";var r=t(5893),s=t(7294),i=t(2641),o=t(5005),l=t(2920);t(993);n.Z=function(e){var n=e.setConfirmation,t=e.action,c=e.title,d=e.packageId,a=(0,s.useState)(""),u=a[0],h=a[1],x=(0,s.useState)(!1),j=x[0],v=x[1];return(0,r.jsxs)(i.Z.Group,{className:"container p-5",children:[(0,r.jsx)(i.Z.Label,{children:(0,r.jsxs)("span",{style:{fontSize:"15px"},children:["Enter ",(0,r.jsx)("b",{style:{color:"green"},children:"confirm"})," ",c]})}),(0,r.jsx)("div",{className:"d-flex",children:(0,r.jsx)("input",{type:"text",value:u,onChange:function(e){h(e.target.value),v(!1)}})}),(0,r.jsx)("br",{}),(0,r.jsx)(o.Z,{onClick:function(){"confirm"===u?(v(!0),n(!1),t(d)):l.Am.error("wrong input")},children:"Confirm"}),j&&(0,r.jsx)("div",{className:"text-success",children:"Confirmed!"})]})}},7741:function(e,n,t){"use strict";t.r(n);var r=t(7568),s=t(4051),i=t.n(s),o=t(5893),l=t(7294),c=t(6857),d=t(6212),a=t(5005),u=t(1164),h=t(2920),x=(t(993),t(1163)),j=t(7893);n.default=function(){var e=(0,x.useRouter)(),n=(0,l.useState)((function(){return localStorage.getItem("token")}))[0],t=(0,l.useState)([]),s=t[0],v=t[1],f=(0,l.useState)(!1),p=f[0],m=f[1],E=(0,l.useState)(),b=E[0],g=E[1],S=(0,l.useState)(!1),w=S[0],N=S[1],k=(0,l.useState)(!0),Z=k[0],y=k[1];(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(s),e.next=4,fetch("/admin/user",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 4:if((t=e.sent).ok){e.next=10;break}return e.next=8,t.json();case 8:throw r=e.sent,new Error(r.msg);case 10:return e.next=12,t.json();case 12:o=e.sent,v(o.msg),console.log(o.msg),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var C=function(){return m(!1)},A=function(){var t=(0,r.Z)(i().mark((function t(){var r,s,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/admin/user/delete/".concat(null===b||void 0===b?void 0:b.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:if((r=t.sent).ok){t.next=9;break}return t.next=7,r.json();case 7:throw s=t.sent,new Error(null===s||void 0===s?void 0:s.msg);case 9:return t.next=11,r.json();case 11:o=t.sent,h.Am.success(null===o||void 0===o?void 0:o.msg),e.reload(),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}();return(0,o.jsxs)(c.Z,{children:[(0,o.jsxs)("div",{className:"table-responsive",children:[(0,o.jsxs)("h1",{children:["PLATFORM USER : ",(0,o.jsx)("b",{children:s.length})]}),(0,o.jsxs)("table",{className:"table table-striped",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col",children:"ID"}),(0,o.jsx)("th",{scope:"col",children:"FIRST NAME"}),(0,o.jsx)("th",{scope:"col",children:"LAST NAME"}),(0,o.jsx)("th",{scope:"col",children:"EMAIL"}),(0,o.jsx)("th",{scope:"col",children:"TELEPHONE"}),(0,o.jsx)("th",{scope:"col",children:"ADDRESS"})]})}),(0,o.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((function(e){return(0,o.jsxs)("tr",{onClick:function(){return function(e){m(!0),g(e)}(e)},style:{cursor:"pointer"},children:[(0,o.jsx)("td",{children:null===e||void 0===e?void 0:e.id}),(0,o.jsx)("td",{children:null===e||void 0===e?void 0:e.firstName}),(0,o.jsx)("td",{children:null===e||void 0===e?void 0:e.lastName}),(0,o.jsx)("td",{children:(0,j.S)(null===e||void 0===e?void 0:e.email,10)}),(0,o.jsx)("td",{children:null===e||void 0===e?void 0:e.telephone}),(0,o.jsx)("td",{children:(0,j.S)(null===e||void 0===e?void 0:e.address,15)})]},null===e||void 0===e?void 0:e.id)}))})]})]}),(0,o.jsxs)("div",{style:{overflow:"auto"},children:[(0,o.jsxs)(d.Z,{show:p,onHide:C,children:[(0,o.jsx)(d.Z.Header,{closeButton:!0,children:(0,o.jsxs)("button",{style:{backgroundColor:(null===b||void 0===b?void 0:b.paid)?"green":"red",color:"white",padding:"2px 3px",borderRadius:"5px",cursor:"pointer"},disabled:"delivered"==(null===b||void 0===b?void 0:b.status),children:["ID - ",null===b||void 0===b?void 0:b.id]})}),(0,o.jsx)(d.Z.Body,{children:(0,o.jsxs)("table",{className:"table",children:[(0,o.jsx)("thead",{style:{fontSize:"1.3rem",fontWeight:"bold",lineHeight:"1.5"},children:"User\xa0Details"})," ",(0,o.jsx)("br",{}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"USER ID"}),(0,o.jsx)("td",{children:null===b||void 0===b?void 0:b.id})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"FIRST NAME"}),(0,o.jsx)("td",{children:null===b||void 0===b?void 0:b.firstName})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"LAST NAME"}),(0,o.jsx)("td",{children:null===b||void 0===b?void 0:b.lastName})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"EMAIL"}),(0,o.jsx)("td",{children:null===b||void 0===b?void 0:b.email})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"TELEPHONE"}),(0,o.jsx)("td",{children:null===b||void 0===b?void 0:b.telephone})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"ADDRESS"}),(0,o.jsx)("td",{children:null===b||void 0===b?void 0:b.address})]})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("tfoot",{children:[(0,o.jsx)("th",{children:"Date Joined"}),(0,o.jsx)("td",{children:new Date(null===b||void 0===b?void 0:b.created_at).toLocaleString()})]})]})}),(0,o.jsxs)(d.Z.Footer,{className:"justify-content-start",children:[(0,o.jsx)(a.Z,{variant:"danger",onClick:function(){C(),y(!0),N(!0)},style:{background:"red",color:"white"},children:"Delete Account"})," "]}),(0,o.jsx)(d.Z.Footer,{children:(0,o.jsx)(a.Z,{variant:"secondary",onClick:C,children:"Close"})})]}),w?(0,o.jsxs)(d.Z,{show:Z,children:[(0,o.jsx)(u.Z,{setConfirmation:N,action:A,title:"to delete user account with id :.'".concat(null===b||void 0===b?void 0:b.id,"'")}),(0,o.jsx)(d.Z.Footer,{children:(0,o.jsx)(a.Z,{variant:"error",onClick:function(){return y(!1)},children:"Close"})})]}):null]})]})}}},function(e){e.O(0,[714,82,160,427,286,857,774,888,179],(function(){return n=3834,e(e.s=n);var n}));var n=e.O();_N_E=n}]);