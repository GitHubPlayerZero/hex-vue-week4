import{_ as $,z as j,A as J,a as h,o as Z,c as H,d as o,y as e,l as a,h as L,p as X,m as Y,B as d}from"./index-Btr8lL4W.js";import{a as G}from"./auth-BJOwzhC7.js";const n=u=>(X("data-v-05216245"),u=u(),Y(),u),Q={class:"container"},U=n(()=>o("h1",null,"測試",-1)),F=n(()=>o("h2",null,"alert",-1)),K=n(()=>o("br",null,null,-1)),P=n(()=>o("br",null,null,-1)),q=n(()=>o("hr",null,null,-1)),oo=n(()=>o("h2",null,"Cookie",-1)),to=n(()=>o("br",null,null,-1)),eo=n(()=>o("br",null,null,-1)),no=n(()=>o("br",null,null,-1)),so=n(()=>o("br",null,null,-1)),lo=n(()=>o("hr",null,null,-1)),co=n(()=>o("h2",null,"rout、router",-1)),ro=n(()=>o("hr",null,null,-1)),uo=n(()=>o("h2",null,"auth",-1)),io={__name:"Test",setup(u){const p=j(),k=J(),s=d("cookie_test"),i=d("cookie_test2");function f(){s.setup()}function y(){s.setValue("abcdefg"),s.setup()}function _(){const t=new Date;t.setDate(t.getDate()+1),t.setHours(1),t.setMinutes(0),t.setSeconds(0),s.setExpires(t),s.setup()}function C(){console.log(s.isExist())}function m(){const t=s.getValue();console.log("cookie value ==>",t,", typeof ==>",typeof t),console.log("value === undefined? ",t===void 0),console.log("value.length ==>",t.length)}function E(){s.remove()}function S(){console.log(s.getSettingsContent())}function x(){s.clearSettings()}function v(){i.setValue("12345"),i.setup()}function I(){console.log(i.isExist())}function w(){console.log("testCookie2 value ==>",i.getValue())}function b(){const t="cookie_test2",l=new RegExp(`(?:^|;\\s*)${t}\\s*\\=`),c=new RegExp(`(?:(?:^|.*;)\\s*${t}\\s*\\=\\s*([^;]*).*$)|^.*$`);console.log("reg4Search ==>",l),console.log("reg4Value ==>",c);const r=document.cookie;console.log("document.cookie ==>",r),console.log("is exist3 (reg4Search)? ",l.test(r)),console.log("is exist3 (reg4Value)? ",c.test(r)),console.log("get value3 (reg4Search) ==>",r.replace(l,"$1")),console.log("get value3 (reg4Value) ==>",r.replace(c,"$1"))}function V(){console.log("route ==>",p),console.log(""),console.log("router ==>",k),console.log(""),console.log("router.getRoutes() ==>",k.getRoutes())}function A(){G.login("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiItTzVHYkZhWVZtWDdONzlhUWNMSyIsIm5pY2tuYW1lIjoiZXhhbXBsZSIsImlhdCI6MTcyNDcyNDg3NSwiZXhwIjoxNzI0OTg0MDc1fQ.7RHGAFgpfsfmWdAMtrh_O8CEasYmGEsAPNLOuJIHz")}function R(){const t=a.get();console.log("token ==>",t),console.log("typeof token ==>",typeof t,", token.length ==>",t.length),console.log("token === undefined? ",t===void 0),console.log("token === null? ",t===null)}function T(){console.log("has token ?",a.isExist())}function D(){a.remove()}function N(){console.log("1111111111111"),async function(){const t=a.get();console.log("[check] token ==>",t);let l={status:!1};if(t)try{const c=await L.getCheckout(t);console.log("[check] res ==>",c),l={...c.data}}catch(c){console.error("[check] error ==>",c)}console.log("[check] end. result ==>",l),l.status||console.log("登出導頁！")}(),console.log("222222222")}const g=h(),O=h({icon:"info",allowEscapeKey:!0,confirmButtonColor:"#0f0"});function M(){g.errorModel.fire("錯誤測試！")}async function B(){console.log("[testAlertError4String] start..."),await g.alertError("字串錯誤"),console.log("[testAlertError4String] end.")}function W(){console.log("[testAlertError4Array] start...");const t=["陣列錯誤訊息 1","陣列錯誤訊息 2","陣列錯誤訊息 3"];g.alertError(t,{icon:"success",allowOutsideClick:!0,confirmButtonColor:"#00f"}),console.log("[testAlertError4Array] end.")}function z(){const t={error1:"物件錯誤訊息 1",error2:"物件錯誤訊息 2",error3:"物件錯誤訊息 3"};O.alertError(t)}return(t,l)=>(Z(),H("div",Q,[U,F,o("div",{class:"box"},[o("button",{type:"button",onClick:M},"error SWAL2"),e("   "),K,P,o("button",{type:"button",onClick:B},"alert error (String) (同步)"),e("   "),o("button",{type:"button",onClick:W},"alert error (Array) 使用自訂義設定)"),e("   "),o("button",{type:"button",onClick:z},"alert error (Object) (使用 mySwal2)"),e("   ")]),q,oo,o("div",{class:"box"},[o("button",{type:"button",onClick:f},"新增空的 cookie"),e("   "),o("button",{type:"button",onClick:y},"modifyValue"),e("   "),o("button",{type:"button",onClick:_},"modifyDate"),e("   "),o("button",{type:"button",onClick:C},"isExist"),e("   "),o("button",{type:"button",onClick:m},"getValue"),e("   "),o("button",{type:"button",onClick:E},"remove"),e("   "),o("button",{type:"button",onClick:S},"顯示 setting 內容"),e("   "),o("button",{type:"button",onClick:x},"clearSettings"),e("   "),to,eo,o("button",{type:"button",onClick:v},"新增 cookie2"),e("   "),o("button",{type:"button",onClick:I},"isExist2"),e("   "),o("button",{type:"button",onClick:w},"getValue2"),e("   "),no,so,o("button",{type:"button",onClick:b},"testReg"),e("   ")]),lo,co,o("div",{class:"box"},[o("button",{type:"button",onClick:V},"顯示 route、router 資訊"),e("   ")]),ro,uo,o("div",{class:"box"},[o("button",{type:"button",onClick:b},"testReg"),e("   "),o("button",{type:"button",onClick:A},"test login"),e("   "),o("button",{type:"button",onClick:R},"show Token"),e("   "),o("button",{type:"button",onClick:T},"has Token ?"),e("   "),o("button",{type:"button",onClick:D},"remove Token"),e("   "),o("button",{type:"button",onClick:N},"check auth"),e("   ")])]))}},ko=$(io,[["__scopeId","data-v-05216245"]]);export{ko as default};
