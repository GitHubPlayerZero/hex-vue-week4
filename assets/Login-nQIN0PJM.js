import{r as m,a as d,c as p,d as l,v as r,b as e,m as u,n as c,u as _,f,s as b,R as h,i as n}from"./index-BPdZWca8.js";import{a as w}from"./auth-CwhrsnPI.js";const v=e("h2",{class:"formControls_txt"},"最實用的線上代辦事項服務",-1),C=e("label",{class:"formControls_label",for:"email"},"Email",-1),g=e("span",null,"此欄位不可留空",-1),x=e("label",{class:"formControls_label",for:"pwd"},"密碼",-1),k=e("button",{type:"submit",class:"formControls_btnSubmit"},"登入",-1),E={__name:"Login",setup(V){const o=m({email:"",password:""});function i(){n.postSignIn(o.value).then(s=>{w.login(s.data.token)}).catch(s=>{console.error("[login] error ==>",s),alert(n.parseError(s))})}return(s,a)=>(d(),p("form",{class:"formControls",onSubmit:f(i,["prevent"])},[v,C,l(e("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>o.value.email=t),class:"formControls_input",type:"email",id:"email",name:"email",placeholder:"請輸入 email",required:""},null,512),[[r,o.value.email]]),g,x,l(e("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>o.value.password=t),class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請輸入密碼",required:""},null,512),[[r,o.value.password]]),k,u(_(h),{to:{name:"register"},class:"formControls_btnLink"},{default:c(()=>[b("註冊帳號")]),_:1})],32))}};export{E as default};