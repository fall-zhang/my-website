"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8543],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),k=a,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9665:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={},p=void 0,s={unversionedId:"JavaScript & TypeScript/6. Promise \u548c async",id:"JavaScript & TypeScript/6. Promise \u548c async",title:"6. Promise \u548c async",description:"Create by fall on 2020-09-23",source:"@site/docs\\JavaScript & TypeScript\\6. Promise \u548c async.md",sourceDirName:"JavaScript & TypeScript",slug:"/JavaScript & TypeScript/6. Promise \u548c async",permalink:"/my-website/docs/JavaScript & TypeScript/6. Promise \u548c async",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript & TypeScript/6. Promise \u548c async.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"5-\u524d\u540e\u7aef\u4ea4\u4e92\u53ca\u9519\u8bef\u5904\u7406",permalink:"/my-website/docs/JavaScript & TypeScript/5-\u524d\u540e\u7aef\u4ea4\u4e92\u53ca\u9519\u8bef\u5904\u7406"},next:{title:"7. \u6d4f\u89c8\u5668\u7684\u5b58\u50a8",permalink:"/my-website/docs/JavaScript & TypeScript/7. \u6d4f\u89c8\u5668\u7684\u5b58\u50a8"}},c={},m=[{value:"\u5f02\u6b65\u7ba1\u7406 Promise",id:"\u5f02\u6b65\u7ba1\u7406-promise",level:2},{value:"Promise\u7684\u4ecb\u7ecd",id:"promise\u7684\u4ecb\u7ecd",level:3},{value:"Promise \u7684\u4f7f\u7528",id:"promise-\u7684\u4f7f\u7528",level:3},{value:"Promise \u7684\u5d4c\u5957\u8c03\u7528",id:"promise-\u7684\u5d4c\u5957\u8c03\u7528",level:3},{value:"\u9759\u6001\u65b9\u6cd5",id:"\u9759\u6001\u65b9\u6cd5",level:3},{value:"\u73b0\u4ee3\u5f02\u6b65async &amp; await",id:"\u73b0\u4ee3\u5f02\u6b65async--await",level:2},{value:"async \u7684\u7279\u70b9",id:"async-\u7684\u7279\u70b9",level:3},{value:"async \u7684\u4f5c\u7528",id:"async-\u7684\u4f5c\u7528",level:3},{value:"async \u7684\u5b9e\u4f8b",id:"async-\u7684\u5b9e\u4f8b",level:3},{value:"\u5185\u5bb9\u53c2\u8003",id:"\u5185\u5bb9\u53c2\u8003",level:2}],u={toc:m};function k(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Create by ",(0,l.kt)("strong",{parentName:"p"},"fall")," on 2020-09-23\nRecently revised in 2022-02-18")),(0,l.kt)("h2",{id:"\u5f02\u6b65\u7ba1\u7406-promise"},"\u5f02\u6b65\u7ba1\u7406 Promise"),(0,l.kt)("h3",{id:"promise\u7684\u4ecb\u7ecd"},"Promise\u7684\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u5148\u627f\u8bfa\u597d\u89e3\u51b3\u65b9\u6848\uff0c\u5982\u679c\u6b63\u786e\uff0c\u91c7\u7528\u6b63\u786e\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5982\u679c\u9519\u8bef\uff0c\u91c7\u7528\u9519\u8bef\u7684\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd4\u56de\u503c\u4e3a promise \u5b9e\u4f8b\u5bf9\u8c61\uff0c\u4f1a\u8c03\u7528\u4e0b\u4e00\u4e2a then \u8fdb\u884c\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u4e00\u4e2a\u666e\u901a\u7684\u8fd4\u56de\u503c\uff0c\u4f1a\u901a\u8fc7then\u63a5\u6536\u666e\u901a\u6d4b\u4f20\u5165\u7684\u503c")),(0,l.kt)("p",null,"Promise \u662f\u7528\u6765\u7ba1\u7406\u5f02\u6b65\u7f16\u7a0b\u7684\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5b83\u672c\u8eab\u4e0d\u662f\u5f02\u6b65\u7684"),"\uff0cPromise\u7528\u4e8e\u9632\u6b62\u9677\u5165\u56de\u8c03\u5730\u72f1\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e86\u89e3Promise\u7684\u5de5\u4f5c\u65b9\u5f0f\u662f\u4e86\u89e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"async")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"await")," \u7684\u57fa\u7840\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u5f02\u6b65\u51fd\u6570\u5728\u5e95\u5c42\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"promise")),(0,l.kt)("p",{parentName:"blockquote"},"\u5f53 promise \u88ab\u8c03\u7528\u540e\uff0c\u5b83\u4f1a\u4ee5\u5904\u7406\u4e2d\u72b6\u6001\u5f00\u59cb\uff0c\u6b64\u65f6\u8c03\u7528\u7684\u51fd\u6570\u4f1a\u7ee7\u7eed\u6267\u884c\uff0c\u800c promise \u4ecd\u5728\u5904\u7406\u4e2d\u76f4\u5230\u89e3\u51b3\u4e3a\u6b62\uff0c\u4ece\u800c\u4e3a\u8c03\u7528\u7684\u51fd\u6570\u63d0\u4f9b\u6240\u8bf7\u6c42\u7684\u4efb\u4f55\u6570\u636e\u3002\u88ab\u521b\u5efa\u7684 promise \u6700\u7ec8\u4f1a\u4ee5",(0,l.kt)("strong",{parentName:"p"},"\u88ab\u89e3\u51b3\u72b6\u6001\u6216\u88ab\u62d2\u7edd\u72b6\u6001"),"\u7ed3\u675f\uff0c\u5e76\u5728\u5b8c\u6210\u65f6\u8c03\u7528\u76f8\u5e94\u7684\u56de\u8c03\u51fd\u6570\uff08\u4f20\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"catch"),"\uff09\u3002")),(0,l.kt)("p",null,"\u90a3\u4e9bJS API \u4f7f\u7528\u4e86 promise?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Battery API"),(0,l.kt)("li",{parentName:"ul"},"Fetch API"),(0,l.kt)("li",{parentName:"ul"},"Service Worker")),(0,l.kt)("h3",{id:"promise-\u7684\u4f7f\u7528"},"Promise \u7684\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var p = new Promise(function(resolve, reject) {\n  if (/* \u6761\u4ef6 */) { // \u7b26\u5408\u6761\u4ef6\uff0c\u6267\u884c\u6210\u529f\u7684\u51fd\u6570resolve\n    resolve(/* value */);  \n  } else {\n    // \u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u6267\u884creject\n    reject(/* reason */);  \n  }\n});\n// \u65b9\u6cd5\u4e00\uff1ap.then()\u5185\u4f20\u5165\u4e24\u4e2a\u65b9\u6cd5\uff0c\n// \u7b2c\u4e00\u4e2a\u65b9\u6cd5\u6267\u884c\u6210\u529f\u540e\u6267\u884c resolve \u4e2d\u7684\u51fd\u6570\n// \u7b2c\u4e8c\u4e2a\u65b9\u6cd5\u6267\u884c\u65b9\u6cd5\u7684\u4f20\u5165\u503c\u4e3a reject \u7684\u53c2\u6570 \np.then((result)=>{\n  /* \u6210\u529f\u540e\u7684\u6267\u884c\u5185\u5bb9 */\n},(reason)=>{\n  /* \u5931\u8d25\u540e\u7684\u6267\u884c\u5185\u5bb9 */\n})\n// \u65b9\u6cd5\u4e8c\uff1a\u6210\u529f\u7684\u5185\u5bb9\u901a\u8fc7.then()\u83b7\u53d6\u3002\u5931\u8d25\u7684\u5185\u5bb9\u4e5f\u53ef\u4ee5\u901a\u8fc7 .catch() \u8fdb\u884c\u6355\u83b7\np.catch((err)=>{throw new Error('\u9519\u8bef')})\n.catch(err)=>{console.log(err)}\n// \u5982\u679c\u6355\u83b7\u9519\u8bef\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u53ef\u4ee5\u6dfb\u52a0\u7b2c\u4e8c\u4e2acatch\u6765\u8865\u83b7\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728 promise \u4e2d\u7684\u9519\u8bef\u4f1a\u50cf\u5192\u6ce1\u4e00\u6837\uff0c\u5982\u679c\u51fa\u73b0\u4e00\u4e2a\u9519\u8bef\uff0c\u90a3\u4e48\u63a5\u4e0b\u6765\u7684\u4e5f\u90fd\u4f1a\u9519\u8bef\u3002\u4f46\u53ef\u4ee5\u5229\u7528\u8fd9\u4e00\u7279\u6027\u2014\u2014\u5728\u6700\u540e\u8c03\u7528\u7684\u63a5\u53e3\u4e0a\u5b9e\u73b0\u5bf9\u4e8e\u9519\u8bef\u7684\u5904\u7406\uff0c\u5b9e\u73b0\u7b80\u5316\u9519\u8bef\u64cd\u4f5c\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u5b9e\u73b0\u8be5\u7279\u6027\u9700\u8981\u4e24\u70b9\u6ce8\u610f\uff0c\u7b2c\u4e00\u70b9\u6bcf\u6b21\u8c03\u7528 then \u90fd\u8981\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise \uff1b\u4e0d\u7ba1\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u8fd4\u56de\u503c\u662f\u4ec0\u4e48")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u662f\u5426\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"reject")," \u90fd\u662f\u53d6\u51b3\u4e8e\u662f\u5426\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve()")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"reject()")," \u6216\u8005\u662f\u51fd\u6570\u672c\u8eab\u51fa\u73b0\u5f02\u5e38")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f53\u6267\u884c\u7684\u51fd\u6570\u51fa\u73b0\u9519\u8bef\u65f6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'new Promise(resolve=>{\n  resolve(a)\n  // \u7531\u4e8e a \u6ca1\u6709\u5b9a\u4e49\uff0c\u6240\u4ee5\u6267\u884c\u9519\u8bef\u8fd4\u56de\n}).then(result=>{\n  console.log("\u6210\u529f"+result)\n},reason=>{\n  console.log("\u5931\u8d25"+reason)\n}).then(result=>{\n  console.log("success"+result)\n},reason=>{\n  console.log(\'failure\')\n})\n// \u8be5\u51fd\u6570\u7b2c\u4e00\u6b21\u6267\u884c\u5931\u8d25\uff0c\u8c03\u7528\u5931\u8d25\u7684\u51fd\u6570\uff0c\u8f93\u51fa\u539f\u56e0\n// \u7b2c\u4e8c\u6b21\u7531\u4e8e\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u4ee5\u6210\u529f\u6267\u884c\u8ba1\u7b97\n// \u4e2a\u4eba\u7406\u89e3\uff0c\u7b2c\u4e00\u4e2a then \u5224\u65ad\u7684\u662f Promise \u5bf9\u8c61\u6267\u884c\u6210\u529f\u4e0e\u5426\uff0c\u7b2c\u4e8c\u4e2a then \u7528\u6765\u5224\u65ad\u7b2c\u4e00\u4e2a then \u6267\u884c\u7684\u6210\u529f\u4e0e\u5426\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Promise \u80fd\u89e3\u51b3\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898\uff0c\u4f46\u662f\u7531\u4e8e\u5145\u6ee1\u4e86 then \u65b9\u6cd5\uff0c\u4f7f\u5f97\u53ef\u8bfb\u6027\u4e0d\u5f3a\uff0c\u6240\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"async & await")," \u4f5c\u4e3a\u8bed\u6cd5\u7cd6\uff0c\u5f88\u591a\u4eba\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"async & await")," \u5c31\u662f\u56de\u8c03\u5730\u72f1\u7684\u6700\u7ec8\u89e3\u51b3\u65b9\u6848\u3002")),(0,l.kt)("h3",{id:"promise-\u7684\u5d4c\u5957\u8c03\u7528"},"Promise \u7684\u5d4c\u5957\u8c03\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const pr = new Promise((resolve) => {\n  setTimeout(() => {\n    console.log(999)\n  }, 1000)\n  resolve(\'666\')\n})\npr.then((result) => {\n  console.log("1111"+result)\n  return Promise.resolve("bbbb")\n  /* \n  Promise.resolve("bbbb")\u7b49\u4ef7\u4e8e \n    new Promise(resolve=>{\n        resolve("bbbb")\n    })\n*/\n})\n  .then((result) => {\n    console.log(\'\u5403\u4eba\u7684\u4e1c\u897f\'+result)\n  })\n  .catch((err) => {\n    console.log(\'\u51fa\u9519\u4e86\uff0c\u739b\u5fb7\' + err)\n  })\n')),(0,l.kt)("h3",{id:"\u9759\u6001\u65b9\u6cd5"},"\u9759\u6001\u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise.resolve()")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise.reject()")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Promise.resolve()")," \u8fd4\u56de\u4e00\u4e2a\u7ed9\u5b9a\u503c\u89e3\u6790\u540e\u7684 Promise \u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Promise.reject()")," \u8fd4\u56de\u4e00\u4e2a\u5e26\u62d2\u7edd\u539f\u56e0\u7684 Promise \u5bf9\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Promise.resolve('object')\n// \u7b49\u4ef7\u4e8e new Promise(resolve => resolve(\"object\")) \u65b0\u5efa\u4e86\u4e00\u4e2a\u6267\u884c\u6210\u529f\uff0c\u5e76\u4e14\u8fd4\u56de object \u7684 Promise \u5bf9\u8c61\nPromise.reject('do not handle this')\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"reject")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve")," \u4e4b\u540e Promise \u7684\u4f7f\u547d\u5c31\u5b8c\u6210\u4e86\uff0c\u56e0\u6b64\uff0c\u64cd\u4f5c\u4e0d\u5e94\u8be5\u653e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u5bf9\u8c61\u4e2d\uff0c\u800c\u5e94\u8be5\u653e\u7f6e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u4e2d\u6267\u884c\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise.all()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f53\u8fd4\u56de\u7684\u6570\u7ec4\u4e2d\u6240\u6709\u7684 Promise \u5bf9\u8c61\u7684\u8fd4\u56de\u503c\u90fd\u4e3a resolve \u65f6\uff0c\u624d\u4f1a\u6267\u884c\u76f8\u5e94\u7684 Promise\uff0c\u6709\u4e00\u4e2a\u51fa\u9519\uff0c\u5176\u4ed6\u7684 Promise \u4e5f\u65e0\u6cd5\u6267\u884c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let p1 = Promise.resolve(1)\nlet p2 = Promise.resolve(2)\nPromise.all([ p2, p1])\n  .then(result => {\n // \u8fd4\u56de\u7684\u7ed3\u679c\u662f\u6309\u7167 Array \u4e2d\u7f16\u5199\u5b9e\u4f8b\u7684\u987a\u5e8f\u6765\n    console.log(result) // [ 2, 1 ]\n  })\n  .catch(reason => {\n    console.log("\u5931\u8d25:reason")\n  })\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise.allSettled()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ES2020 \u5f15\u5165\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"allSettled")," \u65b9\u6cd5\u7528\u4e8e\u786e\u4fdd\u6240\u6709\u64cd\u4f5c\u90fd\u7ed3\u675f"),(0,l.kt)("p",{parentName:"blockquote"},"\u5047\u8bbe\u4e00\u4e2a\u9875\u9762\u6709\u4e09\u4e2a\u533a\u57df\uff0c\u5206\u522b\u5bf9\u5e94\u4e09\u4e2a\u72ec\u7acb\u7684\u63a5\u53e3\u6570\u636e\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise.all"),"  \u6765\u5e76\u53d1\u8bf7\u6c42\u4e09\u4e2a\u63a5\u53e3\uff0c\u5982\u679c\u5176\u4e2d\u4efb\u610f\u4e00\u4e2a\u63a5\u53e3\u51fa\u73b0\u5f02\u5e38\uff0c\u72b6\u6001\u662f reject \uff0c\u8fd9\u4f1a\u5bfc\u81f4\u9875\u9762\u4e2d\u8be5\u4e09\u4e2a\u533a\u57df\u6570\u636e\u5168\u90fd\u65e0\u6cd5\u51fa\u6765\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Promise.allSettled")," \u7684\u51fa\u73b0\u5c31\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let p1 = Promise.resolve(1)\nlet p2 = Promise.resolve(2)\nPromise.allS([ p2, p1])\n  .then(result => {\n // \u8fd4\u56de\u7684\u7ed3\u679c\u662f\u6309\u7167 Array \u4e2d\u7f16\u5199\u5b9e\u4f8b\u7684\u987a\u5e8f\u6765\n    console.log(result) // [ 2, 1 ]\n  })\n  .catch(reason => {\n    console.log("\u5931\u8d25:reason")\n  })\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise.race()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"Promise.race"),"\u53ea\u8981\u6709\u4e00\u4e2a promise \u5bf9\u8c61\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"FulFilled ")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"Rejected")," \u72b6\u6001\u7684\u8bdd\uff0c\u5c31\u4f1a\u7ee7\u7eed\u8fdb\u884c\u540e\u9762\u7684\u5904\u7406\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function timerPromisefy(delay) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve(delay);\n    }, delay);\n  });\n}\n// \u4efb\u4f55\u4e00\u4e2a promise \u7387\u5148\u53d8\u4e3a resolve \u6216 reject \u7684\u8bdd\u7a0b\u5e8f\u5c31\u505c\u6b62\u8fd0\u884c\nPromise.race([\n  timerPromisefy(1),\n  timerPromisefy(32),\n  timerPromisefy(64)\n]).then(function (value) {\n  console.log(value);    // => 1\n});\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise.finally()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u65e0\u8bba\u6267\u884c\u6210\u529f\u6216\u8005\u5931\u8d25\u4e0e\u5426\uff0c\u90fd\u4f1a\u5728\u6700\u540e\u6267\u884c\u8fd9\u4e2a finally \u4e2d\u7684\u51fd\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"this.loading = true\nrequest()\n  .then((res) => {\n    // do something\n  })\n  .catch((err) => {\n    // output err\n  })\n  .finally(() => {\n    this.loading = false // \u65e0\u8bba\u6210\u529f\u4e0e\u5426\uff0c\u90fd\u60f3\u628a loading \u8f6c\u6362\u4e3a false\n  })\n")),(0,l.kt)("h2",{id:"\u73b0\u4ee3\u5f02\u6b65async--await"},"\u73b0\u4ee3\u5f02\u6b65async & await"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e24\u4e2a\u5173\u4e8e JS \u8f6c\u8bd1\u6bd4\u8f83\u57fa\u7840\u7684\u6982\u5ff5\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u8f6c\u8bd1\u5668\uff08transpilers\uff09\uff1a\u5bf9\u8bed\u6cd5\u7684\u8f6c\u6362\uff0c\u5982\u63a7\u5236\u5408\u5e76\u7b26 ",(0,l.kt)("inlineCode",{parentName:"li"},"??"),"\uff0cbabel \u662f\u6700\u8457\u540d\u7684\u8f6c\u8bd1\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u57ab\u7247\uff08polyfills\uff09\uff1a\u66f4\u65b0 / \u6dfb\u52a0\u65b0\u51fd\u6570\u7684\u811a\u672c\u88ab\u79f0\u4e3a\u201cpolyfill\u201d\uff0ccore js \u652f\u6301\u4e86\u5f88\u591a\u7279\u6027\u3002"))),(0,l.kt)("h3",{id:"async-\u7684\u7279\u70b9"},"async \u7684\u7279\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u7b80\u6d01\uff0c\u66f4\u50cf\u662f\u540c\u6b65\u4ee3\u7801\uff0c\u4e5f\u66f4\u7b26\u5408\u666e\u901a\u7684\u9605\u8bfb\u4e60\u60ef"),(0,l.kt)("li",{parentName:"ul"},"\u6539\u8fdbJS\u4e2d\u5f02\u6b65\u64cd\u4f5c\u4e32\u884c\u6267\u884c\u7684\u4ee3\u7801\u7ec4\u7ec7\u65b9\u5f0f\uff0c\u51cf\u5c11 callback \u7684\u5d4c\u5957"),(0,l.kt)("li",{parentName:"ul"},"Promise \u4e2d\u4e0d\u80fd\u81ea\u5b9a\u4e49\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"try/catch")," \u8fdb\u884c\u9519\u8bef\u6355\u83b7\uff0c\u4f46\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"async/await")," \u4e2d\u53ef\u4ee5\u50cf\u5904\u7406\u540c\u6b65\u4ee3\u7801\u5904\u7406\u9519\u8bef\u3002")),(0,l.kt)("p",null,"await \u610f\u601d\u662f\uff0c\u7b49\u5f85 await \u91cc\u9762\u7684\u51fd\u6570\u5168\u90e8\u6267\u884c\u5b8c\u6210\uff0c\u518d\u63a5\u7740\u6267\u884c\u8be5 async \u51fd\u6570\u3002\u5e76\u4e14\u5728\u63a5\u7740\u6267\u884c\u8be5\u51fd\u6570\u4e4b\u524d\uff0c\u5148\u6267\u884c\u5176\u4ed6\u51fd\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"async/await")," \u7684\u5b9e\u73b0\u662f\u57fa\u4e8e Promise\u7684\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"async")," \u5173\u952e\u5b57\u610f\u5473\u7740\u8be5\u51fd\u6570\u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"promise"),"\uff0c\u662f generator \u7684\u8bed\u6cd5\u7cd6\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aawait \u5c06\u5f02\u6b65\u4ee3\u7801\u6539\u9020\u6210\u4e86\u540c\u6b65\u4ee3\u7801\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u591a\u4e2a\u5f02\u6b65\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u4f9d\u8d56\u6027\u5374\u4f7f\u7528\u4e86 await \u8fdb\u884c\u7b49\u5f85\uff0c\u4f1a\u5bfc\u81f4\u6027\u80fd\u4e0a\u7684\u964d\u4f4e\u3002")),(0,l.kt)("h3",{id:"async-\u7684\u4f5c\u7528"},"async \u7684\u4f5c\u7528"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"async")," \u662f ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction"},"AsyncFunction \u7279\u6027")," \u4e2d\u7684\u5173\u952e\u5b57\u3002"),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"async")," \u653e\u5728\u51fd\u6570\u58f0\u660e\u524d\u9762\u53ef\u4ee5\u58f0\u660e ",(0,l.kt)("inlineCode",{parentName:"p"},"async")," \u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// async \u600e\u4e48\u7528\uff1f\nasync function getSomething() {\n  return "something";\n}\n// \u6216\u8005\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u8fdb\u884c\u58f0\u660e\nlet getSomething = async()=>{\n  return "something"\n}\n// \u65e0\u8bba\u662f\u51fd\u6570\u5f0f\u58f0\u660e\u8fd8\u662f\u7bad\u5934\u51fd\u6570\uff0c\u90fd\u4f1a\u8fd4\u56dePromise\u5bf9\u8c61\ngetSomething() // Promise { <state>: "fulfilled", <value>: "something" }\n')),(0,l.kt)("h3",{id:"async-\u7684\u5b9e\u4f8b"},"async \u7684\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const fun1 = async ()=>{\n  return '\u6d4b\u8bd5'\n}\nfun1().then(alert)\n// fun1 \u7b49\u4ef7\u4e8e fun2\nconst fun2 = ()=>{\n  return Promise.resolve('\u6d4b\u8bd5')\n}\n")),(0,l.kt)("p",null,"\u53ea\u6709 await \u53f3\u8fb9\u8fd4\u56de\u4e3a resolve \u624d\u4f1a\u7ee7\u7eed\u6267\u884c\uff0c\u5426\u5219\u76f4\u63a5\u4e2d\u65ad"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let p1 = Promise.reject(100)\nasync function fn1() {\n  let result = await p1\n  console.log(1) // \u8fd9\u884c\u4ee3\u7801\u4e0d\u4f1a\u6267\u884c\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"async \u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let p1 = Promise.resolve(1)\nlet p2 = new Promise(resolve=>{\n  setTimeout(()=>{\n    resolve(2)\n  },2000)\n})\nasync function fun(){\n  console.log(1)\n  let resu2 = await p1 // \u7b49\u5f85\u8fd4\u56de resolve ,\u8fd4\u56de resolve \u540e\u7ee7\u7eed\u6267\u884c\n  console.log(3)\n  let resu1 = await p2\n  console.log(4)\n}\nfun()\nconsole.log(2)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4efb\u52a1\u961f\u5217\uff08\u5b8f\u4efb\u52a1\uff09"),(0,l.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8e\u5fae\u4efb\u52a1\u7684\u6280\u672f\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"MutationObserver"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u4ee5\u53ca\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," \u4e3a\u57fa\u7840\u5f00\u53d1\u51fa\u6765\u7684\u5f88\u591a\u5176\u4ed6\u7684\u6280\u672f\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u4e0d\u7ba1\u5b8f\u4efb\u52a1\u662f\u5426\u5230\u8fbe\u65f6\u95f4\uff0c\u4ee5\u53ca\u653e\u7f6e\u7684\u5148\u540e\u987a\u5e8f\uff0c\u6bcf\u6b21",(0,l.kt)("strong",{parentName:"p"},"\u4e3b\u7ebf\u7a0b\u6267\u884c\u6808\u4e3a\u7a7a\u7684\u65f6\u5019"),"\uff0c\u5f15\u64ce\u4f1a\u4f18\u5148\u5904\u7406\u5fae\u4efb\u52a1\u961f\u5217\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5904\u7406\u5b8c\u5fae\u4efb\u52a1\u961f\u5217\u91cc\u7684\u6240\u6709\u4efb\u52a1"),"\uff0c\u518d\u53bb\u5904\u7406\u5b8f\u4efb\u52a1\u3002")),(0,l.kt)("p",null,"\u6839\u636e HTML5 \u7684\u6807\u51c6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"setTimeout()"),"\u6700\u5c11\u4e3a 4 ms"),(0,l.kt)("h2",{id:"\u5185\u5bb9\u53c2\u8003"},"\u5185\u5bb9\u53c2\u8003"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u8005"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6587\u7ae0\u94fe\u63a5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8fb9\u57ce"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://segmentfault.com/a/1190000007535316"},"https://segmentfault.com/a/1190000007535316"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);