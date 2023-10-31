"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2059],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(i,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(8028),a=(n(9496),n(9613));const l={slug:"TypeScript\u58f0\u660e",title:"TypeScript\u58f0\u660e",authors:"fall"},o=void 0,p={permalink:"/my-website/blog/TypeScript\u58f0\u660e",editUrl:"https://github.com/blog/2022-06-08-TypeScript\u58f0\u660e.md",source:"@site/blog/2022-06-08-TypeScript\u58f0\u660e.md",title:"TypeScript\u58f0\u660e",description:"\u58f0\u660e\u7a7a\u95f4",date:"2022-06-08T00:00:00.000Z",formattedDate:"2022\u5e746\u67088\u65e5",tags:[],readingTime:6.215,hasTruncateMarker:!1,authors:[{name:"Fall Zhang",title:"Coding For fun",url:"https://github.com/Fall-zhang",imageURL:"https://github.com/Fall-zhang.png",key:"fall"}],frontMatter:{slug:"TypeScript\u58f0\u660e",title:"TypeScript\u58f0\u660e",authors:"fall"},nextItem:{title:"\u5ba2\u6237\u60f3\u8981\u7684\u4e0d\u662f\u5979\u4eec\u6240\u8bf4\u7684\uff08\u8bd1\uff09",permalink:"/my-website/blog/\u5ba2\u6237\u60f3\u8981\u7684\u4e0d\u662f\u5979\u4eec\u6240\u8bf4\u7684\uff08\u8bd1\uff09"}},i={authorsImageUrls:[void 0]},c=[{value:"\u58f0\u660e\u7a7a\u95f4",id:"\u58f0\u660e\u7a7a\u95f4",level:2},{value:"\u5168\u5c40\u6a21\u5757",id:"\u5168\u5c40\u6a21\u5757",level:2},{value:"\u73af\u5883\u58f0\u660e",id:"\u73af\u5883\u58f0\u660e",level:2},{value:"TS\u7684\u58f0\u660e\u6587\u4ef6",id:"ts\u7684\u58f0\u660e\u6587\u4ef6",level:3},{value:"\u7b2c\u4e09\u65b9\u4ee3\u7801\u7684\u58f0\u660e",id:"\u7b2c\u4e09\u65b9\u4ee3\u7801\u7684\u58f0\u660e",level:3},{value:"\u7b2c\u4e09\u65b9 NPM \u6a21\u5757",id:"\u7b2c\u4e09\u65b9-npm-\u6a21\u5757",level:3},{value:"\u975e JS \u8d44\u6e90",id:"\u975e-js-\u8d44\u6e90",level:3},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u58f0\u660e\u7a7a\u95f4"},"\u58f0\u660e\u7a7a\u95f4"),(0,a.kt)("p",null,"\u58f0\u660e\u7a7a\u95f4\uff0c\u5c31\u662f\u58f0\u660e\u7c7b\u578b\u548c\u58f0\u660e\u53d8\u91cf\u6240\u5728\u7684\u4e0d\u540c\u7a7a\u95f4\u3002\u7c7b\u578b\u58f0\u660e\u7a7a\u95f4\u662f TypeScript \u58f0\u660e\u7684\u7c7b\u578b\u7a7a\u95f4\uff0c\u8fd9\u4e9b\u7a7a\u95f4\u7684\u53d8\u91cf",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u80fd\u8fdb\u884c\u8d4b\u503c"),"\u3002\u53d8\u91cf\u58f0\u660e\u7a7a\u95f4\u53ef\u4ee5\u8fdb\u884c\u8d4b\u503c\uff1a"),(0,a.kt)("p",null,"\u7c7b\u578b\u58f0\u660e\u7a7a\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo{}\ntype Bus = {}\ninterface Bar{}\n// \u8fd9\u4e9b\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u7c7b\u578b\u6ce8\u89e3\u4f7f\u7528\nlet foo:Foo\nlet bus:Bus\nlet bar:Bar\n// \u4f46\u662f Bar\u3001Bus \u4e0d\u80fd\u8d4b\u503c\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ea\u5b58\u5728\u7c7b\u578b\u58f0\u660e\u7a7a\u95f4\nconst bar = Bar // error: cannot find name 'Bar'\n")),(0,a.kt)("p",null,"\u53d8\u91cf\u58f0\u660e\u7a7a\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo {}\nconst someVar = Foo\n// class Foo {}  Foo \u65e2\u4f1a\u88ab\u653e\u7f6e\u5230\u53d8\u91cf\u58f0\u660e\u7a7a\u95f4\uff0c\u4e5f\u4f1a\u653e\u5230\u7c7b\u578b\u58f0\u660e\u7a7a\u95f4\n// \u6240\u4ee5 class \u58f0\u660e\u7684\u5185\u5bb9\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u7c7b\u578b\u6ce8\u89e3\uff0c\u4e5f\u53ef\u4ee5\u8fdb\u884c\u8d4b\u503c\n")),(0,a.kt)("h2",{id:"\u5168\u5c40\u6a21\u5757"},"\u5168\u5c40\u6a21\u5757"),(0,a.kt)("p",null,"\u5168\u5c40\u6a21\u5757\u5c31\u662f\u4efb\u4f55\u6587\u4ef6\u90fd\u53ef\u4ee5\u8bbf\u95ee\u7684\u6a21\u5757\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u4e00\u4e2a\u65b0\u7684 ts \u6587\u4ef6\u4e2d\u5199\u4ee3\u7801\u65f6\uff0c\u5b83\u5904\u4e8e\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// foo.ts\nconst foo = 123\n// \u6b64\u65f6\uff0c\u5982\u679c\u5728\u76f8\u540c\u7684\u9879\u76ee\u91cc\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6 bar.ts \u7cfb\u7edf\u4f1a\u5141\u8bb8\u4f60\u4f7f\u7528 foo \u5185\u7684\u5185\u5bb9\n// bar.ts\nconst back = foo\n")),(0,a.kt)("p",null,"\u60f3\u907f\u514d\u66b4\u9732\u5728\u5168\u5c40\u4f5c\u7528\u7a7a\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// foo.ts\nexport const foo = 123\n// \u5982\u679c\u60f3\u7ee7\u7eed\u4f7f\u7528 foo \u5c31\u9700\u8981\u8fdb\u884c\u5bfc\u5165\uff0c\u5e76\u4e14\u4f7f\u7528\u5176\u4ed6\u53d8\u91cf\u4e5f\u4e0d\u4f1a\u6c61\u67d3\u5168\u5c40\u4f5c\u7528\u57df\n// bar.ts\nimport {foo} from './foo' // \u6b64\u65f6\u8fd8\u4f1a\u5c06\u8be5\u6587\u4ef6\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u6a21\u5757\uff0c\u6587\u4ef6\u5185\u5b9a\u4e49\u7684\u53d8\u91cf\u4e5f\u4e0d\u4f1a\u6c61\u67d3\u5168\u5c40\u7a7a\u95f4\nconst back = foo\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6240\u4ee5\u6587\u4ef6\u5185\uff0c\u53ea\u8981\u4f7f\u7528\u4e86 export \u5173\u952e\u5b57\uff0c\u5c31\u4f1a\u8868\u793a\u8be5\u6587\u4ef6\u662f\u4e2a\u6a21\u5757\u3002\u6240\u4ee5\u4e5f\u5e38\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"export {}")," \u653e\u5728\u9996\u884c\uff0c\u8868\u793a\u662f\u4e00\u4e2a\u6a21\u5757\u3002")),(0,a.kt)("h2",{id:"\u73af\u5883\u58f0\u660e"},"\u73af\u5883\u58f0\u660e"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"declare")," \u5173\u952e\u5b57\u6765\u544a\u8bc9 TypeScript \u4e00\u4e2a\u5176\u4ed6\u5730\u65b9\u5df2\u7ecf\u5b58\u5728\u7684\u4ee3\u7801\uff08\u5185\u5bb9\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// main.ts\nfoo = 1123 // Error\n")),(0,a.kt)("p",null,"\u901a\u5e38\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".d.ts")," \u7ed3\u5c3e\u7684\u6587\u4ef6\u8fdb\u884c\u58f0\u660e\uff0c\u4e00\u822c\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"global.d.ts")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"vendor.d.ts"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// global.d.ts\ndeclare let foo:any\n// main.ts\nfoo = 1123 // declare \u58f0\u660e\u4e86\u8be5\u53d8\u91cf\uff0c\u5c06\u4e0d\u4f1a\u62a5\u9519\n\n")),(0,a.kt)("p",null,"\u5176\u4ed6\u7684\u58f0\u660e\u6587\u4ef6\u4e5f\u7c7b\u4f3c\u4e8e\u8be5\u6587\u4ef6\uff0c\u4f46\u662f\u66f4\u52a0\u8be6\u7ec6\uff0c\u6240\u4ee5\u5982\u679c\u81ea\u5e26 ",(0,a.kt)("inlineCode",{parentName:"p"},".d.ts")," \u7ed3\u5c3e\u7684\u58f0\u660e\u6587\u4ef6\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u81ea\u884c\u4e66\u5199\u3002"),(0,a.kt)("p",null,"\u5728\u58f0\u660e\u6587\u4ef6\u4e2d\uff0c\u6bcf\u4e2a\u6839\u7ea7\u522b\u7684\u58f0\u660e\u5fc5\u987b\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"declare")," \u5173\u952e\u5b57\u4f5c\u4e3a\u524d\u7f00\uff0c TypeScript \u5c06\u4e0d\u4f1a\u628a\u5b83\u7f16\u8bd1\u6210\u4efb\u4f55\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u9700\u8981\u786e\u4fdd\u8fd9\u4e9b\u58f0\u660e\u6587\u4ef6\uff0c\u548c\u58f0\u660e\u7684\u5185\u5bb9\u5728\u7f16\u8bd1\u65f6\u5b58\u5728\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u58f0\u660e\u6587\u4ef6\u53ef\u4ee5\u58f0\u660e\u5404\u79cd\u7c7b\u578b")),(0,a.kt)("h3",{id:"ts\u7684\u58f0\u660e\u6587\u4ef6"},"TS\u7684\u58f0\u660e\u6587\u4ef6"),(0,a.kt)("p",null,"\u7f16\u8bd1\u5668\u901a\u8fc7\u58f0\u660e\u6587\u4ef6\u80fd\u591f\u663e\u793a\u6765\u81ea\u5176\u4ed6\u5305\u7684\u9519\u8bef\u548c\u63d0\u793a\u3002\u5e76\u4e14\u58f0\u660e\u6587\u4ef6\u63d0\u4f9b\u6709\u5173\u5e93\u7684\u6240\u6709\u7c7b\u578b\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u83b7\u53d6\u4e00\u4e2a\u5e93\u7684\u58f0\u660e\u6587\u4ef6\u6709\u4e24\u79cd\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bundled")," \u5305\u542b\u4e86\u81ea\u5df1\u7684\u58f0\u660e\u6587\u4ef6\uff0c\u6211\u4eec\u53ea\u9700\u5b89\u88c5\u8fd9\u4e2a\u5e93\uff0c\u5c31\u53ef\u4ee5\u7acb\u5373\u4f7f\u7528\u5b83\uff0c\u770b\u5e93\u4e2d\u662f\u5426\u5305\u542b index.d.ts \u6587\u4ef6\uff0c\u6709\u4e9b\u5e93\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," \u6587\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"typings")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"types")," \u5c5e\u6027\u4e2d\u6307\u5b9a\u7c7b\u578b\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Definitely Typed")," \u662f\u4e00\u4e2a\u5e9e\u5927\u7684\u58f0\u660e\u4ed3\u5e93\uff0c\u4e3a\u6ca1\u6709\u58f0\u660e\u6587\u4ef6\u7684 JavaScript\u63d0\u4f9b\u7c7b\u578b\u5b9a\u4e49\u3002\u8fd9\u4e9b\u7c7b\u578b\u5b9a\u4e49\u901a\u8fc7\u4f17\u5305\u7684\u65b9\u5f0f\u5b8c\u6210\uff0c\u5fae\u8f6f\u548c\u5f00\u6e90\u8005\u4e00\u540c\u7ba1\u7406\u3002\uff08\u6bd4\u5982 React \u6ca1\u6709\u81ea\u5df1\u7684\u58f0\u660e\u6587\u4ef6\uff0c\u53ef\u4ee5\u4ece Definitely Typed \u83b7\u53d6\u5b83\u7684\u58f0\u660e\u6587\u4ef6\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn \nyarn add --dev @types/react\n# npm \nnpm i --save-dev @types/react\n")),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u65b9\u4ee3\u7801\u7684\u58f0\u660e"},"\u7b2c\u4e09\u65b9\u4ee3\u7801\u7684\u58f0\u660e"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u53ef\u80fd\u5728\u67d0\u4e9b\u5185\u5bb9\u4e0a\u6dfb\u52a0\u663e\u5f0f\u6ce8\u89e3\uff0c\u5e76\u4e14\u4f60\u4f1a\u5728\u7c7b\u578b\u58f0\u660e\u7a7a\u95f4\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u5feb\u901f\u5b9e\u73b0\u5b83"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"declare type Staff = {\n    name:string\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4e2a\u4eba\u503e\u5411\u8ba4\u4e3a\u8fd9\u662f\u81ea\u5b9a\u4e49\u58f0\u660e\uff0c\u5728\u58f0\u660e\u6587\u4ef6\u4e2d\u8fdb\u884c\u58f0\u660e\u4e4b\u540e\uff0c\u5728\u4efb\u4f55\u5176\u4ed6\u7684\u6587\u4ef6\u4e2d\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u5e76\u4e14\u65e0\u9700\u8fdb\u884c\u5f15\u5165\u3002\u5728\u4f7f\u7528\u4e2d\u8981\u7b26\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"declear")," \u4e2d\u5b9a\u4e49\u7684\u7ea6\u675f\u3002")),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u65b9-npm-\u6a21\u5757"},"\u7b2c\u4e09\u65b9 NPM \u6a21\u5757"),(0,a.kt)("p",null,"\u53ef\u4ee5\u7528\u58f0\u660e\u4e00\u4e2a\u5168\u5c40\u6a21\u5757\u7684\u65b9\u5f0f\uff0c\u6765\u89e3\u51b3\u67e5\u627e\u6a21\u5757\u8def\u5f84\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"global.d.ts")," \u662f\u4e00\u79cd\u6269\u5145 ",(0,a.kt)("inlineCode",{parentName:"p"},"lib.d.ts")," \u5f88\u597d\u7684\u65b9\u5f0f\uff0c\u5982\u679c\u4f60\u9700\u8981\u7684\u8bdd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// \u5b9a\u4e49 global.d.ts\ndeclare module 'jquery'{\n  // some variable declarations\n  export var bar: number;\n}\n// \u5bfc\u5165\u4f7f\u7528 main.js\n// \u5728\u5fc5\u8981\u7684\u65f6\u5019\u8fdb\u884c\u5bfc\u5165\nimport * as $ from 'jquery'\n// import vue from 'vue' // \u5982\u679c\u6ca1\u6709\u8fdb\u884c declare \u58f0\u660e\uff0c\u76f4\u63a5\u5f15\u5165\u4f1a\u62a5\u9519\n")),(0,a.kt)("p",null,"\u6709\u4eba\u4f1a\u58f0\u660e ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i @types/jquery")),(0,a.kt)("h3",{id:"\u975e-js-\u8d44\u6e90"},"\u975e JS \u8d44\u6e90"),(0,a.kt)("p",null,"\u5728 ts \u6587\u4ef6\u4e2d\uff0c\u53ef\u80fd\u5f15\u5165\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u6bd4\u5982 png\u3002\u4e3a\u4e86\u907f\u514d\u62a5\u9519\uff0c\u5411\u6587\u4ef6\u4e2d\u8fdb\u884c\u58f0\u660e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// index.d.ts\ndeclare module '*.svg'\ndeclare module '*.png'\ndeclare module '*.vue'{ // \u7528\u4e8e\u5b9a\u4e49\u4ee5 .vue \u7ed3\u5c3e\u7684\u6587\u4ef6\uff0c\u5e76\u4e14\u8ba9 typescript \u8df3\u8fc7\u8bc6\u522b\n  import type {DefineComponent} from 'vue'\n  const component: DefineComponent <{}, {}, any>\n  export default component\n}\n// \u5728\u58f0\u660e\u4e4b\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\nimport * as foo from './some/file.css'\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6587\u7ae0\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u94fe\u63a5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6df1\u5165\u7406\u89e3TypeScript"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://link.juejin.cn?target=https%3A%2F%2Fjkchao.github.io%2Ftypescript-book-chinese%2F"},"jkchao.github.io/typescript-\u2026"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u94c1\u76ae\u996d\u76d2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://juejin.cn/post/6844903993727008776"},"juejin.cn/post/684490\u2026"))))),(0,a.kt)("p",null,"\u5982\u6709\u9519\u8bef\uff08\u4e0d\u5f53\uff09\u53ef\u4ee5\u5728\u8bc4\u8bba\u533a\u6307\u51fa\u3002"),(0,a.kt)("p",null,"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"))}m.isMDXComponent=!0}}]);