define("magix/magix",function(){var e=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,t=/\/[^\/]*$/,n=/[#?].*$/,r="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,c=0,f="/",s="vframe",u="\n",v=window.console,p=v&&v.error,d=function(){},h={tagName:s,rootId:"magix_vf_root",progress:d,coded:1,execError:function(e){p&&v.error(e)}},m=h.hasOwnProperty,l=function(e,t){return e?m.call(e,t):e},g=function(e){return function(t,n,r){switch(arguments.length){case 0:r=e;break;case 1:r=E._o(t)?y(e,t):l(e,t)?e[t]:null;break;case 2:null===n?(delete e[t],r=n):e[t]=r=n}return r}},x=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},w=function(e,t){var n=this;return n.get?(n.c=[],n.x=e||20,n.b=n.x+(0|t||5),void 0):new w(e,t)},y=function(e,t,n){for(var r in t)n&&l(n,r)||(e[r]=t[r]);return e};y(w.prototype,{get:function(e){var t,n=this,r=n.c;return e=a+e,l(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var r=this,i=r.c,o=a+e,f=i[o];if(!l(i,o)){if(i.length>=r.b){i.sort(x);for(var s=r.b-r.x;s--;)f=i.pop(),delete i[f.k],f.m&&_(f.m,f.o,f)}f={},i.push(f),i[o]=f}return f.o=e,f.k=o,f.v=t,f.f=1,f.t=c++,f.m=n,t},del:function(e){e=a+e;var t=this.c,n=t[e];n&&(n.f=-1e5,n.v=r,delete t[e],n.m&&(_(n.m,n.o,n),n.m=r))},has:function(e){return e=a+e,l(this.c,e)}});var b=w(60),C=w(),_=function(e,t,n,r,i,a){for(E._a(e)||(e=[e]),t&&(E._a(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){h.execError(o)}return i},E={mix:y,has:l,safeExec:_,noop:d,config:g(h),start:function(e){var t=this;y(h,e),t.use(h.iniFile,function(n){h=y(h,n,e),h["!tnc"]=h.tagName!=s,t.use(["magix/router","magix/vom"],function(e,n){e.on("!ul",n.locChged),e.on("changed",n.locChged),n.on("progress",h.progress),t.use(h.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var n in e)l(e,n)&&t.push(n);return t},local:g({}),path:function(i,a){var c=i+u+a,s=C.get(c);if(!s){if(o.test(a))s=a;else if(i=i.replace(n,r).replace(t,r)+f,a.charAt(0)==f){var v=o.test(i)?8:0,p=i.indexOf(f,v);s=i.substring(0,p)+a}else s=i+a;for(;e.test(s);)s=s.replace(e,"$1/");C.set(c,s)}return s},pathToObject:function(e,t){var c=e+u+t,s=b.get(c);if(!s){s={};var v={},p=r;n.test(e)?p=e.replace(n,r):~e.indexOf("=")||(p=e);var d=e.replace(p,r);if(p&&o.test(p)){var h=p.indexOf(f,8);p=~h?p.substring(h):f}d.replace(i,function(e,n,r){if(t)try{r=decodeURIComponent(r)}catch(i){}v[n]=r}),s[a]=p,s.params=v,b.set(c,s)}return s},objectToPath:function(e,t,n){var r,i=e[a],o=[],c=e.params;for(var f in c)r=c[f],(!n||r||l(n,f))&&(t&&(r=encodeURIComponent(r)),o.push(f+"="+r));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var n,r,i,a={};if(E._s(e)&&(e=e.split(",")),e&&(i=e.length))for(n=0;i>n;n++)r=e[n],a[t?r[t]:r]=t?r:1;return a},cache:w},M=Object.prototype.toString;return y(E,{use:function(e,t){$.isArray(e)||(e=[e]),e?require(e,t):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==M.call(e)},_s:function(e){return"[object String]"==M.call(e)},_n:function(e){return"[object Number]"==M.call(e)},extend:function(e,t,n,r){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,E.mix(e.prototype,n),E.mix(e,r),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e,t){var n,r,i,a,o=window,c="",f="pathname",s="view",u=e.has,v=e.mix,p=e.keys,d=e.config(),h=e.cache(),m=e.cache(40),l={params:{},href:c},g=/#.*$/,x=/^[^#]*#?!?/,w="params",y=d.nativeHistory,b=d.coded,C=function(t,n,r){if(t){r=this[w],e._s(t)&&(t=t.split(","));for(var i=0;t.length>i&&!(n=u(r,t[i]));i++);}return n},_=function(){return this[f]},E=function(){return this[s]},M=function(e,t,n,r){return n=this,r=n[w],arguments.length>1?r[e]=t:r[e]},V=function(t){var n=e.pathToObject(t,b),r=n[f];return r&&a&&(n[f]=e.path(o.location[f],r)),n},I=v({viewInfo:function(t,n){var i,a;if(!r){r={rs:d.routes||{},nf:d.notFoundView};var o=d.defaultView;r.dv=o;var s=d.defaultPathname||c;i=r.rs,r.f=e._f(i),r.f||i[s]||!o||(i[s]=o),r[f]=s}return t||(t=r[f]),i=r.rs,a=r.f?i.call(d,t,n):i[t],{view:a||r.nf||r.dv,pathname:t}},start:function(){var e=I,t=o.history;i=y&&t.pushState,a=y&&!i,i?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||o.location.href;var n=I,r=h.get(e);if(!r){var i=e.replace(g,c),a=e.replace(x,c),u=V(i),p=V(a),d={};v(d,u[w]),v(d,p[w]),r={get:M,set:M,href:e,refHref:l.href,srcQuery:i,srcHash:a,query:u,hash:p,params:d},h.set(e,r)}if(t&&!r[s]){var m;m=y?r.hash[f]||r.query[f]:r.hash[f];var b=n.viewInfo(m,r);v(r,b)}return r},getChged:function(e,t){var n=e.href,r=t.href,i=n+"\n"+r,a=m.get(i);if(!a){var o,c,u;a={},a[s]=u,a[f]=u,a[w]={};var v,d,h=[f,s];for(v=1;v>=0;v--)d=h[v],c=e[d],u=t[d],c!=u&&(a[d]={from:c,to:u},o=1);var l=e[w],g=t[w];for(h=p(l).concat(p(g)),v=h.length-1;v>=0;v--)d=h[v],c=l[d],u=g[d],c!=u&&(a[w][d]={from:c,to:u},o=1);a.occur=o,a.isParam=C,a.isPathname=_,a.isView=E,m.set(i,a)}return a},route:function(){var e=I,t=e.parseQH(0,1),r=!l.get,i=e.getChged(l,t);l=t,i.occur&&(n=t,e.fire("changed",{location:t,changed:i,force:r}))},navigate:function(t,r,o){var s=I;if(!r&&e._o(t)&&(r=t,t=c),r&&(t=e.objectToPath({params:r,pathname:t},b)),t){var p=V(t),d={};if(d[w]=v({},p[w]),d[f]=p[f],d[f]){if(a){var h=n.query[w];for(var m in h)u(h,m)&&!u(d[w],m)&&(d[w][m]=c)}}else{var l=v({},n[w]);d[w]=v(l,d[w]),d[f]=n[f]}var g,x=e.objectToPath(d,b,n.query[w]);g=i?x!=n.srcQuery:x!=n.srcHash,g&&(i?(s.poped=1,history[o?"replaceState":"pushState"](c,c,x),s.route()):(v(d,n,d),d.srcHash=x,d.hash={params:d[w],pathname:d[f]},s.fire("!ul",{loc:n=d}),x="#!"+x,o?location.replace(x):location.hash=x))}}},t);return I.useState=function(){var e=I,t=location.href;$(o).on("popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},I.useHash=function(){$(o).on("hashchange",I.route)},I}),define("magix/body",["magix/magix"],function(e){var t,n=e.has,r=e.mix,i={},a=document.body,o={},c=String.fromCharCode(26),f="mx-ei",s="mx-owner",u="addEventListener",v="removeEventListener",p=a[u],d={},h=65536,m="on",l=",",g=function(e){return e.id||(e.id="mx-e-"+h--)},x=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},w=function(){this.returnValue=!1},y=function(){this.cancelBubble=!0},b={special:function(e){r(i,e)},process:function(e){if(e=e||window.event,e&&!e[m]){var r=e.target||e.srcElement||a;for(e[m]=1;r&&1!=r.nodeType;)r=r.parentNode;for(var i,o,u=r,v=e.type,h=d[v]||(d[v]=RegExp(l+v+"(?:,|$)")),b="mx-"+v,C=[];u&&1==u.nodeType&&(i=x(u,b),o=x(u,f),!i&&!h.test(o));)C.push(u),u=u.parentNode;if(i){var _,E=i.split(c);if(E.length>1&&(_=E[0],i=E.pop()),_=_||x(u,s),!_)for(var M=u,V=t.all();M;){if(n(V,M.id)){x(u,s,_=M.id);break}M=M.parentNode}if(!_)throw Error("bad:"+i);var $=t.get(_),I=$&&$.view;I&&(p||(e.preventDefault=w,e.stopPropagation=y),I.pEvt({info:i,se:e,st:v,tId:g(r),cId:g(u)}))}else for(var T;C.length;)T=C.shift(),o=x(T,f)||m,h.test(o)||(o=o+l+v,x(T,f,o))}},act:function(e,n,r){var c=o[e]||0,f=c>0?1:0,s=b.process;if(c+=n?-f:f,!c){r&&(t=r);var d=i[e];d?b.lib(a,e,n,s):p?a[n?v:u](e,s,!1):a[m+e]=n?null:s,n||(c=1)}o[e]=c}},C={focus:2,blur:2,mouseenter:2,mouseleave:2};return b.special(C),b.lib=function(e,t,n,r){var i=C[t];1==i?$(e)[n?"off":"on"](t,r):$(e)[(n?"un":"")+"delegate"]("[mx-"+t+"]",t,r)},b}),define("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},n=e.safeExec,r={fire:function(e,r,i,a){var o=t(e),c=this,f=c[o];if(f){r||(r={}),r.type||(r.type=e);for(var s,u,v=f.length,p=v-1;v--;)s=a?v:p-v,u=f[s],(u.d||u.r)&&(f.splice(s,1),p--),u.d||n(u.f,r,c)}i&&delete c[o]},on:function(e,n,r){var i=t(e),a=this[i]||(this[i]=[]),o={f:n};isNaN(r)?(o.r=r,a.push(o)):a.splice(0|r,0,o)},off:function(e,n){var r=t(e),i=this[r];if(i)if(n){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==n&&!a.d){a.d=1;break}}else delete this[r]},once:function(e,n){this.on(e,n,t)}};return r}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e,t,n){var r,i,a,o,c,f=document,s=f.body,u=65536,v=e.safeExec,p=[],d=e.mix,h=e.config("tagName"),m=e.config("rootId"),l=e.config("!tnc"),g=e.has,x=l?"mx-vframe":"mx-defer",w=s.contains,y="querySelectorAll",b=l&&s[y],C=" "+h+"[mx-vframe]",_="alter",E="created",M=function(e){return"object"==typeof e?e:f.getElementById(e)},V=function(e,t,n){return t=M(e),t&&(n=b?f[y]("#"+$(t)+C):t.getElementsByTagName(h)),n||p},$=function(e){return e.id||(e.id="magix_vf_"+u--)},I=function(e,t,n){if(e=M(e),t=M(t),e&&t)if(e!==t)try{n=w?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},T=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=c};return d(T,{root:function(e,t,n){if(!r){a=t,o=n,c=e;var i=M(m);i||(i=f.createElement(h),i.id=m,s.appendChild(i)),r=new T(m),e.add(r)}return r}}),d(d(T.prototype,t),{mountView:function(t,r){var i=this,f=M(i.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),i.unmountView(),t){var s=e.pathToObject(t),u=s.pathname,v=--i.sign;e.use(u,function(e){if(v==i.sign){n.prepare(e);var t=new e({owner:i,id:i.id,$:M,path:u,vom:c,location:a});i.view=t,t.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),i.mountZoneVframes()),t.on("primed",function(){i.viewPrimed=1,i.fire("viewMounted")}),t.on("rendered",function(){i.mountZoneVframes()}),t.on("prerender",function(){i.unmountZoneVframes(0,1)||i.cAlter()})},0),r=r||{},t.load(d(r,s.params,r),o)}})}},unmountView:function(){var e=this,t=e.view;if(t){i||(i={}),e.unmountZoneVframes(0,1),e.cAlter(i),delete e.view,t.oust();var n=M(e.id);n&&n._bak&&(n.innerHTML=n._tmpl),delete e.viewInited,e.viewPrimed&&(delete e.viewPrimed,e.fire("viewUnmounted")),i=0}e.sign--},mountVframe:function(e,t,n){var r=this;r.fcc&&r.cAlter();var i=c.get(e);return i||(i=new T(e),i.pId=r.id,g(r.cM,e)||r.cC++,r.cM[e]=1,c.add(i)),i.mountView(t,n),i},mountZoneVframes:function(e,t){var n=this,r=e||n.id;n.unmountZoneVframes(r,1);var i=V(r),a=i.length,o={};if(a)for(var c,f,s,u,v=0;a>v;v++)if(c=i[v],f=$(c),!g(o,f)&&(s=c.getAttribute("mx-view"),u=!c.getAttribute(x),u=u!=l,u||s)){n.mountVframe(f,s,t);for(var p,d=V(c),h=0,m=d.length;m>h;h++)p=d[h],o[$(p)]=1}n.cCreated()},unmountVframe:function(e,t){var n=this;e=e||n.id;var r=c.get(e);if(r){var i=r.fcc;r.unmountView(),c.remove(e,i);var a=c.get(r.pId);a&&g(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var n,r,i=this,a=i.cM;for(r in a)e?I(r,e)&&i.unmountVframe(r,n=1):i.unmountVframe(r,n=1);return t||i.cCreated(),n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,delete t.fca,n.fire(E,e),t.fire(E,e)),c.vfCreated();var r=t.id,i=c.get(t.pId);i&&!g(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var n=t.fcc;if(delete t.fcc,!t.fca&&n){var r=t.view,i=t.id;r&&(t.fca=1,r.fire(_,e),t.fire(_,e));var a=c.get(t.pId);a&&g(a.rM,i)&&(a.rC--,delete a.rM[i],a.cAlter(e))}},locChged:function(){var t=this,n=t.view;if(t.viewInited&&n.sign>0){var r=n.olChg(o),i={location:a,changed:o,prevent:function(){this.cs=p},to:function(t){t=t||p,e._s(t)&&(t=t.split(",")),this.cs=t}};r&&v(n.locationChange,i,n);for(var f,s=i.cs||e.keys(t.cM),u=0,d=s.length;d>u;u++)f=c.get(s[u]),f&&f.locChged()}}}),T}),define("magix/view",["magix/magix","magix/event","magix/body"],function(e,t,n){var r=e.safeExec,i=e.has,a=",",o=[],c=e.noop,f=e.mix,s="~",u=function(e){return function(){var t,n=this,r=n.notifyUpdate();return r&&(t=e.apply(n,arguments)),t}},v=e.cache(40),p="<",d=">",h=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,m=String.fromCharCode(26),l={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},g=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,x=/(\w+):([^,]+)/g,w=/([$\w]+)<([\w,]+)>/,y=function(e){var t=this;f(t,e),t.$ol={ks:[]},t.sign=1,r(y.ms,[e],t)};y.ms=[],y.prepare=function(e){if(!e[s]){e[s]=1;var t,n,r,i,o,f=e.prototype,v={};for(var h in f)if(t=f[h],n=h.match(w))for(r=n[1],i=n[2],i=i.split(a),o=i.length-1;o>-1;o--)n=i[o],v[n]=1,f[r+p+n+d]=t;else"render"==h&&t!=c&&(f[h]=u(t));i&&(f.$evts=v)}},y.mixin=function(e,t){t&&y.ms.push(t),f(y.prototype,e)},f(f(y.prototype,t),{render:c,locationChange:c,init:c,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,i=e.sign,a=function(a){if(i>0&&i==e.sign){t&&(e.template=e.wrapMxEvent(a)),e.dEvts(),e.fire("interact",{tmpl:t},1),r(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,r(e.render,o,e);var c=!t&&!e.rendered;c&&(e.rendered=1,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,a):a()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=1),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(h,"$&"+this.id+m)},wrapAsync:function(e){var t=this,n=t.sign;return function(){n==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e){var t,n=this;n.beginUpdate(),n.sign>0&&(t=n.$(n.id),t&&(t.innerHTML=e)),n.endUpdate()},observeLocation:function(t){var n,r=this;n=r.$ol,n.f=1;var i=n.ks;e._o(t)&&(n.pn=t.pathname,t=t.keys),t&&(n.ks=i.concat((t+"").split(a)))},olChg:function(e){var t=this,n=t.$ol,r=1;return n.f&&(r=0,n.pn&&(r=e.pathname),r||(r=e.isParam(n.ks))),r},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.dEvts(1)),e.sign--},pEvt:function(e){var t=this;if(t.sign>0){var n=e.info,i=e.se,a=v.get(n);a||(a=n.match(g),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(x,function(e,t,n){a.p[t]=n}),v.set(n,a));var o=a.n+p+e.st+d,c=t[o];if(c){var f=l[a.f];f&&f.call(l,i),r(c,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:i,halt:l.halt,prevent:l.prevent,stop:l.stop,params:a.p},t)}}},dEvts:function(e){var t=this,r=t.$evts,i=t.vom;for(var a in r)n.act(a,e,i)}});var b={},C="?t="+Math.random(),_={},E={};return y.prototype.fetchTmpl=function(e,t){var n=this,a="template"in n;if(a)t(n.template);else if(i(_,e))t(_[e]);else{var o=e.indexOf("/"),c=e.substring(0,o);b[c]||(b[c]=require.s.contexts._.config.paths[c]);var f=b[c]+e.substring(o+1)+".html",s=E[f],u=function(n){t(_[e]=n)};s?s.push(u):(s=E[f]=[u],$.ajax({url:f+C,success:function(e){r(s,e),delete E[f]},error:function(e,t){r(s,t),delete E[f]}}))}},y.extend=function(t,n,i){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),n&&r(n,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,i)},y}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,n){var r=t.has,i=t.mix,a=0,o=0,c=0,f=0,s={},u={},v={},p=t.mix({all:function(){return s},add:function(e){r(s,e.id)||(a++,s[e.id]=e,p.fire("add",{vframe:e}))},get:function(e){return s[e]},remove:function(e,t){var n=s[e];n&&(a--,t&&o--,delete s[e],p.fire("remove",{vframe:n}))},vfCreated:function(){if(!f){o++;var e=o/a;e>c&&p.fire("progress",{percent:c=e},f=1==e)}},locChged:function(t){var n,r=t.loc;if(r?n=1:r=t.location,i(u,r),!n){i(v,t.changed);var a=e.root(p,u,v);v.view?a.mountView(r.view):a.locChged()}}},n);return p}),document.createElement("vframe");