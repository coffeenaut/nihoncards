import{r as f,o as h,c as x,w as _,v,u as w,a as u,i as k}from"./index-c4dd25a2.js";import{t as y}from"./index-00434a2a.js";const B={class:"flex flex-col w-full justify-center items-center p-2 gap-y-4"},b={__name:"sanitizeView",setup(V){f([]);function g(){const s=t.value.split(`
`);let a=[];for(let o=0;o<s.length;o++){const l=s[o].split(";");let n=l[1];const i=l[1].split(",");let r=[];if(i.length>1){n=i[0];for(let e=1;e<i.length;e++)r.push(i[e])}const c=l[2].split(",");let p=[];for(let e=0;e<c.length;e++)p.push(c[e]);const d={english:l[0],japanese:y(n),alternatives:r,tags:p};a.push(d)}console.log(a)}let t=f("");return(m,s)=>(h(),x("div",B,[_(u("textarea",{rows:"10",cols:"100","onUpdate:modelValue":s[0]||(s[0]=a=>k(t)?t.value=a:t=a)},null,512),[[v,w(t)]]),u("div",{class:"flex button-primary",onClick:g},"Process")]))}};export{b as default};
