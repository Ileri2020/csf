import{w as L,r as q,j as s,v as Y,B as P}from"./main-2ixx5rR2.js";import{S as B}from"./scroll-area-BMZc7fvt.js";import{c as _}from"./cont-DBa8LpLJ.js";import"./index-BdQq_4o_.js";const T={about:"Community Soul Fishers is an evangelical group called to fish disciples for Christ and his kingdom.",vision:"Our vision is to take the word to the ends of the earth, that all souls might be saved at the end of the world.",stats:[{num:18,text:"Evangelism Locations"},{num:200,text:"Converts"},{num:5,text:"Sponsors"},{num:10,text:"Platforms"}]};var I={},C=function(){return C=Object.assign||function(n){for(var e,r=1,a=arguments.length;r<a;r++)for(var t in e=arguments[r])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},C.apply(this,arguments)},$=function(){function n(e,r,a){var t=this;this.endVal=r,this.options=a,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(i){t.startTime||(t.startTime=i);var l=i-t.startTime;t.remaining=t.duration-l,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(l,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(l,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(l/t.duration);var o=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=o?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),l<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(i){var l,o,u,c,f=i<0?"-":"";l=Math.abs(i).toFixed(t.options.decimalPlaces);var h=(l+="").split(".");if(o=h[0],u=h.length>1?t.options.decimal+h[1]:"",t.options.useGrouping){c="";for(var g=3,b=0,p=0,x=o.length;p<x;++p)t.options.useIndianSeparators&&p===4&&(g=2,b=1),p!==0&&b%g==0&&(c=t.options.separator+c),b++,c=o[x-p-1]+c;o=c}return t.options.numerals&&t.options.numerals.length&&(o=o.replace(/[0-9]/g,function(m){return t.options.numerals[+m]}),u=u.replace(/[0-9]/g,function(m){return t.options.numerals[+m]})),f+t.options.prefix+o+u+t.options.suffix},this.easeOutExpo=function(i,l,o,u){return o*(1-Math.pow(2,-10*i/u))*1024/1023+l},this.options=C(C({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(r),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(i){return i()})},this.handleScroll(this)))}return n.prototype.handleScroll=function(e){if(e&&window&&!e.once){var r=window.innerHeight+window.scrollY,a=e.el.getBoundingClientRect(),t=a.top+window.pageYOffset,i=a.top+a.height+window.pageYOffset;i<r&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>i||t>r)&&!e.paused&&e.reset()}},n.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var r=e-this.startVal;if(Math.abs(r)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var a=this.countDown?1:-1;this.endVal=e+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},n.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},n.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},n.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},n.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},n.prototype.printValue=function(e){var r;if(this.el){var a=this.formattingFn(e);!((r=this.options.plugin)===null||r===void 0)&&r.render?this.options.plugin.render(this.el,a):this.el.tagName==="INPUT"?this.el.value=a:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=a:this.el.innerHTML=a}},n.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},n.prototype.validateValue=function(e){var r=Number(e);return this.ensureNumber(r)?r:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},n.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},n}();const H=Object.freeze(Object.defineProperty({__proto__:null,CountUp:$},Symbol.toStringTag,{value:"Module"})),W=L(H);Object.defineProperty(I,"__esModule",{value:!0});var d=q,K=W;function J(n,e){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,t,i,l,o=[],u=!0,c=!1;try{if(i=(r=r.call(n)).next,e!==0)for(;!(u=(a=i.call(r)).done)&&(o.push(a.value),o.length!==e);u=!0);}catch(f){c=!0,t=f}finally{try{if(!u&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw t}}return o}}function M(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,a)}return r}function A(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?M(Object(r),!0).forEach(function(a){Z(n,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(r,a))})}return n}function Q(n,e){if(typeof n!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var a=r.call(n,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function X(n){var e=Q(n,"string");return typeof e=="symbol"?e:String(e)}function Z(n,e,r){return e=X(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function D(){return D=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},D.apply(this,arguments)}function ee(n,e){if(n==null)return{};var r={},a=Object.keys(n),t,i;for(i=0;i<a.length;i++)t=a[i],!(e.indexOf(t)>=0)&&(r[t]=n[t]);return r}function k(n,e){if(n==null)return{};var r=ee(n,e),a,t;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)a=i[t],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}function te(n,e){return ne(n)||J(n,e)||re(n,e)||ae()}function ne(n){if(Array.isArray(n))return n}function re(n,e){if(n){if(typeof n=="string")return z(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(n,e)}}function z(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=n[r];return a}function ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ie=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function y(n){var e=d.useRef(n);return ie(function(){e.current=n}),d.useCallback(function(){for(var r=arguments.length,a=new Array(r),t=0;t<r;t++)a[t]=arguments[t];return e.current.apply(void 0,a)},[])}var se=function(e,r){var a=r.decimal,t=r.decimals,i=r.duration,l=r.easingFn,o=r.end,u=r.formattingFn,c=r.numerals,f=r.prefix,h=r.separator,g=r.start,b=r.suffix,p=r.useEasing,x=r.useGrouping,m=r.useIndianSeparators,E=r.enableScrollSpy,v=r.scrollSpyDelay,S=r.scrollSpyOnce,j=r.plugin;return new K.CountUp(e,o,{startVal:g,duration:i,decimal:a,decimalPlaces:t,easingFn:l,formattingFn:u,numerals:c,separator:h,prefix:f,suffix:b,plugin:j,useEasing:p,useIndianSeparators:m,useGrouping:x,enableScrollSpy:E,scrollSpyDelay:v,scrollSpyOnce:S})},oe=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],le={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},G=function(e){var r=Object.fromEntries(Object.entries(e).filter(function(w){var F=te(w,2),R=F[1];return R!==void 0})),a=d.useMemo(function(){return A(A({},le),r)},[e]),t=a.ref,i=a.startOnMount,l=a.enableReinitialize,o=a.delay,u=a.onEnd,c=a.onStart,f=a.onPauseResume,h=a.onReset,g=a.onUpdate,b=k(a,oe),p=d.useRef(),x=d.useRef(),m=d.useRef(!1),E=y(function(){return se(typeof t=="string"?t:t.current,b)}),v=y(function(w){var F=p.current;if(F&&!w)return F;var R=E();return p.current=R,R}),S=y(function(){var w=function(){return v(!0).start(function(){u?.({pauseResume:j,reset:V,start:N,update:O})})};o&&o>0?x.current=setTimeout(w,o*1e3):w(),c?.({pauseResume:j,reset:V,update:O})}),j=y(function(){v().pauseResume(),f?.({reset:V,start:N,update:O})}),V=y(function(){v().el&&(x.current&&clearTimeout(x.current),v().reset(),h?.({pauseResume:j,start:N,update:O}))}),O=y(function(w){v().update(w),g?.({pauseResume:j,reset:V,start:N})}),N=y(function(){V(),S()}),U=y(function(w){i&&(w&&V(),S())});return d.useEffect(function(){m.current?l&&U(!0):(m.current=!0,U())},[l,m,U,o,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),d.useEffect(function(){return function(){V()}},[V]),{start:N,pauseResume:j,reset:V,update:O,getCountUp:v}},ue=["className","redraw","containerProps","children","style"],ce=function(e){var r=e.className,a=e.redraw,t=e.containerProps,i=e.children,l=e.style,o=k(e,ue),u=d.useRef(null),c=d.useRef(!1),f=G(A(A({},o),{},{ref:u,startOnMount:typeof i!="function"||e.delay===0,enableReinitialize:!1})),h=f.start,g=f.reset,b=f.update,p=f.pauseResume,x=f.getCountUp,m=y(function(){h()}),E=y(function(j){e.preserveValue||g(),b(j)}),v=y(function(){if(typeof e.children=="function"&&!(u.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}x()});d.useEffect(function(){v()},[v]),d.useEffect(function(){c.current&&E(e.end)},[e.end,E]);var S=a&&e;return d.useEffect(function(){a&&c.current&&m()},[m,a,S]),d.useEffect(function(){!a&&c.current&&m()},[m,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),d.useEffect(function(){c.current=!0},[]),typeof i=="function"?i({countUpRef:u,start:h,reset:g,update:b,pauseResume:p,getCountUp:x}):d.createElement("span",D({className:r,ref:u,style:l},t),typeof e.start<"u"?x().formattingFn(e.start):"")},de=I.default=ce;I.useCountUp=G;const xe=()=>s.jsxs(Y.section,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.5,duration:.6,ease:"easeIn"}},className:"justify-center w-[100vw] overflow-clip /px-2",children:[s.jsxs("section",{className:"md:max-w-[1200px] md:mx-auto md:h-[80vh]",children:[s.jsx("div",{className:"flex flex-col md:flex-row md:justify-between mx-5 md:mx-10 mt-5",children:s.jsxs("span",{className:"text-4xl font-semibold",children:["About ",s.jsx("span",{className:"text-accent",children:"us"})]})}),s.jsxs("div",{className:"flex flex-col md:flex-row mx-4 md:m-5",children:[s.jsx("div",{className:"flex-1 mx-2 md:mx-10 my-5 text-secondary-foreground text-center md:text-start",children:T.about}),s.jsx("div",{className:"flex-1 grid grid-cols-2 gap-5 max-w-[580px] my-5",children:T.stats.map((n,e)=>s.jsxs("div",{className:"bg-secondary rounded-lg p-5 shadow-md shadow-accent/50",children:[s.jsx(de,{end:n.num,duration:5,delay:2,separator:"",className:"text-3xl md:text-5xl text-outline font-extrabold text-background hover:text-accent py-5"}),s.jsx("div",{className:"text-lg font-semibold text-secondary-foreground",children:n.text})]},e))})]})]}),s.jsxs("div",{className:"flex flex-col md:flex-row md:h-[80vh] items-center md:justify-center max-w-6xl mx-auto",children:[s.jsxs("div",{className:"flex flex-col items-center justify-center md:flex-1 mt-10",children:[s.jsxs("div",{className:"text-center text-4xl font-semibold md:mb-10",children:["Meet the ",s.jsx("span",{className:"text-accent",children:"team"})]}),s.jsx(P,{variant:"outline",className:"border-accent text-accent text-lg  bg-transparent hover:text-slate-100 hidden md:flex",children:"volunteer with us"})]}),s.jsx(B,{className:"h-[41vh] md:h-[45vh] max-w-[720px]  self-center my-10 md:mx-20",children:s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5",children:_.team.map((n,e)=>s.jsxs("div",{className:"bg-secondary max-w-[170px] h-[20vh] rounded-lg p-5 flex flex-col justify-center",children:[s.jsx("div",{className:"font-semibold text-center text-lg",children:n.name}),s.jsx("div",{className:"text-center text-sm text-accent",children:n.position})]},e))})}),s.jsx(P,{variant:"outline",className:"border-accent text-accent text-lg  bg-transparent hover:text-slate-100 max-w-[220px] flex md:hidden",children:"volunteer with us"})]}),s.jsxs("div",{className:"flex flex-col /md:flex-row bg-secondary md:bg-background rounded-lg mt-10 /py-10 max-w-6xl md:mx-auto md:px-5",children:[s.jsxs("div",{className:"flex flex-col items-center justify-center flex-1",children:[s.jsxs("div",{className:"text-center text-4xl font-semibold my-10",children:["Meet our ",s.jsx("span",{className:"text-accent",children:"partners"})]}),s.jsx(P,{variant:"outline",className:"border-accent text-accent bg-transparent hover:text-slate-100 hidden",children:"I will become a sponsor"})]}),s.jsx("div",{className:"grid grid-cols-2 /md:grid-cols-3 md:flex md:gap-5 max-w-[720px] my-5 md:mx-20 self-center",children:_.partners.map((n,e)=>s.jsx("div",{children:s.jsx("img",{src:n.uri,alt:"",className:"w-[150px] h-[120px] md:mx-5"})},e))}),s.jsx(P,{variant:"outline",className:"border-accent text-accent text-lg bg-transparent hover:text-slate-100 self-center my-5 flex md:hidden",children:"I will become a sponsor"})]})]});export{xe as default};