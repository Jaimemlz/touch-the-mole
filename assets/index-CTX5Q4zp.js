var yt=Object.defineProperty;var gt=(r,t,e)=>t in r?yt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var p=(r,t,e)=>gt(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,W=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),K=new WeakMap;let ot=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(e,t))}return t}toString(){return this.cssText}};const At=r=>new ot(typeof r=="string"?r:r+"",void 0,G),U=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new ot(e,r,G)},vt=(r,t)=>{if(W)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},J=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return At(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:St,getOwnPropertyDescriptor:Et,getOwnPropertyNames:wt,getOwnPropertySymbols:Ct,getPrototypeOf:xt}=Object,g=globalThis,Z=g.trustedTypes,Tt=Z?Z.emptyScript:"",D=g.reactiveElementPolyfillSupport,x=(r,t)=>r,F={toAttribute(r,t){switch(t){case Boolean:r=r?Tt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},lt=(r,t)=>!bt(r,t),Q={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&St(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=Et(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const c=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,s=[...wt(e),...Ct(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:F).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:F;this._$Em=i,this[i]=c.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??lt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[x("elementProperties")]=new Map,E[x("finalized")]=new Map,D==null||D({ReactiveElement:E}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,I=T.trustedTypes,X=I?I.createPolicy("lit-html",{createHTML:r=>r}):void 0,at="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+y,Pt=`<${ct}>`,b=document,P=()=>b.createComment(""),k=r=>r===null||typeof r!="object"&&typeof r!="function",q=Array.isArray,kt=r=>q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,A=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,ht=/^(?:script|style|textarea|title)$/i,Nt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=Nt(1),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),rt=new WeakMap,v=b.createTreeWalker(b,129);function dt(r,t){if(!q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const Ut=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=C;for(let c=0;c<e;c++){const l=r[c];let h,u,a=-1,m=0;for(;m<l.length&&(o.lastIndex=m,u=o.exec(l),u!==null);)m=o.lastIndex,o===C?u[1]==="!--"?o=tt:u[1]!==void 0?o=et:u[2]!==void 0?(ht.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=i??C,a=-1):u[1]===void 0?a=-2:(a=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?A:u[3]==='"'?it:st):o===it||o===st?o=A:o===tt||o===et?o=C:(o=A,i=void 0);const $=o===A&&r[c+1].startsWith("/>")?" ":"";n+=o===C?l+Pt:a>=0?(s.push(h),l.slice(0,a)+at+l.slice(a)+y+$):l+y+(a===-2?c:$)}return[dt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const c=t.length-1,l=this.parts,[h,u]=Ut(t,e);if(this.el=N.createElement(h,s),v.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=v.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(at)){const m=u[o++],$=i.getAttribute(a).split(y),R=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:R[2],strings:$,ctor:R[1]==="."?Rt:R[1]==="?"?Mt:R[1]==="@"?It:L}),i.removeAttribute(a)}else a.startsWith(y)&&(l.push({type:6,index:n}),i.removeAttribute(a));if(ht.test(i.tagName)){const a=i.textContent.split(y),m=a.length-1;if(m>0){i.textContent=I?I.emptyScript:"";for(let $=0;$<m;$++)i.append(a[$],P()),v.nextNode(),l.push({type:2,index:++n});i.append(a[m],P())}}}else if(i.nodeType===8)if(i.data===ct)l.push({type:2,index:n});else{let a=-1;for(;(a=i.data.indexOf(y,a+1))!==-1;)l.push({type:7,index:n}),a+=y.length-1}n++}}static createElement(t,e){const s=b.createElement("template");return s.innerHTML=t,s}}function w(r,t,e=r,s){var o,c;if(t===S)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=k(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=w(r,i._$AS(r,t.values),i,s)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??b).importNode(e,!0);v.currentNode=i;let n=v.nextNode(),o=0,c=0,l=s[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new O(n,n.nextSibling,this,t):l.type===1?h=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(h=new Ht(n,this,t)),this._$AV.push(h),l=s[++c]}o!==(l==null?void 0:l.index)&&(n=v.nextNode(),o++)}return v.currentNode=b,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),k(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(dt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const o=new Ot(i,this),c=o.u(this.options);o.p(e),this.T(c),this._$AH=o}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new N(t)),e}k(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new O(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const c=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=w(this,c[s+l],e,l),h===S&&(h=this._$AH[l]),o||(o=!k(h)||h!==this._$AH[l]),h===d?t=d:t!==d&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Rt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Mt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class It extends L{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===S)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const z=T.litHtmlPolyfillSupport;z==null||z(N,O),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.2.1");const Lt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new O(t.insertBefore(P(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}}var nt;_._$litElement$=!0,_.finalized=!0,(nt=globalThis.litElementHydrateSupport)==null||nt.call(globalThis,{LitElement:_});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:_});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class Dt extends _{static get properties(){return{difficulty:{type:Number},_hasIncrementScore:{type:Boolean,state:!0}}}constructor(){super(),this.difficulty=1,this._hasIncrementScore=!1}updated(t){super.updated(t),t.has("difficulty")&&this._changeDifficulty(),t.has("_hasIncrementScore")&&this._hasIncrementScore&&(this._hasIncrementScore=!1)}_changeDifficulty(){}handleIncrement(){this._hasIncrementScore=!0}handleDifficultyChanged(t){this.difficulty=t.detail}}const Bt=U`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 2.5em;
    background: radial-gradient(circle at center, #e7d19b, rgb(174, 124, 86));
    width: 100%;
    height: 100%;
    gap: 35px;
  }

  p {
    margin: 0;
  }
`,H=class H extends _{constructor(){super();p(this,"getAnimationTime",()=>H.DIFFICULTY_TIMINGS[this.difficulty]);this.columns=3,this.rows=3,this._active=0,this.play=!1}static get properties(){return{columns:{type:Number},rows:{type:Number},play:{type:Boolean,reflect:!0},difficulty:{type:Number},_cellActive:{type:Number,state:!0}}}updated(e){super.updated(e),(e.has("columns")||e.has("rows"))&&(this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)),e.has("play")&&(this.play?this._startRandomCellGeneration():this._stopRandomCellGeneration())}_updateGridStyle(){this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)}_startRandomCellGeneration(){this._stopRandomCellGeneration(),this._interval=setInterval(()=>{this._generateNumCellActived()},this.getAnimationTime())}_stopRandomCellGeneration(){this._interval&&(clearInterval(this._interval),this._interval=null)}_generateNumCellActived(){let e;do e=this._generateNumRandom();while(e===this._cellActive);this._cellActive=e}_generateNumRandom(){return Math.floor(Math.random()*this.columns*this.rows)+1}handleClickEvent(){const e=new CustomEvent("game-panel:clickedCellActived");this.dispatchEvent(e)}};p(H,"DIFFICULTY_TIMINGS",Object.freeze({1:1e3,2:750,3:500,4:500}));let V=H;const zt=U`
  :host {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    grid-template-rows: repeat(var(--grid-rows), 1fr);
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(174, 123, 86), 0 10px 20px rgba(174, 123, 86);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(r,t,e){return r?t(r):e==null?void 0:e(r)}class jt extends _{constructor(){super();p(this,"_handleClick",()=>(this._clicked=!0,this.dispatchEvent(new CustomEvent("panel-cell:clicked"))));this._clicked=!1}static get properties(){return{animationTime:{type:Number},_clicked:{type:Boolean,state:!0}}}updated(e){super.updated(e),e.has("animationTime")&&this.style.setProperty("--mole-animation-duration",`${this.animationTime}ms`)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}}const Ft=U`
  :host {
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./images/hole.webp');
    background-size: cover;
    background-position: center;
    --mole-animation-duration: 2s;
  }

  .cell__mole {
    width: 70%;
    height: 70%;
    cursor: pointer;
    opacity: 0;
  }

  .cell__mole--normal {
    background: url('images/mole.png') no-repeat center;
    background-size: contain;
    animation: moleAnimation var(--mole-animation-duration) ease-in-out 1;
  }

  .cell__mole--hurt {
    background: url('images/mole-hurt.png') no-repeat center;
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
 */const Vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yt=r=>(...t)=>({_$litDirective$:r,values:t});class Wt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=Yt(class extends Wt{constructor(r){var t;if(super(r),r.type!==Vt.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var s,i;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((s=this.nt)!=null&&s.has(n))&&this.st.add(n);return this.render(t)}const e=r.element.classList;for(const n of this.st)n in t||(e.remove(n),this.st.delete(n));for(const n in t){const o=!!t[n];o===this.st.has(n)||(i=this.nt)!=null&&i.has(n)||(o?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return S}});class pt extends jt{constructor(){super(...arguments);p(this,"_renderMole",()=>{const e={"cell__mole--normal":!this._clicked,"cell__mole--hurt":this._clicked};return f`<div class="cell__mole ${Gt(e)}"></div>`})}render(){return f` ${ut(this.animationTime,this._renderMole)}`}}p(pt,"styles",[Ft]);window.customElements.define("panel-cell",pt);class ft extends V{constructor(){super(...arguments);p(this,"_renderActiveCell",()=>f`<panel-cell
      .animationTime=${this.getAnimationTime()}
      @panel-cell:clicked=${this.handleClickEvent}
    ></panel-cell>`);p(this,"_renderNormalCell",()=>f`<panel-cell></panel-cell>`)}render(){return f`${Array.from({length:this.columns*this.rows}).map((e,s)=>this._renderCell(s+1))}`}_renderCell(e){return f`
      ${ut(e==this._cellActive,this._renderActiveCell,this._renderNormalCell)}
    `}}p(ft,"styles",[zt]);window.customElements.define("game-panel",ft);class qt extends _{static get properties(){return{pointsPerClick:{type:Number},resetScore:{type:Boolean},incrementScore:{type:Boolean},_points:{type:Number,state:!0}}}constructor(){super(),this.resetScore=!1,this.pointsPerClick=1,this._points=0}updated(t){super.updated(t),t.has("incrementScore")&&this.incrementScore&&(this._points+=this.pointsPerClick,this.shadowRoot.querySelector(".score").classList.add("increment"),setTimeout(()=>{this.shadowRoot.querySelector(".score").classList.remove("increment"),this.incrementScore=!1},500)),t.has("resetScore")&&this.resetScore&&(this._points=0,this.resetScore=!1)}}const Kt=U`
  :host {
  }

  .score {
    font-family: "Russo One", sans-serif;
    font-size: 100px;
    font-weight: bold;
    transition: transform 0.3s ease, opacity 0.3s ease;
    background: radial-gradient(circle at center, rgb(174, 124, 86), #e7d19b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.1px white;
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
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;class mt extends qt{render(){return f` <div class="score">${this._points}</div>`}}p(mt,"styles",[Kt]);window.customElements.define("score-panel",mt);class Y extends _{static get properties(){return{difficulty:{type:Number}}}constructor(){super(),this.difficulty=1}handleChangeDifficulty(t){return this.difficulty=t,this.dispatchEvent(new CustomEvent("difficulty-panel:changed",{detail:this.difficulty}))}}p(Y,"DIFFICULTY_LEVELS",Object.freeze(["Fácil","Media","Difícil","Experto"]));const Jt=U`
  :host {
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
    min-width: 300px;
  }

  .difficulty-option.selected {
    border: 3px solid #ffffff;
    background: radial-gradient(circle at center, rgb(174, 124, 86), #e7d19b);
    color: white;
  }

  .difficulty-option:hover {
    background-color: #ddd;
  }
`;class _t extends Y{constructor(){super(...arguments);p(this,"_renderButton",(e,s)=>f`
      <div
        class="difficulty-option ${this.difficulty==s?"selected":""}"
        @click="${()=>this.handleChangeDifficulty(s)}"
      >
        ${e}
      </div>
    `)}render(){return f`
      <div>
        ${Y.DIFFICULTY_LEVELS.map((e,s)=>this._renderButton(e,s+1))}
      </div>
    `}}p(_t,"styles",[Jt]);window.customElements.define("difficulty-panel",_t);class $t extends Dt{render(){return f` <game-panel
        play
        .difficulty=${this.difficulty}
        @game-panel:clickedCellActived=${this.handleIncrement}
      ></game-panel
      ><score-panel .incrementScore=${this._hasIncrementScore}></score-panel>
      <difficulty-panel
        .difficulty=${this.difficulty}
        @difficulty-panel:changed=${this.handleDifficultyChanged}
      ></difficulty-panel>`}}p($t,"styles",[Bt]);window.customElements.define("touch-the-mole",$t);
