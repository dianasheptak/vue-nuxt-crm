import{_ as $,v as q}from"./v4.JgP0-LJ_.js";import{_ as j}from"./index._33Ri88E.js";import{u as G}from"./index.BMGB_9D-.js";import{f as Q,g as z,h as H,o as x,c as I,a as l,t as D,i as e,b as s,m as p,j as _,k as J,w as W,d as X,p as Y,e as Z,_ as ee}from"./entry.zbAlqUpU.js";import{u as te,a as F}from"./vee-validate.esm.jl812fMJ.js";import{D as w,a as C,C as E,s as U,S as B}from"./appwrite.YNvEA79_.js";import{u as ae}from"./useQuery.tuXHM0nx.js";import"./index.LAakwbBF.js";const oe=n=>(Y("data-v-32bb39b0"),n=n(),Z(),n),se={class:"p-10"},le={class:"font-bold text-2xl mb-10"},ne=["src"],re={class:"grid w-full max-w-sm items-center gap-1.5 input"},ie=oe(()=>l("div",{class:"text-sm mb-2"},"Logotype",-1)),me=Q({__name:"[id]",setup(n){G({title:"Editing company"});const r=z().params.id,{handleSubmit:N,defineField:m,setFieldValue:k,setValues:A,values:f}=te(),{data:g,isSuccess:L}=ae({queryKey:["get customer",r],queryFn:()=>w.getDocument(C,E,r)});H(L,()=>{const t=g.value;A({email:t.email,avatar_url:t.avatar_url,from_source:t.from_source||"",name:t.name})});const[u,O]=m("name"),[d,P]=m("email"),[c,R]=m("from_source"),{mutate:T,isPending:b}=F({mutationKey:["is pending",r],mutationFn:t=>w.updateDocument(C,E,r,t)}),v=N(t=>{T(t)}),{mutate:K,isPending:y}=F({mutationKey:["upload image"],mutationFn:t=>U.createFile(B,q(),t),onSuccess(t){const o=U.getFileDownload(B,t.$id);k("avatar_url",o.href)}});return(t,o)=>{var S;const i=$,M=j;return x(),I("div",se,[l("h1",le,' Edit "'+D((S=e(g))==null?void 0:S.name)+'" ',1),l("form",{onSubmit:o[3]||(o[3]=(...a)=>e(v)&&e(v)(...a)),class:"form"},[s(i,p({placeholder:"Name",modelValue:e(u),"onUpdate:modelValue":o[0]||(o[0]=a=>_(u)?u.value=a:null)},e(O),{type:"text",class:"input border border-gray-500"}),null,16,["modelValue"]),s(i,p({placeholder:"Email",modelValue:e(d),"onUpdate:modelValue":o[1]||(o[1]=a=>_(d)?d.value=a:null)},e(P),{type:"text",class:"input"}),null,16,["modelValue"]),s(i,p({placeholder:"From",modelValue:e(c),"onUpdate:modelValue":o[2]||(o[2]=a=>_(c)?c.value=a:null)},e(R),{type:"text",class:"input"}),null,16,["modelValue"]),e(f).avatar_url||e(y)?(x(),I("img",{key:0,src:e(f).avatar_url,alt:"",width:"50",height:"50",class:"rounded-full my-4"},null,8,ne)):J("",!0),l("div",re,[l("label",null,[ie,s(i,{type:"file",onchange:a=>{var h,V;return((V=(h=a==null?void 0:a.target)==null?void 0:h.files)==null?void 0:V.length)&&e(K)(a.target.files[0])},disabled:e(y)},null,8,["onchange","disabled"])])]),s(M,{disabled:e(b),variant:"secondary",class:"mt-3"},{default:W(()=>[X(D(e(b)?"Loading...":"Save"),1)]),_:1},8,["disabled"])],32)])}}}),ye=ee(me,[["__scopeId","data-v-32bb39b0"]]);export{ye as default};