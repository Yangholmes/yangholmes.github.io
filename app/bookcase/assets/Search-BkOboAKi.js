import{x as ke,y as Ce,al as $e,d as V,r as w,C as Fe,L as $,K as te,am as Re,au as Ee,w as re,p as Te,aV as Ie,Q as W,az as q,aA as G,v as x,aW as Pe,T as oe,P as He,ap as Ne,aX as ae,aB as De,W as Me,U as Oe,V as Le,H as c,aY as X,E as z,G as T,_ as D,aM as Ue,ay as We,J as ne,$ as Q,a0 as Z,aZ as _e,M as Ae,aO as je,aN as Ve,a_ as Xe,a1 as M,t as Ye,u as se,c as s,N as U,B as K,S as _,b as A,i as qe,a as j,f as Ke,o as Je,g as Ge,e as Qe,I as Ze}from"./index-0Mlx3S5e.js";import{u as et}from"./useTRouter-BDvSFWYc.js";import{B as tt,a as rt}from"./BasicTopBar-Ct7oUnoo.js";import{D as ot}from"./DeckerLayout-BuapQpuV.js";import{d as ie}from"./vue-utils-CJ11dMaq.js";import{N as L,a as at}from"./FormItem-C2u61emH.js";import{N as nt}from"./InputGroup-VUQGsxq_.js";import{E as st}from"./Empty-e_r3bT4q.js";import{B as it,a as lt}from"./BarcodeDecker-l_bvWwNV.js";import{f as ee}from"./get-DwC-OxB2.js";import"./utils-RLKUjF92.js";import"./Popconfirm-BOF0T1rY.js";import"./Popover-CrdUJfTm.js";function ct(e){const{modalColor:o,textColor1:r,textColor2:u,boxShadow3:t,lineHeight:b,fontWeightStrong:h,dividerColor:m,closeColorHover:g,closeColorPressed:i,closeIconColor:a,closeIconColorHover:y,closeIconColorPressed:S,borderRadius:F,primaryColorHover:H}=e;return{bodyPadding:"16px 24px",borderRadius:F,headerPadding:"16px 24px",footerPadding:"16px 24px",color:o,textColor:u,titleTextColor:r,titleFontSize:"18px",titleFontWeight:h,boxShadow:t,lineHeight:b,headerBorderBottom:`1px solid ${m}`,footerBorderTop:`1px solid ${m}`,closeIconColor:a,closeIconColorHover:y,closeIconColorPressed:S,closeSize:"22px",closeIconSize:"18px",closeColorHover:g,closeColorPressed:i,closeBorderRadius:F,resizableTriggerColorHover:H}}const dt=ke({name:"Drawer",common:Ce,peers:{Scrollbar:$e},self:ct}),ut=V({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const o=w(!!e.show),r=w(null),u=Fe(ae);let t=0,b="",h=null;const m=w(!1),g=w(!1),i=$(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:a,mergedRtlRef:y}=te(e),S=Re("Drawer",y,a),F=n,H=l=>{g.value=!0,t=i.value?l.clientY:l.clientX,b=document.body.style.cursor,document.body.style.cursor=i.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",E),document.body.addEventListener("mouseleave",F),document.body.addEventListener("mouseup",n)},I=()=>{h!==null&&(window.clearTimeout(h),h=null),g.value?m.value=!0:h=window.setTimeout(()=>{m.value=!0},300)},d=()=>{h!==null&&(window.clearTimeout(h),h=null),m.value=!1},{doUpdateHeight:k,doUpdateWidth:O}=u,R=l=>{const{maxWidth:v}=e;if(v&&l>v)return v;const{minWidth:B}=e;return B&&l<B?B:l},P=l=>{const{maxHeight:v}=e;if(v&&l>v)return v;const{minHeight:B}=e;return B&&l<B?B:l};function E(l){var v,B;if(g.value)if(i.value){let C=((v=r.value)===null||v===void 0?void 0:v.offsetHeight)||0;const N=t-l.clientY;C+=e.placement==="bottom"?N:-N,C=P(C),k(C),t=l.clientY}else{let C=((B=r.value)===null||B===void 0?void 0:B.offsetWidth)||0;const N=t-l.clientX;C+=e.placement==="right"?N:-N,C=R(C),O(C),t=l.clientX}}function n(){g.value&&(t=0,g.value=!1,document.body.style.cursor=b,document.body.removeEventListener("mousemove",E),document.body.removeEventListener("mouseup",n),document.body.removeEventListener("mouseleave",F))}Ee(()=>{e.show&&(o.value=!0)}),re(()=>e.show,l=>{l||n()}),Te(()=>{n()});const f=$(()=>{const{show:l}=e,v=[[G,l]];return e.showMask||v.push([De,e.onClickoutside,void 0,{capture:!0}]),v});function p(){var l;o.value=!1,(l=e.onAfterLeave)===null||l===void 0||l.call(e)}return Ie($(()=>e.blockScroll&&o.value)),W(Me,r),W(Oe,null),W(Le,null),{bodyRef:r,rtlEnabled:S,mergedClsPrefix:u.mergedClsPrefixRef,isMounted:u.isMountedRef,mergedTheme:u.mergedThemeRef,displayed:o,transitionName:$(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:p,bodyDirectives:f,handleMousedownResizeTrigger:H,handleMouseenterResizeTrigger:I,handleMouseleaveResizeTrigger:d,isDragging:g,isHoverOnResizeTrigger:m}},render(){const{$slots:e,mergedClsPrefix:o}=this;return this.displayDirective==="show"||this.displayed||this.show?q(x("div",{role:"none"},x(Pe,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>x(oe,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>q(x("div",He(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${o}-drawer`,this.rtlEnabled&&`${o}-drawer--rtl`,`${o}-drawer--${this.placement}-placement`,this.isDragging&&`${o}-drawer--unselectable`,this.nativeScrollbar&&`${o}-drawer--native-scrollbar`]}),[this.resizable?x("div",{class:[`${o}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${o}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?x("div",{class:[`${o}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):x(Ne,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${o}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[G,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:ht,cubicBezierEaseOut:ft}=X;function mt({duration:e="0.3s",leaveDuration:o="0.2s",name:r="slide-in-from-bottom"}={}){return[c(`&.${r}-transition-leave-active`,{transition:`transform ${o} ${ht}`}),c(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${ft}`}),c(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),c(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),c(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),c(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:bt,cubicBezierEaseOut:vt}=X;function gt({duration:e="0.3s",leaveDuration:o="0.2s",name:r="slide-in-from-left"}={}){return[c(`&.${r}-transition-leave-active`,{transition:`transform ${o} ${bt}`}),c(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${vt}`}),c(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),c(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),c(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),c(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:pt,cubicBezierEaseOut:wt}=X;function yt({duration:e="0.3s",leaveDuration:o="0.2s",name:r="slide-in-from-right"}={}){return[c(`&.${r}-transition-leave-active`,{transition:`transform ${o} ${pt}`}),c(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${wt}`}),c(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),c(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),c(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),c(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Bt,cubicBezierEaseOut:St}=X;function zt({duration:e="0.3s",leaveDuration:o="0.2s",name:r="slide-in-from-top"}={}){return[c(`&.${r}-transition-leave-active`,{transition:`transform ${o} ${Bt}`}),c(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${St}`}),c(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),c(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),c(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),c(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const xt=c([z("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[yt(),gt(),zt(),mt(),T("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),T("native-scrollbar",[z("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),D("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[T("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),z("drawer-content-wrapper",`
 box-sizing: border-box;
 `),z("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[T("native-scrollbar",[z("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),z("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),z("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),z("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[D("main",`
 flex: 1;
 `),D("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),z("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),T("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[D("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),T("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[D("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),T("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[D("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),T("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[D("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),c("body",[c(">",[z("drawer-container",`
 position: fixed;
 `)])]),z("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[c("> *",`
 pointer-events: all;
 `)]),z("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[T("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Ue({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),kt=Object.assign(Object.assign({},ne.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Ct=V({name:"Drawer",inheritAttrs:!1,props:kt,setup(e){const{mergedClsPrefixRef:o,namespaceRef:r,inlineThemeDisabled:u}=te(e),t=We(),b=ne("Drawer","-drawer",xt,dt,e,o),h=w(e.defaultWidth),m=w(e.defaultHeight),g=Q(Z(e,"width"),h),i=Q(Z(e,"height"),m),a=$(()=>{const{placement:n}=e;return n==="top"||n==="bottom"?"":ee(g.value)}),y=$(()=>{const{placement:n}=e;return n==="left"||n==="right"?"":ee(i.value)}),S=n=>{const{onUpdateWidth:f,"onUpdate:width":p}=e;f&&M(f,n),p&&M(p,n),h.value=n},F=n=>{const{onUpdateHeight:f,"onUpdate:width":p}=e;f&&M(f,n),p&&M(p,n),m.value=n},H=$(()=>[{width:a.value,height:y.value},e.drawerStyle||""]);function I(n){const{onMaskClick:f,maskClosable:p}=e;p&&R(!1),f&&f(n)}function d(n){I(n)}const k=_e();function O(n){var f;(f=e.onEsc)===null||f===void 0||f.call(e),e.show&&e.closeOnEsc&&Xe(n)&&(k.value||R(!1))}function R(n){const{onHide:f,onUpdateShow:p,"onUpdate:show":l}=e;p&&M(p,n),l&&M(l,n),f&&!n&&M(f,n)}W(ae,{isMountedRef:t,mergedThemeRef:b,mergedClsPrefixRef:o,doUpdateShow:R,doUpdateHeight:F,doUpdateWidth:S});const P=$(()=>{const{common:{cubicBezierEaseInOut:n,cubicBezierEaseIn:f,cubicBezierEaseOut:p},self:{color:l,textColor:v,boxShadow:B,lineHeight:C,headerPadding:N,footerPadding:le,borderRadius:ce,bodyPadding:de,titleFontSize:ue,titleTextColor:he,titleFontWeight:fe,headerBorderBottom:me,footerBorderTop:be,closeIconColor:ve,closeIconColorHover:ge,closeIconColorPressed:pe,closeColorHover:we,closeColorPressed:ye,closeIconSize:Be,closeSize:Se,closeBorderRadius:ze,resizableTriggerColorHover:xe}}=b.value;return{"--n-line-height":C,"--n-color":l,"--n-border-radius":ce,"--n-text-color":v,"--n-box-shadow":B,"--n-bezier":n,"--n-bezier-out":p,"--n-bezier-in":f,"--n-header-padding":N,"--n-body-padding":de,"--n-footer-padding":le,"--n-title-text-color":he,"--n-title-font-size":ue,"--n-title-font-weight":fe,"--n-header-border-bottom":me,"--n-footer-border-top":be,"--n-close-icon-color":ve,"--n-close-icon-color-hover":ge,"--n-close-icon-color-pressed":pe,"--n-close-size":Se,"--n-close-color-hover":we,"--n-close-color-pressed":ye,"--n-close-icon-size":Be,"--n-close-border-radius":ze,"--n-resize-trigger-color-hover":xe}}),E=u?Ae("drawer",void 0,P,e):void 0;return{mergedClsPrefix:o,namespace:r,mergedBodyStyle:H,handleOutsideClick:d,handleMaskClick:I,handleEsc:O,mergedTheme:b,cssVars:u?void 0:P,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender,isMounted:t}},render(){const{mergedClsPrefix:e}=this;return x(Ve,{to:this.to,show:this.show},{default:()=>{var o;return(o=this.onRender)===null||o===void 0||o.call(this),q(x("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?x(oe,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?x("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,x(ut,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[je,{zIndex:this.zIndex,enabled:this.show}]])}})}}),$t={"search-form":"_search-form_17xjc_1"};function Ft(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!qe(e)}const J={isbn:"",title:"",authors:"",publishers:"",tags:"",rating:void 0},Rt=V({name:"SearchForm",props:{searchParams:{type:Object,default:()=>({...J})},isLoading:{type:Boolean,default:!1},onScan:{type:Function},onChange:{type:Function}},setup(e){const{searchParams:o,isLoading:r}=Ye(e),{t:u}=se({useScope:"global"}),t=w({...o.value});re(()=>o.value,i=>{i.isbn?t.value={...J,isbn:i.isbn}:t.value={...i}},{immediate:!0});function b(i,a){t.value[i]=a}const h=$(()=>Object.keys(t.value).filter(i=>i!=="isbn").some(i=>t.value[i]!==""&&t.value[i]!==void 0&&t.value[i]!==null)),m=$(()=>t.value.isbn===""||t.value.isbn===void 0||t.value.isbn===null),g=()=>{var i;(i=e.onScan)==null||i.call(e)};return()=>{let i;return s(at,{class:A($t["search-form"]),labelPlacement:"top",model:t.value},{default:()=>[s(L,{label:"isbn",path:"isbn"},{default:()=>[s(nt,null,{default:()=>[s(U,{disabled:h.value,placeholder:u("pages.search.searchForm.fields.isbn.placeholder"),value:t.value.isbn,onUpdateValue:a=>{b("isbn",a)},onBlur:()=>{var a;t.value.isbn=(a=t.value.isbn)==null?void 0:a.trim()},inputProps:{enterKeyHint:"done"}},null),s(K,{ghost:!0,onClick:g},{default:()=>[s(_,{name:"barcodeScan"},null)]})]})]}),s(L,{label:u("pages.search.searchForm.fields.title.label"),path:"title"},{default:()=>[s(U,{disabled:!m.value,placeholder:u("pages.search.searchForm.fields.title.placeholder"),value:t.value.title,onUpdateValue:a=>{b("title",a)},onBlur:()=>{var a;t.value.title=(a=t.value.title)==null?void 0:a.trim()}},null)]}),s(L,{label:u("pages.search.searchForm.fields.authors.label"),path:"authors"},{default:()=>[s(U,{disabled:!m.value,placeholder:u("pages.search.searchForm.fields.authors.placeholder"),value:t.value.authors,onUpdateValue:a=>{b("authors",a)},onBlur:()=>{var a;t.value.authors=(a=t.value.authors)==null?void 0:a.trim()}},null)]}),s(L,{label:u("pages.search.searchForm.fields.publishers.label"),path:"publishers"},{default:()=>[s(U,{disabled:!m.value,placeholder:u("pages.search.searchForm.fields.publishers.placeholder"),value:t.value.publishers,onUpdateValue:a=>{b("publishers",a)},onBlur:()=>{var a;t.value.publishers=(a=t.value.publishers)==null?void 0:a.trim()}},null)]}),s(L,{label:u("pages.search.searchForm.fields.tags.label"),path:"tags"},{default:()=>[s(U,{disabled:!m.value,placeholder:u("pages.search.searchForm.fields.tags.placeholder"),value:t.value.tags,onUpdateValue:a=>{b("tags",a)},onBlur:()=>{var a;t.value.tags=(a=t.value.tags)==null?void 0:a.trim()}},null)]}),s(L,null,{default:()=>[s(K,{type:"primary",onClick:()=>{var y;const a=ie(t.value);(y=e.onChange)==null||y.call(e,a)},loading:r.value},Ft(i=u("pages.search.searchForm.actions.search"))?i:{default:()=>[i]})]})]})}}});function Et(e){return e.isbn?j.book.queryRawBooksByIsbn(e.isbn):j.book.queryRawBooksByParams(e)}const Tt="_search_13buv_1",It="_main_13buv_1",Pt="_list_13buv_4",Y={search:Tt,main:It,list:Pt},Yt=V({name:"Search",setup(){const{t:e}=se({useScope:"global"}),{router:o}=et(),{dialog:r}=Ke(),u=()=>j.book.getAllBooks();Je(()=>{try{const d=localStorage.getItem("searchParams")||"{}";S.value=JSON.parse(d)}catch(d){console.error(d)}i()});const t=w(!1);Ge(()=>{t.value?localStorage.setItem("searchParams",JSON.stringify(S.value)):localStorage.removeItem("searchParams")});const b=d=>new Promise(k=>{r.success({title:e("pages.search.topbar.scanResultDialog.title"),content:e("pages.search.topbar.scanResultDialog.content",[d]),positiveText:e("common.yes"),negativeText:e("common.no"),closable:!1,onPositiveClick:()=>{S.value={isbn:d},k(!0),I.value=1},onNegativeClick:()=>{k(!1)}})}),h=w([]),m=()=>h.value.length===0?s(st,{title:e("pages.search.empty.title"),description:s(Ze,{scope:"global",keypath:"pages.search.empty.description"},{default:()=>[s(_,{name:"filter"},null)]})},null):s(lt,{data:h.value,onPreviewBook:d=>{o.push({path:`/book/preview/id/${d.id}`}),t.value=!0},onEditBook:d=>{o.push({path:`/book/edit/id/${d.id}`}),t.value=!0},onDeleteBook:d=>{j.book.deleteBook(d.id).then(()=>{h.value=h.value.filter(k=>k.id!==d.id)})}},null),g=w(!1),i=()=>{var O;const d=ie(S.value);(O=Object.keys(d).every(R=>{const P=d[R];return P===""||P===null||P===void 0})?u():Et(d))==null||O.then(R=>{h.value=R})},a=w(),y=w(!1),S=w(J),F=d=>s(rt,{topBar:s(tt,{rightSlots:[s(K,{onClick:()=>{y.value=!0}},{default:()=>[s(_,{name:"filter"},null)]})]},{default:()=>[s(_,{name:"magnifier"},null),Qe(" "),e("pages.search.topbar.title")]})},{default:()=>[s("div",{class:A(Y.main),ref:a},[s("div",{class:A(Y.list)},[m()]),s(Ct,{show:y.value,to:a.value,autoFocus:!1,onMaskClick:()=>{y.value=!1}},{default:()=>[s(Rt,{searchParams:S.value,isLoading:g.value,onScan:d,onChange:k=>{S.value=k,y.value=!1,i()}},null)]})])]}),H=()=>s(it,{onBarcodeDetect:b},null),I=w(1);return()=>s(ot,{class:A(Y.search),layer:I.value,onLayerChange:d=>{I.value=d}},{default:F,decker:H})}});export{Yt as default};
//# sourceMappingURL=Search-BkOboAKi.js.map
