"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2370],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=l,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(b,o(o({ref:n},s),{},{components:t})):a.createElement(b,o({ref:n},s))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(8028),l=(t(9496),t(9613));const r={},o=void 0,i={unversionedId:"\u6570\u636e\u5e93/3.2-mongo \u547d\u4ee4",id:"\u6570\u636e\u5e93/3.2-mongo \u547d\u4ee4",title:"3.2-mongo \u547d\u4ee4",description:"Create by fall on 17 Sep 2021",source:"@site/my-docs/\u6570\u636e\u5e93/3.2-mongo \u547d\u4ee4.md",sourceDirName:"\u6570\u636e\u5e93",slug:"/\u6570\u636e\u5e93/3.2-mongo \u547d\u4ee4",permalink:"/my-website/docs/\u6570\u636e\u5e93/3.2-mongo \u547d\u4ee4",draft:!1,editUrl:"https://github.com/my-docs/\u6570\u636e\u5e93/3.2-mongo \u547d\u4ee4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.1-MongoDB\u6570\u636e\u5e93",permalink:"/my-website/docs/\u6570\u636e\u5e93/3.1-MongoDB\u6570\u636e\u5e93"},next:{title:"3.3-node \u64cd\u4f5c mongo",permalink:"/my-website/docs/\u6570\u636e\u5e93/3.3-node \u64cd\u4f5c mongo"}},c={},d=[{value:"\u6570\u636e\u5e93\u63a7\u5236",id:"\u6570\u636e\u5e93\u63a7\u5236",level:3},{value:"\u547d\u4ee4\u884c\u64cd\u4f5c",id:"\u547d\u4ee4\u884c\u64cd\u4f5c",level:2},{value:"\u6570\u636e\u5e93\u64cd\u4f5c",id:"\u6570\u636e\u5e93\u64cd\u4f5c",level:3},{value:"\u96c6\u5408\u64cd\u4f5c",id:"\u96c6\u5408\u64cd\u4f5c",level:3},{value:"\u63d2\u5165\u6587\u6863",id:"\u63d2\u5165\u6587\u6863",level:3},{value:"\u66f4\u65b0\u6570\u636e",id:"\u66f4\u65b0\u6570\u636e",level:3},{value:"\u5220\u9664\u6587\u6863",id:"\u5220\u9664\u6587\u6863",level:3},{value:"\u67e5\u8be2\u6587\u6863",id:"\u67e5\u8be2\u6587\u6863",level:3},{value:"\u6307\u5b9a\u67e5\u627e\u64cd\u4f5c",id:"\u6307\u5b9a\u67e5\u627e\u64cd\u4f5c",level:3},{value:"\u6392\u5e8f\u64cd\u4f5c",id:"\u6392\u5e8f\u64cd\u4f5c",level:3},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:3},{value:"\u805a\u5408",id:"\u805a\u5408",level:3}],s={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Create by ",(0,l.kt)("strong",{parentName:"p"},"fall")," on 17 Sep 2021\nRecently revised in 12 Oct 2023")),(0,l.kt)("p",null,"\u547d\u4ee4\u884c\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"mongosh")," \u547d\u4ee4\u8fdb\u5165 mongo \u6570\u636e\u5e93\u4e13\u7528\u547d\u4ee4\u884c"),(0,l.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"mongod")," \u547d\u4ee4 mongo + god\uff0c\u54c8\u54c8\u54c8\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mongod --version")," \u7528\u6765\u83b7\u53d6\u7248\u672c"),(0,l.kt)("h3",{id:"\u6570\u636e\u5e93\u63a7\u5236"},"\u6570\u636e\u5e93\u63a7\u5236"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"show dbs")," \u663e\u793a\u6240\u6709\u7684\u6570\u636e\u5217\u8868"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"use databaseName")," \u8fde\u63a5\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"databaseName")," \u8fd9\u4e2a\u6570\u636e\u5e93"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u884c\u64cd\u4f5c"},"\u547d\u4ee4\u884c\u64cd\u4f5c"),(0,l.kt)("h3",{id:"\u6570\u636e\u5e93\u64cd\u4f5c"},"\u6570\u636e\u5e93\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\ndb \n\n\n# \u67e5\u770b\u4e00\u4e0b\u5f53\u524d\u62e5\u6709\u7684\u6570\u636e\u5e93\nshow dbs\n# \u521b\u5efa\u6570\u636e\u5e93\nuse [databaseName] # \u4f7f\u7528 / \u521b\u5efa\u6570\u636e\u5e93\nshow dbs # \u67e5\u770b\u5f53\u524d\u6240\u6709\u7684\u6570\u636e\u5e93\n# \u5220\u9664\u6570\u636e\u5e93\ndb.dropDatabase() # \u5220\u9664\u5f53\u524d\u4f7f\u7528\u7684\u6570\u636e\u5e93\nshow dbs\n")),(0,l.kt)("h3",{id:"\u96c6\u5408\u64cd\u4f5c"},"\u96c6\u5408\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6dfb\u52a0\u96c6\u5408\nuse test\ndb.createCollection("article") # \u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a article \u7684\u96c6\u5408\nshow collections # \u5c55\u793a\u5f53\u524d\u6570\u636e\u5e93\u5185\u7684\u96c6\u5408\n# \u5220\u9664\u96c6\u5408\ndb.article.drop() # \u5220\u9664\u5f53\u524d\u96c6\u5408\nshow collections\n')),(0,l.kt)("h3",{id:"\u63d2\u5165\u6587\u6863"},"\u63d2\u5165\u6587\u6863"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#  db.collection.insert(document) #\u901a\u8fc7 collection \u5bf9\u8c61\u7684 insert \u65b9\u6cd5\u5411\u96c6\u5408\u4e2d\u63d2\u5165\u6587\u6863\n# \u63d2\u5165\u6587\u6863\ndb.createCollection('article')\ndb.article.insert({\n    name:'Fall',\n    description:'\u672a\u6765\u7684\u524d\u7aef\u827a\u672f\u5bb6',\n    createBy:'Fall',\n    selfWebUrl:'www.fall.com'\n})\ndb.article.find({}) # \u67e5\u8be2\u6240\u6709 article \u7684\u6587\u6863\n")),(0,l.kt)("h3",{id:"\u66f4\u65b0\u6570\u636e"},"\u66f4\u65b0\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"db.article.update({name:'fall'},{name:'fall_again'},{multi:false}) \n# \u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u8868\u793a\u8981\u66ff\u6362\u7684\u5185\u5bb9\n# \u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u8868\u793a\u66ff\u6362\u540e\u7684\u5185\u5bb9\n# \u7b2c\u4e09\u4e2a\u9009\u9879\u4e3a\u914d\u7f6e\uff0cmulti \u8868\u793a\u662f\u5426\u4e3a\u591a\u9009\uff0c\u9ed8\u8ba4\u4e3a false\n\n# \u53ea\u8fdb\u884c\u66ff\u6362 name \u5c5e\u6027\ndb.article.update({name:'fall'},{$set:{name:'fall_again'}},{multi:false})\n")),(0,l.kt)("p",null,"\u66ff\u6362\u6587\u6863"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"db.article.save({})\n")),(0,l.kt)("h3",{id:"\u5220\u9664\u6587\u6863"},"\u5220\u9664\u6587\u6863"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u6587\u6863\u5185\u5bb9\n# db.collection.remove(<query>,{justOne:<boolean>})\ndb.article.remove({'name':'fall'})\n#\u5220\u9664 name \u4e3a fall \u7684\u6240\u6709\u6587\u6863\n")),(0,l.kt)("h3",{id:"\u67e5\u8be2\u6587\u6863"},"\u67e5\u8be2\u6587\u6863"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u901a\u8fc7 find \u5bf9\u8c61\u6765\u67e5\u627e\u6587\u6863\n# db.collection.find(query,projection)\n# query:\u67e5\u8be2\u6761\u4ef6\n# projection\uff1a\u4f7f\u7528\u6295\u5f71\u64cd\u4f5c\u7b26\u6307\u5b9a\u8fd4\u56de\u7684\u952e\ndb.article.find() # \u67e5\u8be2 article \u4e2d\u7684\u5168\u90e8\u6587\u6863\n")),(0,l.kt)("h3",{id:"\u6307\u5b9a\u67e5\u627e\u64cd\u4f5c"},"\u6307\u5b9a\u67e5\u627e\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8bfb\u53d6\u6307\u5b9a\u6587\u6863\n# db.collection.find().limit(Number)\ndb.article.find().limit(2) # \u53ea\u67e5\u770b\u7b26\u5408\u6761\u4ef6\u7684\u76842\u6761\u6570\u636e\n# \u8df3\u8fc7\u6307\u5b9a\u6570\u91cf\u7684\u6587\u6863\n# db.collection.find().limit(NUMBER).skip(NUMBER)\ndb.article.find().limit(2).skip(2) # \u8df3\u8fc7\u4e24\u6761\u6570\u636e\uff0c\u67e5\u770b\u4e24\u6761\u6570\u636e\n")),(0,l.kt)("h3",{id:"\u6392\u5e8f\u64cd\u4f5c"},"\u6392\u5e8f\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# db.collection.find().sort({KEY:1})\n# 1 \u4e3a\u5347\u5e8f\uff0c -1 \u4e3a\u964d\u5e8f\ndb.article.find().sort({likes:-1})  # \u4ee5 likes \u5b57\u6bb5\u8fdb\u884c\u964d\u5e8f\u6392\u5217\n")),(0,l.kt)("h3",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u521b\u5efa\u7d22\u5f15\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\n# db.collection.createIndex(keys,options)\n# option \u4e2d\u7684\u914d\u7f6e\u9009\u62e9\n# background \u521b\u5efa\u8fc7\u7a0b\u4e2d\u4f1a\u963b\u585e\u5176\u4ed6\u7684\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u8bbe\u7f6e\u4e3a true \u8868\u793a\u540e\u53f0\u521b\u5efa\uff0c\u9ed8\u8ba4\u503c\u4e3a false\n# unique \u8bbe\u7f6e\u4e3a true \u8868\u793a\u552f\u4e00\u7d22\u5f15\ndb.article.createIndex({"title":1,"description":-1},{background:true})\ndb.article.getIndexes() # \u67e5\u770b\u96c6\u5408\u4e2d\u5df2\u7ecf\u521b\u5efa\u7684\u7d22\u5f15\n')),(0,l.kt)("h3",{id:"\u805a\u5408"},"\u805a\u5408"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u805a\u5408\u8868\u793a\u5bf9\u6570\u636e\u7684\u591a\u4e2a\u5185\u5bb9\u8fdb\u884c\u64cd\u4f5c\ndb.article.aggregate([{$group:}])\n")))}u.isMDXComponent=!0}}]);