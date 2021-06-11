/*!
 * Chart.js v3.3.2
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Chart=e()}(this,(function(){"use strict";const t="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function e(e,i,n){const o=n||(t=>Array.prototype.slice.call(t));let s=!1,a=[];return function(...n){a=o(n),s||(s=!0,t.call(window,(()=>{s=!1,e.apply(i,a)})))}}function i(t,e){let i;return function(){return e?(clearTimeout(i),i=setTimeout(t,e)):t(),e}}const n=t=>"start"===t?"left":"end"===t?"right":"center",o=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,s=(t,e,i)=>"right"===t?i:"center"===t?(e+i)/2:e;var a=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,n){const o=e.listeners[n],s=e.duration;o.forEach((n=>n({chart:t,initial:e.initial,numSteps:s,currentStep:Math.min(i-e.start,s)})))}_refresh(){const e=this;e._request||(e._running=!0,e._request=t.call(window,(()=>{e._update(),e._request=null,e._running&&e._refresh()})))}_update(t=Date.now()){const e=this;let i=0;e._charts.forEach(((n,o)=>{if(!n.running||!n.items.length)return;const s=n.items;let a,r=s.length-1,l=!1;for(;r>=0;--r)a=s[r],a._active?(a._total>n.duration&&(n.duration=a._total),a.tick(t),l=!0):(s[r]=s[s.length-1],s.pop());l&&(o.draw(),e._notify(o,n,t,"progress")),s.length||(n.running=!1,e._notify(o,n,t,"complete"),n.initial=!1),i+=s.length})),e._lastDate=t,0===i&&(e._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let n=i.length-1;for(;n>=0;--n)i[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};
/*!
 * @kurkle/color v0.1.9
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */const r={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},l="0123456789ABCDEF",c=t=>l[15&t],h=t=>l[(240&t)>>4]+l[15&t],d=t=>(240&t)>>4==(15&t);function u(t){var e=function(t){return d(t.r)&&d(t.g)&&d(t.b)&&d(t.a)}(t)?c:h;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):""):t}function f(t){return t+.5|0}const g=(t,e,i)=>Math.max(Math.min(t,i),e);function p(t){return g(f(2.55*t),0,255)}function m(t){return g(f(255*t),0,255)}function x(t){return g(f(t/2.55)/100,0,1)}function b(t){return g(f(100*t),0,100)}const _=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const y=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function v(t,e,i){const n=e*Math.min(i,1-i),o=(e,o=(e+t/30)%12)=>i-n*Math.max(Math.min(o-3,9-o,1),-1);return[o(0),o(8),o(4)]}function w(t,e,i){const n=(n,o=(n+t/60)%6)=>i-i*e*Math.max(Math.min(o,4-o,1),0);return[n(5),n(3),n(1)]}function M(t,e,i){const n=v(t,1,.5);let o;for(e+i>1&&(o=1/(e+i),e*=o,i*=o),o=0;o<3;o++)n[o]*=1-e-i,n[o]+=e;return n}function k(t){const e=t.r/255,i=t.g/255,n=t.b/255,o=Math.max(e,i,n),s=Math.min(e,i,n),a=(o+s)/2;let r,l,c;return o!==s&&(c=o-s,l=a>.5?c/(2-o-s):c/(o+s),r=o===e?(i-n)/c+(i<n?6:0):o===i?(n-e)/c+2:(e-i)/c+4,r=60*r+.5),[0|r,l||0,a]}function S(t,e,i,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,n)).map(m)}function P(t,e,i){return S(v,t,e,i)}function D(t){return(t%360+360)%360}function C(t){const e=y.exec(t);let i,n=255;if(!e)return;e[5]!==i&&(n=e[6]?p(+e[5]):m(+e[5]));const o=D(+e[2]),s=+e[3]/100,a=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return S(M,t,e,i)}(o,s,a):"hsv"===e[1]?function(t,e,i){return S(w,t,e,i)}(o,s,a):P(o,s,a),{r:i[0],g:i[1],b:i[2],a:n}}const O={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},T={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let A;function L(t){A||(A=function(){const t={},e=Object.keys(T),i=Object.keys(O);let n,o,s,a,r;for(n=0;n<e.length;n++){for(a=r=e[n],o=0;o<i.length;o++)s=i[o],r=r.replace(s,O[s]);s=parseInt(T[a],16),t[r]=[s>>16&255,s>>8&255,255&s]}return t}(),A.transparent=[0,0,0,0]);const e=A[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}function R(t,e,i){if(t){let n=k(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*i,0===e?360:1)),n=P(n),t.r=n[0],t.g=n[1],t.b=n[2]}}function E(t,e){return t?Object.assign(e||{},t):t}function I(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=m(t[3]))):(e=E(t,{r:0,g:0,b:0,a:1})).a=m(e.a),e}function z(t){return"r"===t.charAt(0)?function(t){const e=_.exec(t);let i,n,o,s=255;if(e){if(e[7]!==i){const t=+e[7];s=255&(e[8]?p(t):255*t)}return i=+e[1],n=+e[3],o=+e[5],i=255&(e[2]?p(i):i),n=255&(e[4]?p(n):n),o=255&(e[6]?p(o):o),{r:i,g:n,b:o,a:s}}}(t):C(t)}class F{constructor(t){if(t instanceof F)return t;const e=typeof t;let i;var n,o,s;"object"===e?i=I(t):"string"===e&&(s=(n=t).length,"#"===n[0]&&(4===s||5===s?o={r:255&17*r[n[1]],g:255&17*r[n[2]],b:255&17*r[n[3]],a:5===s?17*r[n[4]]:255}:7!==s&&9!==s||(o={r:r[n[1]]<<4|r[n[2]],g:r[n[3]]<<4|r[n[4]],b:r[n[5]]<<4|r[n[6]],a:9===s?r[n[7]]<<4|r[n[8]]:255})),i=o||L(t)||z(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=E(this._rgb);return t&&(t.a=x(t.a)),t}set rgb(t){this._rgb=I(t)}rgbString(){return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${x(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):this._rgb;var t}hexString(){return this._valid?u(this._rgb):this._rgb}hslString(){return this._valid?function(t){if(!t)return;const e=k(t),i=e[0],n=b(e[1]),o=b(e[2]);return t.a<255?`hsla(${i}, ${n}%, ${o}%, ${x(t.a)})`:`hsl(${i}, ${n}%, ${o}%)`}(this._rgb):this._rgb}mix(t,e){const i=this;if(t){const n=i.rgb,o=t.rgb;let s;const a=e===s?.5:e,r=2*a-1,l=n.a-o.a,c=((r*l==-1?r:(r+l)/(1+r*l))+1)/2;s=1-c,n.r=255&c*n.r+s*o.r+.5,n.g=255&c*n.g+s*o.g+.5,n.b=255&c*n.b+s*o.b+.5,n.a=a*n.a+(1-a)*o.a,i.rgb=n}return i}clone(){return new F(this.rgb)}alpha(t){return this._rgb.a=m(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=f(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return R(this._rgb,2,t),this}darken(t){return R(this._rgb,2,-t),this}saturate(t){return R(this._rgb,1,t),this}desaturate(t){return R(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=k(t);i[0]=D(i[0]+e),i=P(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function V(t){return new F(t)}const B=t=>t instanceof CanvasGradient||t instanceof CanvasPattern;function W(t){return B(t)?t:V(t)}function H(t){return B(t)?t:V(t).saturate(.5).darken(.1).hexString()}function N(){}const j=function(){let t=0;return function(){return t++}}();function $(t){return null==t}function Y(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function U(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const X=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function q(t,e){return X(t)?t:e}function K(t,e){return void 0===t?e:t}const G=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,Z=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Q(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function J(t,e,i,n){let o,s,a;if(Y(t))if(s=t.length,n)for(o=s-1;o>=0;o--)e.call(i,t[o],o);else for(o=0;o<s;o++)e.call(i,t[o],o);else if(U(t))for(a=Object.keys(t),s=a.length,o=0;o<s;o++)e.call(i,t[a[o]],a[o])}function tt(t,e){let i,n,o,s;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(o=t[i],s=e[i],o.datasetIndex!==s.datasetIndex||o.index!==s.index)return!1;return!0}function et(t){if(Y(t))return t.map(et);if(U(t)){const e=Object.create(null),i=Object.keys(t),n=i.length;let o=0;for(;o<n;++o)e[i[o]]=et(t[i[o]]);return e}return t}function it(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function nt(t,e,i,n){if(!it(t))return;const o=e[t],s=i[t];U(o)&&U(s)?ot(o,s,n):e[t]=et(s)}function ot(t,e,i){const n=Y(e)?e:[e],o=n.length;if(!U(t))return t;const s=(i=i||{}).merger||nt;for(let a=0;a<o;++a){if(!U(e=n[a]))continue;const o=Object.keys(e);for(let n=0,a=o.length;n<a;++n)s(o[n],t,e,i)}return t}function st(t,e){return ot(t,e,{merger:at})}function at(t,e,i){if(!it(t))return;const n=e[t],o=i[t];U(n)&&U(o)?st(n,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=et(o))}function rt(t,e){const i=t.indexOf(".",e);return-1===i?t.length:i}function lt(t,e){if(""===e)return t;let i=0,n=rt(e,i);for(;t&&n>i;)t=t[e.substr(i,n-i)],i=n+1,n=rt(e,i);return t}function ct(t){return t.charAt(0).toUpperCase()+t.slice(1)}const ht=t=>void 0!==t,dt=t=>"function"==typeof t,ut=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0},ft=Object.create(null),gt=Object.create(null);function pt(t,e){if(!e)return t;const i=e.split(".");for(let e=0,n=i.length;e<n;++e){const n=i[e];t=t[n]||(t[n]=Object.create(null))}return t}function mt(t,e,i){return"string"==typeof e?ot(pt(t,e),i):ot(pt(t,""),e)}var xt=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>H(e.backgroundColor),this.hoverBorderColor=(t,e)=>H(e.borderColor),this.hoverColor=(t,e)=>H(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.describe(t)}set(t,e){return mt(this,t,e)}get(t){return pt(this,t)}describe(t,e){return mt(gt,t,e)}override(t,e){return mt(ft,t,e)}route(t,e,i,n){const o=pt(this,t),s=pt(this,i),a="_"+e;Object.defineProperties(o,{[a]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[a],e=s[n];return U(t)?Object.assign({},e,t):K(t,e)},set(t){this[a]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});const bt=Math.PI,_t=2*bt,yt=_t+bt,vt=Number.POSITIVE_INFINITY,wt=bt/180,Mt=bt/2,kt=bt/4,St=2*bt/3,Pt=Math.log10,Dt=Math.sign;function Ct(t){const e=Math.pow(10,Math.floor(Pt(t))),i=t/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function Ot(t){const e=[],i=Math.sqrt(t);let n;for(n=1;n<i;n++)t%n==0&&(e.push(n),e.push(t/n));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}function Tt(t){return!isNaN(parseFloat(t))&&isFinite(t)}function At(t,e,i){return Math.abs(t-e)<i}function Lt(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}function Rt(t,e,i){let n,o,s;for(n=0,o=t.length;n<o;n++)s=t[n][i],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Et(t){return t*(bt/180)}function It(t){return t*(180/bt)}function zt(t){if(!X(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Ft(t,e){const i=e.x-t.x,n=e.y-t.y,o=Math.sqrt(i*i+n*n);let s=Math.atan2(n,i);return s<-.5*bt&&(s+=_t),{angle:s,distance:o}}function Vt(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Bt(t,e){return(t-e+yt)%_t-bt}function Wt(t){return(t%_t+_t)%_t}function Ht(t,e,i,n){const o=Wt(t),s=Wt(e),a=Wt(i),r=Wt(s-o),l=Wt(a-o),c=Wt(o-s),h=Wt(o-a);return o===s||o===a||n&&s===a||r>l&&c<h}function Nt(t,e,i){return Math.max(e,Math.min(i,t))}function jt(t){return Nt(t,-32768,32767)}function $t(t){return!t||$(t.size)||$(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Yt(t,e,i,n,o){let s=e[o];return s||(s=e[o]=t.measureText(o).width,i.push(o)),s>n&&(n=s),n}function Ut(t,e,i,n){let o=(n=n||{}).data=n.data||{},s=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(o=n.data={},s=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let a=0;const r=i.length;let l,c,h,d,u;for(l=0;l<r;l++)if(d=i[l],null!=d&&!0!==Y(d))a=Yt(t,o,s,a,d);else if(Y(d))for(c=0,h=d.length;c<h;c++)u=d[c],null==u||Y(u)||(a=Yt(t,o,s,a,u));t.restore();const f=s.length/2;if(f>i.length){for(l=0;l<f;l++)delete o[s[l]];s.splice(0,f)}return a}function Xt(t,e,i){const n=t.currentDevicePixelRatio,o=0!==i?Math.max(i/2,.5):0;return Math.round((e-o)*n)/n+o}function qt(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Kt(t,e,i,n){let o,s,a,r,l;const c=e.pointStyle,h=e.rotation,d=e.radius;let u=(h||0)*wt;if(c&&"object"==typeof c&&(o=c.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,n),t.rotate(u),t.drawImage(c,-c.width/2,-c.height/2,c.width,c.height),void t.restore();if(!(isNaN(d)||d<=0)){switch(t.beginPath(),c){default:t.arc(i,n,d,0,_t),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(u)*d,n-Math.cos(u)*d),u+=St,t.lineTo(i+Math.sin(u)*d,n-Math.cos(u)*d),u+=St,t.lineTo(i+Math.sin(u)*d,n-Math.cos(u)*d),t.closePath();break;case"rectRounded":l=.516*d,r=d-l,s=Math.cos(u+kt)*r,a=Math.sin(u+kt)*r,t.arc(i-s,n-a,l,u-bt,u-Mt),t.arc(i+a,n-s,l,u-Mt,u),t.arc(i+s,n+a,l,u,u+Mt),t.arc(i-a,n+s,l,u+Mt,u+bt),t.closePath();break;case"rect":if(!h){r=Math.SQRT1_2*d,t.rect(i-r,n-r,2*r,2*r);break}u+=kt;case"rectRot":s=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-s,n-a),t.lineTo(i+a,n-s),t.lineTo(i+s,n+a),t.lineTo(i-a,n+s),t.closePath();break;case"crossRot":u+=kt;case"cross":s=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-s,n-a),t.lineTo(i+s,n+a),t.moveTo(i+a,n-s),t.lineTo(i-a,n+s);break;case"star":s=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-s,n-a),t.lineTo(i+s,n+a),t.moveTo(i+a,n-s),t.lineTo(i-a,n+s),u+=kt,s=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-s,n-a),t.lineTo(i+s,n+a),t.moveTo(i+a,n-s),t.lineTo(i-a,n+s);break;case"line":s=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-s,n-a),t.lineTo(i+s,n+a);break;case"dash":t.moveTo(i,n),t.lineTo(i+Math.cos(u)*d,n+Math.sin(u)*d)}t.fill(),e.borderWidth>0&&t.stroke()}}function Gt(t,e,i){return i=i||.5,t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function Zt(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Qt(t){t.restore()}function Jt(t,e,i,n,o){if(!e)return t.lineTo(i.x,i.y);if("middle"===o){const n=(e.x+i.x)/2;t.lineTo(n,e.y),t.lineTo(n,i.y)}else"after"===o!=!!n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function te(t,e,i,n){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?i.cp2x:i.cp1x,n?i.cp2y:i.cp1y,i.x,i.y)}function ee(t,e,i,n,o,s={}){const a=Y(e)?e:[e],r=s.strokeWidth>0&&""!==s.strokeColor;let l,c;for(t.save(),s.translation&&t.translate(s.translation[0],s.translation[1]),$(s.rotation)||t.rotate(s.rotation),t.font=o.string,s.color&&(t.fillStyle=s.color),s.textAlign&&(t.textAlign=s.textAlign),s.textBaseline&&(t.textBaseline=s.textBaseline),l=0;l<a.length;++l){if(c=a[l],r&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),$(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(c,i,n,s.maxWidth)),t.fillText(c,i,n,s.maxWidth),s.strikethrough||s.underline){const e=t.measureText(c),o=i-e.actualBoundingBoxLeft,a=i+e.actualBoundingBoxRight,r=n-e.actualBoundingBoxAscent,l=n+e.actualBoundingBoxDescent,h=s.strikethrough?(r+l)/2:l;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,h),t.lineTo(a,h),t.stroke()}n+=o.lineHeight}t.restore()}function ie(t,e){const{x:i,y:n,w:o,h:s,radius:a}=e;t.arc(i+a.topLeft,n+a.topLeft,a.topLeft,-Mt,bt,!0),t.lineTo(i,n+s-a.bottomLeft),t.arc(i+a.bottomLeft,n+s-a.bottomLeft,a.bottomLeft,bt,Mt,!0),t.lineTo(i+o-a.bottomRight,n+s),t.arc(i+o-a.bottomRight,n+s-a.bottomRight,a.bottomRight,Mt,0,!0),t.lineTo(i+o,n+a.topRight),t.arc(i+o-a.topRight,n+a.topRight,a.topRight,0,-Mt,!0),t.lineTo(i+a.topLeft,n)}function ne(t,e,i){i=i||(i=>t[i]<e);let n,o=t.length-1,s=0;for(;o-s>1;)n=s+o>>1,i(n)?s=n:o=n;return{lo:s,hi:o}}const oe=(t,e,i)=>ne(t,i,(n=>t[n][e]<i)),se=(t,e,i)=>ne(t,i,(n=>t[n][e]>=i));function ae(t,e,i){let n=0,o=t.length;for(;n<o&&t[n]<e;)n++;for(;o>n&&t[o-1]>i;)o--;return n>0||o<t.length?t.slice(n,o):t}const re=["push","pop","shift","splice","unshift"];function le(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),re.forEach((e=>{const i="_onData"+ct(e),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const o=n.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"==typeof t[i]&&t[i](...e)})),o}})})))}function ce(t,e){const i=t._chartjs;if(!i)return;const n=i.listeners,o=n.indexOf(e);-1!==o&&n.splice(o,1),n.length>0||(re.forEach((e=>{delete t[e]})),delete t._chartjs)}function he(t){const e=new Set;let i,n;for(i=0,n=t.length;i<n;++i)e.add(t[i]);if(e.size===n)return t;const o=[];return e.forEach((t=>{o.push(t)})),o}function de(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function ue(t,e,i){let n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}const fe=t=>window.getComputedStyle(t,null);function ge(t,e){return fe(t).getPropertyValue(e)}const pe=["top","right","bottom","left"];function me(t,e,i){const n={};i=i?"-"+i:"";for(let o=0;o<4;o++){const s=pe[o];n[s]=parseFloat(t[e+"-"+s+i])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}function xe(t,e){const{canvas:i,currentDevicePixelRatio:n}=e,o=fe(i),s="border-box"===o.boxSizing,a=me(o,"padding"),r=me(o,"border","width"),{x:l,y:c,box:h}=function(t,e){const i=t.native||t,n=i.touches,o=n&&n.length?n[0]:i,{offsetX:s,offsetY:a}=o;let r,l,c=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(s,a,i.target))r=s,l=a;else{const t=e.getBoundingClientRect();r=o.clientX-t.left,l=o.clientY-t.top,c=!0}return{x:r,y:l,box:c}}(t,i),d=a.left+(h&&r.left),u=a.top+(h&&r.top);let{width:f,height:g}=e;return s&&(f-=a.width+r.width,g-=a.height+r.height),{x:Math.round((l-d)/f*i.width/n),y:Math.round((c-u)/g*i.height/n)}}const be=t=>Math.round(10*t)/10;function _e(t,e,i,n){const o=fe(t),s=me(o,"margin"),a=ue(o.maxWidth,t,"clientWidth")||vt,r=ue(o.maxHeight,t,"clientHeight")||vt,l=function(t,e,i){let n,o;if(void 0===e||void 0===i){const s=de(t);if(s){const t=s.getBoundingClientRect(),a=fe(s),r=me(a,"border","width"),l=me(a,"padding");e=t.width-l.width-r.width,i=t.height-l.height-r.height,n=ue(a.maxWidth,s,"clientWidth"),o=ue(a.maxHeight,s,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:n||vt,maxHeight:o||vt}}(t,e,i);let{width:c,height:h}=l;if("content-box"===o.boxSizing){const t=me(o,"border","width"),e=me(o,"padding");c-=e.width+t.width,h-=e.height+t.height}return c=Math.max(0,c-s.width),h=Math.max(0,n?Math.floor(c/n):h-s.height),c=be(Math.min(c,a,l.maxWidth)),h=be(Math.min(h,r,l.maxHeight)),c&&!h&&(h=be(c/2)),{width:c,height:h}}function ye(t,e,i){const n=e||1,o=Math.floor(t.height*n),s=Math.floor(t.width*n);t.height=o/n,t.width=s/n;const a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==n||a.height!==o||a.width!==s)&&(t.currentDevicePixelRatio=n,a.height=o,a.width=s,t.ctx.setTransform(n,0,0,n,0,0),!0)}const ve=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function we(t,e){const i=ge(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Me(t,e){return"native"in t?{x:t.x,y:t.y}:xe(t,e)}function ke(t,e,i,n){const{controller:o,data:s,_sorted:a}=t,r=o._cachedMeta.iScale;if(r&&e===r.axis&&a&&s.length){const t=r._reversePixels?se:oe;if(!n)return t(s,e,i);if(o._sharedOptions){const n=s[0],o="function"==typeof n.getRange&&n.getRange(e);if(o){const n=t(s,e,i-o),a=t(s,e,i+o);return{lo:n.lo,hi:a.hi}}}}return{lo:0,hi:s.length-1}}function Se(t,e,i,n,o){const s=t.getSortedVisibleDatasetMetas(),a=i[e];for(let t=0,i=s.length;t<i;++t){const{index:i,data:r}=s[t],{lo:l,hi:c}=ke(s[t],e,a,o);for(let t=l;t<=c;++t){const e=r[t];e.skip||n(e,i,t)}}}function Pe(t,e,i,n){const o=[];if(!Gt(e,t.chartArea,t._minPadding))return o;return Se(t,i,e,(function(t,i,s){t.inRange(e.x,e.y,n)&&o.push({element:t,datasetIndex:i,index:s})}),!0),o}function De(t,e,i,n,o){const s=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){const o=e?Math.abs(t.x-n.x):0,s=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}}(i);let a=Number.POSITIVE_INFINITY,r=[];if(!Gt(e,t.chartArea,t._minPadding))return r;return Se(t,i,e,(function(i,l,c){if(n&&!i.inRange(e.x,e.y,o))return;const h=i.getCenterPoint(o);if(!Gt(h,t.chartArea,t._minPadding))return;const d=s(e,h);d<a?(r=[{element:i,datasetIndex:l,index:c}],a=d):d===a&&r.push({element:i,datasetIndex:l,index:c})})),r}function Ce(t,e,i,n){const o=Me(e,t),s=[],a=i.axis,r="x"===a?"inXRange":"inYRange";let l=!1;return function(t,e){const i=t.getSortedVisibleDatasetMetas();let n,o,s;for(let t=0,a=i.length;t<a;++t){({index:n,data:o}=i[t]);for(let t=0,i=o.length;t<i;++t)s=o[t],s.skip||e(s,n,t)}}(t,((t,e,i)=>{t[r](o[a],n)&&s.push({element:t,datasetIndex:e,index:i}),t.inRange(o.x,o.y,n)&&(l=!0)})),i.intersect&&!l?[]:s}var Oe={modes:{index(t,e,i,n){const o=Me(e,t),s=i.axis||"x",a=i.intersect?Pe(t,o,s,n):De(t,o,s,!1,n),r=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=a[0].index,i=t.data[e];i&&!i.skip&&r.push({element:i,datasetIndex:t.index,index:e})})),r):[]},dataset(t,e,i,n){const o=Me(e,t),s=i.axis||"xy";let a=i.intersect?Pe(t,o,s,n):De(t,o,s,!1,n);if(a.length>0){const e=a[0].datasetIndex,i=t.getDatasetMeta(e).data;a=[];for(let t=0;t<i.length;++t)a.push({element:i[t],datasetIndex:e,index:t})}return a},point:(t,e,i,n)=>Pe(t,Me(e,t),i.axis||"xy",n),nearest:(t,e,i,n)=>De(t,Me(e,t),i.axis||"xy",i.intersect,n),x:(t,e,i,n)=>(i.axis="x",Ce(t,e,i,n)),y:(t,e,i,n)=>(i.axis="y",Ce(t,e,i,n))}};const Te=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),Ae=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function Le(t,e){const i=(""+t).match(Te);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}function Re(t,e){const i={},n=U(e),o=n?Object.keys(e):e,s=U(t)?n?i=>K(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of o)i[t]=+s(t)||0;return i}function Ee(t){return Re(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Ie(t){return Re(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ze(t){const e=Ee(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Fe(t,e){t=t||{},e=e||xt.font;let i=K(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let n=K(t.style,e.style);n&&!(""+n).match(Ae)&&(console.warn('Invalid font style specified: "'+n+'"'),n="");const o={family:K(t.family,e.family),lineHeight:Le(K(t.lineHeight,e.lineHeight),i),size:i,style:n,weight:K(t.weight,e.weight),string:""};return o.string=$t(o),o}function Ve(t,e,i,n){let o,s,a,r=!0;for(o=0,s=t.length;o<s;++o)if(a=t[o],void 0!==a&&(void 0!==e&&"function"==typeof a&&(a=a(e),r=!1),void 0!==i&&Y(a)&&(a=a[i%a.length],r=!1),void 0!==a))return n&&!r&&(n.cacheable=!1),a}function Be(t,e){const{min:i,max:n}=t;return{min:i-Math.abs(Z(e,i)),max:n+Z(e,n)}}const We=["left","top","right","bottom"];function He(t,e){return t.filter((t=>t.pos===e))}function Ne(t,e){return t.filter((t=>-1===We.indexOf(t.pos)&&t.box.axis===e))}function je(t,e){return t.sort(((t,i)=>{const n=e?i:t,o=e?t:i;return n.weight===o.weight?n.index-o.index:n.weight-o.weight}))}function $e(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function Ye(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Ue(t,e,i){const n=i.box,o=t.maxPadding;U(i.pos)||(i.size&&(t[i.pos]-=i.size),i.size=i.horizontal?n.height:n.width,t[i.pos]+=i.size),n.getPadding&&Ye(o,n.getPadding());const s=Math.max(0,e.outerWidth-$e(o,t,"left","right")),a=Math.max(0,e.outerHeight-$e(o,t,"top","bottom")),r=s!==t.w,l=a!==t.h;return t.w=s,t.h=a,i.horizontal?{same:r,other:l}:{same:l,other:r}}function Xe(t,e){const i=e.maxPadding;function n(t){const n={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{n[t]=Math.max(e[t],i[t])})),n}return n(t?["left","right"]:["top","bottom"])}function qe(t,e,i){const n=[];let o,s,a,r,l,c;for(o=0,s=t.length,l=0;o<s;++o){a=t[o],r=a.box,r.update(a.width||e.w,a.height||e.h,Xe(a.horizontal,e));const{same:s,other:h}=Ue(e,i,a);l|=s&&n.length,c=c||h,r.fullSize||n.push(a)}return l&&qe(n,e,i)||c}function Ke(t,e,i){const n=i.padding;let o,s,a,r,l=e.x,c=e.y;for(o=0,s=t.length;o<s;++o)a=t[o],r=a.box,a.horizontal?(r.left=r.fullSize?n.left:e.left,r.right=r.fullSize?i.outerWidth-n.right:e.left+e.w,r.top=c,r.bottom=c+r.height,r.width=r.right-r.left,c=r.bottom):(r.left=l,r.right=l+r.width,r.top=r.fullSize?n.top:e.top,r.bottom=r.fullSize?i.outerHeight-n.right:e.top+e.h,r.height=r.bottom-r.top,l=r.right);e.x=l,e.y=c}xt.set("layout",{padding:{top:0,right:0,bottom:0,left:0}});var Ge={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,n){if(!t)return;const o=ze(t.options.layout.padding),s=Math.max(e-o.width,0),a=Math.max(i-o.height,0),r=function(t){const e=function(t){const e=[];let i,n,o;for(i=0,n=(t||[]).length;i<n;++i)o=t[i],e.push({index:i,box:o,pos:o.position,horizontal:o.isHorizontal(),weight:o.weight});return e}(t),i=je(e.filter((t=>t.box.fullSize)),!0),n=je(He(e,"left"),!0),o=je(He(e,"right")),s=je(He(e,"top"),!0),a=je(He(e,"bottom")),r=Ne(e,"x"),l=Ne(e,"y");return{fullSize:i,leftAndTop:n.concat(s),rightAndBottom:o.concat(l).concat(a).concat(r),chartArea:He(e,"chartArea"),vertical:n.concat(o).concat(l),horizontal:s.concat(a).concat(r)}}(t.boxes),l=r.vertical,c=r.horizontal;J(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const h=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:o,availableWidth:s,availableHeight:a,vBoxMaxWidth:s/2/h,hBoxMaxHeight:a/2}),u=Object.assign({},o);Ye(u,ze(n));const f=Object.assign({maxPadding:u,w:s,h:a,x:o.left,y:o.top},o);!function(t,e){let i,n,o;for(i=0,n=t.length;i<n;++i)o=t[i],o.horizontal?(o.width=o.box.fullSize&&e.availableWidth,o.height=e.hBoxMaxHeight):(o.width=e.vBoxMaxWidth,o.height=o.box.fullSize&&e.availableHeight)}(l.concat(c),d),qe(r.fullSize,f,d),qe(l,f,d),qe(c,f,d)&&qe(l,f,d),function(t){const e=t.maxPadding;function i(i){const n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(f),Ke(r.leftAndTop,f,d),f.x+=f.w,f.y+=f.h,Ke(r.rightAndBottom,f,d),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},J(r.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(f.w,f.h)}))}};class Ze{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,n){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):i)}}isAttached(t){return!0}}class Qe extends Ze{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}}const Je={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ti=t=>null===t||""===t;const ei=!!ve&&{passive:!0};function ii(t,e,i){t.canvas.removeEventListener(e,i,ei)}function ni(t,e,i){const n=t.canvas,o=n&&de(n)||n,s=new MutationObserver((t=>{const e=de(o);t.forEach((t=>{for(let n=0;n<t.addedNodes.length;n++){const s=t.addedNodes[n];s!==o&&s!==e||i(t.target)}}))}));return s.observe(document,{childList:!0,subtree:!0}),s}function oi(t,e,i){const n=t.canvas,o=n&&de(n);if(!o)return;const s=new MutationObserver((t=>{t.forEach((t=>{for(let e=0;e<t.removedNodes.length;e++)if(t.removedNodes[e]===n){i();break}}))}));return s.observe(o,{childList:!0}),s}const si=new Map;let ai=0;function ri(){const t=window.devicePixelRatio;t!==ai&&(ai=t,si.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function li(t,i,n){const o=t.canvas,s=o&&de(o);if(!s)return;const a=e(((t,e)=>{const i=s.clientWidth;n(t,e),i<s.clientWidth&&n()}),window),r=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,n=e.contentRect.height;0===i&&0===n||a(i,n)}));return r.observe(s),function(t,e){si.size||window.addEventListener("resize",ri),si.set(t,e)}(t,a),r}function ci(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){si.delete(t),si.size||window.removeEventListener("resize",ri)}(t)}function hi(t,i,n){const o=t.canvas,s=e((e=>{null!==t.ctx&&n(function(t,e){const i=Je[t.type]||t.type,{x:n,y:o}=xe(t,e);return{type:i,chart:e,native:t,x:void 0!==n?n:null,y:void 0!==o?o:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,i){t.addEventListener(e,i,ei)}(o,i,s),s}class di extends Ze{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,n=t.getAttribute("height"),o=t.getAttribute("width");if(t.$chartjs={initial:{height:n,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",ti(o)){const e=we(t,"width");void 0!==e&&(t.width=e)}if(ti(n))if(""===t.style.height)t.height=t.width/(e||2);else{const e=we(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const i=e.$chartjs.initial;["height","width"].forEach((t=>{const n=i[t];$(n)?e.removeAttribute(t):e.setAttribute(t,n)}));const n=i.style||{};return Object.keys(n).forEach((t=>{e.style[t]=n[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,i){this.removeEventListener(t,e);const n=t.$proxies||(t.$proxies={}),o={attach:ni,detach:oi,resize:li}[e]||hi;n[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),n=i[e];if(!n)return;({attach:ci,detach:ci,resize:ci}[e]||ii)(t,e,n),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,n){return _e(t,e,i,n)}isAttached(t){const e=de(t);return!(!e||!de(e))}}var ui=Object.freeze({__proto__:null,BasePlatform:Ze,BasicPlatform:Qe,DomPlatform:di});const fi=t=>0===t||1===t,gi=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*_t/i),pi=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*_t/i)+1,mi={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Mt),easeOutSine:t=>Math.sin(t*Mt),easeInOutSine:t=>-.5*(Math.cos(bt*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>fi(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>fi(t)?t:gi(t,.075,.3),easeOutElastic:t=>fi(t)?t:pi(t,.075,.3),easeInOutElastic(t){const e=.1125;return fi(t)?t:t<.5?.5*gi(2*t,e,.45):.5+.5*pi(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-mi.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*mi.easeInBounce(2*t):.5*mi.easeOutBounce(2*t-1)+.5},xi="transparent",bi={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const n=W(t||xi),o=n.valid&&W(e||xi);return o&&o.valid?o.mix(n,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class _i{constructor(t,e,i,n){const o=e[i];n=Ve([t.to,n,o,t.from]);const s=Ve([t.from,o,n]);this._active=!0,this._fn=t.fn||bi[t.type||typeof s],this._easing=mi[t.easing]||mi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=s,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,i){const n=this;if(n._active){n._notify(!1);const o=n._target[n._prop],s=i-n._start,a=n._duration-s;n._start=i,n._duration=Math.floor(Math.max(a,t.duration)),n._total+=s,n._loop=!!t.loop,n._to=Ve([t.to,e,o,t.from]),n._from=Ve([t.from,o,e])}}cancel(){const t=this;t._active&&(t.tick(Date.now()),t._active=!1,t._notify(!1))}tick(t){const e=this,i=t-e._start,n=e._duration,o=e._prop,s=e._from,a=e._loop,r=e._to;let l;if(e._active=s!==r&&(a||i<n),!e._active)return e._target[o]=r,void e._notify(!0);i<0?e._target[o]=s:(l=i/n%2,l=a&&l>1?2-l:l,l=e._easing(Math.min(1,Math.max(0,l))),e._target[o]=e._fn(s,r,l))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}xt.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const yi=Object.keys(xt.animation);xt.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),xt.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),xt.describe("animations",{_fallback:"animation"}),xt.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class vi{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!U(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const n=t[i];if(!U(n))return;const o={};for(const t of yi)o[t]=n[t];(Y(n.properties)&&n.properties||[i]).forEach((t=>{t!==i&&e.has(t)||e.set(t,o)}))}))}_animateOptions(t,e){const i=e.options,n=function(t,e){if(!e)return;let i=t.options;if(!i)return void(t.options=e);i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}}));return i}(t,i);if(!n)return[];const o=this._createAnimations(n,i);return i.$shared&&function(t,e){const i=[],n=Object.keys(e);for(let e=0;e<n.length;e++){const o=t[n[e]];o&&o.active()&&i.push(o.wait())}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i}),(()=>{})),o}_createAnimations(t,e){const i=this._properties,n=[],o=t.$animations||(t.$animations={}),s=Object.keys(e),a=Date.now();let r;for(r=s.length-1;r>=0;--r){const l=s[r];if("$"===l.charAt(0))continue;if("options"===l){n.push(...this._animateOptions(t,e));continue}const c=e[l];let h=o[l];const d=i.get(l);if(h){if(d&&h.active()){h.update(d,c,a);continue}h.cancel()}d&&d.duration?(o[l]=h=new _i(d,t,l,c),n.push(h)):t[l]=c}return n}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(a.add(this._chart,i),!0):void 0}}function wi(t,e){const i=t&&t.options||{},n=i.reverse,o=void 0===i.min?e:0,s=void 0===i.max?e:0;return{start:n?s:o,end:n?o:s}}function Mi(t,e){const i=[],n=t._getSortedDatasetMetas(e);let o,s;for(o=0,s=n.length;o<s;++o)i.push(n[o].index);return i}function ki(t,e,i,n){const o=t.keys,s="single"===n.mode;let a,r,l,c;if(null!==e){for(a=0,r=o.length;a<r;++a){if(l=+o[a],l===i){if(n.all)continue;break}c=t.values[l],X(c)&&(s||0===e||Dt(e)===Dt(c))&&(e+=c)}return e}}function Si(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function Pi(t,e,i){const n=t[e]||(t[e]={});return n[i]||(n[i]={})}function Di(t,e,i){for(const n of e.getMatchingVisibleMetas("bar").reverse()){const e=t[n.index];if(i&&e>0||!i&&e<0)return n.index}return null}function Ci(t,e){const{chart:i,_cachedMeta:n}=t,o=i._stacks||(i._stacks={}),{iScale:s,vScale:a,index:r}=n,l=s.axis,c=a.axis,h=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(s,a,n),d=e.length;let u;for(let t=0;t<d;++t){const i=e[t],{[l]:n,[c]:s}=i;u=(i._stacks||(i._stacks={}))[c]=Pi(o,h,n),u[r]=s,u._top=Di(u,a,!0),u._bottom=Di(u,a,!1)}}function Oi(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function Ti(t,e){const i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const n of e){const e=n._stacks;if(!e||void 0===e[i]||void 0===e[i][t.index])return;delete e[i][t.index]}}}const Ai=t=>"reset"===t||"none"===t,Li=(t,e)=>e?t:Object.assign({},t);class Ri{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this,e=t._cachedMeta;t.configure(),t.linkScales(),e._stacked=Si(e.vScale,e),t.addElements()}updateIndex(t){this.index!==t&&Ti(this._cachedMeta),this.index=t}linkScales(){const t=this,e=t.chart,i=t._cachedMeta,n=t.getDataset(),o=(t,e,i,n)=>"x"===t?e:"r"===t?n:i,s=i.xAxisID=K(n.xAxisID,Oi(e,"x")),a=i.yAxisID=K(n.yAxisID,Oi(e,"y")),r=i.rAxisID=K(n.rAxisID,Oi(e,"r")),l=i.indexAxis,c=i.iAxisID=o(l,s,a,r),h=i.vAxisID=o(l,a,s,r);i.xScale=t.getScaleForId(s),i.yScale=t.getScaleForId(a),i.rScale=t.getScaleForId(r),i.iScale=t.getScaleForId(c),i.vScale=t.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&ce(this._data,this),t._stacked&&Ti(t)}_dataCheck(){const t=this,e=t.getDataset(),i=e.data||(e.data=[]),n=t._data;if(U(i))t._data=function(t){const e=Object.keys(t),i=new Array(e.length);let n,o,s;for(n=0,o=e.length;n<o;++n)s=e[n],i[n]={x:s,y:t[s]};return i}(i);else if(n!==i){if(n){ce(n,t);const e=t._cachedMeta;Ti(e),e._parsed=[]}i&&Object.isExtensible(i)&&le(i,t),t._syncList=[],t._data=i}}addElements(){const t=this,e=t._cachedMeta;t._dataCheck(),t.datasetElementType&&(e.dataset=new t.datasetElementType)}buildOrUpdateElements(t){const e=this,i=e._cachedMeta,n=e.getDataset();let o=!1;e._dataCheck();const s=i._stacked;i._stacked=Si(i.vScale,i),i.stack!==n.stack&&(o=!0,Ti(i),i.stack=n.stack),e._resyncElements(t),(o||s!==i._stacked)&&Ci(e,i._parsed)}configure(){const t=this,e=t.chart.config,i=e.datasetScopeKeys(t._type),n=e.getOptionScopes(t.getDataset(),i,!0);t.options=e.createResolver(n,t.getContext()),t._parsing=t.options.parsing}parse(t,e){const i=this,{_cachedMeta:n,_data:o}=i,{iScale:s,_stacked:a}=n,r=s.axis;let l,c,h,d=0===t&&e===o.length||n._sorted,u=t>0&&n._parsed[t-1];if(!1===i._parsing)n._parsed=o,n._sorted=!0,h=o;else{h=Y(o[t])?i.parseArrayData(n,o,t,e):U(o[t])?i.parseObjectData(n,o,t,e):i.parsePrimitiveData(n,o,t,e);const s=()=>null===c[r]||u&&c[r]<u[r];for(l=0;l<e;++l)n._parsed[l+t]=c=h[l],d&&(s()&&(d=!1),u=c);n._sorted=d}a&&Ci(i,h)}parsePrimitiveData(t,e,i,n){const{iScale:o,vScale:s}=t,a=o.axis,r=s.axis,l=o.getLabels(),c=o===s,h=new Array(n);let d,u,f;for(d=0,u=n;d<u;++d)f=d+i,h[d]={[a]:c||o.parse(l[f],f),[r]:s.parse(e[f],f)};return h}parseArrayData(t,e,i,n){const{xScale:o,yScale:s}=t,a=new Array(n);let r,l,c,h;for(r=0,l=n;r<l;++r)c=r+i,h=e[c],a[r]={x:o.parse(h[0],c),y:s.parse(h[1],c)};return a}parseObjectData(t,e,i,n){const{xScale:o,yScale:s}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l=new Array(n);let c,h,d,u;for(c=0,h=n;c<h;++c)d=c+i,u=e[d],l[c]={x:o.parse(lt(u,a),d),y:s.parse(lt(u,r),d)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const n=this.chart,o=this._cachedMeta,s=e[t.axis];return ki({keys:Mi(n,!0),values:e._stacks[t.axis]},s,o.index,{mode:i})}updateRangeFromParsed(t,e,i,n){const o=i[e.axis];let s=null===o?NaN:o;const a=n&&i._stacks[e.axis];n&&a&&(n.values=a,t.min=Math.min(t.min,s),t.max=Math.max(t.max,s),s=ki(n,o,this._cachedMeta.index,{all:!0})),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,e){const i=this,n=i._cachedMeta,o=n._parsed,s=n._sorted&&t===n.iScale,a=o.length,r=i._getOtherScale(t),l=e&&n._stacked&&{keys:Mi(i.chart,!0),values:null},c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=function(t){const{min:e,max:i,minDefined:n,maxDefined:o}=t.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:o?i:Number.POSITIVE_INFINITY}}(r);let u,f,g,p;function m(){return g=o[u],f=g[t.axis],p=g[r.axis],!X(f)||h>p||d<p}for(u=0;u<a&&(m()||(i.updateRangeFromParsed(c,t,g,l),!s));++u);if(s)for(u=a-1;u>=0;--u)if(!m()){i.updateRangeFromParsed(c,t,g,l);break}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let n,o,s;for(n=0,o=e.length;n<o;++n)s=e[n][t.axis],X(s)&&i.push(s);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,n=e.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:n?""+n.getLabelForValue(o[n.axis]):""}}_update(t){const e=this,i=e._cachedMeta;e.configure(),e._cachedDataOpts={},e.update(t||"default"),i._clip=function(t){let e,i,n,o;return U(t)?(e=t.top,i=t.right,n=t.bottom,o=t.left):e=i=n=o=t,{top:e,right:i,bottom:n,left:o}}(K(e.options.clip,function(t,e,i){if(!1===i)return!1;const n=wi(t,i),o=wi(e,i);return{top:o.end,right:n.end,bottom:o.start,left:n.start}}(i.xScale,i.yScale,e.getMaxOverflow())))}update(t){}draw(){const t=this,e=t._ctx,i=t.chart,n=t._cachedMeta,o=n.data||[],s=i.chartArea,a=[],r=t._drawStart||0,l=t._drawCount||o.length-r;let c;for(n.dataset&&n.dataset.draw(e,s,r,l),c=r;c<r+l;++c){const t=o[c];t.active?a.push(t):t.draw(e,s)}for(c=0;c<a.length;++c)a[c].draw(e,s)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const n=this,o=n.getDataset();let s;if(t>=0&&t<n._cachedMeta.data.length){const e=n._cachedMeta.data[t];s=e.$context||(e.$context=function(t,e,i){return Object.assign(Object.create(t),{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(n.getContext(),t,e)),s.parsed=n.getParsed(t),s.raw=o.data[t],s.index=s.dataIndex=t}else s=n.$context||(n.$context=function(t,e){return Object.assign(Object.create(t),{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(n.chart.getContext(),n.index)),s.dataset=o,s.index=s.datasetIndex=n.index;return s.active=!!e,s.mode=i,s}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const n=this,o="active"===e,s=n._cachedDataOpts,a=t+"-"+e,r=s[a],l=n.enableOptionSharing&&ht(i);if(r)return Li(r,l);const c=n.chart.config,h=c.datasetElementScopeKeys(n._type,t),d=o?[`${t}Hover`,"hover",t,""]:[t,""],u=c.getOptionScopes(n.getDataset(),h),f=Object.keys(xt.elements[t]),g=c.resolveNamedOptions(u,f,(()=>n.getContext(i,o)),d);return g.$shared&&(g.$shared=l,s[a]=Object.freeze(Li(g,l))),g}_resolveAnimations(t,e,i){const n=this,o=n.chart,s=n._cachedDataOpts,a=`animation-${e}`,r=s[a];if(r)return r;let l;if(!1!==o.options.animation){const o=n.chart.config,s=o.datasetAnimationScopeKeys(n._type,e),a=o.getOptionScopes(n.getDataset(),s);l=o.createResolver(a,n.getContext(t,i,e))}const c=new vi(o,l&&l.animations);return l&&l._cacheable&&(s[a]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ai(t)||this.chart._animationsDisabled}updateElement(t,e,i,n){Ai(n)?Object.assign(t,i):this._resolveAnimations(e,n).update(t,i)}updateSharedOptions(t,e,i){t&&!Ai(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,n){t.active=n;const o=this.getStyle(e,n);this._resolveAnimations(e,i,n).update(t,{options:!n&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this,i=e._data,n=e._cachedMeta.data;for(const[t,i,n]of e._syncList)e[t](i,n);e._syncList=[];const o=n.length,s=i.length,a=Math.min(s,o);a&&e.parse(0,a),s>o?e._insertElements(o,s-o,t):s<o&&e._removeElements(s,o-s)}_insertElements(t,e,i=!0){const n=this,o=n._cachedMeta,s=o.data,a=t+e;let r;const l=t=>{for(t.length+=e,r=t.length-1;r>=a;r--)t[r]=t[r-e]};for(l(s),r=t;r<a;++r)s[r]=new n.dataElementType;n._parsing&&l(o._parsed),n.parse(t,e),i&&n.updateElements(s,t,e,"reset")}updateElements(t,e,i,n){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const n=i._parsed.splice(t,e);i._stacked&&Ti(i,n)}i.data.splice(t,e)}_onDataPush(){const t=arguments.length;this._syncList.push(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._syncList.push(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._syncList.push(["_removeElements",0,1])}_onDataSplice(t,e){this._syncList.push(["_removeElements",t,e]),this._syncList.push(["_insertElements",t,arguments.length-2])}_onDataUnshift(){this._syncList.push(["_insertElements",0,arguments.length])}}Ri.defaults={},Ri.prototype.datasetElementType=null,Ri.prototype.dataElementType=null;class Ei{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Tt(this.x)&&Tt(this.y)}getProps(t,e){const i=this,n=this.$animations;if(!e||!n)return i;const o={};return t.forEach((t=>{o[t]=n[t]&&n[t].active()?n[t]._to:i[t]})),o}}Ei.defaults={},Ei.defaultRoutes=void 0;const Ii=new Map;function zi(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let n=Ii.get(i);return n||(n=new Intl.NumberFormat(t,e),Ii.set(i,n)),n}(e,i).format(t)}const Fi={values:t=>Y(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const n=this.chart.options.locale;let o,s=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(o="scientific"),s=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t));return i}(t,i)}const a=Pt(Math.abs(s)),r=Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:o,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),zi(t,n,l)},logarithmic(t,e,i){if(0===t)return"0";const n=t/Math.pow(10,Math.floor(Pt(t)));return 1===n||2===n||5===n?Fi.numeric.call(this,t,e,i):""}};var Vi={formatters:Fi};function Bi(t,e){const i=t.options.ticks,n=i.maxTicksLimit||function(t){const e=t.options.offset,i=t._tickSize(),n=t._length/i+(e?0:1),o=t._maxLength/i;return Math.floor(Math.min(n,o))}(t),o=i.major.enabled?function(t){const e=[];let i,n;for(i=0,n=t.length;i<n;i++)t[i].major&&e.push(i);return e}(e):[],s=o.length,a=o[0],r=o[s-1],l=[];if(s>n)return function(t,e,i,n){let o,s=0,a=i[0];for(n=Math.ceil(n),o=0;o<t.length;o++)o===a&&(e.push(t[o]),s++,a=i[s*n])}(e,l,o,s/n),l;const c=function(t,e,i){const n=function(t){const e=t.length;let i,n;if(e<2)return!1;for(n=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==n)return!1;return n}(t),o=e.length/i;if(!n)return Math.max(o,1);const s=Ot(n);for(let t=0,e=s.length-1;t<e;t++){const e=s[t];if(e>o)return e}return Math.max(o,1)}(o,e,n);if(s>0){let t,i;const n=s>1?Math.round((r-a)/(s-1)):null;for(Wi(e,l,c,$(n)?0:a-n,a),t=0,i=s-1;t<i;t++)Wi(e,l,c,o[t],o[t+1]);return Wi(e,l,c,r,$(n)?e.length:r+n),l}return Wi(e,l,c),l}function Wi(t,e,i,n,o){const s=K(n,0),a=Math.min(K(o,t.length),t.length);let r,l,c,h=0;for(i=Math.ceil(i),o&&(r=o-n,i=r/Math.floor(r/i)),c=s;c<0;)h++,c=Math.round(s+h*i);for(l=Math.max(s,0);l<a;l++)l===c&&(e.push(t[l]),h++,c=Math.round(s+h*i))}xt.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Vi.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),xt.route("scale.ticks","color","","color"),xt.route("scale.grid","color","","borderColor"),xt.route("scale.grid","borderColor","","borderColor"),xt.route("scale.title","color","","color"),xt.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),xt.describe("scales",{_fallback:"scale"});const Hi=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function Ni(t,e){const i=[],n=t.length/e,o=t.length;let s=0;for(;s<o;s+=n)i.push(t[Math.floor(s)]);return i}function ji(t,e,i){const n=t.ticks.length,o=Math.min(e,n-1),s=t._startPixel,a=t._endPixel,r=1e-6;let l,c=t.getPixelForTick(o);if(!(i&&(l=1===n?Math.max(c-s,a-c):0===e?(t.getPixelForTick(1)-c)/2:(c-t.getPixelForTick(o-1))/2,c+=o<e?l:-l,c<s-r||c>a+r)))return c}function $i(t){return t.drawTicks?t.tickLength:0}function Yi(t,e){if(!t.display)return 0;const i=Fe(t.font,e),n=ze(t.padding);return(Y(t.text)?t.text.length:1)*i.lineHeight+n.height}function Ui(t,e,i){let o=n(t);return(i&&"right"!==e||!i&&"right"===e)&&(o=(t=>"left"===t?"right":"right"===t?"left":t)(o)),o}class Xi extends Ei{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){const e=this;e.options=t.setContext(e.getContext()),e.axis=t.axis,e._userMin=e.parse(t.min),e._userMax=e.parse(t.max),e._suggestedMin=e.parse(t.suggestedMin),e._suggestedMax=e.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:n}=this;return t=q(t,Number.POSITIVE_INFINITY),e=q(e,Number.NEGATIVE_INFINITY),i=q(i,Number.POSITIVE_INFINITY),n=q(n,Number.NEGATIVE_INFINITY),{min:q(t,i),max:q(e,n),minDefined:X(t),maxDefined:X(e)}}getMinMax(t){const e=this;let i,{min:n,max:o,minDefined:s,maxDefined:a}=e.getUserBounds();if(s&&a)return{min:n,max:o};const r=e.getMatchingVisibleMetas();for(let l=0,c=r.length;l<c;++l)i=r[l].controller.getMinMax(e,t),s||(n=Math.min(n,i.min)),a||(o=Math.max(o,i.max));return{min:q(n,q(o,n)),max:q(o,q(n,o))}}getPadding(){const t=this;return{left:t.paddingLeft||0,top:t.paddingTop||0,right:t.paddingRight||0,bottom:t.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Q(this.options.beforeUpdate,[this])}update(t,e,i){const n=this,o=n.options.ticks,s=o.sampleSize;n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),n.ticks=null,n._labelSizes=null,n._gridLineItems=null,n._labelItems=null,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n._maxLength=n.isHorizontal()?n.width+i.left+i.right:n.height+i.top+i.bottom,n._dataLimitsCached||(n.beforeDataLimits(),n.determineDataLimits(),n.afterDataLimits(),n._range=Be(n,n.options.grace),n._dataLimitsCached=!0),n.beforeBuildTicks(),n.ticks=n.buildTicks()||[],n.afterBuildTicks();const a=s<n.ticks.length;n._convertTicksToLabels(a?Ni(n.ticks,s):n.ticks),n.configure(),n.beforeCalculateLabelRotation(),n.calculateLabelRotation(),n.afterCalculateLabelRotation(),o.display&&(o.autoSkip||"auto"===o.source)&&(n.ticks=Bi(n,n.ticks),n._labelSizes=null),a&&n._convertTicksToLabels(n.ticks),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate()}configure(){const t=this;let e,i,n=t.options.reverse;t.isHorizontal()?(e=t.left,i=t.right):(e=t.top,i=t.bottom,n=!n),t._startPixel=e,t._endPixel=i,t._reversePixels=n,t._length=i-e,t._alignToPixels=t.options.alignToPixels}afterUpdate(){Q(this.options.afterUpdate,[this])}beforeSetDimensions(){Q(this.options.beforeSetDimensions,[this])}setDimensions(){const t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0}afterSetDimensions(){Q(this.options.afterSetDimensions,[this])}_callHooks(t){const e=this;e.chart.notifyPlugins(t,e.getContext()),Q(e.options[t],[e])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Q(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this,i=e.options.ticks;let n,o,s;for(n=0,o=t.length;n<o;n++)s=t[n],s.label=Q(i.callback,[s.value,n,t],e);for(n=0;n<o;n++)$(t[n].label)&&(t.splice(n,1),o--,n--)}afterTickToLabelConversion(){Q(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Q(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this,e=t.options,i=e.ticks,n=t.ticks.length,o=i.minRotation||0,s=i.maxRotation;let a,r,l,c=o;if(!t._isVisible()||!i.display||o>=s||n<=1||!t.isHorizontal())return void(t.labelRotation=o);const h=t._getLabelSizes(),d=h.widest.width,u=h.highest.height,f=Nt(t.chart.width-d,0,t.maxWidth);a=e.offset?t.maxWidth/n:f/(n-1),d+6>a&&(a=f/(n-(e.offset?.5:1)),r=t.maxHeight-$i(e.grid)-i.padding-Yi(e.title,t.chart.options.font),l=Math.sqrt(d*d+u*u),c=It(Math.min(Math.asin(Math.min((h.highest.height+6)/a,1)),Math.asin(Math.min(r/l,1))-Math.asin(u/l))),c=Math.max(o,Math.min(s,c))),t.labelRotation=c}afterCalculateLabelRotation(){Q(this.options.afterCalculateLabelRotation,[this])}beforeFit(){Q(this.options.beforeFit,[this])}fit(){const t=this,e={width:0,height:0},{chart:i,options:{ticks:n,title:o,grid:s}}=t,a=t._isVisible(),r=t.isHorizontal();if(a){const a=Yi(o,i.options.font);if(r?(e.width=t.maxWidth,e.height=$i(s)+a):(e.height=t.maxHeight,e.width=$i(s)+a),n.display&&t.ticks.length){const{first:i,last:o,widest:s,highest:a}=t._getLabelSizes(),l=2*n.padding,c=Et(t.labelRotation),h=Math.cos(c),d=Math.sin(c);if(r){const i=n.mirror?0:d*s.width+h*a.height;e.height=Math.min(t.maxHeight,e.height+i+l)}else{const i=n.mirror?0:h*s.width+d*a.height;e.width=Math.min(t.maxWidth,e.width+i+l)}t._calculatePadding(i,o,d,h)}}t._handleMargins(),r?(t.width=t._length=i.width-t._margins.left-t._margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=i.height-t._margins.top-t._margins.bottom)}_calculatePadding(t,e,i,n){const o=this,{ticks:{align:s,padding:a},position:r}=o.options,l=0!==o.labelRotation,c="top"!==r&&"x"===o.axis;if(o.isHorizontal()){const r=o.getPixelForTick(0)-o.left,h=o.right-o.getPixelForTick(o.ticks.length-1);let d=0,u=0;l?c?(d=n*t.width,u=i*e.height):(d=i*t.height,u=n*e.width):"start"===s?u=e.width:"end"===s?d=t.width:(d=t.width/2,u=e.width/2),o.paddingLeft=Math.max((d-r+a)*o.width/(o.width-r),0),o.paddingRight=Math.max((u-h+a)*o.width/(o.width-h),0)}else{let i=e.height/2,n=t.height/2;"start"===s?(i=0,n=t.height):"end"===s&&(i=e.height,n=0),o.paddingTop=i+a,o.paddingBottom=n+a}}_handleMargins(){const t=this;t._margins&&(t._margins.left=Math.max(t.paddingLeft,t._margins.left),t._margins.top=Math.max(t.paddingTop,t._margins.top),t._margins.right=Math.max(t.paddingRight,t._margins.right),t._margins.bottom=Math.max(t.paddingBottom,t._margins.bottom))}afterFit(){Q(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){const e=this;e.beforeTickToLabelConversion(),e.generateTickLabels(t),e.afterTickToLabelConversion()}_getLabelSizes(){const t=this;let e=t._labelSizes;if(!e){const i=t.options.ticks.sampleSize;let n=t.ticks;i<n.length&&(n=Ni(n,i)),t._labelSizes=e=t._computeLabelSizes(n,n.length)}return e}_computeLabelSizes(t,e){const{ctx:i,_longestTextCache:n}=this,o=[],s=[];let a,r,l,c,h,d,u,f,g,p,m,x=0,b=0;for(a=0;a<e;++a){if(c=t[a].label,h=this._resolveTickFontOptions(a),i.font=d=h.string,u=n[d]=n[d]||{data:{},gc:[]},f=h.lineHeight,g=p=0,$(c)||Y(c)){if(Y(c))for(r=0,l=c.length;r<l;++r)m=c[r],$(m)||Y(m)||(g=Yt(i,u.data,u.gc,g,m),p+=f)}else g=Yt(i,u.data,u.gc,g,c),p=f;o.push(g),s.push(p),x=Math.max(g,x),b=Math.max(p,b)}!function(t,e){J(t,(t=>{const i=t.gc,n=i.length/2;let o;if(n>e){for(o=0;o<n;++o)delete t.data[i[o]];i.splice(0,n)}}))}(n,e);const _=o.indexOf(x),y=s.indexOf(b),v=t=>({width:o[t]||0,height:s[t]||0});return{first:v(0),last:v(e-1),widest:v(_),highest:v(y),widths:o,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){const e=this;e._reversePixels&&(t=1-t);const i=e._startPixel+t*e._length;return jt(e._alignToPixels?Xt(e.chart,i,0):i)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this,i=e.ticks||[];if(t>=0&&t<i.length){const n=i[t];return n.$context||(n.$context=function(t,e,i){return Object.assign(Object.create(t),{tick:i,index:e,type:"tick"})}(e.getContext(),t,n))}return e.$context||(e.$context=(n=e.chart.getContext(),o=e,Object.assign(Object.create(n),{scale:o,type:"scale"})));var n,o}_tickSize(){const t=this,e=t.options.ticks,i=Et(t.labelRotation),n=Math.abs(Math.cos(i)),o=Math.abs(Math.sin(i)),s=t._getLabelSizes(),a=e.autoSkipPadding||0,r=s?s.widest.width+a:0,l=s?s.highest.height+a:0;return t.isHorizontal()?l*n>r*o?r/n:l/o:l*o<r*n?l/n:r/o}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this,i=e.axis,n=e.chart,o=e.options,{grid:s,position:a}=o,r=s.offset,l=e.isHorizontal(),c=e.ticks.length+(r?1:0),h=$i(s),d=[],u=s.setContext(e.getContext()),f=u.drawBorder?u.borderWidth:0,g=f/2,p=function(t){return Xt(n,t,f)};let m,x,b,_,y,v,w,M,k,S,P,D;if("top"===a)m=p(e.bottom),v=e.bottom-h,M=m-g,S=p(t.top)+g,D=t.bottom;else if("bottom"===a)m=p(e.top),S=t.top,D=p(t.bottom)-g,v=m+g,M=e.top+h;else if("left"===a)m=p(e.right),y=e.right-h,w=m-g,k=p(t.left)+g,P=t.right;else if("right"===a)m=p(e.left),k=t.left,P=p(t.right)-g,y=m+g,w=e.left+h;else if("x"===i){if("center"===a)m=p((t.top+t.bottom)/2+.5);else if(U(a)){const t=Object.keys(a)[0],i=a[t];m=p(e.chart.scales[t].getPixelForValue(i))}S=t.top,D=t.bottom,v=m+g,M=v+h}else if("y"===i){if("center"===a)m=p((t.left+t.right)/2);else if(U(a)){const t=Object.keys(a)[0],i=a[t];m=p(e.chart.scales[t].getPixelForValue(i))}y=m-g,w=y-h,k=t.left,P=t.right}for(x=0;x<c;++x){const t=s.setContext(e.getContext(x)),i=t.lineWidth,o=t.color,a=s.borderDash||[],c=t.borderDashOffset,h=t.tickWidth,u=t.tickColor,f=t.tickBorderDash||[],g=t.tickBorderDashOffset;b=ji(e,x,r),void 0!==b&&(_=Xt(n,b,i),l?y=w=k=P=_:v=M=S=D=_,d.push({tx1:y,ty1:v,tx2:w,ty2:M,x1:k,y1:S,x2:P,y2:D,width:i,color:o,borderDash:a,borderDashOffset:c,tickWidth:h,tickColor:u,tickBorderDash:f,tickBorderDashOffset:g}))}return e._ticksLength=c,e._borderValue=m,d}_computeLabelItems(t){const e=this,i=e.axis,n=e.options,{position:o,ticks:s}=n,a=e.isHorizontal(),r=e.ticks,{align:l,crossAlign:c,padding:h,mirror:d}=s,u=$i(n.grid),f=u+h,g=d?-h:f,p=-Et(e.labelRotation),m=[];let x,b,_,y,v,w,M,k,S,P,D,C,O="middle";if("top"===o)w=e.bottom-g,M=e._getXAxisLabelAlignment();else if("bottom"===o)w=e.top+g,M=e._getXAxisLabelAlignment();else if("left"===o){const t=e._getYAxisLabelAlignment(u);M=t.textAlign,v=t.x}else if("right"===o){const t=e._getYAxisLabelAlignment(u);M=t.textAlign,v=t.x}else if("x"===i){if("center"===o)w=(t.top+t.bottom)/2+f;else if(U(o)){const t=Object.keys(o)[0],i=o[t];w=e.chart.scales[t].getPixelForValue(i)+f}M=e._getXAxisLabelAlignment()}else if("y"===i){if("center"===o)v=(t.left+t.right)/2-f;else if(U(o)){const t=Object.keys(o)[0],i=o[t];v=e.chart.scales[t].getPixelForValue(i)}M=e._getYAxisLabelAlignment(u).textAlign}"y"===i&&("start"===l?O="top":"end"===l&&(O="bottom"));const T=e._getLabelSizes();for(x=0,b=r.length;x<b;++x){_=r[x],y=_.label;const t=s.setContext(e.getContext(x));k=e.getPixelForTick(x)+s.labelOffset,S=e._resolveTickFontOptions(x),P=S.lineHeight,D=Y(y)?y.length:1;const i=D/2,n=t.color,l=t.textStrokeColor,h=t.textStrokeWidth;let u;if(a?(v=k,C="top"===o?"near"===c||0!==p?-D*P+P/2:"center"===c?-T.highest.height/2-i*P+P:-T.highest.height+P/2:"near"===c||0!==p?P/2:"center"===c?T.highest.height/2-i*P:T.highest.height-D*P,d&&(C*=-1)):(w=k,C=(1-D)*P/2),t.showLabelBackdrop){const e=ze(t.backdropPadding),i=T.heights[x],n=T.widths[x];let o=w+C-e.top,s=v-e.left;switch(O){case"middle":o-=i/2;break;case"bottom":o-=i}switch(M){case"center":s-=n/2;break;case"right":s-=n}u={left:s,top:o,width:n+e.width,height:i+e.height,color:t.backdropColor}}m.push({rotation:p,label:y,font:S,color:n,strokeColor:l,strokeWidth:h,textOffset:C,textAlign:M,textBaseline:O,translation:[v,w],backdrop:u})}return m}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Et(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align&&(i="right"),i}_getYAxisLabelAlignment(t){const e=this,{position:i,ticks:{crossAlign:n,mirror:o,padding:s}}=e.options,a=t+s,r=e._getLabelSizes().widest.width;let l,c;return"left"===i?o?(l="left",c=e.right+s):(c=e.right-a,"near"===n?l="right":"center"===n?(l="center",c-=r/2):(l="left",c=e.left)):"right"===i?o?(l="right",c=e.left+s):(c=e.left+a,"near"===n?l="left":"center"===n?(l="center",c+=r/2):(l="right",c=e.right)):l="right",{textAlign:l,x:c}}_computeLabelArea(){const t=this;if(t.options.ticks.mirror)return;const e=t.chart,i=t.options.position;return"left"===i||"right"===i?{top:0,left:t.left,bottom:e.height,right:t.right}:"top"===i||"bottom"===i?{top:t.top,left:0,bottom:t.bottom,right:e.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:n,width:o,height:s}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,n,o,s),t.restore())}getLineWidthForValue(t){const e=this,i=e.options.grid;if(!e._isVisible()||!i.display)return 0;const n=e.ticks.findIndex((e=>e.value===t));if(n>=0){return i.setContext(e.getContext(n)).lineWidth}return 0}drawGrid(t){const e=this,i=e.options.grid,n=e.ctx,o=e._gridLineItems||(e._gridLineItems=e._computeGridLineItems(t));let s,a;const r=(t,e,i)=>{i.width&&i.color&&(n.save(),n.lineWidth=i.width,n.strokeStyle=i.color,n.setLineDash(i.borderDash||[]),n.lineDashOffset=i.borderDashOffset,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke(),n.restore())};if(i.display)for(s=0,a=o.length;s<a;++s){const t=o[s];i.drawOnChartArea&&r({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),i.drawTicks&&r({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const t=this,{chart:e,ctx:i,options:{grid:n}}=t,o=n.setContext(t.getContext()),s=n.drawBorder?o.borderWidth:0;if(!s)return;const a=n.setContext(t.getContext(0)).lineWidth,r=t._borderValue;let l,c,h,d;t.isHorizontal()?(l=Xt(e,t.left,s)-s/2,c=Xt(e,t.right,a)+a/2,h=d=r):(h=Xt(e,t.top,s)-s/2,d=Xt(e,t.bottom,a)+a/2,l=c=r),i.save(),i.lineWidth=o.borderWidth,i.strokeStyle=o.borderColor,i.beginPath(),i.moveTo(l,h),i.lineTo(c,d),i.stroke(),i.restore()}drawLabels(t){const e=this;if(!e.options.ticks.display)return;const i=e.ctx,n=e._computeLabelArea();n&&Zt(i,n);const o=e._labelItems||(e._labelItems=e._computeLabelItems(t));let s,a;for(s=0,a=o.length;s<a;++s){const t=o[s],e=t.font,n=t.label;t.backdrop&&(i.fillStyle=t.backdrop.color,i.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),ee(i,n,0,t.textOffset,e,t)}n&&Qt(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:n}}=this;if(!i.display)return;const s=Fe(i.font),a=ze(i.padding),r=i.align;let l=s.lineHeight/2;"bottom"===e?(l+=a.bottom,Y(i.text)&&(l+=s.lineHeight*(i.text.length-1))):l+=a.top;const{titleX:c,titleY:h,maxWidth:d,rotation:u}=function(t,e,i,n){const{top:s,left:a,bottom:r,right:l}=t;let c,h,d,u=0;return t.isHorizontal()?(h=o(n,a,l),d=Hi(t,i,e),c=l-a):(h=Hi(t,i,e),d=o(n,r,s),u="left"===i?-Mt:Mt),{titleX:h,titleY:d,maxWidth:c,rotation:u}}(this,l,e,r);ee(t,i.text,0,0,s,{color:i.color,maxWidth:d,rotation:u,textAlign:Ui(r,e,n),textBaseline:"middle",translation:[c,h]})}draw(t){const e=this;e._isVisible()&&(e.drawBackground(),e.drawGrid(t),e.drawBorder(),e.drawTitle(),e.drawLabels(t))}_layers(){const t=this,e=t.options,i=e.ticks&&e.ticks.z||0,n=e.grid&&e.grid.z||0;return t._isVisible()&&t.draw===Xi.prototype.draw?[{z:n,draw(e){t.drawBackground(),t.drawGrid(e),t.drawTitle()}},{z:n+1,draw(){t.drawBorder()}},{z:i,draw(e){t.drawLabels(e)}}]:[{z:i,draw(e){t.draw(e)}}]}getMatchingVisibleMetas(t){const e=this,i=e.chart.getSortedVisibleDatasetMetas(),n=e.axis+"AxisID",o=[];let s,a;for(s=0,a=i.length;s<a;++s){const a=i[s];a[n]!==e.id||t&&a.type!==t||o.push(a)}return o}_resolveTickFontOptions(t){return Fe(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this,e=t._resolveTickFontOptions(0).lineHeight;return(t.isHorizontal()?t.width:t.height)/e}}function qi(t,e=[""],i=t,n,o=(()=>t[0])){ht(n)||(n=an("_fallback",t));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:n,_getTarget:o,override:o=>qi([o,...t],e,i,n)};return new Proxy(s,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,n)=>Ji(i,n,(()=>function(t,e,i,n){let o;for(const s of e)if(o=an(Zi(s,t),i),ht(o))return Qi(t,o)?on(i,n,t,o):o}(n,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>rn(t).includes(e),ownKeys:t=>rn(t),set:(t,e,i)=>((t._storage||(t._storage=o()))[e]=i,delete t[e],delete t._keys,!0)})}function Ki(t,e,i,n){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:Gi(t,n),setContext:e=>Ki(t,e,i,n),override:o=>Ki(t.override(o),e,i,n)};return new Proxy(o,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>Ji(t,e,(()=>function(t,e,i){const{_proxy:n,_context:o,_subProxy:s,_descriptors:a}=t;let r=n[e];dt(r)&&a.isScriptable(e)&&(r=function(t,e,i,n){const{_proxy:o,_context:s,_subProxy:a,_stack:r}=i;if(r.has(t))throw new Error("Recursion detected: "+[...r].join("->")+"->"+t);r.add(t),e=e(s,a||n),r.delete(t),U(e)&&(e=on(o._scopes,o,t,e));return e}(e,r,t,i));Y(r)&&r.length&&(r=function(t,e,i,n){const{_proxy:o,_context:s,_subProxy:a,_descriptors:r}=i;if(ht(s.index)&&n(t))e=e[s.index%e.length];else if(U(e[0])){const i=e,n=o._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=on(n,o,t,l);e.push(Ki(i,s,a&&a[t],r))}}return e}(e,r,t,a.isIndexable));Qi(e,r)&&(r=Ki(r,o,s&&s[e],a));return r}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,n)=>(t[i]=n,delete e[i],!0)})}function Gi(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:n=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:i,indexable:n,isScriptable:dt(i)?i:()=>i,isIndexable:dt(n)?n:()=>n}}const Zi=(t,e)=>t?t+ct(e):e,Qi=(t,e)=>U(e)&&"adapters"!==t;function Ji(t,e,i){let n=t[e];return ht(n)||(n=i(),ht(n)&&(t[e]=n)),n}function tn(t,e,i){return dt(t)?t(e,i):t}const en=(t,e)=>!0===t?e:"string"==typeof t?lt(e,t):void 0;function nn(t,e,i,n){for(const o of e){const e=en(i,o);if(e){t.add(e);const o=tn(e._fallback,i,e);if(ht(o)&&o!==i&&o!==n)return o}else if(!1===e&&ht(n)&&i!==n)return null}return!1}function on(t,e,i,n){const o=e._rootScopes,s=tn(e._fallback,i,n),a=[...t,...o],r=new Set;r.add(n);let l=sn(r,a,i,s||i);return null!==l&&((!ht(s)||s===i||(l=sn(r,a,s,l),null!==l))&&qi([...r],[""],o,s,(()=>function(t,e,i){const n=t._getTarget();e in n||(n[e]={});const o=n[e];if(Y(o)&&U(i))return i;return o}(e,i,n))))}function sn(t,e,i,n){for(;i;)i=nn(t,e,i,n);return i}function an(t,e){for(const i of e){if(!i)continue;const e=i[t];if(ht(e))return e}}function rn(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return[...e]}(t._scopes)),e}const ln=Number.EPSILON||1e-14,cn=(t,e)=>e<t.length&&!t[e].skip&&t[e],hn=t=>"x"===t?"y":"x";function dn(t,e,i,n){const o=t.skip?e:t,s=e,a=i.skip?e:i,r=Vt(s,o),l=Vt(a,s);let c=r/(r+l),h=l/(r+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const d=n*c,u=n*h;return{previous:{x:s.x-d*(a.x-o.x),y:s.y-d*(a.y-o.y)},next:{x:s.x+u*(a.x-o.x),y:s.y+u*(a.y-o.y)}}}function un(t,e="x"){const i=hn(e),n=t.length,o=Array(n).fill(0),s=Array(n);let a,r,l,c=cn(t,0);for(a=0;a<n;++a)if(r=l,l=c,c=cn(t,a+1),l){if(c){const t=c[e]-l[e];o[a]=0!==t?(c[i]-l[i])/t:0}s[a]=r?c?Dt(o[a-1])!==Dt(o[a])?0:(o[a-1]+o[a])/2:o[a-1]:o[a]}!function(t,e,i){const n=t.length;let o,s,a,r,l,c=cn(t,0);for(let h=0;h<n-1;++h)l=c,c=cn(t,h+1),l&&c&&(At(e[h],0,ln)?i[h]=i[h+1]=0:(o=i[h]/e[h],s=i[h+1]/e[h],r=Math.pow(o,2)+Math.pow(s,2),r<=9||(a=3/Math.sqrt(r),i[h]=o*a*e[h],i[h+1]=s*a*e[h])))}(t,o,s),function(t,e,i="x"){const n=hn(i),o=t.length;let s,a,r,l=cn(t,0);for(let c=0;c<o;++c){if(a=r,r=l,l=cn(t,c+1),!r)continue;const o=r[i],h=r[n];a&&(s=(o-a[i])/3,r[`cp1${i}`]=o-s,r[`cp1${n}`]=h-s*e[c]),l&&(s=(l[i]-o)/3,r[`cp2${i}`]=o+s,r[`cp2${n}`]=h+s*e[c])}}(t,s,e)}function fn(t,e,i){return Math.max(Math.min(t,i),e)}function gn(t,e,i,n,o){let s,a,r,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)un(t,o);else{let i=n?t[t.length-1]:t[0];for(s=0,a=t.length;s<a;++s)r=t[s],l=dn(i,r,t[Math.min(s+1,a-(n?0:1))%a],e.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,i=r}e.capBezierPoints&&function(t,e){let i,n,o,s,a,r=Gt(t[0],e);for(i=0,n=t.length;i<n;++i)a=s,s=r,r=i<n-1&&Gt(t[i+1],e),s&&(o=t[i],a&&(o.cp1x=fn(o.cp1x,e.left,e.right),o.cp1y=fn(o.cp1y,e.top,e.bottom)),r&&(o.cp2x=fn(o.cp2x,e.left,e.right),o.cp2y=fn(o.cp2y,e.top,e.bottom)))}(t,i)}function pn(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function mn(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:"middle"===n?i<.5?t.y:e.y:"after"===n?i<1?t.y:e.y:i>0?e.y:t.y}}function xn(t,e,i,n){const o={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},a=pn(t,o,i),r=pn(o,s,i),l=pn(s,e,i),c=pn(a,r,i),h=pn(r,l,i);return pn(c,h,i)}function bn(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function _n(t,e){let i,n;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,n=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)}function yn(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function vn(t){return"angle"===t?{between:Ht,compare:Bt,normalize:Wt}:{between:(t,e,i)=>t>=Math.min(e,i)&&t<=Math.max(i,e),compare:(t,e)=>t-e,normalize:t=>t}}function wn({start:t,end:e,count:i,loop:n,style:o}){return{start:t%i,end:e%i,loop:n&&(e-t+1)%i==0,style:o}}function Mn(t,e,i){if(!i)return[t];const{property:n,start:o,end:s}=i,a=e.length,{compare:r,between:l,normalize:c}=vn(n),{start:h,end:d,loop:u,style:f}=function(t,e,i){const{property:n,start:o,end:s}=i,{between:a,normalize:r}=vn(n),l=e.length;let c,h,{start:d,end:u,loop:f}=t;if(f){for(d+=l,u+=l,c=0,h=l;c<h&&a(r(e[d%l][n]),o,s);++c)d--,u--;d%=l,u%=l}return u<d&&(u+=l),{start:d,end:u,loop:f,style:t.style}}(t,e,i),g=[];let p,m,x,b=!1,_=null;const y=()=>b||l(o,x,p)&&0!==r(o,x),v=()=>!b||0===r(s,p)||l(s,x,p);for(let t=h,i=h;t<=d;++t)m=e[t%a],m.skip||(p=c(m[n]),p!==x&&(b=l(p,o,s),null===_&&y()&&(_=0===r(p,o)?t:i),null!==_&&v()&&(g.push(wn({start:_,end:t,loop:u,count:a,style:f})),_=null),i=t,x=p));return null!==_&&g.push(wn({start:_,end:d,loop:u,count:a,style:f})),g}function kn(t,e){const i=[],n=t.segments;for(let o=0;o<n.length;o++){const s=Mn(n[o],t.points,e);s.length&&i.push(...s)}return i}function Sn(t,e){const i=t.points,n=t.options.spanGaps,o=i.length;if(!o)return[];const s=!!t._loop,{start:a,end:r}=function(t,e,i,n){let o=0,s=e-1;if(i&&!n)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,i&&(s+=o);s>o&&t[s%e].skip;)s--;return s%=e,{start:o,end:s}}(i,o,s,n);if(!0===n)return Pn([{start:a,end:r,loop:s}],i,e);return Pn(function(t,e,i,n){const o=t.length,s=[];let a,r=e,l=t[e];for(a=e+1;a<=i;++a){const i=t[a%o];i.skip||i.stop?l.skip||(n=!1,s.push({start:e%o,end:(a-1)%o,loop:n}),e=r=i.stop?a:null):(r=a,l.skip&&(e=a)),l=i}return null!==r&&s.push({start:e%o,end:r%o,loop:n}),s}(i,a,r<a?r+o:r,!!t._fullLoop&&0===a&&r===o-1),i,e)}function Pn(t,e,i){return i&&i.setContext&&e?function(t,e,i){const n=e.length,o=[];let s=t[0].start,a=s;for(const r of t){let t,l,c=e[s%n];for(a=s+1;a<=r.end;a++){const h=e[a%n];l=Dn(i.setContext({type:"segment",p0:c,p1:h})),Cn(l,t)&&(o.push({start:s,end:a-1,loop:r.loop,style:t}),t=l,s=a-1),c=h,t=l}s<a-1&&(o.push({start:s,end:a-1,loop:r.loop,style:l}),s=a-1)}return o}(t,e,i):t}function Dn(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Cn(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var On=Object.freeze({__proto__:null,easingEffects:mi,color:W,getHoverColor:H,noop:N,uid:j,isNullOrUndef:$,isArray:Y,isObject:U,isFinite:X,finiteOrDefault:q,valueOrDefault:K,toPercentage:G,toDimension:Z,callback:Q,each:J,_elementsEqual:tt,clone:et,_merger:nt,merge:ot,mergeIf:st,_mergerIf:at,_deprecated:function(t,e,i,n){void 0!==e&&console.warn(t+': "'+i+'" is deprecated. Please use "'+n+'" instead')},resolveObjectKey:lt,_capitalize:ct,defined:ht,isFunction:dt,setsEqual:ut,toFontString:$t,_measureText:Yt,_longestText:Ut,_alignPixel:Xt,clearCanvas:qt,drawPoint:Kt,_isPointInArea:Gt,clipArea:Zt,unclipArea:Qt,_steppedLineTo:Jt,_bezierCurveTo:te,renderText:ee,addRoundedRectPath:ie,_lookup:ne,_lookupByKey:oe,_rlookupByKey:se,_filterBetween:ae,listenArrayEvents:le,unlistenArrayEvents:ce,_arrayUnique:he,_createResolver:qi,_attachContext:Ki,_descriptors:Gi,splineCurve:dn,splineCurveMonotone:un,_updateBezierControlPoints:gn,_getParentNode:de,getStyle:ge,getRelativePosition:xe,getMaximumSize:_e,retinaScale:ye,supportsEventListenerOptions:ve,readUsedSize:we,fontString:function(t,e,i){return e+" "+t+"px "+i},requestAnimFrame:t,throttled:e,debounce:i,_toLeftRightCenter:n,_alignStartEnd:o,_textX:s,_pointInLine:pn,_steppedInterpolation:mn,_bezierInterpolation:xn,formatNumber:zi,toLineHeight:Le,_readValueToProps:Re,toTRBL:Ee,toTRBLCorners:Ie,toPadding:ze,toFont:Fe,resolve:Ve,_addGrace:Be,PI:bt,TAU:_t,PITAU:yt,INFINITY:vt,RAD_PER_DEG:wt,HALF_PI:Mt,QUARTER_PI:kt,TWO_THIRDS_PI:St,log10:Pt,sign:Dt,niceNum:Ct,_factorize:Ot,isNumber:Tt,almostEquals:At,almostWhole:Lt,_setMinAndMaxByKey:Rt,toRadians:Et,toDegrees:It,_decimalPlaces:zt,getAngleFromPoint:Ft,distanceBetweenPoints:Vt,_angleDiff:Bt,_normalizeAngle:Wt,_angleBetween:Ht,_limitValue:Nt,_int16Range:jt,getRtlAdapter:bn,overrideTextDirection:_n,restoreTextDirection:yn,_boundSegment:Mn,_boundSegments:kn,_computeSegments:Sn});class Tn{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=this,i=Object.getPrototypeOf(t);let n;(function(t){return"id"in t&&"defaults"in t})(i)&&(n=e.register(i));const o=e.items,s=t.id,a=e.scope+"."+s;if(!s)throw new Error("class does not have id: "+t);return s in o||(o[s]=t,function(t,e,i){const n=ot(Object.create(null),[i?xt.get(i):{},xt.get(e),t.defaults]);xt.set(e,n),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const n=i.split("."),o=n.pop(),s=[t].concat(n).join("."),a=e[i].split("."),r=a.pop(),l=a.join(".");xt.route(s,o,l,r)}))}(e,t.defaultRoutes);t.descriptors&&xt.describe(e,t.descriptors)}(t,a,n),e.override&&xt.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,n=this.scope;i in e&&delete e[i],n&&i in xt[n]&&(delete xt[n][i],this.override&&delete ft[i])}}var An=new class{constructor(){this.controllers=new Tn(Ri,"datasets",!0),this.elements=new Tn(Ei,"elements"),this.plugins=new Tn(Object,"plugins"),this.scales=new Tn(Xi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){const n=this;[...e].forEach((e=>{const o=i||n._getRegistryForType(e);i||o.isForType(e)||o===n.plugins&&e.id?n._exec(t,o,e):J(e,(e=>{const o=i||n._getRegistryForType(e);n._exec(t,o,e)}))}))}_exec(t,e,i){const n=ct(t);Q(i["before"+n],[],i),e[t](i),Q(i["after"+n],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const n=e.get(t);if(void 0===n)throw new Error('"'+t+'" is not a registered '+i+".");return n}};class Ln{constructor(){this._init=[]}notify(t,e,i,n){const o=this;"beforeInit"===e&&(o._init=o._createDescriptors(t,!0),o._notify(o._init,t,"install"));const s=n?o._descriptors(t).filter(n):o._descriptors(t),a=o._notify(s,t,e,i);return"destroy"===e&&(o._notify(s,t,"stop"),o._notify(o._init,t,"uninstall")),a}_notify(t,e,i,n){n=n||{};for(const o of t){const t=o.plugin;if(!1===Q(t[i],[e,n,o.options],t)&&n.cancelable)return!1}return!0}invalidate(){$(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,n=K(i.options&&i.options.plugins,{}),o=function(t){const e=[],i=Object.keys(An.plugins.items);for(let t=0;t<i.length;t++)e.push(An.getPlugin(i[t]));const n=t.plugins||[];for(let t=0;t<n.length;t++){const i=n[t];-1===e.indexOf(i)&&e.push(i)}return e}(i);return!1!==n||e?function(t,e,i,n){const o=[],s=t.getContext();for(let a=0;a<e.length;a++){const r=e[a],l=Rn(i[r.id],n);null!==l&&o.push({plugin:r,options:En(t.config,r,l,s)})}return o}(t,o,n,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,n=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(n(e,i),t,"stop"),this._notify(n(i,e),t,"start")}}function Rn(t,e){return e||!1!==t?!0===t?{}:t:null}function En(t,e,i,n){const o=t.pluginScopeKeys(e),s=t.getOptionScopes(i,o);return t.createResolver(s,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function In(t,e){const i=xt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function zn(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase();var i}function Fn(t){const e=t.options||(t.options={});e.plugins=K(e.plugins,{}),e.scales=function(t,e){const i=ft[t.type]||{scales:{}},n=e.scales||{},o=In(t.type,e),s=Object.create(null),a=Object.create(null);return Object.keys(n).forEach((t=>{const e=n[t],r=zn(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(r,o),c=i.scales||{};s[r]=s[r]||t,a[t]=st(Object.create(null),[{axis:r},e,c[r],c[l]])})),t.data.datasets.forEach((i=>{const o=i.type||t.type,r=i.indexAxis||In(o,e),l=(ft[o]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,r),o=i[e+"AxisID"]||s[e]||e;a[o]=a[o]||Object.create(null),st(a[o],[{axis:e},n[o],l[t]])}))})),Object.keys(a).forEach((t=>{const e=a[t];st(e,[xt.scales[e.type],xt.scale])})),a}(t,e)}function Vn(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const Bn=new Map,Wn=new Set;function Hn(t,e){let i=Bn.get(t);return i||(i=e(),Bn.set(t,i),Wn.add(i)),i}const Nn=(t,e,i)=>{const n=lt(e,i);void 0!==n&&t.add(n)};class jn{constructor(t){this._config=function(t){return(t=t||{}).data=Vn(t.data),Fn(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Vn(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Fn(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Hn(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return Hn(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return Hn(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return Hn(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let n=i.get(t);return n&&!e||(n=new Map,i.set(t,n)),n}getOptionScopes(t,e,i){const{options:n,type:o}=this,s=this._cachedScopes(t,i),a=s.get(e);if(a)return a;const r=new Set;e.forEach((e=>{t&&(r.add(t),e.forEach((e=>Nn(r,t,e)))),e.forEach((t=>Nn(r,n,t))),e.forEach((t=>Nn(r,ft[o]||{},t))),e.forEach((t=>Nn(r,xt,t))),e.forEach((t=>Nn(r,gt,t)))}));const l=[...r];return Wn.has(e)&&s.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,ft[e]||{},xt.datasets[e]||{},{type:e},xt,gt]}resolveNamedOptions(t,e,i,n=[""]){const o={$shared:!0},{resolver:s,subPrefixes:a}=$n(this._resolverCache,t,n);let r=s;if(function(t,e){const{isScriptable:i,isIndexable:n}=Gi(t);for(const o of e)if(i(o)&&dt(t[o])||n(o)&&Y(t[o]))return!0;return!1}(s,e)){o.$shared=!1;r=Ki(s,i=dt(i)?i():i,this.createResolver(t,i,a))}for(const t of e)o[t]=r[t];return o}createResolver(t,e,i=[""],n){const{resolver:o}=$n(this._resolverCache,t,i);return U(e)?Ki(o,e,void 0,n):o}}function $n(t,e,i){let n=t.get(e);n||(n=new Map,t.set(e,n));const o=i.join();let s=n.get(o);if(!s){s={resolver:qi(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},n.set(o,s)}return s}const Yn=["top","bottom","left","right","chartArea"];function Un(t,e){return"top"===t||"bottom"===t||-1===Yn.indexOf(t)&&"x"===e}function Xn(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}function qn(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),Q(i&&i.onComplete,[t],e)}function Kn(t){const e=t.chart,i=e.options.animation;Q(i&&i.onProgress,[t],e)}function Gn(){return"undefined"!=typeof window&&"undefined"!=typeof document}function Zn(t){return Gn()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Qn={},Jn=t=>{const e=Zn(t);return Object.values(Qn).filter((t=>t.canvas===e)).pop()};class to{constructor(t,e){const n=this;this.config=e=new jn(e);const o=Zn(t),s=Jn(o);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas can be reused.");const r=e.createResolver(e.chartOptionScopes(),n.getContext());this.platform=n._initializePlatform(o,e);const l=n.platform.acquireContext(o,r.aspectRatio),c=l&&l.canvas,h=c&&c.height,d=c&&c.width;this.id=j(),this.ctx=l,this.canvas=c,this.width=d,this.height=h,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this.scale=void 0,this._plugins=new Ln,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=i((()=>this.update("resize")),r.resizeDelay||0),Qn[n.id]=n,l&&c?(a.listen(n,"complete",qn),a.listen(n,"progress",Kn),n._initialize(),n.attached&&n.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:n,_aspectRatio:o}=this;return $(t)?e&&o?o:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){const t=this;return t.notifyPlugins("beforeInit"),t.options.responsive?t.resize():ye(t,t.options.devicePixelRatio),t.bindEvents(),t.notifyPlugins("afterInit"),t}_initializePlatform(t,e){return e.platform?new e.platform:!Gn()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?new Qe:new di}clear(){return qt(this.canvas,this.ctx),this}stop(){return a.stop(this),this}resize(t,e){a.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this,n=i.options,o=i.canvas,s=n.maintainAspectRatio&&i.aspectRatio,a=i.platform.getMaximumSize(o,t,e,s),r=n.devicePixelRatio||i.platform.getDevicePixelRatio();i.width=a.width,i.height=a.height,i._aspectRatio=i.aspectRatio,ye(i,r,!0)&&(i.notifyPlugins("resize",{size:a}),Q(n.onResize,[i,a],i),i.attached&&i._doResize()&&i.render())}ensureScalesHaveIDs(){J(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this,e=t.options,i=e.scales,n=t.scales,o=Object.keys(n).reduce(((t,e)=>(t[e]=!1,t)),{});let s=[];i&&(s=s.concat(Object.keys(i).map((t=>{const e=i[t],n=zn(t,e),o="r"===n,s="x"===n;return{options:e,dposition:o?"chartArea":s?"bottom":"left",dtype:o?"radialLinear":s?"category":"linear"}})))),J(s,(i=>{const s=i.options,a=s.id,r=zn(a,s),l=K(s.type,i.dtype);void 0!==s.position&&Un(s.position,r)===Un(i.dposition)||(s.position=i.dposition),o[a]=!0;let c=null;if(a in n&&n[a].type===l)c=n[a];else{c=new(An.getScale(l))({id:a,type:l,ctx:t.ctx,chart:t}),n[c.id]=c}c.init(s,e)})),J(o,((t,e)=>{t||delete n[e]})),J(n,(e=>{Ge.configure(t,e,e.options),Ge.addBox(t,e)}))}_updateMetasets(){const t=this,e=t._metasets,i=t.data.datasets.length,n=e.length;if(e.sort(((t,e)=>t.index-e.index)),n>i){for(let e=i;e<n;++e)t._destroyDatasetMeta(e);e.splice(i,n-i)}t._sortedMetasets=e.slice(0).sort(Xn("order","index"))}_removeUnreferencedMetasets(){const t=this,{_metasets:e,data:{datasets:i}}=t;e.length>i.length&&delete t._stacks,e.forEach(((e,n)=>{0===i.filter((t=>t===e._dataset)).length&&t._destroyDatasetMeta(n)}))}buildOrUpdateControllers(){const t=this,e=[],i=t.data.datasets;let n,o;for(t._removeUnreferencedMetasets(),n=0,o=i.length;n<o;n++){const o=i[n];let s=t.getDatasetMeta(n);const a=o.type||t.config.type;if(s.type&&s.type!==a&&(t._destroyDatasetMeta(n),s=t.getDatasetMeta(n)),s.type=a,s.indexAxis=o.indexAxis||In(a,t.options),s.order=o.order||0,s.index=n,s.label=""+o.label,s.visible=t.isDatasetVisible(n),s.controller)s.controller.updateIndex(n),s.controller.linkScales();else{const i=An.getController(a),{datasetElementType:o,dataElementType:r}=xt.datasets[a];Object.assign(i.prototype,{dataElementType:An.getElement(r),datasetElementType:o&&An.getElement(o)}),s.controller=new i(t,n),e.push(s.controller)}}return t._updateMetasets(),e}_resetElements(){const t=this;J(t.data.datasets,((e,i)=>{t.getDatasetMeta(i).controller.reset()}),t)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this,i=e.config;i.update(),e._options=i.createResolver(i.chartOptionScopes(),e.getContext()),J(e.scales,(t=>{Ge.removeBox(e,t)}));const n=e._animationsDisabled=!e.options.animation;e.ensureScalesHaveIDs(),e.buildOrUpdateScales();const o=new Set(Object.keys(e._listeners)),s=new Set(e.options.events);if(ut(o,s)&&!!this._responsiveListeners===e.options.responsive||(e.unbindEvents(),e.bindEvents()),e._plugins.invalidate(),!1===e.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const a=e.buildOrUpdateControllers();e.notifyPlugins("beforeElementsUpdate");let r=0;for(let t=0,i=e.data.datasets.length;t<i;t++){const{controller:i}=e.getDatasetMeta(t),o=!n&&-1===a.indexOf(i);i.buildOrUpdateElements(o),r=Math.max(+i.getMaxOverflow(),r)}e._minPadding=r,e._updateLayout(r),n||J(a,(t=>{t.reset()})),e._updateDatasets(t),e.notifyPlugins("afterUpdate",{mode:t}),e._layers.sort(Xn("z","_idx")),e._lastEvent&&e._eventHandler(e._lastEvent,!0),e.render()}_updateLayout(t){const e=this;if(!1===e.notifyPlugins("beforeLayout",{cancelable:!0}))return;Ge.update(e,e.width,e.height,t);const i=e.chartArea,n=i.width<=0||i.height<=0;e._layers=[],J(e.boxes,(t=>{n&&"chartArea"===t.position||(t.configure&&t.configure(),e._layers.push(...t._layers()))}),e),e._layers.forEach(((t,e)=>{t._idx=e})),e.notifyPlugins("afterLayout")}_updateDatasets(t){const e=this,i="function"==typeof t;if(!1!==e.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let n=0,o=e.data.datasets.length;n<o;++n)e._updateDataset(n,i?t({datasetIndex:n}):t);e.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this,n=i.getDatasetMeta(t),o={meta:n,index:t,mode:e,cancelable:!0};!1!==i.notifyPlugins("beforeDatasetUpdate",o)&&(n.controller._update(e),o.cancelable=!1,i.notifyPlugins("afterDatasetUpdate",o))}render(){const t=this;!1!==t.notifyPlugins("beforeRender",{cancelable:!0})&&(a.has(t)?t.attached&&!a.running(t)&&a.start(t):(t.draw(),qn({chart:t})))}draw(){const t=this;let e;if(t._resizeBeforeDraw){const{width:e,height:i}=t._resizeBeforeDraw;t._resize(e,i),t._resizeBeforeDraw=null}if(t.clear(),t.width<=0||t.height<=0)return;if(!1===t.notifyPlugins("beforeDraw",{cancelable:!0}))return;const i=t._layers;for(e=0;e<i.length&&i[e].z<=0;++e)i[e].draw(t.chartArea);for(t._drawDatasets();e<i.length;++e)i[e].draw(t.chartArea);t.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let n,o;for(n=0,o=e.length;n<o;++n){const o=e[n];t&&!o.visible||i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){const t=this;if(!1===t.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const e=t.getSortedVisibleDatasetMetas();for(let i=e.length-1;i>=0;--i)t._drawDataset(e[i]);t.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this,i=e.ctx,n=t._clip,o=e.chartArea,s={meta:t,index:t.index,cancelable:!0};!1!==e.notifyPlugins("beforeDatasetDraw",s)&&(Zt(i,{left:!1===n.left?0:o.left-n.left,right:!1===n.right?e.width:o.right+n.right,top:!1===n.top?0:o.top-n.top,bottom:!1===n.bottom?e.height:o.bottom+n.bottom}),t.controller.draw(),Qt(i),s.cancelable=!1,e.notifyPlugins("afterDatasetDraw",s))}getElementsAtEventForMode(t,e,i,n){const o=Oe.modes[e];return"function"==typeof o?o(this,t,i,n):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let n=i.filter((t=>t&&t._dataset===e)).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context={chart:this,type:"chart"})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateDatasetVisibility(t,e){const i=this,n=e?"show":"hide",o=i.getDatasetMeta(t),s=o.controller._resolveAnimations(void 0,n);i.setDatasetVisibility(t,e),s.update(o,{visible:e}),i.update((e=>e.datasetIndex===t?n:void 0))}hide(t){this._updateDatasetVisibility(t,!1)}show(t){this._updateDatasetVisibility(t,!0)}_destroyDatasetMeta(t){const e=this,i=e._metasets&&e._metasets[t];i&&i.controller&&(i.controller._destroy(),delete e._metasets[t])}destroy(){const t=this,{canvas:e,ctx:i}=t;let n,o;for(t.stop(),a.remove(t),n=0,o=t.data.datasets.length;n<o;++n)t._destroyDatasetMeta(n);t.config.clearCache(),e&&(t.unbindEvents(),qt(e,i),t.platform.releaseContext(i),t.canvas=null,t.ctx=null),t.notifyPlugins("destroy"),delete Qn[t.id]}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this,e=t._listeners,i=t.platform,n=function(e,i,n){e.offsetX=i,e.offsetY=n,t._eventHandler(e)};J(t.options.events,(o=>((n,o)=>{i.addEventListener(t,n,o),e[n]=o})(o,n)))}bindResponsiveEvents(){const t=this;t._responsiveListeners||(t._responsiveListeners={});const e=t._responsiveListeners,i=t.platform,n=(n,o)=>{i.addEventListener(t,n,o),e[n]=o},o=(n,o)=>{e[n]&&(i.removeEventListener(t,n,o),delete e[n])},s=(e,i)=>{t.canvas&&t.resize(e,i)};let a;const r=()=>{o("attach",r),t.attached=!0,t.resize(),n("resize",s),n("detach",a)};a=()=>{t.attached=!1,o("resize",s),n("attach",r)},i.isAttached(t.canvas)?r():a()}unbindEvents(){const t=this;J(t._listeners,((e,i)=>{t.platform.removeEventListener(t,i,e)})),t._listeners={},J(t._responsiveListeners,((e,i)=>{t.platform.removeEventListener(t,i,e)})),t._responsiveListeners=void 0}updateHoverStyle(t,e,i){const n=i?"set":"remove";let o,s,a,r;for("dataset"===e&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+n+"DatasetHoverStyle"]()),a=0,r=t.length;a<r;++a){s=t[a];const e=s&&this.getDatasetMeta(s.datasetIndex).controller;e&&e[n+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this,i=e._active||[],n=t.map((({datasetIndex:t,index:i})=>{const n=e.getDatasetMeta(t);if(!n)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:n.data[i],index:i}}));!tt(n,i)&&(e._active=n,e._updateHoverStyles(n,i))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){const n=this,o=n.options.hover,s=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),a=s(e,t),r=i?t:s(t,e);a.length&&n.updateHoverStyle(a,o.mode,!1),r.length&&o.mode&&n.updateHoverStyle(r,o.mode,!0)}_eventHandler(t,e){const i=this,n={event:t,replay:e,cancelable:!0},o=e=>(e.options.events||this.options.events).includes(t.type);if(!1===i.notifyPlugins("beforeEvent",n,o))return;const s=i._handleEvent(t,e);return n.cancelable=!1,i.notifyPlugins("afterEvent",n,o),(s||n.changed)&&i.render(),i}_handleEvent(t,e){const i=this,{_active:n=[],options:o}=i,s=o.hover,a=e;let r=[],l=!1,c=null;return"mouseout"!==t.type&&(r=i.getElementsAtEventForMode(t,s.mode,s,a),c="click"===t.type?i._lastEvent:t),i._lastEvent=null,Gt(t,i.chartArea,i._minPadding)&&(Q(o.onHover,[t,r,i],i),"mouseup"!==t.type&&"click"!==t.type&&"contextmenu"!==t.type||Q(o.onClick,[t,r,i],i)),l=!tt(r,n),(l||e)&&(i._active=r,i._updateHoverStyles(r,n,e)),i._lastEvent=c,l}}const eo=()=>J(to.instances,(t=>t._plugins.invalidate())),io=!0;function no(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}Object.defineProperties(to,{defaults:{enumerable:io,value:xt},instances:{enumerable:io,value:Qn},overrides:{enumerable:io,value:ft},registry:{enumerable:io,value:An},version:{enumerable:io,value:"3.3.2"},getChart:{enumerable:io,value:Jn},register:{enumerable:io,value:(...t)=>{An.add(...t),eo()}},unregister:{enumerable:io,value:(...t)=>{An.remove(...t),eo()}}});class oo{constructor(t){this.options=t||{}}formats(){return no()}parse(t,e){return no()}format(t,e){return no()}add(t,e,i){return no()}diff(t,e,i){return no()}startOf(t,e,i){return no()}endOf(t,e){return no()}}oo.override=function(t){Object.assign(oo.prototype,t)};var so={_date:oo};function ao(t){const e=function(t){if(!t._cache.$bar){const e=t.getMatchingVisibleMetas("bar");let i=[];for(let n=0,o=e.length;n<o;n++)i=i.concat(e[n].controller.getAllParsedValues(t));t._cache.$bar=he(i.sort(((t,e)=>t-e)))}return t._cache.$bar}(t);let i,n,o,s,a=t._length;const r=()=>{32767!==o&&-32768!==o&&(ht(s)&&(a=Math.min(a,Math.abs(o-s)||a)),s=o)};for(i=0,n=e.length;i<n;++i)o=t.getPixelForValue(e[i]),r();for(s=void 0,i=0,n=t.ticks.length;i<n;++i)o=t.getPixelForTick(i),r();return a}function ro(t,e,i,n){return Y(t)?function(t,e,i,n){const o=i.parse(t[0],n),s=i.parse(t[1],n),a=Math.min(o,s),r=Math.max(o,s);let l=a,c=r;Math.abs(a)>Math.abs(r)&&(l=r,c=a),e[i.axis]=c,e._custom={barStart:l,barEnd:c,start:o,end:s,min:a,max:r}}(t,e,i,n):e[i.axis]=i.parse(t,n),e}function lo(t,e,i,n){const o=t.iScale,s=t.vScale,a=o.getLabels(),r=o===s,l=[];let c,h,d,u;for(c=i,h=i+n;c<h;++c)u=e[c],d={},d[o.axis]=r||o.parse(a[c],c),l.push(ro(u,d,s,c));return l}function co(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}class ho extends Ri{parsePrimitiveData(t,e,i,n){return lo(t,e,i,n)}parseArrayData(t,e,i,n){return lo(t,e,i,n)}parseObjectData(t,e,i,n){const{iScale:o,vScale:s}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l="x"===o.axis?a:r,c="x"===s.axis?a:r,h=[];let d,u,f,g;for(d=i,u=i+n;d<u;++d)g=e[d],f={},f[o.axis]=o.parse(lt(g,l),d),h.push(ro(lt(g,c),f,s,d));return h}updateRangeFromParsed(t,e,i,n){super.updateRangeFromParsed(t,e,i,n);const o=i._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:n}=e,o=this.getParsed(t),s=o._custom,a=co(s)?"["+s.start+", "+s.end+"]":""+n.getLabelForValue(o[n.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:a}}initialize(){const t=this;t.enableOptionSharing=!0,super.initialize();t._cachedMeta.stack=t.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,n){const o=this,s="reset"===n,a=o._cachedMeta.vScale,r=a.getBasePixel(),l=a.isHorizontal(),c=o._getRuler(),h=o.resolveDataElementOptions(e,n),d=o.getSharedOptions(h),u=o.includeOptions(n,d);o.updateSharedOptions(d,n,h);for(let h=e;h<e+i;h++){const e=o.getParsed(h),i=s||$(e[a.axis])?{base:r,head:r}:o._calculateBarValuePixels(h),f=o._calculateBarIndexPixels(h,c),g=(e._stacks||{})[a.axis],p={horizontal:l,base:i.base,enableBorderRadius:!g||co(e._custom)||o.index===g._top||o.index===g._bottom,x:l?i.head:f.center,y:l?f.center:i.head,height:l?f.size:void 0,width:l?void 0:f.size};u&&(p.options=d||o.resolveDataElementOptions(h,n)),o.updateElement(t[h],h,p,n)}}_getStacks(t,e){const i=this._cachedMeta.iScale,n=i.getMatchingVisibleMetas(this._type),o=i.options.stacked,s=n.length,a=[];let r,l;for(r=0;r<s;++r){if(l=n[r],void 0!==e){const t=l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];if($(t)||isNaN(t))continue}if((!1===o||-1===a.indexOf(l.stack)||void 0===o&&void 0===l.stack)&&a.push(l.stack),l.index===t)break}return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){const n=this._getStacks(t,i),o=void 0!==e?n.indexOf(e):-1;return-1===o?n.length-1:o}_getRuler(){const t=this,e=t.options,i=t._cachedMeta,n=i.iScale,o=[];let s,a;for(s=0,a=i.data.length;s<a;++s)o.push(n.getPixelForValue(t.getParsed(s)[n.axis],s));const r=e.barThickness;return{min:r||ao(n),pixels:o,start:n._startPixel,end:n._endPixel,stackCount:t._getStackCount(),scale:n,grouped:e.grouped,ratio:r?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(t){const e=this,{vScale:i,_stacked:n}=e._cachedMeta,{base:o,minBarLength:s}=e.options,a=e.getParsed(t),r=a._custom,l=co(r);let c,h,d=a[i.axis],u=0,f=n?e.applyStack(i,a,n):d;f!==d&&(u=f-d,f=d),l&&(d=r.barStart,f=r.barEnd-r.barStart,0!==d&&Dt(d)!==Dt(r.barEnd)&&(u=0),u+=d);const g=$(o)||l?u:o;let p=i.getPixelForValue(g);c=this.chart.getDataVisibility(t)?i.getPixelForValue(u+f):p,h=c-p,void 0!==s&&Math.abs(h)<s&&(h=h<0?-s:s,0===d&&(p-=h/2),c=p+h);const m=o||0;if(p===i.getPixelForValue(m)){const t=i.getLineWidthForValue(m)/2;h>0?(p+=t,h-=t):h<0&&(p-=t,h+=t)}return{size:h,base:p,head:c,center:c+h/2}}_calculateBarIndexPixels(t,e){const i=this,n=e.scale,o=i.options,s=o.skipNull,a=K(o.maxBarThickness,1/0);let r,l;if(e.grouped){const n=s?i._getStackCount(t):e.stackCount,c="flex"===o.barThickness?function(t,e,i,n){const o=e.pixels,s=o[t];let a=t>0?o[t-1]:null,r=t<o.length-1?o[t+1]:null;const l=i.categoryPercentage;null===a&&(a=s-(null===r?e.end-e.start:r-s)),null===r&&(r=s+s-a);const c=s-(s-Math.min(a,r))/2*l;return{chunk:Math.abs(r-a)/2*l/n,ratio:i.barPercentage,start:c}}(t,e,o,n):function(t,e,i,n){const o=i.barThickness;let s,a;return $(o)?(s=e.min*i.categoryPercentage,a=i.barPercentage):(s=o*n,a=1),{chunk:s/n,ratio:a,start:e.pixels[t]-s/2}}(t,e,o,n),h=i._getStackIndex(i.index,i._cachedMeta.stack,s?t:void 0);r=c.start+c.chunk*h+c.chunk/2,l=Math.min(a,c.chunk*c.ratio)}else r=n.getPixelForValue(i.getParsed(t)[n.axis],t),l=Math.min(a,e.min*e.ratio);return{base:r-l/2,head:r+l/2,center:r,size:l}}draw(){const t=this,e=t.chart,i=t._cachedMeta,n=i.vScale,o=i.data,s=o.length;let a=0;for(Zt(e.ctx,e.chartArea);a<s;++a)null!==t.getParsed(a)[n.axis]&&o[a].draw(t._ctx);Qt(e.ctx)}}ho.id="bar",ho.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},ho.overrides={interaction:{mode:"index"},scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class uo extends Ri{initialize(){this.enableOptionSharing=!0,super.initialize()}parseObjectData(t,e,i,n){const{xScale:o,yScale:s}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l=[];let c,h,d;for(c=i,h=i+n;c<h;++c)d=e[c],l.push({x:o.parse(lt(d,a),c),y:s.parse(lt(d,r),c),_custom:d&&d.r&&+d.r});return l}getMaxOverflow(){const{data:t,_parsed:e}=this._cachedMeta;let i=0;for(let n=t.length-1;n>=0;--n)i=Math.max(i,t[n].size()/2,e[n]._custom);return i>0&&i}getLabelAndValue(t){const e=this._cachedMeta,{xScale:i,yScale:n}=e,o=this.getParsed(t),s=i.getLabelForValue(o.x),a=n.getLabelForValue(o.y),r=o._custom;return{label:e.label,value:"("+s+", "+a+(r?", "+r:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,n){const o=this,s="reset"===n,{iScale:a,vScale:r}=o._cachedMeta,l=o.resolveDataElementOptions(e,n),c=o.getSharedOptions(l),h=o.includeOptions(n,c),d=a.axis,u=r.axis;for(let l=e;l<e+i;l++){const e=t[l],i=!s&&o.getParsed(l),c={},f=c[d]=s?a.getPixelForDecimal(.5):a.getPixelForValue(i[d]),g=c[u]=s?r.getBasePixel():r.getPixelForValue(i[u]);c.skip=isNaN(f)||isNaN(g),h&&(c.options=o.resolveDataElementOptions(l,n),s&&(c.options.radius=0)),o.updateElement(e,l,c,n)}o.updateSharedOptions(c,n,l)}resolveDataElementOptions(t,e){const i=this.getParsed(t);let n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const o=n.radius;return"active"!==e&&(n.radius=0),n.radius+=K(i&&i._custom,o),n}}uo.id="bubble",uo.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},uo.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class fo extends Ri{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,n=this._cachedMeta;let o,s;for(o=t,s=t+e;o<s;++o)n._parsed[o]=+i[o]}_getRotation(){return Et(this.options.rotation-90)}_getCircumference(){return Et(this.options.circumference)}_getRotationExtents(){let t=_t,e=-_t;const i=this;for(let n=0;n<i.chart.data.datasets.length;++n)if(i.chart.isDatasetVisible(n)){const o=i.chart.getDatasetMeta(n).controller,s=o._getRotation(),a=o._getCircumference();t=Math.min(t,s),e=Math.max(e,s+a)}return{rotation:t,circumference:e-t}}update(t){const e=this,i=e.chart,{chartArea:n}=i,o=e._cachedMeta,s=o.data,a=e.getMaxBorderWidth()+e.getMaxOffset(s),r=Math.max((Math.min(n.width,n.height)-a)/2,0),l=Math.min(G(e.options.cutout,r),1),c=e._getRingWeight(e.index),{circumference:h,rotation:d}=e._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:g,offsetY:p}=function(t,e,i){let n=1,o=1,s=0,a=0;if(e<_t){const r=t,l=r+e,c=Math.cos(r),h=Math.sin(r),d=Math.cos(l),u=Math.sin(l),f=(t,e,n)=>Ht(t,r,l,!0)?1:Math.max(e,e*i,n,n*i),g=(t,e,n)=>Ht(t,r,l,!0)?-1:Math.min(e,e*i,n,n*i),p=f(0,c,d),m=f(Mt,h,u),x=g(bt,c,d),b=g(bt+Mt,h,u);n=(p-x)/2,o=(m-b)/2,s=-(p+x)/2,a=-(m+b)/2}return{ratioX:n,ratioY:o,offsetX:s,offsetY:a}}(d,h,l),m=(n.width-a)/u,x=(n.height-a)/f,b=Math.max(Math.min(m,x)/2,0),_=Z(e.options.radius,b),y=(_-Math.max(_*l,0))/e._getVisibleDatasetWeightTotal();e.offsetX=g*_,e.offsetY=p*_,o.total=e.calculateTotal(),e.outerRadius=_-y*e._getRingWeightOffset(e.index),e.innerRadius=Math.max(e.outerRadius-y*c,0),e.updateElements(s,0,s.length,t)}_circumference(t,e){const i=this,n=i.options,o=i._cachedMeta,s=i._getCircumference();return e&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||null===o._parsed[t]?0:i.calculateCircumference(o._parsed[t]*s/_t)}updateElements(t,e,i,n){const o=this,s="reset"===n,a=o.chart,r=a.chartArea,l=a.options.animation,c=(r.left+r.right)/2,h=(r.top+r.bottom)/2,d=s&&l.animateScale,u=d?0:o.innerRadius,f=d?0:o.outerRadius,g=o.resolveDataElementOptions(e,n),p=o.getSharedOptions(g),m=o.includeOptions(n,p);let x,b=o._getRotation();for(x=0;x<e;++x)b+=o._circumference(x,s);for(x=e;x<e+i;++x){const e=o._circumference(x,s),i=t[x],a={x:c+o.offsetX,y:h+o.offsetY,startAngle:b,endAngle:b+e,circumference:e,outerRadius:f,innerRadius:u};m&&(a.options=p||o.resolveDataElementOptions(x,n)),b+=e,o.updateElement(i,x,a,n)}o.updateSharedOptions(p,n,g)}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,n=0;for(i=0;i<e.length;i++){const e=t._parsed[i];null!==e&&!isNaN(e)&&this.chart.getDataVisibility(i)&&(n+=Math.abs(e))}return n}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?_t*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=zi(e._parsed[t],i.options.locale);return{label:n[t]||"",value:o}}getMaxBorderWidth(t){const e=this;let i=0;const n=e.chart;let o,s,a,r,l;if(!t)for(o=0,s=n.data.datasets.length;o<s;++o)if(n.isDatasetVisible(o)){a=n.getDatasetMeta(o),t=a.data,r=a.controller,r!==e&&r.configure();break}if(!t)return 0;for(o=0,s=t.length;o<s;++o)l=r.resolveDataElementOptions(o),"inner"!==l.borderAlign&&(i=Math.max(i,l.borderWidth||0,l.hoverBorderWidth||0));return i}getMaxOffset(t){let e=0;for(let i=0,n=t.length;i<n;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(K(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}fo.id="doughnut",fo.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",indexAxis:"r"},fo.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(((e,i)=>{const n=t.getDatasetMeta(0).controller.getStyle(i);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,hidden:!t.getDataVisibility(i),index:i}})):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const i=": "+t.formattedValue;return Y(e)?(e=e.slice(),e[0]+=i):e+=i,e}}}}};class go extends Ri{initialize(){this.enableOptionSharing=!0,super.initialize()}update(t){const e=this,i=e._cachedMeta,{dataset:n,data:o=[],_dataset:s}=i,a=e.chart._animationsDisabled;let{start:r,count:l}=function(t,e,i){const n=e.length;let o=0,s=n;if(t._sorted){const{iScale:a,_parsed:r}=t,l=a.axis,{min:c,max:h,minDefined:d,maxDefined:u}=a.getUserBounds();d&&(o=Nt(Math.min(oe(r,a.axis,c).lo,i?n:oe(e,l,a.getPixelForValue(c)).lo),0,n-1)),s=u?Nt(Math.max(oe(r,a.axis,h).hi+1,i?0:oe(e,l,a.getPixelForValue(h)).hi+1),o,n)-o:n-o}return{start:o,count:s}}(i,o,a);e._drawStart=r,e._drawCount=l,function(t){const{xScale:e,yScale:i,_scaleRanges:n}=t,o={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!n)return t._scaleRanges=o,!0;const s=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==i.min||n.ymax!==i.max;return Object.assign(n,o),s}(i)&&(r=0,l=o.length),n._decimated=!!s._decimated,n.points=o;const c=e.resolveDatasetElementOptions(t);e.options.showLine||(c.borderWidth=0),c.segment=e.options.segment,e.updateElement(n,void 0,{animated:!a,options:c},t),e.updateElements(o,r,l,t)}updateElements(t,e,i,n){const o=this,s="reset"===n,{iScale:a,vScale:r,_stacked:l}=o._cachedMeta,c=o.resolveDataElementOptions(e,n),h=o.getSharedOptions(c),d=o.includeOptions(n,h),u=a.axis,f=r.axis,g=o.options.spanGaps,p=Tt(g)?g:Number.POSITIVE_INFINITY,m=o.chart._animationsDisabled||s||"none"===n;let x=e>0&&o.getParsed(e-1);for(let c=e;c<e+i;++c){const e=t[c],i=o.getParsed(c),g=m?e:{},b=$(i[f]),_=g[u]=a.getPixelForValue(i[u],c),y=g[f]=s||b?r.getBasePixel():r.getPixelForValue(l?o.applyStack(r,i,l):i[f],c);g.skip=isNaN(_)||isNaN(y)||b,g.stop=c>0&&i[u]-x[u]>p,g.parsed=i,d&&(g.options=h||o.resolveDataElementOptions(c,n)),m||o.updateElement(e,c,g,n),x=i}o.updateSharedOptions(h,n,c)}getMaxOverflow(){const t=this,e=t._cachedMeta,i=e.dataset,n=i.options&&i.options.borderWidth||0,o=e.data||[];if(!o.length)return n;const s=o[0].size(t.resolveDataElementOptions(0)),a=o[o.length-1].size(t.resolveDataElementOptions(o.length-1));return Math.max(n,s,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}go.id="line",go.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},go.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class po extends Ri{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=zi(e._parsed[t].r,i.options.locale);return{label:n[t]||"",value:o}}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}_updateRadius(){const t=this,e=t.chart,i=e.chartArea,n=e.options,o=Math.min(i.right-i.left,i.bottom-i.top),s=Math.max(o/2,0),a=(s-Math.max(n.cutoutPercentage?s/100*n.cutoutPercentage:1,0))/e.getVisibleDatasetCount();t.outerRadius=s-a*t.index,t.innerRadius=t.outerRadius-a}updateElements(t,e,i,n){const o=this,s="reset"===n,a=o.chart,r=o.getDataset(),l=a.options.animation,c=o._cachedMeta.rScale,h=c.xCenter,d=c.yCenter,u=c.getIndexAngle(0)-.5*bt;let f,g=u;const p=360/o.countVisibleElements();for(f=0;f<e;++f)g+=o._computeAngle(f,n,p);for(f=e;f<e+i;f++){const e=t[f];let i=g,m=g+o._computeAngle(f,n,p),x=a.getDataVisibility(f)?c.getDistanceFromCenterForValue(r.data[f]):0;g=m,s&&(l.animateScale&&(x=0),l.animateRotate&&(i=m=u));const b={x:h,y:d,innerRadius:0,outerRadius:x,startAngle:i,endAngle:m,options:o.resolveDataElementOptions(f,n)};o.updateElement(e,f,b,n)}}countVisibleElements(){const t=this.getDataset(),e=this._cachedMeta;let i=0;return e.data.forEach(((e,n)=>{!isNaN(t.data[n])&&this.chart.getDataVisibility(n)&&i++})),i}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Et(this.resolveDataElementOptions(t,e).angle||i):0}}po.id="polarArea",po.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},po.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(((e,i)=>{const n=t.getDatasetMeta(0).controller.getStyle(i);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,hidden:!t.getDataVisibility(i),index:i}})):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class mo extends fo{}mo.id="pie",mo.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class xo extends Ri{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}update(t){const e=this,i=e._cachedMeta,n=i.dataset,o=i.data||[],s=i.iScale.getLabels();if(n.points=o,"resize"!==t){const i=e.resolveDatasetElementOptions(t);e.options.showLine||(i.borderWidth=0);const a={_loop:!0,_fullLoop:s.length===o.length,options:i};e.updateElement(n,void 0,a,t)}e.updateElements(o,0,o.length,t)}updateElements(t,e,i,n){const o=this,s=o.getDataset(),a=o._cachedMeta.rScale,r="reset"===n;for(let l=e;l<e+i;l++){const e=t[l],i=o.resolveDataElementOptions(l,n),c=a.getPointPositionForValue(l,s.data[l]),h=r?a.xCenter:c.x,d=r?a.yCenter:c.y,u={x:h,y:d,angle:c.angle,skip:isNaN(h)||isNaN(d),options:i};o.updateElement(e,l,u,n)}}}xo.id="radar",xo.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},xo.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class bo extends go{}bo.id="scatter",bo.defaults={showLine:!1,fill:!1},bo.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var _o=Object.freeze({__proto__:null,BarController:ho,BubbleController:uo,DoughnutController:fo,LineController:go,PolarAreaController:po,PieController:mo,RadarController:xo,ScatterController:bo});function yo(t,e,i){const{startAngle:n,pixelMargin:o,x:s,y:a,outerRadius:r,innerRadius:l}=e;let c=o/r;t.beginPath(),t.arc(s,a,r,n-c,i+c),l>o?(c=o/l,t.arc(s,a,l,i+c,n-c,!0)):t.arc(s,a,o,i+Mt,n-Mt),t.closePath(),t.clip()}function vo(t,e,i,n){const o=Re(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]);const s=(i-e)/2,a=Math.min(s,n*e/2),r=t=>{const e=(i-Math.min(s,t))*n/2;return Nt(t,0,Math.min(s,e))};return{outerStart:r(o.outerStart),outerEnd:r(o.outerEnd),innerStart:Nt(o.innerStart,0,a),innerEnd:Nt(o.innerEnd,0,a)}}function wo(t,e,i,n){return{x:i+t*Math.cos(e),y:n+t*Math.sin(e)}}function Mo(t,e,i,n){const{x:o,y:s,startAngle:a,pixelMargin:r,innerRadius:l}=e,c=Math.max(e.outerRadius+i-r,0),h=l>0?l+i+r:0,d=n-a,u=(d-Math.max(.001,d*c-i/bt)/c)/2,f=a+u,g=n-u,{outerStart:p,outerEnd:m,innerStart:x,innerEnd:b}=vo(e,h,c,g-f),_=c-p,y=c-m,v=f+p/_,w=g-m/y,M=h+x,k=h+b,S=f+x/M,P=g-b/k;if(t.beginPath(),t.arc(o,s,c,v,w),m>0){const e=wo(y,w,o,s);t.arc(e.x,e.y,m,w,g+Mt)}const D=wo(k,g,o,s);if(t.lineTo(D.x,D.y),b>0){const e=wo(k,P,o,s);t.arc(e.x,e.y,b,g+Mt,P+Math.PI)}if(t.arc(o,s,h,g-b/h,f+x/h,!0),x>0){const e=wo(M,S,o,s);t.arc(e.x,e.y,x,S+Math.PI,f-Mt)}const C=wo(_,f,o,s);if(t.lineTo(C.x,C.y),p>0){const e=wo(_,v,o,s);t.arc(e.x,e.y,p,f-Mt,v)}t.closePath()}function ko(t,e,i,n){const{options:o}=e,s="inner"===o.borderAlign;o.borderWidth&&(s?(t.lineWidth=2*o.borderWidth,t.lineJoin="round"):(t.lineWidth=o.borderWidth,t.lineJoin="bevel"),e.fullCircles&&function(t,e,i){const{x:n,y:o,startAngle:s,pixelMargin:a,fullCircles:r}=e,l=Math.max(e.outerRadius-a,0),c=e.innerRadius+a;let h;for(i&&yo(t,e,s+_t),t.beginPath(),t.arc(n,o,c,s+_t,s,!0),h=0;h<r;++h)t.stroke();for(t.beginPath(),t.arc(n,o,l,s,s+_t),h=0;h<r;++h)t.stroke()}(t,e,s),s&&yo(t,e,n),Mo(t,e,i,n),t.stroke())}class So extends Ei{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const n=this.getProps(["x","y"],i),{angle:o,distance:s}=Ft(n,{x:t,y:e}),{startAngle:a,endAngle:r,innerRadius:l,outerRadius:c,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i);return(h>=_t||Ht(o,a,r))&&(s>=l&&s<=c)}getCenterPoint(t){const{x:e,y:i,startAngle:n,endAngle:o,innerRadius:s,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),r=(n+o)/2,l=(s+a)/2;return{x:e+Math.cos(r)*l,y:i+Math.sin(r)*l}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const e=this,{options:i,circumference:n}=e,o=(i.offset||0)/2;if(e.pixelMargin="inner"===i.borderAlign?.33:0,e.fullCircles=n>_t?Math.floor(n/_t):0,0===n||e.innerRadius<0||e.outerRadius<0)return;t.save();let s=0;if(o){s=o/2;const i=(e.startAngle+e.endAngle)/2;t.translate(Math.cos(i)*s,Math.sin(i)*s),e.circumference>=bt&&(s=o)}t.fillStyle=i.backgroundColor,t.strokeStyle=i.borderColor;const a=function(t,e,i){const{fullCircles:n,startAngle:o,circumference:s}=e;let a=e.endAngle;if(n){Mo(t,e,i,o+_t);for(let e=0;e<n;++e)t.fill();isNaN(s)||(a=o+s%_t,s%_t==0&&(a+=_t))}return Mo(t,e,i,a),t.fill(),a}(t,e,s);ko(t,e,s,a),t.restore()}}function Po(t,e,i=e){t.lineCap=K(i.borderCapStyle,e.borderCapStyle),t.setLineDash(K(i.borderDash,e.borderDash)),t.lineDashOffset=K(i.borderDashOffset,e.borderDashOffset),t.lineJoin=K(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=K(i.borderWidth,e.borderWidth),t.strokeStyle=K(i.borderColor,e.borderColor)}function Do(t,e,i){t.lineTo(i.x,i.y)}function Co(t,e,i={}){const n=t.length,{start:o=0,end:s=n-1}=i,{start:a,end:r}=e,l=Math.max(o,a),c=Math.min(s,r),h=o<a&&s<a||o>r&&s>r;return{count:n,start:l,loop:e.loop,ilen:c<l&&!h?n+c-l:c-l}}function Oo(t,e,i,n){const{points:o,options:s}=e,{count:a,start:r,loop:l,ilen:c}=Co(o,i,n),h=function(t){return t.stepped?Jt:t.tension||"monotone"===t.cubicInterpolationMode?te:Do}(s);let d,u,f,{move:g=!0,reverse:p}=n||{};for(d=0;d<=c;++d)u=o[(r+(p?c-d:d))%a],u.skip||(g?(t.moveTo(u.x,u.y),g=!1):h(t,f,u,p,s.stepped),f=u);return l&&(u=o[(r+(p?c:0))%a],h(t,f,u,p,s.stepped)),!!l}function To(t,e,i,n){const o=e.points,{count:s,start:a,ilen:r}=Co(o,i,n),{move:l=!0,reverse:c}=n||{};let h,d,u,f,g,p,m=0,x=0;const b=t=>(a+(c?r-t:t))%s,_=()=>{f!==g&&(t.lineTo(m,g),t.lineTo(m,f),t.lineTo(m,p))};for(l&&(d=o[b(0)],t.moveTo(d.x,d.y)),h=0;h<=r;++h){if(d=o[b(h)],d.skip)continue;const e=d.x,i=d.y,n=0|e;n===u?(i<f?f=i:i>g&&(g=i),m=(x*m+e)/++x):(_(),t.lineTo(e,i),u=n,x=0,f=g=i),p=i}_()}function Ao(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return!(t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i)?To:Oo}So.id="arc",So.defaults={borderAlign:"center",borderColor:"#fff",borderRadius:0,borderWidth:2,offset:0,angle:void 0},So.defaultRoutes={backgroundColor:"backgroundColor"};const Lo="function"==typeof Path2D;function Ro(t,e,i,n){Lo&&1===e.segments.length?function(t,e,i,n){let o=e._path;o||(o=e._path=new Path2D,e.path(o,i,n)&&o.closePath()),Po(t,e.options),t.stroke(o)}(t,e,i,n):function(t,e,i,n){const{segments:o,options:s}=e,a=Ao(e);for(const r of o)Po(t,s,r.style),t.beginPath(),a(t,e,r,{start:i,end:i+n-1})&&t.closePath(),t.stroke()}(t,e,i,n)}class Eo extends Ei{constructor(t){super(),this.animated=!0,this.options=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this,n=i.options;if((n.tension||"monotone"===n.cubicInterpolationMode)&&!n.stepped&&!i._pointsUpdated){const o=n.spanGaps?i._loop:i._fullLoop;gn(i._points,n,t,o,e),i._pointsUpdated=!0}}set points(t){const e=this;e._points=t,delete e._segments,delete e._path,e._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Sn(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this,n=i.options,o=t[e],s=i.points,a=kn(i,{property:e,start:o,end:o});if(!a.length)return;const r=[],l=function(t){return t.stepped?mn:t.tension||"monotone"===t.cubicInterpolationMode?xn:pn}(n);let c,h;for(c=0,h=a.length;c<h;++c){const{start:i,end:h}=a[c],d=s[i],u=s[h];if(d===u){r.push(d);continue}const f=l(d,u,Math.abs((o-d[e])/(u[e]-d[e])),n.stepped);f[e]=t[e],r.push(f)}return 1===r.length?r[0]:r}pathSegment(t,e,i){return Ao(this)(t,this,e,i)}path(t,e,i){const n=this,o=n.segments,s=Ao(n);let a=n._loop;e=e||0,i=i||n.points.length-e;for(const r of o)a&=s(t,n,r,{start:e,end:e+i-1});return!!a}draw(t,e,i,n){const o=this,s=o.options||{};(o.points||[]).length&&s.borderWidth&&(t.save(),Ro(t,o,i,n),t.restore(),o.animated&&(o._pointsUpdated=!1,o._path=void 0))}}function Io(t,e,i,n){const o=t.options,{[i]:s}=t.getProps([i],n);return Math.abs(e-s)<o.radius+o.hitRadius}Eo.id="line",Eo.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},Eo.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},Eo.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class zo extends Ei{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const n=this.options,{x:o,y:s}=this.getProps(["x","y"],i);return Math.pow(t-o,2)+Math.pow(e-s,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,e){return Io(this,t,"x",e)}inYRange(t,e){return Io(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);return 2*(e+(e&&t.borderWidth||0))}draw(t){const e=this,i=e.options;e.skip||i.radius<.1||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Kt(t,i,e.x,e.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function Fo(t,e){const{x:i,y:n,base:o,width:s,height:a}=t.getProps(["x","y","base","width","height"],e);let r,l,c,h,d;return t.horizontal?(d=a/2,r=Math.min(i,o),l=Math.max(i,o),c=n-d,h=n+d):(d=s/2,r=i-d,l=i+d,c=Math.min(n,o),h=Math.max(n,o)),{left:r,top:c,right:l,bottom:h}}function Vo(t){let e=t.options.borderSkipped;const i={};return e?(e=t.horizontal?Bo(e,"left","right",t.base>t.x):Bo(e,"bottom","top",t.base<t.y),i[e]=!0,i):i}function Bo(t,e,i,n){var o,s,a;return n?(a=i,t=Wo(t=(o=t)===(s=e)?a:o===a?s:o,i,e)):t=Wo(t,e,i),t}function Wo(t,e,i){return"start"===t?e:"end"===t?i:t}function Ho(t,e,i,n){return t?0:Math.max(Math.min(e,n),i)}function No(t){const e=Fo(t),i=e.right-e.left,n=e.bottom-e.top,o=function(t,e,i){const n=t.options.borderWidth,o=Vo(t),s=Ee(n);return{t:Ho(o.top,s.top,0,i),r:Ho(o.right,s.right,0,e),b:Ho(o.bottom,s.bottom,0,i),l:Ho(o.left,s.left,0,e)}}(t,i/2,n/2),s=function(t,e,i){const{enableBorderRadius:n}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,s=Ie(o),a=Math.min(e,i),r=Vo(t),l=n||U(o);return{topLeft:Ho(!l||r.top||r.left,s.topLeft,0,a),topRight:Ho(!l||r.top||r.right,s.topRight,0,a),bottomLeft:Ho(!l||r.bottom||r.left,s.bottomLeft,0,a),bottomRight:Ho(!l||r.bottom||r.right,s.bottomRight,0,a)}}(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n,radius:s},inner:{x:e.left+o.l,y:e.top+o.t,w:i-o.l-o.r,h:n-o.t-o.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,s.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(o.b,o.r))}}}}function jo(t,e,i,n){const o=null===e,s=null===i,a=t&&!(o&&s)&&Fo(t,n);return a&&(o||e>=a.left&&e<=a.right)&&(s||i>=a.top&&i<=a.bottom)}function $o(t,e){t.rect(e.x,e.y,e.w,e.h)}zo.id="point",zo.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},zo.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class Yo extends Ei{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,t&&Object.assign(this,t)}draw(t){const e=this.options,{inner:i,outer:n}=No(this),o=(s=n.radius).topLeft||s.topRight||s.bottomLeft||s.bottomRight?ie:$o;var s;t.save(),n.w===i.w&&n.h===i.h||(t.beginPath(),o(t,n),t.clip(),o(t,i),t.fillStyle=e.borderColor,t.fill("evenodd")),t.beginPath(),o(t,i),t.fillStyle=e.backgroundColor,t.fill(),t.restore()}inRange(t,e,i){return jo(this,t,e,i)}inXRange(t,e){return jo(this,t,null,e)}inYRange(t,e){return jo(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:n,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+n)/2:e,y:o?i:(i+n)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}Yo.id="bar",Yo.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,enableBorderRadius:!0,pointStyle:void 0},Yo.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var Uo=Object.freeze({__proto__:null,ArcElement:So,LineElement:Eo,PointElement:zo,BarElement:Yo});function Xo(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function qo(t){t.data.datasets.forEach((t=>{Xo(t)}))}var Ko={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled)return void qo(t);const n=t.width;t.data.datasets.forEach(((e,o)=>{const{_data:s,indexAxis:a}=e,r=t.getDatasetMeta(o),l=s||e.data;if("y"===Ve([a,t.options.indexAxis]))return;if("line"!==r.type)return;const c=t.scales[r.xAxisID];if("linear"!==c.type&&"time"!==c.type)return;if(t.options.parsing)return;let h,{start:d,count:u}=function(t,e){const i=e.length;let n,o=0;const{iScale:s}=t,{min:a,max:r,minDefined:l,maxDefined:c}=s.getUserBounds();return l&&(o=Nt(oe(e,s.axis,a).lo,0,i-1)),n=c?Nt(oe(e,s.axis,r).hi+1,o,i)-o:i-o,{start:o,count:n}}(r,l);if(u<=4*n)Xo(e);else{switch($(s)&&(e._data=l,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":h=function(t,e,i,n,o){const s=o.samples||n;if(s>=i)return t.slice(e,e+i);const a=[],r=(i-2)/(s-2);let l=0;const c=e+i-1;let h,d,u,f,g,p=e;for(a[l++]=t[p],h=0;h<s-2;h++){let n,o=0,s=0;const c=Math.floor((h+1)*r)+1+e,m=Math.min(Math.floor((h+2)*r)+1,i)+e,x=m-c;for(n=c;n<m;n++)o+=t[n].x,s+=t[n].y;o/=x,s/=x;const b=Math.floor(h*r)+1+e,_=Math.floor((h+1)*r)+1+e,{x:y,y:v}=t[p];for(u=f=-1,n=b;n<_;n++)f=.5*Math.abs((y-o)*(t[n].y-v)-(y-t[n].x)*(s-v)),f>u&&(u=f,d=t[n],g=n);a[l++]=d,p=g}return a[l++]=t[c],a}(l,d,u,n,i);break;case"min-max":h=function(t,e,i,n){let o,s,a,r,l,c,h,d,u,f,g=0,p=0;const m=[],x=e+i-1,b=t[e].x,_=t[x].x-b;for(o=e;o<e+i;++o){s=t[o],a=(s.x-b)/_*n,r=s.y;const e=0|a;if(e===l)r<u?(u=r,c=o):r>f&&(f=r,h=o),g=(p*g+s.x)/++p;else{const i=o-1;if(!$(c)&&!$(h)){const e=Math.min(c,h),n=Math.max(c,h);e!==d&&e!==i&&m.push({...t[e],x:g}),n!==d&&n!==i&&m.push({...t[n],x:g})}o>0&&i!==d&&m.push(t[i]),m.push(s),l=e,p=0,u=f=r,c=h=d=o}}return m}(l,d,u,n);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=h}}))},destroy(t){qo(t)}};function Go(t,e,i){const n=function(t){const e=t.options,i=e.fill;let n=K(i&&i.target,i);return void 0===n&&(n=!!e.backgroundColor),!1!==n&&null!==n&&(!0===n?"origin":n)}(t);if(U(n))return!isNaN(n.value)&&n;let o=parseFloat(n);return X(o)&&Math.floor(o)===o?("-"!==n[0]&&"+"!==n[0]||(o=e+o),!(o===e||o<0||o>=i)&&o):["origin","start","end","stack"].indexOf(n)>=0&&n}class Zo{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:n,y:o,radius:s}=this;return e=e||{start:0,end:_t},t.arc(n,o,s,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:n}=this,o=t.angle;return{x:e+Math.cos(o)*n,y:i+Math.sin(o)*n,angle:o}}}function Qo(t){return(t.scale||{}).getPointPositionForValue?function(t){const{scale:e,fill:i}=t,n=e.options,o=e.getLabels().length,s=[],a=n.reverse?e.max:e.min,r=n.reverse?e.min:e.max;let l,c,h;if(h="start"===i?a:"end"===i?r:U(i)?i.value:e.getBaseValue(),n.grid.circular)return c=e.getPointPositionForValue(0,a),new Zo({x:c.x,y:c.y,radius:e.getDistanceFromCenterForValue(h)});for(l=0;l<o;++l)s.push(e.getPointPositionForValue(l,h));return s}(t):function(t){const{scale:e={},fill:i}=t;let n,o=null;return"start"===i?o=e.bottom:"end"===i?o=e.top:U(i)?o=e.getPixelForValue(i.value):e.getBasePixel&&(o=e.getBasePixel()),X(o)?(n=e.isHorizontal(),{x:n?o:null,y:n?null:o}):null}(t)}function Jo(t){const{chart:e,scale:i,index:n,line:o}=t,s=[],a=o.segments,r=o.points,l=function(t,e){const i=[],n=t.getSortedVisibleDatasetMetas();for(let t=0;t<n.length;t++){const o=n[t];if(o.index===e)break;ts(o)&&i.unshift(o.dataset)}return i}(e,n);l.push(ns({x:null,y:i.bottom},o));for(let t=0;t<a.length;t++){const e=a[t];for(let t=e.start;t<=e.end;t++)es(s,r[t],l)}return new Eo({points:s,options:{}})}const ts=t=>"line"===t.type&&!t.hidden;function es(t,e,i){const n=[];for(let o=0;o<i.length;o++){const s=i[o],{first:a,last:r,point:l}=is(s,e,"x");if(!(!l||a&&r))if(a)n.unshift(l);else if(t.push(l),!r)break}t.push(...n)}function is(t,e,i){const n=t.interpolate(e,i);if(!n)return{};const o=n[i],s=t.segments,a=t.points;let r=!1,l=!1;for(let t=0;t<s.length;t++){const e=s[t],n=a[e.start][i],c=a[e.end][i];if(o>=n&&o<=c){r=o===n,l=o===c;break}}return{first:r,last:l,point:n}}function ns(t,e){let i=[],n=!1;return Y(t)?(n=!0,i=t):i=function(t,e){const{x:i=null,y:n=null}=t||{},o=e.points,s=[];return e.segments.forEach((t=>{const e=o[t.start],a=o[t.end];null!==n?(s.push({x:e.x,y:n}),s.push({x:a.x,y:n})):null!==i&&(s.push({x:i,y:e.y}),s.push({x:i,y:a.y}))})),s}(t,e),i.length?new Eo({points:i,options:{tension:0},_loop:n,_fullLoop:n}):null}function os(t,e,i){let n=t[e].fill;const o=[e];let s;if(!i)return n;for(;!1!==n&&-1===o.indexOf(n);){if(!X(n))return n;if(s=t[n],!s)return!1;if(s.visible)return n;o.push(n),n=s.fill}return!1}function ss(t,e,i){t.beginPath(),e.path(t),t.lineTo(e.last().x,i),t.lineTo(e.first().x,i),t.closePath(),t.clip()}function as(t,e,i,n){if(n)return;let o=e[t],s=i[t];return"angle"===t&&(o=Wt(o),s=Wt(s)),{property:t,start:o,end:s}}function rs(t,e,i,n){return t&&e?n(t[i],e[i]):t?t[i]:e?e[i]:0}function ls(t,e,i){const{top:n,bottom:o}=e.chart.chartArea,{property:s,start:a,end:r}=i||{};"x"===s&&(t.beginPath(),t.rect(a,n,r-a,o-n),t.clip())}function cs(t,e,i,n){const o=e.interpolate(i,n);o&&t.lineTo(o.x,o.y)}function hs(t,e){const{line:i,target:n,property:o,color:s,scale:a}=e,r=function(t,e,i){const n=t.segments,o=t.points,s=e.points,a=[];for(const t of n){const n=as(i,o[t.start],o[t.end],t.loop);if(!e.segments){a.push({source:t,target:n,start:o[t.start],end:o[t.end]});continue}const r=kn(e,n);for(const e of r){const r=as(i,s[e.start],s[e.end],e.loop),l=Mn(t,o,r);for(const t of l)a.push({source:t,target:e,start:{[i]:rs(n,r,"start",Math.max)},end:{[i]:rs(n,r,"end",Math.min)}})}}return a}(i,n,o);for(const{source:e,target:l,start:c,end:h}of r){const{style:{backgroundColor:r=s}={}}=e;t.save(),t.fillStyle=r,ls(t,a,as(o,c,h)),t.beginPath();const d=!!i.pathSegment(t,e);d?t.closePath():cs(t,n,h,o);const u=!!n.pathSegment(t,l,{move:d,reverse:!0}),f=d&&u;f||cs(t,n,c,o),t.closePath(),t.fill(f?"evenodd":"nonzero"),t.restore()}}function ds(t,e,i){const n=function(t){const{chart:e,fill:i,line:n}=t;if(X(i))return function(t,e){const i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}(e,i);if("stack"===i)return Jo(t);const o=Qo(t);return o instanceof Zo?o:ns(o,n)}(e),{line:o,scale:s,axis:a}=e,r=o.options,l=r.fill,c=r.backgroundColor,{above:h=c,below:d=c}=l||{};n&&o.points.length&&(Zt(t,i),function(t,e){const{line:i,target:n,above:o,below:s,area:a,scale:r}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&s!==o&&(ss(t,n,a.top),hs(t,{line:i,target:n,color:o,scale:r,property:l}),t.restore(),t.save(),ss(t,n,a.bottom)),hs(t,{line:i,target:n,color:s,scale:r,property:l}),t.restore()}(t,{line:o,target:n,above:h,below:d,area:i,scale:s,axis:a}),Qt(t))}var us={id:"filler",afterDatasetsUpdate(t,e,i){const n=(t.data.datasets||[]).length,o=[];let s,a,r,l;for(a=0;a<n;++a)s=t.getDatasetMeta(a),r=s.dataset,l=null,r&&r.options&&r instanceof Eo&&(l={visible:t.isDatasetVisible(a),index:a,fill:Go(r,a,n),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:r}),s.$filler=l,o.push(l);for(a=0;a<n;++a)l=o[a],l&&!1!==l.fill&&(l.fill=os(o,a,i.propagate))},beforeDraw(t,e,i){const n="beforeDraw"===i.drawTime,o=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let e=o.length-1;e>=0;--e){const i=o[e].$filler;i&&(i.line.updateControlPoints(s,i.axis),n&&ds(t.ctx,i,s))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const n=t.getSortedVisibleDatasetMetas();for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&ds(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const n=e.meta.$filler;n&&!1!==n.fill&&"beforeDatasetDraw"===i.drawTime&&ds(t.ctx,n,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const fs=(t,e)=>{let{boxHeight:i=e,boxWidth:n=e}=t;return t.usePointStyle&&(i=Math.min(i,e),n=Math.min(n,e)),{boxWidth:n,boxHeight:i,itemHeight:Math.max(e,i)}};class gs extends Ei{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){const n=this;n.maxWidth=t,n.maxHeight=e,n._margins=i,n.setDimensions(),n.buildLabels(),n.fit()}setDimensions(){const t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height)}buildLabels(){const t=this,e=t.options.labels||{};let i=Q(e.generateLabels,[t.chart],t)||[];e.filter&&(i=i.filter((i=>e.filter(i,t.chart.data)))),e.sort&&(i=i.sort(((i,n)=>e.sort(i,n,t.chart.data)))),t.options.reverse&&i.reverse(),t.legendItems=i}fit(){const t=this,{options:e,ctx:i}=t;if(!e.display)return void(t.width=t.height=0);const n=e.labels,o=Fe(n.font),s=o.size,a=t._computeTitleHeight(),{boxWidth:r,itemHeight:l}=fs(n,s);let c,h;i.font=o.string,t.isHorizontal()?(c=t.maxWidth,h=t._fitRows(a,s,r,l)+10):(h=t.maxHeight,c=t._fitCols(a,s,r,l)+10),t.width=Math.min(c,e.maxWidth||t.maxWidth),t.height=Math.min(h,e.maxHeight||t.maxHeight)}_fitRows(t,e,i,n){const o=this,{ctx:s,maxWidth:a,options:{labels:{padding:r}}}=o,l=o.legendHitBoxes=[],c=o.lineWidths=[0],h=n+r;let d=t;s.textAlign="left",s.textBaseline="middle";let u=-1,f=-h;return o.legendItems.forEach(((t,o)=>{const g=i+e/2+s.measureText(t.text).width;(0===o||c[c.length-1]+g+2*r>a)&&(d+=h,c[c.length-(o>0?0:1)]=0,f+=h,u++),l[o]={left:0,top:f,row:u,width:g,height:n},c[c.length-1]+=g+r})),d}_fitCols(t,e,i,n){const o=this,{ctx:s,maxHeight:a,options:{labels:{padding:r}}}=o,l=o.legendHitBoxes=[],c=o.columnSizes=[],h=a-t;let d=r,u=0,f=0,g=0,p=0,m=0;return o.legendItems.forEach(((t,o)=>{const a=i+e/2+s.measureText(t.text).width;o>0&&f+e+2*r>h&&(d+=u+r,c.push({width:u,height:f}),g+=u+r,m++,p=0,u=f=0),u=Math.max(u,a),f+=e+r,l[o]={left:g,top:p,col:m,width:a,height:n},p+=n+r})),d+=u,c.push({width:u,height:f}),d}adjustHitBoxes(){const t=this;if(!t.options.display)return;const e=t._computeTitleHeight(),{legendHitBoxes:i,options:{align:n,labels:{padding:s}}}=t;if(this.isHorizontal()){let a=0,r=o(n,t.left+s,t.right-t.lineWidths[a]);for(const l of i)a!==l.row&&(a=l.row,r=o(n,t.left+s,t.right-t.lineWidths[a])),l.top+=t.top+e+s,l.left=r,r+=l.width+s}else{let a=0,r=o(n,t.top+e+s,t.bottom-t.columnSizes[a].height);for(const l of i)l.col!==a&&(a=l.col,r=o(n,t.top+e+s,t.bottom-t.columnSizes[a].height)),l.top=r,l.left+=t.left+s,r+=l.height+s}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){const t=this;if(t.options.display){const e=t.ctx;Zt(e,t),t._draw(),Qt(e)}}_draw(){const t=this,{options:e,columnSizes:i,lineWidths:n,ctx:a}=t,{align:r,labels:l}=e,c=xt.color,h=bn(e.rtl,t.left,t.width),d=Fe(l.font),{color:u,padding:f}=l,g=d.size,p=g/2;let m;t.drawTitle(),a.textAlign=h.textAlign("left"),a.textBaseline="middle",a.lineWidth=.5,a.font=d.string;const{boxWidth:x,boxHeight:b,itemHeight:_}=fs(l,g),y=t.isHorizontal(),v=this._computeTitleHeight();m=y?{x:o(r,t.left+f,t.right-n[0]),y:t.top+f+v,line:0}:{x:t.left+f,y:o(r,t.top+v+f,t.bottom-i[0].height),line:0},_n(t.ctx,e.textDirection);const w=_+f;t.legendItems.forEach(((e,M)=>{a.strokeStyle=e.fontColor||u,a.fillStyle=e.fontColor||u;const k=a.measureText(e.text).width,S=h.textAlign(e.textAlign||(e.textAlign=l.textAlign)),P=x+g/2+k;let D=m.x,C=m.y;h.setWidth(t.width),y?M>0&&D+P+f>t.right&&(C=m.y+=w,m.line++,D=m.x=o(r,t.left+f,t.right-n[m.line])):M>0&&C+w>t.bottom&&(D=m.x=D+i[m.line].width+f,m.line++,C=m.y=o(r,t.top+v+f,t.bottom-i[m.line].height));!function(t,e,i){if(isNaN(x)||x<=0||isNaN(b)||b<0)return;a.save();const n=K(i.lineWidth,1);if(a.fillStyle=K(i.fillStyle,c),a.lineCap=K(i.lineCap,"butt"),a.lineDashOffset=K(i.lineDashOffset,0),a.lineJoin=K(i.lineJoin,"miter"),a.lineWidth=n,a.strokeStyle=K(i.strokeStyle,c),a.setLineDash(K(i.lineDash,[])),l.usePointStyle){const o={radius:x*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},s=h.xPlus(t,x/2);Kt(a,o,s,e+p)}else{const o=e+Math.max((g-b)/2,0),s=h.leftForLtr(t,x),r=Ie(i.borderRadius);a.beginPath(),Object.values(r).some((t=>0!==t))?ie(a,{x:s,y:o,w:x,h:b,radius:r}):a.rect(s,o,x,b),a.fill(),0!==n&&a.stroke()}a.restore()}(h.x(D),C,e),D=s(S,D+x+p,t.right),function(t,e,i){ee(a,i.text,t,e+_/2,d,{strikethrough:i.hidden,textAlign:i.textAlign})}(h.x(D),C,e),y?m.x+=P+f:m.y+=w})),yn(t.ctx,e.textDirection)}drawTitle(){const t=this,e=t.options,i=e.title,s=Fe(i.font),a=ze(i.padding);if(!i.display)return;const r=bn(e.rtl,t.left,t.width),l=t.ctx,c=i.position,h=s.size/2,d=a.top+h;let u,f=t.left,g=t.width;if(this.isHorizontal())g=Math.max(...t.lineWidths),u=t.top+d,f=o(e.align,f,t.right-g);else{const i=t.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);u=d+o(e.align,t.top,t.bottom-i-e.labels.padding-t._computeTitleHeight())}const p=o(c,f,f+g);l.textAlign=r.textAlign(n(c)),l.textBaseline="middle",l.strokeStyle=i.color,l.fillStyle=i.color,l.font=s.string,ee(l,i.text,p,u,s)}_computeTitleHeight(){const t=this.options.title,e=Fe(t.font),i=ze(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){const i=this;let n,o,s;if(t>=i.left&&t<=i.right&&e>=i.top&&e<=i.bottom)for(s=i.legendHitBoxes,n=0;n<s.length;++n)if(o=s[n],t>=o.left&&t<=o.left+o.width&&e>=o.top&&e<=o.top+o.height)return i.legendItems[n];return null}handleEvent(t){const e=this,i=e.options;if(!function(t,e){if("mousemove"===t&&(e.onHover||e.onLeave))return!0;if(e.onClick&&("click"===t||"mouseup"===t))return!0;return!1}(t.type,i))return;const n=e._getLegendItemAt(t.x,t.y);if("mousemove"===t.type){const a=e._hoveredItem,r=(s=n,null!==(o=a)&&null!==s&&o.datasetIndex===s.datasetIndex&&o.index===s.index);a&&!r&&Q(i.onLeave,[t,a,e],e),e._hoveredItem=n,n&&!r&&Q(i.onHover,[t,n,e],e)}else n&&Q(i.onClick,[t,n,e],e);var o,s}}var ps={id:"legend",_element:gs,start(t,e,i){const n=t.legend=new gs({ctx:t.ctx,options:i,chart:t});Ge.configure(t,n,i),Ge.addBox(t,n)},stop(t){Ge.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const n=t.legend;Ge.configure(t,n,i),n.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const n=e.datasetIndex,o=i.chart;o.isDatasetVisible(n)?(o.hide(n),e.hidden=!0):(o.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:n,textAlign:o,color:s}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const a=t.controller.getStyle(i?0:void 0),r=ze(a.borderWidth);return{text:e[t.index].label,fillStyle:a.backgroundColor,fontColor:s,hidden:!t.visible,lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:(r.width+r.height)/4,strokeStyle:a.borderColor,pointStyle:n||a.pointStyle,rotation:a.rotation,textAlign:o||a.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class ms extends Ei{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this,n=i.options;if(i.left=0,i.top=0,!n.display)return void(i.width=i.height=i.right=i.bottom=0);i.width=i.right=t,i.height=i.bottom=e;const o=Y(n.text)?n.text.length:1;i._padding=ze(n.padding);const s=o*Fe(n.font).lineHeight+i._padding.height;i.isHorizontal()?i.height=s:i.width=s}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:n,right:s,options:a}=this,r=a.align;let l,c,h,d=0;return this.isHorizontal()?(c=o(r,i,s),h=e+t,l=s-i):("left"===a.position?(c=i+t,h=o(r,n,e),d=-.5*bt):(c=s-t,h=o(r,e,n),d=.5*bt),l=n-e),{titleX:c,titleY:h,maxWidth:l,rotation:d}}draw(){const t=this,e=t.ctx,i=t.options;if(!i.display)return;const o=Fe(i.font),s=o.lineHeight/2+t._padding.top,{titleX:a,titleY:r,maxWidth:l,rotation:c}=t._drawArgs(s);ee(e,i.text,0,0,o,{color:i.color,maxWidth:l,rotation:c,textAlign:n(i.align),textBaseline:"middle",translation:[a,r]})}}var xs={id:"title",_element:ms,start(t,e,i){!function(t,e){const i=new ms({ctx:t.ctx,options:e,chart:t});Ge.configure(t,i,e),Ge.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const e=t.titleBlock;Ge.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const n=t.titleBlock;Ge.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const bs={average(t){if(!t.length)return!1;let e,i,n=0,o=0,s=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();n+=t.x,o+=t.y,++s}}return{x:n/s,y:o/s}},nearest(t,e){if(!t.length)return!1;let i,n,o,s=e.x,a=e.y,r=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){const n=t[i].element;if(n&&n.hasValue()){const t=Vt(e,n.getCenterPoint());t<r&&(r=t,o=n)}}if(o){const t=o.tooltipPosition();s=t.x,a=t.y}return{x:s,y:a}}};function _s(t,e){return e&&(Y(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function ys(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function vs(t,e){const{element:i,datasetIndex:n,index:o}=e,s=t.getDatasetMeta(n).controller,{label:a,value:r}=s.getLabelAndValue(o);return{chart:t,label:a,parsed:s.getParsed(o),raw:t.data.datasets[n].data[o],formattedValue:r,dataset:s.getDataset(),dataIndex:o,datasetIndex:n,element:i}}function ws(t,e){const i=t._chart.ctx,{body:n,footer:o,title:s}=t,{boxWidth:a,boxHeight:r}=e,l=Fe(e.bodyFont),c=Fe(e.titleFont),h=Fe(e.footerFont),d=s.length,u=o.length,f=n.length,g=ze(e.padding);let p=g.height,m=0,x=n.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(x+=t.beforeBody.length+t.afterBody.length,d&&(p+=d*c.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),x){p+=f*(e.displayColors?Math.max(r,l.lineHeight):l.lineHeight)+(x-f)*l.lineHeight+(x-1)*e.bodySpacing}u&&(p+=e.footerMarginTop+u*h.lineHeight+(u-1)*e.footerSpacing);let b=0;const _=function(t){m=Math.max(m,i.measureText(t).width+b)};return i.save(),i.font=c.string,J(t.title,_),i.font=l.string,J(t.beforeBody.concat(t.afterBody),_),b=e.displayColors?a+2:0,J(n,(t=>{J(t.before,_),J(t.lines,_),J(t.after,_)})),b=0,i.font=h.string,J(t.footer,_),i.restore(),m+=g.width,{width:m,height:p}}function Ms(t,e,i,n){const{x:o,width:s}=i,{width:a,chartArea:{left:r,right:l}}=t;let c="center";return"center"===n?c=o<=(r+l)/2?"left":"right":o<=s/2?c="left":o>=a-s/2&&(c="right"),function(t,e,i,n){const{x:o,width:s}=n,a=i.caretSize+i.caretPadding;return"left"===t&&o+s+a>e.width||"right"===t&&o-s-a<0||void 0}(c,t,e,i)&&(c="center"),c}function ks(t,e,i){const n=e.yAlign||function(t,e){const{y:i,height:n}=e;return i<n/2?"top":i>t.height-n/2?"bottom":"center"}(t,i);return{xAlign:e.xAlign||Ms(t,e,i,n),yAlign:n}}function Ss(t,e,i,n){const{caretSize:o,caretPadding:s,cornerRadius:a}=t,{xAlign:r,yAlign:l}=i,c=o+s,h=a+s;let d=function(t,e){let{x:i,width:n}=t;return"right"===e?i-=n:"center"===e&&(i-=n/2),i}(e,r);const u=function(t,e,i){let{y:n,height:o}=t;return"top"===e?n+=i:n-="bottom"===e?o+i:o/2,n}(e,l,c);return"center"===l?"left"===r?d+=c:"right"===r&&(d-=c):"left"===r?d-=h:"right"===r&&(d+=h),{x:Nt(d,0,n.width-e.width),y:Nt(u,0,n.height-e.height)}}function Ps(t,e,i){const n=ze(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-n.right:t.x+n.left}function Ds(t){return _s([],ys(t))}function Cs(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class Os extends Ei{constructor(t){super(),this.opacity=0,this._active=[],this._chart=t._chart,this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this,e=t._cachedAnimations;if(e)return e;const i=t._chart,n=t.options.setContext(t.getContext()),o=n.enabled&&i.options.animation&&n.animations,s=new vi(t._chart,o);return o._cacheable&&(t._cachedAnimations=Object.freeze(s)),s}getContext(){const t=this;return t.$context||(t.$context=(e=t._chart.getContext(),i=t,n=t._tooltipItems,Object.assign(Object.create(e),{tooltip:i,tooltipItems:n,type:"tooltip"})));var e,i,n}getTitle(t,e){const i=this,{callbacks:n}=e,o=n.beforeTitle.apply(i,[t]),s=n.title.apply(i,[t]),a=n.afterTitle.apply(i,[t]);let r=[];return r=_s(r,ys(o)),r=_s(r,ys(s)),r=_s(r,ys(a)),r}getBeforeBody(t,e){return Ds(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const i=this,{callbacks:n}=e,o=[];return J(t,(t=>{const e={before:[],lines:[],after:[]},s=Cs(n,t);_s(e.before,ys(s.beforeLabel.call(i,t))),_s(e.lines,s.label.call(i,t)),_s(e.after,ys(s.afterLabel.call(i,t))),o.push(e)})),o}getAfterBody(t,e){return Ds(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const i=this,{callbacks:n}=e,o=n.beforeFooter.apply(i,[t]),s=n.footer.apply(i,[t]),a=n.afterFooter.apply(i,[t]);let r=[];return r=_s(r,ys(o)),r=_s(r,ys(s)),r=_s(r,ys(a)),r}_createItems(t){const e=this,i=e._active,n=e._chart.data,o=[],s=[],a=[];let r,l,c=[];for(r=0,l=i.length;r<l;++r)c.push(vs(e._chart,i[r]));return t.filter&&(c=c.filter(((e,i,o)=>t.filter(e,i,o,n)))),t.itemSort&&(c=c.sort(((e,i)=>t.itemSort(e,i,n)))),J(c,(i=>{const n=Cs(t.callbacks,i);o.push(n.labelColor.call(e,i)),s.push(n.labelPointStyle.call(e,i)),a.push(n.labelTextColor.call(e,i))})),e.labelColors=o,e.labelPointStyles=s,e.labelTextColors=a,e.dataPoints=c,c}update(t,e){const i=this,n=i.options.setContext(i.getContext()),o=i._active;let s,a=[];if(o.length){const t=bs[n.position].call(i,o,i._eventPosition);a=i._createItems(n),i.title=i.getTitle(a,n),i.beforeBody=i.getBeforeBody(a,n),i.body=i.getBody(a,n),i.afterBody=i.getAfterBody(a,n),i.footer=i.getFooter(a,n);const e=i._size=ws(i,n),r=Object.assign({},t,e),l=ks(i._chart,n,r),c=Ss(n,r,l,i._chart);i.xAlign=l.xAlign,i.yAlign=l.yAlign,s={opacity:1,x:c.x,y:c.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==i.opacity&&(s={opacity:0});i._tooltipItems=a,i.$context=void 0,s&&i._resolveAnimations().update(i,s),t&&n.external&&n.external.call(i,{chart:i._chart,tooltip:i,replay:e})}drawCaret(t,e,i,n){const o=this.getCaretPosition(t,i,n);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,i){const{xAlign:n,yAlign:o}=this,{cornerRadius:s,caretSize:a}=i,{x:r,y:l}=t,{width:c,height:h}=e;let d,u,f,g,p,m;return"center"===o?(p=l+h/2,"left"===n?(d=r,u=d-a,g=p+a,m=p-a):(d=r+c,u=d+a,g=p-a,m=p+a),f=d):(u="left"===n?r+s+a:"right"===n?r+c-s-a:this.caretX,"top"===o?(g=l,p=g-a,d=u-a,f=u+a):(g=l+h,p=g+a,d=u+a,f=u-a),m=g),{x1:d,x2:u,x3:f,y1:g,y2:p,y3:m}}drawTitle(t,e,i){const n=this,o=n.title,s=o.length;let a,r,l;if(s){const c=bn(i.rtl,n.x,n.width);for(t.x=Ps(n,i.titleAlign,i),e.textAlign=c.textAlign(i.titleAlign),e.textBaseline="middle",a=Fe(i.titleFont),r=i.titleSpacing,e.fillStyle=i.titleColor,e.font=a.string,l=0;l<s;++l)e.fillText(o[l],c.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r,l+1===s&&(t.y+=i.titleMarginBottom-r)}}_drawColorBox(t,e,i,n,o){const s=this,a=s.labelColors[i],r=s.labelPointStyles[i],{boxHeight:l,boxWidth:c}=o,h=Fe(o.bodyFont),d=Ps(s,"left",o),u=n.x(d),f=l<h.lineHeight?(h.lineHeight-l)/2:0,g=e.y+f;if(o.usePointStyle){const e={radius:Math.min(c,l)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},i=n.leftForLtr(u,c)+c/2,s=g+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Kt(t,e,i,s),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,Kt(t,e,i,s)}else{t.lineWidth=a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const e=n.leftForLtr(u,c),i=n.leftForLtr(n.xPlus(u,1),c-2),s=Ie(a.borderRadius);Object.values(s).some((t=>0!==t))?(t.beginPath(),t.fillStyle=o.multiKeyBackground,ie(t,{x:e,y:g,w:c,h:l,radius:s}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),ie(t,{x:i,y:g+1,w:c-2,h:l-2,radius:s}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(e,g,c,l),t.strokeRect(e,g,c,l),t.fillStyle=a.backgroundColor,t.fillRect(i,g+1,c-2,l-2))}t.fillStyle=s.labelTextColors[i]}drawBody(t,e,i){const n=this,{body:o}=n,{bodySpacing:s,bodyAlign:a,displayColors:r,boxHeight:l,boxWidth:c}=i,h=Fe(i.bodyFont);let d=h.lineHeight,u=0;const f=bn(i.rtl,n.x,n.width),g=function(i){e.fillText(i,f.x(t.x+u),t.y+d/2),t.y+=d+s},p=f.textAlign(a);let m,x,b,_,y,v,w;for(e.textAlign=a,e.textBaseline="middle",e.font=h.string,t.x=Ps(n,p,i),e.fillStyle=i.bodyColor,J(n.beforeBody,g),u=r&&"right"!==p?"center"===a?c/2+1:c+2:0,_=0,v=o.length;_<v;++_){for(m=o[_],x=n.labelTextColors[_],e.fillStyle=x,J(m.before,g),b=m.lines,r&&b.length&&(n._drawColorBox(e,t,_,f,i),d=Math.max(h.lineHeight,l)),y=0,w=b.length;y<w;++y)g(b[y]),d=h.lineHeight;J(m.after,g)}u=0,d=h.lineHeight,J(n.afterBody,g),t.y-=s}drawFooter(t,e,i){const n=this,o=n.footer,s=o.length;let a,r;if(s){const l=bn(i.rtl,n.x,n.width);for(t.x=Ps(n,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=l.textAlign(i.footerAlign),e.textBaseline="middle",a=Fe(i.footerFont),e.fillStyle=i.footerColor,e.font=a.string,r=0;r<s;++r)e.fillText(o[r],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+i.footerSpacing}}drawBackground(t,e,i,n){const{xAlign:o,yAlign:s}=this,{x:a,y:r}=t,{width:l,height:c}=i,h=n.cornerRadius;e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(a+h,r),"top"===s&&this.drawCaret(t,e,i,n),e.lineTo(a+l-h,r),e.quadraticCurveTo(a+l,r,a+l,r+h),"center"===s&&"right"===o&&this.drawCaret(t,e,i,n),e.lineTo(a+l,r+c-h),e.quadraticCurveTo(a+l,r+c,a+l-h,r+c),"bottom"===s&&this.drawCaret(t,e,i,n),e.lineTo(a+h,r+c),e.quadraticCurveTo(a,r+c,a,r+c-h),"center"===s&&"left"===o&&this.drawCaret(t,e,i,n),e.lineTo(a,r+h),e.quadraticCurveTo(a,r,a+h,r),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this,i=e._chart,n=e.$animations,o=n&&n.x,s=n&&n.y;if(o||s){const n=bs[t.position].call(e,e._active,e._eventPosition);if(!n)return;const a=e._size=ws(e,t),r=Object.assign({},n,e._size),l=ks(i,t,r),c=Ss(t,r,l,i);o._to===c.x&&s._to===c.y||(e.xAlign=l.xAlign,e.yAlign=l.yAlign,e.width=a.width,e.height=a.height,e.caretX=n.x,e.caretY=n.y,e._resolveAnimations().update(e,c))}}draw(t){const e=this,i=e.options.setContext(e.getContext());let n=e.opacity;if(!n)return;e._updateAnimationTarget(i);const o={width:e.width,height:e.height},s={x:e.x,y:e.y};n=Math.abs(n)<.001?0:n;const a=ze(i.padding),r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;i.enabled&&r&&(t.save(),t.globalAlpha=n,e.drawBackground(s,t,o,i),_n(t,i.textDirection),s.y+=a.top,e.drawTitle(s,t,i),e.drawBody(s,t,i),e.drawFooter(s,t,i),yn(t,i.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this,n=i._active,o=t.map((({datasetIndex:t,index:e})=>{const n=i._chart.getDatasetMeta(t);if(!n)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:n.data[e],index:e}})),s=!tt(n,o),a=i._positionChanged(o,e);(s||a)&&(i._active=o,i._eventPosition=e,i.update(!0))}handleEvent(t,e){const i=this,n=i.options,o=i._active||[];let s=!1,a=[];"mouseout"!==t.type&&(a=i._chart.getElementsAtEventForMode(t,n.mode,n,e),n.reverse&&a.reverse());const r=i._positionChanged(a,t);return s=e||!tt(a,o)||r,s&&(i._active=a,(n.enabled||n.external)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0,e))),s}_positionChanged(t,e){const{caretX:i,caretY:n,options:o}=this,s=bs[o.position].call(this,t,e);return!1!==s&&(i!==s.x||n!==s.y)}}Os.positioners=bs;var Ts={id:"tooltip",_element:Os,positioners:bs,afterInit(t,e,i){i&&(t.tooltip=new Os({_chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip,i={tooltip:e};!1!==t.notifyPlugins("beforeTooltipDraw",i)&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i))},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:N,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,n=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return i[e.dataIndex]}return""},afterTitle:N,beforeBody:N,beforeLabel:N,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return $(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:N,afterBody:N,beforeFooter:N,footer:N,afterFooter:N}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},As=Object.freeze({__proto__:null,Decimation:Ko,Filler:us,Legend:ps,Title:xs,Tooltip:Ts});function Ls(t,e,i){const n=t.indexOf(e);if(-1===n)return((t,e,i)=>"string"==typeof e?t.push(e)-1:isNaN(e)?null:i)(t,e,i);return n!==t.lastIndexOf(e)?i:n}class Rs extends Xi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0}parse(t,e){if($(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:Nt(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:Ls(i,t,K(e,t)),i.length-1)}determineDataLimits(){const t=this,{minDefined:e,maxDefined:i}=t.getUserBounds();let{min:n,max:o}=t.getMinMax(!0);"ticks"===t.options.bounds&&(e||(n=0),i||(o=t.getLabels().length-1)),t.min=n,t.max=o}buildTicks(){const t=this,e=t.min,i=t.max,n=t.options.offset,o=[];let s=t.getLabels();s=0===e&&i===s.length-1?s:s.slice(e,i+1),t._valueRange=Math.max(s.length-(n?0:1),1),t._startValue=t.min-(n?.5:0);for(let t=e;t<=i;t++)o.push({value:t});return o}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){const t=this;super.configure(),t.isHorizontal()||(t._reversePixels=!t._reversePixels)}getPixelForValue(t){const e=this;return"number"!=typeof t&&(t=e.parse(t)),null===t?NaN:e.getPixelForDecimal((t-e._startValue)/e._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){const e=this;return Math.round(e._startValue+e.getDecimalForPixel(t)*e._valueRange)}getBasePixel(){return this.bottom}}function Es(t,e,{horizontal:i,minRotation:n}){const o=Et(n),s=(i?Math.sin(o):Math.cos(o))||.001,a=.75*e*(""+t).length;return Math.min(e/s,a)}Rs.id="category",Rs.defaults={ticks:{callback:Rs.prototype.getLabelForValue}};class Is extends Xi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return $(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const t=this,{beginAtZero:e}=t.options,{minDefined:i,maxDefined:n}=t.getUserBounds();let{min:o,max:s}=t;const a=t=>o=i?o:t,r=t=>s=n?s:t;if(e){const t=Dt(o),e=Dt(s);t<0&&e<0?r(0):t>0&&e>0&&a(0)}o===s&&(r(s+1),e||a(o-1)),t.min=o,t.max=s}getTickLimit(){const t=this,e=t.options.ticks;let i,{maxTicksLimit:n,stepSize:o}=e;return o?i=Math.ceil(t.max/o)-Math.floor(t.min/o)+1:(i=t.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this,e=t.options,i=e.ticks;let n=t.getTickLimit();n=Math.max(2,n);const o=function(t,e){const i=[],{bounds:n,step:o,min:s,max:a,precision:r,count:l,maxTicks:c,maxDigits:h,includeBounds:d}=t,u=o||1,f=c-1,{min:g,max:p}=e,m=!$(s),x=!$(a),b=!$(l),_=(p-g)/(h+1);let y,v,w,M,k=Ct((p-g)/f/u)*u;if(k<1e-14&&!m&&!x)return[{value:g},{value:p}];M=Math.ceil(p/k)-Math.floor(g/k),M>f&&(k=Ct(M*k/f/u)*u),$(r)||(y=Math.pow(10,r),k=Math.ceil(k*y)/y),"ticks"===n?(v=Math.floor(g/k)*k,w=Math.ceil(p/k)*k):(v=g,w=p),m&&x&&o&&Lt((a-s)/o,k/1e3)?(M=Math.min((a-s)/k,c),k=(a-s)/M,v=s,w=a):b?(v=m?s:v,w=x?a:w,M=l-1,k=(w-v)/M):(M=(w-v)/k,M=At(M,Math.round(M),k/1e3)?Math.round(M):Math.ceil(M));const S=Math.max(zt(k),zt(v));y=Math.pow(10,$(r)?S:r),v=Math.round(v*y)/y,w=Math.round(w*y)/y;let P=0;for(m&&(d&&v!==s?(i.push({value:s}),v<s&&P++,At(Math.round((v+P*k)*y)/y,s,Es(s,_,t))&&P++):v<s&&P++);P<M;++P)i.push({value:Math.round((v+P*k)*y)/y});return x&&d&&w!==a?At(i[i.length-1].value,a,Es(a,_,t))?i[i.length-1].value=a:i.push({value:a}):x&&w!==a||i.push({value:w}),i}({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:i.precision,step:i.stepSize,count:i.count,maxDigits:t._maxDigits(),horizontal:t.isHorizontal(),minRotation:i.minRotation||0,includeBounds:!1!==i.includeBounds},t._range||t);return"ticks"===e.bounds&&Rt(o,t,"value"),e.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),o}configure(){const t=this,e=t.ticks;let i=t.min,n=t.max;if(super.configure(),t.options.offset&&e.length){const t=(n-i)/Math.max(e.length-1,1)/2;i-=t,n+=t}t._startValue=i,t._endValue=n,t._valueRange=n-i}getLabelForValue(t){return zi(t,this.chart.options.locale)}}class zs extends Is{determineDataLimits(){const t=this,{min:e,max:i}=t.getMinMax(!0);t.min=X(e)?e:0,t.max=X(i)?i:1,t.handleTickRangeOptions()}computeTickLimit(){const t=this,e=t.isHorizontal(),i=e?t.width:t.height,n=Et(t.options.ticks.minRotation),o=(e?Math.sin(n):Math.cos(n))||.001,s=t._resolveTickFontOptions(0);return Math.ceil(i/Math.min(40,s.lineHeight/o))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function Fs(t){return 1===t/Math.pow(10,Math.floor(Pt(t)))}zs.id="linear",zs.defaults={ticks:{callback:Vi.formatters.numeric}};class Vs extends Xi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Is.prototype.parse.apply(this,[t,e]);if(0!==i)return X(i)&&i>0?i:null;this._zero=!0}determineDataLimits(){const t=this,{min:e,max:i}=t.getMinMax(!0);t.min=X(e)?Math.max(0,e):null,t.max=X(i)?Math.max(0,i):null,t.options.beginAtZero&&(t._zero=!0),t.handleTickRangeOptions()}handleTickRangeOptions(){const t=this,{minDefined:e,maxDefined:i}=t.getUserBounds();let n=t.min,o=t.max;const s=t=>n=e?n:t,a=t=>o=i?o:t,r=(t,e)=>Math.pow(10,Math.floor(Pt(t))+e);n===o&&(n<=0?(s(1),a(10)):(s(r(n,-1)),a(r(o,1)))),n<=0&&s(r(o,-1)),o<=0&&a(r(n,1)),t._zero&&t.min!==t._suggestedMin&&n===r(t.min,0)&&s(r(n,-1)),t.min=n,t.max=o}buildTicks(){const t=this,e=t.options,i=function(t,e){const i=Math.floor(Pt(e.max)),n=Math.ceil(e.max/Math.pow(10,i)),o=[];let s=q(t.min,Math.pow(10,Math.floor(Pt(e.min)))),a=Math.floor(Pt(s)),r=Math.floor(s/Math.pow(10,a)),l=a<0?Math.pow(10,Math.abs(a)):1;do{o.push({value:s,major:Fs(s)}),++r,10===r&&(r=1,++a,l=a>=0?1:l),s=Math.round(r*Math.pow(10,a)*l)/l}while(a<i||a===i&&r<n);const c=q(t.max,s);return o.push({value:c,major:Fs(s)}),o}({min:t._userMin,max:t._userMax},t);return"ticks"===e.bounds&&Rt(i,t,"value"),e.reverse?(i.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i}getLabelForValue(t){return void 0===t?"0":zi(t,this.chart.options.locale)}configure(){const t=this,e=t.min;super.configure(),t._startValue=Pt(e),t._valueRange=Pt(t.max)-Pt(e)}getPixelForValue(t){const e=this;return void 0!==t&&0!==t||(t=e.min),null===t||isNaN(t)?NaN:e.getPixelForDecimal(t===e.min?0:(Pt(t)-e._startValue)/e._valueRange)}getValueForPixel(t){const e=this,i=e.getDecimalForPixel(t);return Math.pow(10,e._startValue+i*e._valueRange)}}function Bs(t){const e=t.ticks;if(e.display&&t.display){const t=ze(e.backdropPadding);return K(e.font&&e.font.size,xt.font.size)+t.height}return 0}function Ws(t,e,i,n,o){return t===n||t===o?{start:e-i/2,end:e+i/2}:t<n||t>o?{start:e-i,end:e}:{start:e,end:e+i}}function Hs(t){return 0===t||180===t?"center":t<180?"left":"right"}function Ns(t,e,i){90===t||270===t?i.y-=e.h/2:(t>270||t<90)&&(i.y-=e.h)}function js(t,e,i,n){const{ctx:o}=t;if(i)o.arc(t.xCenter,t.yCenter,e,0,_t);else{let i=t.getPointPosition(0,e);o.moveTo(i.x,i.y);for(let s=1;s<n;s++)i=t.getPointPosition(s,e),o.lineTo(i.x,i.y)}}function $s(t){return Tt(t)?t:0}Vs.id="logarithmic",Vs.defaults={ticks:{callback:Vi.formatters.logarithmic,major:{enabled:!0}}};class Ys extends Is{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=Bs(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2}determineDataLimits(){const t=this,{min:e,max:i}=t.getMinMax(!1);t.min=X(e)&&!isNaN(e)?e:0,t.max=X(i)&&!isNaN(i)?i:0,t.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Bs(this.options))}generateTickLabels(t){const e=this;Is.prototype.generateTickLabels.call(e,t),e._pointLabels=e.getLabels().map(((t,i)=>{const n=Q(e.options.pointLabels.callback,[t,i],e);return n||0===n?n:""}))}fit(){const t=this,e=t.options;e.display&&e.pointLabels.display?function(t){const e={l:0,r:t.width,t:0,b:t.height-t.paddingTop},i={};let n,o,s;const a=[],r=[],l=t.getLabels().length;for(n=0;n<l;n++){const l=t.options.pointLabels.setContext(t.getContext(n));r[n]=l.padding,s=t.getPointPosition(n,t.drawingArea+r[n]);const u=Fe(l.font);t.ctx.font=u.string,c=t.ctx,h=u.lineHeight,o=Y(d=t._pointLabels[n])?{w:Ut(c,c.font,d),h:d.length*h}:{w:c.measureText(d).width,h:h},a[n]=o;const f=t.getIndexAngle(n),g=It(f),p=Ws(g,s.x,o.w,0,180),m=Ws(g,s.y,o.h,90,270);p.start<e.l&&(e.l=p.start,i.l=f),p.end>e.r&&(e.r=p.end,i.r=f),m.start<e.t&&(e.t=m.start,i.t=f),m.end>e.b&&(e.b=m.end,i.b=f)}var c,h,d;t._setReductions(t.drawingArea,e,i),t._pointLabelItems=[];const u=t.options,f=Bs(u),g=t.getDistanceFromCenterForValue(u.ticks.reverse?t.min:t.max);for(n=0;n<l;n++){const e=0===n?f/2:0,i=t.getPointPosition(n,g+e+r[n]),o=It(t.getIndexAngle(n)),s=a[n];Ns(o,s,i);const l=Hs(o);let c;c="left"===l?i.x:"center"===l?i.x-s.w/2:i.x-s.w;const h=c+s.w;t._pointLabelItems[n]={x:i.x,y:i.y,textAlign:l,left:c,top:i.y,right:h,bottom:i.y+s.h}}}(t):t.setCenterPoint(0,0,0,0)}_setReductions(t,e,i){const n=this;let o=e.l/Math.sin(i.l),s=Math.max(e.r-n.width,0)/Math.sin(i.r),a=-e.t/Math.cos(i.t),r=-Math.max(e.b-(n.height-n.paddingTop),0)/Math.cos(i.b);o=$s(o),s=$s(s),a=$s(a),r=$s(r),n.drawingArea=Math.max(t/2,Math.min(Math.floor(t-(o+s)/2),Math.floor(t-(a+r)/2))),n.setCenterPoint(o,s,a,r)}setCenterPoint(t,e,i,n){const o=this,s=o.width-e-o.drawingArea,a=t+o.drawingArea,r=i+o.drawingArea,l=o.height-o.paddingTop-n-o.drawingArea;o.xCenter=Math.floor((a+s)/2+o.left),o.yCenter=Math.floor((r+l)/2+o.top+o.paddingTop)}getIndexAngle(t){return Wt(t*(_t/this.getLabels().length)+Et(this.options.startAngle||0))}getDistanceFromCenterForValue(t){const e=this;if($(t))return NaN;const i=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*i:(t-e.min)*i}getValueForDistanceFromCenter(t){if($(t))return NaN;const e=this,i=t/(e.drawingArea/(e.max-e.min));return e.options.reverse?e.max-i:e.min+i}getPointPosition(t,e){const i=this,n=i.getIndexAngle(t)-Mt;return{x:Math.cos(n)*e+i.xCenter,y:Math.sin(n)*e+i.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:n,bottom:o}=this._pointLabelItems[t];return{left:e,top:i,right:n,bottom:o}}drawBackground(){const t=this,{backgroundColor:e,grid:{circular:i}}=t.options;if(e){const n=t.ctx;n.save(),n.beginPath(),js(t,t.getDistanceFromCenterForValue(t._endValue),i,t.getLabels().length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){const t=this,e=t.ctx,i=t.options,{angleLines:n,grid:o}=i,s=t.getLabels().length;let a,r,l;if(i.pointLabels.display&&function(t,e){const{ctx:i,options:{pointLabels:n}}=t;for(let o=e-1;o>=0;o--){const e=n.setContext(t.getContext(o)),s=Fe(e.font),{x:a,y:r,textAlign:l,left:c,top:h,right:d,bottom:u}=t._pointLabelItems[o],{backdropColor:f}=e;if(!$(f)){const t=ze(e.backdropPadding);i.fillStyle=f,i.fillRect(c-t.left,h-t.top,d-c+t.width,u-h+t.height)}ee(i,t._pointLabels[o],a,r+s.lineHeight/2,s,{color:e.color,textAlign:l,textBaseline:"middle"})}}(t,s),o.display&&t.ticks.forEach(((e,i)=>{if(0!==i){r=t.getDistanceFromCenterForValue(e.value);const n=o.setContext(t.getContext(i-1));!function(t,e,i,n){const o=t.ctx,s=e.circular,{color:a,lineWidth:r}=e;!s&&!n||!a||!r||i<0||(o.save(),o.strokeStyle=a,o.lineWidth=r,o.setLineDash(e.borderDash),o.lineDashOffset=e.borderDashOffset,o.beginPath(),js(t,i,s,n),o.closePath(),o.stroke(),o.restore())}(t,n,r,s)}})),n.display){for(e.save(),a=t.getLabels().length-1;a>=0;a--){const o=n.setContext(t.getContext(a)),{color:s,lineWidth:c}=o;c&&s&&(e.lineWidth=c,e.strokeStyle=s,e.setLineDash(o.borderDash),e.lineDashOffset=o.borderDashOffset,r=t.getDistanceFromCenterForValue(i.ticks.reverse?t.min:t.max),l=t.getPointPosition(a,r),e.beginPath(),e.moveTo(t.xCenter,t.yCenter),e.lineTo(l.x,l.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const t=this,e=t.ctx,i=t.options,n=i.ticks;if(!n.display)return;const o=t.getIndexAngle(0);let s,a;e.save(),e.translate(t.xCenter,t.yCenter),e.rotate(o),e.textAlign="center",e.textBaseline="middle",t.ticks.forEach(((o,r)=>{if(0===r&&!i.reverse)return;const l=n.setContext(t.getContext(r)),c=Fe(l.font);if(s=t.getDistanceFromCenterForValue(t.ticks[r].value),l.showLabelBackdrop){a=e.measureText(o.label).width,e.fillStyle=l.backdropColor;const t=ze(l.backdropPadding);e.fillRect(-a/2-t.left,-s-c.size/2-t.top,a+t.width,c.size+t.height)}ee(e,o.label,0,-s,c,{color:l.color})})),e.restore()}drawTitle(){}}Ys.id="radialLinear",Ys.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Vi.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5}},Ys.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},Ys.descriptors={angleLines:{_fallback:"grid"}};const Us={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Xs=Object.keys(Us);function qs(t,e){return t-e}function Ks(t,e){if($(e))return null;const i=t._adapter,{parser:n,round:o,isoWeekday:s}=t._parseOpts;let a=e;return"function"==typeof n&&(a=n(a)),X(a)||(a="string"==typeof n?i.parse(a,n):i.parse(a)),null===a?null:(o&&(a="week"!==o||!Tt(s)&&!0!==s?i.startOf(a,o):i.startOf(a,"isoWeek",s)),+a)}function Gs(t,e,i,n){const o=Xs.length;for(let s=Xs.indexOf(t);s<o-1;++s){const t=Us[Xs[s]],o=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(o*t.size))<=n)return Xs[s]}return Xs[o-1]}function Zs(t,e,i){if(i){if(i.length){const{lo:n,hi:o}=ne(i,e);t[i[n]>=e?i[n]:i[o]]=!0}}else t[e]=!0}function Qs(t,e,i){const n=[],o={},s=e.length;let a,r;for(a=0;a<s;++a)r=e[a],o[r]=a,n.push({value:r,major:!1});return 0!==s&&i?function(t,e,i,n){const o=t._adapter,s=+o.startOf(e[0].value,n),a=e[e.length-1].value;let r,l;for(r=s;r<=a;r=+o.add(r,1,n))l=i[r],l>=0&&(e[l].major=!0);return e}(t,n,o,i):n}class Js extends Xi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const i=t.time||(t.time={}),n=this._adapter=new so._date(t.adapters.date);st(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Ks(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this,e=t.options,i=t._adapter,n=e.time.unit||"day";let{min:o,max:s,minDefined:a,maxDefined:r}=t.getUserBounds();function l(t){a||isNaN(t.min)||(o=Math.min(o,t.min)),r||isNaN(t.max)||(s=Math.max(s,t.max))}a&&r||(l(t._getLabelBounds()),"ticks"===e.bounds&&"labels"===e.ticks.source||l(t.getMinMax(!1))),o=X(o)&&!isNaN(o)?o:+i.startOf(Date.now(),n),s=X(s)&&!isNaN(s)?s:+i.endOf(Date.now(),n)+1,t.min=Math.min(o,s-1),t.max=Math.max(o+1,s)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this,e=t.options,i=e.time,n=e.ticks,o="labels"===n.source?t.getLabelTimestamps():t._generate();"ticks"===e.bounds&&o.length&&(t.min=t._userMin||o[0],t.max=t._userMax||o[o.length-1]);const s=t.min,a=ae(o,s,t.max);return t._unit=i.unit||(n.autoSkip?Gs(i.minUnit,t.min,t.max,t._getLabelCapacity(s)):function(t,e,i,n,o){for(let s=Xs.length-1;s>=Xs.indexOf(i);s--){const i=Xs[s];if(Us[i].common&&t._adapter.diff(o,n,i)>=e-1)return i}return Xs[i?Xs.indexOf(i):0]}(t,a.length,i.minUnit,t.min,t.max)),t._majorUnit=n.major.enabled&&"year"!==t._unit?function(t){for(let e=Xs.indexOf(t)+1,i=Xs.length;e<i;++e)if(Us[Xs[e]].common)return Xs[e]}(t._unit):void 0,t.initOffsets(o),e.reverse&&a.reverse(),Qs(t,a,t._majorUnit)}initOffsets(t){const e=this;let i,n,o=0,s=0;e.options.offset&&t.length&&(i=e.getDecimalForValue(t[0]),o=1===t.length?1-i:(e.getDecimalForValue(t[1])-i)/2,n=e.getDecimalForValue(t[t.length-1]),s=1===t.length?n:(n-e.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;o=Nt(o,0,a),s=Nt(s,0,a),e._offsets={start:o,end:s,factor:1/(o+1+s)}}_generate(){const t=this,e=t._adapter,i=t.min,n=t.max,o=t.options,s=o.time,a=s.unit||Gs(s.minUnit,i,n,t._getLabelCapacity(i)),r=K(s.stepSize,1),l="week"===a&&s.isoWeekday,c=Tt(l)||!0===l,h={};let d,u,f=i;if(c&&(f=+e.startOf(f,"isoWeek",l)),f=+e.startOf(f,c?"day":a),e.diff(n,i,a)>1e5*r)throw new Error(i+" and "+n+" are too far apart with stepSize of "+r+" "+a);const g="data"===o.ticks.source&&t.getDataTimestamps();for(d=f,u=0;d<n;d=+e.add(d,r,a),u++)Zs(h,d,g);return d!==n&&"ticks"!==o.bounds&&1!==u||Zs(h,d,g),Object.keys(h).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,n){const o=this,s=o.options,a=s.time.displayFormats,r=o._unit,l=o._majorUnit,c=r&&a[r],h=l&&a[l],d=i[e],u=l&&h&&d&&d.major,f=o._adapter.format(t,n||(u?h:c)),g=s.ticks.callback;return g?Q(g,[f,e,i],o):f}generateTickLabels(t){let e,i,n;for(e=0,i=t.length;e<i;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){const e=this;return null===t?NaN:(t-e.min)/(e.max-e.min)}getPixelForValue(t){const e=this,i=e._offsets,n=e.getDecimalForValue(t);return e.getPixelForDecimal((i.start+n)*i.factor)}getValueForPixel(t){const e=this,i=e._offsets,n=e.getDecimalForPixel(t)/i.factor-i.end;return e.min+n*(e.max-e.min)}_getLabelSize(t){const e=this,i=e.options.ticks,n=e.ctx.measureText(t).width,o=Et(e.isHorizontal()?i.maxRotation:i.minRotation),s=Math.cos(o),a=Math.sin(o),r=e._resolveTickFontOptions(0).size;return{w:n*s+r*a,h:n*a+r*s}}_getLabelCapacity(t){const e=this,i=e.options.time,n=i.displayFormats,o=n[i.unit]||n.millisecond,s=e._tickFormatFunction(t,0,Qs(e,[t],e._majorUnit),o),a=e._getLabelSize(s),r=Math.floor(e.isHorizontal()?e.width/a.w:e.height/a.h)-1;return r>0?r:1}getDataTimestamps(){const t=this;let e,i,n=t._cache.data||[];if(n.length)return n;const o=t.getMatchingVisibleMetas();if(t._normalized&&o.length)return t._cache.data=o[0].controller.getAllParsedValues(t);for(e=0,i=o.length;e<i;++e)n=n.concat(o[e].controller.getAllParsedValues(t));return t._cache.data=t.normalize(n)}getLabelTimestamps(){const t=this,e=t._cache.labels||[];let i,n;if(e.length)return e;const o=t.getLabels();for(i=0,n=o.length;i<n;++i)e.push(Ks(t,o[i]));return t._cache.labels=t._normalized?e:t.normalize(e)}normalize(t){return he(t.sort(qs))}}function ta(t,e,i){let n,o,s,a;if(i)n=Math.floor(e),o=Math.ceil(e),s=t[n],a=t[o];else{const i=ne(t,e);s=i.lo,a=i.hi,n=t[s],o=t[a]}const r=o-n;return r?s+(a-s)*(e-n)/r:s}Js.id="time",Js.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class ea extends Js{constructor(t){super(t),this._table=[],this._maxIndex=void 0}initOffsets(){const t=this,e=t._getTimestampsForTable();t._table=t.buildLookupTable(e),t._maxIndex=t._table.length-1,super.initOffsets(e)}buildLookupTable(t){const{min:e,max:i}=this;if(!t.length)return[{time:e,pos:0},{time:i,pos:1}];const n=[e];let o,s,a;for(o=0,s=t.length;o<s;++o)a=t[o],a>e&&a<i&&n.push(a);return n.push(i),n}_getTimestampsForTable(){const t=this;let e=t._cache.all||[];if(e.length)return e;const i=t.getDataTimestamps(),n=t.getLabelTimestamps();return e=i.length&&n.length?t.normalize(i.concat(n)):i.length?i:n,e=t._cache.all=e,e}getPixelForValue(t,e){const i=this,n=i._offsets,o=i._normalized&&i._maxIndex>0&&!$(e)?e/i._maxIndex:i.getDecimalForValue(t);return i.getPixelForDecimal((n.start+o)*n.factor)}getDecimalForValue(t){return ta(this._table,t)/this._maxIndex}getValueForPixel(t){const e=this,i=e._offsets,n=e.getDecimalForPixel(t)/i.factor-i.end;return ta(e._table,n*this._maxIndex,!0)}}ea.id="timeseries",ea.defaults=Js.defaults;var ia=Object.freeze({__proto__:null,CategoryScale:Rs,LinearScale:zs,LogarithmicScale:Vs,RadialLinearScale:Ys,TimeScale:Js,TimeSeriesScale:ea});return to.register(_o,ia,Uo,As),to.helpers={...On},to._adapters=so,to.Animation=_i,to.Animations=vi,to.animator=a,to.controllers=An.controllers.items,to.DatasetController=Ri,to.Element=Ei,to.elements=Uo,to.Interaction=Oe,to.layouts=Ge,to.platforms=ui,to.Scale=Xi,to.Ticks=Vi,Object.assign(to,_o,ia,Uo,As,ui),to.Chart=to,"undefined"!=typeof window&&(window.Chart=to),to}));

/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(45);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(46);

	var _handlebarsCompilerCompiler = __webpack_require__(51);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(52);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(49);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(44);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;
	  hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(37);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(38);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(44);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(30);

	var _logger = __webpack_require__(32);

	var _logger2 = _interopRequireDefault(_logger);

	var _internalProtoAccess = __webpack_require__(33);

	var VERSION = '4.7.7';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 8;
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var LAST_COMPATIBLE_COMPILER_REVISION = 7;

	exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0 <4.3.0',
	  8: '>= 4.3.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  },
	  /**
	   * Reset the memory of illegal property accesses that have already been logged.
	   * @deprecated should only be used in handlebars test-cases
	   */
	  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
	    _internalProtoAccess.resetLoggedProperties();
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;
	var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      endLineNumber = undefined,
	      column = undefined,
	      endColumn = undefined;

	  if (loc) {
	    line = loc.start.line;
	    endLineNumber = loc.end.line;
	    column = loc.start.column;
	    endColumn = loc.end.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;
	      this.endLineNumber = endLineNumber;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	        Object.defineProperty(this, 'endColumn', {
	          value: endColumn,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	        this.endColumn = endColumn;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	exports.moveHelperToHooks = moveHelperToHooks;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(25);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(26);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(27);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(28);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(29);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

	function moveHelperToHooks(instance, helperName, keepHelper) {
	  if (instance.helpers[helperName]) {
	    instance.hooks[helperName] = instance.helpers[helperName];
	    if (!keepHelper) {
	      delete instance.helpers[helperName];
	    }
	  }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _Object$keys = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else if (global.Symbol && context[global.Symbol.iterator]) {
	        var newContext = [];
	        var iterator = context[global.Symbol.iterator]();
	        for (var it = iterator.next(); !it.done; it = iterator.next()) {
	          newContext.push(it.value);
	        }
	        context = newContext;
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        (function () {
	          var priorKey = undefined;

	          _Object$keys(context).forEach(function (key) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          });
	          if (priorKey !== undefined) {
	            execIteration(priorKey, i - 1, true);
	          }
	        })();
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	module.exports = __webpack_require__(21).Object.keys;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(16);

	__webpack_require__(18)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(17);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(19)
	  , core    = __webpack_require__(21)
	  , fails   = __webpack_require__(24);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(21)
	  , ctx       = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#if requires exactly one argument');
	    }
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#unless requires exactly one argument');
	    }
	    return instance.helpers['if'].call(this, conditional, {
	      fn: options.inverse,
	      inverse: options.fn,
	      hash: options.hash
	    });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field, options) {
	    if (!obj) {
	      // Note for 5.0: Change to "obj == null" in 5.0
	      return obj;
	    }
	    return options.lookupProperty(obj, field);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#with requires exactly one argument');
	    }
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(31);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      // eslint-disable-next-line no-console
	      if (!console[method]) {
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$create = __webpack_require__(34)['default'];

	var _Object$keys = __webpack_require__(13)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.createProtoAccessControl = createProtoAccessControl;
	exports.resultIsAllowed = resultIsAllowed;
	exports.resetLoggedProperties = resetLoggedProperties;

	var _createNewLookupObject = __webpack_require__(36);

	var _logger = __webpack_require__(32);

	var logger = _interopRequireWildcard(_logger);

	var loggedProperties = _Object$create(null);

	function createProtoAccessControl(runtimeOptions) {
	  var defaultMethodWhiteList = _Object$create(null);
	  defaultMethodWhiteList['constructor'] = false;
	  defaultMethodWhiteList['__defineGetter__'] = false;
	  defaultMethodWhiteList['__defineSetter__'] = false;
	  defaultMethodWhiteList['__lookupGetter__'] = false;

	  var defaultPropertyWhiteList = _Object$create(null);
	  // eslint-disable-next-line no-proto
	  defaultPropertyWhiteList['__proto__'] = false;

	  return {
	    properties: {
	      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
	      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
	    },
	    methods: {
	      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
	      defaultValue: runtimeOptions.allowProtoMethodsByDefault
	    }
	  };
	}

	function resultIsAllowed(result, protoAccessControl, propertyName) {
	  if (typeof result === 'function') {
	    return checkWhiteList(protoAccessControl.methods, propertyName);
	  } else {
	    return checkWhiteList(protoAccessControl.properties, propertyName);
	  }
	}

	function checkWhiteList(protoAccessControlForType, propertyName) {
	  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
	    return protoAccessControlForType.whitelist[propertyName] === true;
	  }
	  if (protoAccessControlForType.defaultValue !== undefined) {
	    return protoAccessControlForType.defaultValue;
	  }
	  logUnexpecedPropertyAccessOnce(propertyName);
	  return false;
	}

	function logUnexpecedPropertyAccessOnce(propertyName) {
	  if (loggedProperties[propertyName] !== true) {
	    loggedProperties[propertyName] = true;
	    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
	  }
	}

	function resetLoggedProperties() {
	  _Object$keys(loggedProperties).forEach(function (propertyName) {
	    delete loggedProperties[propertyName];
	  });
	}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$create = __webpack_require__(34)['default'];

	exports.__esModule = true;
	exports.createNewLookupObject = createNewLookupObject;

	var _utils = __webpack_require__(5);

	/**
	 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
	 * The resulting object can be used with "object[property]" to check if a property exists
	 * @param {...object} sources a varargs parameter of source objects that will be merged
	 * @returns {object}
	 */

	function createNewLookupObject() {
	  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
	    sources[_key] = arguments[_key];
	  }

	  return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(39)['default'];

	var _Object$keys = __webpack_require__(13)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	var _helpers = __webpack_require__(10);

	var _internalWrapHelper = __webpack_require__(43);

	var _internalProtoAccess = __webpack_require__(33);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
	    return;
	  }

	  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
	    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	  } else {
	    // Use the embedded version info since the runtime doesn't know about this revision yet
	    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as pseudo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
	  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }
	    partial = env.VM.resolvePartial.call(this, partial, context, options);

	    var extendedOptions = Utils.extend({}, options, {
	      hooks: this.hooks,
	      protoAccessControl: this.protoAccessControl
	    });

	    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, extendedOptions);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name, loc) {
	      if (!obj || !(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
	          loc: loc
	        });
	      }
	      return container.lookupProperty(obj, name);
	    },
	    lookupProperty: function lookupProperty(parent, propertyName) {
	      var result = parent[propertyName];
	      if (result == null) {
	        return result;
	      }
	      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
	        return result;
	      }

	      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
	        return result;
	      }
	      return undefined;
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        var result = depths[i] && container.lookupProperty(depths[i], name);
	        if (result != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    mergeIfNeeded: function mergeIfNeeded(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }

	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }

	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
	      wrapHelpersToPassLookupProperty(mergedHelpers, container);
	      container.helpers = mergedHelpers;

	      if (templateSpec.usePartial) {
	        // Use mergeIfNeeded here to prevent compiling global partials multiple times
	        container.partials = container.mergeIfNeeded(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = Utils.extend({}, env.decorators, options.decorators);
	      }

	      container.hooks = {};
	      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

	      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
	      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
	      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
	    } else {
	      container.protoAccessControl = options.protoAccessControl; // internal option
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	      container.hooks = options.hooks;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	/**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

	function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
	  _Object$keys(mergedHelpers).forEach(function (helperName) {
	    var helper = mergedHelpers[helperName];
	    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
	  });
	}

	function passLookupPropertyOption(helper, container) {
	  var lookupProperty = container.lookupProperty;
	  return _internalWrapHelper.wrapHelper(helper, function (options) {
	    return Utils.extend({ lookupProperty: lookupProperty }, options);
	  });
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	module.exports = __webpack_require__(21).Object.seal;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(42);

	__webpack_require__(18)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.wrapHelper = wrapHelper;

	function wrapHelper(helper, transformOptionsFn) {
	  if (typeof helper !== 'function') {
	    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
	    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
	    return helper;
	  }
	  var wrapper = function wrapper() /* dynamic arguments */{
	    var options = arguments[arguments.length - 1];
	    arguments[arguments.length - 1] = transformOptionsFn(options);
	    return helper.apply(this, arguments);
	  };
	  return wrapper;
	}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parseWithoutProcessing = parseWithoutProcessing;
	exports.parse = parse;

	var _parser = __webpack_require__(47);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(48);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(50);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parseWithoutProcessing(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var ast = _parser2['default'].parse(input);

	  return ast;
	}

	function parse(input, options) {
	  var ast = parseWithoutProcessing(input, options);
	  var strip = new _whitespaceControl2['default'](options);

	  return strip.accept(ast);
	}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        strip(5, 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(49);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substring(1, token.length - 1);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0;

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _Object$create = __webpack_require__(34)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(45);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    options.knownHelpers = _utils.extend(_Object$create(null), {
	      helperMissing: true,
	      blockHelperMissing: true,
	      each: true,
	      'if': true,
	      unless: true,
	      'with': true,
	      log: true,
	      lookup: true
	    }, options.knownHelpers);

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({
	      opcode: name,
	      args: slice.call(arguments, 1),
	      loc: this.sourceNode[0].loc
	    });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name = sexpr.path.parts[0],
	          options = this.options;
	      if (options.knownHelpers[_name]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$keys = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(53);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /*,  type */) {
	    return this.internalNameLookup(parent, name);
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, ', JSON.stringify(name), ')'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API
	  internalNameLookup: function internalNameLookup(parent, name) {
	    this.lookupPropertyFunctionIsUsed = true;
	    return ['lookupProperty(', parent, ',', JSON.stringify(name), ')'];
	  },

	  lookupPropertyFunctionIsUsed: false,

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend(['var decorators = container.decorators, ', this.lookupPropertyFunctionVarDeclaration(), ';\n']);
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    // istanbul ignore next

	    var _this = this;

	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    _Object$keys(this.aliases).forEach(function (alias) {
	      var node = _this.aliases[alias];
	      if (node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    });

	    if (this.lookupPropertyFunctionIsUsed) {
	      varDeclarations += ', ' + this.lookupPropertyFunctionVarDeclaration();
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
	    return '\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    '.trim();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this2 = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this2.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: {}, types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name);

	    var possibleFunctionCalls = [];

	    if (isSimple) {
	      // direct call to helper
	      possibleFunctionCalls.push(helper.name);
	    }
	    // call a function from the input object
	    possibleFunctionCalls.push(nonHelper);
	    if (!this.options.strict) {
	      possibleFunctionCalls.push(this.aliasable('container.hooks.helperMissing'));
	    }

	    var functionLookupCode = ['(', this.itemsSeparatedBy(possibleFunctionCalls, '||'), ')'];
	    var functionCall = this.source.functionCall(functionLookupCode, 'call', helper.callParams);
	    this.push(functionCall);
	  },

	  itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
	    var result = [];
	    result.push(items[0]);
	    for (var i = 1; i < items.length; i++) {
	      result.push(separator, items[i]);
	    }
	    return result;
	  },
	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('container.hooks.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options.loc = JSON.stringify(this.source.currentLocation);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	/**
	 * @deprecated May be removed in the next major version
	 */
	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ', ', JSON.stringify(compiler.source.currentLocation), ' )'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	var _Object$keys = __webpack_require__(13)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    // istanbul ignore next

	    var _this = this;

	    var pairs = [];

	    _Object$keys(obj).forEach(function (key) {
	      var value = castChunk(obj[key], _this);
	      if (value !== 'undefined') {
	        pairs.push([_this.quotedString(key), ':', value]);
	      }
	    });

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;