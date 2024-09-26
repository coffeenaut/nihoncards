import{a as z}from"./index-00434a2a.js";import{o as s,c,a as t,r as o,b as n,d as j,n as m,u as h,e as ne,t as y,F as K,f as W,g as J,h as A}from"./index-c4dd25a2.js";import{j as V}from"./headstart-e7f9342b.js";import{_ as re,F as w}from"./FilterList-7eabab70.js";import{D as E,s as oe,T as G}from"./tools-354ffbdf.js";import{_ as ie}from"./switch-22c26db5.js";function ce(d,l){return s(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z","clip-rule":"evenodd"})])}function ue(d,l){return s(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","clip-rule":"evenodd"})])}function de(d,l){return s(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z","clip-rule":"evenodd"})])}const ve={class:"card-stack"},ge={class:"card-stack"},he={__name:"ChoiceCard",props:{position:{type:Number,required:!0},answerText:{type:String,required:!0},correctAnswer:{type:Boolean,required:!0},shown:{type:Boolean,required:!0},dealCard:{type:Boolean,required:!0}},emits:["answerClickedEmit","challengeSolvedEmit"],setup(d,{emit:l}){const v=l,f=o(!1);n({get(){return f.value},set(r){f.value=r}});const i=d;function S(){v("answerClickedEmit",i.position),i.correctAnswer&&v("challengeSolvedEmit")}return(r,p)=>(s(),c("div",null,[t("div",{class:m(["card-grade",i.shown&&"show"])},[d.correctAnswer?(s(),j(h(ce),{key:0,class:m(["answer-correct",i.shown&&"show animate-bounce"])},null,8,["class"])):(s(),j(h(ne),{key:1,class:m(["answer-incorrect",i.shown&&"show animate-shake"])},null,8,["class"]))],2),t("div",ve,[t("div",ge,[t("div",{class:m(["choice-card",d.dealCard&&"animate-deal-card"]),onClick:S},y(i.answerText),3)])])]))}},me={class:"grid grid-cols-3 gap-x-8"},fe={class:"flex items-center"},pe={key:1,class:"flex gap-x-2"},we={class:"flex items-center"},_e=["id","value"],xe={__name:"gameSettings",props:{player:{type:Object,required:!0}},emits:["changePropertyEmit"],setup(d,{emit:l}){const v=l,f=d,i=n(()=>Object.entries(f.player));function S(p,C){v("changePropertyEmit",p,C)}function r(p){v("changePropertyEmit",p.target.id,p.target.value)}return(p,C)=>(s(),c("div",me,[(s(!0),c(K,null,W(i.value,(u,k)=>(s(),c("div",fe,[typeof u[1]=="boolean"?(s(),j(ie,{onTogglePropertyEmit:S,key:k,propertyText:u[0],propertyValue:u[1]},null,8,["propertyText","propertyValue"])):typeof u[1]=="number"?(s(),c("div",pe,[t("div",we,y(u[0]),1),t("input",{id:u[0],value:u[1],type:"number",onChange:r,class:"setting"},null,40,_e)])):J("",!0)]))),256))]))}},ye={class:"flex flex-col w-full gap-y-4 px-4 items-center"},Ce={class:"sidebar-right-icon"},ke={class:"text-6xl text-hiragana"},Se={key:0,class:"text-xs text-phonetic"},be={class:"flex-col"},Me={class:"flex flex-wrap gap-6 items-center justify-evenly choice-list"},Te={__name:"multipickView",setup(d){const l=o({translateHiragana:!1,limit:3}),v=n({get(){return l.value},set(e){l.value=e}}),f=o(""),i=n({get(){return f.value},set(e){f.value=e}}),r=o((()=>{let e=E(w.length-1),a=[];return e==0?(e=E(w[0].list.length-1),a=w[0].list[e].list,i.value=w[0].tag):(a=w[e].list,i.value=w[e].tag),a})()),p=n({get(){r.value},set(e){r.value=e}}),C={attempts:0,challenge:0,startMessage:"hajime"},u=o(!1),k=n({get(){return u.value},set(e){u.value=e}}),B=o(!0),q=n({get(){return B.value},set(e){B.value=e}}),H=o(0),F=n({get(){return H.value},set(e){H.value=e}});function Q(){k.value=!k.value}const O=o(""),U=n({get(){return O},set(e){O.value=e}}),b=o(!1),D=n({get(){return b.value},set(e){b.value=e}}),M=o(-1),_=n({get(){return M.value},set(e){M.value=e}}),T=o([]),X=n({get(){return T.value},set(e){T.value=e}});async function L(){let e=E(r.value.length-1);_.value=r.value[e];let a=[];const g=l.value.limit>r.value.length?r.value.length-1:l.value.limit-1;console.log(g);do{const se=E(r.value.length-1),P=r.value[se];_.value!==P&&a.indexOf(P)<0&&a.push(P)}while(a.length<g);let x=[...a,_.value];X.value=oe(x),I.value.correct=!1,q.value=!1,$.value=[],await Y()}async function Y(){for(let e=0;e<l.value.limit;e++)F.value+=1,await G(50);await G(175),F.value=0}const Z=o({correct:!1}),I=n({get(){return Z.value},set(e){Z.value={...Z.value,correct:e}}}),N=o([]),$=n({get(){return N.value},set(e){N.value=e}});function ee(e){$.value.indexOf(e)<0&&($.value=[...$.value,e]),C.attempts+=1}function te(){l.score+=1,q.value=!0}function ae(e,a){let g=a;typeof g=="string"&&(g=parseInt(a)),v.value={...v.value,[e]:g},console.log(v.value)}function le(e,a){p.value=w[a].list,i.value=e.tag,L(),R()}function R(){D.value=!D.value}return(e,a)=>(s(),c("div",ye,[t("div",{class:m(["flex sticky settings-bar",k.value&&"show-settings"])},[A(xe,{onChangePropertyEmit:ae,player:l.value},null,8,["player"])],2),a[1]||(a[1]=t("div",{class:"flex w-full justify-between"},null,-1)),A(h(ue),{onClick:Q,class:"place-self-start icon-medium-gray"}),t("div",Ce,[A(h(de),{onClick:R,class:"icon-medium-gray sidecon"})]),t("div",{class:m(["flex flex-col w-5/6 md:w-3/4 lg:w-1/2 multichoice-board",b.value&&"slide-left"])},[t("div",ke,y(M.value<0?h(z)(C.startMessage):h(z)(h(V)[_.value].japanese)),1),l.value.translateHiragana?(s(),c("div",Se,"("+y(h(V)[_.value].japanese)+")",1)):J("",!0)],2),t("div",{class:m(["absolute flex justify-end place-self-end sidebar-right",b.value&&"show"])},[t("div",be,[a[0]||(a[0]=t("div",{class:"flex items-center section-title"},"Categories",-1)),A(re,{onFilterResultsEmit:le,setName:f.value},null,8,["setName"])])],2),t("div",{class:m(["system-message",I.value.correct?"system-green":"system-red"])},y(U.value),3),t("div",Me,[(s(!0),c(K,null,W(T.value,(g,x)=>(s(),j(he,{onAnswerClickedEmit:ee,onChallengeSolvedEmit:te,key:x,answerText:h(V)[g].english,correctAnswer:g==_.value,position:x,shown:N.value.indexOf(x)>-1,dealCard:x<H.value},null,8,["answerText","correctAnswer","position","shown","dealCard"]))),128))]),t("div",{class:m(["text-center next-round-btn",B.value&&"show"]),onClick:L},y(M.value<0?"begin":"next"),3)]))}};export{Te as default};
