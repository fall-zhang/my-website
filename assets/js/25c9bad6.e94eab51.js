"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9081],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>j});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(n),d=a,j=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(j,o(o({ref:t},u),{},{components:n})):r.createElement(j,o({ref:t},u))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(8028),a=(n(9496),n(9613));const l={},o=void 0,s={unversionedId:"npm \u5305/jest",id:"npm \u5305/jest",title:"jest",description:"Create by fall on:2022-05-07",source:"@site/my-docs/npm \u5305/jest.md",sourceDirName:"npm \u5305",slug:"/npm \u5305/jest",permalink:"/my-website/docs/npm \u5305/jest",draft:!1,editUrl:"https://github.com/my-docs/npm \u5305/jest.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"immer",permalink:"/my-website/docs/npm \u5305/immer"},next:{title:"jquery",permalink:"/my-website/docs/npm \u5305/jquery"}},p={},i=[{value:"jest",id:"jest",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],u={toc:i},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Create by ",(0,a.kt)("strong",{parentName:"p"},"fall")," on:2022-05-07\nRecently revised in:2022-05-30")),(0,a.kt)("h2",{id:"jest"},"jest"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u73af\u5883\u642d\u5efa"),(0,a.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jest": "^24.0.0",\n  "babel-jest": "^26.1.0",\n  "@babel/preset-env": "^7.10.4",\n  // \u5982\u679c\u6709 vue\n  "vue-jest": "^5.0.0-alpha.3",\n  "@vue/test-utils": "^2.0.0-beta.9"\n}\n')),(0,a.kt)("p",null,"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  presets: [\n    [\n      "@babel/preset-env", { \n        targets: { \n          node: "current" \n        } \n      }\n    ]\n  ],\n}\n')),(0,a.kt)("p",null,"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  testEnvironment: "jsdom",\n  transform: {\n    "^.+\\\\.vue$": "vue-jest",\n    "^.+\\\\js$": "babel-jest",\n  },\n  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],\n  testMatch: ["**/tests/**/*.spec.js", "**/__tests__/**/*.spec.js"],\n  moduleNameMapper: {\n    "^main(.*)$": "<rootDir>/src$1",\n  },\n};\n')),(0,a.kt)("p",null,"\u542f\u52a8\u6240\u7528\u7684\u811a\u672c ",(0,a.kt)("inlineCode",{parentName:"p"},'"test": "jest --runInBand"')),(0,a.kt)("p",null,"\u6d4b\u8bd5\u4ee3\u7801\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"test/example.test.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import HelloWorld from "main/components/HelloWorld.vue";\nimport { shallowMount } from "@vue/test-utils";\n\ndescribe("aaa", () => {\n  test("should ", () => {\n    const wrapper = shallowMount(HelloWorld, {\n      props: {\n        msg: "hello,vue3",\n      },\n    });\n    expect(wrapper.text()).toMatch("hello,vue3");\n  });\n});\n')),(0,a.kt)("p",null,"\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"lint")," \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," \u73af\u5883\uff0c\u907f\u514d\u62a5\u9519"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  env: {\n    jest: true\n  },\n}\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,a.kt)("th",{parentName:"tr",align:null},"\u94fe\u63a5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6768\u6751\u957f"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://juejin.cn/post/6910014283707318279"},"https://juejin.cn/post/6910014283707318279"))))))}m.isMDXComponent=!0}}]);