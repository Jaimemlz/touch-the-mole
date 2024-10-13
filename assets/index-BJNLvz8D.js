var ge=Object.defineProperty;var be=(n,e,t)=>e in n?ge(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var h=(n,e,t)=>be(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,G=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),K=new WeakMap;let le=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(G&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(t,e))}return e}toString(){return this.cssText}};const Ae=n=>new le(typeof n=="string"?n:n+"",void 0,W),x=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new le(t,n,W)},ve=(n,e)=>{if(G)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},Z=G?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ae(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Se,defineProperty:Ee,getOwnPropertyDescriptor:we,getOwnPropertyNames:xe,getOwnPropertySymbols:Ce,getPrototypeOf:Pe}=Object,g=globalThis,Q=g.trustedTypes,Te=Q?Q.emptyScript:"",D=g.reactiveElementPolyfillSupport,P=(n,e)=>n,V={toAttribute(n,e){switch(e){case Boolean:n=n?Te:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ae=(n,e)=>!Se(n,e),X={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:ae};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ee(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=we(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const c=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const e=Pe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const t=this.properties,s=[...xe(t),...Ce(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Z(i))}else e!==void 0&&t.push(Z(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var r;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:V).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var r;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:V;this._$Em=i,this[i]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??ae)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[P("elementProperties")]=new Map,E[P("finalized")]=new Map,D==null||D({ReactiveElement:E}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,I=T.trustedTypes,ee=I?I.createPolicy("lit-html",{createHTML:n=>n}):void 0,ce="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+y,ke=`<${he}>`,v=document,k=()=>v.createComment(""),N=n=>n===null||typeof n!="object"&&typeof n!="function",q=Array.isArray,Ne=n=>q(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",z=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,te=/-->/g,se=/>/g,b=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,ne=/"/g,de=/^(?:script|style|textarea|title)$/i,Ue=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),f=Ue(1),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),re=new WeakMap,A=v.createTreeWalker(v,129);function pe(n,e){if(!q(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ee!==void 0?ee.createHTML(e):e}const Oe=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=C;for(let c=0;c<t;c++){const l=n[c];let d,u,a=-1,_=0;for(;_<l.length&&(o.lastIndex=_,u=o.exec(l),u!==null);)_=o.lastIndex,o===C?u[1]==="!--"?o=te:u[1]!==void 0?o=se:u[2]!==void 0?(de.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=b):u[3]!==void 0&&(o=b):o===b?u[0]===">"?(o=i??C,a=-1):u[1]===void 0?a=-2:(a=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?b:u[3]==='"'?ne:ie):o===ne||o===ie?o=b:o===te||o===se?o=C:(o=b,i=void 0);const $=o===b&&n[c+1].startsWith("/>")?" ":"";r+=o===C?l+ke:a>=0?(s.push(d),l.slice(0,a)+ce+l.slice(a)+y+$):l+y+(a===-2?c:$)}return[pe(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class U{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const c=e.length-1,l=this.parts,[d,u]=Oe(e,t);if(this.el=U.createElement(d,s),A.currentNode=this.el.content,t===2||t===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=A.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(ce)){const _=u[o++],$=i.getAttribute(a).split(y),L=/([.?@])?(.*)/.exec(_);l.push({type:1,index:r,name:L[2],strings:$,ctor:L[1]==="."?Re:L[1]==="?"?Ie:L[1]==="@"?Me:H}),i.removeAttribute(a)}else a.startsWith(y)&&(l.push({type:6,index:r}),i.removeAttribute(a));if(de.test(i.tagName)){const a=i.textContent.split(y),_=a.length-1;if(_>0){i.textContent=I?I.emptyScript:"";for(let $=0;$<_;$++)i.append(a[$],k()),A.nextNode(),l.push({type:2,index:++r});i.append(a[_],k())}}}else if(i.nodeType===8)if(i.data===he)l.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(y,a+1))!==-1;)l.push({type:7,index:r}),a+=y.length-1}r++}}static createElement(e,t){const s=v.createElement("template");return s.innerHTML=e,s}}function w(n,e,t=n,s){var o,c;if(e===S)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const r=N(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=w(n,i._$AS(n,e.values),i,s)),e}class Le{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??v).importNode(t,!0);A.currentNode=i;let r=A.nextNode(),o=0,c=0,l=s[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new O(r,r.nextSibling,this,e):l.type===1?d=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(d=new He(r,this,e)),this._$AV.push(d),l=s[++c]}o!==(l==null?void 0:l.index)&&(r=A.nextNode(),o++)}return A.currentNode=v,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class O{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),N(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ne(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=U.createElement(pe(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(t);else{const o=new Le(i,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=re.get(e.strings);return t===void 0&&re.set(e.strings,t=new U(e)),t}k(e){q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new O(this.O(k()),this.O(k()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=w(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const c=e;let l,d;for(e=r[0],l=0;l<r.length-1;l++)d=w(this,c[s+l],t,l),d===S&&(d=this._$AH[l]),o||(o=!N(d)||d!==this._$AH[l]),d===p?e=p:e!==p&&(e+=(d??"")+r[l+1]),this._$AH[l]=d}o&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Re extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Ie extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Me extends H{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??p)===S)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class He{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}}const B=T.litHtmlPolyfillSupport;B==null||B(U,O),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.2.1");const De=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const r=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new O(e.insertBefore(k(),r),r,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}}var oe;m._$litElement$=!0,m.finalized=!0,(oe=globalThis.litElementHydrateSupport)==null||oe.call(globalThis,{LitElement:m});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class ze extends m{static get properties(){return{user:{type:String},difficulty:{type:Number},_hasIncrementScore:{type:Boolean,state:!0}}}constructor(){super(),this.difficulty=1,this._hasIncrementScore=!1}updated(e){super.updated(e),e.has("difficulty")&&this._changeDifficulty(),e.has("_hasIncrementScore")&&this._hasIncrementScore&&(this._hasIncrementScore=!1)}_changeDifficulty(){}handleLogin(e){this.user=e.detail}handleIncrement(){this._hasIncrementScore=!0}handleDifficultyChanged(e){this.difficulty=e.detail}}const Be=x`
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
`,M=class M extends m{constructor(){super();h(this,"getAnimationTime",()=>M.DIFFICULTY_TIMINGS[this.difficulty]);h(this,"handleClickEvent",()=>this.dispatchEvent(new CustomEvent("game-panel:clickedCellActived")));this.columns=3,this.rows=3,this._active=0,this.play=!1}static get properties(){return{columns:{type:Number},rows:{type:Number},play:{type:Boolean,reflect:!0},difficulty:{type:Number},_cellActive:{type:Number,state:!0}}}updated(t){super.updated(t),(t.has("columns")||t.has("rows"))&&(this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)),t.has("play")&&(this.play?this._startRandomCellGeneration():this._stopRandomCellGeneration())}_updateGridStyle(){this.style.setProperty("--grid-columns",this.columns),this.style.setProperty("--grid-rows",this.rows)}_startRandomCellGeneration(){this._stopRandomCellGeneration(),this._interval=setInterval(()=>{this._generateNumCellActived()},this.getAnimationTime())}_stopRandomCellGeneration(){this._interval&&(clearInterval(this._interval),this._interval=null)}_generateNumCellActived(){let t;do t=this._generateNumRandom();while(t===this._cellActive);this._cellActive=t}_generateNumRandom(){return Math.floor(Math.random()*this.columns*this.rows)+1}};h(M,"DIFFICULTY_TIMINGS",Object.freeze({1:1e3,2:750,3:500,4:500}));let F=M;const je=x`
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
 */function J(n,e,t){return n?e(n):t==null?void 0:t(n)}class Ve extends m{constructor(){super();h(this,"_handleClick",()=>(this._clicked=!0,this.dispatchEvent(new CustomEvent("panel-cell:clicked"))));this._clicked=!1}static get properties(){return{animationTime:{type:Number},_clicked:{type:Boolean,state:!0}}}updated(t){super.updated(t),t.has("animationTime")&&this.style.setProperty("--mole-animation-duration",`${this.animationTime}ms`)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}}const Fe=x`
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
 */const Ye={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=n=>(...e)=>({_$litDirective$:n,values:e});class We{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=Ge(class extends We{constructor(n){var e;if(super(n),n.type!==Ye.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var s,i;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((s=this.nt)!=null&&s.has(r))&&this.st.add(r);return this.render(e)}const t=n.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const o=!!e[r];o===this.st.has(r)||(i=this.nt)!=null&&i.has(r)||(o?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return S}});class ue extends Ve{constructor(){super(...arguments);h(this,"_renderMole",()=>{const t={"cell__mole--normal":!this._clicked,"cell__mole--hurt":this._clicked};return f`<div class="cell__mole ${qe(t)}"></div>`})}render(){return f` ${J(this.animationTime,this._renderMole)}`}}h(ue,"styles",[Fe]);window.customElements.define("panel-cell",ue);class fe extends F{constructor(){super(...arguments);h(this,"_renderActiveCell",()=>f`<panel-cell
      .animationTime=${this.getAnimationTime()}
      @panel-cell:clicked=${this.handleClickEvent}
    ></panel-cell>`);h(this,"_renderNormalCell",()=>f`<panel-cell></panel-cell>`)}render(){return f`${Array.from({length:this.columns*this.rows}).map((t,s)=>this._renderCell(s+1))}`}_renderCell(t){return f`
      ${J(t==this._cellActive,this._renderActiveCell,this._renderNormalCell)}
    `}}h(fe,"styles",[je]);window.customElements.define("game-panel",fe);class Je extends m{static get properties(){return{pointsPerClick:{type:Number},resetScore:{type:Boolean},incrementScore:{type:Boolean},_points:{type:Number,state:!0}}}constructor(){super(),this.resetScore=!1,this.pointsPerClick=1,this._points=0}updated(e){super.updated(e),e.has("incrementScore")&&this.incrementScore&&(this._points+=this.pointsPerClick,this.shadowRoot.querySelector(".score").classList.add("increment"),setTimeout(()=>{this.shadowRoot.querySelector(".score").classList.remove("increment"),this.incrementScore=!1},500)),e.has("resetScore")&&this.resetScore&&(this._points=0,this.resetScore=!1)}}const Ke=x`
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
    -webkit-text-stroke: 1px white;
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
`;class me extends Je{render(){return f` <div class="score">${this._points}</div>`}}h(me,"styles",[Ke]);window.customElements.define("score-panel",me);class Ze extends m{constructor(){super();h(this,"handleLogin",()=>this.dispatchEvent(new CustomEvent("login-panel:login",{detail:this.user})))}static get properties(){return{user:{type:String}}}updated(t){super.updated(t)}handleInput(t){this.user=t.target.value}}const Qe=x`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .styled-input {
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

  .styled-input:focus {
    border-color: #e7d19b;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background: white;
  }

  .styled-input::placeholder {
    color: #ae7b56;
    opacity: 0.8;
  }

  .label {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    color: #333;
    margin-bottom: 10px;
    margin: 0;
  }

  .styled-button {
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

  .styled-button:hover {
    background-color: #e7d19b;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .styled-button:active {
    background-color: #874f38;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
  }
`;class _e extends Ze{render(){return f` <label class="label" for="name">Escribe tu usario</label>
      <input
        type="text"
        id="name"
        class="styled-input"
        placeholder="Tu usuario aqui"
        @input=${this.handleInput}
      />
      <button class="styled-button" @click=${this.handleLogin}>Jugar</button>`}}h(_e,"styles",[Qe]);window.customElements.define("login-panel",_e);class Y extends m{static get properties(){return{difficulty:{type:Number}}}constructor(){super(),this.difficulty=1}handleChangeDifficulty(e){return this.difficulty=e,this.dispatchEvent(new CustomEvent("difficulty-panel:changed",{detail:this.difficulty}))}}h(Y,"DIFFICULTY_LEVELS",Object.freeze(["Fácil","Media","Difícil","Experto"]));const Xe=x`
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
`;class $e extends Y{constructor(){super(...arguments);h(this,"_renderButton",(t,s)=>f`
      <div
        class="difficulty-option ${this.difficulty==s?"selected":""}"
        @click="${()=>this.handleChangeDifficulty(s)}"
      >
        ${t}
      </div>
    `)}render(){return f`
      <div>
        ${Y.DIFFICULTY_LEVELS.map((t,s)=>this._renderButton(t,s+1))}
      </div>
    `}}h($e,"styles",[Xe]);window.customElements.define("difficulty-panel",$e);class ye extends ze{constructor(){super();h(this,"_renderLoginPanel",()=>f` <login-panel @login-panel:login=${this.handleLogin}></login-panel> `);h(this,"_renderGamePanel",()=>f`
    <game-panel
      play
      .difficulty=${this.difficulty}
      @game-panel:clickedCellActived=${this.handleIncrement}
    ></game-panel
    ><score-panel .incrementScore=${this._hasIncrementScore}></score-panel>
    <difficulty-panel
      .difficulty=${this.difficulty}
      @difficulty-panel:changed=${this.handleDifficultyChanged}
    ></difficulty-panel>
  `);this.user="Jaime"}render(){return f` ${J(this.user,this._renderGamePanel,this._renderLoginPanel)}`}}h(ye,"styles",[Be]);window.customElements.define("touch-the-mole",ye);
