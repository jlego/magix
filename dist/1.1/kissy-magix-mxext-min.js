KISSY.add("magix/magix",function(e){var t=[].slice,r=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,n=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,s="pathname",c=/^https?:\/\//i,f=0,u="/",v="vframe",m="\n",d=function(){},h={tagName:v,rootId:"magix_vf_root",execError:d},l=h.hasOwnProperty,g=function(e,t){return e?l.call(e,t):e},p=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=S.isObject(t)?w(e,t):g(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},x=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},y=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new y(e,t)},w=function(e,t,r){for(var n in t)r&&g(r,n)||(e[n]=t[n]);return e};w(y.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,g(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,a=s+e,o=i[a];if(!g(i,a)){if(i.length>=n.b){i.sort(x);for(var c=n.b-n.x;c--;)o=i.pop(),delete i[o.k],o.m&&C(o.m,o.o,o)}o={},i.push(o),i[a]=o}return o.o=e,o.k=a,o.v=t,o.f=1,o.t=f++,o.m=r,t},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=a,delete t[e],r.m&&(C(r.m,r.o,r),r.m=a))},has:function(e){return e=s+e,g(this.c,e)}});var b=y(60),$=y(),C=function(e,t,r,n,i,a){for(S.isArray(e)||(e=[e]),t&&(S.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){h.execError(o)}return i},S={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:w,has:g,safeExec:C,noop:d,config:p(h),start:function(e){var t=this;w(h,e),t.libRequire(h.iniFile,function(r){h=w(h,r,e),h["!tnc"]=h.tagName!=v;var n=h.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(h.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)g(e,r)&&t.push(r);return t},local:p({}),path:function(e,t){var o=e+m+t,s=$.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(i,a).replace(n,a)+u,t.charAt(0)==u){var f=c.test(e)?8:0,v=e.indexOf(u,f);s=e.substring(0,v)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");$.set(o,s)}return s},pathToObject:function(e,t){var r=e+m+t,n=b.get(r);if(!n){n={};var f={},v=a;i.test(e)?v=e.replace(i,a):~e.indexOf("=")||(v=e);var d=e.replace(v,a);if(v&&c.test(v)){var h=v.indexOf(u,8);v=~h?v.substring(h):u}d.replace(o,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}f[r]=n}),n[s]=v,n.params=f,b.set(r,n)}return n},objectToPath:function(e,t,r){var n,i=e[s],a=[],o=e.params;for(var c in o)n=o[c],(!r||n||g(r,c))&&(t&&(n=encodeURIComponent(n)),a.push(c+"="+n));return a.length&&(i=i+"?"+a.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(S.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:y};return w(S,{libRequire:function(r,n){r?e.use(r+"",function(e){n&&n.apply(e,t.call(arguments,1))}):n&&n()},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isObject,isRegExp:e.isRegExp,isString:e.isString,isNumber:e.isNumber})}),KISSY.add("magix/router",function(e,t,r,n){var i,a,o,s,c=window,f="",u="pathname",v="view",m=t.has,d=t.mix,h=document,l=t.keys,g=/^UTF-8$/i.test(h.charset||h.characterSet||"UTF-8"),p=t.config(),x=t.cache(),y=t.cache(40),w={params:{},href:f},b=/#.*$/,$=/^[^#]*#?!?/,C="params",S=p.nativeHistory,E=function(e,r,n){if(e){n=this[C],t.isString(e)&&(e=e.split(","));for(var i=0;e.length>i&&!(r=m(n,e[i]));i++);}return r},M=function(){return this[u]},I=function(){return this[v]},P=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},T=function(e){var r=t.pathToObject(e,g),n=r[u];return n&&s&&(r[u]=t.path(c.location[u],n)),r},q=d({viewInfo:function(e,r){var n,i;if(!a){a={rs:p.routes||{},nf:p.notFoundView};var o=p.defaultView;a.dv=o;var s=p.defaultPathname||f;n=a.rs,a.f=t.isFunction(n),a.f||n[s]||!o||(n[s]=o),a[u]=s}return e||(e=a[u]),n=a.rs,i=a.f?n.call(p,e,r):n[e],{view:i||a.nf||a.dv,pathname:i||S||a.nf?e:a[u]}},start:function(){var e=q,t=c.history;o=S&&t.pushState,s=S&&!o,o?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||c.location.href;var r=q,n=x.get(e);if(!n){var i=e.replace(b,f),a=e.replace($,f),o=T(i),s=T(a),m={};d(m,o[C]),d(m,s[C]),n={get:P,set:P,href:e,refHref:w.href,srcQuery:i,srcHash:a,query:o,hash:s,params:m},x.set(e,n)}if(t&&!n[v]){var h;h=S?n.hash[u]||n.query[u]:n.hash[u];var l=r.viewInfo(h,n);d(n,l)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=y.get(i);if(!a){var o,s,c;a={},a[v]=c,a[u]=c,a[C]={};var f,m,d=[u,v];for(f=1;f>=0;f--)m=d[f],s=e[m],c=t[m],s!=c&&(a[m]={from:s,to:c},o=1);var h=e[C],g=t[C];for(d=l(h).concat(l(g)),f=d.length-1;f>=0;f--)m=d[f],s=h[m],c=g[m],s!=c&&(a[C][m]={from:s,to:c},o=1);a.occur=o,a.isParam=E,a.isPathname=M,a.isView=I,y.set(i,a)}return a},route:function(){var e=q,t=e.parseQH(0,1),r=!w.get,n=e.getChged(w,t);w=t,n.occur&&(i=t,e.fire("changed",{location:t,changed:n,force:r}))},navigate:function(e,r,n){var a=q;if(!r&&t.isObject(e)&&(r=e,e=f),r&&(e=t.objectToPath({params:r,pathname:e},g)),e){var c=T(e),v={};if(v[C]=d({},c[C]),v[u]=c[u],v[u]){if(s){var h=i.query[C];for(var l in h)m(h,l)&&!m(v[C],l)&&(v[C][l]=f)}}else{var p=d({},i[C]);v[C]=d(p,v[C]),v[u]=i[u]}var x,y=t.objectToPath(v,g,i.query[C]);x=o?y!=i.srcQuery:y!=i.srcHash,x&&(o?(a.poped=1,history[n?"replaceState":"pushState"](f,f,y),a.route()):(d(v,i,v),v.srcHash=y,v.hash={params:v[C],pathname:v[u]},a.fire("!ul",{loc:i=v}),y="#!"+y,n?location.replace(y):location.hash=y))}}},r);return q.useState=function(){var e=q,t=location.href;n.on(c,"popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},q.useHash=function(){n.on(c,"hashchange",q.route)},q},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t){var r,n=t.has,i=t.mix,a={},o=document.body,s={},c=String.fromCharCode(26),f="mx-ei",u="mx-owner",v={},m=65536,d="on",h=",",l=function(e){return e.id||(e.id="mx-e-"+m--)},g=function(e,t,r){return e&&e.setAttribute&&(r?e.setAttribute(t,r):r=e.getAttribute(t)),r},p={special:function(e){i(a,e)},process:function(e){if(e=e||window.event,e&&!e[d]){var t=e.target||e.srcElement||o;for(e[d]=1;t&&1!=t.nodeType;)t=t.parentNode;var i=t,a=e.type,s=v[a]||(v[a]=RegExp(h+a+"(?:,|$)"));if(!s.test(g(t,f))){for(var m,p,x="mx-"+a,y=[];i&&(m=g(i,x),p=g(i,f),!m&&!s.test(p));)y.push(i),i=i.parentNode;if(m){var w,b=m.split(c);if(b.length>1&&(w=b[0],m=b.pop()),w=w||g(i,u),!w)for(var $=i,C=r.all();$;){if(n(C,$.id)){g(i,u,w=$.id);break}$=$.parentNode}if(!w)throw Error("bad:"+m);var S=r.get(w),E=S&&S.view;E&&E.processEvent({info:m,se:e,st:a,tId:l(t),cId:l(i)})}else for(var M;y.length;)M=y.shift(),p=g(M,f)||d,s.test(p)||(p=p+h+a,g(M,f,p))}}},act:function(e,t,n){var i=s[e]||0,c=i>0?1:0;if(i+=t?-c:c,!i){n&&(r=n);var f=a[e];f?p.lib(o,e,t,p.process):o[d+e]=t?null:p.process,t||(i=1)}s[e]=i}},x={focusin:1,focusout:1,mouseenter:2,mouseleave:2,mousewheel:1};return p.special(x),p.lib=function(t,r,n,i){e.use("event",function(e,a){var o=x[r];1==o?(o=n?"detach":"on",a[o](t,r,i)):(o=(n?"un":"")+"delegate",a[o](t,r,"[mx-"+r+"]",i))})},p},{requires:["magix/magix"]}),KISSY.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,v=c.length,m=v-1;v--;)f=a?v:m-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),m--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},off:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,!0)}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,r,n){var i,a,o,s,c,f=document,u=f.body,v=65536,m=t.safeExec,d=[],h=d.slice,l=t.mix,g=t.config("tagName"),p=t.config("rootId"),x=t.config("!tnc"),y=t.has,w=x?"mx-vframe":"mx-defer",b=u.contains,$=x&&u.querySelectorAll,C=" "+g+"[mx-vframe]",S="alter",E="created",M=function(e){return"object"==typeof e?e:f.getElementById(e)},I=function(e,t,r){return t=M(e),t&&(r=$?f.querySelectorAll("#"+t.id+C):t.getElementsByTagName(g)),r||d},P=function(e){return e.id||(e.id="magix_vf_"+v--)},T=function(e,t,r){if(e=M(e),t=M(t),e&&t)if(e!==t)try{r=b?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},q=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=c};return l(q,{root:function(e,t,r){if(!i){o=t,s=r,c=e;var n=M(p);n||(n=f.createElement(g),n.id=p,u.insertBefore(n,u.firstChild)),i=new q(p),e.add(i)}return i}}),l(l(q.prototype,r),{mountView:function(e,r,i){var a=this,f=M(a.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),a.unmountView(),e){var u=t.pathToObject(e),v=u.pathname,d=--a.sign;t.libRequire(v,function(e){if(d==a.sign){n.prepare(e);var t=new e({owner:a,id:a.id,$:M,path:v,vom:c,location:o});a.view=t,t.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),a.mountZoneVframes()),t.on("rendered",function(){a.mountZoneVframes()}),t.on("prerender",function(){a.unmountZoneVframes(0,1)||a.cAlter()}),t.on("inited",function(){a.viewInited=1,a.fire("viewInited",{view:t}),i&&m(i,t,a)})},0),r=r||{},t.load(l(r,u.params,r),s)}})}},unmountView:function(){var e=this;if(e.view){a||(a={}),e.unmountZoneVframes(0,1),e.cAlter(a),e.view.oust();var t=M(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,a=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r,n){var i=this,a=c.get(e);return a||(a=new q(e),a.pId=i.id,y(i.cM,e)||i.cC++,i.cM[e]=1,c.add(a)),a.mountView(t,r,n),a},mountZoneVframes:function(e,t,r){var n=this,i=e||n.id;n.unmountZoneVframes(i,1);var a=I(i),o=a.length,s={};if(o)for(var c,f,u,v,m=0;o>m;m++)if(c=a[m],f=P(c),!y(s,f)&&(u=c.getAttribute("mx-view"),v=!c.getAttribute(w),v=v!=x,v||u)){n.mountVframe(f,u,t,r);for(var d,h=I(c),l=0,g=h.length;g>l;l++)d=h[l],s[P(d)]=1}n.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=c.get(e);if(n){var i=n.fcc;n.unmountView(),c.remove(e,i);var a=c.get(n.pId);a&&y(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?T(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},invokeView:function(e){var t,r=this,n=r.view,i=r.viewInited&&n[e],a=h.call(arguments,1);return i&&(t=m(i,a,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(E,e),t.fire(E,e)),c.vfCreated();var n=t.id,i=c.get(t.pId);i&&!y(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(S,e),t.fire(S,e));var i=c.get(t.pId);i&&y(i.rM,n)&&(i.rC--,delete i.rM[n],i.cAlter(e))}},locChged:function(){var e=this,r=e.view;if(r&&r.sign>0&&r.rendered){var n=r.olChanged(s),i={location:o,changed:s,prevent:function(){this.cs=d},toChildren:function(e){e=e||d,t.isString(e)&&(e=e.split(",")),this.cs=e}};n&&m(r.locationChange,i,r);for(var a,f=i.cs||t.keys(e.cM),u=0,v=f.length;v>u;u++)a=c.get(f[u]),a&&a.locChged()}}}),q},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,r,n,i){var a=t.safeExec,o=t.has,s=",",c=[],f=t.noop,u=t.mix,v="~",m=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},d=t.cache(40),h="<",l=">",g=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,p=String.fromCharCode(26),x={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},y=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,w=/(\w+):([^,]+)/g,b=/([$\w]+)<([\w,]+)>/,$=function(e){var t=this;u(t,e),t.sign=1,a($.ms,[e],t)};$.ms=[],$.prepare=function(e){if(!e[v]){e[v]=1;var t,r,n,i,a,c=e.prototype,u={};for(var d in c)if(o(c,d))if(t=c[d],r=d.match(b))for(n=r[1],i=r[2],i=i.split(s),a=i.length-1;a>-1;a--)r=i[a],u[r]=1,c[n+h+r+l]=t;else"render"==d&&t!=f&&(c[d]=m(t));i&&(c.$evts=u)}},$.mixin=function(e,t){t&&$.ms.push(t),u($.prototype,e)},u(u($.prototype,r),{render:f,locationChange:f,init:f,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,i=function(i){if(n>0&&n==e.sign){e.template=e.wrapMxEvent(i),e.delegateEvents(),e.fire("interact",{tmpl:t},1),a(e.init,r,e),e.fire("inited",0,1),a(e.render,c,e);var o=!t&&!e.rendered;o&&(e.rendered=!0,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,i):i()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=!0),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(g,"$&"+this.id+p)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(s)))},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,n=e.se,i=d.get(r);i||(i=r.match(y),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace(w,function(e,t,r){i.p[t]=r}),d.set(r,i));var o=i.n+h+e.st+l,s=t[o];if(s){var c=x[i.f];c&&c.call(x,n),a(s,u({currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:n,params:i.p},x),t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=t.vom;for(var a in r)n.act(a,e,i)}});var C,S,E="?t="+e.now(),M={},I={};return $.prototype.fetchTmpl=function(t,r){var n=this,s="template"in n;if(s)r(n.template);else if(o(M,t))r(M[t]);else{if(!C){var c=t.substring(0,t.indexOf("/"));S=e.Config.packages[c],C=S.base||S.path}S.ignorePackageNameInUri&&(t=t.replace(S.name,""));var f=C+t+".html",u=I[f],v=function(e){r(M[t]=e)};u?u.push(v):(u=I[f]=[v],i({url:f+E,success:function(e){a(u,e),delete I[f]},error:function(e,t){a(u,t),delete I[f]}}))}},$.extend=function(t,r,n){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&a(r,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,n)},$},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,r,n){var i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},v={},m={},d=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,d.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],d.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&d.fire("progress",{percent:c=e},f=1==e)}},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(v,n),!r){a(m,e.changed);var i=t.root(d,v,m);m.view?i.mountView(n.view):i.locChged()}}},n);return d},{requires:["magix/vframe","magix/magix","magix/event"]}),KISSY.add("mxext/mmanager",function(e,t,r){var n=t.has,i=t.safeExec,a=t.mix,o="mr",s=String.fromCharCode(26),c=t.isFunction,f=12e5,u=function(e,t,r){t=[];for(r in e)t.push(r,o,e[r]);return t},v=function(e,t){return[e.name,u(t.urlParams),u(t.postParams)].join(s)},m=Date.now||function(){return+new Date},d=m(),h=function(e){throw Error(e)},l=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={},r.id="mm"+d--,i(l.ms,arguments,r)},g=[].slice,p=function(e,t,r){return function(){return e.apply(t,[t,r].concat(g.call(arguments)))}},x=function(e,t,r){var n=r.key,a=r.cKeys,o=a[n];if(o){var s=o.q;delete a[n],i(s,e)}},y=function(e){return function(){var t=new $(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t.id,t),r=g.call(r,0,-1)),t[e].apply(t,r)}},w=function(e,t){return function(r,n){var i=g.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};a(l,{create:function(e){return e||h("ungiven modelClass"),new l(e)},mixin:function(e,t){t&&l.ms.push(t),a(l.prototype,e)},ms:[]});var b={ALL:1,ONE:2,ORDER:4},$=function(e){this.$host=e,this.$busy=0,this.$reqs={},this.id=o+d--};return a($.prototype,{send:function(e,r,a,o){var s=this;if(s.$busy)return s.next(function(){this.send(e,r,a,o)}),s;s.$busy=1;var c=s.$host,f=c.$mCache,u=c.$mCacheKeys,v=s.$reqs;t.isArray(e)||(e=[e]);var d,l,g,y=e.length,w=0,$=Array(y),C=[],S={},E=[],M=t.isArray(r);M&&(C=Array(r.length));for(var I,P=function(e,t,n){if(!s.$destroy){w++,delete v[e.id];var o=e.$mm,u=o.key;if($[t]=e,n)d=1,g=1,l=n,S.msg=n,S[t]=n;else{if(g=0,!u||u&&!f.has(u)){u&&f.set(u,e),o.done=m();var h=o.after,p=o.meta;h&&i(h,[e,p]),c.fire("done",{model:e,meta:p})}!e.fromCache&&o.used>0&&(e.fromCache=1),o.used++}if(a==b.ONE){var x=M?r[t]:r;x&&(C[t]=i(x,[g?S:null,e,S],s))}else if(a==b.ORDER){E[t]={m:e,e:g,s:n};for(var I,P,T=E.i||0;I=E[T];T++)P=M?r[T]:r,I.e&&(S.msg=I.s,S[T]=I.s),C[T]=i(P,[I.e?S:null,I.m,S].concat(C),s);E.i=T}w>=y&&(d||(S=null),a==b.ALL?($.unshift(S),C[0]=S,C[1]=i(r,$,s)):C.unshift(S),s.$ntId=setTimeout(function(){s.doNext(C)},30))}},T=0;e.length>T;T++)if(I=e[T]){var q=c.getModel(I,o),O=q.cKey,A=q.entity,k=p(P,A,T);k.id=s.id,O&&n(u,O)?u[O].q.push(k):q.update?(v[A.id]=A,O&&(u[O]={q:[k],e:A},k=x),A.request(k,{key:O,cKeys:u})):k()}else h("empty model");return s},fetchAll:function(e,t){return this.send(e,t,b.ALL)},saveAll:function(e,t){return this.send(e,t,b.ALL,1)},fetchOrder:w(b.ORDER),saveOrder:w(b.ORDER,1),saveOne:w(b.ONE,1),fetchOne:w(b.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,a=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&n(a,c)){for(var f,u=a[c],v=u.q,m=[],d=[],h=0;v.length>h;h++)f=v[h],f.id!=e.id?m.push(f):e.$destroy||d.push(f);i(d,["abort"],e),m.length?u.q=m:s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$busy){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=1,e.abort()}}),a(a(l.prototype,r),{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++)i=e[o],i&&(a=i.name,a?n[a]&&h("already exist:"+a):h("miss name"),i.cache&&(i.cacheKey||(i.cacheKey=v),i.cacheTime||(i.cacheTime=f)),n[a]=i)},registerMethods:function(e){a(this,e)},createModel:function(e){var t=this,r=t.getModelMeta(e),n=new t.$mClass;n.set(r),n.$mm={used:0};var a=e.before||r.before;c(a)&&i(a,[n,r]);var o=e.after||r.after;n.$mm.after=o;var s=e.cacheKey||r.cacheKey;return c(s)&&(s=i(s,[r,e])),n.$mm.key=s,n.$mm.meta=r,n.set(e),n.setUrlParams(r.urlParams),n.setPostParams(r.postParams),n.setUrlParams(e.urlParams),n.setPostParams(e.postParams),t.fire("inited",{model:n,meta:r}),n},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];return a||h("Unfound:"+r),a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=1,r=i.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:y("saveAll"),fetchAll:y("fetchAll"),saveOrder:y("saveOrder"),fetchOrder:y("fetchOrder"),saveOne:y("saveOne"),fetchOne:y("fetchOne"),createMRequest:function(e){var t=new $(this);return e&&e.manage&&e.manage(t.id,t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(e){var r,n,a=this,o=a.$mCache,s=null;if(t.isString(e)?r=e:(n=a.getModelMeta(e),r=e.cacheKey||n.cacheKey,c(r)&&(r=i(r,[n,e]))),r){var f=a.$mCacheKeys,u=f[r];if(u)s=u.e;else if(s=o.get(r)){n||(n=s.$mm.meta);var v=e.cacheTime||n.cacheTime||0;c(v)&&(v=i(v,[n,e])),v>0&&m()-s.$mm.done>v&&(a.clearCacheByKey(r),s=0)}}return s}}),l},{requires:["magix/magix","magix/event"]}),KISSY.add("mxext/model",function(e,t){var r=function(r,n){var i=function(){i.superclass.constructor.apply(this,arguments),n&&t.safeExec(n,[],this)};return t.mix(i,this,{prototype:!0}),e.extend(i,this,r)},n=+new Date,i=encodeURIComponent,a=t.has,o=t.isObject,s=t.toString,c=function(e){this.set(e),this.id="m"+n--};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var r=this;e||(e=c.GET),e=e.toUpperCase();var n,a="$"+e,o=r[a],s=[];for(var f in o){n=o[f],t.isArray(n)||(n=[n]);for(var u=0;n.length>u;u++)s.push(f+"="+i(n[u]))}return s.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,c.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,c.POST,!0)},setParams:function(e,t,r,n){var i=this,s="$"+r;i[s]||(i[s]={});var c=i[s];if(!o(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&a(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,c.POST)},setUrlParams:function(e,t){this.setParams(e,t,c.GET)},get:function(e,t){var r=this,n=arguments.length,i=!n,a=2==n,o=r.$attrs;return o&&(o=i?o:o[e]),a&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt?e("abort",null,t):n?e(n,i,t):(o(i)||(i={data:i}),r.set(i),e(n,i,t))};r.$trans=r.sync(n)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abt=1},isAborted:function(){return this.$abt}}),c},{requires:["magix/magix"]}),KISSY.add("mxext/view",function(e,t,r,n){var i=window,a=function(e){i.clearTimeout(e),i.clearInterval(e)},o=function(e){c(e.destroy,[],e)},s=0,c=t.safeExec,f=t.has,u=r.extend({navigate:n.navigate,manage:function(e,r){var n=this,i=arguments,c=!0;1==i.length&&(r=e,e="res_"+s++,c=!1),n.$res||(n.$res={});var f;t.isNumber(r)?f=a:r&&r.destroy&&(f=o);var u={hasKey:c,res:r,sign:n.sign,destroy:f};return n.$res[e]=u,r},getManaged:function(e,t){var r=this,n=r.$res,i=null;if(n&&f(n,e)){var a=n[e];i=a.res,t&&delete n[e]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r];if(n.sign!=e.sign){var i=n.res,a=n.destroy,o=!1;a&&(a(i),o=!0),n.hasKey||delete t[r],e.fire("destroyManaged",{resource:i,processed:o})}}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)}),c(u.ms,arguments,e)},{ms:[],mixin:function(e,r){r&&u.ms.push(r),t.mix(u.prototype,e)}});return u},{requires:["magix/magix","magix/view","magix/router"]}),document.createElement("vframe");