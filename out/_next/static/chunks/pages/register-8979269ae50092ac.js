(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{5511:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return s(72)}])},4642:function(e,r,s){"use strict";var n=s(7568),t=s(1438),a=s(2951),o=s(4051),c=s.n(o),l=function(){function e(r){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(0,t.Z)(this,e),this.baseURL=r,this.token=s}return(0,a.Z)(e,[{key:"get",value:function(e){var r=this;return(0,n.Z)(c().mark((function s(){var n,t,a;return c().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,fetch("/serve"+r.baseURL+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)}});case 3:if((n=s.sent).ok){s.next=9;break}return s.next=7,n.json();case 7:throw t=s.sent,new Error(t.msg);case 9:return s.next=11,n.json();case 11:return a=s.sent,s.abrupt("return",{response:a.msg,error:null});case 15:return s.prev=15,s.t0=s.catch(0),s.abrupt("return",{response:null,error:s.t0.message});case 18:case"end":return s.stop()}}),s,null,[[0,15]])})))()}},{key:"post",value:function(e,r){var s=this;return(0,n.Z)(c().mark((function n(){var t,a,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/serve"+s.baseURL+e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.token)},body:JSON.stringify(r)});case 3:if((t=n.sent).ok){n.next=9;break}return n.next=7,t.json();case 7:throw a=n.sent,new Error(a.msg);case 9:return n.next=11,t.json();case 11:return o=n.sent,n.abrupt("return",{response:o.msg,error:null});case 15:return n.prev=15,n.t0=n.catch(0),n.abrupt("return",{response:null,error:n.t0.message});case 18:case"end":return n.stop()}}),n,null,[[0,15]])})))()}},{key:"delete",value:function(e){var r=this;return(0,n.Z)(c().mark((function s(){var n,t,a;return c().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,fetch("/serve"+r.baseURL+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)}});case 3:if((n=s.sent).ok){s.next=9;break}return s.next=7,n.json();case 7:throw t=s.sent,new Error(t.msg);case 9:return s.next=11,n.json();case 11:return a=s.sent,s.abrupt("return",{response:a.msg,error:null});case 15:return s.prev=15,s.t0=s.catch(0),s.abrupt("return",{response:null,error:s.t0.message});case 18:case"end":return s.stop()}}),s,null,[[0,15]])})))()}}]),e}();r.Z=l},72:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return g}});var n=s(7568),t=s(4924),a=s(6042),o=s(9396),c=s(4051),l=s.n(c),i=s(5893),u=s(7294),d=s(7536),m=s(1708),p=s(2920),h=(s(993),s(1163)),x=s(5063),f=s.n(x),v=s(4642);function g(){var e=new v.Z("/user"),r=(0,u.useState)({}),s=r[0],c=r[1],x=(0,u.useState)(!1),g=x[0],j=x[1],b=(0,h.useRouter)(),w=(0,d.cI)(),N=w.handleSubmit,k=w.register,y=w.formState.errors,Z=function(e){c((0,o.Z)((0,a.Z)({},s),(0,t.Z)({},e.target.name,e.target.value)))},C=function(){var r=(0,n.Z)(l().mark((function r(){var n,t,a;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""===s.password||""===s.cpassword){r.next=14;break}if(s.password!=s.cpassword){r.next=11;break}return j(!0),r.next=5,e.post("/register",s);case 5:n=r.sent,t=n.response,a=n.error,t?(j(!1),p.Am.success("successful"),localStorage.setItem("token",t),b.back()):(j(!1),p.Am.error(a)),r.next=12;break;case 11:p.Am.error("password and confirm password are not equal");case 12:r.next=15;break;case 14:p.Am.error("please fill in the details correctly");case 15:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,i.jsx)(m.Z,{title:"Register",children:(0,i.jsxs)("div",{id:"page-content",children:[(0,i.jsx)("img",{src:"/images/tahicon.png",width:80,className:"mx-4 my-2"}),(0,i.jsx)("div",{className:"page section-header text-center",children:(0,i.jsx)("div",{className:"page-title",children:(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)("h1",{className:"page-width",children:"Create an Account"})})})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3",children:(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsxs)("form",{onSubmit:N(C),id:"CustomerLoginForm",className:"contact-form",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"FirstName",children:"First Name *"}),(0,i.jsx)("input",{type:"text",name:"firstName",placeholder:"",id:"firstName",required:!0,onChange:Z})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"LastName",children:"Last Name *"}),(0,i.jsx)("input",{type:"text",name:"lastName",placeholder:"",id:"LastName",required:!0,onChange:Z})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsxs)("label",{htmlFor:"input-telephone",children:["Telephone ",(0,i.jsx)("span",{className:"required-f",children:"*"})]}),(0,i.jsx)("input",(0,o.Z)((0,a.Z)({name:"telephone",id:"input-telephone",type:"tel",required:!0},k("telephone",{required:"Please enter telephone number",minLength:{value:11,message:"telephone number must be exacty 11 numbers"},maxLength:{value:11,message:"telephone number must be exacty 11 numbers"}})),{onChange:Z})),y.telephone&&(0,i.jsx)("div",{className:"text-danger text-center",children:y.telephone.message})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsxs)("label",{htmlFor:"input-address-1",children:["Address ",(0,i.jsx)("span",{className:"required-f",children:"*"})]}),(0,i.jsx)("input",{name:"address",id:"input-address-1",type:"text",required:!0,onChange:Z})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"CustomerEmail",children:"Email *"}),(0,i.jsx)("input",(0,o.Z)((0,a.Z)({type:"email",name:"email",placeholder:""},k("email",{required:"Please enter email",pattern:{value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,message:"Please enter valid email"}})),{onChange:Z}))]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"CustomerPassword",children:"Password *"}),(0,i.jsx)("input",(0,o.Z)((0,a.Z)({type:"password",defaultValue:"",name:"password",id:"password"},k("password",{required:"Please enter password",minLength:{value:6,message:"password should be more than 6 characters"}})),{onChange:Z})),y.password&&(0,i.jsx)("div",{className:"text-danger text-center",children:y.password.message})]})}),(0,i.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"CustomerPassword",children:"Confirm Password"}),(0,i.jsx)("input",{type:"password",defaultValue:"",name:"cpassword",id:"password",placeholder:"confirm password",onChange:Z})]})})]}),(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"text-center col-12 col-sm-12 col-md-12 col-lg-12",children:[g?(0,i.jsx)("input",{className:"btn mb-3",value:"loading...",disabled:!0}):(0,i.jsx)("input",{type:"submit",className:"btn mb-3",value:"submit"}),(0,i.jsxs)("p",{className:"mb-4 text-center",style:{color:"black",cursor:"pointer"},children:["Already a memeber ?"," ",(0,i.jsx)(f(),{href:"/login",id:"customer_register_link",children:(0,i.jsx)("b",{style:{color:"#6e0000"},children:"sign in "})})]})]})})]})})})})})]})})}},993:function(){},1438:function(e,r,s){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}s.d(r,{Z:function(){return n}})},2951:function(e,r,s){"use strict";function n(e,r){for(var s=0;s<r.length;s++){var n=r[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,r,s){return r&&n(e.prototype,r),s&&n(e,s),e}s.d(r,{Z:function(){return t}})}},function(e){e.O(0,[82,160,715,5,536,708,774,888,179],(function(){return r=5511,e(e.s=r);var r}));var r=e.O();_N_E=r}]);