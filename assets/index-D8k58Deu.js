var hi=Object.defineProperty;var nt=i=>{throw TypeError(i)};var di=(i,t,e)=>t in i?hi(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var _=(i,t,e)=>di(i,typeof t!="symbol"?t+"":t,e),Ue=(i,t,e)=>t.has(i)||nt("Cannot "+e);var m=(i,t,e)=>(Ue(i,t,"read from private field"),e?e.call(i):t.get(i)),P=(i,t,e)=>t.has(i)?nt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),S=(i,t,e,n)=>(Ue(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),p=(i,t,e)=>(Ue(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function ui(i){for(var t=[],e=0;e<i.length;){var n=i[e];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:e,value:i[e++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:e++,value:i[e++]});continue}if(n==="{"){t.push({type:"OPEN",index:e,value:i[e++]});continue}if(n==="}"){t.push({type:"CLOSE",index:e,value:i[e++]});continue}if(n===":"){for(var r="",s=e+1;s<i.length;){var o=i.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){r+=i[s++];continue}break}if(!r)throw new TypeError("Missing parameter name at ".concat(e));t.push({type:"NAME",index:e,value:r}),e=s;continue}if(n==="("){var c=1,a="",s=e+1;if(i[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<i.length;){if(i[s]==="\\"){a+=i[s++]+i[s++];continue}if(i[s]===")"){if(c--,c===0){s++;break}}else if(i[s]==="("&&(c++,i[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));a+=i[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(e));if(!a)throw new TypeError("Missing pattern at ".concat(e));t.push({type:"PATTERN",index:e,value:a}),e=s;continue}t.push({type:"CHAR",index:e,value:i[e++]})}return t.push({type:"END",index:e,value:""}),t}function Qe(i,t){t===void 0&&(t={});for(var e=ui(i),n=t.prefixes,r=n===void 0?"./":n,s=t.delimiter,o=s===void 0?"/#?":s,c=[],a=0,d=0,h="",l=function(R){if(d<e.length&&e[d].type===R)return e[d++].value},f=function(R){var x=l(R);if(x!==void 0)return x;var U=e[d],Le=U.type,li=U.index;throw new TypeError("Unexpected ".concat(Le," at ").concat(li,", expected ").concat(R))},g=function(){for(var R="",x;x=l("CHAR")||l("ESCAPED_CHAR");)R+=x;return R},y=function(R){for(var x=0,U=o;x<U.length;x++){var Le=U[x];if(R.indexOf(Le)>-1)return!0}return!1},b=function(R){var x=c[c.length-1],U=R||(x&&typeof x=="string"?x:"");if(x&&!U)throw new TypeError('Must have text between two parameters, missing text after "'.concat(x.name,'"'));return!U||y(U)?"[^".concat(D(o),"]+?"):"(?:(?!".concat(D(U),")[^").concat(D(o),"])+?")};d<e.length;){var $=l("CHAR"),A=l("NAME"),ee=l("PATTERN");if(A||ee){var T=$||"";r.indexOf(T)===-1&&(h+=T,T=""),h&&(c.push(h),h=""),c.push({name:A||a++,prefix:T,suffix:"",pattern:ee||b(T),modifier:l("MODIFIER")||""});continue}var v=$||l("ESCAPED_CHAR");if(v){h+=v;continue}h&&(c.push(h),h="");var V=l("OPEN");if(V){var T=g(),k=l("NAME")||"",oe=l("PATTERN")||"",te=g();f("CLOSE"),c.push({name:k||(oe?a++:""),pattern:k&&!oe?b(T):oe,prefix:T,suffix:te,modifier:l("MODIFIER")||""});continue}f("END")}return c}function Rt(i,t){return Pt(Qe(i,t),t)}function Pt(i,t){t===void 0&&(t={});var e=Ze(t),n=t.encode,r=n===void 0?function(a){return a}:n,s=t.validate,o=s===void 0?!0:s,c=i.map(function(a){if(typeof a=="object")return new RegExp("^(?:".concat(a.pattern,")$"),e)});return function(a){for(var d="",h=0;h<i.length;h++){var l=i[h];if(typeof l=="string"){d+=l;continue}var f=a?a[l.name]:void 0,g=l.modifier==="?"||l.modifier==="*",y=l.modifier==="*"||l.modifier==="+";if(Array.isArray(f)){if(!y)throw new TypeError('Expected "'.concat(l.name,'" to not repeat, but got an array'));if(f.length===0){if(g)continue;throw new TypeError('Expected "'.concat(l.name,'" to not be empty'))}for(var b=0;b<f.length;b++){var $=r(f[b],l);if(o&&!c[h].test($))throw new TypeError('Expected all "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat($,'"'));d+=l.prefix+$+l.suffix}continue}if(typeof f=="string"||typeof f=="number"){var $=r(String(f),l);if(o&&!c[h].test($))throw new TypeError('Expected "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat($,'"'));d+=l.prefix+$+l.suffix;continue}if(!g){var A=y?"an array":"a string";throw new TypeError('Expected "'.concat(l.name,'" to be ').concat(A))}}return d}}function D(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ze(i){return i&&i.sensitive?"":"i"}function fi(i,t){if(!t)return i;for(var e=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,r=e.exec(i.source);r;)t.push({name:r[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),r=e.exec(i.source);return i}function pi(i,t,e){var n=i.map(function(r){return Tt(r,t,e).source});return new RegExp("(?:".concat(n.join("|"),")"),Ze(e))}function mi(i,t,e){return gi(Qe(i,e),t,e)}function gi(i,t,e){e===void 0&&(e={});for(var n=e.strict,r=n===void 0?!1:n,s=e.start,o=s===void 0?!0:s,c=e.end,a=c===void 0?!0:c,d=e.encode,h=d===void 0?function(x){return x}:d,l=e.delimiter,f=l===void 0?"/#?":l,g=e.endsWith,y=g===void 0?"":g,b="[".concat(D(y),"]|$"),$="[".concat(D(f),"]"),A=o?"^":"",ee=0,T=i;ee<T.length;ee++){var v=T[ee];if(typeof v=="string")A+=D(h(v));else{var V=D(h(v.prefix)),k=D(h(v.suffix));if(v.pattern)if(t&&t.push(v),V||k)if(v.modifier==="+"||v.modifier==="*"){var oe=v.modifier==="*"?"?":"";A+="(?:".concat(V,"((?:").concat(v.pattern,")(?:").concat(k).concat(V,"(?:").concat(v.pattern,"))*)").concat(k,")").concat(oe)}else A+="(?:".concat(V,"(").concat(v.pattern,")").concat(k,")").concat(v.modifier);else{if(v.modifier==="+"||v.modifier==="*")throw new TypeError('Can not repeat "'.concat(v.name,'" without a prefix and suffix'));A+="(".concat(v.pattern,")").concat(v.modifier)}else A+="(?:".concat(V).concat(k,")").concat(v.modifier)}}if(a)r||(A+="".concat($,"?")),A+=e.endsWith?"(?=".concat(b,")"):"$";else{var te=i[i.length-1],R=typeof te=="string"?$.indexOf(te[te.length-1])>-1:te===void 0;r||(A+="(?:".concat($,"(?=").concat(b,"))?")),R||(A+="(?=".concat($,"|").concat(b,")"))}return new RegExp(A,Ze(e))}function Tt(i,t,e){return i instanceof RegExp?fi(i,t):Array.isArray(i)?pi(i,t,e):mi(i,t,e)}function G(i){return typeof i=="object"&&!!i}function ue(i){return typeof i=="function"}function O(i){return typeof i=="string"}function xe(i=[]){return Array.isArray(i)?i:[i]}function B(i){return`[Vaadin.Router] ${i}`}class It extends Error{constructor(e){super(B(`Page not found (${e.pathname})`));_(this,"code");_(this,"context");this.context=e,this.code=404}}const X=Symbol("NotFoundResult");function Lt(i){return new It(i)}function Ut(i){return(Array.isArray(i)?i[0]:i)??""}function Se(i){return Ut(i==null?void 0:i.path)}function _i(i){return Array.isArray(i)&&i.length>0?i:void 0}const He=new Map;He.set("|false",{keys:[],pattern:/(?:)/u});function rt(i){try{return decodeURIComponent(i)}catch{return i}}function yi(i,t,e=!1,n=[],r){const s=`${i}|${String(e)}`,o=Ut(t);let c=He.get(s);if(!c){const h=[];c={keys:h,pattern:Tt(i,h,{end:e,strict:i===""})},He.set(s,c)}const a=c.pattern.exec(o);if(!a)return null;const d={...r};for(let h=1;h<a.length;h++){const l=c.keys[h-1],f=l.name,g=a[h];(g!==void 0||!Object.hasOwn(d,f))&&(l.modifier==="+"||l.modifier==="*"?d[f]=g?g.split(/[/?#]/u).map(rt):[]:d[f]=g&&rt(g))}return{keys:[...n,...c.keys],params:d,path:a[0]}}var vi=yi;function Nt(i,t,e,n,r){let s,o,c=0,a=Se(i);return a.startsWith("/")&&(e&&(a=a.substring(1)),e=!0),{next(d){if(i===d)return{done:!0,value:void 0};i.__children??(i.__children=_i(i.children));const h=i.__children??[],l=!i.__children&&!i.children;if(!s&&(s=vi(a,t,l,n,r),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:i}};if(s&&h.length>0)for(;c<h.length;){if(!o){const g=h[c];g.parent=i;let y=s.path.length;y>0&&t.charAt(y)==="/"&&(y+=1),o=Nt(g,t.substring(y),e,s.keys,s.params)}const f=o.next(d);if(!f.done)return{done:!1,value:f.value};o=null,c+=1}return{done:!0,value:void 0}}}}var wi=Nt;function bi(i){if(ue(i.route.action))return i.route.action(i)}function $i(i,t){let e=i;for(;e;)if(e=e.parent,e===t)return!0;return!1}function Ai(i){return!!i&&typeof i=="object"&&"next"in i&&"params"in i&&"result"in i&&"route"in i}class Ei extends Error{constructor(e,n){let r=`Path '${e.pathname}' is not properly resolved due to an error.`;const s=Se(e.route);s&&(r+=` Resolution had failed on route: '${s}'`);super(r,n);_(this,"code");_(this,"context");this.code=n==null?void 0:n.code,this.context=e}warn(){console.warn(this.message)}}function xi(i,t){var r;const{path:e,route:n}=t;if(n&&!n.__synthetic){const s={path:e,route:n};if(n.parent&&i.chain)for(let o=i.chain.length-1;o>=0&&i.chain[o].route!==n.parent;o--)i.chain.pop();(r=i.chain)==null||r.push(s)}}var Y,C;class Ot{constructor(t,{baseUrl:e="",context:n,errorHandler:r,resolveRoute:s=bi}={}){_(this,"baseUrl");P(this,Y);_(this,"errorHandler");_(this,"resolveRoute");P(this,C);if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=r,this.resolveRoute=s,Array.isArray(t)?S(this,C,{__children:t,__synthetic:!0,action:()=>{},path:""}):S(this,C,{...t,parent:void 0}),S(this,Y,{...n,hash:"",async next(){return X},params:{},pathname:"",resolver:this,route:m(this,C),search:"",chain:[]})}get root(){return m(this,C)}get context(){return m(this,Y)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...m(this,C).__children??[]]}removeRoutes(){m(this,C).__children=[]}async resolve(t){const e=this,n={...m(this,Y),...O(t)?{pathname:t}:t,next:d},r=wi(m(this,C),this.__normalizePathname(n.pathname)??n.pathname,!!this.baseUrl),s=this.resolveRoute;let o=null,c=null,a=n;async function d(h=!1,l=(g=>(g=o==null?void 0:o.value)==null?void 0:g.route)(),f){var $,A;const y=f===null?($=o==null?void 0:o.value)==null?void 0:$.route:void 0;if(o=c??r.next(y),c=null,!h&&(o.done||!$i(o.value.route,l)))return c=o,X;if(o.done)throw Lt(n);a={...n,params:o.value.params,route:o.value.route,chain:(A=a.chain)==null?void 0:A.slice()},xi(a,o.value);const b=await s(a);return b!=null&&b!==X?(a.result=Ai(b)?b.result:b,S(e,Y,a),a):await d(h,l,b)}try{return await d(!0,m(this,C))}catch(h){const l=h instanceof It?h:new Ei(a,{code:500,cause:h});if(this.errorHandler)return a.result=this.errorHandler(l),a;throw h}}setRoutes(t){m(this,C).__children=[...xe(t)]}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,n=t.startsWith("/")?new URL(e).origin+t:`./${t}`,r=new URL(n,e).href;if(r.startsWith(e))return r.slice(e.length)}addRoutes(t){return m(this,C).__children=[...m(this,C).__children??[],...xe(t)],this.getRoutes()}}Y=new WeakMap,C=new WeakMap;function Mt(i,t,e,n){var s;const r=t.name??(n==null?void 0:n(t));if(r&&(i.has(r)?(s=i.get(r))==null||s.push(t):i.set(r,[t])),Array.isArray(e))for(const o of e)o.parent=t,Mt(i,o,o.__children??o.children,n)}function st(i,t){const e=i.get(t);if(e){if(e.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return e[0]}}function Si(i,t={}){if(!(i instanceof Ot))throw new TypeError("An instance of Resolver is expected");const e=new Map,n=new Map;return(r,s)=>{let o=st(n,r);if(!o&&(n.clear(),Mt(n,i.root,i.root.__children,t.cacheKeyProvider),o=st(n,r),!o))throw new Error(`Route "${r}" not found`);let c=o.fullPath?e.get(o.fullPath):void 0;if(!c){let h=Se(o),l=o.parent;for(;l;){const y=Se(l);y&&(h=`${y.replace(/\/$/u,"")}/${h.replace(/^\//u,"")}`),l=l.parent}const f=Qe(h),g=Object.create(null);for(const y of f)O(y)||(g[y.name]=!0);c={keys:g,tokens:f},e.set(h,c),o.fullPath=h}let d=Pt(c.tokens,{encode:encodeURIComponent,...t})(s)||"/";if(t.stringifyQueryParams&&s){const h={};for(const[f,g]of Object.entries(s))!(f in c.keys)&&g&&(h[f]=g);const l=t.stringifyQueryParams(h);l&&(d+=l.startsWith("?")?l:`?${l}`)}return d}}var Ci=Si;const Ri=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ve=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Pi(){function i(){return!0}return kt(i)}function Ti(){try{return Ii()?!0:Li()?ve?!Ui():!Pi():!1}catch{return!1}}function Ii(){return localStorage.getItem("vaadin.developmentmode.force")}function Li(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ui(){return!!(ve&&Object.keys(ve).map(t=>ve[t]).filter(t=>t.productionMode).length>0)}function kt(i,t){if(typeof i!="function")return;const e=Ri.exec(i.toString());if(e)try{i=new Function(e[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return i(t)}window.Vaadin=window.Vaadin||{};const ot=function(i,t){if(window.Vaadin.developmentMode)return kt(i,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ti());function Ni(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const Oi=function(){if(typeof ot=="function")return ot(Ni)};function Mi(i,t=window.Vaadin??(window.Vaadin={})){t.registrations??(t.registrations=[]),t.registrations.push({is:"@vaadin/router",version:"2.0.0-rc4"})}Mi();Oi();const ki=i=>{const t=getComputedStyle(i).getPropertyValue("animation-name");return t&&t!=="none"},Hi=(i,t)=>{const e=()=>{i.removeEventListener("animationend",e),t()};i.addEventListener("animationend",e)};async function Di(i,t){return i.classList.add(t),await new Promise(e=>{if(ki(i)){const n=i.getBoundingClientRect(),r=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;i.setAttribute("style",`position: absolute; ${r}`),Hi(i,()=>{i.classList.remove(t),i.removeAttribute("style"),e()})}else i.classList.remove(t),e()})}var at=Di;function Ht(i){if(!i||!O(i.path))throw new Error(B('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!ue(i.action)&&!Array.isArray(i.children)&&!ue(i.children)&&!O(i.component)&&!O(i.redirect))throw new Error(B(`Expected route config "${i.path}" to include either "component, redirect" or "action" function but none found.`));i.redirect&&["bundle","component"].forEach(t=>{t in i&&console.warn(B(`Route config "${String(i.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function ct(i){xe(i).forEach(t=>Ht(t))}function Fi({next:i,...t}){return t}function we(i,t){const e=t.__effectiveBaseUrl;return e?new URL(i.replace(/^\//u,""),e).pathname:i}function Dt(i){return i.map(t=>t.path).reduce((t,e)=>e.length?`${t.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`:t,"")}function zi(i){return Dt(i.map(t=>t.route))}function I({chain:i=[],hash:t="",params:e={},pathname:n="",redirectFrom:r,resolver:s,search:o=""},c){const a=i.map(d=>d.route);return{baseUrl:(s==null?void 0:s.baseUrl)??"",getUrl:(d={})=>s?we(Rt(zi(i))({...e,...d}),s):"",hash:t,params:e,pathname:n,redirectFrom:r,route:c??(Array.isArray(a)?a.at(-1):void 0)??null,routes:a,search:o,searchParams:new URLSearchParams(o)}}function lt(i,t){const e={...i.params};return{redirect:{from:i.pathname,params:e,pathname:t}}}function Bi(i,t){if(t.location=I(i),i.chain){const e=i.chain.map(n=>n.route).indexOf(i.route);i.chain[e].element=t}return t}function be(i,t,...e){if(typeof i=="function")return i.apply(t,e)}function ht(i,t,...e){return n=>n&&G(n)&&("cancel"in n||"redirect"in n)?n:be(t==null?void 0:t[i],t,...e)}function ji(i,t){if(!Array.isArray(i)&&!G(i))throw new Error(B(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(i)}`));const e=xe(i);e.forEach(n=>Ht(n)),t.__children=e}function le(i,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:t}))}function Vi(i){if(typeof i!="object")return String(i);const[t="Unknown"]=/ (.*)\]$/u.exec(String(i))??[];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(i)}`:t}function Wi(i){const{port:t,protocol:e}=i,s=e==="http:"&&t==="80"||e==="https:"&&t==="443"?i.hostname:i.host;return`${e}//${s}`}function dt(i){if(i instanceof Element)return i.nodeName.toLowerCase()}function ut(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let t=i.target;const e=i instanceof MouseEvent?i.composedPath():i.path??[];for(let a=0;a<e.length;a++){const d=e[a];if("nodeName"in d&&d.nodeName.toLowerCase()==="a"){t=d;break}}for(;t&&t instanceof Node&&dt(t)!=="a";)t=t.parentNode;if(!t||dt(t)!=="a")return;const n=t;if(n.target&&n.target.toLowerCase()!=="_self"||n.hasAttribute("download")||n.hasAttribute("router-ignore")||n.pathname===window.location.pathname&&n.hash!==""||(n.origin||Wi(n))!==window.location.origin)return;const{hash:s,pathname:o,search:c}=n;le("go",{hash:s,pathname:o,search:c})&&i instanceof MouseEvent&&(i.preventDefault(),i.type==="click"&&window.scrollTo(0,0))}const Gi={activate(){window.document.addEventListener("click",ut)},inactivate(){window.document.removeEventListener("click",ut)}};var qi=Gi;function ft(i){if(i.state==="vaadin-router-ignore")return;const{hash:t,pathname:e,search:n}=window.location;le("go",{hash:t,pathname:e,search:n})}const Yi={activate(){window.addEventListener("popstate",ft)},inactivate(){window.removeEventListener("popstate",ft)}};var Ki=Yi;let pt=[];const Ji={CLICK:qi,POPSTATE:Ki};function mt(i=[]){pt.forEach(t=>t.inactivate()),i.forEach(t=>t.activate()),pt=i}const Xi=256;function ae(){return{cancel:!0}}const gt={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return X}};var ge,ne,_e,K,z,J,N,L,u,Ft,zt,$e,Fe,Bt,jt,ze,Be,je,H,Ve,We,Ae,Ge,Vt,Wt,Gt,qt,Yt,Kt,qe;class De extends Ot{constructor(e,n){const r=document.head.querySelector("base"),s=r==null?void 0:r.getAttribute("href");super([],{baseUrl:s?new URL(s,document.URL).href.replace(/[^/]*$/u,""):void 0,...n,resolveRoute:async o=>await p(this,u,Ft).call(this,o)});P(this,u);_(this,"location",I({resolver:this}));_(this,"ready",Promise.resolve(this.location));P(this,ge,new WeakSet);P(this,ne,new WeakSet);P(this,_e,p(this,u,qe).bind(this));P(this,K,0);P(this,z);_(this,"__previousContext");P(this,J);P(this,N,null);P(this,L,null);mt(Object.values(Ji)),this.setOutlet(e),this.subscribe()}setOutlet(e){e&&p(this,u,We).call(this,e),S(this,z,e)}getOutlet(){return m(this,z)}async setRoutes(e,n=!1){return this.__previousContext=void 0,S(this,J,void 0),ct(e),super.setRoutes(e),n||p(this,u,qe).call(this),await this.ready}addRoutes(e){return ct(e),super.addRoutes(e)}async render(e,n=!1){S(this,K,m(this,K)+1);const r=m(this,K),s={...gt,...O(e)?{hash:"",search:"",pathname:e}:e,__renderId:r};return this.ready=p(this,u,zt).call(this,s,n),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",m(this,_e))}unsubscribe(){window.removeEventListener("vaadin-router-go",m(this,_e))}static setTriggers(...e){mt(e)}urlForName(e,n){return m(this,J)||S(this,J,Ci(this,{cacheKeyProvider(r){return"component"in r&&typeof r.component=="string"?r.component:void 0}})),we(m(this,J).call(this,e,n??void 0),this)}urlForPath(e,n){return we(Rt(e)(n??void 0),this)}static go(e){const{pathname:n,search:r,hash:s}=O(e)?new URL(e,"http://a"):e;return le("go",{pathname:n,search:r,hash:s})}}ge=new WeakMap,ne=new WeakMap,_e=new WeakMap,K=new WeakMap,z=new WeakMap,J=new WeakMap,N=new WeakMap,L=new WeakMap,u=new WeakSet,Ft=async function(e){const{route:n}=e;if(ue(n.children)){let s=await n.children(Fi(e));ue(n.children)||({children:s}=n),ji(s,n)}const r={component:s=>{const o=document.createElement(s);return m(this,ne).add(o),o},prevent:ae,redirect:s=>lt(e,s)};return await Promise.resolve().then(async()=>{if(p(this,u,H).call(this,e))return await be(n.action,n,e,r)}).then(s=>{if(s!=null&&(typeof s=="object"||typeof s=="symbol")&&(s instanceof HTMLElement||s===X||G(s)&&"redirect"in s))return s;if(O(n.redirect))return r.redirect(n.redirect)}).then(s=>{if(s!=null)return s;if(O(n.component))return r.component(n.component)})},zt=async function(e,n){var s;const{__renderId:r}=e;try{const o=await this.resolve(e),c=await p(this,u,$e).call(this,o);if(!p(this,u,H).call(this,c))return this.location;const a=this.__previousContext;if(c===a)return p(this,u,Ae).call(this,a,!0),this.location;if(this.location=I(c),n&&p(this,u,Ae).call(this,c,r===1),le("location-changed",{router:this,location:this.location}),c.__skipAttach)return p(this,u,Ge).call(this,c,a),this.__previousContext=c,this.location;p(this,u,Vt).call(this,c,a);const d=p(this,u,Kt).call(this,c);if(p(this,u,Yt).call(this,c),p(this,u,qt).call(this,c,a),await d,p(this,u,H).call(this,c))return p(this,u,Wt).call(this),this.__previousContext=c,this.location}catch(o){if(r===m(this,K)){n&&p(this,u,Ae).call(this,this.context);for(const c of((s=m(this,z))==null?void 0:s.children)??[])c.remove();throw this.location=I(Object.assign(e,{resolver:this})),le("error",{router:this,error:o,...e}),o}}return this.location},$e=async function(e,n=e){const r=await p(this,u,Fe).call(this,n),o=r!==n?r:e,a=we(Dt(r.chain??[]),this)===r.pathname,d=async(l,f=l.route,g)=>{const y=await l.next(!1,f,g);return y===null||y===X?a?l:f.parent!=null?await d(l,f.parent,y):y:y},h=await d(r);if(h==null||h===X)throw Lt(o);return h!==r?await p(this,u,$e).call(this,o,h):await p(this,u,Bt).call(this,r)},Fe=async function(e){const{result:n}=e;if(n instanceof HTMLElement)return Bi(e,n),e;if(n&&"redirect"in n){const r=await p(this,u,Ve).call(this,n.redirect,e.__redirectCount,e.__renderId);return await p(this,u,Fe).call(this,r)}throw n instanceof Error?n:new Error(B(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Vi(n)}". Double check the action return value for the route.`))},Bt=async function(e){return await p(this,u,jt).call(this,e).then(async n=>n===this.__previousContext||n===e?n:await p(this,u,$e).call(this,n))},jt=async function(e){const n=this.__previousContext??{},r=n.chain??[],s=e.chain??[];let o=Promise.resolve(void 0);const c=a=>lt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,s.length)&&!(r[a].route!==s[a].route||r[a].path!==s[a].path&&r[a].element!==s[a].element||!p(this,u,je).call(this,r[a].element,s[a].element));e.__divergedChainIndex++,a++);if(e.__skipAttach=s.length===r.length&&e.__divergedChainIndex===s.length&&p(this,u,je).call(this,e.result,n.result),e.__skipAttach){for(let a=s.length-1;a>=0;a--)o=p(this,u,ze).call(this,o,e,{prevent:ae},r[a]);for(let a=0;a<s.length;a++)o=p(this,u,Be).call(this,o,e,{prevent:ae,redirect:c},s[a]),r[a].element.location=I(e,r[a].route)}else for(let a=r.length-1;a>=e.__divergedChainIndex;a--)o=p(this,u,ze).call(this,o,e,{prevent:ae},r[a])}if(!e.__skipAttach)for(let a=0;a<s.length;a++)a<e.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=I(e,r[a].route)):(o=p(this,u,Be).call(this,o,e,{prevent:ae,redirect:c},s[a]),s[a].element&&(s[a].element.location=I(e,s[a].route)));return await o.then(async a=>{if(a&&G(a)){if("cancel"in a&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in a)return await p(this,u,Ve).call(this,a.redirect,e.__redirectCount,e.__renderId)}return e})},ze=async function(e,n,r,s){const o=I(n);let c=await e;if(p(this,u,H).call(this,n)&&(c=ht("onBeforeLeave",s.element,o,r,this)(c)),!(G(c)&&"redirect"in c))return c},Be=async function(e,n,r,s){const o=I(n,s.route),c=await e;if(p(this,u,H).call(this,n))return ht("onBeforeEnter",s.element,o,r,this)(c)},je=function(e,n){return e instanceof Element&&n instanceof Element?m(this,ne).has(e)&&m(this,ne).has(n)?e.localName===n.localName:e===n:!1},H=function(e){return e.__renderId===m(this,K)},Ve=async function(e,n=0,r=0){if(n>Xi)throw new Error(B(`Too many redirects when rendering ${e.from}`));return await this.resolve({...gt,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:n+1,__renderId:r})},We=function(e=m(this,z)){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(B(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))},Ae=function({pathname:e,search:n="",hash:r=""},s){if(window.location.pathname!==e||window.location.search!==n||window.location.hash!==r){const o=s?"replaceState":"pushState";window.history[o](null,document.title,e+n+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},Ge=function(e,n){var s;let r=m(this,z);for(let o=0;o<(e.__divergedChainIndex??0);o++){const c=(s=n==null?void 0:n.chain)==null?void 0:s[o].element;if(c)if(c.parentNode===r)e.chain[o].element=c,r=c;else break}return r},Vt=function(e,n){var o;p(this,u,We).call(this),p(this,u,Gt).call(this);const r=p(this,u,Ge).call(this,e,n);S(this,N,[]),S(this,L,Array.from((r==null?void 0:r.children)??[]).filter(c=>m(this,ge).has(c)&&c!==e.result));let s=r;for(let c=e.__divergedChainIndex??0;c<(((o=e.chain)==null?void 0:o.length)??0);c++){const a=e.chain[c].element;a&&(s==null||s.appendChild(a),m(this,ge).add(a),s===r&&m(this,N).push(a),s=a)}},Wt=function(){if(m(this,L))for(const e of m(this,L))e.remove();S(this,L,null),S(this,N,null)},Gt=function(){if(m(this,L)&&m(this,N)){for(const e of m(this,N))e.remove();S(this,L,null),S(this,N,null)}},qt=function(e,n){var r;if(!(!(n!=null&&n.chain)||e.__divergedChainIndex==null))for(let s=n.chain.length-1;s>=e.__divergedChainIndex&&p(this,u,H).call(this,e);s--){const o=n.chain[s].element;if(o)try{const c=I(e);be(o.onAfterLeave,o,c,{},this)}finally{if((r=m(this,L))!=null&&r.includes(o))for(const c of o.children)c.remove()}}},Yt=function(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let n=e.__divergedChainIndex;n<e.chain.length&&p(this,u,H).call(this,e);n++){const r=e.chain[n].element;if(r){const s=I(e,e.chain[n].route);be(r.onAfterEnter,r,s,{},this)}}},Kt=async function(e){var a,d;const n=(a=m(this,L))==null?void 0:a[0],r=(d=m(this,N))==null?void 0:d[0],s=[],{chain:o=[]}=e;let c;for(let h=o.length-1;h>=0;h--)if(o[h].route.animate){c=o[h].route.animate;break}if(n&&r&&c){const h=G(c)&&c.leave?c.leave:"leaving",l=G(c)&&c.enter?c.enter:"entering";s.push(at(n,h)),s.push(at(r,l))}return await Promise.all(s),e},qe=function(e){const{pathname:n,search:r,hash:s}=e instanceof CustomEvent?e.detail:window.location;O(this.__normalizePathname(n))&&(e!=null&&e.preventDefault&&e.preventDefault(),this.render({pathname:n,search:r,hash:s},!0))};const Qi=document.querySelector("touch-the-mole"),Zi=new De(Qi);Zi.setRoutes([{path:"/touch-the-mole/home",component:"div"},{path:"/touch-the-mole/game",component:"div"},{path:"(.*)",action:(i,t)=>t.redirect("/touch-the-mole/game")}]);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=globalThis,et=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),_t=new WeakMap;let Jt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(et&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=_t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&_t.set(e,t))}return t}toString(){return this.cssText}};const en=i=>new Jt(typeof i=="string"?i:i+"",void 0,tt),se=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new Jt(e,i,tt)},tn=(i,t)=>{if(et)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),r=Ee.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=e.cssText,i.appendChild(n)}},yt=et?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return en(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:nn,defineProperty:rn,getOwnPropertyDescriptor:sn,getOwnPropertyNames:on,getOwnPropertySymbols:an,getPrototypeOf:cn}=Object,j=globalThis,vt=j.trustedTypes,ln=vt?vt.emptyScript:"",Ne=j.reactiveElementPolyfillSupport,he=(i,t)=>i,Ye={toAttribute(i,t){switch(t){case Boolean:i=i?ln:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Xt=(i,t)=>!nn(i,t),wt={attribute:!0,type:String,converter:Ye,reflect:!1,hasChanged:Xt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),j.litPropertyMetadata??(j.litPropertyMetadata=new WeakMap);class ie extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(t,n,e);r!==void 0&&rn(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){const{get:r,set:s}=sn(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const c=r==null?void 0:r.call(this);s.call(this,o),this.requestUpdate(t,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wt}static _$Ei(){if(this.hasOwnProperty(he("elementProperties")))return;const t=cn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(he("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he("properties"))){const e=this.properties,n=[...on(e),...an(e)];for(const r of n)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,r]of e)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const r=this._$Eu(e,n);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const r of n)e.unshift(yt(r))}else t!==void 0&&e.push(yt(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tn(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var s;const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(r!==void 0&&n.reflect===!0){const o=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:Ye).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var s;const n=this.constructor,r=n._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=n.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Ye;this._$Em=r,this[r]=c.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Xt)(this[t],e))return;this.P(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}ie.elementStyles=[],ie.shadowRootOptions={mode:"open"},ie[he("elementProperties")]=new Map,ie[he("finalized")]=new Map,Ne==null||Ne({ReactiveElement:ie}),(j.reactiveElementVersions??(j.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis,Ce=de.trustedTypes,bt=Ce?Ce.createPolicy("lit-html",{createHTML:i=>i}):void 0,Qt="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Zt="?"+F,hn=`<${Zt}>`,Q=document,fe=()=>Q.createComment(""),pe=i=>i===null||typeof i!="object"&&typeof i!="function",it=Array.isArray,dn=i=>it(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Oe=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,At=/>/g,W=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Et=/'/g,xt=/"/g,ei=/^(?:script|style|textarea|title)$/i,un=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),w=un(1),Z=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),St=new WeakMap,q=Q.createTreeWalker(Q,129);function ti(i,t){if(!it(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}const fn=(i,t)=>{const e=i.length-1,n=[];let r,s=t===2?"<svg>":t===3?"<math>":"",o=ce;for(let c=0;c<e;c++){const a=i[c];let d,h,l=-1,f=0;for(;f<a.length&&(o.lastIndex=f,h=o.exec(a),h!==null);)f=o.lastIndex,o===ce?h[1]==="!--"?o=$t:h[1]!==void 0?o=At:h[2]!==void 0?(ei.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=W):h[3]!==void 0&&(o=W):o===W?h[0]===">"?(o=r??ce,l=-1):h[1]===void 0?l=-2:(l=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?W:h[3]==='"'?xt:Et):o===xt||o===Et?o=W:o===$t||o===At?o=ce:(o=W,r=void 0);const g=o===W&&i[c+1].startsWith("/>")?" ":"";s+=o===ce?a+hn:l>=0?(n.push(d),a.slice(0,l)+Qt+a.slice(l)+F+g):a+F+(l===-2?c:g)}return[ti(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class me{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let s=0,o=0;const c=t.length-1,a=this.parts,[d,h]=fn(t,e);if(this.el=me.createElement(d,n),q.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=q.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(Qt)){const f=h[o++],g=r.getAttribute(l).split(F),y=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:y[2],strings:g,ctor:y[1]==="."?mn:y[1]==="?"?gn:y[1]==="@"?_n:Ie}),r.removeAttribute(l)}else l.startsWith(F)&&(a.push({type:6,index:s}),r.removeAttribute(l));if(ei.test(r.tagName)){const l=r.textContent.split(F),f=l.length-1;if(f>0){r.textContent=Ce?Ce.emptyScript:"";for(let g=0;g<f;g++)r.append(l[g],fe()),q.nextNode(),a.push({type:2,index:++s});r.append(l[f],fe())}}}else if(r.nodeType===8)if(r.data===Zt)a.push({type:2,index:s});else{let l=-1;for(;(l=r.data.indexOf(F,l+1))!==-1;)a.push({type:7,index:s}),l+=F.length-1}s++}}static createElement(t,e){const n=Q.createElement("template");return n.innerHTML=t,n}}function re(i,t,e=i,n){var o,c;if(t===Z)return t;let r=n!==void 0?(o=e._$Co)==null?void 0:o[n]:e._$Cl;const s=pe(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),s===void 0?r=void 0:(r=new s(i),r._$AT(i,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=r:e._$Cl=r),r!==void 0&&(t=re(i,r._$AS(i,t.values),r,n)),t}class pn{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,r=((t==null?void 0:t.creationScope)??Q).importNode(e,!0);q.currentNode=r;let s=q.nextNode(),o=0,c=0,a=n[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new ye(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new yn(s,this,t)),this._$AV.push(d),a=n[++c]}o!==(a==null?void 0:a.index)&&(s=q.nextNode(),o++)}return q.currentNode=Q,r}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class ye{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=re(this,t,e),pe(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==Z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):dn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&pe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Q.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=me.createElement(ti(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(e);else{const o=new pn(r,this),c=o.u(this.options);o.p(e),this.T(c),this._$AH=o}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new me(t)),e}k(t){it(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,r=0;for(const s of t)r===e.length?e.push(n=new ye(this.O(fe()),this.O(fe()),this,this.options)):n=e[r],n._$AI(s),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,r,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(t,e=this,n,r){const s=this.strings;let o=!1;if(s===void 0)t=re(this,t,e,0),o=!pe(t)||t!==this._$AH&&t!==Z,o&&(this._$AH=t);else{const c=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=re(this,c[n+a],e,a),d===Z&&(d=this._$AH[a]),o||(o=!pe(d)||d!==this._$AH[a]),d===E?t=E:t!==E&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}o&&!r&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class mn extends Ie{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class gn extends Ie{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class _n extends Ie{constructor(t,e,n,r,s){super(t,e,n,r,s),this.type=5}_$AI(t,e=this){if((t=re(this,t,e,0)??E)===Z)return;const n=this._$AH,r=t===E&&n!==E||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==E&&(n===E||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class yn{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){re(this,t)}}const Me=de.litHtmlPolyfillSupport;Me==null||Me(me,ye),(de.litHtmlVersions??(de.litHtmlVersions=[])).push("3.2.1");const vn=(i,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let r=n._$litPart$;if(r===void 0){const s=(e==null?void 0:e.renderBefore)??null;n._$litPart$=r=new ye(t.insertBefore(fe(),s),s,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class M extends ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vn(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Z}}var Ct;M._$litElement$=!0,M.finalized=!0,(Ct=globalThis.litElementHydrateSupport)==null||Ct.call(globalThis,{LitElement:M});const ke=globalThis.litElementPolyfillSupport;ke==null||ke({LitElement:M});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Pe=class Pe extends M{constructor(){super();_(this,"_changeDifficulty",()=>this._pointsPerClick=Pe.DIFFICULTY_POINTS[this.difficulty]);this.difficulty=1,this._hasIncrementScore=!1,this.play=!1}static get properties(){return{user:{type:String},difficulty:{type:Number},play:{type:Boolean,reflect:!0},_hasIncrementScore:{type:Boolean,state:!0},_pointsPerClick:{type:Number,state:!0}}}updated(e){super.updated(e),e.has("difficulty")&&this._changeDifficulty(),e.has("_hasIncrementScore")&&this._hasIncrementScore&&(this._hasIncrementScore=!1),this.user&&window.location.pathname!=="/touch-the-mole/game"?De.go("/touch-the-mole/game"):!this.user&&window.location.pathname!=="/touch-the-mole/home"&&De.go("/touch-the-mole/home")}handleLogin(e){this.user=e.detail}handleIncrement(){this._hasIncrementScore=!0}handleDifficultyChanged(e){this.difficulty=e.detail,this._changeDifficulty()}handleLogout(){this.user=""}handleToggleGame(){this.play=!this.play}};_(Pe,"DIFFICULTY_POINTS",Object.freeze({1:10,2:20,3:30,4:40}));let Ke=Pe;const wn=se`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    font-family: Poppins, sans-serif;
    font-size: 2.5em;
    background: radial-gradient(circle, rgb(231, 209, 155), rgb(174, 124, 86));
    width: 100%;
    height: 100%;
    gap: 20px;
    overflow: auto;
  }

  .game__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
  }

  .game__user {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #ae7b56;
    border-radius: 8px;
    padding: 5px 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid white;
  }

  .game__user img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0px 5px white;
  }

  .game__user p {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    color: white;
    margin: 0;
    text-shadow: 0 0px 1px white;
  }

  .game__logout {
    background-color: #ae7b56;
    border: 2px solid white;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .game__logout:hover {
    background-color: #e7d19b;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .game__logout img {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
  }

  .game__toggle-button {
    border: 2px solid white;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
    position: absolute;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
  }

  .game__toggle-button img {
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto;
  }

  .game__toggle-button--on {
    background-color: #2ecc71;
  }

  .game__toggle-button--pause {
    background-color: #e74c3c;
  }

  .game__toggle-button:hover {
    opacity: 0.9;
  }

  difficulty-panel {
    margin: 35px 0;
  }

  p {
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    .game__toggle-button {
      bottom: 50px;
    }

    :host {
      gap: 0;
    }
  }
`,Te=class Te extends M{constructor(){super();_(this,"getAnimationTime",()=>Te.DIFFICULTY_TIMINGS[this.difficulty]);_(this,"handleClickEvent",()=>this.dispatchEvent(new CustomEvent("game-panel:clickedCellActived")));this.columns=3,this.rows=3,this._active=0,this.play=!1}static get properties(){return{columns:{type:Number},rows:{type:Number},play:{type:Boolean,reflect:!0},difficulty:{type:Number},_cellActive:{type:Number,state:!0}}}updated(e){super.updated(e),(e.has("columns")||e.has("rows"))&&(this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)),e.has("play")&&(this.play?this._startRandomCellGeneration():this._stopRandomCellGeneration())}_updateGridStyle(){this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)}_startRandomCellGeneration(){this._stopRandomCellGeneration(),this._interval=setInterval(()=>{this._generateNumCellActived()},this.getAnimationTime())}_stopRandomCellGeneration(){this._interval&&(clearInterval(this._interval),this._interval=null)}_generateNumCellActived(){let e;do e=this._generateNumRandom();while(e===this._cellActive);this._cellActive=e}_generateNumRandom(){return Math.floor(Math.random()*this.columns*this.rows)+1}};_(Te,"DIFFICULTY_TIMINGS",Object.freeze({1:1e3,2:750,3:500,4:500}));let Je=Te;const bn=se`
  :host {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    grid-template-rows: repeat(var(--grid-rows), 1fr);
    width: 90vw;
    max-width: 600px;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(174, 123, 86), 0 10px 20px rgba(174, 123, 86);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Re(i,t,e){return i?t(i):e==null?void 0:e(i)}class $n extends M{constructor(){super();_(this,"_handleClick",()=>{this._clicked||(this.dispatchEvent(new CustomEvent("panel-cell:clicked")),navigator.vibrate&&navigator.vibrate(200)),this._clicked=!0});this._clicked=!1}static get properties(){return{animationTime:{type:Number},_clicked:{type:Boolean,state:!0}}}updated(e){super.updated(e),e.has("animationTime")&&this.style.setProperty("--mole-animation-duration",`${this.animationTime}ms`)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}}const An=se`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("./images/hole.webp");
    background-size: cover;
    background-position: center;
    --mole-animation-duration: 2s;
    aspect-ratio: 1 / 1;
  }

  .cell__mole {
    width: 70%;
    height: 70%;
    cursor: pointer;
    opacity: 0;
  }

  .cell__mole--normal {
    background: url("images/mole.png") no-repeat center;
    background-size: contain;
    animation: moleAnimation var(--mole-animation-duration) ease-in-out 1;
  }

  .cell__mole--hurt {
    background: url("images/mole-hurt.png") no-repeat center;
    background-size: contain;
    animation: none;
    transform: translateY(-7%);

    opacity: 100%;
  }

  @keyframes moleAnimation {
    0% {
      transform: translateY(0%);
      opacity: 100%;
    }

    20% {
      transform: translateY(-15%);
    }

    70% {
      transform: translateY(-15%);
      opacity: 100%;
    }

    90% {
      opacity: 0;
    }

    100% {
      transform: translateY(20%);
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xn=i=>(...t)=>({_$litDirective$:i,values:t});class Sn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii=xn(class extends Sn{constructor(i){var t;if(super(i),i.type!==En.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var n,r;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((n=this.nt)!=null&&n.has(s))&&this.st.add(s);return this.render(t)}const e=i.element.classList;for(const s of this.st)s in t||(e.remove(s),this.st.delete(s));for(const s in t){const o=!!t[s];o===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(o?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return Z}});class ni extends $n{constructor(){super(...arguments);_(this,"_renderMole",()=>{const e={"cell__mole--normal":!this._clicked,"cell__mole--hurt":this._clicked};return w`<div class="cell__mole ${ii(e)}"></div>`})}render(){return w` ${Re(this.animationTime,this._renderMole)}`}}_(ni,"styles",[An]);window.customElements.define("panel-cell",ni);class ri extends Je{constructor(){super(...arguments);_(this,"_renderActiveCell",()=>w`<panel-cell
      .animationTime=${this.getAnimationTime()}
      @panel-cell:clicked=${this.handleClickEvent}
    ></panel-cell>`);_(this,"_renderNormalCell",()=>w`<panel-cell></panel-cell>`)}render(){return w`${Array.from({length:this.columns*this.rows}).map((e,n)=>this._renderCell(n+1))}`}_renderCell(e){return w`
      ${Re(e==this._cellActive&&this.play,this._renderActiveCell,this._renderNormalCell)}
    `}}_(ri,"styles",[bn]);window.customElements.define("game-panel",ri);class Cn extends M{static get properties(){return{pointsPerClick:{type:Number},resetScore:{type:Boolean},incrementScore:{type:Boolean},_points:{type:Number,state:!0}}}constructor(){super(),this.resetScore=!1,this.pointsPerClick=1,this._points=0}updated(t){super.updated(t),t.has("incrementScore")&&this.incrementScore&&(this._points+=this.pointsPerClick,this.shadowRoot.querySelector(".score").classList.add("increment"),setTimeout(()=>{this.shadowRoot.querySelector(".score").classList.remove("increment"),this.incrementScore=!1},500)),t.has("resetScore")&&this.resetScore&&(this._points=0,this.resetScore=!1)}}const Rn=se`
  :host {
    display: flex;
    width: fit-content;
  }

  .score {
    font-family: "Russo One", sans-serif;
    font-size: 100px;
    font-weight: bold;
    text-align: center;
    transition: transform 0.3s ease, opacity 0.3s ease;
    color: #ffffff;
    text-shadow: 2px 2px 15px rgb(174, 124, 86);
  }

  .increment {
    animation: popScore 0.5s ease-in-out;
  }

  @keyframes popScore {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
      color: #ede1d8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;class si extends Cn{render(){return w` <div class="score">${this._points}</div>`}}_(si,"styles",[Rn]);window.customElements.define("score-panel",si);class Pn extends M{constructor(){super(...arguments);_(this,"handleLogin",()=>this.dispatchEvent(new CustomEvent("login-panel:login",{detail:this.user})))}static get properties(){return{user:{type:String}}}updated(e){super.updated(e)}handleInput(e){this.user=e.target.value}handleKeyDown(e){e.key==="Enter"&&this.handleLogin()}}const Tn=se`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100%;
  }

  .login-input {
    width: 300px;
    padding: 10px 20px;
    font-size: 18px;
    border: 2px solid #ae7b56;
    border-radius: 25px;
    outline: none;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .login-input:focus {
    border-color: #e7d19b;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background: white;
  }

  .login-input::placeholder {
    color: #ae7b56;
    opacity: 0.8;
  }

  .login-label {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    text-shadow: 0 1px 5px #ae7b56;
    color: #ffffff;
    margin-bottom: 10px;
    margin: 0;
  }

  .login-button {
    background-color: #ae7b56;
    color: white;
    font-size: 18px;
    padding: 10px 30px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: "Poppins", sans-serif;
  }

  .login-button:hover {
    background-color: #e7d19b;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .login-button:active {
    background-color: #874f38;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
  }
`;class oi extends Pn{render(){return w`
      <label class="login-label" for="name">Escribe tu usario</label>
      <input
        type="text"
        id="name"
        class="login-input"
        placeholder="Tu usuario aqui"
        @input=${this.handleInput}
        @keydown=${this.handleKeyDown}
      />
      <button class="login-button" @click=${this.handleLogin}>Jugar</button>
    `}}_(oi,"styles",[Tn]);window.customElements.define("login-panel",oi);class Xe extends M{static get properties(){return{difficulty:{type:Number}}}constructor(){super(),this.difficulty=1}handleChangeDifficulty(t){return this.difficulty=t,this.dispatchEvent(new CustomEvent("difficulty-panel:changed",{detail:this.difficulty}))}}_(Xe,"DIFFICULTY_LEVELS",Object.freeze(["Fácil","Media","Difícil","Experto"]));const In=se`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    max-width: 600px;
    box-sizing: border-box;
    padding: 0 15px;
  }

  .difficulty-option {
    padding: 10px;
    margin: 5px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    background-color: white;
    transition: background-color 0.3s ease;
    text-align: center;
    width: 100%;
  }

  .difficulty-option.selected {
    border: 3px solid #ffffff;
    background: radial-gradient(circle at center, rgb(174, 124, 86), #e7d19b);
    color: white;
  }

  .difficulty-option:hover {
    background-color: #ddd;
  }
`;class ai extends Xe{constructor(){super(...arguments);_(this,"_renderButton",(e,n)=>w`
      <div
        class="difficulty-option ${this.difficulty==n?"selected":""}"
        @click="${()=>this.handleChangeDifficulty(n)}"
      >
        ${e}
      </div>
    `)}render(){return w`
      ${Xe.DIFFICULTY_LEVELS.map((e,n)=>this._renderButton(e,n+1))}
    `}}_(ai,"styles",[In]);window.customElements.define("difficulty-panel",ai);class ci extends Ke{constructor(){super(...arguments);_(this,"_renderLoginPanel",()=>w` <login-panel @login-panel:login=${this.handleLogin}></login-panel> `);_(this,"_renderPage",()=>w`
    ${this._renderHeader()} ${this._renderScore()} ${this._renderGamePanel()}
    ${this._renderDifficultyPanel()}
  `);_(this,"_renderHeader",()=>w` <div class="game__header">
    <div class="game__user">
      <img src="./images/user.svg" />
      <p>${this.user}</p>
    </div>
    ${this._renderButtonStartOrPause()}
    <button @click=${this.handleLogout} class="game__logout">
      <img src="./images/logout.svg" />
    </button>
  </div>`);_(this,"_renderScore",()=>w` <score-panel
      .incrementScore=${this._hasIncrementScore}
      .pointsPerClick=${this._pointsPerClick}
    ></score-panel>`);_(this,"_renderGamePanel",()=>w` <game-panel
    .play=${this.play}
    .difficulty=${this.difficulty}
    @game-panel:clickedCellActived=${this.handleIncrement}
  ></game-panel>`);_(this,"_renderDifficultyPanel",()=>w` <difficulty-panel
      .difficulty=${this.difficulty}
      @difficulty-panel:changed=${this.handleDifficultyChanged}
    ></difficulty-panel>`);_(this,"_renderButtonStartOrPause",()=>{const e={"game__toggle-button--on":!this.play,"game__toggle-button--pause":this.play};return w` <button
      class="game__toggle-button ${ii(e)}"
      @click=${this.handleToggleGame}
    >
      ${Re(this.play,()=>w` <img src="./images/pause.svg" /> `,()=>w` <img src="./images/play.svg" /> `)}
    </button>`})}render(){return w` ${Re(this.user,this._renderPage,this._renderLoginPanel)}`}}_(ci,"styles",[wn]);window.customElements.define("touch-the-mole",ci);
