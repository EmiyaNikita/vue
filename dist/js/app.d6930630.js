(function(){"use strict";var t={7683:function(t,e,o){var n=o(5130),s=o(6768);const r={class:"app"},i=(0,s.Lk)("h1",null,"Страница с постами",-1);function a(t,e,o,n,a,l){const u=(0,s.g2)("my-button"),d=(0,s.g2)("post-form"),c=(0,s.g2)("my-dialog"),p=(0,s.g2)("post-list");return(0,s.uX)(),(0,s.CE)("div",r,[i,(0,s.bF)(u,{onClick:l.showDialog},{default:(0,s.k6)((()=>[(0,s.eW)(" Создать пользователя ")])),_:1},8,["onClick"]),(0,s.bF)(c,{show:a.dialogVisible,"onUpdate:show":e[0]||(e[0]=t=>a.dialogVisible=t)},{default:(0,s.k6)((()=>[(0,s.bF)(d,{onCreate:l.createPost},null,8,["onCreate"])])),_:1},8,["show"]),(0,s.bF)(p,{posts:a.posts,onRemove:l.removePost},null,8,["posts","onRemove"])])}o(4114);const l=t=>((0,s.Qi)("data-v-d08acd4e"),t=t(),(0,s.jt)(),t),u=l((()=>(0,s.Lk)("h4",null,"Создание поста",-1)));function d(t,e,o,r,i,a){const l=(0,s.g2)("my-input"),d=(0,s.g2)("my-button");return(0,s.uX)(),(0,s.CE)("form",{onSubmit:e[2]||(e[2]=(0,n.D$)((()=>{}),["prevent"]))},[u,(0,s.bF)(l,{modelValue:i.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.post.title=t),type:"text",placeholder:"Название"},null,8,["modelValue"]),(0,s.bF)(l,{modelValue:i.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>i.post.body=t),type:"text",placeholder:"Описание"},null,8,["modelValue"]),(0,s.bF)(d,{style:{"align-self":"flex-end","margin-top":"15px"},onClick:a.createPost},{default:(0,s.k6)((()=>[(0,s.eW)("Создать")])),_:1},8,["onClick"])],32)}var c={data(){return{post:{title:"",body:""}}},methods:{createPost(){post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}},p=o(1241);const v=(0,p.A)(c,[["render",d],["__scopeId","data-v-d08acd4e"]]);var f=v;const m={key:0},b=(0,s.Lk)("h3",null,"Список пользователей",-1),h={key:1,style:{color:"red"}};function y(t,e,o,n,r,i){const a=(0,s.g2)("post-item");return o.posts.length>0?((0,s.uX)(),(0,s.CE)("div",m,[b,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.posts,(e=>((0,s.uX)(),(0,s.Wv)(a,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])):((0,s.uX)(),(0,s.CE)("h2",h," Список пользователей пуст "))}var g=o(4232);const k=t=>((0,s.Qi)("data-v-73b01b2a"),t=t(),(0,s.jt)(),t),_={class:"post"},C=k((()=>(0,s.Lk)("b",null,"Название:",-1))),w=k((()=>(0,s.Lk)("b",null,"Описание:",-1))),V={class:"post__btns"};function E(t,e,o,n,r,i){const a=(0,s.g2)("my-button");return(0,s.uX)(),(0,s.CE)("div",_,[(0,s.Lk)("div",null,[(0,s.Lk)("div",null,[C,(0,s.eW)(" "+(0,g.v_)(o.post.title),1)]),(0,s.Lk)("div",null,[w,(0,s.eW)(" "+(0,g.v_)(o.post.body),1)])]),(0,s.Lk)("div",V,[(0,s.bF)(a,{onClick:e[0]||(e[0]=e=>t.$emit("remove",o.post))},{default:(0,s.k6)((()=>[(0,s.eW)("Удалить ")])),_:1})])])}var O={props:{post:{type:Object,required:!0}}};const F=(0,p.A)(O,[["render",E],["__scopeId","data-v-73b01b2a"]]);var I=F,L={components:{PostItem:I},props:{posts:{type:Array,required:!0}}};const P=(0,p.A)(L,[["render",y]]);var x=P,X={components:{PostList:x,PostForm:f},data(){return{posts:[{id:1,title:"Javascript",body:"Описание поста"},{id:2,title:"Javascript 2",body:"Описание поста 2"},{id:3,title:"Javascript 3",body:"Описание поста 3"},{id:4,title:"Javascript 4",body:"Описание поста 4"}],dialogVisible:!1}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0}}};const $=(0,p.A)(X,[["render",a]]);var j=$;const D={class:"btn"};function A(t,e,o,n,r,i){return(0,s.uX)(),(0,s.CE)("button",D,[(0,s.RG)(t.$slots,"default",{},void 0,!0)])}var R={name:"my-button"};const W=(0,p.A)(R,[["render",A],["__scopeId","data-v-1da9d2f2"]]);var J=W;const Q=["value"];function U(t,e,o,n,r,i){return(0,s.uX)(),(0,s.CE)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>i.updateInput&&i.updateInput(...t)),class:"input",type:"text"},null,40,Q)}var q={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const G=(0,p.A)(q,[["render",U],["__scopeId","data-v-25f98f71"]]);var S=G;function T(t,e,o,r,i,a){return o.show?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(0,n.D$)(((...t)=>a.hideDialog&&a.hideDialog(...t)),["stop"]))},[(0,s.Lk)("div",{onClick:e[0]||(e[0]=(0,n.D$)((()=>{}),["stop"])),class:"dialog__content"},[(0,s.RG)(t.$slots,"default",{},void 0,!0)])])):(0,s.Q3)("",!0)}var B={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const K=(0,p.A)(B,[["render",T],["__scopeId","data-v-2f56ee58"]]);var M=K,N=[J,S,M];const z=(0,n.Ef)(j);N.forEach((t=>{z.component(t.name,t)})),(0,n.Ef)(j).mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,r){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],r=t[d][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(d--,1);var u=s();void 0!==u&&(e=u)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[n,s,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,r,i=n[0],a=n[1],l=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var d=l(o)}for(e&&e(n);u<i.length;u++)r=i[u],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(d)},n=self["webpackChunkname"]=self["webpackChunkname"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(7683)}));n=o.O(n)})();
//# sourceMappingURL=app.d6930630.js.map