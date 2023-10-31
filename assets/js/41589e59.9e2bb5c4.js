"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5463],{9613:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),m=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=m(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=m(t),d=o,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1634:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=t(8028),o=(t(9496),t(9613));const a={},i=void 0,c={unversionedId:"npm \u5305/codemirror",id:"npm \u5305/codemirror",title:"codemirror",description:"Create by fall on 09 Jun 2023",source:"@site/my-docs/npm \u5305/codemirror.md",sourceDirName:"npm \u5305",slug:"/npm \u5305/codemirror",permalink:"/my-website/docs/npm \u5305/codemirror",draft:!1,editUrl:"https://github.com/my-docs/npm \u5305/codemirror.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"chalk",permalink:"/my-website/docs/npm \u5305/chalk"},next:{title:"commander",permalink:"/my-website/docs/npm \u5305/commander"}},p={},m=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],l={toc:m},s="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Create by ",(0,o.kt)("strong",{parentName:"p"},"fall")," on 09 Jun 2023\nRecently revised in 09 Jun 2023")),(0,o.kt)("p",null,"\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://codemirror.net/docs/guide/"},"https://codemirror.net/docs/guide/")),(0,o.kt)("p",null,"github\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/codemirror/codemirror5"},"https://github.com/codemirror/codemirror5")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u8981\u4e3a\u4e0d\u540c\u7684\u9884\u8a00\u5b89\u88c5\u4e0d\u540c\u7684\u6269\u5c55\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { basicSetup } from "codemirror"\nimport { EditorState, Compartment } from "@codemirror/state"\nimport { EditorView, keymap } from "@codemirror/view"\nimport { javascript } from "@codemirror/lang-javascript"\nimport {python} from "@codemirror/lang-python"\n// Comparment \u7528\u4e8e\u52a8\u6001\u63a7\u5236\u914d\u7f6e\u76f8\u5173\u5185\u5bb9\nlet language = new Compartment()\nlet startState = EditorState.create({\n  doc: "const a = 66",\n  extensions: [basicSetup, language.of(javascript())]\n})\nconst codeView = new EditorView({\n  state: startState,\n  // extensions: [javascript()],\n  parent: docuement.body // \u6240\u9700\u8981\u6302\u5728\u7684 DOM\n})\n\n// \u4e4b\u540e\u5c31\u53ef\u4ee5\u52a8\u6001\u63a7\u5236\u914d\u7f6e\u5185\u5bb9\ncodeView.dispatch({\n  effects: language.reconfigure(python())\n})\n')))}u.isMDXComponent=!0}}]);