(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>f});var o=t(81),i=t.n(o),a=t(645),r=t.n(a),c=t(667),s=t.n(c),d=new URL(t(981),t.b),l=new URL(t(888),t.b),p=r()(i());p.push([n.id,"@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);"]);var u=s()(d),m=s()(l);p.push([n.id,"@font-face {\n    font-family: FiraSans;\n    src: url("+u+");\n}\n@font-face {\n    font-family: InstrumentSans;\n    src: url("+m+");\n}\n\nbody {\n    align-items: center;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    background: #1f0f2c;\n    background-image: radial-gradient(MidnightBlue, Black);\n    font-size: 14px;   \n}\n\na {\n    text-decoration: none;\n    color: #e5e7eb;\n}\n\nheader {\n    background: #1b1f28;\n    color: #e5e7eb;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /*padding: 10px 25px 5px 25px;*/ \n    position: fixed;\n    top: 0;\n    width: 100%;\n}\n\nli {\n    list-style-type: none;\n    cursor: pointer;\n}\n  \n.logo {\n    height: 42px;\n    padding: 10px 25px 5px; \n    cursor: pointer;\n}\n\nul {\n    display: flex;\n    gap: 36px;\n    flex-shrink: 0;\n    justify-content: flex-end;\n    padding-right: 25px; \n}\n\n\n\n.top {\n    color: #f9faf8;\n    text-align: center;\n    padding: 100px;\n}\n\n.title {\n    font-size: 48px;\n    font-family: FiraSans;\n    color: deepskyblue;\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.top_text {\n    font-family: InstrumentSans;\n    font-size: 16px;\n    margin-bottom: 36px;\n}\n\n.subscribe_button {\n    background-color: slateblue;\n    color: #f9faf8;\n    border-color: slateblue;\n    border-radius: 8px;\n    padding: 8px 24px;\n    margin-right: 4px;\n    margin-left: 4px;\n    margin-top: 4px;\n    margin-bottom: 36px;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.contact_button {\n    background-color: MidnightBlue;\n    color: #f9faf8;\n    border-color: slateblue;\n    border-radius: 8px;\n    padding: 8px 24px;\n    margin-right: 4px;\n    margin-left: 4px;\n    margin-top: 4px;\n    margin-bottom: 36px;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n#hero_logo {\n    width: 10%;\n    min-width: 65px;\n    margin-top: 150px;\n}\n\n#hero_image {\n    width: 40%;\n    min-width: 300px;\n    height: auto;\n}\n\n#screenshot {\n    width: 100%;\n    height: auto;\n    margin-top: 180px;\n    margin-bottom: 100px;\n}\n\n\n\n.center {\n    background-color: #f9faf8;\n    color: #1f2937;\n\n    display: flex;\n    flex-direction: column;\n\n    /*padding: 36px 48px 72px;*/\n    /*padding-top: 36px;*/\n    padding-top: 136px;\n    padding-bottom: 72px;\n    /*padding-left: 20px;*/\n    /*padding-right: 20px;*/\n    gap: 36px;\n    text-align: center;\n}\n\n.center_title {\n    font-weight: bolder;\n    font-size: 36px;\n    margin: 24px;\n}\n\n.center_items {\n/*    display: flex;*/\n/*    justify-content:space-evenly;*/\n    /*padding-left: 20px;*/\n    /*padding-right: 20px;*/\n/* *********************************************************** */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 15px;\n    margin: 20px;\n/* *********************************************************** */\n}\n\n@media (max-width: 1284px) and (min-width: 700px) {\n    .center_items {\n        margin-left: 200px;\n        margin-right: 200px;\n    }\n}\n\n@media (max-width: 700px) {\n    .center_items {\n      margin-left: 100px;\n      margin-right: 100px;\n    }\n}\n\n.center_item {\n    font-weight: 300;\n    border-radius: 24px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    height: 200px;\n    width: 250px;\n    padding: 20px;\n    align-self: center;\n    justify-self: center;\n}\n\n.subtext {\n    margin-top: 12px;\n}\n\n\n\nfooter {\n    background-color: #1f2937;\n    color: #e5e7eb;\n    display: flex;\n    justify-content: center;\n    font-size: 14px;\n    padding: 24px;\n/*\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n*/\n}\n",""]);const f=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=i(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var c=t(a[r]);e[c].references--}for(var s=o(n,i),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},708:(n,e,t)=>{t.d(e,{Z:()=>c});const o=t.p+"7ddea7402e2d963a4292.png",i=t.p+"7ba87f1d401718cac886.png",a=t.p+"18dd3cdecb03841fa6a7.png",r=t.p+"b79383936f9d95b2a8a7.png",c=function(){const n=document.createElement("div");n.classList="center";const e=document.createElement("div");e.classList="center_title",e.innerHTML="Comment Kanply vous aidera&nbsp;?",n.appendChild(e);const t=document.createElement("div");t.classList="center_items";const c=document.createElement("div");c.classList="center_item";const s=document.createElement("div");s.classList="image";const d=new Image;d.src=o,d.alt="Compliance Icon",d.classList="logo",s.appendChild(d);const l=document.createElement("div");l.classList="subtext",l.innerHTML="Kanply établiera d'abord la liste de vos obligations légales et règlementaires.  Il vous aidera également à formuler les objectifs en matière de sécurité de l'information appropriés à votre organisation.",c.appendChild(s),c.appendChild(l),t.appendChild(c);const p=document.createElement("div");p.classList="center_item";const u=document.createElement("div");u.classList="image";const m=new Image;m.src=i,m.alt="Checklist Icon",m.classList="logo",u.appendChild(m);const f=document.createElement("div");f.classList="subtext",f.innerHTML="En fonction de vos objectifs, des mesures que vous avez déjà mises en place et de votre capacité opérationnelle, Kanply créera un plan d'action sur mesure, qu'il ajustera en continu.",p.appendChild(u),p.appendChild(f),t.appendChild(p);const g=document.createElement("div");g.classList="center_item";const h=document.createElement("div");h.classList="image";const x=new Image;x.src=a,x.alt="Event Icon",x.classList="logo",h.appendChild(x);const b=document.createElement("div");b.classList="subtext",b.innerHTML="Le calendrier de livraison des tâches sera géré par Kanply de façon à respecter vos objectifs et vos obligations.",g.appendChild(h),g.appendChild(b),t.appendChild(g);const v=document.createElement("div");v.classList="center_item";const y=document.createElement("div");y.classList="image";const L=new Image;L.src=r,L.alt="Team Icon",L.classList="logo",y.appendChild(L);const C=document.createElement("div");return C.classList="subtext",C.innerHTML="Kanply assignera les tâches à l'intérieur de votre organisation ou à l'externe.  En plus de coordonner les efforts et de faire les suivis, il offrira le support et la formation requises à la réalisation des tâches.",v.appendChild(y),v.appendChild(C),t.appendChild(v),n.appendChild(t),n.outerHTML}},534:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(584),i=t(774);const a=t.p+"ebb6badfe653b06251db.png",r=function(){const n=document.createElement("div");n.classList="top";const e=document.createElement("div"),t=new Image;t.src=o,t.alt="Kanply's logo",t.id="hero_logo",e.appendChild(t);const r=new Image;r.src=i,r.alt="Kanply",r.id="hero_image",e.appendChild(r),n.appendChild(e);const c=document.createElement("div");c.classList="title",c.innerHTML="La conformité, facile.",n.appendChild(c);const s=document.createElement("div");s.classList="top_text",s.innerHTML="Étonnamment simple, mais en même temps complétement personnalisée,</br> Kanply réinvente la conformité en guidant vos efforts et en automatisant les tâches fastidieuses.",n.appendChild(s);const d=document.createElement("div");d.classList="top_text",d.innerHTML="Avec Kanply, la conformité devient un party... ou au moins vous aurez plus de temps pour le faire&nbsp;!",n.appendChild(d);const l=document.createElement("button");l.classList="subscribe_button",l.innerText="Inscrivez-vous sur la liste d'attente",n.appendChild(l);const p=document.createElement("button");p.classList="contact_button",p.innerText="Contactez-nous",n.appendChild(p);const u=document.createElement("div"),m=new Image;return m.src=a,m.alt="Kanply's dashboard",m.id="screenshot",u.appendChild(m),n.appendChild(u),n.outerHTML}},832:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(584);t(774);const i=function(){const n=document.createElement("div");n.classList="center";const e=document.createElement("div");e.classList="center_items";const t=document.createElement("div");t.classList="center_item";const i=document.createElement("div");i.classList="image";const a=new Image;a.src=o,a.alt="Login Icon",a.classList="logo",i.appendChild(a);const r=document.createElement("div");return r.classList="subtext",r.innerHTML="Kanply login !",t.appendChild(i),t.appendChild(r),e.appendChild(t),n.appendChild(e),n.outerHTML}},584:(n,e,t)=>{n.exports=t.p+"7c796d452f26f2cbe094.png"},774:(n,e,t)=>{n.exports=t.p+"037f63742ea40d1849b0.png"},981:(n,e,t)=>{n.exports=t.p+"c83d921b2e5bdab326ae.ttf"},888:(n,e,t)=>{n.exports=t.p+"87bb0aa2e579491cdec5.ttf"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!n;)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),a=t(569),r=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=r().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=t.p+"b6a5f50a6206fc3b239b.png";var h=t(534),x=t(708),b=t(832);document.body.appendChild(function(){const n=document.createElement("header"),e=document.createElement("div"),t=new Image;t.src=g,t.alt="Kanply's logo",t.classList="logo",e.addEventListener("click",(function(){document.getElementById("content").innerHTML=(0,h.Z)()})),e.appendChild(t),n.appendChild(e);const o=document.createElement("nav"),i=document.createElement("ul"),a=document.createElement("li");a.classList="menuItemAPropos",a.innerHTML="À propos",a.addEventListener("click",(function(){document.getElementById("content").innerHTML=(0,x.Z)()})),i.appendChild(a);const r=document.createElement("li");r.classList="menuItemLogin",r.innerHTML="Connexion",r.addEventListener("click",(function(){document.getElementById("content").innerHTML=(0,b.Z)()})),i.appendChild(r);const c=document.createElement("li");return c.classList="menuItemLang",c.innerHTML="<b>EN</b>",i.appendChild(c),o.appendChild(i),n.appendChild(o),n}()),document.body.appendChild(function(){const n=document.createElement("div");return n.id="content",n}()),document.body.appendChild(function(){const n=document.createElement("footer");return n.innerHTML="Copyright © Kanply 2023",n}()),document.getElementById("content").innerHTML=(0,h.Z)()})()})();