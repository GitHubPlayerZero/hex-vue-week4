import{r as m,c as d,w as l,j as r,b as e,f as p,g as u,u as c,k as _,o as f,h as b,R as h}from"./index-5eGajqDw.js";import{a as n,b as w}from"./auth-0suEmAKL.js";const g=e("h2",{class:"formControls_txt"},"最實用的線上代辦事項服務",-1),C=e("label",{class:"formControls_label",for:"email"},"Email",-1),v=e("span",null,"此欄位不可留空",-1),k=e("label",{class:"formControls_label",for:"pwd"},"密碼",-1),x=e("button",{type:"submit",class:"formControls_btnSubmit"},"登入",-1),E={__name:"Login",setup(V){const o=m({email:"aaa1@gmail.com",password:"123456"});function i(){n.postSignIn(o.value).then(a=>{w.login(a.data.token)}).catch(a=>{console.error("[login] error ==>",a),alert(n.parseError(a))})}return(a,s)=>(f(),d("form",{class:"formControls",onSubmit:_(i,["prevent"])},[g,C,l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>o.value.email=t),class:"formControls_input",type:"email",id:"email",name:"email",placeholder:"請輸入 email",required:""},null,512),[[r,o.value.email]]),v,k,l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>o.value.password=t),class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請輸入密碼",required:""},null,512),[[r,o.value.password]]),x,p(c(h),{to:{name:"register"},class:"formControls_btnLink"},{default:u(()=>[b("註冊帳號")]),_:1})],32))}};export{E as default};
