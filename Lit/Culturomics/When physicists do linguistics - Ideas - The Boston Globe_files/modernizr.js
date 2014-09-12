/*!
 * Responsive Images
 * Mobile-First images that scale responsively and responsibly
 * Copyright 2010, Scott Jehl, Filament Group, Inc
 * MIT License
 * Check out the README.md file for instructions and optimizations
 */
(function (win) {
  //defaults / mixins
  var rwdi = (function () {
    var defaults = {
      // this option assumes data- attributes aren't in use
      // set to false if you need them (see README.md)
      immediateRedirect: true,
      //default width for small/large images
      widthBreakPoint: 480,
      cookieName: "rwdimgsize",
	  cookieDomain: ".bostonglobe.com",
      cookiePath: "/"
    };
    //mixins from rwd_images global
    if (win.rwd_images) {
      for (var setting in win.rwd_images) {
        defaults[setting] = win.rwd_images[setting];
      }
    }
    return defaults;
  })(),
    widthBreakPoint = rwdi.widthBreakPoint,
    wideload = win.screen.availWidth > widthBreakPoint && location.search.indexOf("mobile-assets") <= 0,
    doc = win.document,

    //record width cookie for subsequent loads
    recordRes = (function () {
      var date = new Date();
      date.setTime(date.getTime() + (1 /*1 day*/ * 24 * 60 * 60 * 1000));
      doc.cookie = rwdi.cookieName + "=" + (wideload ? "large" : "small") + "; expires=" + date.toGMTString() + "; path=" + rwdi.cookiePath + "; domain=" + rwdi.cookieDomain;
    })();

  //if wideload is false quit now
  if (!wideload) {
    return;
  }

  //find and replace img elements
  var findrepsrc = function () {
      var imgs = doc.getElementsByTagName('img'),
        il = imgs.length;

      for (var i = 0; i < il; i++) {
        var img = imgs[i],
          fullsrc = img.getAttribute('data-fullsrc');

        if (fullsrc) {
          img.src = fullsrc;
        }
      }
    },

    //flag for whether loop has run already
    complete = false,

    //rfind/rep image srcs if wide enough (maybe make this happen at domready?)
    readyCallback = function () {
      if (complete) {
        return;
      }
      complete = true;
      findrepsrc();
    },

    unsetCookie = function () {
      document.cookie = rwdi.cookieName + "=; expires=" + (new Date()).toGMTString() + "; path=" + rwdi.cookiePath + "; domain=" + rwdi.cookieDomain;
    };

  //DOM-ready or onload handler
  //W3C event model
  if (doc.addEventListener) {
    doc.addEventListener("DOMContentLoaded", readyCallback, false);
    //fallback
    win.addEventListener("load", function () {
      readyCallback();
      unsetCookie();
    }, false);

  }
  // If IE event model is used
  else if (doc.attachEvent) {
    doc.attachEvent("onreadystatechange", readyCallback);
    //fallback
    win.attachEvent("onload", function () {
      readyCallback();
      unsetCookie();
    });
  }
})(this);

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-applicationcache-localstorage-inlinesvg-svg-touch-printshiv-cssclasses-teststyles-prefixes-css_displaytable-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(m.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={svg:"http://www.w3.org/2000/svg"},o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:u(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},o.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},o.applicationcache=function(){return!!a.applicationCache},o.svg=function(){return!!b.createElementNS&&!!b.createElementNS(n.svg,"svg").createSVGRect},o.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==n.svg};for(var C in o)w(o,C)&&(t=C.toLowerCase(),e[t]=o[C](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=u,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+r.join(" "):""),e}(this,this.document),function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}function w(a){var b,c=a.getElementsByTagName("*"),d=c.length,e=RegExp("^(?:"+m().join("|")+")$","i"),f=[];while(d--)b=c[d],e.test(b.nodeName)&&f.push(b.applyElement(x(b)));return f}function x(a){var b,c=a.attributes,d=c.length,e=a.ownerDocument.createElement(u+":"+a.nodeName);while(d--)b=c[d],b.specified&&e.setAttribute(b.nodeName,b.nodeValue);return e.style.cssText=a.style.cssText,e}function y(a){var b,c=a.split("{"),d=c.length,e=RegExp("(^|[\\s,>+~])("+m().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),f="$1"+u+"\\:$2";while(d--)b=c[d]=c[d].split("}"),b[b.length-1]=b[b.length-1].replace(e,f),c[d]=b.join("}");return c.join("{")}function z(a){var b=a.length;while(b--)a[b].removeNode()}function A(a){function g(){clearTimeout(d._removeSheetTimer),b&&b.removeNode(!0),b=null}var b,c,d=n(a),e=a.namespaces,f=a.parentWindow;return!v||a.printShived?a:(typeof e[u]=="undefined"&&e.add(u),f.attachEvent("onbeforeprint",function(){g();var d,e,f,h=a.styleSheets,i=[],j=h.length,k=Array(j);while(j--)k[j]=h[j];while(f=k.pop())if(!f.disabled&&t.test(f.media)){try{d=f.imports,e=d.length}catch(m){e=0}for(j=0;j<e;j++)k.push(d[j]);try{i.push(f.cssText)}catch(m){}}i=y(i.reverse().join("")),c=w(a),b=l(a,i)}),f.attachEvent("onafterprint",function(){z(c),clearTimeout(d._removeSheetTimer),d._removeSheetTimer=setTimeout(g,500)}),a.printShived=!0,a)}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b);var t=/^$|\b(?:all|print)\b/,u="html5shiv",v=!k&&function(){var c=b.documentElement;return typeof b.namespaces!="undefined"&&typeof b.parentWindow!="undefined"&&typeof c.applyElement!="undefined"&&typeof c.removeNode!="undefined"&&typeof a.attachEvent!="undefined"}();s.type+=" print",s.shivPrint=A,A(b)}(this,document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("display-table",function(){var a=window.document,b=a.documentElement,c=a.createElement("div"),d=a.createElement("div"),e=a.createElement("div"),f;return c.style.cssText="display: table",d.style.cssText=e.style.cssText="display: table-cell; padding: 10px",c.appendChild(d),c.appendChild(e),b.insertBefore(c,b.firstChild),f=d.offsetLeft<e.offsetLeft,b.removeChild(c),f});

//some quick support flags for enhanced scripting/styles
(function(win, undefined){
	//define some globals
	var doc 		= win.document,
		docElem 	= doc.documentElement,
		head		= doc.head || doc.getElementsByTagName( "head" )[0] || docElem,
		Modernizr	= win.Modernizr;

	//define "globe" global namespace
	window.globe = {};
	
	// mixins - utility object extender
	globe.extend = function( obj, props ){
		for (var i in props ) {
	        obj[i] = props[i];
	    }
	    return globe;
	};
	
	//support hash
	globe.extend( globe, {
		browser	: {},
		dev		: {},
		support	: {}
	});
	
	//define a few browsers (from conditional comments)
	var docElem = win.document.documentElement;
	globe.browser.ie6 = docElem.className.indexOf( "ie6" ) >= 0;
	globe.browser.ie7 = docElem.className.indexOf( "ie7" ) >= 0;
	globe.browser.ie8 = docElem.className.indexOf( "ie8" ) >= 0;	
	
	//dev mobile assets flag: use for previewing mobile-optimized assets
	globe.dev.mobileOverride = location.search.indexOf("mobile-assets") >= 0;
	
	//callback for dependencies. 
	// You can use isDefined to run code as soon as the document.body is defined, for example, for body-dependent scripts
	// or, for a script that's loaded asynchronously that depends on other scripts, such as jQuery.
	// First argument is the property that must be defined, second is the callback function
	globe.onDefine = function( prop, callback ){
		var callbackStack 	= [];
		
		if( callback ){
			callbackStack.push( callback );
		}
		
		function checkRun(){
			if( eval( prop ) ){
				while( callbackStack[0] && typeof( callbackStack[0] ) === "function" ){
					callbackStack.shift().call( win );
				}
			}
			else{
				setTimeout(checkRun, 15); 
			}
		};
		
		checkRun();
	};
	
	// shortcut of isDefine body-specific 
	globe.bodyready = function( callback ){
		// norlov: the code added  according to BGLOBE-2739
		var complete = false;
		
		var readyCallback = function(){
			if( complete ){ return; }
			complete = true;
			callback.call();
		}
		if ( doc.addEventListener ) {
			doc.addEventListener( "DOMContentLoaded", readyCallback, false );
			//fallback
			win.addEventListener( "load", function(){ readyCallback(); }, false );
		}
		// If IE event model is used
		else if ( doc.attachEvent ) {
			// norlov: commented out according to BGLOBE-2760
			// doc.attachEvent("onreadystatechange", readyCallback );
			//fallback
			win.attachEvent( "onload", function(){ readyCallback(); } );
		}
		
		// norlov: commented out according to BGLOBE-2739 
		// globe.onDefine( "document.body", callback );
	};
	
	/* Asset loading functions:
		- globe.load is a simple script or stylesheet loader
		- scripts can be loaded via the globe.load.script() function
		- Styles can be loaded via the globe.load.style() function, 
		  which accepts an href and an optional media attribute
	*/

	//loading functions available on globe.load
	globe.load = {};

	//define globe.load.style
	globe.load.style = function( href, media ){
		if( !href ){ return; }
		var lk			= doc.createElement( "link" ),
			links		= head.getElementsByTagName("link"),
			lastlink	= links[links.length-1];
			lk.type 	= "text/css";
			lk.href 	= href;
			lk.rel		= "stylesheet";
			if( media ){
				lk.media = media;
			}
			
			//if respond.js is present, be sure to update its media queries cache once this stylesheet loads
			//IE should have no problems with the load event on links, unlike other browsers
			if( "respond" in window ){
				lk.onload = respond.update;
			}
			
			//might need to wait until DOMReady in IE...
			if( lastlink && lastlink.nextSibling ){
				head.insertBefore(lk, lastlink.nextSibling );
			} else {
				head.appendChild( lk );
			}
	};
	
	//define globe.load.script
	globe.load.script = function( src, callback ){
		if( !src ){ return; }
		var script		= doc.createElement( "script" ),
			fc			= head.firstChild;
		
		script.src 	= src;

		//might need to wait until DOMReady in IE...
		if( fc ){
			head.insertBefore(script, fc );
		} else {
			head.appendChild( script );
		}
		
		if( callback ) {
			script.onload = callback;
		}
	};
	
	// load a script, then fire a local callback function when script is finished loading
	globe.load.wait = function( src, callback ) {
		if( !src ) { return; } 
		
		var script		= doc.createElement( "script" ),
			fc			= head.firstChild;
			script.src 	= src;
			
			loadCheck = function() {
				if( this.readyState === 'complete' || this.readyState === 'loaded'){
					callback();
				}
			};
			
			script.onreadystatechange = loadCheck; // IE
			script.onload = callback; // Others
			
			//might need to wait until DOMReady in IE...
			if( fc ){
				head.insertBefore(script, fc );
			} else {
				head.appendChild( script );
			}
	};
	
	//quick element class existence function
	globe.hasClass = function( el, classname ){
		return el.className.indexOf( classname ) >= 0;
	};
	
	//cookie functions - set,get,forget
	globe.cookie = {
		set: function(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		},
		get: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		forget: function(name) {
			createCookie(name, "", -1);
		}
	};
	
	//extend globe.support with some modernizr definitions
	var modernizrInit = typeof Modernizr !== 'undefined';
	globe.extend( globe.support, {
		localStorage		: modernizrInit ? Modernizr.localstorage : false,
		applicationcache	: modernizrInit ? Modernizr.applicationcache : false,
		touch				: modernizrInit ? Modernizr.touch : false,
		displayTable		: modernizrInit ? Modernizr[ "display-table" ] : false
	});
	
	
		
	/*
		- CURRENT ITERATION
		- Function to send click to MSS so that the stats servlet can keep track of the most click (most popular)
		- Method expects at least two object properties, 1) loidEx and 2) portalCommons ( an instance of PortalCommons js from EIDOS )
	*/
	globe.stats = {};
	globe.stats.url = '/Statistics';
	globe.stats.update = function ( obj ){ 
		var counter = "visits",
    	loidEx = obj.loidEx,
		url = globe.stats.url + '?counter=' + escape(counter) + '&loid=' + escape( obj.loidEx ),
		data = "1",
		errorCode = obj.portalCommons.postRemoteHTML(url,data);
		
		if (errorCode == 0){
			//console.log('Thank for sharing on '+counter+'!');
		} else {
			//console.log('Error #' + errorCode );
		}			

	};
	
	
	
	// Future iteration WIP. Depends on new wait() method in this file
	/*
		- Sends click to MSS so that the stats servlet can keep track of the most click (most popular)
		- Method expects at least two object properties, 1) loidEx and 2) portalCommons ( an instance of PortalCommons js from EIDOS )
	*/
	/*
	globe.stats = {};
	globe.stats.url = '/Statistics';
	globe.stats.update = function (){
		var counter = "visits",
    		loidEx = $('meta[name=eomportal-loid]').prop('content'),
			url = globe.stats.url + '?counter=' + escape(counter) + '&loid=' + escape( loidEx ),
			data = "1";
			
			if( PortalCommons ){ // sanity check
				var errorCode = PortalCommons.postRemoteHTML(url,data); // PortalCommons obj gets loaded in globe-controller.js
			}
		
		if (errorCode == 0){
			//console.log('Thank for sharing on '+counter+'!');
		} else {
			//console.log('Error #' + errorCode );
		}
					
	};
	*/
	
	
	// Today's Paper Date Settings
	globe.todaysPaper = {};
	globe.todaysPaper.gallery = {};
	globe.todaysPaper.minDate = new Date(2011, 8, 5);
	globe.todaysPaper.gallery.minDate = new Date(2011, 5, 6);
	
	

	
})(this);


/* Boston Globe JS asset controller 
	March 11, 2014 - Apoire
*/
(function(win, undefined){
	//define some globals
	var doc 		= win.document,
		docElem 	= doc.documentElement,
		head		= doc.head || doc.getElementsByTagName( "head" )[0] || docElem,
		globe	= win.globe,
		isStub	= false;
	
	//testing for our environment - devedit, prdedit, etc. 
	globe.environment = win.location.hostname.split('.')[0];
	
	
	globe.flashSale = doc.getElementById('flashsale');
	// prevent NPE according with BGLOBE-2161  
	if (globe.flashSale != null) {
		globe.flashSale = globe.flashSale.content;
	} else {
		globe.flashSale = false;
	}
	
		
	//native media-query supporting browsers (and IE6+) are "enhanced"
	globe.enhanced 	= (respond.mediaQueriesSupported || globe.browser.ie6 || globe.browser.ie7 || globe.browser.ie8) && !(win.blackberry && !win.WebKitPoint);
	
	//non-mq-supporting browsers, exit here
	if( !globe.enhanced ){ 
		return;
	}

	//From here on -> enhanced experience
	docElem.className += " enhanced enhanced-rendering";
	
	//remove the basic stylesheet
	var basicCSS = doc.getElementById( "basic-css" );
	if( basicCSS ){
		head.removeChild( basicCSS );
	}
	
	//add class to html element for homescreen mode
	if ( win.navigator.standalone ) {
		docElem.className += " standalone";
	}
	
	//define file loading paths
	globe.config = {
		path: {
			"js"	: "/js/",
			"css"	: "/css/",
			"img"	: "_img/"
		}
	};
	
	globe.helpers = {};

    //define advertising urls, defaults
    globe.OAS = {
        url: '//rmedia.boston.com/RealMedia/ads/adstream_sx.ads/',
        sitepage: 'www.bostonglobe.com/news/traffic',
        keyValuePairs: {}
    };
	globe.dfp = {
		networkCode: 61381659
	};
	
globe.analytics = {
		omniture: {},
    };

	//define scripts and style assets for conditional loading
	globe.assets = {
		js: {
			jQuery: "lib/jquery.js",
			uiCore: "lib/jquery-ui-core.min.js",
			touch: "lib/jquery.touch.js",
			resize: "lib/jquery.throttledresize.js",
			ajaxInc: "lib/jquery-ajax-include.js",
			uiWidget: "lib/jquery-ui-widget.min.js",
			uiMouse: "lib/jquery-ui-mouse.min.js",
			uiResizable: "lib/jquery-ui-resizable.min.js",
			transfer: "lib/jquery.transfer.js",
			uiDatepicker: "lib/jquery-ui-datepicker.min.js",
			delayedEnter: "lib/jquery.delayedenter.min.js",
			collapsible: "lib/jquery.collapsible.js",
			carousel: "lib/jquery.carousel.js",
			growlerCarousel: "lib/jquery.carousel4growler.js",
			stickyScroll: "lib/jquery.stickyscroll.js",
			freetrialCountdown: "lib/jquery.countdown.js,freeTrial-setCountdownTime.js",
			json2: "lib/json2.js",
			mbox: "lib/mbox.js",
			
			//Test and Target from MEC
			mboxinit: "mboxinit.js",
			
			//Test and Target init code
			placeholder: "lib/jquery.placeholder.js",
			picturefill: "lib/picturefill.js",
			
			//globe-specific
			common: "globe-common.js",
			masthead: "globe-masthead.js",
			article: "globe-article.js,globe-share-tools.js",
			newcomments: "globe-comments.js",
			gallery: "globe-gallery.js,globe-share-tools.js",
			gallery_legacy: "globe-gallery.js,lib/jquery.mobile-1.0b2pre.min.js,lib/jquery.mobile.pagination.js,globe-share-tools.js",
			magazine: "globe-magazine.js",
			special: "globe-special.js",
			saved: "globe-saved.js",
			savedStorage: "globe-saved-storage.js",
			savedApp: "globe-saved-app.js",
			//savedDrawer: "globe-saved-drawer.js",
			todaysPaper: "globe-todays-paper.js",
			frontPageGallery: "globe-fpgallery.js,lib/jquery.history.js,lib/mobiscroll-2.3.1.custom.min.js",
			adCatalog: "globe-adcatalog.js",
			adInclude: "globe-adinclude.js",
			crossword: "globe-crossword.js",
			contentInclude: "globe-contentinclude.js",
			staff: "globe-staff.js",
			statusmsg: "globe-statusmsg.js",
			memberCenter: "globe-membercenter.js",
			serp: "globe-serp.js",
			regi: "globe-regi.js",
			videoplayer: "globe-videoplayer.js",
			scoreboard: "globe-scoreboard.js",
			videoSection: "globe-toolbar.js,globe-share-tools.js,globe-videosection.js",
			portalCommons: "/commons/js/portal.js",
			analytics: "globe-analytics.js",
			optimizely: "lib/optimizely/optimizely-124489811.js",
			optimizelyCDN: "//cdn.optimizely.com/js/124489811.js",
			deathnotices: "lib/jquery-ui-datepicker.min.js,globe-deathnotices.js",
            slick: "lib/slick.min.js",
            featstrip: "globe-feature-strip.js",
            sports: "globe-sports.js",

			//growler: "globe-growler.js",
			//countdownTimer: "lib/jquery.countdown.min.js",
			//flashSaleSMB: "globe-flashsale-smb.js",
			//flashSaleStub: "globe-flashsale-stub.js"
			fixedSticky: "lib/fixedsticky.js",
			positionSticky: "lib/sticky.js"
		},
		css: {
			fonts: "globe-fonts.css",
			savedDrawer: "globe-saved-drawer.css",
			uiDatepicker: "lib-ui-datepicker.css",
			frontPageGallery: "mobiscroll-2.3.1.custom.min.css,globe-fpgallery.css",
			deathnotices: "lib-ui-datepicker.css,globe-deathnotices.css",
            sports: "globe-sports.css",
      fixedSticky: "fixedsticky.css"
		},
		//these are auto-preloaded
		img: [
			globe.config.path.img + "ajax-loader.gif"
		]
	};


	//start compiling which scripts and styles to load based on various conditions
	var jsToLoad = [
			globe.assets.js.jQuery,
			globe.assets.js.analytics,
			globe.assets.js.resize,
			globe.assets.js.carousel,
			globe.assets.js.collapsible,
			globe.assets.js.stickyScroll,
			globe.assets.js.delayedEnter,
			globe.assets.js.ajaxInc,
			globe.assets.js.statusmsg,
			globe.assets.js.common,
			globe.assets.js.masthead,
			globe.assets.js.picturefill,
		],
		cssToLoad = [];

	//wait for body to be ready for the rest, so we can check the body class and load accordingly
	globe.bodyready(function(){
	
		var body	 	= doc.body,
			tmplTypes	= [
					"home",
					"internal",
					"crossword",
					"article",
					"gallery",
					"staff",
					"membercenter", 
					"regi"
					
					
			],
			sections	= [
				"my-saved",
				"magazine",
				"special",
				"todays-paper",
				"front-page-gallery",
				"search",
				"video",
				"obituaries",
				"deathnotices",
				"ideas"				
			],
			//get longer for loop length
			lLength = tmplTypes.length > sections.length ? tmplTypes.length : sections.length;

		//run one loop to determine type, section
		for( var x=0; x < lLength; x++ ){

			if( tmplTypes[x] ){
				if( globe.hasClass( body, "type-" + tmplTypes[x] ) ){
					globe.tmplType = tmplTypes[x];
				}
			}

			if( sections[x] ){
				if( globe.hasClass( body, "section-" + sections[x] ) ){
					globe.section = sections[x];
				}
			}
			if (globe.hasClass( body, "stub")){
				isStub = true;
			}
		}
		//cache some section/type lookups
		var gallery			=	globe.tmplType		=== "gallery",
			crossword       =   globe.tmplType      === "crossword",
			magazine		=	globe.section		=== "magazine",
			savedApp		=	globe.section		=== "my-saved",
			todaysPaper		=	globe.section		=== "todays-paper",
			fpGallery		=   globe.section		=== "front-page-gallery",
			video			=	globe.section		=== "video",
			loggedIn       	=   globe.cookie.get( "pathAuth" ), // TODO better login detection
			savedDrawer		=	window.screen.width > 480 
							&& !globe.support.touch 
							&& !globe.browser.ie6 
							&& !globe.dev.mobileOverride
							&& !globe.hasClass( body, "no-saved-drawer"),
		    analyticsIndex=-1; // for removing globe-analytics.js on regi pages ...this process WILL be fixed

		//load custom fonts at > 480px
		if( window.screen.width > 480 && !savedApp && !globe.dev.mobileOverride ){
			cssToLoad.push( globe.assets.css.fonts );
			//add non-fontface classname
			docElem.className += " fontface";
		}

		
		//touch event optimizations
		
		// If it's a device that supports touch...
		var touch = globe.support.touch;
		if( touch || savedApp ) {
			jsToLoad.push( globe.assets.js.touch );
		}
		
		//when binding to click for UI behavior scripting, bind to globe.e[click, down, up, move]
		//for improved responsiveness on touch devices
		globe.e = {};
		globe.extend( globe.e, {
			click	: touch ? "vclick"		: "click",
			down		: touch ? "vmousedown"	: "mousedown",
			up		: touch ? "vmouseup"	: "mouseup",
			move		: touch ? "vmousemove"	: "mousemove"
		});
		globe.loggedIn = loggedIn;
		globe.firstClick = false;

		// Article needs the ugc global which is set in the comments JS
		if ( document.getElementById("newcomments")) {
			jsToLoad.push( globe.assets.js.newcomments);
		}
		
		//add article JS 
		if( globe.tmplType === "article" ){
		//TODO change this so feature strip and hs are not loaded globally
			jsToLoad.push( globe.assets.js.article);
            jsToLoad.push( globe.assets.js.featstrip );
            //jsToLoad.push( globe.assets.js.sports );
			// Load Comment JS
			cssToLoad.push( "globe-comments.css" );
            cssToLoad.push( globe.assets.css.sports );
			// Mbox stuff
			//jsToLoad.push(globe.assets.js.mbox);
			//add a class to the HTML element while mbox js is loading
			//docElem.className += " mbox-loading";	
			//globe.load.script( "/js/" + globe.assets.js.mboxinit );

			// jsToLoad.push( globe.assets.js.fixedSticky );
			// cssToLoad.push( globe.assets.css.fixedSticky );

			// jsToLoad.push( globe.assets.js.positionSticky );
			// cssToLoad.push( globe.assets.css.positionSticky );
		}
		
		// add video section page JS and css	
		if ( globe.section === "video" ) {
			jsToLoad.push( globe.assets.js.videoSection );
			cssToLoad.push( "globe-videosection.css" );	
		}
		
		//GROWLER	
		//first we check our environment to remove the growler on QA-EDIT and PRD-EDIT - SEE BGLOBE-2778
		//if (globe.browser.ie6 === true || globe.browser.ie7 === true || globe.browser.ie8 === true) {} // end IE < 9 check
		//else {
		//	if (globe.environment != 'prdedit') {
		//		if ((!globe.loggedIn && isStub === false && globe.tmplType === 'article') || (!globe.loggedIn && globe.tmplType != 'article' && globe.tmplType != 'membercenter' && globe.tmplType != 'staff')) {
		//			jsToLoad.push(globe.assets.js.growlerCarousel);
		//			jsToLoad.push(globe.assets.js.growler);
		//			cssToLoad.push("globe-growler.css");
		//		}
		//	}
		//}
		
		// Article Topper - Following certain section/page rules to load an article topper for things like surveys, other CTAs
		// removed Feb 27th, 2013 as this particular survey has completed ~jm
		//if (!globe.loggedIn && globe.tmplType === 'article' && globe.section === 'ideas'){
		//	jsToLoad.push('globe-article-cta-topper.js');
		//}
				
		//saved section js is loaded for savedApp page
	
		if ( loggedIn && !video) {
		
			globe.saved = {
				drawer : savedDrawer,
				saveArticleUrl	: "/saved/article",
				savedContentUrl : "/_ajax/saved/content.jpt",
				savedPreviewUrl : "/_ajax/saved/preview.jpt"
			};
			
			if ( globe.support.localStorage ){
				jsToLoad.push( globe.assets.js.json2 )
				jsToLoad.push( globe.assets.js.savedStorage )
			}
			
			jsToLoad.push ( globe.assets.js.saved );
			
			if( savedApp ){
				// hack to disable analytics on mysaved app page
				// caz will fix after testing
				// delete jsToLoad[1];
				jsToLoad.push( globe.assets.js.savedApp );
			}
			
			
			//My Saved Drawer and relevant dependencies
			if( savedDrawer && !savedApp){

				jsToLoad = jsToLoad.concat( [
					globe.assets.js.uiCore,
					globe.assets.js.uiWidget,
					globe.assets.js.uiMouse,
					globe.assets.js.uiResizable,
					globe.assets.js.transfer,
					globe.assets.js.savedDrawer
				] );

				cssToLoad.push( globe.assets.css.savedDrawer );
			}

		}

		//today's paper and gallery use the datepicker
		if( todaysPaper || gallery || magazine || fpGallery ){
			
			jsToLoad.push( globe.assets.js.uiDatepicker );
			cssToLoad.push( globe.assets.css.uiDatepicker );

			//today's paper scripting
			if( todaysPaper ){
				jsToLoad.push( globe.assets.js.todaysPaper );
			}

			// magazine scripting
			if( magazine ){
				jsToLoad.push( globe.assets.js.magazine );
			}

			//photo galleries
			if( gallery ){
				jsToLoad.push( globe.assets.js.gallery );
			}
			
			if( fpGallery ){
				cssToLoad.push( globe.assets.css.frontPageGallery );
				jsToLoad.push( globe.assets.js.frontPageGallery );
			}
		}

		// Staff bio pages, mostly for radio-toggle interactions
		if (globe.tmplType === "staff") {
			jsToLoad.push( globe.assets.js.staff );
			cssToLoad.push( "globe-staff.css" );			
		}
		
		// Regi/member center	
		if ( globe.tmplType === "membercenter" ) {
			jsToLoad.push( globe.assets.js.memberCenter );
			jsToLoad.push( globe.assets.js.placeholder );
			cssToLoad.push( "globe-membercenter.css" );
			cssToLoad.push( "globe-login-fullpage.css" );	
		}

		// search engine results page	
		if ( globe.section === "search" ) {
			jsToLoad.push( globe.assets.js.serp );
			cssToLoad.push( "globe-serp.css" );			
			
		}
		
		if (globe.section === "special" ) {
			cssToLoad.push("globe-special.css");
			jsToLoad.push( globe.assets.js.special );
		}
		
		// search engine results page	
		if ( globe.tmplType === "regi" ) {
			jsToLoad.push( globe.assets.js.regi );
			cssToLoad.push( "globe-regi-coldwell.css" );	
		}
		
		if ( globe.section === "deathnotices") {
			jsToLoad.push( globe.assets.js.deathnotices );
			cssToLoad.push( globe.assets.css.deathnotices );
		}
		
		if ( crossword ) {
            jsToLoad.push( globe.assets.js.crossword );
        }
		
		if ( document.getElementById( "video" ) ) { 
  			jsToLoad.push( globe.assets.js.videoplayer );
		}
		
		// newcomments was here
		
		if ( document.getElementById( "bg-scores" ) ) {
			jsToLoad.push( globe.assets.js.scoreboard );
		}
		
		if ( document.getElementById( "freeTrialChallenge" ) ) {
			analyticsIndex = 1;
			jsToLoad.push(globe.assets.js.freetrialCountdown);
			cssToLoad.push("globe-freeTrial.css");
		}
		// WISHABI
		if ( document.getElementById( "circularhub_module_262" ) ) {
			cssToLoad.push('wishabi.css');
			jsToLoad.push('lib/wishabi-carousel.js');
			jsToLoad.push('wishabi-262.js');
		}

        if ( document.getElementById( "circularhub_module_931" ) ) {
            cssToLoad.push('wishabi.css');
            jsToLoad.push('lib/wishabi-carousel.js');
            jsToLoad.push('wishabi-931.js');
        }

        if ( document.getElementById( "circularhub_module_261" ) ) {
            cssToLoad.push('wishabi.css');
            jsToLoad.push('lib/wishabi-carousel.js');
            jsToLoad.push('wishabi-261.js');
        }
		//FLASHSALE
		//if (!globe.loggedIn && globe.flashSale == 'true') {
		//	cssToLoad.push('globe-flashsale-smb.css');
		//	jsToLoad.push(globe.assets.js.countdownTimer);
		//	jsToLoad.push(globe.assets.js.flashSaleSMB);
		//	if (globe.tmplType === 'article') {
		//		cssToLoad.push('globe-flashsale-stub.css');
		//		jsToLoad.push(globe.assets.js.flashSaleStub);
		//	}
		//}
		if (analyticsIndex > -1) {
			jsToLoad.splice(analyticsIndex, 1);
		}
		//ad loader comes last
		if( !savedApp ){
			jsToLoad.push( globe.assets.js.adCatalog + "," + globe.assets.js.adInclude );
		}

		jsToLoad.push( globe.assets.js.contentInclude );
        //added by cks on 6.23 for feature strip

		//load enhanced assets
		globe.load.script( globe.config.path.js + jsToLoad.join(",") );
		
		if( cssToLoad.length ){
			globe.load.style( globe.config.path.css + cssToLoad.join(",") );
		}
	});
	
	
	//scroll to top, hide address bar on mobile devices - 1 for android, 0 for the rest
	// DISABLED! 
	/*
	if( !location.hash ){
		
		//scroll to top
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				return "scrollTop" in doc.body ? doc.body.scrollTop : 1;
			};
			
		
		//reset to 0 on bodyready, if needed
		globe.bodyready(function(){
			var scrollTop = getScrollTop();
			window.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
		});
		
		window.onload = function(){
			setTimeout(function(){
				//reset to hide addr bar at onload
				if( getScrollTop() < 20 ) {
					window.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		};
	}
	*/
	// WebReflection Solution for ensuring domready fires when dynamically appending jQuery in older browsers
	(function(h,a,c,k){if(h[a]==null&&h[c]){h[a]="loading";h[c](k,c=function(){h[a]="complete";h.removeEventListener(k,c,!1)},!1)}})(document,"readyState","addEventListener","DOMContentLoaded");


})( this );


