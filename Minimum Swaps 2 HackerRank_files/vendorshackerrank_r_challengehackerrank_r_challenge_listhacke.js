(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+KS9":function(e,t,n){"use strict";n("a1Th"),n("h7Nl"),n("I5cv");var a=n("lwsE"),r=n.n(a),i=n("W8MJ"),c=n.n(i),o=n("PJYZ"),s=n.n(o),l=n("7W2i"),u=n.n(l),p=n("a1gu"),f=n.n(p),m=n("Nsbk"),d=n.n(m),h=n("lSNA"),v=n.n(h),y=n("cDcd"),b=n.n(y),N=n("17x9"),w=n.n(N),S=n("wd/R"),E=n.n(S),k=n("xNbf"),R=n("eOGF");function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var g=function(e){u()(a,e);var t,n=(t=a,function(){var e,n=d()(t);if(T()){var a=d()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f()(this,e)});function a(e){var t;return r()(this,a),t=n.call(this,e),v()(s()(t),"state",void 0),v()(s()(t),"intervalObject",void 0),v()(s()(t),"onTimerEnd",(function(){t.props.onTimerEnd()})),t.state={timeRemaining:""},t.intervalObject=null,t}return c()(a,[{key:"componentDidMount",value:function(){var e=this;this.setNewTimeDiff(),this.intervalObject=setInterval((function(){e.setNewTimeDiff()}),1e3)}},{key:"componentWillUnmount",value:function(){this.clearIntervalObj()}},{key:"clearIntervalObj",value:function(){this.intervalObject&&clearInterval(this.intervalObject)}},{key:"setNewTimeDiff",value:function(){var e=this.props.finishTimeMs-(new Date).getTime();if(e<=0)return this.clearIntervalObj(),void this.onTimerEnd();var t=E.a.duration(e);if(t.days()>0)this.setState({timeRemaining:b.a.createElement("span",{className:"countdowntimer-days"},"".concat(t.days()," ").concat(t.days()>1?"days":"day"))});else{var n=Object(R.q)(t.hours()),a=Object(R.q)(t.minutes()),r=Object(R.q)(t.seconds()),i=b.a.createElement("span",{className:"countdowntimer-clock"},b.a.createElement("span",{className:"countdowntimer-hours"},n),":",b.a.createElement("span",{className:"countdowntimer-minutes"},a),":",b.a.createElement("span",{className:"countdowntimer-seconds"},r));this.setState({timeRemaining:i})}}},{key:"render",value:function(){var e=this.state.timeRemaining,t=this.props.className;return""===e?b.a.createElement(k.a,{className:"countdowntimer-loader",diameter:16}):b.a.createElement("span",{className:t},this.state.timeRemaining)}}]),a}(b.a.Component);v()(g,"propTypes",{finishTimeMs:w.a.number.isRequired,onTimerEnd:w.a.func}),v()(g,"defaultProps",{onTimerEnd:function(){}}),t.a=g},"5VZm":function(e,t,n){"use strict";var a=n("cDcd"),r=n.n(a),i=n("17x9"),c=n.n(i),o=n("O766"),s=n("eOGF");n("UTUX");function l(e){var t=e.open,n=e.onClose,a=e.title,i=e.youtubeId,c=e.className;return r.a.createElement(o.a,{open:t,onClose:n,title:a,theme:"theme-m",modalClass:"video-modal",className:c},r.a.createElement("div",{className:"frame-wrapper"},r.a.createElement("iframe",{id:"player-".concat(i),className:"youtube-frame block-center",type:"text/html",src:"https://www.youtube.com/embed/".concat(i,"?").concat(Object(s.W)({enablejsapi:1,version:3,autoplay:1,rel:0,origin:"https://www.hackerrank.com"})),frameBorder:"0",allowFullScreen:!0})))}l.propTypes={open:c.a.bool,onClose:c.a.func,title:c.a.string.isRequired,youtubeId:c.a.string.isRequired},t.a=l},F39y:function(e,t,n){},H4Rz:function(e,t,n){},UTUX:function(e,t,n){},nB3z:function(e,t,n){"use strict";n("a1Th"),n("h7Nl"),n("I5cv");var a=n("lwsE"),r=n.n(a),i=n("W8MJ"),c=n.n(i),o=n("PJYZ"),s=n.n(o),l=n("7W2i"),u=n.n(l),p=n("a1gu"),f=n.n(p),m=n("Nsbk"),d=n.n(m),h=n("lSNA"),v=n.n(h),y=n("cDcd"),b=n("vN+2"),N=n.n(b);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var S=function(e){u()(a,e);var t,n=(t=a,function(){var e,n=d()(t);if(w()){var a=d()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f()(this,e)});function a(){var e;r()(this,a);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return e=n.call.apply(n,[this].concat(i)),v()(s()(e),"currentPromise",null),v()(s()(e),"failedCount",0),v()(s()(e),"state",{optimisticState:e.props.initialValue}),v()(s()(e),"handleToggle",(function(t){var n=!e.state.optimisticState;e.setState({optimisticState:n});var a=e.props.action(n,t);e.currentPromise=a,a.catch((function(t){e.failedCount++,e.currentPromise===a&&e.setState((function(t){return{optimisticState:e.failedCount%2==0?t.optimisticState:!t.optimisticState}}),(function(){e.failedCount=0}))}))})),e}return c()(a,[{key:"render",value:function(){return this.props.children(this.state.optimisticState,this.handleToggle)}}]),a}(y.Component);v()(S,"defaultProps",{initialValue:!1,action:N.a}),t.a=S},oOaF:function(e,t,n){"use strict";var a=n("pVnL"),r=n.n(a),i=n("QILm"),c=n.n(i),o=n("cDcd"),s=n.n(o),l=n("TSYQ"),u=n.n(l),p=n("vN+2"),f=n.n(p),m=n("nB3z"),d=n("OEX3");n("F39y");function h(e){var t=e.initialValue,n=e.className,a=e.label,i=e.onClick,o=c()(e,["initialValue","className","label","onClick"]);return s.a.createElement(m.a,{initialValue:t,action:i},(function(e,t){var i=e?"star-icon-filled":"",c=e?"ui-icon-star-filled":"ui-icon-star";return s.a.createElement(d.c,r()({"aria-label":a(e),className:"star-button",onClick:t},o),s.a.createElement("i",{className:u()(n,"star-icon",c,i)}))}))}h.defaultProps={initialValue:!1,label:function(e){return e?"Unstar":"Star"},onClick:f.a},t.a=h},ve2B:function(e,t,n){"use strict";n("a1Th"),n("h7Nl"),n("I5cv");var a=n("lwsE"),r=n.n(a),i=n("W8MJ"),c=n.n(i),o=n("7W2i"),s=n.n(o),l=n("a1gu"),u=n.n(l),p=n("Nsbk"),f=n.n(p),m=n("lSNA"),d=n.n(m),h=n("cDcd"),v=n.n(h),y=n("TSYQ"),b=n.n(y),N=n("OEX3"),w=n("3N0A"),S=n("Q9J+");n("H4Rz");function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=function(e){s()(a,e);var t,n=(t=a,function(){var e,n=f()(t);if(E()){var a=f()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return u()(this,e)});function a(){return r()(this,a),n.apply(this,arguments)}return c()(a,[{key:"componentDidUpdate",value:function(){this.shouldHideScrollBar()?S.a.hideScrollBars():S.a.showScrollBars()}},{key:"componentWillUnmount",value:function(){S.a.showScrollBars()}},{key:"shouldShowOverlay",value:function(){var e=this.props,t=e.open,n=e.overlay;return t&&n}},{key:"shouldHideScrollBar",value:function(){var e=this.props,t=e.open,n=e.type,a=e.popupTarget;return(this.shouldShowOverlay()||t&&"full-screen"===n)&&!a}},{key:"renderPopup",value:function(){var e=this.props,t=e.children,n=e.type,a=e.handleClose,r=e.className,i=e.popupTarget,c=this.shouldShowOverlay();return v.a.createElement(w.a,{target:i},v.a.createElement("div",{className:b()("fab-popup",r)},c&&v.a.createElement("div",{className:"fab-popup-overlay",onClick:a}),v.a.createElement("div",{className:b()("fab-popup-content","fab-popup-".concat(n))},t)))}},{key:"renderPopupHandle",value:function(){var e=this.props,t=e.icon,n=e.handleOpen,a=e.active;return v.a.createElement(N.d,{className:b()("fab-popup-handle",a?"active":"default"),onClick:n},v.a.createElement("i",{className:b()(t,"fab-popup-icon")}))}},{key:"render",value:function(){return this.props.open?this.renderPopup():this.renderPopupHandle()}}]),a}(h.PureComponent);d()(k,"defaultProps",{type:"menu",overlay:!0,active:!1}),t.a=k}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/vendors~hackerrank_r_challenge~hackerrank_r_challenge_list~hackerrank_r_challenge_list_v2~hackerrank~c0d6b344-b19f91e2ed.js.map