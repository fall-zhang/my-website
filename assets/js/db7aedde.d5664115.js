"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8569],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:14},c=void 0,l={unversionedId:"JavaScript & TypeScript/TypeScript/8. \u9ad8\u6548coding",id:"JavaScript & TypeScript/TypeScript/8. \u9ad8\u6548coding",title:"8. \u9ad8\u6548coding",description:"Create by fall on 2021-12-12",source:"@site/docs\\JavaScript & TypeScript\\TypeScript\\8. \u9ad8\u6548coding.md",sourceDirName:"JavaScript & TypeScript/TypeScript",slug:"/JavaScript & TypeScript/TypeScript/8. \u9ad8\u6548coding",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/8. \u9ad8\u6548coding",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript & TypeScript/TypeScript/8. \u9ad8\u6548coding.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"6 \u5f02\u5e38\u5904\u7406",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/6 \u5f02\u5e38\u5904\u7406"},next:{title:"-- Window\u5bf9\u8c61",permalink:"/my-website/docs/JavaScript & TypeScript/-- Window\u5bf9\u8c61"}},u={},s=[{value:"\u6d3b\u7528",id:"\u6d3b\u7528",level:2},{value:"enum",id:"enum",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Create by ",(0,i.kt)("strong",{parentName:"p"},"fall")," on 2021-12-12\nRecently revised in 2021-12-12")),(0,i.kt)("p",null,"\u4f1a\u968f\u7740 ts \u7684\u4f7f\u7528\uff0c\u7136\u540e\u8fdb\u884c\u9010\u6e10\u7684\u66f4\u65b0\u5427"),(0,i.kt)("h2",{id:"\u6d3b\u7528"},"\u6d3b\u7528"),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u63a5\u53e3\u7b80\u5316"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const INIT_PERSON = {\n  name:'taly',\n  age:22,\n    desc:'add some description'\n}\ntype Persion = typeof INIT_PERSON\n")),(0,i.kt)("p",null,"\u7edf\u4e00\u65b9\u6cd5\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type HTTP_Fun = (url:string,opts:Options):Promise<Response>{/* code */}\nconst get:HTTP_Fun = (url,opts)=>{ /* code */}\nconst post:HTTP_Fun = (url,opts)=>{/* code*/ }\n")),(0,i.kt)("h3",{id:"enum"},"enum"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5229\u7528\u4f4d\u8fd0\u7b97\u7684\u7279\u6027\uff0c\u4e8c\u8fdb\u5236\u4e2d\uff0c\u6bcf\u4f4d\u662f\u72ec\u7acb\u7684\uff0c\nenum FutureFlags{\n  None   = 0,\n  Happy  = 1,\n  Rich   = 1<<1,\n  Wisdom = 1<<2,\n  Famous = 1<<3,\n  GreatHuman = Happy|Rich|Wisdom|Famous\n}\ninterface Human{\n  flags:FutureFlags\n  [key:string]:any\n}\nanimal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"|=")," \u6765\u6dfb\u52a0\u4e00\u4e2a\u6807\u5fd7"),(0,i.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"&=")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"~")," \u6765\u6e05\u7406\u4e00\u4e2a\u6807\u5fd7"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"|")," \u6765\u5408\u5e76\u6807\u5fd7\u3002")))}d.isMDXComponent=!0}}]);