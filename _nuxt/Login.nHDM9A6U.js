import{v as b,_ as h}from"./v4.Ilcx_1uE.js";import{_ as x}from"./index._ni3bSi_.js";import{x as r,ag as R,u as S,c as L,a as i,t as U,b as n,i as m,j as c,w as v,o as k,d as g}from"./entry.0H3zBABs.js";import{e as d}from"./appwrite.YNvEA79_.js";import{u as B,a as C}from"./auth.XxfnE-B_.js";import"./index.B6L4D9Og.js";const N={class:"flex items-center justify-center min-h-screen w-full"},j={class:"rounded bg-sidebar w-1/4 p-5"},E={class:"font-bold text-2xl mb-10"},$={class:"flex items-center gap-3 justify-center mt-4"},q={__name:"Login",setup(I){const e=r(""),t=r(""),o=r(""),w=R(),p=B(),V=C(),f=async()=>{p.set(!0),await d.createEmailSession(e.value,t.value);const a=await d.get();a&&(V.set({email:a.email,name:a.name,status:a.status}),e.value="",t.value="",o.value="",await w.push("/"),p.set(!1))},y=async()=>{await d.create(b(),e.value,t.value,o.value),await f()};return S({title:"Login | CRM System"}),(a,s)=>{const u=h,_=x;return k(),L("div",N,[i("div",j,[i("h1",E,U(a.$t("login.title")),1),i("form",null,[n(u,{modelValue:m(o),"onUpdate:modelValue":s[0]||(s[0]=l=>c(o)?o.value=l:null),placeholder:"Name",type:"name",class:"mb-3"},null,8,["modelValue"]),n(u,{modelValue:m(e),"onUpdate:modelValue":s[1]||(s[1]=l=>c(e)?e.value=l:null),placeholder:"Email",type:"email",class:"mb-3"},null,8,["modelValue"]),n(u,{modelValue:m(t),"onUpdate:modelValue":s[2]||(s[2]=l=>c(t)?t.value=l:null),placeholder:"Password",type:"password",class:"mb-3"},null,8,["modelValue"]),i("div",$,[n(_,{onClick:f,variant:"ghost",type:"button"},{default:v(()=>[g("Login")]),_:1}),n(_,{onClick:y,variant:"ghost",type:"button"},{default:v(()=>[g("Register")]),_:1})])])])])}}};export{q as default};