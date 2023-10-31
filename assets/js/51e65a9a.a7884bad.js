"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9434],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(8028),o=(n(9496),n(9613));const a={},u=void 0,i={unversionedId:"\u540e\u7aef/nuxt/1.nuxt\u6982\u8ff0",id:"\u540e\u7aef/nuxt/1.nuxt\u6982\u8ff0",title:"1.nuxt\u6982\u8ff0",description:"\u5b66\u4e60\u524d\u63d0",source:"@site/my-docs/\u540e\u7aef/nuxt/1.nuxt\u6982\u8ff0.md",sourceDirName:"\u540e\u7aef/nuxt",slug:"/\u540e\u7aef/nuxt/1.nuxt\u6982\u8ff0",permalink:"/my-website/docs/\u540e\u7aef/nuxt/1.nuxt\u6982\u8ff0",draft:!1,editUrl:"https://github.com/my-docs/\u540e\u7aef/nuxt/1.nuxt\u6982\u8ff0.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"node\u4e2d\u95f4\u5c42",permalink:"/my-website/docs/\u540e\u7aef/node\u4e2d\u95f4\u5c42"},next:{title:"\u5b66\u4e60\u8d44\u6599",permalink:"/my-website/docs/\u5b66\u4e60\u8d44\u6599"}},c={},l=[{value:"\u5b66\u4e60\u524d\u63d0",id:"\u5b66\u4e60\u524d\u63d0",level:3}],s={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5b66\u4e60\u524d\u63d0"},"\u5b66\u4e60\u524d\u63d0"),(0,o.kt)("p",null,"\u5f00\u53d1\u8fc7 vue \u7684\u9879\u76ee"),(0,o.kt)("p",null,"\u638c\u63e1 node \u540e\u7aef express \u6846\u67b6"),(0,o.kt)("p",null,"MongoDB \u6570\u636e\u5e93\u6709\u6240\u4e86\u89e3"),(0,o.kt)("p",null,"Webpack \u6253\u5305\uff0cbabel"),(0,o.kt)("p",null,"sass\u3001less"),(0,o.kt)("p",null,"Linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Nuxt \u4e2d\uff0c\u9879\u76ee\u6587\u4ef6\u5939\u7684\u4f5c\u7528\u4ecb\u7ecd\n  \u251c\u2500.nuxt               // Nuxt\u81ea\u52a8\u751f\u6210\uff0c\u4e34\u65f6\u7684\u7528\u4e8e\u7f16\u8f91\u7684\u6587\u4ef6\uff0cbuild\uff0c\u6bcf\u6b21 npm run build \u90fd\u53ef\u4ee5\u751f\u6210\uff0c\u4e0b\u4e00\u6b21\u751f\u6210\u4f1a\u8986\u76d6\u4e0a\u4e00\u6b21\u7684\u5185\u5bb9\n  \u251c\u2500assets              // \u7528\u4e8e\u7ec4\u7ec7\u672a\u7f16\u8bd1\u7684\u9759\u6001\u8d44\u6e90\u5982 LESS\u3001SASS\u6216JavaScript,\u5bf9\u4e8e\u4e0d\u987b\u8981\u7ecf\u8fc7 Webpack \u5904\u7406\u7684\u9759\u6001\u8d44\u6e90\u6587\u4ef6\uff0c\u80fd\u591f\u653e\u7f6e\u5728 static \u76ee\u5f55\u4e2d\n  \u251c\u2500components          // \u7528\u4e8e\u672c\u8eab\u7f16\u5199\u7684 Vue \u7ec4\u4ef6\uff0c\u597d\u6bd4\u65e5\u5386\u7ec4\u4ef6\u3001\u5206\u9875\u7ec4\u4ef6\n  \u251c\u2500layouts\u2b50          // \u5e03\u5c40\u76ee\u5f55\uff0c\u7528\u4e8e\u7ec4\u7ec7\u5e94\u7528\u7684\u5e03\u5c40\u7ec4\u4ef6\uff0c\u4e0d\u53ef\u66f4\u6539\n  \u251c\u2500middleware          // \u7528\u4e8e\u5b58\u653e\u4e2d\u95f4\u4ef6\uff0c\u7528\u4e8e\u5b9a\u4e49\u5448\u73b0\u9875\u9762\u6216\u4e00\u7ec4\u9875\u9762\u4e4b\u524d\u8981\u8fd0\u884c\u7684\u81ea\u5b9a\u4e49\u51fd\u6570\n  \u251c\u2500node_modules\n  \u251c\u2500pages\u2b50            // \u7528\u4e8e\u7ec4\u7ec7\u5e94\u7528\u7684\u8def\u7531\u53ca\u89c6\u56fe,Nuxt.js\u6839\u636e\u8be5\u76ee\u5f55\u7ed3\u6784\u81ea\u52a8\u751f\u6210\u5bf9\u5e94\u7684\u8def\u7531\u914d\u7f6e\uff0c\u6587\u4ef6\u540d\u4e0d\u53ef\u66f4\u6539\n  \u251c\u2500plugins             // \u7528\u4e8e\u7ec4\u7ec7\u90a3\u4e9b\u987b\u8981\u5728 \u6839vue.js\u5e94\u7528 \u5b9e\u4f8b\u5316\u4ee5\u524d\u987b\u8981\u8fd0\u884c\u7684 Javascript \u63d2\u4ef6\u3002\n  \u251c\u2500server                          // \u6682\u65e0\u914d\u7f6e\u548c\u4ecb\u7ecd\n  \u251c\u2500static\u2b50            // \u7528\u4e8e\u5b58\u653e\u5e94\u7528\u7684\u9759\u6001\u6587\u4ef6\uff0c\u6b64\u7c7b\u6587\u4ef6\u4e0d\u4f1a\u88ab Nuxt.js \u8c03\u7528 Webpack \u8fdb\u884c\u6784\u5efa\u7f16\u8bd1\u5904\u7406\u3002 \u670d\u52a1\u5668\u542f\u52a8\u7684\u65f6\u5019\uff0c\u8be5\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u4f1a\u6620\u5c04\u81f3\u5e94\u7528\u7684\u6839\u8def\u5f84 / \u4e0b\u3002\u6587\u4ef6\u5939\u540d\u4e0d\u53ef\u66f4\u6539\u3002\n  \u2514\u2500store\u2b50             // \u7528\u4e8e\u7ec4\u7ec7\u5e94\u7528\u7684Vuex \u72b6\u6001\u7ba1\u7406\u3002\u6587\u4ef6\u5939\u540d\u4e0d\u53ef\u66f4\u6539\u3002\n  \u251c\u2500.editorconfig       // \u5f00\u53d1\u5de5\u5177\u683c\u5f0f\u914d\u7f6e\n  \u251c\u2500.eslintrc.js        // ESLint\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u68c0\u67e5\u4ee3\u7801\u683c\u5f0f\n  \u251c\u2500.gitignore          // \u914d\u7f6egit\u5ffd\u7565\u6587\u4ef6\n  \u251c\u2500nuxt.config.js\u2b50    // \u7528\u4e8e\u7ec4\u7ec7Nuxt.js \u5e94\u7528\u7684\u4e2a\u6027\u5316\u914d\u7f6e\uff0c\u4ee5\u4fbf\u8986\u76d6\u9ed8\u8ba4\u914d\u7f6e\u3002\u6587\u4ef6\u540d\u4e0d\u53ef\u66f4\u6539\u3002\n  \u251c\u2500package-lock.json   // npm\u81ea\u52a8\u751f\u6210\uff0c\u7528\u4e8e\u5e2e\u52a9package\u7684\u7edf\u4e00\u8bbe\u7f6e\u7684\uff0cyarn\u4e5f\u6709\u76f8\u540c\u7684\u64cd\u505a\n  \u251c\u2500package.json        // npm \u5305\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6\n")))}m.isMDXComponent=!0}}]);