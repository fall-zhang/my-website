"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9839],{9613:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},y=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,y=a(e,["components","mdxType","originalType","parentName"]),l=s(r),m=i,f=l["".concat(c,".").concat(m)]||l[m]||u[m]||p;return r?n.createElement(f,o(o({ref:t},y),{},{components:r})):n.createElement(f,o({ref:t},y))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,o=new Array(p);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>s});var n=r(8028),i=(r(9496),r(9613));const p={sidebar_position:12},o=void 0,a={unversionedId:"JavaScript & TypeScript/TypeScript/3.3-ThisType",id:"JavaScript & TypeScript/TypeScript/3.3-ThisType",title:"3.3-ThisType",description:"Create by fall on 2022-02-25",source:"@site/my-docs/JavaScript & TypeScript/TypeScript/3.3-ThisType.md",sourceDirName:"JavaScript & TypeScript/TypeScript",slug:"/JavaScript & TypeScript/TypeScript/3.3-ThisType",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/3.3-ThisType",draft:!1,editUrl:"https://github.com/my-docs/JavaScript & TypeScript/TypeScript/3.3-ThisType.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"3.2-\u6cdb\u578b",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/3.2-\u6cdb\u578b"},next:{title:"4-\u6700\u4f73\u5b9e\u8df5",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/4-\u6700\u4f73\u5b9e\u8df5"}},c={},s=[{value:"ThisType",id:"thistype",level:2}],y={toc:s},l="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Create by ",(0,i.kt)("strong",{parentName:"p"},"fall")," on 2022-02-25\nRecently revised in 2022-02-25")),(0,i.kt)("h2",{id:"thistype"},"ThisType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"type Point = {\n  x: number;\n  y: number;\n  moveBy(dx: number, dy: number): void;\n};\n\nlet p: Point = {\n  x: 10,\n  y: 20,\n  moveBy(dx, dy) {\n    this.x += dx; // this has type Point\n    this.y += dy; // this has type Point\n  }\n};\n\nlet foo = {\n  x: 'hello',\n  f(n: number) {\n    this; // { x: string, f(n: number): void }\n  }\n};\n\nlet bar = {\n  x: 'hello',\n  f(this: { message: string }) {\n    this; // { message: string }\n  }\n};\n")))}u.isMDXComponent=!0}}]);