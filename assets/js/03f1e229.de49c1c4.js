"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4526],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),y=s(r),f=i,m=y["".concat(c,".").concat(f)]||y[f]||l[f]||o;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},52:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),p=["components"],a={sidebar_position:12},c=void 0,s={unversionedId:"JavaScript & TypeScript/TypeScript/5.4 ThisType",id:"JavaScript & TypeScript/TypeScript/5.4 ThisType",title:"5.4 ThisType",description:"Create by fall on 2022-02-25",source:"@site/docs/JavaScript & TypeScript/TypeScript/5.4 ThisType.md",sourceDirName:"JavaScript & TypeScript/TypeScript",slug:"/JavaScript & TypeScript/TypeScript/5.4 ThisType",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/5.4 ThisType",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript & TypeScript/TypeScript/5.4 ThisType.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"5.2 \u6cdb\u578b",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/5.2 \u6cdb\u578b"},next:{title:"6 \u5f02\u5e38\u5904\u7406",permalink:"/my-website/docs/JavaScript & TypeScript/TypeScript/6 \u5f02\u5e38\u5904\u7406"}},u={},l=[{value:"ThisType",id:"thistype",level:2}],y={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Create by ",(0,o.kt)("strong",{parentName:"p"},"fall")," on 2022-02-25\nRecently revised in 2022-02-25")),(0,o.kt)("h2",{id:"thistype"},"ThisType"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type Point = {\n  x: number;\n  y: number;\n  moveBy(dx: number, dy: number): void;\n};\n\nlet p: Point = {\n  x: 10,\n  y: 20,\n  moveBy(dx, dy) {\n    this.x += dx; // this has type Point\n    this.y += dy; // this has type Point\n  }\n};\n\nlet foo = {\n  x: 'hello',\n  f(n: number) {\n    this; // { x: string, f(n: number): void }\n  }\n};\n\nlet bar = {\n  x: 'hello',\n  f(this: { message: string }) {\n    this; // { message: string }\n  }\n};\n")))}f.isMDXComponent=!0}}]);