"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7756],{3789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(3117),i=(n(7294),n(3905));const r={title:"Async utils functions",tags:["utils"]},o="Async utils",s={unversionedId:"docs/core/utils/async",id:"docs/core/utils/async",title:"Async utils functions",description:"Summary",source:"@site/docs/docs/01-core/utils/async.md",sourceDirName:"docs/01-core/utils",slug:"/docs/core/utils/async",permalink:"/docs/core/utils/async",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/utils/async.md",tags:[{label:"utils",permalink:"/tags/utils"}],version:"current",frontMatter:{title:"Async utils functions",tags:["utils"]},sidebar:"docs",previous:{title:"Providers",permalink:"/upload"}},l={},u=[{value:"Summary",id:"summary",level:2},{value:"Detailed design",id:"detailed-design",level:2},{value:"mapAsync",id:"mapasync",level:3},{value:"reduceAsync",id:"reduceasync",level:3},{value:"pipeAsync",id:"pipeasync",level:3},{value:"When to use",id:"when-to-use",level:3},{value:"Should I add my function here ?",id:"should-i-add-my-function-here-",level:3},{value:"Potential improvements",id:"potential-improvements",level:2},{value:"Resources",id:"resources",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"async-utils"},"Async utils"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Async utils are grouping all function that interact with async stuff like Promises."),(0,i.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,i.kt)("h3",{id:"mapasync"},"mapAsync"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mapAsync")," function is an asynchronous version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.map")," method."),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const input = [1, 2, 3];\n\nconst output = await mapAsync(input, async (item) => {\n  return item * 2;\n});\n\nconsole.log(output); // [2, 4, 6]\n")),(0,i.kt)("h3",{id:"reduceasync"},"reduceAsync"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"reduceAsync")," function is an asynchronous version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce")," method."),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const input = [1, 2, 3];\n\nconst reducer = reduceAsync(input);\nconst output = await reducer(async (accumulator, item) => {\n  return accumulator + item;\n}, 0);\n\nconsole.log(output); // 6\n")),(0,i.kt)("h3",{id:"pipeasync"},"pipeAsync"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeAsync")," function is a utility function for composing asynchronous functions. It takes a list of functions as input, and returns a new function that applies each function in turn to the input."),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function addOne(input: number): Promise<number> {\n  return input + 1;\n}\n\nasync function double(input: number): Promise<number> {\n  return input * 2;\n}\n\nconst addOneAndDouble = pipeAsync(addOne, double);\n\nconst output = await addOneAndDouble(3);\n\nconsole.log(output); // 8\n")),(0,i.kt)("h3",{id:"when-to-use"},"When to use"),(0,i.kt)("p",null,"Every time the code has to act with promises and iterate other them, an async utils function should be used."),(0,i.kt)("h3",{id:"should-i-add-my-function-here-"},"Should I add my function here ?"),(0,i.kt)("p",null,"Any util function that manipulates promises can be included in this utils section."),(0,i.kt)("p",null,"Please consider the next point if a lots of functions are available in the async section."),(0,i.kt)("h2",{id:"potential-improvements"},"Potential improvements"),(0,i.kt)("p",null,"Some ideas of functions that could be added:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Other ",(0,i.kt)("inlineCode",{parentName:"li"},"Array.prototype")," methods: ",(0,i.kt)("inlineCode",{parentName:"li"},"filterAsync"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"someAsync"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"everyAsync"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"findAsync"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"findIndexAsync"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"flatMapAsync"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retryAsync"),": A function that retries an asynchronous operation a specified number of times if it fails. It takes an asynchronous operation and a number of retries as input, and returns the result of the operation if it succeeds within the specified number of retries, or throws an error if it fails after all retries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeoutAsync"),": A function that adds a timeout to an asynchronous operation. It takes an asynchronous operation and a timeout duration as input, and returns the result of the operation if it completes within the specified timeout, or throws an error if it takes longer than the timeout.")),(0,i.kt)("p",null,"If we begin to use lots of async utils function, we may consider to migrate to a specialized library like ",(0,i.kt)("a",{parentName:"p",href:"http://caolan.github.io/async/v3/"},"asyncjs")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strapi/strapi/blob/9b36c3b10adaa00fd3596853abc63122632c36fe/packages/core/utils/lib/async.js"},"Async file in Strapi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://caolan.github.io/async/v3/"},"http://caolan.github.io/async/v3/"))))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);