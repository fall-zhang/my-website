"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4790],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},i=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),i=s(n),d=l,b=i["".concat(u,".").concat(d)]||i[d]||m[d]||a;return n?o.createElement(b,r(r({ref:t},p),{},{components:n})):o.createElement(b,r({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=i;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}i.displayName="MDXCreateElement"},9086:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var o=n(7462),l=n(3366),a=(n(7294),n(3905)),r=["components"],c={},u=void 0,s={unversionedId:"JavaScript & TypeScript/12-canvas",id:"JavaScript & TypeScript/12-canvas",title:"12-canvas",description:"Create by fall on 2021-10-17",source:"@site/docs/JavaScript & TypeScript/12-canvas.md",sourceDirName:"JavaScript & TypeScript",slug:"/JavaScript & TypeScript/12-canvas",permalink:"/my-website/docs/JavaScript & TypeScript/12-canvas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript & TypeScript/12-canvas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"11-\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",permalink:"/my-website/docs/JavaScript & TypeScript/11-\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b"},next:{title:"14-WebComponent",permalink:"/my-website/docs/JavaScript & TypeScript/14-WebComponent"}},p={},m=[{value:"Web Component",id:"web-component",level:2},{value:"\u81ea\u5b9a\u4e49\u5143\u7d20",id:"\u81ea\u5b9a\u4e49\u5143\u7d20",level:3},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:3},{value:"\u6837\u5f0f",id:"\u6837\u5f0f",level:3},{value:"\u63a5\u6536\u53c2\u6570",id:"\u63a5\u6536\u53c2\u6570",level:3},{value:"\u53d1\u9001\u53c2\u6570",id:"\u53d1\u9001\u53c2\u6570",level:3},{value:"Slot",id:"slot",level:3},{value:"customElements\u5bf9\u8c61",id:"customelements\u5bf9\u8c61",level:3},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u8fdb\u9636\u4f7f\u7528",id:"\u8fdb\u9636\u4f7f\u7528",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],i={toc:m};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Create by ",(0,a.kt)("strong",{parentName:"p"},"fall")," on 2021-10-17\nRecently revised in 2021-11-29")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u8fd9\u6b21\u53ea\u8fdb\u884c\u4e86\u6c47\u603b\uff0c\u9700\u8981\u5728\u62bd\u51fa\u65f6\u95f4\u8fdb\u884c\u4e66\u5199\u3002")),(0,a.kt)("h2",{id:"web-component"},"Web Component"),(0,a.kt)("p",null,"\u76ee\u7684\u662f\uff0cJS \u539f\u751f\u5c31\u53ef\u4ee5\u521b\u5efa\u53ef\u590d\u7528\u7684\u7ec4\u4ef6\u3002Custom Element\u548cShadow DOM\u90fd\u53ef\u4ee5\u8ba9\u4f60\u53bb\u521b\u9020\u53ef\u590d\u7528\u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u5b9e\u73b0\uff1f\u521b\u9020\u4e00\u4e2a\u4f60\u5b9a\u5236\u7684HTML\u6807\u7b7e\uff0c\u5b83\u5c06\u4f1a\u7ee7\u627fHTM\u5143\u7d20\u7684\u6240\u6709\u5c5e\u6027\uff0c\u5e76\u4e14\u4f60\u53ef\u5728\u4efb\u4f55\u652f\u6301\u7684\u6d4f\u89c8\u5668\u4e2d\u901a\u8fc7\u7b80\u5355\u7684\u5f15\u5165\u4e00\u4e2ascript\u3002"),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u5143\u7d20"},"\u81ea\u5b9a\u4e49\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// CustomElementRegistry \u4f5c\u4e3a\u6784\u9020\u65b9\u6cd5\n// customElements \u4f5c\u4e3a\u5b9e\u4f8b\u5bf9\u8c61\nwindow.customElements.define('self-design',myElement)\n// \u7b2c\u4e00\u4e2a\u53c2\u6570\u5b9a\u4e49\u4e86\u5143\u7d20\u7684\u540d\u79f0\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 DOM \u4e2d\u4f7f\u7528\n// <self-design></self-design>\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u548c native \u7684\u6807\u7b7e\u51b2\u7a81\uff0c\u5fc5\u987b\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," \u8fdb\u884c\u94fe\u63a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class myElement extends HTMLElement{\n  constructor(){\n    // \u5fc5\u987b\u9996\u5148\u8c03\u7528 super \u65b9\u6cd5\n    super();\n  }\n}\ncustomElements.define('my-component', myElement)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f53\u5143\u7d20\u88ab\u521b\u5efa\u65f6\uff0c\u4f1a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"constrcutor")," \u51fd\u6570\uff0c\u5f53\u5143\u7d20\u88ab\u63d2\u5165 DOM \u65f6\uff0c\u4f1a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"connectCallbacck"))),(0,a.kt)("h3",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f\u56de\u8c03")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class myElement extends HTMLElement{\n  adoptedCallback(){\n    // \u5f53\u5143\u7d20\u901a\u8fc7\u8c03\u7528document.adoptNode(element)\u88ab\u91c7\u7528\u5230\u6587\u6863\u65f6\u5c06\u4f1a\u88ab\u8c03\u7528\n  }\n  static observedAttributes(){ // \u88ab\u76d1\u89c6\u7684\u5c5e\u6027\n    return ['foo', 'bar']\n  }\n  attributeChangedCallback(attr, oldVal, newVal){\n    // \u6bcf\u5f53\u5c06\u5c5e\u6027\u6dfb\u52a0\u5230 observedAttributes \u7684\u6570\u7ec4\u4e2d\u65f6\n    switch(attr){\n      case 'foo': \n        break;\n      case 'bar':\n    }\n  }\n  connectCallback(){\n    // \u5f53\u8fd9\u4e2a\u5143\u7d20\u88ab\u63d2\u5165DOM\u6811\u7684\u65f6\u5019\u5c06\u4f1a\u89e6\u53d1\u5f53\u524d\u65b9\u6cd5\n    // \u5bf9\u5143\u7d20\u8fdb\u884c\u8bbe\u7f6e\n    // \u6b64\u65f6\u53ef\u4ee5\u786e\u5b9a\u6240\u6709\u7684\u5c5e\u6027\u548c\u5b50\u5143\u7d20\u90fd\u5df2\u7ecf\u53ef\u7528\u7684\u529e\u6cd5\n  }\n  disconnectCallback(){\n    // \u5f53\u5143\u7d20\u4eceDOM\u4e2d\u88ab\u79fb\u9664\u7684\u65f6\u5019\uff0c\u4f1a\u88ab\u8c03\u7528\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7406\u8bba\u4e0a\u901a\u8fc7\u5e8f\u5217\u5316\u53ef\u4ee5\u5c06\u590d\u6742\u503c\u4f20\u9012\u7ed9\u5c5e\u6027\uff0c\u4f46\u662f\u8fd9\u6837\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u5e76\u4e14\u4f60\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u7ec4\u4ef6\u7684\u65b9\u6cd5\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u8fd9\u6837\u505a\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f\u6267\u884c\u987a\u5e8f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"constructor -> attributeChangedCallback -> connectedCallback\n")),(0,a.kt)("p",null,"attributeChangedCallback\u8981\u5728connectedCallback\u4e4b\u524d\u6267\u884c"),(0,a.kt)("p",null,"\u56e0\u4e3a web \u7ec4\u4ef6\u4e0a\u7684\u5c5e\u6027\uff0c\u88ab\u63d2\u5165DOM\u524d\u5c31\u5e94\u8be5\u521d\u59cb\u5316\u914d\u7f6e\u4e86\u3002\u56e0\u6b64attributeChangedCallback\u8981\u5728connectedCallback\u4e4b\u524d\u6267\u884c\u3002 \u8fd9\u610f\u5473\u7740\u4f60\u9700\u8981\u6839\u636e\u67d0\u4e9b\u5c5e\u6027\u7684\u503c\uff0c\u5728Shadow  DOM\u4e2d\u914d\u7f6e\u8282\u70b9\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u5728\u6784\u9020\u51fd\u6570\u4e2d\u5f15\u7528\u8fd9\u4e9b\u8282\u70b9\uff0c\u800c\u4e0d\u662f\u5728connectedCallback\u4e2d\u5f15\u7528\u5b83\u4eec\u3002"),(0,a.kt)("h3",{id:"\u6837\u5f0f"},"\u6837\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template id="mybutton">\n    <style>\n        button {\n            color:blue;\n            border: 0;\n            border-radius: 5px;\n            background-color: brown;\n        }\n    </style>\n    <button id="btn">My Button</button>\n</template>\n')),(0,a.kt)("h3",{id:"\u63a5\u6536\u53c2\u6570"},"\u63a5\u6536\u53c2\u6570"),(0,a.kt)("p",null,"\u521b\u5efa\u6a21\u677f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template id="span-group" >\n  <span>\u6ca1\u4ec0\u4e48\u7684\uff0c\u5bf9\u5427\uff1f</span>\n</template>\n')),(0,a.kt)("p",null,"\u751f\u6210\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class myElement extends HTMLElement {\n  constructor() {\n    super()\n    const dom = document.querySelector('#span-group')\n    const content = dom.content.cloneNode(true)\n    const text = this.getAttribute('text')\n    content.querySelector('span').innerText = text\n    this.appendChild(content)\n  }\n}\ncustomElements.define('my-component', myElement)\n")),(0,a.kt)("p",null,"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<my-component></my-component>\n<my-component text="\u6709\u95ee\u9898\u554a"></my-component>\n<my-component text="\u6ca1\u6709\u95ee\u9898\u554a"></my-component>\n<my-component></my-component>\n')),(0,a.kt)("h3",{id:"\u53d1\u9001\u53c2\u6570"},"\u53d1\u9001\u53c2\u6570"),(0,a.kt)("p",null,"\u6709\u4e24\u79cd\u53d1\u9001\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0a\u6dfb\u52a0\u81ea\u5b9a\u4e49\u65b9\u6cd5\u76d1\u542cDOM \u5143\u7d20\u4e8b\u4ef6\uff0c\u5728\u9700\u8981\u7684\u5730\u65b9\u8c03\u7528\u7ec4\u4ef6\u7684\u81ea\u5b9a\u4e49\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5143\u7d20\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6")),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class MyButton extends HTMLElement{\n    constructor(){\n    super() // \u540c react \u90fd\u9700\u8981\u5728\u6700\u5f00\u59cb\u8c03\u7528 super\n    const template = document.getElementById('my_button')\n    const content = template.content.cloneNode(true)\n    const button = content.querySelector(\"#btn\")\n    button.innerText = this.getAttributes('text')\n    button.addEventListener('click',ev=>{\n      this.onClick('f,m,l') // \u628a\u70b9\u51fb\u4e8b\u4ef6\u6302\u8f7d\u5230\u8be5\u7ec4\u4ef6\u4e0a\n    })\n  }\n}\n// \u5728\u9700\u8981\u7684\u65f6\u5019\uff0c\u8c03\u7528\u7ec4\u4ef6\u7684\u81ea\u5b9a\u4e49\u65b9\u6cd5\ndocument.querySelector('my-button').onClick = value => {\n    console.log(value)\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u5143\u7d20\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class MyButton extends HTMLElement{\n  constructor(){\n    super() // \u540c react \u90fd\u9700\u8981\u5728\u6700\u5f00\u59cb\u8c03\u7528 super\n    const template = document.getElementById('my_button')\n    const content = template.content.cloneNode(true)\n    const button = content.querySelector(\"#btn\")\n    button.innerText = this.getAttributes('text')\n    button.addEventListener('click',ev=>{\n      this.dispatchEvent(\n        new CustomEvent( 'onClick',{\n          detail:'hello hu ya'\n        })\n      )\n    })\n  }\n}\n// \u5728\u9700\u8981\u7684\u65f6\u5019\uff0c\u8c03\u7528\u7ec4\u4ef6\u7684\u81ea\u5b9a\u4e49\u65b9\u6cd5\ndocument.querySelector('my-button').addEventListener('onClick',(res)=>{\n  console.log(res)\n})\n")),(0,a.kt)("h3",{id:"slot"},"Slot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template id="mybutton">\n    <style>\n        button {\n            color:blue;\n            border: 0;\n            border-radius: 5px;\n            background-color: brown;\n        }\n    </style>\n    <button id="btn">My Button</button>\n    <p><slot name="my-text">My Default Text</slot></p>\n</template>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<my-button>\n  <p>Another Text from outside</p>\n</my-button>\n")),(0,a.kt)("h3",{id:"customelements\u5bf9\u8c61"},"customElements\u5bf9\u8c61"),(0,a.kt)("p",null,"customElements.prototype.define()"),(0,a.kt)("p",null,"customElements.prototype.get()"),(0,a.kt)("p",null,"customElements.prototype.upgrade()"),(0,a.kt)("p",null,"customElements.prototype.whenDefined()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"customElements.whenDefined('my-element')\n  .then(() => {\n})\n")),(0,a.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,a.kt)("p",null,"\u9996\u5148\u662f HTML \u90e8\u5206"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template id="span-group">\n  <span>\u6ca1\u4ec0\u4e48\u7684\uff0c\u5bf9\u5427\uff1f</span>\n</template>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// js\nwindow.onload = function () {\n  class yComponent extends HTMLElement {\n    constructor() {\n      // \u5fc5\u987b\u9996\u5148\u8c03\u7528 super \u65b9\u6cd5\n      super();\n      // \u5143\u7d20\u7684\u529f\u80fd\u4ee3\u7801\u5199\u5728\u8fd9\u91cc\n      const template = document.querySelector('#span-group')\n      const content = template.content.cloneNode(true)\n      this.appendChild(content)\n    }\n  }\n  customElements.define('my-component', myComponent);\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<my-component></my-component>\n<my-component></my-component>\n<my-component></my-component>\n<my-component></my-component>\n")),(0,a.kt)("h2",{id:"\u8fdb\u9636\u4f7f\u7528"},"\u8fdb\u9636\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MyButton.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const template = document.createElement('template');\ntemplate.innerHTML = `\n  <style>\n  button {\n    width: 60px;\n    height: 30px;\n    cursor: pointer;\n    color: blue;\n    border: 0;\n    border-radius: 5px;\n    background-color: #F0F0F0;\n  }\n  </style>\n  <div>\n  <button id=\"btn\">Add</button>\n    <p id=\"message\"><slot name=\"my-text\">My Default Text</slot></p>\n    <ul id=\"text-list\"></ul>\n  </div>\n`;\nconst Texts = [\n  'My lady, Hello!',\n  'BuiBuiBui',\n  'BiliBili',\n  'Haiwei is NO.1'\n]\nclass MyButton extends HTMLElement {\n  constructor () {\n    super()\n    const content = template.content.cloneNode(true);\n    const button = content.querySelector('#btn');\n    const textList = content.querySelector('#text-list');\n    this.$button = button;\n    this.$message = content.querySelector('#message');\n    button.addEventListener('click', (evt) => {\n      const li = document.createElement('li');\n      li.innerText = Texts[Math.floor(Math.random() * 4)];\n      textList.appendChild(li);\n      this.dispatchEvent(\n        new CustomEvent('onClick', {\n          detail: 'Hello fom within the Custom Element'\n        })\n      )\n    })\n    this.attachShadow({ mode: 'open' }).appendChild(content);\n  }\n  get text () {\n    return this.getAttribute('text');\n  }\n  set text (value) {\n    this.setAttribute('text', value);\n  }\n  static get observedAttributes() {\n    return ['text'];\n  }\n  attributeChangedCallback(name, oldVal, newVal) {\n    this.render();\n  }\n  render() {\n    this.$message.innerText = this.text;\n  }\n}\n\nwindow.customElements.define('my-button', MyButton)\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n    <script src="./MyButton.js"><\/script>\n  </head>\n  <body>\n    <my-button> \n      <p slot="my-text">Another text from outside</p>\n    </my-button>\n  </body>\n  <script>\n    const mybutton = document.querySelector(\'my-button\');\n    mybutton.addEventListener(\'onClick\', (value) => {\n      console.log(value)\n      mybutton.text = value.detail\n    });\n  <\/script>\n</html>\n')),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,a.kt)("th",{parentName:"tr",align:null},"\u94fe\u63a5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CodeX"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://juejin.cn/post/6956206468316004382"},"https://juejin.cn/post/6956206468316004382"))))))}d.isMDXComponent=!0}}]);