if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const l=e=>s(e,o),d={module:{uri:o},exports:a,require:l};i[o]=Promise.all(r.map((e=>d[e]||l(e)))).then((e=>(n(...e),a)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Cd40v3if.css",revision:null},{url:"assets/index-D9m66D2u.js",revision:null},{url:"images/desktop.png",revision:"0ee2e30ab4d6bd359c08e563ade1e7b8"},{url:"images/icon_topo_medium.png",revision:"306400db146698e0ff3e1f102ee03b65"},{url:"images/icon_topo_small.png",revision:"862455790a85894210858f109052f836"},{url:"images/logout.svg",revision:"a51327865391c26ead0b34283350c727"},{url:"images/mobile.png",revision:"97fc6c174095e096fd6d8e2656370610"},{url:"images/mole_evil.png",revision:"62e5e515d350a554d1e5176d7b1a88dd"},{url:"images/mole-hurt.png",revision:"6b7a3c45ad3c023eb802aca308023f08"},{url:"images/mole.png",revision:"17fe3b6200e5a12761aa40f6260d4a27"},{url:"images/pause.svg",revision:"bec43df81de778409677e1815759db16"},{url:"images/play.svg",revision:"f15270a1c4193c1b11f81824bcd0e7e8"},{url:"images/user.svg",revision:"8b043fecf10ce18dbebace13391ced2e"},{url:"index.html",revision:"fa9f84b818d87caade241453c8e77d41"},{url:"registerSW.js",revision:"473e565f643f65bb97b9c0efb71fb7fb"},{url:"manifest.webmanifest",revision:"a11e55a29e65a084aa0aab2a651f9d06"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
