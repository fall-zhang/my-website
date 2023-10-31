"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4342],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,p(p({ref:t},c),{},{components:n})):r.createElement(h,p({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(8028),a=(n(9496),n(9613));const o={},p=void 0,i={unversionedId:"npm \u5305/cross-spawn",id:"npm \u5305/cross-spawn",title:"cross-spawn",description:"Create by fall on: 2022-07-12",source:"@site/my-docs/npm \u5305/cross-spawn.md",sourceDirName:"npm \u5305",slug:"/npm \u5305/cross-spawn",permalink:"/my-website/docs/npm \u5305/cross-spawn",draft:!1,editUrl:"https://github.com/my-docs/npm \u5305/cross-spawn.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"commander",permalink:"/my-website/docs/npm \u5305/commander"},next:{title:"crypto-js",permalink:"/my-website/docs/npm \u5305/crypto-js"}},s={},l=[{value:"cross-spawn",id:"cross-spawn",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Create by ",(0,a.kt)("strong",{parentName:"p"},"fall")," on: 2022-07-12\nRecently revised in: 2022-07-12")),(0,a.kt)("h2",{id:"cross-spawn"},"cross-spawn"),(0,a.kt)("p",null,"Node \u63d0\u4f9b ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.cn/api/child_process.html"},"child_process")," \u6a21\u5757\u6765\u521b\u5efa\u5b50\u8fdb\u7a0b\uff0c\u5176\u4e2d ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.cn/api/child_process.html#child_process_child_process_spawn_command_args_options"},"child_process.spawn()")," \u65b9\u6cd5\u7684\u4f5c\u7528\u662f\u4f7f\u7528\u6307\u5b9a\u7684\u547d\u4ee4\u884c\u53c2\u6570\u521b\u5efa\u5f02\u6b65\u5b50\u8fdb\u7a0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"child_process.spawnSync()")," \u662f\u5176\u540c\u6b65\u8fdb\u7a0b\u521b\u5efa\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"[",(0,a.kt)("inlineCode",{parentName:"p"},"child_process.spawn(command[, args\\][, options])"),"](",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.cn/api/child_process.html#child_process_options_stdio)%EF%BC%8C%E7%AE%80%E4%BB%8B%F0%9F%91%87%EF%BC%9A"},"http://nodejs.cn/api/child_process.html#child_process_options_stdio)\uff0c\u7b80\u4ecb\ud83d\udc47\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"command"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"<string>")," \u5c06\u8981\u8fd0\u884c\u7684\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"args"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"<string[]>")," \u5b57\u7b26\u4e32\u53c2\u6570\u5217\u8868\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"<Object>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cwd"),"\uff1a\u5b50\u8fdb\u7a0b\u7684\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stdio"),"\uff1a\u5b50\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u5165\u8f93\u51fa\u914d\u7f6e\uff0c\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"'inherit'")," \u8868\u793a\u5b50\u8fdb\u7a0b\u5c06\u4f7f\u7528\u7236\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u5165\u8f93\u51fa\u3002\u8be6\u89c1",(0,a.kt)("a",{parentName:"li",href:"https://link.juejin.cn?target=http%3A%2F%2Fnodejs.cn%2Fapi%2Fchild_process%2Foptions_stdio.html"},"\u8fd9\u91cc")),(0,a.kt)("li",{parentName:"ul"},"\u7701\u7565\u5176\u4ed6\u9009\u9879...")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cross-spawn")," \u662f node ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"spawnSync")," \u7684\u8de8\u5e73\u53f0\u5b9e\u73b0\uff0c\u4f7f\u7528\u65b9\u5f0f\u5b8c\u5168\u4e00\u81f4\uff0c\u4e3b\u8981\u89e3\u51b3 node ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn")," \u5728 Windows \u4e0a\u5b58\u5728\u7684",(0,a.kt)("a",{parentName:"p",href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmoxystudio%2Fnode-cross-spawn%23why"},"\u95ee\u9898"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const spawn = require('cross-spawn');\n\n// Spawn NPM asynchronously\nconst child = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });\n\n// Spawn NPM synchronously\nconst result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,a.kt)("th",{parentName:"tr",align:null},"\u94fe\u63a5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5de5\u5177\u6211\u90a3\u90fd\u9f50"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://juejin.cn/post/6991820222701404190"},"https://juejin.cn/post/6991820222701404190"))))))}d.isMDXComponent=!0}}]);