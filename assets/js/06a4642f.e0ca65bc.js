"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1316],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1321:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),p=["components"],o={sidebar_position:5},i=void 0,c={unversionedId:"JavaScript & TypeScript/TypeScript/3. \u58f0\u660e\u7a7a\u95f4",id:"JavaScript & TypeScript/TypeScript/3. \u58f0\u660e\u7a7a\u95f4",title:"3. \u58f0\u660e\u7a7a\u95f4",description:"Create by fall on 2022-01-13",source:"@site/docs\\JavaScript & TypeScript\\TypeScript\\3. \u58f0\u660e\u7a7a\u95f4.md",sourceDirName:"JavaScript & TypeScript/TypeScript",slug:"/JavaScript & TypeScript/TypeScript/3. \u58f0\u660e\u7a7a\u95f4",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/3. \u58f0\u660e\u7a7a\u95f4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript & TypeScript/TypeScript/3. \u58f0\u660e\u7a7a\u95f4.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"2.2 lib.d.ts",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/2.2 lib.d.ts"},next:{title:"4.1 TS\u7684\u6570\u636e\u7c7b\u578b",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/4.1 TS\u7684\u6570\u636e\u7c7b\u578b"}},s={},u=[{value:"\u58f0\u660e\u7a7a\u95f4",id:"\u58f0\u660e\u7a7a\u95f4",level:2},{value:"\u5168\u5c40\u6a21\u5757",id:"\u5168\u5c40\u6a21\u5757",level:2},{value:"\u73af\u5883\u58f0\u660e",id:"\u73af\u5883\u58f0\u660e",level:2},{value:"TS\u7684\u58f0\u660e\u6587\u4ef6",id:"ts\u7684\u58f0\u660e\u6587\u4ef6",level:3},{value:"\u7b2c\u4e09\u65b9\u4ee3\u7801\u7684\u58f0\u660e",id:"\u7b2c\u4e09\u65b9\u4ee3\u7801\u7684\u58f0\u660e",level:3},{value:"NPM \u6a21\u5757",id:"npm-\u6a21\u5757",level:3},{value:"\u975e JS \u8d44\u6e90",id:"\u975e-js-\u8d44\u6e90",level:3},{value:"\u547d\u540d\u7a7a\u95f4",id:"\u547d\u540d\u7a7a\u95f4",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Create by ",(0,l.kt)("strong",{parentName:"p"},"fall")," on 2022-01-13\nRecently revised in 2022-03-02")),(0,l.kt)("h2",{id:"\u58f0\u660e\u7a7a\u95f4"},"\u58f0\u660e\u7a7a\u95f4"),(0,l.kt)("p",null,"\u58f0\u660e\u7a7a\u95f4\uff0c\u5c31\u662f\u6240\u5728\u7684\u4e0d\u540c\u7a7a\u95f4\uff0c\u7c7b\u578b\u7a7a\u95f4\u662f TypeScript \u58f0\u660e\u7684\u7c7b\u578b\u7a7a\u95f4\uff0c\u8fd9\u4e9b\u7a7a\u95f4\u7684\u53d8\u91cf\u4e0d\u80fd\u8fdb\u884c\u8d4b\u503c\u3002"),(0,l.kt)("p",null,"\u7c7b\u578b\u58f0\u660e\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo{}\ntype Bus = {}\ninterface Bar{}\n// \u8fd9\u4e9b\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u7c7b\u578b\u6ce8\u89e3\u4f7f\u7528\nlet foo:Foo\nlet bus:Bus\nlet bar:Bar\n// \u4f46\u662f Bar \u4e0d\u80fd\u8d4b\u503c\uff0c\u56e0\u4e3a Bar \u53ea\u5b58\u5728\u7c7b\u578b\u58f0\u660e\u7a7a\u95f4\nconst bar = Bar // error: cannot find name 'Bar'\n")),(0,l.kt)("p",null,"\u53d8\u91cf\u58f0\u660e\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo {}\nconst someVar = Foo\n// class Foo {}  Foo \u65e2\u4f1a\u88ab\u653e\u7f6e\u5230\u53d8\u91cf\u58f0\u660e\u7a7a\u95f4\uff0c\u4e5f\u4f1a\u653e\u5230\u7c7b\u578b\u58f0\u660e\u7a7a\u95f4\n")),(0,l.kt)("h2",{id:"\u5168\u5c40\u6a21\u5757"},"\u5168\u5c40\u6a21\u5757"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u4e00\u4e2a\u65b0\u7684 ts \u6587\u4ef6\u4e2d\u5199\u4ee3\u7801\u65f6\uff0c\u5b83\u5904\u4e8e\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// foo.ts\nconst foo = 123\n// \u6b64\u65f6\uff0c\u5982\u679c\u5728\u76f8\u540c\u7684\u9879\u76ee\u91cc\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6 bar.ts \u7cfb\u7edf\u4f1a\u5141\u8bb8\u4f60\u4f7f\u7528 foo \u5185\u7684\u5185\u5bb9\n// bar.ts\nconst back = foo\n")),(0,l.kt)("p",null,"\u60f3\u907f\u514d\u66b4\u9732\u5728\u5168\u5c40\u4f5c\u7528\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// foo.ts\nexport const foo = 123\n// \u5982\u679c\u60f3\u7ee7\u7eed\u4f7f\u7528 foo \u5c31\u9700\u8981\u8fdb\u884c\u5bfc\u5165\uff0c\u5e76\u4e14\u4f7f\u7528\u5176\u4ed6\u53d8\u91cf\u4e5f\u4e0d\u4f1a\u6c61\u67d3\u5168\u5c40\u4f5c\u7528\u57df\n// bar.ts\nimport {foo} from './foo' // \u6b64\u65f6\u8fd8\u4f1a\u5c06\u8be5\u6587\u4ef6\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u6a21\u5757\uff0c\u6587\u4ef6\u5185\u5b9a\u4e49\u7684\u53d8\u91cf\u4e5f\u4e0d\u4f1a\u6c61\u67d3\u5168\u5c40\u7a7a\u95f4\nconst back = foo\n")),(0,l.kt)("h2",{id:"\u73af\u5883\u58f0\u660e"},"\u73af\u5883\u58f0\u660e"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"declare")," \u5173\u952e\u5b57\u6765\u544a\u8bc9 TypeScript \u4e00\u4e2a\u5176\u4ed6\u5730\u65b9\u5df2\u7ecf\u5b58\u5728\u7684\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// main.ts\nfoo = 1123 // Error\n")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},".d.ts")," \u7ed3\u5c3e\u7684\u6587\u4ef6\u8fdb\u884c\u58f0\u660e\uff0c\u4e00\u822c\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"global.d.ts")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"vendor.d.ts"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// global.d.ts\ndeclare let foo:any\n// main.ts\nfoo = 1123 // declare \u58f0\u660e\u4e86\u8be5\u53d8\u91cf\uff0c\u5c06\u4e0d\u4f1a\u62a5\u9519\n")),(0,l.kt)("p",null,"\u5176\u4ed6\u7684\u58f0\u660e\u6587\u4ef6\u4e5f\u7c7b\u4f3c\u4e8e\u8be5\u6587\u4ef6\uff0c\u4f46\u662f\u66f4\u52a0\u8be6\u7ec6\uff0c\u6240\u4ee5\u5982\u679c\u81ea\u5e26 ",(0,l.kt)("inlineCode",{parentName:"p"},".d.ts")," \u7ed3\u5c3e\u7684\u58f0\u660e\u6587\u4ef6\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u81ea\u884c\u4e66\u5199\u3002"),(0,l.kt)("p",null,"\u5728\u58f0\u660e\u6587\u4ef6\u4e2d\uff0c\u6bcf\u4e2a\u6839\u7ea7\u522b\u7684\u58f0\u660e\u5fc5\u987b\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"declare")," \u5173\u952e\u5b57\u4f5c\u4e3a\u524d\u7f00\uff0c TypeScript \u5c06\u4e0d\u4f1a\u628a\u5b83\u7f16\u8bd1\u6210\u4efb\u4f55\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u9700\u8981\u786e\u4fdd\u8fd9\u4e9b\u58f0\u660e\u6587\u4ef6\uff0c\u548c\u58f0\u660e\u7684\u5185\u5bb9\u5728\u7f16\u8bd1\u65f6\u5b58\u5728\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u58f0\u660e\u6587\u4ef6\u53ef\u4ee5\u58f0\u660e\u5404\u79cd\u7c7b\u578b")),(0,l.kt)("h3",{id:"ts\u7684\u58f0\u660e\u6587\u4ef6"},"TS\u7684\u58f0\u660e\u6587\u4ef6"),(0,l.kt)("p",null,"\u7f16\u8bd1\u5668\u901a\u8fc7\u58f0\u660e\u6587\u4ef6\u80fd\u591f\u663e\u793a\u6765\u81ea\u5176\u4ed6\u5305\u7684\u9519\u8bef\u548c\u63d0\u793a\u3002\u5e76\u4e14\u58f0\u660e\u6587\u4ef6\u63d0\u4f9b\u6709\u5173\u5e93\u7684\u6240\u6709\u7c7b\u578b\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u83b7\u53d6\u4e00\u4e2a\u5e93\u7684\u58f0\u660e\u6587\u4ef6\u6709\u4e24\u79cd\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bundled")," \u5305\u542b\u4e86\u81ea\u5df1\u7684\u58f0\u660e\u6587\u4ef6\uff0c\u6211\u4eec\u53ea\u9700\u5b89\u88c5\u8fd9\u4e2a\u5e93\uff0c\u5c31\u53ef\u4ee5\u7acb\u5373\u4f7f\u7528\u5b83\uff0c\u770b\u5e93\u4e2d\u662f\u5426\u5305\u542b index.d.ts \u6587\u4ef6\uff0c\u6709\u4e9b\u5e93\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," \u6587\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"typings")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"types")," \u5c5e\u6027\u4e2d\u6307\u5b9a\u7c7b\u578b\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Definitely Typed")," \u662f\u4e00\u4e2a\u5e9e\u5927\u7684\u58f0\u660e\u4ed3\u5e93\uff0c\u4e3a\u6ca1\u6709\u58f0\u660e\u6587\u4ef6\u7684 JavaScript\u63d0\u4f9b\u7c7b\u578b\u5b9a\u4e49\u3002\u8fd9\u4e9b\u7c7b\u578b\u5b9a\u4e49\u901a\u8fc7\u4f17\u5305\u7684\u65b9\u5f0f\u5b8c\u6210\uff0c\u5fae\u8f6f\u548c\u5f00\u6e90\u8005\u4e00\u540c\u7ba1\u7406\u3002\uff08\u6bd4\u5982 React \u6ca1\u6709\u81ea\u5df1\u7684\u58f0\u660e\u6587\u4ef6\uff0c\u53ef\u4ee5\u4ece Definitely Typed \u83b7\u53d6\u5b83\u7684\u58f0\u660e\u6587\u4ef6\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn \nyarn add --dev @types/react\n# npm \nnpm i --save-dev @types/react\n")),(0,l.kt)("h3",{id:"\u7b2c\u4e09\u65b9\u4ee3\u7801\u7684\u58f0\u660e"},"\u7b2c\u4e09\u65b9\u4ee3\u7801\u7684\u58f0\u660e"),(0,l.kt)("p",null,"\u6709\u65f6\uff0c\u53ef\u80fd\u5728\u67d0\u4e9b\u5185\u5bb9\u4e0a\u6dfb\u52a0\u663e\u5f0f\u6ce8\u89e3\uff0c\u5e76\u4e14\u4f60\u4f1a\u5728\u7c7b\u578b\u58f0\u660e\u7a7a\u95f4\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u5feb\u901f\u5b9e\u73b0\u5b83"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"declare type Staff = {\n    name:string\n}\ndeclare let bbq:string\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u4e2a\u4eba\u503e\u5411\u8ba4\u4e3a\u8fd9\u662f\u81ea\u5b9a\u4e49\u58f0\u660e\uff0c\u5728\u58f0\u660e\u6587\u4ef6\u4e2d\u8fdb\u884c\u58f0\u660e\u4e4b\u540e\uff0c\u5728\u4efb\u4f55\u5176\u4ed6\u7684\u6587\u4ef6\u4e2d\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u5e76\u4e14\u65e0\u9700\u8fdb\u884c\u5f15\u5165\u3002\u5728\u4f7f\u7528\u4e2d\u8981\u7b26\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"declear")," \u4e2d\u5b9a\u4e49\u7684\u7ea6\u675f\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const liming:Staff ={\n  name:'\u5389\u660e'\n}\nbbq = '\u82ad\u6bd4Q'\n")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace")," \uff0c\u53d8\u91cf\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// glgbal.d.ts\ndeclare namespace MyStyle {\n  let color:string;\n  let display:string;\n  let width:number;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// use.js \u53d8\u91cf\u7a7a\u95f4\u7684\u4f7f\u7528\nStyle.color.substr(0,1)\n")),(0,l.kt)("p",null,"\u4fee\u6539\u5df2\u5b58\u5728\u7684\u5168\u5c40\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'declare global {\n  interface String {\n    hump(input: string): string;\n  }\n}\nexport {}\n// \u6ce8\u610f: \u4fee\u6539"\u5168\u5c40\u58f0\u660e"\u5fc5\u987b\u5728\u6a21\u5757\u5185\u90e8, \u6240\u4ee5\u81f3\u5c11\u8981\u6709 export{}\u5b57\u6837\n// \u4e0d\u7136\u4f1a\u62a5\u9519\u274c: \u5168\u5c40\u8303\u56f4\u7684\u6269\u5927\u4ec5\u53ef\u76f4\u63a5\u5d4c\u5957\u5728\u5916\u90e8\u6a21\u5757\u4e2d\u6216\u73af\u5883\u6a21\u5757\u58f0\u660e\u4e2d\n// \u6ce8\u610f\uff0c\u8fd9\u4e9b\u58f0\u660e\u7684\u5185\u5bb9\u8981\u8fdb\u884c\u5b9e\u73b0\n')),(0,l.kt)("h3",{id:"npm-\u6a21\u5757"},"NPM \u6a21\u5757"),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u58f0\u660e\u4e00\u4e2a\u5168\u5c40\u6a21\u5757\u7684\u65b9\u5f0f\uff0c\u6765\u89e3\u51b3\u67e5\u627e\u6a21\u5757\u8def\u5f84\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"global.d.ts")," \u53ef\u4ee5\u5f88\u597d\u5730\u6269\u5145 ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.d.ts")," \uff0c\u5728\u8be5\u6587\u4ef6\u4e2d\u58f0\u660e\u7684\u90fd\u4f1a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5b9a\u4e49 global.d.ts\ndeclare module 'jquery'{\n  // some variable declarations\n  export var bar: number;\n}\n// \u5bfc\u5165\u4f7f\u7528 main.js\n// \u5728\u5fc5\u8981\u7684\u65f6\u5019\u8fdb\u884c\u5bfc\u5165\nimport * as $ from 'jquery'\n// import vue from 'vue' // \u5982\u679c\u6ca1\u6709\u8fdb\u884c declare \u58f0\u660e\uff0c\u76f4\u63a5\u5f15\u5165\u4f1a\u62a5\u9519\n")),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u4e5d\u6210\u4ee5\u4e0a\u6d41\u884c\u7684 js \u5e93\u90fd\u6709\u4eba\u58f0\u660e\u8fc7\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u4ece npm \u4e0a\u8fdb\u884c\u4e0b\u8f7d\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"npm i @types/jquery")," "),(0,l.kt)("p",null,"\u771f\u7684\u627e\u4e0d\u5230\uff0c\u53ea\u80fd\u81ea\u5df1\u624b\u5199"),(0,l.kt)("h3",{id:"\u975e-js-\u8d44\u6e90"},"\u975e JS \u8d44\u6e90"),(0,l.kt)("p",null,"\u5728 ts \u6587\u4ef6\u4e2d\uff0c\u53ef\u80fd\u5f15\u5165\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u6bd4\u5982 png\u3002\u4e3a\u4e86\u907f\u514d\u62a5\u9519\uff0c\u5411\u6587\u4ef6\u4e2d\u8fdb\u884c\u58f0\u660e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// index.d.ts\ndeclare module '*.svg'\ndeclare module '*.png'\ndeclare module '*.vue'{ // \u7528\u4e8e\u5b9a\u4e49\u4ee5 .vue \u7ed3\u5c3e\u7684\u6587\u4ef6\uff0c\u5e76\u4e14\u8ba9 typescript \u8df3\u8fc7\u8bc6\u522b\n  import type {DefineComponent} from 'vue'\n  const component: DefineComponent <{}, {}, any>\n  export default component\n}\n// \u5728\u58f0\u660e\u4e4b\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\nimport * as foo from './some/file.css'\n")),(0,l.kt)("h2",{id:"\u547d\u540d\u7a7a\u95f4"},"\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u547d\u540d\u7a7a\u95f4\u662f\u5f88\u65e9\u4e4b\u524d\u7684\u6982\u5ff5\uff0c\u73b0\u5728\u5728 TS \u4e2d\u76f4\u63a5\u4f7f\u7528 export {} \u5c31\u53ef\u4ee5\u58f0\u660e\u6a21\u5757\uff0c\u5c31\u62e5\u6709\u4e86\u72ec\u81ea\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,l.kt)("p",null,"\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"export \u5bfc\u51fa\uff0c\u9700\u8981\u8fdb\u884c\u624b\u52a8\u5bfc\u5165"),(0,l.kt)("li",{parentName:"ul"},"declare \u5bfc\u51fa\uff0c\u76f4\u63a5\u58f0\u660e\u5168\u5c40\u6587\u4ef6")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u4f7f\u7528 export \u4e4b\u540e\uff0c\u8be5\u6587\u4ef6\u5c31\u4f1a\u53d8\u4e3a\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u5728\u6539\u6587\u4ef6\u4e2d\u7684\u4efb\u4f55 declare \u548c export \u7684 namespace \u90fd\u9700\u8981\u624b\u52a8\u5bfc\u5165")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// declare.d.ts\nexport namespace Tool{\n  \n}\n// declare.d.ts\ndeclare namespace Weapon{\n  \n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},".ts")," \u7ed3\u5c3e\u7684\u6587\u4ef6\u4e2d\uff0c ES2015 \u6a21\u5757\u5316\u4f18\u5148\u4e8e namespace \uff0cESlint \u4f1a\u62a5\u9519")),(0,l.kt)("p",null,"\u5f15\u7528\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'/// <reference path="xxx.ts" />\n// \u76f8\u5f53\u4e8e\u5bfc\u5165 xxx.ts \u6587\u4ef6\u7684\u547d\u540d\u7a7a\u95f4\u5e76\u548c\u5f53\u524d\u7684\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u5408\u5e76\nimport { Lee } from "./xxx";\n// \u4ece\u6587\u4ef6 xxx \u4e2d\u5f15\u5165\u547d\u540d\u7a7a\u95f4 Lee\n')),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6587\u7ae0\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u94fe\u63a5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6df1\u5165\u7406\u89e3TypeScript"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://jkchao.github.io/typescript-book-chinese/"},"https://jkchao.github.io/typescript-book-chinese/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u94c1\u76ae\u996d\u76d2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://juejin.cn/post/6844903993727008776"},"https://juejin.cn/post/6844903993727008776"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u94c1\u76ae\u996d\u76d2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://juejin.cn/post/6844903921031479309"},"https://juejin.cn/post/6844903921031479309"))))))}d.isMDXComponent=!0}}]);