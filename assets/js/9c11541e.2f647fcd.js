"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4279],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),v=o,f=u["".concat(c,".").concat(v)]||u[v]||m[v]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},1913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(8028),o=(n(9496),n(9613));const a={},l=void 0,i={unversionedId:"\u540e\u7aef/3.4-event\u6a21\u5757",id:"\u540e\u7aef/3.4-event\u6a21\u5757",title:"3.4-event\u6a21\u5757",description:"Create by fall on 13 Oct 2023",source:"@site/my-docs/\u540e\u7aef/3.4-event\u6a21\u5757.md",sourceDirName:"\u540e\u7aef",slug:"/\u540e\u7aef/3.4-event\u6a21\u5757",permalink:"/my-website/docs/\u540e\u7aef/3.4-event\u6a21\u5757",draft:!1,editUrl:"https://github.com/my-docs/\u540e\u7aef/3.4-event\u6a21\u5757.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.3-\u7cfb\u7edf\u6a21\u5757os",permalink:"/my-website/docs/\u540e\u7aef/3.3-\u7cfb\u7edf\u6a21\u5757os"},next:{title:"4.1-express",permalink:"/my-website/docs/\u540e\u7aef/4.1-express"}},c={},s=[{value:"Event\u6a21\u5757",id:"event\u6a21\u5757",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Create by ",(0,o.kt)("strong",{parentName:"p"},"fall")," on 13 Oct 2023\nRecently revised in 13 Oct 2023")),(0,o.kt)("h2",{id:"event\u6a21\u5757"},"Event\u6a21\u5757"),(0,o.kt)("p",null,"\u6700\u7b80\u5355\u7684\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const events = require('events')\nvar eventEmitter = new events.EventEmitter();\n\neventEmitter.on('open', openDataBase);\neventEmitter.on('read',()=>{\n  console.log('\u8bfb\u53d6')\n})\nfunction openDataBase(){\n  console.log('\u6253\u5f00\u6570\u636e\u5e93')\n  eventEmitter.emit('read')\n}\neventEmitter.emit('open')\n")),(0,o.kt)("p",null,"event \u6a21\u5757\u914d\u5408 fs \u6a21\u5757\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// log.txt\n\u5389\u5bb3\u4e86\uff0c\u6211\u7684\u5929\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ev1ent.js\nconst events = require('events')\nconst fs = require('fs')\nvar eventEmitter = new events.EventEmitter();\nfs.readFile('./log.txt',(err,data)=>{\n  if(err){\n    console.log('\u8bfb\u53d6\u9519\u8bef')\n  }else{\n    eventEmitter.emit('my_event',data);\n  }\n})\n// \u5148\u628a\u89e6\u53d1\u7684\u4e8b\u4ef6\u5b9a\u4e49\u597d\uff0c\u5728\u89e6\u53d1\u4e4b\u540e\uff0c\u4f1a\u6267\u884c\u8be5\u4e8b\u4ef6\neventEmitter.on('my_event', (data) => {\n  console.log('output:');\n  console.log(data.toString())\n})\n")))}m.isMDXComponent=!0}}]);