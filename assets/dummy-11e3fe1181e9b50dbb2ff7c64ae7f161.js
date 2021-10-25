"use strict"
function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}define("dummy/app",["exports","@ember/application","dummy/config/environment","ember-load-initializers","ember-resolver"],(function(e,t,n,r,o){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=a(e)
if(t){var o=a(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return c(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(r,e)
var t=l(r)
function r(){var e
i(this,r)
for(var u=arguments.length,l=new Array(u),f=0;f<u;f++)l[f]=arguments[f]
return d(c(e=t.call.apply(t,[this].concat(l))),"modulePrefix",n.default.modulePrefix),d(c(e),"podModulePrefix",n.default.podModulePrefix),d(c(e),"Resolver",o.default),e}return r}(t.default)
e.default=p,(0,r.default)(p,n.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/example",["exports","@ember/component","@ember/template-factory","@ember/object","@glimmer/component"],(function(e,t,n,r,o){var i
function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=p(e)
if(t){var o=p(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return a(this,n)}}function a(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,y,b,v,h,g,_=(0,n.createTemplateFactory)({id:"V9vMiBVP",block:'[[[10,0],[14,0,"example"],[12],[1,"\\n  "],[10,0],[14,0,"example__header"],[12],[1,"\\n    Ember Right Click Menu\\n  "],[13],[1,"\\n  "],[10,0],[14,0,"example__content"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[28,[37,2],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],null]],null]],null],null,[[[1,"      "],[10,1],[12],[1,"\\n        (span)\\n        "],[8,[39,3],null,[["@items"],[[30,0,["items"]]]],null],[1,"\\n        "],[10,"svg"],[14,"width","50"],[14,"height","50"],[12],[1,"\\n            "],[10,"text"],[14,"x","5"],[14,"y","20"],[12],[1," (svg) "],[13],[1,"\\n          "],[10,"rect"],[14,"width","50"],[14,"height","50"],[12],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "],[13],[1,"\\n"],[13]],[],false,["each","-track-array","array","right-click-menu"]]',moduleName:"dummy/components/example.hbs",isStrictMode:!1}),O=(i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(i,e)
var t,n,r,o=c(i)
function i(){var e
u(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return s(d(e=o.call.apply(o,[this].concat(n))),"items",[{title:"Characters",items:[{title:"Ganondorf",action:e.stealTriforce},{title:"Link",action:e.saveHyrule},{title:"Zelda",action:e.petEpona},{title:"Navi",items:[{title:"Annoy the gamer",action:e.sayHeyListen},{title:"Help Link out",action:e.sayHeyListen},{title:"Yell for attention",action:e.sayHeyListen}]}]},{title:"Equipment",items:[{title:"Master sword"},{title:"Hyrule shield"},{title:"Hero of Time tunic",disabled:!0}]},{title:"Collectables",items:[{title:"Rupees",items:[{title:"green",disabled:!0},{title:"blue",disabled:!0},{title:"red",disabled:!0}]},{title:"Heart containers"},{title:"Bottles",disabled:!0,items:[{title:"Fairy"},{title:"Red potion"},{title:"Green potion"}]}]}]),e}return t=i,(n=[{key:"sayHeyListen",value:function(){alert("Hey! Listen!")}}])&&l(t.prototype,n),r&&l(t,r),i}(o.default),m=i.prototype,y="sayHeyListen",b=[r.action],v=Object.getOwnPropertyDescriptor(i.prototype,"sayHeyListen"),h=i.prototype,g={},Object.keys(v).forEach((function(e){g[e]=v[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),g=b.slice().reverse().reduce((function(e,t){return t(m,y,e)||e}),g),h&&void 0!==g.initializer&&(g.value=g.initializer?g.initializer.call(h):void 0,g.initializer=void 0),void 0===g.initializer&&(Object.defineProperty(m,y,g),g=null),i)
e.default=O,(0,t.setComponentTemplate)(_,O)})),define("dummy/components/item-list",["exports","ember-right-click-menu/components/item-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/list-item",["exports","ember-right-click-menu/components/list-item"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/right-click-menu",["exports","ember-right-click-menu/components/right-click-menu"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default)}}
e.default=n})),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],(function(e,t,n){function r(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var o,i=n.default.exportApplicationGlobal
o="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),r[o]||(r[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=r
var o={name:"export-application-global",initialize:r}
e.default=o})),define("dummy/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/router",["exports","@ember/routing/router","dummy/config/environment"],(function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=f(e)
if(t){var o=f(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(u,e)
var t=i(u)
function u(){var e
r(this,u)
for(var o=arguments.length,i=new Array(o),f=0;f<o;f++)i[f]=arguments[f]
return c(l(e=t.call.apply(t,[this].concat(i))),"location",n.default.locationType),c(l(e),"rootURL",n.default.rootURL),e}return u}(t.default)
e.default=a,a.map((function(){}))})),define("dummy/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/right-click-menu",["exports","ember-right-click-menu/services/right-click-menu"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"dnkh6okk",block:'[[[1,[28,[35,0],["Ember Right Click Menu"],null]],[1,"\\n"],[10,0],[14,1,"ember-right-click-menu-wormhole"],[12],[13],[1,"\\n"],[8,[39,1],null,null,null],[1,"\\n"]],[],false,["page-title","example"]]',moduleName:"dummy/templates/application.hbs",isStrictMode:!1})
e.default=n})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({})
