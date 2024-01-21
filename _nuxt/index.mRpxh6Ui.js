import{c as m}from"./index.LAakwbBF.js";import{f as u,o as l,c as n,a as y,r as p,n as i,i as c,l as T,w as e,b as a,d as _,F as N,q as U,t as h}from"./entry.zbAlqUpU.js";import{_ as v}from"./nuxt-img.-sMHlT-e.js";import{_ as D}from"./nuxt-link.NdllvGbh.js";import{u as L}from"./index.BMGB_9D-.js";import{D as S,a as E,C as H}from"./appwrite.YNvEA79_.js";import{u as I}from"./useQuery.tuXHM0nx.js";const O={class:"w-full overflow-auto"},R=u({__name:"Table",props:{class:{}},setup(o){const s=o;return(t,d)=>(l(),n("div",O,[y("table",{class:i(c(m)("w-full caption-bottom text-sm",s.class))},[p(t.$slots,"default")],2)]))}}),q=u({__name:"TableBody",props:{class:{}},setup(o){const s=o;return(t,d)=>(l(),n("tbody",{class:i(c(m)("[&_tr:last-child]:border-0",s.class))},[p(t.$slots,"default")],2))}}),F=u({__name:"TableCell",props:{class:{}},setup(o){const s=o;return(t,d)=>(l(),n("td",{class:i(c(m)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",s.class))},[p(t.$slots,"default")],2))}}),M=u({__name:"TableHead",props:{class:{}},setup(o){const s=o;return(t,d)=>(l(),n("th",{class:i(c(m)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",s.class))},[p(t.$slots,"default")],2))}}),V=u({__name:"TableHeader",props:{class:{}},setup(o){const s=o;return(t,d)=>(l(),n("thead",{class:i(c(m)("[&_tr]:border-b",s.class))},[p(t.$slots,"default")],2))}}),z=u({__name:"TableRow",props:{class:{}},setup(o){const s=o;return(t,d)=>(l(),n("tr",{class:i(c(m)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s.class))},[p(t.$slots,"default")],2))}}),K={class:"p-10"},Q=y("h1",{class:"font-bold text-2xl mb-10"},"Our clients",-1),j={key:0},ee=u({__name:"index",setup(o){L({title:"Customers | CRM System"});const{data:s,isLoading:t}=I({queryKey:["customers"],queryFn:()=>S.listDocuments(E,H)});return(d,A)=>{const f=M,x=z,g=V,C=v,k=D,b=F,w=q,B=R;return l(),n("div",K,[Q,c(t)?(l(),n("div",j,"Loading...")):(l(),T(B,{key:1},{default:e(()=>[a(g,null,{default:e(()=>[a(x,null,{default:e(()=>[a(f,{class:"w-[200px]"},{default:e(()=>[_("Image")]),_:1}),a(f,{class:"w-[300px]"},{default:e(()=>[_("Name")]),_:1}),a(f,{class:"w-[300px]"},{default:e(()=>[_("Email")]),_:1}),a(f,null,{default:e(()=>[_("Came from")]),_:1})]),_:1})]),_:1}),a(w,null,{default:e(()=>{var $;return[(l(!0),n(N,null,U(($=c(s))==null?void 0:$.documents,r=>(l(),T(x,{key:r.$id},{default:e(()=>[a(b,null,{default:e(()=>[a(k,{href:`/customers/edit/${r.$id}`},{default:e(()=>[a(C,{src:r.avatar_url,alt:r.name,width:"50",height:"50",class:"rounded-full"},null,8,["src","alt"])]),_:2},1032,["href"])]),_:2},1024),a(b,{class:"font-medium"},{default:e(()=>[_(h(r.name),1)]),_:2},1024),a(b,null,{default:e(()=>[_(h(r.email),1)]),_:2},1024),a(b,null,{default:e(()=>[_(h(r.from_source),1)]),_:2},1024)]),_:2},1024))),128))]}),_:1})]),_:1}))])}}});export{ee as default};
