import{u,a as p,r as c,o as f,c as _,b as l,f as r,d as e,q as w,s as h,i as b,e as y,y as g,R as C,h as n}from"./index-Btr8lL4W.js";import{a as v}from"./auth-BJOwzhC7.js";const x=e("h2",{class:"formControls_txt"},"最實用的線上代辦事項服務",-1),k=e("label",{class:"formControls_label",for:"email"},"Email",-1),L=e("span",null,"此欄位不可留空",-1),S=e("label",{class:"formControls_label",for:"pwd"},"密碼",-1),V=e("button",{type:"submit",class:"formControls_btnSubmit"},"登入",-1),B={__name:"Login",setup(E){const i=u(),m=p(),a=c({email:"",password:""});function d(){const t=i.open();n.postSignIn(a.value).then(o=>{v.login(o.data.token)}).catch(async o=>{console.error("[login] error ==>",o),await m.alertError(n.parseError(o))}).finally(()=>{t.close()})}return(t,o)=>(f(),_("form",{class:"formControls",onSubmit:y(d,["prevent"])},[x,k,l(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>a.value.email=s),class:"formControls_input",type:"email",id:"email",name:"email",placeholder:"請輸入 email",required:""},null,512),[[r,a.value.email]]),L,S,l(e("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>a.value.password=s),class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請輸入密碼",required:""},null,512),[[r,a.value.password]]),V,w(b(C),{to:{name:"register"},class:"formControls_btnLink"},{default:h(()=>[g("註冊帳號")]),_:1})],32))}};export{B as default};
