"use strict";(self["webpackChunkgaku_navi"]=self["webpackChunkgaku_navi"]||[]).push([[724],{252:function(t,n,e){e.d(n,{Z:function(){return d}});var a=e(3396);const o=t=>((0,a.dD)("data-v-3e2e8158"),t=t(),(0,a.Cn)(),t),l=o((()=>(0,a._)("span",{class:"material-symbols-outlined"}," home ",-1))),s=o((()=>(0,a._)("span",null,"Home",-1)));function u(t,n,e,o,u,r){const c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",null,[(0,a.Wm)(c,{to:"/",class:"logo"},{default:(0,a.w5)((()=>[(0,a.Uk)("がくなび")])),_:1}),(0,a._)("section",null,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[l,s])),_:1}),(0,a.Wm)(c,{to:"/home"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Wm)(c,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1})])])}var r={name:"HeaderNav"},c=e(89);const i=(0,c.Z)(r,[["render",u],["__scopeId","data-v-3e2e8158"]]);var d=i},7724:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});var a=e(3396),o=e(7139),l=e(9242);const s=t=>((0,a.dD)("data-v-91870f48"),t=t(),(0,a.Cn)(),t),u=["src"],r={class:"contentIndex"},c={class:"part"},i=s((()=>(0,a._)("span",{class:"making"},"制作中",-1)));function d(t,n,e,s,d,m){const h=(0,a.up)("HeaderNav"),p=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(h),(0,a._)("main",null,[(0,a._)("img",{src:"./thumbnail/"+d.path+".png",class:"thumbnail",alt:"thumbnail"},null,8,u),(0,a._)("section",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.course,((t,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a._)("div",c,(0,o.zw)(t.part),1),(0,a._)("ol",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.chapter,((t,n)=>((0,a.wg)(),(0,a.iD)("li",{key:n},[(0,a.wy)((0,a.Wm)(p,{to:{name:"LectureView",params:{course:d.path,id:t.href}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.title),1)])),_:2},1032,["to"]),[[l.F8,"#"!=t.href]]),(0,a.wy)((0,a._)("span",null,[i,(0,a.Uk)(" "+(0,o.zw)(t.title),1)],512),[[l.F8,"#"==t.href]])])))),128))])])))),128))])])],64)}var m=e(252),h={name:"ContentIndex",components:{HeaderNav:m.Z},data(){return{path:this.$route.params.course,course:[],contentIndex:[]}},async mounted(){const t=await fetch("./"+this.path+"/index.json").then((t=>t.ok?t:(console.log(t),console.log("コースがありません"),[{title:"オリエンテーション",href:"01"},{title:"中学数学のゴール",href:"02"}]))),n=await t.json();this.course=n}},p=e(89);const f=(0,p.Z)(h,[["render",d],["__scopeId","data-v-91870f48"]]);var w=f}}]);
//# sourceMappingURL=724.4e43e763.js.map