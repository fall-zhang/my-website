"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8253],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3848:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:1},u=void 0,c={unversionedId:"HTML\u548cCSS/-- BFC\u89c4\u8303",id:"HTML\u548cCSS/-- BFC\u89c4\u8303",title:"-- BFC\u89c4\u8303",description:"Create by fall on:2022-02-10",source:"@site/docs\\HTML\u548cCSS\\-- BFC\u89c4\u8303.md",sourceDirName:"HTML\u548cCSS",slug:"/HTML\u548cCSS/-- BFC\u89c4\u8303",permalink:"/docs/HTML\u548cCSS/-- BFC\u89c4\u8303",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/HTML\u548cCSS/-- BFC\u89c4\u8303.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HTML \u548c CSS",permalink:"/docs/category/html-\u548c-css"},next:{title:"1-HTML\u57fa\u7840",permalink:"/docs/HTML\u548cCSS/1-HTML\u57fa\u7840"}},p={},s=[{value:"\u5757\u7ea7\u683c\u5f0f\u4e0a\u4e0b\u6587",id:"\u5757\u7ea7\u683c\u5f0f\u4e0a\u4e0b\u6587",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Create by fall on:2022-02-10\nRecently revised in:2022-02-10")),(0,l.kt)("h2",{id:"\u5757\u7ea7\u683c\u5f0f\u4e0a\u4e0b\u6587"},"\u5757\u7ea7\u683c\u5f0f\u4e0a\u4e0b\u6587"),(0,l.kt)("p",null,"Block Formatting Context\uff0c\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587"),(0,l.kt)("p",null,"BFC \u662f CSS \u5e03\u5c40\u7684\u4e00\u4e2a\u6982\u5ff5\uff0c\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6e32\u67d3\u533a\u57df\uff0c\u89c4\u5b9a\u4e86\u5185\u90e8 box \u5982\u4f55\u5e03\u5c40\uff0c\u5e76\u4e14\u8fd9\u4e2a\u533a\u57df\u7684\u5b50\u5143\u7d20\u4e0d\u4f1a\u5f71\u54cd\u5230\u5916\u9762\u7684\u5143\u7d20\uff0c\u5176\u4e2d\u6bd4\u8f83\u91cd\u8981\u7684\u5e03\u5c40\u89c4\u5219\u6709\u5185\u90e8 box \u5782\u76f4\u653e\u7f6e\uff0c\u8ba1\u7b97 BFC \u7684\u9ad8\u5ea6\u7684\u65f6\u5019\uff0c\u6d6e\u52a8\u5143\u7d20\u4e5f\u53c2\u4e0e\u8ba1\u7b97\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5185\u90e8\u7684 Box \u4f1a\u5728\u5782\u76f4\u65b9\u5411\u4f9d\u6b21\u653e\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u5782\u76f4\u65b9\u5411\u7684\u8ddd\u79bb\u7531 margin \u51b3\u5b9a\uff0c\u5c5e\u4e8e\u540c\u4e00\u4e2a BFC \u7684\u4e24\u4e2a\u76f8\u90bb Box"),(0,l.kt)("li",{parentName:"ul"},"BFC \u662f\u4e00\u4e2a\u72ec\u7acb\u5bb9\u5668\uff0c\u5bb9\u5668\u91cc\u9762\u7684\u5b50\u5143\u7d20\u4e0d\u4f1a\u5f71\u54cd\u5230\u5916\u9762\u7684\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97 BFC \u7684\u9ad8\u5ea6\u65f6\uff0c\u6d6e\u52a8\u7684\u5143\u7d20\u4e5f\u4f1a\u53c2\u4e0e\u8ba1\u7b97\u9ad8\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u7d20\u7c7b\u578b\u548c display \u51b3\u5b9a\u4e86 Box \u7684\u7c7b\u578b\uff0c\u4e0d\u540c\u7684 Box \u4f1a\u53c2\u4e0e\u4e0d\u540c\u7684 Formatting Context")),(0,l.kt)("p",null,"\u5982\u4f55\u521b\u5efa BFC "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6839\u5143\u7d20\uff0cHTML \u5143\u7d20\u5c31\u662f"),(0,l.kt)("li",{parentName:"ul"},"float \u503c\u4e0d\u4e3a none"),(0,l.kt)("li",{parentName:"ul"},"position \u4e3a absolute \u6216\u8005 fixed"),(0,l.kt)("li",{parentName:"ul"},"display \u4e3a inline-block\u3001 table-cell\u3001table-caption"),(0,l.kt)("li",{parentName:"ul"},"overflow \u503c\u4e0d\u4e3a visible \uff08hidden\u3001auto\u3001scroll\uff09")),(0,l.kt)("p",null,"\u9002\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u89e3\u51b3 margin \u4f20\u9012\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u51b3 margin \u53e0\u52a0\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u67d0\u5143\u7d20\u88ab\u6d6e\u52a8\u5143\u7d20\u8986\u76d6\u95ee\u9898")),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u94fe\u63a5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}f.isMDXComponent=!0}}]);