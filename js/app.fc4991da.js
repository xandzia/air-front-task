(function(t){function e(e){for(var r,a,s=e[0],i=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-760cf88c":"b2d829fc","chunk-87fb7b68":"29309d94"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-760cf88c":1,"chunk-87fb7b68":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-760cf88c":"141beb22","chunk-87fb7b68":"6d3498a8"}[t]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/air-front-task/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("main",{staticClass:"mt-5"},[n("transition",{attrs:{name:"fade",appear:"",mode:"out-in"}},[n("router-view")],1)],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light px-4 py-2"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})]),r("ul",t._l(t.navList,(function(e){return r("router-link",{key:e.name,staticClass:"nav-item",attrs:{tag:"li",to:e.link}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)},s=[],i={name:"NavBar",data:function(){return{navList:[{link:"/",name:"Home"},{link:"/login",name:"Login"},{link:"/table",name:"Table"}]}}},u=i,l=(n("8f0e"),n("2877")),f=Object(l["a"])(u,c,s,!1,null,"9ca4ccd6",null),p=f.exports,d={name:"App",components:{NavBar:p}},m=d,h=(n("5c0b"),Object(l["a"])(m,a,o,!1,null,null,null)),b=h.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home container"},[n("h1",{staticClass:"mb-4"},[t._v("Accordion")]),n("Accordion",{attrs:{items:t.getPosts}})],1)},y=[],_=n("5530"),k=n("2f62"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"accordion vgt-inner-wrap mb-4",attrs:{id:"accordion"}},t._l(t.items,(function(e,r){return n("section",{key:r,staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"heading"+e.id}},[n("button",{staticClass:"accordion-button",class:{collapsed:0!==r},attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+e.id,"aria-expanded":"true","aria-controls":"collapse"+e.id}},[n("strong",[t._v(t._s(e.title))])])]),n("div",{staticClass:"accordion-collapse collapse",class:{show:0===r},attrs:{id:"collapse"+e.id,"aria-labelledby":"heading"+e.id,"data-bs-parent":"#accordion"}},[n("p",{staticClass:"accordion-body py-2 my-2"},[t._v(" "+t._s(e.body)+" ")])])])})),0)},w=[],j={name:"Accordion",props:{items:{type:Array,default:function(){return[]}}}},x=j,C=Object(l["a"])(x,O,w,!1,null,"7d71370a",null),S=C.exports,E={name:"Home",components:{Accordion:S},created:function(){this.fetchData()},methods:Object(_["a"])(Object(_["a"])({},Object(k["b"])(["fetchPosts"])),{},{fetchData:function(){this.fetchPosts()}}),computed:Object(_["a"])({},Object(k["c"])(["getPosts"]))},T=E,P=Object(l["a"])(T,g,y,!1,null,null,null),A=P.exports;r["a"].use(v["a"]);var M=[{path:"/",name:"Home",component:A},{path:"/login",name:"Login",component:function(){return n.e("chunk-87fb7b68").then(n.bind(null,"a55b"))}},{path:"/table",name:"Table",component:function(){return n.e("chunk-760cf88c").then(n.bind(null,"3f0e"))}}],N=new v["a"]({routes:M}),L=N,D=n("1da1"),B=(n("4e82"),n("fb6a"),n("96cf"),n("bc3a")),R=n.n(B),$={url:"https://jsonplaceholder.typicode.com/"};r["a"].use(k["a"]);var F=new k["a"].Store({namespaced:!0,state:{posts:[],comments:[],formData:null},mutations:{SET_POSTS:function(t,e){t.posts=e},SET_FORM:function(t,e){t.formData=e},SET_COMMENTS:function(t,e){t.comments=e}},actions:{fetchPosts:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,r.posts.length){e.next=13;break}return e.prev=2,e.next=5,R.a.get($.url+"posts");case 5:a=e.sent,o=a.data,n("SET_POSTS",o),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))()},setFormData:function(t,e){var n=t.commit;n("SET_FORM",e)},fetchComments:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,r.comments.length){e.next=13;break}return e.prev=2,e.next=5,R.a.get($.url+"comments");case 5:a=e.sent,o=a.data,n("SET_COMMENTS",o),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))()}},getters:{getPosts:function(t){var e=t.posts,n=e.sort((function(){return.5-Math.random()}));return n.slice(0,5)},getComments:function(t){var e=t.comments;return e}},modules:{}});n("3e48");r["a"].config.productionTip=!1,new r["a"]({router:L,store:F,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6a1e":function(t,e,n){},"8f0e":function(t,e,n){"use strict";n("6a1e")},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.fc4991da.js.map