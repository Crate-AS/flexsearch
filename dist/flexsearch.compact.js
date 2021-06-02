/**!
 * FlexSearch.js v0.7.0-beta (Compact)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function(self){'use strict';var u;function v(a){return"undefined"!==typeof a?a:!0}function x(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=z();return b}function z(){return Object.create(null)}function aa(a,b){return b.length-a.length}function C(a){return"string"===typeof a}function D(a){return"object"===typeof a};const ba=/[\u0300-\u036f]/g;function E(a){a.normalize&&(a=a.normalize("NFD").replace(ba,""));return a}function F(a,b){const c=Object.keys(a),e=c.length,d=[];let f="",h=0;for(let g=0,l,m;g<e;g++)l=c[g],(m=a[l])?(d[h++]=H(b?"(?!\\b)"+l+"(\\b|_)":l),d[h++]=m):f+=(f?"|":"")+l;f&&(d[h++]=H(b?"(?!\\b)("+f+")(\\b|_)":"("+f+")"),d[h]="");return d}function I(a,b){for(let c=0,e=b.length;c<e&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a}function H(a){return new RegExp(a,"g")}
function J(a){let b="",c="";for(let e=0,d=a.length,f;e<d;e++)(f=a[e])!==c&&(b+=c=f);return b};const ca=/[\W_]+/;function K(a){return M(this,E(a).toLowerCase(),!1,ca)};const da={},N={};function ea(a){O(a,"add");O(a,"append");O(a,"search");O(a,"update");O(a,"remove")}function O(a,b){a[b+"Async"]=function(){const c=this,e=arguments;var d=e[e.length-1];let f;"function"===typeof d&&(f=d,delete e[e.length-1]);d=new Promise(function(h){setTimeout(function(){c.async=!0;const g=c[b].apply(c,e);c.async=!1;h(g)})});return f?(d.then(f),this):d}};function fa(a,b,c,e){const d=a.length;let f=[],h;let g,l;for(var m=0;m<d;m++){var p=a[m],t=p.length,r=0;for(let k=0,n;k<t;k++)(n=p[k])&&(r+=n.length);if(!q||r<q){var q=r;g=p;l=m}}g=1===g.length?g[0]:[].concat.apply([],g);e&&(e=[g],h=z());m=q=0;for(p=d-1;0<=p;p--)if(p!==l){m++;t=a[p];r=t.length;const k=[];let n=0;for(let w=0,y;w<g.length;w++){y=g[w];let A;for(let B=0;B<r;B++){const G=t[B];if(G.length&&(A=-1!==G.indexOf(y))){if(m===d-1){if(c)c--;else if(f[q++]=y,q===b)return f;e&&(h[y]=1)}break}}A&&
(k[n++]=y)}if(e)e[m]=k;else if(!n)return[];g=k}if(e)for(let k=e.length-1,n,w;0<=k;k--)if(w=(n=e[k])&&n.length)for(let y=0,A;y<w;y++)if(A=n[y],!h[A])if(h[A]=1,c)c--;else if(f[q++]=A,q===b)return f;return f}function ha(a,b){const c=z(),e=z(),d=[];for(let f=0;f<a.length;f++)c[a[f]]=1;for(let f=0,h;f<b.length;f++){h=b[f];for(let g=0,l;g<h.length;g++)l=h[g],c[l]&&!e[l]&&(e[l]=1,d[d.length]=l)}return d};const ja={memory:{charset:"latin:extra",C:3,m:3,B:!1,o:"memory"},performance:{threshold:8,m:3,context:{depth:1,D:!0}},match:{charset:"latin:extra",F:"full",C:3},score:{charset:"latin:advanced",threshold:1,context:{depth:3,D:!0}},"default":{C:3,threshold:0,depth:3}};N["latin:default"]=K;
function P(a,b){if(!(this instanceof P))return new P(a);var c;let e;a?(C(a)?a=ja[a]:(c=a.preset)&&(a=Object.assign({},c[c],a)),c=a.charset,e=a.lang,C(c)&&(-1===c.indexOf(":")&&(c+=":default"),c=N[c]),C(e)&&(e=da[e])):a={};let d,f,h=a.context||{};this.encode=a.encode||c&&c.encode||K;this.register=b||z();this.C=d=a.resolution||9;this.G=b=c&&c.F||a.tokenize||"strict";this.depth="strict"===b&&h.depth;this.D=v(h.bidirectional);this.o=f="memory"===a.optimize;this.B=v(a.fastupdate);this.m=a.minlength||1;
this.h=f?x(d):z();this.s=d=h.resolution||1;this.l=f?x(d):z();this.A=c&&c.A||a.rtl;this.H=(b=a.matcher||e&&e.H)&&F(b,!1);this.I=(b=a.stemmer||e&&e.I)&&F(b,!0);if(a=b=a.filter||e&&e.filter){a=b;c=z();for(let g=0,l=a.length;g<l;g++)c[a[g]]=1;a=c}this.filter=a}
function M(a,b,c,e){if(b&&(c&&(b=I(b,c)),a.H&&(b=I(b,a.H)),a.I&&1<b.length&&(b=I(b,a.I)),e||""===e)){b=b.split(e);if(a.filter){a=a.filter;c=b.length;e=[];for(let d=0,f=0;d<c;d++){const h=b[d];h&&!a[h]&&(e[f++]=h)}a=e}else a=b;return a}return b}u=P.prototype;u.append=function(a,b){return this.add(a,b,!0)};
u.add=function(a,b,c,e){if(!e&&!c&&this.register[a])return this.update(a,b);if(b&&(a||0===a)&&(b=this.encode(b),e=b.length)){const m=this.depth,p=this.C,t=z(),r=z();for(let q=0;q<e;q++){let k=b[this.A?e-1-q:q];var d=k.length;if(k&&d>=this.m&&(m||!t[k])){var f=Math.min(p/e*q|0,q),h="";switch(this.G){case "full":if(3<d){for(var g=0;g<d;g++){var l=g?Math.min(f/2+p/d*g/2|0,f+g):f;for(let n=d;n>g;n--)h=k.substring(g,n),h.length>=this.m&&Q(this,t,h,l,a,c)}break}case "reverse":if(2<d){for(g=d-1;0<g;g--)h=
k[g]+h,h.length>=this.m&&Q(this,t,h,f,a,c);h=""}case "forward":if(1<d)for(g=0;g<d;g++)h+=k[g],h.length>=this.m&&Q(this,t,h,f,a,c);break;default:if(Q(this,t,k,f,a,c),m&&1<e&&q<e-1)for(d=z(),f=k,h=Math.min(m+1,e-q),d[f]=1,g=1;g<h;g++)(k=b[this.A?e-1-q-g:q+g])&&k.length>=this.m&&!d[k]?(d[k]=1,l=this.D&&k>f,Q(this,r,l?f:k,0,a,c,l?k:f)):h=Math.min(h+1,e-q)}}}this.B||(this.register[a]=1)}return this};
function Q(a,b,c,e,d,f,h){let g=h?a.l:a.h;if(!b[c]||h&&!b[c][h])a.o&&(g=g[e]),h?(b=b[c]||(b[c]=z()),b[h]=1,g=g[h]||(g[h]=z())):b[c]=1,g=g[c]||(g[c]=[]),a.o||(g=g[e]||(g[e]=[])),f&&-1!==g.indexOf(d)||(g[g.length]=d,a.B&&(a=a.register[d]||(a.register[d]=[]),a[a.length]=g))}
u.search=function(a,b,c){D(a)?(c=a,a=c.query):D(b)&&(c=b);let e=[],d;let f,h=0;if(c){b=c.limit;h=c.offset||0;var g=c.context;f=c.suggest}if(a&&(a=this.encode(a),d=a.length,1<d)){c=z();var l=[];for(let p=0,t=0,r;p<d;p++)if((r=a[p])&&r.length>=this.m&&!c[r])if(this.o||f||this.h[r])l[t++]=r,c[r]=1;else return e;a=l;d=a.length}if(!d)return e;b||(b=100);g=this.depth&&1<d&&!1!==g;c=0;let m;g?(m=a[0],c=1):1<d&&a.sort(aa);for(let p,t;c<d;c++){t=a[c];g?(p=ka(this,e,f,b,h,2===d,t,m),f&&!1===p&&e.length||(m=
t)):p=ka(this,e,f,b,h,1===d,t);if(p)return p;if(f&&c===d-1){l=e.length;if(!l){if(g){g=0;c=-1;continue}return e}if(1===l)return la(e[0],b,h)}}return fa(e,b,h,f)};
function ka(a,b,c,e,d,f,h,g){let l=[],m=g?a.l:a.h;a.o||(m=ma(m,h,g,a.D));if(m){let p=0;const t=Math.min(m.length,g?a.s:a.C);for(let r=0,q=0,k,n;r<t;r++)if(k=m[r])if(a.o&&(k=ma(k,h,g,a.D)),d&&k&&f&&(n=k.length,n<=d?(d-=n,k=null):(k=k.slice(d),d=0)),k&&(l[p++]=k,f&&(q+=k.length,q>=e)))break;if(p){if(f)return la(l,e,0);b[b.length]=l;return}}return!c&&l}function la(a,b,c){a=1===a.length?a[0]:[].concat.apply([],a);return c||a.length>b?a.slice(c,c+b):a}
function ma(a,b,c,e){c?(e=e&&b>c,a=(a=a[e?b:c])&&a[e?c:b]):a=a[b];return a}u.contain=function(a){return!!this.register[a]};u.update=function(a,b){return this.remove(a).add(a,b)};u.remove=function(a,b){const c=this.register[a];if(c){if(this.B)for(let e=0,d;e<c.length;e++)d=c[e],d.splice(d.indexOf(a),1);else S(this.h,a,this.C,this.o),this.depth&&S(this.l,a,this.s,this.o);b||delete this.register[a]}return this};
function S(a,b,c,e,d){let f=0;if(a.constructor===Array)if(d)b=a.indexOf(b),-1!==b?1<a.length&&(a.splice(b,1),f++):f++;else{d=Math.min(a.length,c);for(let h=0,g;h<d;h++)if(g=a[h])f=S(g,b,c,e,d),e||f||delete a[h]}else for(let h in a)(f=S(a[h],b,c,e,d))||delete a[h];return f}ea(P.prototype);function T(a){if(!(this instanceof T))return new T(a);var b=a.document||a.doc||a,c;this.G=[];this.h=[];this.s=[];this.register=z();this.key=(c=b.key||b.id)&&U(c,this.s)||"id";this.B=v(a.fastupdate);this.l=(c=b.store)&&!0!==c&&[];this.store=c&&z();this.async=!1;c=z();let e=b.index||b.field||b;C(e)&&(e=[e]);for(let d=0,f,h;d<e.length;d++)f=e[d],C(f)||(h=f,f=f.field),h=D(h)?Object.assign({},a,h):a,this.J||(c[f]=new P(h,this.register)),this.G[d]=U(f,this.s),this.h[d]=f;if(this.l)for(a=b.store,C(a)&&(a=
[a]),b=0;b<a.length;b++)this.l[b]=U(a[b],this.s);this.index=c}function U(a,b){const c=a.split(":");let e=0;for(let d=0;d<c.length;d++)a=c[d],0<=a.indexOf("[]")&&(a=a.substring(0,a.length-2))&&(b[e]=!0),a&&(c[e++]=a);e<c.length&&(c.length=e);return 1<e?c:c[0]}function na(a,b){if(C(b))a=a[b];else for(let c=0;a&&c<b.length;c++)a=a[b[c]];return a}
function V(a,b,c,e,d){a=a[d];if(e===c.length-1)b[d]=a;else if(a)if(a.constructor===Array)for(b=b[d]=Array(a.length),d=0;d<a.length;d++)V(a,b,c,e,d);else b=b[d]||(b[d]=z()),d=c[++e],V(a,b,c,e,d)}function W(a,b,c,e,d,f,h,g){a=a[h];if(e===b.length-1){if(a.constructor===Array){if(c[e]){for(b=0;b<a.length;b++)d.add(f,a[b],!0,!0);return}a=a.join(" ")}d.add(f,a,g,!0)}else if(a)if(a.constructor===Array)for(h=0;h<a.length;h++)W(a,b,c,e,d,f,h,g);else h=b[++e],W(a,b,c,e,d,f,h,g)}u=T.prototype;
u.add=function(a,b,c){D(a)&&(b=a,a=na(b,this.key));if(b&&(a||0===a)){if(this.register[a])return this.update(a,b);for(let e=0,d,f;e<this.h.length;e++)f=this.h[e],d=this.G[e],C(d)&&(d=[d]),W(b,d,this.s,0,this.index[f],a,d[0],c);if(this.store){let e;if(this.l){e=z();for(let d=0,f;d<this.l.length;d++)f=this.l[d],C(f)?e[f]=b[f]:V(b,e,f,0,f[0])}this.store[a]=e||b}}return this};u.append=function(a,b){return this.add(a,b,!0)};u.update=function(a,b){return this.remove(a).add(a,b)};
u.remove=function(a){D(a)&&(a=na(a,this.key));if(this.register[a]){const b=this.B&&!this.J;for(let c=0;c<this.h.length&&(this.index[this.h[c]].remove(a,b),!b);c++);this.store&&delete this.store[a];delete this.register[a]}return this};
u.search=function(a,b,c,e){D(a)?(c=a,a=c.query):D(b)&&(c=b,b=0);let d=[],f=[],h,g,l,m,p,t,r=0;if(c)if(c.constructor===Array)l=c,c=null;else{l=(h=c.pluck)||c.index||c.field||c;m=!1;g=this.store&&c.enrich;p="and"===c.bool;b=c.limit||100;t=c.offset||0;if(m&&(C(m)&&(m=[m]),!a)){for(let k=0,n;k<m.length;k++)if(n=oa.call(this,m[k],b,t,g))d[d.length]=n,r++;return r?d:[]}C(l)?l=[l]:l.constructor===Array||(l=null)}l||(l=this.h);p=p&&(1<l.length||m&&1<m.length);const q=!e&&(this.J||this.async)&&[];for(let k=
0,n,w,y;k<l.length;k++){let A;w=l[k];C(w)||(A=w,w=w.field);if(q)q[k]=this.index[w].searchAsync(a,b,A||c);else{e?n=e[k]:n=this.index[w].search(a,b,A||c);y=n&&n.length;if(m&&y){const B=[];let G=0;p&&(B[0]=[n]);for(let R=0,ia,L;R<m.length;R++)if(ia=m[R],y=(L=this.K[ia])&&L.length)G++,B[B.length]=p?[L]:L;G&&(n=p?fa(B,b||100,t||0):ha(n,B),y=n.length)}if(y)f[r]=w,d[r++]=n;else if(p)return[]}}if(q){const k=this;return new Promise(function(n){Promise.all(q).then(function(w){n(k.search(a,b,c,w))})})}if(!r)return[];
if(h&&(!g||!this.store))return d[0];for(let k=0,n;k<f.length;k++){n=d[k];n.length&&g&&(n=pa.call(this,n));if(h)return n;d[k]={field:f[k],result:n}}return d};function oa(a,b,c,e){let d=this.K[a],f=d&&d.length-c;if(f&&0<f){if(f>b||c)d=d.slice(c,c+b);e&&(d=pa.call(this,d));return{tag:a,result:d}}}function pa(a){const b=Array(a.length);for(let c=0,e;c<a.length;c++)e=a[c],b[c]={key:e,doc:this.store[e]};return b}u.contain=function(a){return!!this.register[a]};u.get=function(a){return this.store[a]};
u.set=function(a,b){this.store[a]=b;return this};ea(T.prototype);const qa=/[\W_]+/,ra=[H("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",H("[\u00e8\u00e9\u00ea\u00eb]"),"e",H("[\u00ec\u00ed\u00ee\u00ef]"),"i",H("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",H("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",H("[\u00fd\u0177\u00ff]"),"y",H("\u00f1"),"n",H("[\u00e7c]"),"k",H("\u00df"),"s",H(" & ")," and "];function sa(a){return M(this,E(a).toLowerCase(),!a.normalize&&ra,qa)};var ua={encode:ta,A:!1,F:"strict"};const va=/[^a-z0-9]+/,wa={b:"p",v:"f",w:"f",z:"s",x:"s","\u00df":"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function ta(a){a=sa.call(this,a).join(" ");const b=[];if(a){const c=a.split(va),e=c.length;for(let d=0,f,h=0;d<e;d++)if((a=c[d])&&(!this.filter||!this.filter[a])){f=a[0];let g=wa[f]||f,l=g;for(let m=1;m<a.length;m++){f=a[m];const p=wa[f]||f;p&&p!==l&&(g+=p,l=p)}b[h++]=g}}return b};var ya={encode:xa,A:!1,F:""};const za=[H("ae"),"a",H("oe"),"o",H("sh"),"s",H("th"),"t",H("ph"),"f",H("pf"),"f"];function xa(a,b){a&&(a=ta.call(this,a).join(" "),2<a.length&&(a=I(a,za)),b||(1<a.length&&(a=J(a)),a&&(a=a.split(" "))));return a};var Ba={encode:Aa,A:!1,F:""};const Ca=H("(?!\\b)[aeiouy]");function Aa(a){a&&(a=xa.call(this,a,!0),1<a.length&&(a=a.replace(Ca,"")),1<a.length&&(a=J(a)),a&&(a=a.split(" ")));return a};N["latin:simple"]={encode:sa,A:!1,F:""};N["latin:balance"]=ua;N["latin:advanced"]=ya;N["latin:extra"]=Ba;const X=self;let Y;const Z={Index:P,Document:T,Worker:null,registerCharset:function(a,b){N[a]=b},registerLanguage:function(a,b){da[a]=b}};(Y=X.define)&&Y.amd?Y([],function(){return Z}):X.exports?X.exports=Z:X.FlexSearch=Z;}(this));
