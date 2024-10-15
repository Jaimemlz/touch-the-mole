var hr=Object.defineProperty;var it=r=>{throw TypeError(r)};var dr=(r,t,e)=>t in r?hr(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var p=(r,t,e)=>dr(r,typeof t!="symbol"?t+"":t,e),ke=(r,t,e)=>t.has(r)||it("Cannot "+e);var g=(r,t,e)=>(ke(r,t,"read from private field"),e?e.call(r):t.get(r)),P=(r,t,e)=>t.has(r)?it("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),S=(r,t,e,i)=>(ke(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e),m=(r,t,e)=>(ke(r,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function ur(r){for(var t=[],e=0;e<r.length;){var i=r[e];if(i==="*"||i==="+"||i==="?"){t.push({type:"MODIFIER",index:e,value:r[e++]});continue}if(i==="\\"){t.push({type:"ESCAPED_CHAR",index:e++,value:r[e++]});continue}if(i==="{"){t.push({type:"OPEN",index:e,value:r[e++]});continue}if(i==="}"){t.push({type:"CLOSE",index:e,value:r[e++]});continue}if(i===":"){for(var n="",s=e+1;s<r.length;){var o=r.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){n+=r[s++];continue}break}if(!n)throw new TypeError("Missing parameter name at ".concat(e));t.push({type:"NAME",index:e,value:n}),e=s;continue}if(i==="("){var c=1,a="",s=e+1;if(r[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<r.length;){if(r[s]==="\\"){a+=r[s++]+r[s++];continue}if(r[s]===")"){if(c--,c===0){s++;break}}else if(r[s]==="("&&(c++,r[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));a+=r[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(e));if(!a)throw new TypeError("Missing pattern at ".concat(e));t.push({type:"PATTERN",index:e,value:a}),e=s;continue}t.push({type:"CHAR",index:e,value:r[e++]})}return t.push({type:"END",index:e,value:""}),t}function Qe(r,t){t===void 0&&(t={});for(var e=ur(r),i=t.prefixes,n=i===void 0?"./":i,s=t.delimiter,o=s===void 0?"/#?":s,c=[],a=0,d=0,h="",l=function(R){if(d<e.length&&e[d].type===R)return e[d++].value},f=function(R){var x=l(R);if(x!==void 0)return x;var k=e[d],Le=k.type,lr=k.index;throw new TypeError("Unexpected ".concat(Le," at ").concat(lr,", expected ").concat(R))},_=function(){for(var R="",x;x=l("CHAR")||l("ESCAPED_CHAR");)R+=x;return R},y=function(R){for(var x=0,k=o;x<k.length;x++){var Le=k[x];if(R.indexOf(Le)>-1)return!0}return!1},b=function(R){var x=c[c.length-1],k=R||(x&&typeof x=="string"?x:"");if(x&&!k)throw new TypeError('Must have text between two parameters, missing text after "'.concat(x.name,'"'));return!k||y(k)?"[^".concat(H(o),"]+?"):"(?:(?!".concat(H(k),")[^").concat(H(o),"])+?")};d<e.length;){var $=l("CHAR"),E=l("NAME"),ee=l("PATTERN");if(E||ee){var T=$||"";n.indexOf(T)===-1&&(h+=T,T=""),h&&(c.push(h),h=""),c.push({name:E||a++,prefix:T,suffix:"",pattern:ee||b(T),modifier:l("MODIFIER")||""});continue}var v=$||l("ESCAPED_CHAR");if(v){h+=v;continue}h&&(c.push(h),h="");var V=l("OPEN");if(V){var T=_(),M=l("NAME")||"",oe=l("PATTERN")||"",te=_();f("CLOSE"),c.push({name:M||(oe?a++:""),pattern:M&&!oe?b(T):oe,prefix:T,suffix:te,modifier:l("MODIFIER")||""});continue}f("END")}return c}function Rt(r,t){return Pt(Qe(r,t),t)}function Pt(r,t){t===void 0&&(t={});var e=Ze(t),i=t.encode,n=i===void 0?function(a){return a}:i,s=t.validate,o=s===void 0?!0:s,c=r.map(function(a){if(typeof a=="object")return new RegExp("^(?:".concat(a.pattern,")$"),e)});return function(a){for(var d="",h=0;h<r.length;h++){var l=r[h];if(typeof l=="string"){d+=l;continue}var f=a?a[l.name]:void 0,_=l.modifier==="?"||l.modifier==="*",y=l.modifier==="*"||l.modifier==="+";if(Array.isArray(f)){if(!y)throw new TypeError('Expected "'.concat(l.name,'" to not repeat, but got an array'));if(f.length===0){if(_)continue;throw new TypeError('Expected "'.concat(l.name,'" to not be empty'))}for(var b=0;b<f.length;b++){var $=n(f[b],l);if(o&&!c[h].test($))throw new TypeError('Expected all "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat($,'"'));d+=l.prefix+$+l.suffix}continue}if(typeof f=="string"||typeof f=="number"){var $=n(String(f),l);if(o&&!c[h].test($))throw new TypeError('Expected "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat($,'"'));d+=l.prefix+$+l.suffix;continue}if(!_){var E=y?"an array":"a string";throw new TypeError('Expected "'.concat(l.name,'" to be ').concat(E))}}return d}}function H(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ze(r){return r&&r.sensitive?"":"i"}function fr(r,t){if(!t)return r;for(var e=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,n=e.exec(r.source);n;)t.push({name:n[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),n=e.exec(r.source);return r}function pr(r,t,e){var i=r.map(function(n){return Tt(n,t,e).source});return new RegExp("(?:".concat(i.join("|"),")"),Ze(e))}function mr(r,t,e){return gr(Qe(r,e),t,e)}function gr(r,t,e){e===void 0&&(e={});for(var i=e.strict,n=i===void 0?!1:i,s=e.start,o=s===void 0?!0:s,c=e.end,a=c===void 0?!0:c,d=e.encode,h=d===void 0?function(x){return x}:d,l=e.delimiter,f=l===void 0?"/#?":l,_=e.endsWith,y=_===void 0?"":_,b="[".concat(H(y),"]|$"),$="[".concat(H(f),"]"),E=o?"^":"",ee=0,T=r;ee<T.length;ee++){var v=T[ee];if(typeof v=="string")E+=H(h(v));else{var V=H(h(v.prefix)),M=H(h(v.suffix));if(v.pattern)if(t&&t.push(v),V||M)if(v.modifier==="+"||v.modifier==="*"){var oe=v.modifier==="*"?"?":"";E+="(?:".concat(V,"((?:").concat(v.pattern,")(?:").concat(M).concat(V,"(?:").concat(v.pattern,"))*)").concat(M,")").concat(oe)}else E+="(?:".concat(V,"(").concat(v.pattern,")").concat(M,")").concat(v.modifier);else{if(v.modifier==="+"||v.modifier==="*")throw new TypeError('Can not repeat "'.concat(v.name,'" without a prefix and suffix'));E+="(".concat(v.pattern,")").concat(v.modifier)}else E+="(?:".concat(V).concat(M,")").concat(v.modifier)}}if(a)n||(E+="".concat($,"?")),E+=e.endsWith?"(?=".concat(b,")"):"$";else{var te=r[r.length-1],R=typeof te=="string"?$.indexOf(te[te.length-1])>-1:te===void 0;n||(E+="(?:".concat($,"(?=").concat(b,"))?")),R||(E+="(?=".concat($,"|").concat(b,")"))}return new RegExp(E,Ze(e))}function Tt(r,t,e){return r instanceof RegExp?fr(r,t):Array.isArray(r)?pr(r,t,e):mr(r,t,e)}function G(r){return typeof r=="object"&&!!r}function ue(r){return typeof r=="function"}function N(r){return typeof r=="string"}function Se(r=[]){return Array.isArray(r)?r:[r]}function z(r){return`[Vaadin.Router] ${r}`}class It extends Error{constructor(e){super(z(`Page not found (${e.pathname})`));p(this,"code");p(this,"context");this.context=e,this.code=404}}const X=Symbol("NotFoundResult");function Lt(r){return new It(r)}function kt(r){return(Array.isArray(r)?r[0]:r)??""}function Ce(r){return kt(r==null?void 0:r.path)}function _r(r){return Array.isArray(r)&&r.length>0?r:void 0}const De=new Map;De.set("|false",{keys:[],pattern:/(?:)/u});function nt(r){try{return decodeURIComponent(r)}catch{return r}}function yr(r,t,e=!1,i=[],n){const s=`${r}|${String(e)}`,o=kt(t);let c=De.get(s);if(!c){const h=[];c={keys:h,pattern:Tt(r,h,{end:e,strict:r===""})},De.set(s,c)}const a=c.pattern.exec(o);if(!a)return null;const d={...n};for(let h=1;h<a.length;h++){const l=c.keys[h-1],f=l.name,_=a[h];(_!==void 0||!Object.hasOwn(d,f))&&(l.modifier==="+"||l.modifier==="*"?d[f]=_?_.split(/[/?#]/u).map(nt):[]:d[f]=_&&nt(_))}return{keys:[...i,...c.keys],params:d,path:a[0]}}var vr=yr;function Ut(r,t,e,i,n){let s,o,c=0,a=Ce(r);return a.startsWith("/")&&(e&&(a=a.substring(1)),e=!0),{next(d){if(r===d)return{done:!0,value:void 0};r.__children??(r.__children=_r(r.children));const h=r.__children??[],l=!r.__children&&!r.children;if(!s&&(s=vr(a,t,l,i,n),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:r}};if(s&&h.length>0)for(;c<h.length;){if(!o){const _=h[c];_.parent=r;let y=s.path.length;y>0&&t.charAt(y)==="/"&&(y+=1),o=Ut(_,t.substring(y),e,s.keys,s.params)}const f=o.next(d);if(!f.done)return{done:!1,value:f.value};o=null,c+=1}return{done:!0,value:void 0}}}}var wr=Ut;function br(r){if(ue(r.route.action))return r.route.action(r)}function $r(r,t){let e=r;for(;e;)if(e=e.parent,e===t)return!0;return!1}function Er(r){return!!r&&typeof r=="object"&&"next"in r&&"params"in r&&"result"in r&&"route"in r}class Ar extends Error{constructor(e,i){let n=`Path '${e.pathname}' is not properly resolved due to an error.`;const s=Ce(e.route);s&&(n+=` Resolution had failed on route: '${s}'`);super(n,i);p(this,"code");p(this,"context");this.code=i==null?void 0:i.code,this.context=e}warn(){console.warn(this.message)}}function xr(r,t){var n;const{path:e,route:i}=t;if(i&&!i.__synthetic){const s={path:e,route:i};if(i.parent&&r.chain)for(let o=r.chain.length-1;o>=0&&r.chain[o].route!==i.parent;o--)r.chain.pop();(n=r.chain)==null||n.push(s)}}var q,C;class Nt{constructor(t,{baseUrl:e="",context:i,errorHandler:n,resolveRoute:s=br}={}){p(this,"baseUrl");P(this,q);p(this,"errorHandler");p(this,"resolveRoute");P(this,C);if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=n,this.resolveRoute=s,Array.isArray(t)?S(this,C,{__children:t,__synthetic:!0,action:()=>{},path:""}):S(this,C,{...t,parent:void 0}),S(this,q,{...i,hash:"",async next(){return X},params:{},pathname:"",resolver:this,route:g(this,C),search:"",chain:[]})}get root(){return g(this,C)}get context(){return g(this,q)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...g(this,C).__children??[]]}removeRoutes(){g(this,C).__children=[]}async resolve(t){const e=this,i={...g(this,q),...N(t)?{pathname:t}:t,next:d},n=wr(g(this,C),this.__normalizePathname(i.pathname)??i.pathname,!!this.baseUrl),s=this.resolveRoute;let o=null,c=null,a=i;async function d(h=!1,l=(_=>(_=o==null?void 0:o.value)==null?void 0:_.route)(),f){var $,E;const y=f===null?($=o==null?void 0:o.value)==null?void 0:$.route:void 0;if(o=c??n.next(y),c=null,!h&&(o.done||!$r(o.value.route,l)))return c=o,X;if(o.done)throw Lt(i);a={...i,params:o.value.params,route:o.value.route,chain:(E=a.chain)==null?void 0:E.slice()},xr(a,o.value);const b=await s(a);return b!=null&&b!==X?(a.result=Er(b)?b.result:b,S(e,q,a),a):await d(h,l,b)}try{return await d(!0,g(this,C))}catch(h){const l=h instanceof It?h:new Ar(a,{code:500,cause:h});if(this.errorHandler)return a.result=this.errorHandler(l),a;throw h}}setRoutes(t){g(this,C).__children=[...Se(t)]}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,i=t.startsWith("/")?new URL(e).origin+t:`./${t}`,n=new URL(i,e).href;if(n.startsWith(e))return n.slice(e.length)}addRoutes(t){return g(this,C).__children=[...g(this,C).__children??[],...Se(t)],this.getRoutes()}}q=new WeakMap,C=new WeakMap;function Ot(r,t,e,i){var s;const n=t.name??(i==null?void 0:i(t));if(n&&(r.has(n)?(s=r.get(n))==null||s.push(t):r.set(n,[t])),Array.isArray(e))for(const o of e)o.parent=t,Ot(r,o,o.__children??o.children,i)}function st(r,t){const e=r.get(t);if(e){if(e.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return e[0]}}function Sr(r,t={}){if(!(r instanceof Nt))throw new TypeError("An instance of Resolver is expected");const e=new Map,i=new Map;return(n,s)=>{let o=st(i,n);if(!o&&(i.clear(),Ot(i,r.root,r.root.__children,t.cacheKeyProvider),o=st(i,n),!o))throw new Error(`Route "${n}" not found`);let c=o.fullPath?e.get(o.fullPath):void 0;if(!c){let h=Ce(o),l=o.parent;for(;l;){const y=Ce(l);y&&(h=`${y.replace(/\/$/u,"")}/${h.replace(/^\//u,"")}`),l=l.parent}const f=Qe(h),_=Object.create(null);for(const y of f)N(y)||(_[y.name]=!0);c={keys:_,tokens:f},e.set(h,c),o.fullPath=h}let d=Pt(c.tokens,{encode:encodeURIComponent,...t})(s)||"/";if(t.stringifyQueryParams&&s){const h={};for(const[f,_]of Object.entries(s))!(f in c.keys)&&_&&(h[f]=_);const l=t.stringifyQueryParams(h);l&&(d+=l.startsWith("?")?l:`?${l}`)}return d}}var Cr=Sr;const Rr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,we=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Pr(){function r(){return!0}return Mt(r)}function Tr(){try{return Ir()?!0:Lr()?we?!kr():!Pr():!1}catch{return!1}}function Ir(){return localStorage.getItem("vaadin.developmentmode.force")}function Lr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function kr(){return!!(we&&Object.keys(we).map(t=>we[t]).filter(t=>t.productionMode).length>0)}function Mt(r,t){if(typeof r!="function")return;const e=Rr.exec(r.toString());if(e)try{r=new Function(e[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(t)}window.Vaadin=window.Vaadin||{};const ot=function(r,t){if(window.Vaadin.developmentMode)return Mt(r,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Tr());function Ur(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/}const Nr=function(){if(typeof ot=="function")return ot(Ur)};function Or(r,t=window.Vaadin??(window.Vaadin={})){t.registrations??(t.registrations=[]),t.registrations.push({is:"@vaadin/router",version:"2.0.0-rc4"})}Or();Nr();const Mr=r=>{const t=getComputedStyle(r).getPropertyValue("animation-name");return t&&t!=="none"},Dr=(r,t)=>{const e=()=>{r.removeEventListener("animationend",e),t()};r.addEventListener("animationend",e)};async function Hr(r,t){return r.classList.add(t),await new Promise(e=>{if(Mr(r)){const i=r.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;r.setAttribute("style",`position: absolute; ${n}`),Dr(r,()=>{r.classList.remove(t),r.removeAttribute("style"),e()})}else r.classList.remove(t),e()})}var at=Hr;function Dt(r){if(!r||!N(r.path))throw new Error(z('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!ue(r.action)&&!Array.isArray(r.children)&&!ue(r.children)&&!N(r.component)&&!N(r.redirect))throw new Error(z(`Expected route config "${r.path}" to include either "component, redirect" or "action" function but none found.`));r.redirect&&["bundle","component"].forEach(t=>{t in r&&console.warn(z(`Route config "${String(r.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function ct(r){Se(r).forEach(t=>Dt(t))}function Fr({next:r,...t}){return t}function be(r,t){const e=t.__effectiveBaseUrl;return e?new URL(r.replace(/^\//u,""),e).pathname:r}function Ht(r){return r.map(t=>t.path).reduce((t,e)=>e.length?`${t.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`:t,"")}function Br(r){return Ht(r.map(t=>t.route))}function I({chain:r=[],hash:t="",params:e={},pathname:i="",redirectFrom:n,resolver:s,search:o=""},c){const a=r.map(d=>d.route);return{baseUrl:(s==null?void 0:s.baseUrl)??"",getUrl:(d={})=>s?be(Rt(Br(r))({...e,...d}),s):"",hash:t,params:e,pathname:i,redirectFrom:n,route:c??(Array.isArray(a)?a.at(-1):void 0)??null,routes:a,search:o,searchParams:new URLSearchParams(o)}}function lt(r,t){const e={...r.params};return{redirect:{from:r.pathname,params:e,pathname:t}}}function zr(r,t){if(t.location=I(r),r.chain){const e=r.chain.map(i=>i.route).indexOf(r.route);r.chain[e].element=t}return t}function $e(r,t,...e){if(typeof r=="function")return r.apply(t,e)}function ht(r,t,...e){return i=>i&&G(i)&&("cancel"in i||"redirect"in i)?i:$e(t==null?void 0:t[r],t,...e)}function jr(r,t){if(!Array.isArray(r)&&!G(r))throw new Error(z(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(r)}`));const e=Se(r);e.forEach(i=>Dt(i)),t.__children=e}function le(r,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:t}))}function Vr(r){if(typeof r!="object")return String(r);const[t="Unknown"]=/ (.*)\]$/u.exec(String(r))??[];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(r)}`:t}function Wr(r){const{port:t,protocol:e}=r,s=e==="http:"&&t==="80"||e==="https:"&&t==="443"?r.hostname:r.host;return`${e}//${s}`}function dt(r){if(r instanceof Element)return r.nodeName.toLowerCase()}function ut(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let t=r.target;const e=r instanceof MouseEvent?r.composedPath():r.path??[];for(let a=0;a<e.length;a++){const d=e[a];if("nodeName"in d&&d.nodeName.toLowerCase()==="a"){t=d;break}}for(;t&&t instanceof Node&&dt(t)!=="a";)t=t.parentNode;if(!t||dt(t)!=="a")return;const i=t;if(i.target&&i.target.toLowerCase()!=="_self"||i.hasAttribute("download")||i.hasAttribute("router-ignore")||i.pathname===window.location.pathname&&i.hash!==""||(i.origin||Wr(i))!==window.location.origin)return;const{hash:s,pathname:o,search:c}=i;le("go",{hash:s,pathname:o,search:c})&&r instanceof MouseEvent&&(r.preventDefault(),r.type==="click"&&window.scrollTo(0,0))}const Gr={activate(){window.document.addEventListener("click",ut)},inactivate(){window.document.removeEventListener("click",ut)}};var Yr=Gr;function ft(r){if(r.state==="vaadin-router-ignore")return;const{hash:t,pathname:e,search:i}=window.location;le("go",{hash:t,pathname:e,search:i})}const qr={activate(){window.addEventListener("popstate",ft)},inactivate(){window.removeEventListener("popstate",ft)}};var Kr=qr;let pt=[];const Jr={CLICK:Yr,POPSTATE:Kr};function mt(r=[]){pt.forEach(t=>t.inactivate()),r.forEach(t=>t.activate()),pt=r}const Xr=256;function ae(){return{cancel:!0}}const gt={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return X}};var _e,ie,ye,K,B,J,U,L,u,Ft,Bt,Ee,Fe,zt,jt,Be,ze,je,D,Ve,We,Ae,Ge,Vt,Wt,Gt,Yt,qt,Kt,Ye;class He extends Nt{constructor(e,i){const n=document.head.querySelector("base"),s=n==null?void 0:n.getAttribute("href");super([],{baseUrl:s?new URL(s,document.URL).href.replace(/[^/]*$/u,""):void 0,...i,resolveRoute:async o=>await m(this,u,Ft).call(this,o)});P(this,u);p(this,"location",I({resolver:this}));p(this,"ready",Promise.resolve(this.location));P(this,_e,new WeakSet);P(this,ie,new WeakSet);P(this,ye,m(this,u,Ye).bind(this));P(this,K,0);P(this,B);p(this,"__previousContext");P(this,J);P(this,U,null);P(this,L,null);mt(Object.values(Jr)),this.setOutlet(e),this.subscribe()}setOutlet(e){e&&m(this,u,We).call(this,e),S(this,B,e)}getOutlet(){return g(this,B)}async setRoutes(e,i=!1){return this.__previousContext=void 0,S(this,J,void 0),ct(e),super.setRoutes(e),i||m(this,u,Ye).call(this),await this.ready}addRoutes(e){return ct(e),super.addRoutes(e)}async render(e,i=!1){S(this,K,g(this,K)+1);const n=g(this,K),s={...gt,...N(e)?{hash:"",search:"",pathname:e}:e,__renderId:n};return this.ready=m(this,u,Bt).call(this,s,i),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",g(this,ye))}unsubscribe(){window.removeEventListener("vaadin-router-go",g(this,ye))}static setTriggers(...e){mt(e)}urlForName(e,i){return g(this,J)||S(this,J,Cr(this,{cacheKeyProvider(n){return"component"in n&&typeof n.component=="string"?n.component:void 0}})),be(g(this,J).call(this,e,i??void 0),this)}urlForPath(e,i){return be(Rt(e)(i??void 0),this)}static go(e){const{pathname:i,search:n,hash:s}=N(e)?new URL(e,"http://a"):e;return le("go",{pathname:i,search:n,hash:s})}}_e=new WeakMap,ie=new WeakMap,ye=new WeakMap,K=new WeakMap,B=new WeakMap,J=new WeakMap,U=new WeakMap,L=new WeakMap,u=new WeakSet,Ft=async function(e){const{route:i}=e;if(ue(i.children)){let s=await i.children(Fr(e));ue(i.children)||({children:s}=i),jr(s,i)}const n={component:s=>{const o=document.createElement(s);return g(this,ie).add(o),o},prevent:ae,redirect:s=>lt(e,s)};return await Promise.resolve().then(async()=>{if(m(this,u,D).call(this,e))return await $e(i.action,i,e,n)}).then(s=>{if(s!=null&&(typeof s=="object"||typeof s=="symbol")&&(s instanceof HTMLElement||s===X||G(s)&&"redirect"in s))return s;if(N(i.redirect))return n.redirect(i.redirect)}).then(s=>{if(s!=null)return s;if(N(i.component))return n.component(i.component)})},Bt=async function(e,i){var s;const{__renderId:n}=e;try{const o=await this.resolve(e),c=await m(this,u,Ee).call(this,o);if(!m(this,u,D).call(this,c))return this.location;const a=this.__previousContext;if(c===a)return m(this,u,Ae).call(this,a,!0),this.location;if(this.location=I(c),i&&m(this,u,Ae).call(this,c,n===1),le("location-changed",{router:this,location:this.location}),c.__skipAttach)return m(this,u,Ge).call(this,c,a),this.__previousContext=c,this.location;m(this,u,Vt).call(this,c,a);const d=m(this,u,Kt).call(this,c);if(m(this,u,qt).call(this,c),m(this,u,Yt).call(this,c,a),await d,m(this,u,D).call(this,c))return m(this,u,Wt).call(this),this.__previousContext=c,this.location}catch(o){if(n===g(this,K)){i&&m(this,u,Ae).call(this,this.context);for(const c of((s=g(this,B))==null?void 0:s.children)??[])c.remove();throw this.location=I(Object.assign(e,{resolver:this})),le("error",{router:this,error:o,...e}),o}}return this.location},Ee=async function(e,i=e){const n=await m(this,u,Fe).call(this,i),o=n!==i?n:e,a=be(Ht(n.chain??[]),this)===n.pathname,d=async(l,f=l.route,_)=>{const y=await l.next(!1,f,_);return y===null||y===X?a?l:f.parent!=null?await d(l,f.parent,y):y:y},h=await d(n);if(h==null||h===X)throw Lt(o);return h!==n?await m(this,u,Ee).call(this,o,h):await m(this,u,zt).call(this,n)},Fe=async function(e){const{result:i}=e;if(i instanceof HTMLElement)return zr(e,i),e;if(i&&"redirect"in i){const n=await m(this,u,Ve).call(this,i.redirect,e.__redirectCount,e.__renderId);return await m(this,u,Fe).call(this,n)}throw i instanceof Error?i:new Error(z(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Vr(i)}". Double check the action return value for the route.`))},zt=async function(e){return await m(this,u,jt).call(this,e).then(async i=>i===this.__previousContext||i===e?i:await m(this,u,Ee).call(this,i))},jt=async function(e){const i=this.__previousContext??{},n=i.chain??[],s=e.chain??[];let o=Promise.resolve(void 0);const c=a=>lt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,s.length)&&!(n[a].route!==s[a].route||n[a].path!==s[a].path&&n[a].element!==s[a].element||!m(this,u,je).call(this,n[a].element,s[a].element));e.__divergedChainIndex++,a++);if(e.__skipAttach=s.length===n.length&&e.__divergedChainIndex===s.length&&m(this,u,je).call(this,e.result,i.result),e.__skipAttach){for(let a=s.length-1;a>=0;a--)o=m(this,u,Be).call(this,o,e,{prevent:ae},n[a]);for(let a=0;a<s.length;a++)o=m(this,u,ze).call(this,o,e,{prevent:ae,redirect:c},s[a]),n[a].element.location=I(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)o=m(this,u,Be).call(this,o,e,{prevent:ae},n[a])}if(!e.__skipAttach)for(let a=0;a<s.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=I(e,n[a].route)):(o=m(this,u,ze).call(this,o,e,{prevent:ae,redirect:c},s[a]),s[a].element&&(s[a].element.location=I(e,s[a].route)));return await o.then(async a=>{if(a&&G(a)){if("cancel"in a&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in a)return await m(this,u,Ve).call(this,a.redirect,e.__redirectCount,e.__renderId)}return e})},Be=async function(e,i,n,s){const o=I(i);let c=await e;if(m(this,u,D).call(this,i)&&(c=ht("onBeforeLeave",s.element,o,n,this)(c)),!(G(c)&&"redirect"in c))return c},ze=async function(e,i,n,s){const o=I(i,s.route),c=await e;if(m(this,u,D).call(this,i))return ht("onBeforeEnter",s.element,o,n,this)(c)},je=function(e,i){return e instanceof Element&&i instanceof Element?g(this,ie).has(e)&&g(this,ie).has(i)?e.localName===i.localName:e===i:!1},D=function(e){return e.__renderId===g(this,K)},Ve=async function(e,i=0,n=0){if(i>Xr)throw new Error(z(`Too many redirects when rendering ${e.from}`));return await this.resolve({...gt,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:i+1,__renderId:n})},We=function(e=g(this,B)){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(z(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))},Ae=function({pathname:e,search:i="",hash:n=""},s){if(window.location.pathname!==e||window.location.search!==i||window.location.hash!==n){const o=s?"replaceState":"pushState";window.history[o](null,document.title,e+i+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},Ge=function(e,i){var s;let n=g(this,B);for(let o=0;o<(e.__divergedChainIndex??0);o++){const c=(s=i==null?void 0:i.chain)==null?void 0:s[o].element;if(c)if(c.parentNode===n)e.chain[o].element=c,n=c;else break}return n},Vt=function(e,i){var o;m(this,u,We).call(this),m(this,u,Gt).call(this);const n=m(this,u,Ge).call(this,e,i);S(this,U,[]),S(this,L,Array.from((n==null?void 0:n.children)??[]).filter(c=>g(this,_e).has(c)&&c!==e.result));let s=n;for(let c=e.__divergedChainIndex??0;c<(((o=e.chain)==null?void 0:o.length)??0);c++){const a=e.chain[c].element;a&&(s==null||s.appendChild(a),g(this,_e).add(a),s===n&&g(this,U).push(a),s=a)}},Wt=function(){if(g(this,L))for(const e of g(this,L))e.remove();S(this,L,null),S(this,U,null)},Gt=function(){if(g(this,L)&&g(this,U)){for(const e of g(this,U))e.remove();S(this,L,null),S(this,U,null)}},Yt=function(e,i){var n;if(!(!(i!=null&&i.chain)||e.__divergedChainIndex==null))for(let s=i.chain.length-1;s>=e.__divergedChainIndex&&m(this,u,D).call(this,e);s--){const o=i.chain[s].element;if(o)try{const c=I(e);$e(o.onAfterLeave,o,c,{},this)}finally{if((n=g(this,L))!=null&&n.includes(o))for(const c of o.children)c.remove()}}},qt=function(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let i=e.__divergedChainIndex;i<e.chain.length&&m(this,u,D).call(this,e);i++){const n=e.chain[i].element;if(n){const s=I(e,e.chain[i].route);$e(n.onAfterEnter,n,s,{},this)}}},Kt=async function(e){var a,d;const i=(a=g(this,L))==null?void 0:a[0],n=(d=g(this,U))==null?void 0:d[0],s=[],{chain:o=[]}=e;let c;for(let h=o.length-1;h>=0;h--)if(o[h].route.animate){c=o[h].route.animate;break}if(i&&n&&c){const h=G(c)&&c.leave?c.leave:"leaving",l=G(c)&&c.enter?c.enter:"entering";s.push(at(i,h)),s.push(at(n,l))}return await Promise.all(s),e},Ye=function(e){const{pathname:i,search:n,hash:s}=e instanceof CustomEvent?e.detail:window.location;N(this.__normalizePathname(i))&&(e!=null&&e.preventDefault&&e.preventDefault(),this.render({pathname:i,search:n,hash:s},!0))};const Qr=document.querySelector("touch-the-mole"),Zr=new He(Qr);Zr.setRoutes([{path:"/touch-the-mole/home",component:"div"},{path:"/touch-the-mole/game",component:"div"},{path:"(.*)",action:(r,t)=>t.redirect("/touch-the-mole/game")}]);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=globalThis,et=xe.ShadowRoot&&(xe.ShadyCSS===void 0||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),_t=new WeakMap;let Jt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(et&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=_t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&_t.set(e,t))}return t}toString(){return this.cssText}};const ei=r=>new Jt(typeof r=="string"?r:r+"",void 0,tt),se=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new Jt(e,r,tt)},ti=(r,t)=>{if(et)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=xe.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)}},yt=et?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ei(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ri,defineProperty:ii,getOwnPropertyDescriptor:ni,getOwnPropertyNames:si,getOwnPropertySymbols:oi,getPrototypeOf:ai}=Object,j=globalThis,vt=j.trustedTypes,ci=vt?vt.emptyScript:"",Ue=j.reactiveElementPolyfillSupport,he=(r,t)=>r,qe={toAttribute(r,t){switch(t){case Boolean:r=r?ci:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Xt=(r,t)=>!ri(r,t),wt={attribute:!0,type:String,converter:qe,reflect:!1,hasChanged:Xt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),j.litPropertyMetadata??(j.litPropertyMetadata=new WeakMap);class re extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&ii(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=ni(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const c=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wt}static _$Ei(){if(this.hasOwnProperty(he("elementProperties")))return;const t=ai(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(he("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he("properties"))){const e=this.properties,i=[...si(e),...oi(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(yt(n))}else t!==void 0&&e.push(yt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ti(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:qe).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:qe;this._$Em=n,this[n]=c.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Xt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}re.elementStyles=[],re.shadowRootOptions={mode:"open"},re[he("elementProperties")]=new Map,re[he("finalized")]=new Map,Ue==null||Ue({ReactiveElement:re}),(j.reactiveElementVersions??(j.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis,Re=de.trustedTypes,bt=Re?Re.createPolicy("lit-html",{createHTML:r=>r}):void 0,Qt="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Zt="?"+F,li=`<${Zt}>`,Q=document,fe=()=>Q.createComment(""),pe=r=>r===null||typeof r!="object"&&typeof r!="function",rt=Array.isArray,hi=r=>rt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ne=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,Et=/>/g,W=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,xt=/"/g,er=/^(?:script|style|textarea|title)$/i,di=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),w=di(1),Z=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),St=new WeakMap,Y=Q.createTreeWalker(Q,129);function tr(r,t){if(!rt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return bt!==void 0?bt.createHTML(t):t}const ui=(r,t)=>{const e=r.length-1,i=[];let n,s=t===2?"<svg>":t===3?"<math>":"",o=ce;for(let c=0;c<e;c++){const a=r[c];let d,h,l=-1,f=0;for(;f<a.length&&(o.lastIndex=f,h=o.exec(a),h!==null);)f=o.lastIndex,o===ce?h[1]==="!--"?o=$t:h[1]!==void 0?o=Et:h[2]!==void 0?(er.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=W):h[3]!==void 0&&(o=W):o===W?h[0]===">"?(o=n??ce,l=-1):h[1]===void 0?l=-2:(l=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?W:h[3]==='"'?xt:At):o===xt||o===At?o=W:o===$t||o===Et?o=ce:(o=W,n=void 0);const _=o===W&&r[c+1].startsWith("/>")?" ":"";s+=o===ce?a+li:l>=0?(i.push(d),a.slice(0,l)+Qt+a.slice(l)+F+_):a+F+(l===-2?c:_)}return[tr(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class me{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const c=t.length-1,a=this.parts,[d,h]=ui(t,e);if(this.el=me.createElement(d,i),Y.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(n=Y.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const l of n.getAttributeNames())if(l.endsWith(Qt)){const f=h[o++],_=n.getAttribute(l).split(F),y=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:y[2],strings:_,ctor:y[1]==="."?pi:y[1]==="?"?mi:y[1]==="@"?gi:Ie}),n.removeAttribute(l)}else l.startsWith(F)&&(a.push({type:6,index:s}),n.removeAttribute(l));if(er.test(n.tagName)){const l=n.textContent.split(F),f=l.length-1;if(f>0){n.textContent=Re?Re.emptyScript:"";for(let _=0;_<f;_++)n.append(l[_],fe()),Y.nextNode(),a.push({type:2,index:++s});n.append(l[f],fe())}}}else if(n.nodeType===8)if(n.data===Zt)a.push({type:2,index:s});else{let l=-1;for(;(l=n.data.indexOf(F,l+1))!==-1;)a.push({type:7,index:s}),l+=F.length-1}s++}}static createElement(t,e){const i=Q.createElement("template");return i.innerHTML=t,i}}function ne(r,t,e=r,i){var o,c;if(t===Z)return t;let n=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const s=pe(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=n:e._$Cl=n),n!==void 0&&(t=ne(r,n._$AS(r,t.values),n,i)),t}class fi{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=((t==null?void 0:t.creationScope)??Q).importNode(e,!0);Y.currentNode=n;let s=Y.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new ve(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new _i(s,this,t)),this._$AV.push(d),a=i[++c]}o!==(a==null?void 0:a.index)&&(s=Y.nextNode(),o++)}return Y.currentNode=Q,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ve{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ne(this,t,e),pe(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==Z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):hi(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==A&&pe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Q.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=me.createElement(tr(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(e);else{const o=new fi(n,this),c=o.u(this.options);o.p(e),this.T(c),this._$AH=o}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new me(t)),e}k(t){rt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new ve(this.O(fe()),this.O(fe()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(s===void 0)t=ne(this,t,e,0),o=!pe(t)||t!==this._$AH&&t!==Z,o&&(this._$AH=t);else{const c=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=ne(this,c[i+a],e,a),d===Z&&(d=this._$AH[a]),o||(o=!pe(d)||d!==this._$AH[a]),d===A?t=A:t!==A&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}o&&!n&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class pi extends Ie{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class mi extends Ie{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class gi extends Ie{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=ne(this,t,e,0)??A)===Z)return;const i=this._$AH,n=t===A&&i!==A||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==A&&(i===A||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class _i{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ne(this,t)}}const Oe=de.litHtmlPolyfillSupport;Oe==null||Oe(me,ve),(de.litHtmlVersions??(de.litHtmlVersions=[])).push("3.2.1");const yi=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let n=i._$litPart$;if(n===void 0){const s=(e==null?void 0:e.renderBefore)??null;i._$litPart$=n=new ve(t.insertBefore(fe(),s),s,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class O extends re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Z}}var Ct;O._$litElement$=!0,O.finalized=!0,(Ct=globalThis.litElementHydrateSupport)==null||Ct.call(globalThis,{LitElement:O});const Me=globalThis.litElementPolyfillSupport;Me==null||Me({LitElement:O});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Pe=class Pe extends O{constructor(){super();p(this,"_changeDifficulty",()=>this._pointsPerClick=Pe.DIFFICULTY_POINTS[this.difficulty]);this.difficulty=1,this._hasIncrementScore=!1,this._hasDecrementScore=!1,this.play=!1,this.user="Jaime"}static get properties(){return{user:{type:String},difficulty:{type:Number},play:{type:Boolean,reflect:!0},_hasIncrementScore:{type:Boolean,state:!0},_hasDecrementScore:{type:Boolean,state:!0},_pointsPerClick:{type:Number,state:!0}}}updated(e){super.updated(e),e.has("difficulty")&&this._changeDifficulty(),e.has("_hasIncrementScore")&&this._hasIncrementScore&&(this._hasIncrementScore=!1),e.has("_hasDecrementScore")&&this._hasDecrementScore&&(this._hasDecrementScore=!1),this.user&&window.location.pathname!=="/touch-the-mole/game"?He.go("/touch-the-mole/game"):!this.user&&window.location.pathname!=="/touch-the-mole/home"&&He.go("/touch-the-mole/home")}handleLogin(e){this.user=e.detail}handleIncrement(){this._hasIncrementScore=!0}handleDecrement(){this._hasDecrementScore=!0}handleDifficultyChanged(e){this.difficulty=e.detail,this._changeDifficulty()}handleLogout(){this.user=""}handleToggleGame(){this.play=!this.play}};p(Pe,"DIFFICULTY_POINTS",Object.freeze({1:10,2:20,3:30,4:40}));let Ke=Pe;const vi=se`
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
`,Te=class Te extends O{constructor(){super();p(this,"getAnimationTime",()=>Te.DIFFICULTY_TIMINGS[this.difficulty]);p(this,"_hasTwentyPercentChance",()=>Math.random()<.2);p(this,"handleClickEvent",()=>this.dispatchEvent(new CustomEvent("game-panel:clickedCorrectCell")));p(this,"handleErrorClickEvent",()=>this.dispatchEvent(new CustomEvent("game-panel:clickedErrorCell")));this.columns=3,this.rows=3,this._active=0,this.play=!1}static get properties(){return{columns:{type:Number},rows:{type:Number},play:{type:Boolean,reflect:!0},difficulty:{type:Number},_cellActive:{type:Number,state:!0}}}updated(e){super.updated(e),(e.has("columns")||e.has("rows"))&&(this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)),e.has("play")&&(this.play?this._startRandomCellGeneration():this._stopRandomCellGeneration())}_updateGridStyle(){this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)}_startRandomCellGeneration(){this._stopRandomCellGeneration(),this._interval=setInterval(()=>{this._generateNumCellActived()},this.getAnimationTime())}_stopRandomCellGeneration(){this._interval&&(clearInterval(this._interval),this._interval=null)}_generateNumCellActived(){let e;do e=this._generateNumRandom();while(e===this._cellActive);this._cellActive=e}_generateNumRandom(){return Math.floor(Math.random()*this.columns*this.rows)+1}};p(Te,"DIFFICULTY_TIMINGS",Object.freeze({1:1e3,2:750,3:500,4:400}));let Je=Te;const wi=se`
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
 */function ge(r,t,e){return r?t(r):e==null?void 0:e(r)}class bi extends O{constructor(){super();p(this,"_handleClick",()=>{this._clicked||(this.dispatchEvent(new CustomEvent("panel-cell:clicked")),navigator.vibrate&&navigator.vibrate(200)),this._clicked=!0});this._clicked=!1}static get properties(){return{isErrorCell:{type:Boolean},animationTime:{type:Number},_clicked:{type:Boolean,state:!0}}}updated(e){super.updated(e),e.has("animationTime")&&this.style.setProperty("--mole-animation-duration",`${this.animationTime}ms`)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}}const $i=se`
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

  .cell__mole-error--normal {
    width: 55%;
    height: 55%;
    background: url("images/mole_evil.png") no-repeat center;
    background-size: contain;
    animation: moleAnimationError var(--mole-animation-duration) ease-in-out 1;
  }

  .cell__mole-error--hurt {
    background: url("images/mole_evil.png") no-repeat center;
    background-size: contain;
    animation: vibrate 0.2s ease-in-out 3;
    transform: translateY(-7%);
    opacity: 100%;
    width: 60%;
    height: 60%;
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

  @keyframes moleAnimationError {
    0% {
      transform: translateY(0%);
      opacity: 100%;
    }

    20% {
      transform: translateY(-7%);
    }

    70% {
      transform: translateY(-7%);
      opacity: 100%;
    }

    90% {
      opacity: 0;
    }

    100% {
      transform: translateY(20%);
    }
  }

  @keyframes vibrate {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(2px, -2px);
    }
    60% {
      transform: translate(-2px, -2px);
    }
    80% {
      transform: translate(2px, 2px);
    }
    100% {
      transform: translate(0);
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ai=r=>(...t)=>({_$litDirective$:r,values:t});class xi{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr=Ai(class extends xi{constructor(r){var t;if(super(r),r.type!==Ei.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var i,n;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(t)}const e=r.element.classList;for(const s of this.st)s in t||(e.remove(s),this.st.delete(s));for(const s in t){const o=!!t[s];o===this.st.has(s)||(n=this.nt)!=null&&n.has(s)||(o?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return Z}});class ir extends bi{constructor(){super(...arguments);p(this,"_renderMole",()=>{const e={"cell__mole--normal":!this._clicked,"cell__mole--hurt":this._clicked,"cell__mole-error--normal":!this._clicked&&this.isErrorCell,"cell__mole-error--hurt":this._clicked&&this.isErrorCell};return w`<div class="cell__mole ${rr(e)}"></div>`})}render(){return w` ${ge(this.animationTime,this._renderMole)}`}}p(ir,"styles",[$i]);window.customElements.define("panel-cell",ir);class nr extends Je{constructor(){super(...arguments);p(this,"_renderActiveCell",()=>w`${ge(this._hasTwentyPercentChance(),this._renderErrorCell,this._renderCorrectCell)}`);p(this,"_renderCorrectCell",()=>w`<panel-cell
      .animationTime=${this.getAnimationTime()}
      @panel-cell:clicked=${this.handleClickEvent}
    ></panel-cell>`);p(this,"_renderErrorCell",()=>w`<panel-cell
      isErrorCell
      .animationTime=${this.getAnimationTime()}
      @panel-cell:clicked=${this.handleErrorClickEvent}
    ></panel-cell>`);p(this,"_renderNormalCell",()=>w`<panel-cell></panel-cell>`)}render(){return w`${Array.from({length:this.columns*this.rows}).map((e,i)=>this._renderCell(i+1))}`}_renderCell(e){return w`
      ${ge(e==this._cellActive&&this.play,this._renderActiveCell,this._renderNormalCell)}
    `}}p(nr,"styles",[wi]);window.customElements.define("game-panel",nr);class Si extends O{static get properties(){return{pointsPerClick:{type:Number},resetScore:{type:Boolean},incrementScore:{type:Boolean},decrementScore:{type:Boolean},_points:{type:Number,state:!0}}}constructor(){super(),this.resetScore=!1,this.pointsPerClick=1,this._points=0}updated(t){super.updated(t),t.has("resetScore")&&this.resetScore&&(this._points=0,this.resetScore=!1),t.has("incrementScore")&&this.incrementScore&&(this._points+=this.pointsPerClick,this.shadowRoot.querySelector(".score").classList.add("increment"),setTimeout(()=>{this.shadowRoot.querySelector(".score").classList.remove("increment"),this.incrementScore=!1},500)),t.has("decrementScore")&&this.decrementScore&&(this._points-=this.pointsPerClick,this.shadowRoot.querySelector(".score").classList.add("decrement"),setTimeout(()=>{this.shadowRoot.querySelector(".score").classList.remove("decrement"),this.decrementScore=!1},500))}}const Ci=se`
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
      color: #c2ffc7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .decrement {
    animation: popScoreDecrement 0.5s ease-in-out;
  }

  @keyframes popScoreDecrement {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
      color: red;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;class sr extends Si{render(){return w` <div class="score">${this._points}</div>`}}p(sr,"styles",[Ci]);window.customElements.define("score-panel",sr);class Ri extends O{constructor(){super(...arguments);p(this,"handleLogin",()=>this.dispatchEvent(new CustomEvent("login-panel:login",{detail:this.user})))}static get properties(){return{user:{type:String}}}updated(e){super.updated(e)}handleInput(e){this.user=e.target.value}handleKeyDown(e){e.key==="Enter"&&this.handleLogin()}}const Pi=se`
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
`;class or extends Ri{render(){return w`
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
    `}}p(or,"styles",[Pi]);window.customElements.define("login-panel",or);class Xe extends O{static get properties(){return{difficulty:{type:Number}}}constructor(){super(),this.difficulty=1}handleChangeDifficulty(t){return this.difficulty=t,this.dispatchEvent(new CustomEvent("difficulty-panel:changed",{detail:this.difficulty}))}}p(Xe,"DIFFICULTY_LEVELS",Object.freeze(["Fácil","Media","Difícil","Experto"]));const Ti=se`
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
`;class ar extends Xe{constructor(){super(...arguments);p(this,"_renderButton",(e,i)=>w`
      <div
        class="difficulty-option ${this.difficulty==i?"selected":""}"
        @click="${()=>this.handleChangeDifficulty(i)}"
      >
        ${e}
      </div>
    `)}render(){return w`
      ${Xe.DIFFICULTY_LEVELS.map((e,i)=>this._renderButton(e,i+1))}
    `}}p(ar,"styles",[Ti]);window.customElements.define("difficulty-panel",ar);class cr extends Ke{constructor(){super(...arguments);p(this,"_renderLoginPanel",()=>w` <login-panel @login-panel:login=${this.handleLogin}></login-panel> `);p(this,"_renderPage",()=>w`
    ${this._renderHeader()} ${this._renderScore()} ${this._renderGamePanel()}
    ${this._renderDifficultyPanel()}
  `);p(this,"_renderHeader",()=>w` <div class="game__header">
    <div class="game__user">
      <img src="./images/user.svg" />
      <p>${this.user}</p>
    </div>
    ${this._renderButtonStartOrPause()}
    <button @click=${this.handleLogout} class="game__logout">
      <img src="./images/logout.svg" />
    </button>
  </div>`);p(this,"_renderScore",()=>w` <score-panel
      .incrementScore=${this._hasIncrementScore}
      .decrementScore=${this._hasDecrementScore}
      .pointsPerClick=${this._pointsPerClick}
    ></score-panel>`);p(this,"_renderGamePanel",()=>w` <game-panel
    .play=${this.play}
    .difficulty=${this.difficulty}
    @game-panel:clickedCorrectCell=${this.handleIncrement}
    @game-panel:clickedErrorCell=${this.handleDecrement}
  ></game-panel>`);p(this,"_renderDifficultyPanel",()=>w` <difficulty-panel
      .difficulty=${this.difficulty}
      @difficulty-panel:changed=${this.handleDifficultyChanged}
    ></difficulty-panel>`);p(this,"_renderButtonStartOrPause",()=>{const e={"game__toggle-button--on":!this.play,"game__toggle-button--pause":this.play};return w` <button
      class="game__toggle-button ${rr(e)}"
      @click=${this.handleToggleGame}
    >
      ${ge(this.play,()=>w` <img src="./images/pause.svg" /> `,()=>w` <img src="./images/play.svg" /> `)}
    </button>`})}render(){return w` ${ge(this.user,this._renderPage,this._renderLoginPanel)}`}}p(cr,"styles",[vi]);window.customElements.define("touch-the-mole",cr);
