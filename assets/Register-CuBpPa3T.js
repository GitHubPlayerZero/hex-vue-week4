import{r as i,a as f,c,d as l,v as s,b as a,m as _,n as w,u as b,f as v,s as C,R as h,i as u}from"./index-BPdZWca8.js";import{a as k}from"./auth-CwhrsnPI.js";const g=a("h2",{class:"formControls_txt"},"註冊帳號",-1),V=a("label",{class:"formControls_label",for:"email"},"Email",-1),x=a("label",{class:"formControls_label",for:"name"},"您的暱稱",-1),y=a("label",{class:"formControls_label",for:"pwd"},"密碼",-1),P=a("label",{class:"formControls_label",for:"repeatPwd"},"再次輸入密碼",-1),R=a("button",{type:"submit",class:"formControls_btnSubmit"},"註冊帳號",-1),B={__name:"Register",setup(U){const n=i(""),d=i(null),t=i({email:"",nickname:"",password:""});function p(r){return r.password!==n.value?(alert("密碼不一致，請重新輸入！"),d.value.focus(),!1):!0}function m(){const{value:r}=t;p(r)&&u.postSignUp(r).then(e=>(alert("註冊成功，將自動為您轉換到待辦事項～"),u.postSignIn(r))).then(e=>{k.login(e.data.token)}).catch(e=>{console.error("[register] error ==>",e),alert(u.parseError(e))}).finally(()=>{})}return(r,e)=>(f(),c("form",{class:"formControls",onSubmit:v(m,["prevent"])},[g,V,l(a("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.value.email=o),class:"formControls_input",type:"email",id:"email",name:"email",placeholder:"請輸入 email",required:""},null,512),[[s,t.value.email]]),x,l(a("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.nickname=o),class:"formControls_input",type:"text",name:"name",id:"name",placeholder:"請輸入您的暱稱",required:""},null,512),[[s,t.value.nickname]]),y,l(a("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.value.password=o),class:"formControls_input",type:"password",name:"pwd",id:"pwd",placeholder:"請輸入密碼",required:""},null,512),[[s,t.value.password]]),P,l(a("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>n.value=o),ref_key:"refRepeatPwd",ref:d,class:"formControls_input",type:"password",name:"repeatPwd",id:"repeatPwd",placeholder:"請再次輸入密碼",required:""},null,512),[[s,n.value]]),R,_(b(h),{to:{name:"login"},class:"formControls_btnLink"},{default:w(()=>[C("登入")]),_:1})],32))}};export{B as default};
