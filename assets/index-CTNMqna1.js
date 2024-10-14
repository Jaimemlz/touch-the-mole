var be=Object.defineProperty;var xe=(r,e,t)=>e in r?be(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>xe(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,W=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),K=new WeakMap;let ae=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(W&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(t,e))}return e}toString(){return this.cssText}};const Ae=r=>new ae(typeof r=="string"?r:r+"",void 0,q),E=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new ae(t,r,q)},ve=(r,e)=>{if(W)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},Z=W?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ae(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:we,defineProperty:Se,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:Ce,getOwnPropertySymbols:Pe,getPrototypeOf:ke}=Object,y=globalThis,X=y.trustedTypes,Te=X?X.emptyScript:"",D=y.reactiveElementPolyfillSupport,P=(r,e)=>r,F={toAttribute(r,e){switch(e){case Boolean:r=r?Te:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},le=(r,e)=>!we(r,e),Q={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:le};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Se(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=Ee(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const h=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(e,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const e=ke(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const t=this.properties,s=[...Ce(t),...Pe(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Z(i))}else e!==void 0&&t.push(Z(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:F).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:F;this._$Em=i,this[i]=h.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??le)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[P("elementProperties")]=new Map,w[P("finalized")]=new Map,D==null||D({ReactiveElement:w}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,I=k.trustedTypes,ee=I?I.createPolicy("lit-html",{createHTML:r=>r}):void 0,ce="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+$,Ne=`<${he}>`,A=document,T=()=>A.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",J=Array.isArray,Ue=r=>J(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,te=/-->/g,se=/>/g,b=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,re=/"/g,de=/^(?:script|style|textarea|title)$/i,Oe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),d=Oe(1),v=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ne=new WeakMap,x=A.createTreeWalker(A,129);function pe(r,e){if(!J(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ee!==void 0?ee.createHTML(e):e}const Le=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",o=C;for(let h=0;h<t;h++){const a=r[h];let p,f,l=-1,g=0;for(;g<a.length&&(o.lastIndex=g,f=o.exec(a),f!==null);)g=o.lastIndex,o===C?f[1]==="!--"?o=te:f[1]!==void 0?o=se:f[2]!==void 0?(de.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=b):f[3]!==void 0&&(o=b):o===b?f[0]===">"?(o=i??C,l=-1):f[1]===void 0?l=-2:(l=o.lastIndex-f[2].length,p=f[1],o=f[3]===void 0?b:f[3]==='"'?re:ie):o===re||o===ie?o=b:o===te||o===se?o=C:(o=b,i=void 0);const _=o===b&&r[h+1].startsWith("/>")?" ":"";n+=o===C?a+Ne:l>=0?(s.push(p),a.slice(0,l)+ce+a.slice(l)+$+_):a+$+(l===-2?h:_)}return[pe(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class U{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const h=e.length-1,a=this.parts,[p,f]=Le(e,t);if(this.el=U.createElement(p,s),x.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=x.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(ce)){const g=f[o++],_=i.getAttribute(l).split($),L=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:L[2],strings:_,ctor:L[1]==="."?Ie:L[1]==="?"?Me:L[1]==="@"?He:z}),i.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(de.test(i.tagName)){const l=i.textContent.split($),g=l.length-1;if(g>0){i.textContent=I?I.emptyScript:"";for(let _=0;_<g;_++)i.append(l[_],T()),x.nextNode(),a.push({type:2,index:++n});i.append(l[g],T())}}}else if(i.nodeType===8)if(i.data===he)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf($,l+1))!==-1;)a.push({type:7,index:n}),l+=$.length-1}n++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function S(r,e,t=r,s){var o,h;if(e===v)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=N(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=S(r,i._$AS(r,e.values),i,s)),e}class Re{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??A).importNode(t,!0);x.currentNode=i;let n=x.nextNode(),o=0,h=0,a=s[0];for(;a!==void 0;){if(o===a.index){let p;a.type===2?p=new O(n,n.nextSibling,this,e):a.type===1?p=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(p=new ze(n,this,e)),this._$AV.push(p),a=s[++h]}o!==(a==null?void 0:a.index)&&(n=x.nextNode(),o++)}return x.currentNode=A,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class O{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),N(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==v&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ue(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=U.createElement(pe(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Re(i,this),h=o.u(this.options);o.p(t),this.T(h),this._$AH=o}}_$AC(e){let t=ne.get(e.strings);return t===void 0&&ne.set(e.strings,t=new U(e)),t}k(e){J(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new O(this.O(T()),this.O(T()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=S(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==v,o&&(this._$AH=e);else{const h=e;let a,p;for(e=n[0],a=0;a<n.length-1;a++)p=S(this,h[s+a],t,a),p===v&&(p=this._$AH[a]),o||(o=!N(p)||p!==this._$AH[a]),p===u?e=u:e!==u&&(e+=(p??"")+n[a+1]),this._$AH[a]=p}o&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ie extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Me extends z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class He extends z{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??u)===v)return;const s=this._$AH,i=e===u&&s!==u||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const j=k.litHtmlPolyfillSupport;j==null||j(U,O),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.2.1");const De=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new O(e.insertBefore(T(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return v}}var oe;m._$litElement$=!0,m.finalized=!0,(oe=globalThis.litElementHydrateSupport)==null||oe.call(globalThis,{LitElement:m});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class Be extends m{static get properties(){return{user:{type:String},difficulty:{type:Number},play:{type:Boolean,reflect:!0},_hasIncrementScore:{type:Boolean,state:!0}}}constructor(){super(),this.difficulty=1,this._hasIncrementScore=!1,this.play=!1,this.user="Jaime"}updated(e){super.updated(e),e.has("difficulty")&&this._changeDifficulty(),e.has("_hasIncrementScore")&&this._hasIncrementScore&&(this._hasIncrementScore=!1)}_changeDifficulty(){}handleLogin(e){this.user=e.detail}handleIncrement(){this._hasIncrementScore=!0}handleDifficultyChanged(e){this.difficulty=e.detail}handleLogout(){this.user=""}handleToggleGame(){this.play=!this.play}}const je=E`
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
    font-size: 30px;
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

    difficulty-panel {
      margin: 35px 0;
    }
  }
`,H=class H extends m{constructor(){super();c(this,"getAnimationTime",()=>H.DIFFICULTY_TIMINGS[this.difficulty]);c(this,"handleClickEvent",()=>this.dispatchEvent(new CustomEvent("game-panel:clickedCellActived")));this.columns=3,this.rows=3,this._active=0,this.play=!1}static get properties(){return{columns:{type:Number},rows:{type:Number},play:{type:Boolean,reflect:!0},difficulty:{type:Number},_cellActive:{type:Number,state:!0}}}updated(t){super.updated(t),(t.has("columns")||t.has("rows"))&&(this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)),t.has("play")&&(this.play?this._startRandomCellGeneration():this._stopRandomCellGeneration())}_updateGridStyle(){this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)}_startRandomCellGeneration(){this._stopRandomCellGeneration(),this._interval=setInterval(()=>{this._generateNumCellActived()},this.getAnimationTime())}_stopRandomCellGeneration(){this._interval&&(clearInterval(this._interval),this._interval=null)}_generateNumCellActived(){let t;do t=this._generateNumRandom();while(t===this._cellActive);this._cellActive=t}_generateNumRandom(){return Math.floor(Math.random()*this.columns*this.rows)+1}};c(H,"DIFFICULTY_TIMINGS",Object.freeze({1:1e3,2:750,3:500,4:500}));let G=H;const Ve=E`
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
 */function M(r,e,t){return r?e(r):t==null?void 0:t(r)}class Fe extends m{constructor(){super();c(this,"_handleClick",()=>(this._clicked=!0,this.dispatchEvent(new CustomEvent("panel-cell:clicked"))));this._clicked=!1}static get properties(){return{animationTime:{type:Number},_clicked:{type:Boolean,state:!0}}}updated(t){super.updated(t),t.has("animationTime")&&this.style.setProperty("--mole-animation-duration",`${this.animationTime}ms`)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}}const Ge=E`
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
 */const Ye={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=r=>(...e)=>({_$litDirective$:r,values:e});class qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=We(class extends qe{constructor(r){var e;if(super(r),r.type!==Ye.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var s,i;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((s=this.nt)!=null&&s.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(i=this.nt)!=null&&i.has(n)||(o?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return v}});class fe extends Fe{constructor(){super(...arguments);c(this,"_renderMole",()=>{const t={"cell__mole--normal":!this._clicked,"cell__mole--hurt":this._clicked};return d`<div class="cell__mole ${ue(t)}"></div>`})}render(){return d` ${M(this.animationTime,this._renderMole)}`}}c(fe,"styles",[Ge]);window.customElements.define("panel-cell",fe);class me extends G{constructor(){super(...arguments);c(this,"_renderActiveCell",()=>d`<panel-cell
      .animationTime=${this.getAnimationTime()}
      @panel-cell:clicked=${this.handleClickEvent}
    ></panel-cell>`);c(this,"_renderNormalCell",()=>d`<panel-cell></panel-cell>`)}render(){return d`${Array.from({length:this.columns*this.rows}).map((t,s)=>this._renderCell(s+1))}`}_renderCell(t){return d`
      ${M(t==this._cellActive,this._renderActiveCell,this._renderNormalCell)}
    `}}c(me,"styles",[Ve]);window.customElements.define("game-panel",me);class Je extends m{static get properties(){return{pointsPerClick:{type:Number},resetScore:{type:Boolean},incrementScore:{type:Boolean},_points:{type:Number,state:!0}}}constructor(){super(),this.resetScore=!1,this.pointsPerClick=1,this._points=0}updated(e){super.updated(e),e.has("incrementScore")&&this.incrementScore&&(this._points+=this.pointsPerClick,this.shadowRoot.querySelector(".score").classList.add("increment"),setTimeout(()=>{this.shadowRoot.querySelector(".score").classList.remove("increment"),this.incrementScore=!1},500)),e.has("resetScore")&&this.resetScore&&(this._points=0,this.resetScore=!1)}}const Ke=E`
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
`;class ge extends Je{render(){return d` <div class="score">${this._points}</div>`}}c(ge,"styles",[Ke]);window.customElements.define("score-panel",ge);class Ze extends m{constructor(){super();c(this,"handleLogin",()=>this.dispatchEvent(new CustomEvent("login-panel:login",{detail:this.user})))}static get properties(){return{user:{type:String}}}updated(t){super.updated(t)}handleInput(t){this.user=t.target.value}}const Xe=E`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
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
    color: #333;
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
`;class _e extends Ze{render(){return d`
      <label class="login-label" for="name">Escribe tu usario</label>
      <input
        type="text"
        id="name"
        class="login-input"
        placeholder="Tu usuario aqui"
        @input=${this.handleInput}
      />
      <button class="login-button" @click=${this.handleLogin}>Jugar</button>
    `}}c(_e,"styles",[Xe]);window.customElements.define("login-panel",_e);class Y extends m{static get properties(){return{difficulty:{type:Number}}}constructor(){super(),this.difficulty=1}handleChangeDifficulty(e){return this.difficulty=e,this.dispatchEvent(new CustomEvent("difficulty-panel:changed",{detail:this.difficulty}))}}c(Y,"DIFFICULTY_LEVELS",Object.freeze(["Fácil","Media","Difícil","Experto"]));const Qe=E`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    width: 300px;
  }

  .difficulty-option.selected {
    border: 3px solid #ffffff;
    background: radial-gradient(circle at center, rgb(174, 124, 86), #e7d19b);
    color: white;
  }

  .difficulty-option:hover {
    background-color: #ddd;
  }
`;class $e extends Y{constructor(){super(...arguments);c(this,"_renderButton",(t,s)=>d`
      <div
        class="difficulty-option ${this.difficulty==s?"selected":""}"
        @click="${()=>this.handleChangeDifficulty(s)}"
      >
        ${t}
      </div>
    `)}render(){return d`
      ${Y.DIFFICULTY_LEVELS.map((t,s)=>this._renderButton(t,s+1))}
    `}}c($e,"styles",[Qe]);window.customElements.define("difficulty-panel",$e);class ye extends Be{constructor(){super(...arguments);c(this,"_renderLoginPanel",()=>d` <login-panel @login-panel:login=${this.handleLogin}></login-panel> `);c(this,"_renderPage",()=>d`
    ${this._renderHeader()} ${this._renderScore()} ${this._renderGamePanel()}
    ${this._renderDifficultyPanel()}
  `);c(this,"_renderHeader",()=>d` <div class="game__header">
    <div class="game__user">
      <img src="./public/images/user.svg" />
      <p>${this.user}</p>
    </div>
    ${this._renderButtonStartOrPause()}
    <button @click=${this.handleLogout} class="game__logout">
      <img src="./public/images/logout.svg" />
    </button>
  </div>`);c(this,"_renderScore",()=>d` <score-panel
      .incrementScore=${this._hasIncrementScore}
    ></score-panel>`);c(this,"_renderGamePanel",()=>d` <game-panel
    .play=${this.play}
    .difficulty=${this.difficulty}
    @game-panel:clickedCellActived=${this.handleIncrement}
  ></game-panel>`);c(this,"_renderDifficultyPanel",()=>d` <difficulty-panel
      .difficulty=${this.difficulty}
      @difficulty-panel:changed=${this.handleDifficultyChanged}
    ></difficulty-panel>`);c(this,"_renderButtonStartOrPause",()=>{const t={"game__toggle-button--on":!this.play,"game__toggle-button--pause":this.play};return d` <button
      class="game__toggle-button ${ue(t)}"
      @click=${this.handleToggleGame}
    >
      ${M(this.play,()=>d` <img src="./public/images/pause.svg" /> `,()=>d` <img src="./public/images/play.svg" /> `)}
    </button>`})}render(){return d` ${M(this.user,this._renderPage,this._renderLoginPanel)}`}}c(ye,"styles",[je]);window.customElements.define("touch-the-mole",ye);
