(function(){var f=void 0,g=true,i=null,j=false,k,l=this;function aa(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function n(a,b){var c="",d=ba(encodeURIComponent(a));d.splice(b||5,d.length);p(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function ba(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,h=271733878,s=3285377520,o=[],m,w,x,H,u,E=Math.ceil((a.length/4+2)/16),K=[E],z=0,r;z<E;z++){K[z]=[];for(m=0;m<16;m++)K[z][m]=a.charCodeAt(z*64+m*4)<<24|a.charCodeAt(z*64+m*4+1)<<16|a.charCodeAt(z*64+m*4+2)<<8|a.charCodeAt(z*64+m*4+3)}z=(a.length-1)*8;a=E-1;K[a][14]=Math.floor(z/Math.pow(2,32));K[a][15]=z&4294967295;for(z=0;z<E;z++){for(r=0;r<16;r++)o[r]=K[z][r];
for(r=16;r<80;r++)o[r]=(o[r-3]^o[r-8]^o[r-14]^o[r-16])<<1|(o[r-3]^o[r-8]^o[r-14]^o[r-16])>>>31;a=c;m=d;w=e;x=h;H=s;for(r=0;r<80;r++)u=Math.floor(r/20),u=(a<<5|a>>>27)+(u==0?m&w^~m&x:u==1?m^w^x:u==2?m&w^m&x^w&x:m^w^x)+H+b[u]+o[r]&4294967295,H=x,x=w,w=m<<30|m>>>2,m=a,a=u;c=c+a&4294967295;d=d+m&4294967295;e=e+w&4294967295;h=h+x&4294967295;s=s+H&4294967295}return[c,d,e,h,s]}
function ca(){var a=i;p(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return a=b.href,a=a.substring(a.indexOf("/",9)),j});return a}function q(a,b){return function(){a.apply(b,arguments)}}function t(a,b,c){a.addEventListener?a.addEventListener(b,c,j):a.attachEvent&&a.attachEvent("on"+b,c)}function v(a){return typeof a==="number"}function y(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function A(){return(new Date).getTime()}
function p(a,b){if((!!a&&a.constructor===Object)===g)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===j)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===j)break}}
function da(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var h=0,s=a.length;h<=s;h++)c[0][h]=h;for(var o,m,w,d=1;d<=e;d++)for(h=1;h<=s;h++)o=d-1,m=h-1,w=c[o][m],b.charAt(o)==a.charAt(m)?c[d][h]=w:(m=c[d][m]+1,o=c[o][h]+1,w+=2,c[d][h]=Math.min(m,o,w));return c[b.length][a.length]};function B(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace("+"," "),p(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function C(a,b,c){var d="",e=l.location.href.split("?");e.length&&(e=B(e[1]),b=c||b,e[b]&&(d="&"+a+"="+e[b]));return d};function ea(a){p(document.getElementsByTagName("script"),function(b){if(b.src.match(/chartbeat.js/))return b=B(b.src.split("?")[1]),a.uid=a.uid||b.uid,a.domain=a.domain||b.domain,j})}function D(a,b,c){return a[c]?"&g"+b+"="+encodeURIComponent(a[c]):""}function fa(a){var b=[];p(a,function(a,d){d.charAt(0)=="_"&&b.push(d+"="+a)});return b.length?"&"+b.join("&"):""};var F={};F.c=function(a){var b=l._sf_async_config;if(!a&&b&&b.noCookies)return i;if(F.c.A!==f)return F.c.A;var a=A()+"",c,d;try{if((d=l.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return F.c.A=d}catch(e){}return F.c.A=i};F.b=function(a){var b=F.c();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&A()>c)?(F.remove(a),""):b.getItem(a)||""};
F.create=function(a,b,c){var d=F.c();if(d){var e=new Date;e.setTime(A()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(h){}}};F.remove=function(a){var b=F.c();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function G(){var a=document.createElement("script");a.async=g;a.src=(l.location.protocol||"http:")+"//static.chartbeat.com/js/inpage.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}function ga(a){if(/[\/|\.]chartbeat\.com$/.test(a.origin)){var b=F.c(g),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),G())}};var I={},J=1;function L(a,b,c){J++;I[a]=I[a]||{};I[a][J]=[b,c];return J}function M(a){if(typeof a==="string")I[a]=f,delete I[a];else if(v(a)){var b=g;p(I,function(c){p(c,function(d,e){if(parseInt(e,10)===a)return c[e]=f,delete c[e],b=j});return b})}}function N(a,b){if(I[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];p(I[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};var O={};
O.d=function(){O.n?O.s("pageload"):(O.fa=[{target:l,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:l,event:"resize"},{target:document.body,event:"mousedown"}],O.u=i,O.L=j,O.m=i,O.U={},p(O.fa,function(a){var b=a.event;t(a.target,b,function(a){O.s.call(O,b,a)})}),L("focus",function(){O.s("focus")}),O.s("pageload"),t(document.body,"click",function(a){a:if(a=a||window.event){if(a=a.target||a.srcElement,a.tagName!=="A")if(a.parentNode)if(a.parentNode.tagName==="A")a=
a.parentNode;else if(a.parentNode.parentNode&&a.parentNode.parentNode.tagName==="A")a=a.parentNode.parentNode;else{a=f;break a}else{a=f;break a}}else a=f;a&&N("anchor",a)}),O.n=g)};O.ka=function(){var a,b=O.U.keydown;if(b===f)return j;b=A()-b;return b<=(a||15E3)&&b>=0};O.O=100;O.s=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}O.Ia(a);O.u===i?O.da():O.L=g};O.Ia=function(a){O.U[a]=A()};
O.da=function(){O.u=l.setTimeout(O.ma,O.O);N("activity");O.m!==i&&l.clearTimeout(O.m);O.m=l.setTimeout(function(){N("inactive");l.clearTimeout(O.m);O.m=i},5E3+O.O)};O.ma=function(){l.clearTimeout(O.u);O.u=i;if(O.L)O.L=j,O.da()};var P={};P.la=function(){try{P.create("_cb_test","1",1);var a=P.b("_cb_test");P.remove("_cb_test");return a==="1"}catch(b){return j}};P.b=function(a){a+="=";var b="";p(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),j});return b};P.create=function(a,b,c){var d=l._sf_async_config;if(!d||!d.noCookies)d=new Date,d.setTime(A()+c*1E3),document.cookie=a+"="+b+("; expires="+d.toGMTString())+"; path=/"};
P.remove=function(a){P.b(a)&&P.create(a,"",-86400)};function Q(a){this.t=a||"";this.na=F.c()!==i||P.la();this.K=j;ha(this)}k=Q.prototype;k.isSupported=function(){return this.na};
function ha(a){if(!P.b("_cb_ls")){var b=F.c()!==i,c=P.b("_SUPERFLY_nosample");c&&p(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_nosample",c,600,g)});var d=P.b("_chartbeat3");d&&(a.create("_v__chartbeat3",d,2592E3,g),P.remove("_chartbeat3"));b&&((b=P.b("_chartbeat2"))&&a.create("_chartbeat2",b,2592E3,g),(b=P.b("_chartbeat_uuniq"))&&a.create("_chartbeat_uuniq",b,2592E3,g),(b=P.b("_chartbeat5"))&&a.create("_chartbeat5",b,60,g));P.create("_cb_ls","1",2592E3)}}
k.create=function(a,b,c,d){a=d?a:this.t+a;(F.c()?F:P).create(a,b,c);F.c()&&P.create(a,b,c)};k.update=function(a,b,c,d,e,h){a=d?a:this.t+a;e=typeof e==="string"?e:"::";d=(d=this.b(a,g))?d.split(e):[];v(h)&&d.length>=h&&d.splice(0,d.length-h+1);d.push(b);this.create(a,d.join(e),c,g)};
k.b=function(a,b){var a=b?a:this.t+a,c=(F.c()?F:P).b(a);if(!c&&F.c()&&(c=P.b(a))&&P.b("_cb_ls")){this.K=g;var d;switch(a){case "_SUPERFLY_nosample":d=600;break;case "_chartbeat4":d=3600;break;case "_cb_cp":d=3600;break;default:d=2592E3}F.create(a,c,d)}return c};k.remove=function(a,b){a=b?a:this.t+a;(F.c()?F:P).remove(a);F.c()&&P.remove(a)};function ia(a){var b,c;b="pageYOffset";c="scrollTop";if(a){var d,e;d=d||"*";e=e||document;if("querySelectorAll"in e)a=e.querySelectorAll(d+"[data-cb-scroll-element]");else{a=[];d=e.getElementsByTagName(d);for(e=d.length;e--;)d[e].getAttribute("data-cb-scroll-element")&&a.push(d[e])}if(a&&a.length)return a[0][c]}if(v(l[b]))return l[b];else if(document.body&&document.body[c])return document.body[c];else if(document.documentElement[c])return document.documentElement[c];return 0}
function ja(){var a=document,a=a[a.compatMode==="CSS1Compat"?"documentElement":"body"].clientHeight||0;window.innerHeight&&(a=Math.min(window.innerHeight,a));return a}function R(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0};var S=function(){var a,b;p(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof document[a]==="boolean")return b=c,j});var c={};if(b!==f)c.T=a,c.N=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),c.w=b+"visibilitychange";return c}();S.d=function(){if(!S.n)S.r=S.aa(),S.w&&document.addEventListener&&document.addEventListener(S.w,S.Da,j),S.P("focus","onfocusin",S.D),S.P("blur","onfocusout",S.Y),S.r&&S.D(),S.n=g};
S.La=function(){return S.r};S.D=function(){S.r=g;N("focus")};S.Y=function(){S.r=j;N("blur")};S.P=function(a,b,c){l.addEventListener?l.addEventListener(a,c,j):document.attachEvent&&document.attachEvent(b,c)};S.aa=function(){var a=g;document.hasFocus&&(a=document.hasFocus());var b=j;S.T&&(b=document[S.T]);return a&&!b};S.Da=function(){S.aa()?S.D():S.Y()};var T={ha:{IDLE:0,Ka:1,Ja:2,ga:3},f:0};T.d=function(){if(!T.n)L("activity",T.qa,T),L("inactive",T.ta,T),L("focus",T.sa,T),L("blur",T.ra,T),T.n=g};T.pa=function(){return T.f};T.qa=function(){T.f===1?T.g(3):T.f===0&&T.g(2)};T.ta=function(){T.f===3?T.g(1):T.f===2&&T.g(0)};T.sa=function(){(T.f===0||T.f===2)&&T.g(3)};T.ra=function(){T.f===3?T.g(2):T.f===1&&T.g(0)};T.g=function(a){T.f=a;N("state",a)};function ka(a,b){this.R=a||f;this.Z=b||f;this.i=this.M=0}k=ka.prototype;k.d=function(){this.i=this.M=0;this.p=i;this.Fa=L("state",this.S,this);this.S(T.pa())};k.total=function(){this.M+=this.i;this.i=0;return this.M};k.S=function(a){l.clearInterval(this.p);this.p=i;if(a===T.ha.ga)this.p=l.setInterval(q(this.va,this),1E3)};k.va=function(){if(this.R===f||this.R())this.i++,this.Z&&this.Z()};k.terminate=function(){l.clearInterval(this.p);this.p=i;M(this.Fa)};function U(){this.a=l._sf_async_config||{};this.oa=q(this.Ba,this);this.l=[];this.e=new Q(this.Ga);this.k=j;this.h=new ka;this.Ca=q(this.G,this);t(l,"unload",this.Ca);la(this)||this.d()}function la(a){if(S.N&&document[S.N]==="prerender"){a.k=g;var b=q(function(){if(this.k&&document[S.N]!=="prerender")this.k=j,this.d(),V(this),window.setTimeout(function(){document.removeEventListener(S.w,b,j)},100)},a);document.addEventListener(S.w,b,j);return g}return j}k=U.prototype;
k.d=function(){this.C=this.j=0;this.J=A();this.ca=n(W(this,j));this.H=g;this.V=72E5;var a=+this.a.sessionLength;if(!isNaN(a)&&this.Ga!=="_p_")this.V=a*6E4;this.h.d();T.d();O.d();S.d();this.o=0;this.ja=L("activity",this.za,this)};function V(a){if(!a.e.b("_SUPERFLY_nosample")&&!a.k)a.xa?a.I():(a.xa=g,!l._sf_async_config&&!l._cbq?(a.F=q(a.I,a),t(l,"load",a.F)):a.I())}k.I=function(){var a=l._sf_startpt,b=l._sf_endpt;if(v(a))this.$=v(b)?b-a:A()-a;O.d();this.wa=setInterval(q(this.W,this),15E3);this.W()};
k.W=function(){var a=this.h.i,a=this.a.reading&&+this.a.reading||a>0;if(this.C<this.j&&!a)this.C++;else if(a?this.j=0:ma(this),this.C=0,this.l.push(0),this.l.length>18&&this.l.shift(),A()-this.J>=this.V)this.terminate();else{var a=this.a,b=X(this);this.o=Math.max(this.o,b);var c=Math.round((A()-this.J)/600)/100,d=0,e=0,h=0,s=this.h.i;O.ka()?e=1:this.a.reading&&+this.a.reading||s>0||c<0.09?d=1:h=1;var o="",m="",w="",x="",H="",u=na(this);if(this.H){this.H=j;var o=(u?"&v=":"&r=")+encodeURIComponent(this.q||
document.referrer||""),m="&i="+oa(this),E=this.a.hudTrackable;E!==f&&(w="&L="+(E?"1":"0"));if(u&&(u=pa(this)))o="&v="+encodeURIComponent(u.path),x="&K="+u.left+"::"+u.top,u.X>1&&(x+="&l1="+u.X);a.alias&&(H="&PA="+encodeURIComponent(a.alias));this.q&&(o+="&vp=1")}u=this.$?"&b="+this.$:"";E=this.z?"&A="+this.z:"";b=(l.location.protocol||"http:")+"//"+a.pingServer+"/ping?h="+encodeURIComponent(a.domain)+"&p="+encodeURIComponent(a.path)+"&u="+this.v+"&d="+encodeURIComponent(this.B)+"&g="+a.uid+D(a,0,
"sections")+D(a,1,"authors")+D(a,3,"sponsorName")+D(a,4,"type")+(!a.noCookies&&this.e.isSupported()?"&n="+this.ya:"&nc=1")+(this.Q?"&f="+this.Q:"")+"&c="+c+"&x="+b+"&m="+this.o+"&y="+R("Height")+"&o="+R("Width")+"&w="+ja()+"&j="+Math.round((this.j+2)*15E3/1E3)+"&R="+d+"&W="+e+"&I="+h+"&E="+this.h.total()+"&e="+s+o+x+H+u+E+C("C","utm_campaign",a.campaignTag)+C("M","utm_medium",a.mediumTag)+"&t="+this.ca+"&V=34"+qa(this)+m+w+"&tz="+(new Date).getTimezoneOffset();c=this.e;d=c.K;c.K=j;ra(this,b+(d?"&l=1":
"")+fa(a)+"&_")}};function ra(a,b){if(!a.k){var c;c=new Image(1,1);c.onerror=a.oa;c.src=b}}k.Ba=function(){this.l.push(1);var a=0;p(this.l,function(b){a+=b});a<3?(this.H=g,ma(this)):(this.terminate(),this.e.create("_SUPERFLY_nosample","1",600))};k.G=function(){};k.za=function(){var a=X(this);this.o=Math.max(this.o,a)};function X(a){return ia(!!a.a.scrollElement)}function ma(a){var b=a.j,b=b?Math.min(b*2,16):1;a.j=b}
k.ea=function(a,b){if(!this.k)this.G(),this.terminate(),this.q=l.location.protocol+"//"+this.a.domain+this.a.path,this.a.path=a,b&&(this.a.title=b),this.d(),V(this)};function na(a){if(a.q)return g;a=(document.referrer||"").indexOf("://"+l.location.host+"/");return a!=-1&&a<9}function oa(a){a=a.a.title.slice(0,100);return encodeURIComponent(a)}
function W(a,b){var c=l.navigator,d=l.window.screen,e=[c.userAgent,c.platform,(new Date).getTimezoneOffset(),d.width+d.height+d.colorDepth];p(c.plugins,function(a){e.push(a.name+a.description+a.filename+a[0].type)});if(b===j)c=l.performance,e=e.concat([c&&c.now?c.now():"",encodeURIComponent(a.q||document.referrer||""),document.title,l.location.href,A(),R("Width"),R("Height"),aa()]);return e.join()}
function qa(a){var b="",c=a.e.b("_chartbeat4");c&&(p(c.split("::"),function(a){b+="&z="+encodeURIComponent(a)}),a.e.remove("_chartbeat4"));return b}k.terminate=function(){this.h.terminate();M(this.ja);if(this.F!==f){var a=this.F,b=l;b.removeEventListener?b.removeEventListener("load",a,j):b.detachEvent&&b.detachEvent("onload",a)}clearInterval(this.wa)};function Y(){U.call(this);for(var a=q(this.ba,this),b=l._cbq||[];b.length;)a(b.shift());l._cbq={push:a};L("anchor",this.Aa,this);"postMessage"in window&&t(l,"message",q(this.ua,this))}(function(){var a=U;function b(){}b.prototype=a.prototype;Y.Ha=a.prototype;Y.prototype=new b;Y.prototype.constructor=Y})();k=Y.prototype;
k.d=function(){Y.Ha.d.call(this);this.z=i;ea(this.a);var a=l.location,b=this.a;b.pingServer=b.pingServer||"ping.chartbeat.net";b=this.a;b.title=b.title||document.title;b=this.a;b.domain=b.domain||a.host;var b=this.a,c;a:{c=i;if(this.a.useCanonical&&(c=ca()))break a;var d=l.location;c=d.pathname+(d.search||"");c=c.replace(/PHPSESSID=[^&]+/,"");var e=/&utm_[^=]+=[^&]+/ig;(d=e.exec(d.search))&&(c=c.replace(e,""));e=/\?utm_[^=]+=[^&]+(.*)/i;(d=e.exec(c))&&(c=c.replace(e,d[1]!=""?"?"+d[1]:""))}b.path=
b.path||c;this.B=a.host.replace(/^www\./,"");this.a.domain=this.a.domain.replace(/^www\./,"");a=(this.e.b("_chartbeat2",g)||"").split(".");a.length>4&&(a=[]);b=A();e="1";d=a&&+a[2];c=a&&a[3];if(a&&d&&c)if(e=Math.abs((y(b)-y(d))/864E5)){e=Math.min(e,16)-1;for(d="";e--;)d+=0;e=(c+d+"1").slice(-16)}else e=c;c=e;e=(this.e.b("_chartbeat2",g)||"").split(".");d=A()-+(e[1]||0);this.ya=e[0]&&d>18E5?0:1;a[0]||(a[0]=this.a.utoken||n(W(this,j),3),a[1]=b);a[2]=b;a[3]=c;this.v=a[0];this.Ea=a.join(".");this.e.create("_chartbeat2",
this.Ea,2592E3,g);this.a.utoken=this.v;var h;b=+a[1];c=+a[2];if((a=a[3])&&b&&c)h=(Math.min((Math.abs((y(c)-y(b))/864E5)||0)+1,16,a.length)-1).toString(16),h+=("0000"+parseInt(a,2).toString(16)).slice(-4);this.Q=h;h=this.e.b("_chartbeat_uuniq")==="3";this.e.create("_chartbeat_uuniq","3",2592E3);h||ra(this,"//ping.chartbeat.net/uuniq?u="+this.v+"&u2="+n(W(this,g)))};k.ia=function(a){this.z=a};
k.G=function(){this.e.update("_chartbeat4",["t="+this.ca,"E="+this.h.total(),"x="+X(this),"c="+Math.round((A()-this.J)/600)/100,"y="+R("Height"),"w="+ja()].join("&"),3600)};
k.ua=function(a){var b=this.a;if(a.origin==="http://"+(b.playerdomain||this.B)){var c=a.data;typeof c==="string"&&c.indexOf("cbqpush::")===0?(a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.ba(a))):c=="cbdata?"&&(b="domain="+encodeURIComponent(b.domain)+"&path="+encodeURIComponent(b.path)+"&title="+oa(this)+"&referrer="+encodeURIComponent(this.q||document.referrer||"")+"&internal="+(na(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.B)+"&utoken="+this.v,a.source.postMessage(b,
"*"))}};k.ba=function(a){this.a[a[0]]=a[1];this.j=0};
k.Aa=function(a){var b,c=a.href||"",c=c.replace(/-{2,}/g,"-");b=c;var d="",e="";if(b){var e=document.createElement("a"),h=l.location;b.indexOf("http")!==0&&b.indexOf("javascript")!==0&&(b=h.protocol+b);e.href=b;d=e.hostname;e=e.protocol;if(d==="")d=h.hostname;if(e==="")e=h.protocol;e==="javascript:"&&(d="")}if(!(d!==l.location.hostname||e==="javascript:")){b=a;d=b.offsetLeft;a=b.offsetTop;h=j;for(e=b.offsetParent;b&&b!==f&&b!==document.body;){if(b===e)d+=b.offsetLeft,a+=b.offsetTop,e=b.offsetParent;
var s=b,o=f;o=l.getComputedStyle?(s=l.getComputedStyle(s,i))&&(s.position||s.getPropertyValue("position")):s.currentStyle?s.currentStyle.position:s.style&&s.style.position;if((o||"")==="fixed"){h=g;break}b=b.parentElement}h&&(d+=0,a+=0);b=d;this.e.update("_chartbeat5",[b,a,encodeURIComponent(this.a.path),encodeURIComponent(c)].join(","),60,j,f,5)}};
function pa(a){var b=a.e.b("_chartbeat5");if(!b)return i;var b=b.split("::"),c=b.length,d,e;if(c===1)d=b[0].split(","),e=0;else{var h,s=l.location.href;p(b,function(a,b){var c=a.split(","),x=da(s,decodeURIComponent(c[3]));if(x===0)return d=c,e=b,j;if(h===f||x<h)h=x,d=c,e=b})}b.splice(e,1);a.e.create("_chartbeat5",b.join("::"),60);return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),X:c}};if(!l.pSUPERFLY){var Z=new Y;l.pSUPERFLY=Z;Y.prototype.virtualPage=Y.prototype.ea;Y.prototype.activity=Y.prototype.ia;var $=l.pSUPERFLY_pub;$&&$.virtualPage&&(Y.prototype.virtualPage=function(){var a=arguments.length?Array.prototype.slice.call(arguments,0):[];$.virtualPage();Y.prototype.ea.apply(Z,a);$.d();V($)});$&&$.addEngagedAdFilter&&(Y.prototype.addEngagedAdFilter=q($.addEngagedAdFilter,$));$&&$.refreshAd&&(Y.prototype.refreshAd=q($.refreshAd,$));V(Z);var sa=F.c(g);sa&&(t(l,"message",ga),sa.getItem("_cb_ip")&&
G())};})();
