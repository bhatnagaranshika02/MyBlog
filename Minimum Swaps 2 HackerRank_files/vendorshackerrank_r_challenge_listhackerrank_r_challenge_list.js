(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+VcZ":function(t,e,n){"use strict";var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r,a,u,c,l,h=n("cDcd"),p=s(h),f=s(n("17x9")),d=n("MTB2"),v=s(n("TSYQ")),y=s(n("YZDV")),b="transform",m=!0,g=0,T=-1,w=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,n){for(var o=!0;o;){var s=t,i=e,r=n;o=!1,null===s&&(s=Function.prototype);var a=Object.getOwnPropertyDescriptor(s,i);if(void 0!==a){if("value"in a)return a.value;var u=a.get;if(void 0===u)return;return u.call(r)}var c=Object.getPrototypeOf(s);if(null===c)return;t=c,e=i,n=r,o=!0,a=c=void 0}}(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t,n),this.handleResize=this.handleResize.bind(this),this.handleScroll=this.handleScroll.bind(this),this.handleScrollStart=this.handleScrollStart.bind(this),this.delta=0,this.stickyTop=0,this.stickyBottom=0,this.frozen=!1,this.skipNextScrollEvent=!1,this.scrollTop=-1,this.bottomBoundaryTarget,this.topTarget,this.subscribers,this.state={top:0,bottom:0,width:0,height:0,x:0,y:0,topBoundary:0,bottomBoundary:1/0,status:0,pos:0,activated:!1}}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"getTargetHeight",value:function(t){return t&&t.offsetHeight||0}},{key:"getTopPosition",value:function(t){return"string"==typeof(t=t||this.props.top||this.props.topTarget||0)&&(this.topTarget||(this.topTarget=r.querySelector(t)),t=this.getTargetHeight(this.topTarget)),t}},{key:"getTargetBottom",value:function(t){if(!t)return-1;var e=t.getBoundingClientRect();return this.scrollTop+e.bottom}},{key:"getBottomBoundary",value:function(t){var e=t||this.props.bottomBoundary;return"object"==typeof e&&(e=e.value||e.target||0),"string"==typeof e&&(this.bottomBoundaryTarget||(this.bottomBoundaryTarget=r.querySelector(e)),e=this.getTargetBottom(this.bottomBoundaryTarget)),e&&e>0?e:1/0}},{key:"reset",value:function(){this.setState({status:0,pos:0})}},{key:"release",value:function(t){this.setState({status:1,pos:t-this.state.y})}},{key:"fix",value:function(t){this.setState({status:2,pos:t})}},{key:"updateInitialDimension",value:function(t){t=t||{};var e=this.outerElement.getBoundingClientRect(),n=this.innerElement.getBoundingClientRect(),o=e.width||e.right-e.left,s=n.height||n.bottom-n.top,i=e.top+this.scrollTop;this.setState({top:this.getTopPosition(t.top),bottom:Math.min(this.state.top+s,T),width:o,height:s,x:e.left,y:i,bottomBoundary:this.getBottomBoundary(t.bottomBoundary),topBoundary:i})}},{key:"handleResize",value:function(t,e){this.props.shouldFreeze()||(T=e.resize.height,this.updateInitialDimension(),this.update())}},{key:"handleScrollStart",value:function(t,e){this.frozen=this.props.shouldFreeze(),this.frozen||(this.scrollTop===e.scroll.top?this.skipNextScrollEvent=!0:(this.scrollTop=e.scroll.top,this.updateInitialDimension()))}},{key:"handleScroll",value:function(t,e){this.skipNextScrollEvent?this.skipNextScrollEvent=!1:(g=e.scroll.delta,this.scrollTop=e.scroll.top,this.update())}},{key:"update",value:function(){if(!this.props.enabled||this.state.bottomBoundary-this.state.topBoundary<=this.state.height||0===this.state.width&&0===this.state.height)0!==this.state.status&&this.reset();else{var t=g,e=this.scrollTop+this.state.top,n=this.scrollTop+this.state.bottom;if(e<=this.state.topBoundary)this.reset();else if(n>=this.state.bottomBoundary)this.stickyBottom=this.state.bottomBoundary,this.stickyTop=this.stickyBottom-this.state.height,this.release(this.stickyTop);else if(this.state.height>T-this.state.top)switch(this.state.status){case 0:this.release(this.state.y),this.stickyTop=this.state.y,this.stickyBottom=this.stickyTop+this.state.height;case 1:this.stickyBottom=this.stickyTop+this.state.height,t>0&&n>this.stickyBottom?this.fix(this.state.bottom-this.state.height):t<0&&e<this.stickyTop&&this.fix(this.state.top);break;case 2:var o=!0,s=this.state.pos,i=this.state.height;if(t>0&&s===this.state.top)this.stickyTop=e-t,this.stickyBottom=this.stickyTop+i;else if(t<0&&s===this.state.bottom-i)this.stickyBottom=n-t,this.stickyTop=this.stickyBottom-i;else if(s!==this.state.bottom-i&&s!==this.state.top){var r=s+i-this.state.bottom;this.stickyBottom=n-t+r,this.stickyTop=this.stickyBottom-i}else o=!1;o&&this.release(this.stickyTop)}else this.fix(this.state.top);this.delta=t}}},{key:"componentWillReceiveProps",value:function(t){this.updateInitialDimension(t),this.update()}},{key:"componentDidUpdate",value:function(t,e){var n=this;e.status!==this.state.status&&this.props.onStateChange&&this.props.onStateChange({status:this.state.status}),t.enabled!==this.props.enabled&&(this.props.enabled?this.setState({activated:!0},(function(){n.updateInitialDimension(),n.update()})):this.setState({activated:!1},(function(){n.reset()})))}},{key:"componentWillUnmount",value:function(){for(var t=(this.subscribers||[]).length-1;t>=0;t--)this.subscribers[t].unsubscribe()}},{key:"componentDidMount",value:function(){l||(l=window,r=document,u=r.documentElement,a=r.body,T=l.innerHeight||u.clientHeight,(c=window.Modernizr)&&c.prefixed&&(m=c.csstransforms3d,b=c.prefixed("transform"))),this.scrollTop=a.scrollTop+u.scrollTop,this.props.enabled&&(this.setState({activated:!0}),this.updateInitialDimension(),this.update()),this.subscribers=[(0,d.subscribe)("scrollStart",this.handleScrollStart.bind(this),{useRAF:!0}),(0,d.subscribe)("scroll",this.handleScroll.bind(this),{useRAF:!0,enableScrollInfo:!0}),(0,d.subscribe)("resize",this.handleResize.bind(this),{enableResizeInfo:!0})]}},{key:"translate",value:function(t,e){m&&this.props.enableTransforms&&this.state.activated?t[b]="translate3d(0,"+Math.round(e)+"px,0)":t.top=e+"px"}},{key:"shouldComponentUpdate",value:function(t,e){return!this.props.shouldFreeze()&&(0,y.default)(this,t,e)}},{key:"render",value:function(){var t,e=this,n={position:2===this.state.status?"fixed":"relative",top:2===this.state.status?"0px":"",zIndex:this.props.innerZ},o={};this.translate(n,this.state.pos),0!==this.state.status&&(n.width=this.state.width+"px",o.height=this.state.height+"px");var s=(0,v.default)("sticky-outer-wrapper",this.props.className,(i(t={},this.props.activeClass,2===this.state.status),i(t,this.props.releasedClass,1===this.state.status),t)),r=this.props.children;return p.default.createElement("div",{ref:function(t){e.outerElement=t},className:s,style:o},p.default.createElement("div",{ref:function(t){e.innerElement=t},className:"sticky-inner-wrapper",style:n},"function"==typeof r?r({status:this.state.status}):r))}}]),e}(h.Component);w.displayName="Sticky",w.defaultProps={shouldFreeze:function(){return!1},enabled:!0,top:0,bottomBoundary:0,enableTransforms:!0,activeClass:"active",releasedClass:"released",onStateChange:null},w.propTypes={enabled:f.default.bool,top:f.default.oneOfType([f.default.string,f.default.number]),bottomBoundary:f.default.oneOfType([f.default.object,f.default.string,f.default.number]),enableTransforms:f.default.bool,activeClass:f.default.string,releasedClass:f.default.string,onStateChange:f.default.func,shouldFreeze:f.default.func,innerZ:f.default.oneOfType([f.default.string,f.default.number])},w.STATUS_ORIGINAL=0,w.STATUS_RELEASED=1,w.STATUS_FIXED=2,t.exports=w},"3OWR":function(t,e,n){var o=n("MrPd"),s=n("juv8"),i=n("LsHQ"),r=n("MMmD"),a=n("6sVZ"),u=n("7GkX"),c=Object.prototype.hasOwnProperty,l=i((function(t,e){if(a(e)||r(e))s(e,u(e),t);else for(var n in e)c.call(e,n)&&o(t,n,e[n])}));t.exports=l},LsHQ:function(t,e,n){var o=n("EA7m"),s=n("mv/X");t.exports=function(t){return o((function(e,n){var o=-1,i=n.length,r=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(r=t.length>3&&"function"==typeof r?(i--,r):void 0,a&&s(n[0],n[1],a)&&(r=i<3?void 0:r,i=1),e=Object(e);++o<i;){var u=n[o];u&&t(e,u,o,r)}return e}))}},MTB2:function(t,e,n){"use strict";n.r(e);var o=n("3OWR"),s=n.n(o),i=n("uF6l"),r=n.n(i),a=!1;if("undefined"!=typeof window)try{var u=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,u)}catch(t){}var c=a,l={connections:{},EE:new r.a,enableResizeInfo:!1,enableScrollInfo:!1,listeners:{},removers:[],supportPassiveEvent:c},h=l.supportPassiveEvent,p={capture:!1,passive:!1};var f=function(t,e,n,o){var i="addEventListener",r="removeEventListener",a=e,u=!!h&&s()({},p,o);return!t.addEventListener&&t.attachEvent&&(i="attachEvent",r="detachEvent",a="on"+e),t[i](a,n,u),{remove:function(){t[r](e,n)}}},d=!1;if("undefined"!=typeof navigator){var v=navigator.userAgent.match(/MSIE (\d+\.\d+)/);v&&(d=parseFloat(v[1],10)<9)}var y=d,b=n("uM7l"),m=n.n(b),g=n("DzJC"),T=n.n(g),w=n("vN+2"),k=n.n(w),x=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var E={width:0,height:0},_={delta:0,top:0},B={axisIntention:"",startX:0,startY:0,deltaX:0,deltaY:0},z=function(t){var e={x:0,y:0},n=document.body,o=document.documentElement;return t.pageX||t.pageY?(e.x=t.pageX,e.y=t.pageY):(e.x=t.clientX+n.scrollLeft+o.scrollLeft,e.y=t.clientY+n.scrollTop+o.scrollTop),e},O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};S(this,t);var n=(e.mainType||"").toLowerCase(),o=(e.subType||"").toLowerCase();this.mainType=n,this.subType=o,this.type=n+o.charAt(0).toUpperCase()+o.slice(1)||"",this.scroll=_,this.resize=E,this.touch=B}return x(t,[{key:"update",value:function(t){var e=this.mainType,n=this.subType,o=document.documentElement;if(l.enableScrollInfo&&("scroll"===e||"touchmove"===e)){var s=o.scrollTop+document.body.scrollTop;s!==this.scroll.top&&(this.scroll.delta=s-this.scroll.top,this.scroll.top=s)}if(l.enableResizeInfo&&"resize"===e&&(this.resize.width=window.innerWidth||o.clientWidth,this.resize.height=window.innerHeight||o.clientHeight),l.enableTouchInfo&&t.touches&&("touchstart"===e||"touchmove"===e||"touchend"===e)){var i=void 0,r=void 0,a=void 0;"touchstart"===e||"start"===n?(i=z(t.touches[0]),this.touch.axisIntention="",this.touch.startX=i.x,this.touch.startY=i.y,this.touch.deltaX=0,this.touch.deltaY=0):"touchmove"===e&&(i=z(t.touches[0]),this.touch.deltaX=i.x-this.touch.startX,this.touch.deltaY=i.y-this.touch.startY,""===this.touch.axisIntention&&(r=Math.abs(this.touch.deltaX),a=Math.abs(this.touch.deltaY),r>5&&r>=a?this.touch.axisIntention="x":a>5&&a>r&&(this.touch.axisIntention="y")))}}}]),t}(),I=n("xEkU"),C=n.n(I),R=Date.now||function(){return(new Date).getTime()};var j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=void 0,o=void 0,s=0,i=0,r=function r(){var a=R();e-(a-s)<=0?(s=a,i=0,t.apply(n,o)):i=C()(r)};return function(){n=this,o=arguments,i||(i=C()(r))}},P=l.connections,L=l.EE,D=l.listeners,A=l.removers,M=void 0,F=void 0,N=void 0,X=0;function Y(t){return t.id||"target-id-"+X++}function H(t,e,n,o){return L.on(t,e||k.a,n),P[o=o||t]=(P[o]||0)+1,{_type:t,_cb:e,_ctx:n,unsubscribe:function(){if(this._type){L.removeListener(t,e,n),P[o]--,0===P[o]&&(D[o].remove(),D[o]=void 0),this._type=void 0,this._cb=void 0,this._ctx=void 0;for(var s=A.length-1;s>=0;s--){if(A[s]===this){A.splice(s,1);break}}}}}}function U(t,e,n){return function(o,s,i,r){var a=i.context,u=i.target,c=u&&Y(u),l=c?":"+c:"",h=e+"Start:"+o+l,p=e+"End:"+o+l,d=e+":"+o+l,v=H(n+":"+o+l,s,a,d);if(A.push(v),D[d])return v;var b={start:new O({mainType:e,subType:"start"}),main:new O({mainType:e}),end:new O({mainType:e,subType:"end"})};"raf"===o?(o=16,k=j(k)):o>0&&(k=T()(k,o));var g=void 0;function w(t){b.end.update(t),L.emit(p,t,b.end),g=null}function k(t){g||(b.start.update(t),L.emit(h,t,b.start)),clearTimeout(g),b.main.update(t),L.emit(d,t,b.main),g=y?setTimeout((function(){w(m()(t))}),o+100):setTimeout(w.bind(null,t),o+100)}return D[d]=f(u||t,e,k,r),v}}function Z(t,e){return function(n,o,s,i){var r=s.context,a=s.target,u=a&&Y(a),c=e+":0"+(u?":"+u:""),l=H(c,o,r);if(A.push(l),D[c])return l;var h=new O({mainType:e});return D[c]=f(a||t,e,(function(t){h.update(t),L.emit(c,t,h)}),i),l}}"undefined"!=typeof window&&(N=(M=(F=window).document||document).body);var V={scrollStart:U(F,"scroll","scrollStart"),scrollEnd:U(F,"scroll","scrollEnd"),scroll:U(F,"scroll","scroll"),resizeStart:U(F,"resize","resizeStart"),resizeEnd:U(F,"resize","resizeEnd"),resize:U(F,"resize","resize"),visibilitychange:Z(M,"visibilitychange"),touchmoveStart:U(N,"touchmove","touchmoveStart"),touchmoveEnd:U(N,"touchmove","touchmoveEnd"),touchmove:U(N,"touchmove","touchmove"),touchstart:Z(N,"touchstart"),touchend:Z(N,"touchend")};var W=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.useRAF||!1,s=parseInt(n.throttleRate,10),i=n.eventOptions;return isNaN(s)&&(s=50),o&&(s="raf"),y&&(s=0),l.enableScrollInfo=l.enableScrollInfo||n.enableScrollInfo||!1,l.enableResizeInfo=l.enableResizeInfo||n.enableResizeInfo||!1,l.enableTouchInfo=l.enableTouchInfo||n.enableTouchInfo||!1,V[t](s,e,n,i)},J=l.removers;var Q=function(t,e){for(var n=void 0,o=J.length-1;o>=0;o-=1)(n=J[o])._cb===e&&n._type.indexOf(t)>=0&&(n.unsubscribe(),J.splice(o,1))};n.d(e,"listen",(function(){return K})),n.d(e,"subscribe",(function(){return $})),n.d(e,"unsubscribe",(function(){return tt}));var q="undefined"!=typeof window;function G(){0}var K=q?f:G,$=q?W:G,tt=q?Q:G},YZDV:function(t,e,n){"use strict";var o=n("rzV7");t.exports=function(t,e,n){return!o(t.props,e)||!o(t.state,n)}},t8Fj:function(t,e,n){t.exports=n("+VcZ")},uF6l:function(t,e,n){"use strict";var o=Object.prototype.hasOwnProperty,s="~";function i(){}function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function a(t,e,n,o,i){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new r(n,o||t,i),u=s?s+e:e;return t._events[u]?t._events[u].fn?t._events[u]=[t._events[u],a]:t._events[u].push(a):(t._events[u]=a,t._eventsCount++),t}function u(t,e){0==--t._eventsCount?t._events=new i:delete t._events[e]}function c(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(s=!1)),c.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)o.call(t,e)&&n.push(s?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},c.prototype.listeners=function(t){var e=s?s+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var o=0,i=n.length,r=new Array(i);o<i;o++)r[o]=n[o].fn;return r},c.prototype.listenerCount=function(t){var e=s?s+t:t,n=this._events[e];return n?n.fn?1:n.length:0},c.prototype.emit=function(t,e,n,o,i,r){var a=s?s+t:t;if(!this._events[a])return!1;var u,c,l=this._events[a],h=arguments.length;if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),h){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,n),!0;case 4:return l.fn.call(l.context,e,n,o),!0;case 5:return l.fn.call(l.context,e,n,o,i),!0;case 6:return l.fn.call(l.context,e,n,o,i,r),!0}for(c=1,u=new Array(h-1);c<h;c++)u[c-1]=arguments[c];l.fn.apply(l.context,u)}else{var p,f=l.length;for(c=0;c<f;c++)switch(l[c].once&&this.removeListener(t,l[c].fn,void 0,!0),h){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,e);break;case 3:l[c].fn.call(l[c].context,e,n);break;case 4:l[c].fn.call(l[c].context,e,n,o);break;default:if(!u)for(p=1,u=new Array(h-1);p<h;p++)u[p-1]=arguments[p];l[c].fn.apply(l[c].context,u)}}return!0},c.prototype.on=function(t,e,n){return a(this,t,e,n,!1)},c.prototype.once=function(t,e,n){return a(this,t,e,n,!0)},c.prototype.removeListener=function(t,e,n,o){var i=s?s+t:t;if(!this._events[i])return this;if(!e)return u(this,i),this;var r=this._events[i];if(r.fn)r.fn!==e||o&&!r.once||n&&r.context!==n||u(this,i);else{for(var a=0,c=[],l=r.length;a<l;a++)(r[a].fn!==e||o&&!r[a].once||n&&r[a].context!==n)&&c.push(r[a]);c.length?this._events[i]=1===c.length?c[0]:c:u(this,i)}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=s?s+t:t,this._events[e]&&u(this,e)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=s,c.EventEmitter=c,t.exports=c},uM7l:function(t,e,n){var o=n("OBhP");t.exports=function(t){return o(t,4)}}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/vendors~hackerrank_r_challenge_list~hackerrank_r_challenge_list_v2~hackerrank_r_interview~hackerrank~76813109-1a4185264c.js.map