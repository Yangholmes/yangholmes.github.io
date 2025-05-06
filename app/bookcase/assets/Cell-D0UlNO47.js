import{u as Ke}from"./useTRouter-Bu7QeNaF.js";import{j as _e,k as ze,l as J,w as te,m as $e,n as Oe,p as Te,q as Q,r as B,d as z,v as d,x as Ae,y as be,z as Fe,A as ce,C as W,D as ne,E as D,G as K,H as F,J as re,K as ye,L as k,M as ge,O as we,P as ue,Q as U,R as oe,T as Le,U as xe,F as He,X as Me,V as je,W as We,Y as Ee,Z as fe,_ as A,$ as qe,a0 as O,a1 as de,a2 as Ue,a3 as j,u as Ve,f as Ge,c as P,S as Y,B as Ze,b as Xe,N as Je,a4 as Qe,I as Ye,a as ee}from"./index-C7Ra6Eyr.js";import{a as eo,B as oo}from"./BasicTopBar-CBt-iBlp.js";import{D as no}from"./DeckerLayout-B6VPqkGd.js";import{B as to,a as ro}from"./BarcodeDecker-CCxztWlO.js";import{E as he}from"./Empty-CoOCf1bv.js";import{p as io,B as lo,V as ao,a as so,r as co,N as uo,b as Se}from"./Popover-CYfVz3kQ.js";import{f as po}from"./get-Dpb1CSPW.js";import{h as ve,c as fo}from"./create-D3Vn69pI.js";import"./utils-BMCWA8yv.js";import"./Popconfirm-QJtNAwao.js";function ho(e={},n){const r=_e({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:t}=e,o=l=>{switch(l.key){case"Control":r.ctrl=!0;break;case"Meta":r.command=!0,r.win=!0;break;case"Shift":r.shift=!0;break;case"Tab":r.tab=!0;break}i!==void 0&&Object.keys(i).forEach(g=>{if(g!==l.key)return;const f=i[g];if(typeof f=="function")f(l);else{const{stop:y=!1,prevent:I=!1}=f;y&&l.stopPropagation(),I&&l.preventDefault(),f.handler(l)}})},a=l=>{switch(l.key){case"Control":r.ctrl=!1;break;case"Meta":r.command=!1,r.win=!1;break;case"Shift":r.shift=!1;break;case"Tab":r.tab=!1;break}t!==void 0&&Object.keys(t).forEach(g=>{if(g!==l.key)return;const f=t[g];if(typeof f=="function")f(l);else{const{stop:y=!1,prevent:I=!1}=f;y&&l.stopPropagation(),I&&l.preventDefault(),f.handler(l)}})},s=()=>{(n===void 0||n.value)&&(J("keydown",document,o),J("keyup",document,a)),n!==void 0&&te(n,l=>{l?(J("keydown",document,o),J("keyup",document,a)):(Q("keydown",document,o),Q("keyup",document,a))})};return $e()?(Oe(s),Te(()=>{(n===void 0||n.value)&&(Q("keydown",document,o),Q("keyup",document,a))})):s(),ze(r)}function vo(e,n,r){const i=B(e.value);let t=null;return te(e,o=>{t!==null&&window.clearTimeout(t),o===!0?r&&!r.value?i.value=!0:t=window.setTimeout(()=>{i.value=!0},n):i.value=!1}),i}function mo(e){return n=>{n?e.value=n.$el:e.value=null}}const bo=z({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),yo={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function go(e){const{primaryColor:n,textColor2:r,dividerColor:i,hoverColor:t,popoverColor:o,invertedColor:a,borderRadius:s,fontSizeSmall:l,fontSizeMedium:g,fontSizeLarge:f,fontSizeHuge:y,heightSmall:I,heightMedium:N,heightLarge:h,heightHuge:p,textColor3:b,opacityDisabled:C}=e;return Object.assign(Object.assign({},yo),{optionHeightSmall:I,optionHeightMedium:N,optionHeightLarge:h,optionHeightHuge:p,borderRadius:s,fontSizeSmall:l,fontSizeMedium:g,fontSizeLarge:f,fontSizeHuge:y,optionTextColor:r,optionTextColorHover:r,optionTextColorActive:n,optionTextColorChildActive:n,color:o,dividerColor:i,suffixColor:r,prefixColor:r,optionColorHover:t,optionColorActive:Fe(n,{alpha:.1}),groupHeaderTextColor:b,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:n,optionColorActiveInverted:n,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:C})}const wo=Ae({name:"Dropdown",common:be,peers:{Popover:io},self:go}),pe=ce("n-dropdown-menu"),ie=ce("n-dropdown"),me=ce("n-dropdown-option"),ke=z({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),xo=z({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=W(pe),{renderLabelRef:r,labelFieldRef:i,nodePropsRef:t,renderOptionRef:o}=W(ie);return{labelField:i,showIcon:e,hasSubmenu:n,renderLabel:r,nodeProps:t,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:r,showIcon:i,nodeProps:t,renderLabel:o,renderOption:a}=this,{rawNode:s}=this.tmNode,l=d("div",Object.assign({class:`${n}-dropdown-option`},t==null?void 0:t(s)),d("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,i&&`${n}-dropdown-option-body__prefix--show-icon`]},ne(s.icon)),d("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(s):ne((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),d("div",{class:[`${n}-dropdown-option-body__suffix`,r&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:s}):l}});function So(e){const{textColorBase:n,opacity1:r,opacity2:i,opacity3:t,opacity4:o,opacity5:a}=e;return{color:n,opacity1Depth:r,opacity2Depth:i,opacity3Depth:t,opacity4Depth:o,opacity5Depth:a}}const ko={name:"Icon",common:be,self:So},Co=D("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[K("color-transition",{transition:"color .3s var(--n-bezier)"}),K("depth",{color:"var(--n-color)"},[F("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),F("svg",{height:"1em",width:"1em"})]),Io=Object.assign(Object.assign({},re.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Po=z({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Io,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=ye(e),i=re("Icon","-icon",Co,ko,e,n),t=k(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:l}=i.value;if(a!==void 0){const{color:g,[`opacity${a}Depth`]:f}=l;return{"--n-bezier":s,"--n-color":g,"--n-opacity":f}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),o=r?ge("icon",k(()=>`${e.depth||"d"}`),t,e):void 0;return{mergedClsPrefix:n,mergedStyle:k(()=>{const{size:a,color:s}=e;return{fontSize:po(a),color:s}}),cssVars:r?void 0:t,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:n,depth:r,mergedClsPrefix:i,component:t,onRender:o,themeClass:a}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&we("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),d("i",ue(this.$attrs,{role:"img",class:[`${i}-icon`,a,{[`${i}-icon--depth`]:r,[`${i}-icon--color-transition`]:r!==void 0}],style:[this.cssVars,this.mergedStyle]}),t?d(t):this.$slots)}});function se(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function No(e){return e.type==="group"}function Ce(e){return e.type==="divider"}function Ro(e){return e.type==="render"}const Ie=z({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=W(ie),{hoverKeyRef:r,keyboardKeyRef:i,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:o,activeKeyPathRef:a,animatedRef:s,mergedShowRef:l,renderLabelRef:g,renderIconRef:f,labelFieldRef:y,childrenFieldRef:I,renderOptionRef:N,nodePropsRef:h,menuPropsRef:p}=n,b=W(me,null),C=W(pe),_=W(xe),V=k(()=>e.tmNode.rawNode),L=k(()=>{const{value:u}=I;return se(e.tmNode.rawNode,u)}),G=k(()=>{const{disabled:u}=e.tmNode;return u}),Z=k(()=>{if(!L.value)return!1;const{key:u,disabled:S}=e.tmNode;if(S)return!1;const{value:$}=r,{value:H}=i,{value:ae}=t,{value:M}=o;return $!==null?M.includes(u):H!==null?M.includes(u)&&M[M.length-1]!==u:ae!==null?M.includes(u):!1}),le=k(()=>i.value===null&&!s.value),X=vo(Z,300,le),E=k(()=>!!(b!=null&&b.enteringSubmenuRef.value)),q=B(!1);U(me,{enteringSubmenuRef:q});function T(){q.value=!0}function c(){q.value=!1}function x(){const{parentKey:u,tmNode:S}=e;S.disabled||l.value&&(t.value=u,i.value=null,r.value=S.key)}function m(){const{tmNode:u}=e;u.disabled||l.value&&r.value!==u.key&&x()}function v(u){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:S}=u;S&&!ve({target:S},"dropdownOption")&&!ve({target:S},"scrollbarRail")&&(r.value=null)}function R(){const{value:u}=L,{tmNode:S}=e;l.value&&!u&&!S.disabled&&(n.doSelect(S.key,S.rawNode),n.doUpdateShow(!1))}return{labelField:y,renderLabel:g,renderIcon:f,siblingHasIcon:C.showIconRef,siblingHasSubmenu:C.hasSubmenuRef,menuProps:p,popoverBody:_,animated:s,mergedShowSubmenu:k(()=>X.value&&!E.value),rawNode:V,hasSubmenu:L,pending:oe(()=>{const{value:u}=o,{key:S}=e.tmNode;return u.includes(S)}),childActive:oe(()=>{const{value:u}=a,{key:S}=e.tmNode,$=u.findIndex(H=>S===H);return $===-1?!1:$<u.length-1}),active:oe(()=>{const{value:u}=a,{key:S}=e.tmNode,$=u.findIndex(H=>S===H);return $===-1?!1:$===u.length-1}),mergedDisabled:G,renderOption:N,nodeProps:h,handleClick:R,handleMouseMove:m,handleMouseEnter:x,handleMouseLeave:v,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:c}},render(){var e,n;const{animated:r,rawNode:i,mergedShowSubmenu:t,clsPrefix:o,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:g,renderOption:f,nodeProps:y,props:I,scrollable:N}=this;let h=null;if(t){const _=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,i,i.children);h=d(Pe,Object.assign({},_,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const p={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},b=y==null?void 0:y(i),C=d("div",Object.assign({class:[`${o}-dropdown-option`,b==null?void 0:b.class],"data-dropdown-option":!0},b),d("div",ue(p,I),[d("div",{class:[`${o}-dropdown-option-body__prefix`,a&&`${o}-dropdown-option-body__prefix--show-icon`]},[g?g(i):ne(i.icon)]),d("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},l?l(i):ne((n=i[this.labelField])!==null&&n!==void 0?n:i.title)),d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,s&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(Po,null,{default:()=>d(bo,null)}):null)]),this.hasSubmenu?d(lo,null,{default:()=>[d(ao,null,{default:()=>d("div",{class:`${o}-dropdown-offset-container`},d(so,{show:this.mergedShowSubmenu,placement:this.placement,to:N&&this.popoverBody||void 0,teleportDisabled:!N},{default:()=>d("div",{class:`${o}-dropdown-menu-wrapper`},r?d(Le,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>h}):h)}))})]}):null);return f?f({node:C,option:i}):C}}),Bo=z({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:r}=this,{children:i}=e;return d(He,null,d(xo,{clsPrefix:r,tmNode:e,key:e.key}),i==null?void 0:i.map(t=>{const{rawNode:o}=t;return o.show===!1?null:Ce(o)?d(ke,{clsPrefix:r,key:t.key}):t.isGroup?(we("dropdown","`group` node is not allowed to be put in `group` node."),null):d(Ie,{clsPrefix:r,tmNode:t,parentKey:n,key:t.key})}))}}),Do=z({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return d("div",n,[e==null?void 0:e()])}}),Pe=z({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:r}=W(ie);U(pe,{showIconRef:k(()=>{const t=n.value;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>t?t(l):l.icon);const{rawNode:s}=o;return t?t(s):s.icon})}),hasSubmenuRef:k(()=>{const{value:t}=r;return e.tmNodes.some(o=>{var a;if(o.isGroup)return(a=o.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>se(l,t));const{rawNode:s}=o;return se(s,t)})})});const i=B(null);return U(je,null),U(We,null),U(xe,i),{bodyRef:i}},render(){const{parentKey:e,clsPrefix:n,scrollable:r}=this,i=this.tmNodes.map(t=>{const{rawNode:o}=t;return o.show===!1?null:Ro(o)?d(Do,{tmNode:t,key:t.key}):Ce(o)?d(ke,{clsPrefix:n,key:t.key}):No(o)?d(Bo,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key}):d(Ie,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key,props:o.props,scrollable:r})});return d("div",{class:[`${n}-dropdown-menu`,r&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},r?d(Me,{contentClass:`${n}-dropdown-menu__content`},{default:()=>i}):i,this.showArrow?co({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Ko=D("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ee(),D("dropdown-option",`
 position: relative;
 `,[F("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[F("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),D("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[F("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),fe("disabled",[K("pending",`
 color: var(--n-option-text-color-hover);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),F("&::before","background-color: var(--n-option-color-hover);")]),K("active",`
 color: var(--n-option-text-color-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),F("&::before","background-color: var(--n-option-color-active);")]),K("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),K("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),K("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[K("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[K("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),D("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[K("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),D("icon",`
 font-size: var(--n-option-icon-size);
 `)]),D("dropdown-menu","pointer-events: all;")]),D("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),D("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),D("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),F(">",[D("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),fe("scrollable",`
 padding: var(--n-padding);
 `),K("scrollable",[A("content",`
 padding: var(--n-padding);
 `)])]),_o={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},zo=Object.keys(Se),$o=Object.assign(Object.assign(Object.assign({},Se),_o),re.props),Oo=z({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const n=B(!1),r=qe(O(e,"show"),n),i=k(()=>{const{keyField:c,childrenField:x}=e;return fo(e.options,{getKey(m){return m[c]},getDisabled(m){return m.disabled===!0},getIgnored(m){return m.type==="divider"||m.type==="render"},getChildren(m){return m[x]}})}),t=k(()=>i.value.treeNodes),o=B(null),a=B(null),s=B(null),l=k(()=>{var c,x,m;return(m=(x=(c=o.value)!==null&&c!==void 0?c:a.value)!==null&&x!==void 0?x:s.value)!==null&&m!==void 0?m:null}),g=k(()=>i.value.getPath(l.value).keyPath),f=k(()=>i.value.getPath(e.value).keyPath),y=oe(()=>e.keyboard&&r.value);ho({keydown:{ArrowUp:{prevent:!0,handler:G},ArrowRight:{prevent:!0,handler:L},ArrowDown:{prevent:!0,handler:Z},ArrowLeft:{prevent:!0,handler:V},Enter:{prevent:!0,handler:le},Escape:_}},y);const{mergedClsPrefixRef:I,inlineThemeDisabled:N}=ye(e),h=re("Dropdown","-dropdown",Ko,wo,e,I);U(ie,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:g,activeKeyPathRef:f,animatedRef:O(e,"animated"),mergedShowRef:r,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:p,doUpdateShow:b}),te(r,c=>{!e.animated&&!c&&C()});function p(c,x){const{onSelect:m}=e;m&&de(m,c,x)}function b(c){const{"onUpdate:show":x,onUpdateShow:m}=e;x&&de(x,c),m&&de(m,c),n.value=c}function C(){o.value=null,a.value=null,s.value=null}function _(){b(!1)}function V(){E("left")}function L(){E("right")}function G(){E("up")}function Z(){E("down")}function le(){const c=X();c!=null&&c.isLeaf&&r.value&&(p(c.key,c.rawNode),b(!1))}function X(){var c;const{value:x}=i,{value:m}=l;return!x||m===null?null:(c=x.getNode(m))!==null&&c!==void 0?c:null}function E(c){const{value:x}=l,{value:{getFirstAvailableNode:m}}=i;let v=null;if(x===null){const R=m();R!==null&&(v=R.key)}else{const R=X();if(R){let u;switch(c){case"down":u=R.getNext();break;case"up":u=R.getPrev();break;case"right":u=R.getChild();break;case"left":u=R.getParent();break}u&&(v=u.key)}}v!==null&&(o.value=null,a.value=v)}const q=k(()=>{const{size:c,inverted:x}=e,{common:{cubicBezierEaseInOut:m},self:v}=h.value,{padding:R,dividerColor:u,borderRadius:S,optionOpacityDisabled:$,[j("optionIconSuffixWidth",c)]:H,[j("optionSuffixWidth",c)]:ae,[j("optionIconPrefixWidth",c)]:M,[j("optionPrefixWidth",c)]:Ne,[j("fontSize",c)]:Re,[j("optionHeight",c)]:Be,[j("optionIconSize",c)]:De}=v,w={"--n-bezier":m,"--n-font-size":Re,"--n-padding":R,"--n-border-radius":S,"--n-option-height":Be,"--n-option-prefix-width":Ne,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":ae,"--n-option-icon-suffix-width":H,"--n-option-icon-size":De,"--n-divider-color":u,"--n-option-opacity-disabled":$};return x?(w["--n-color"]=v.colorInverted,w["--n-option-color-hover"]=v.optionColorHoverInverted,w["--n-option-color-active"]=v.optionColorActiveInverted,w["--n-option-text-color"]=v.optionTextColorInverted,w["--n-option-text-color-hover"]=v.optionTextColorHoverInverted,w["--n-option-text-color-active"]=v.optionTextColorActiveInverted,w["--n-option-text-color-child-active"]=v.optionTextColorChildActiveInverted,w["--n-prefix-color"]=v.prefixColorInverted,w["--n-suffix-color"]=v.suffixColorInverted,w["--n-group-header-text-color"]=v.groupHeaderTextColorInverted):(w["--n-color"]=v.color,w["--n-option-color-hover"]=v.optionColorHover,w["--n-option-color-active"]=v.optionColorActive,w["--n-option-text-color"]=v.optionTextColor,w["--n-option-text-color-hover"]=v.optionTextColorHover,w["--n-option-text-color-active"]=v.optionTextColorActive,w["--n-option-text-color-child-active"]=v.optionTextColorChildActive,w["--n-prefix-color"]=v.prefixColor,w["--n-suffix-color"]=v.suffixColor,w["--n-group-header-text-color"]=v.groupHeaderTextColor),w}),T=N?ge("dropdown",k(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:I,mergedTheme:h,tmNodes:t,mergedShow:r,handleAfterLeave:()=>{e.animated&&C()},doUpdateShow:b,cssVars:N?void 0:q,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(i,t,o,a,s)=>{var l;const{mergedClsPrefix:g,menuProps:f}=this;(l=this.onRender)===null||l===void 0||l.call(this);const y=(f==null?void 0:f(void 0,this.tmNodes.map(N=>N.rawNode)))||{},I={ref:mo(t),class:[i,`${g}-dropdown`,this.themeClass],clsPrefix:g,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return d(Pe,ue(this.$attrs,I,y))},{mergedTheme:n}=this,r={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(uo,Object.assign({},Ue(this.$props,zo),r),{trigger:()=>{var i,t;return(t=(i=this.$slots).default)===null||t===void 0?void 0:t.call(i)}})}}),To="_cell_ut9cg_1",Ao={cell:To},Zo=z({name:"Cell",setup(){const{t:e}=Ve({useScope:"global"}),{route:n,router:r}=Ke(),{dialog:i}=Ge(),t=B(),o=B(),a=B([]);te(()=>n.params,h=>{const p=h.cellId;ee.bookcase.queryCellInfo(p).then(b=>{o.value=b,ee.bookcase.queryBookcaseById(b==null?void 0:b.bookcaseId).then(C=>{t.value=C})}),ee.book.queryBooksByCellId(p).then(b=>{a.value=b,I()})},{immediate:!0});const s=h=>{if(!o.value)return;const{id:p,bookcaseId:b}=o.value;r.push({path:"/book/new",query:{isbn:h||"",bookcaseId:b,cellId:p}})},l=h=>new Promise(p=>{i.success({title:e("pages.cell.newBarcodeDialog.title"),content:e("pages.cell.newBarcodeDialog.content",[h]),closable:!1,positiveText:e("common.yes"),negativeText:e("common.no"),onPositiveClick:()=>{s(h),p(!0)},onNegativeClick:()=>{p(!1)}})}),g=()=>{s()},f=B(""),y=B([]),I=()=>{f.value===""&&(y.value=a.value);const h=Qe(f.value).split(" ").map(C=>C.trim()).filter(C=>!!C),p=new RegExp(`${h.join("|")}`),b=a.value.filter(C=>{let _=!1;const{title:V,authors:L,isbn:G}=C;return _||(_=p.test(V)),_||(_=L.some(Z=>p.test(Z))),_||(_=p.test(G)),_});y.value=b},N=()=>a.value.length===0?P(he,{title:e("pages.cell.empty.title"),description:P(Ye,{scope:"global",keypath:"pages.cell.empty.description"},{default:()=>[P(Y,{name:"plus"},null)]})},null):y.value.length===0?P(he,{title:e("pages.cell.noResult.title"),description:e("pages.cell.noResult.description")},null):P("div",{style:{flex:1,overflow:"hidden"}},[P(ro,{data:y.value,onPreviewBook:h=>{r.push({path:`/book/preview/id/${h.id}`})},onEditBook:h=>{r.push({path:`/book/edit/id/${h.id}`})},onDeleteBook:h=>{ee.book.deleteBook(h.id).then(()=>{y.value=y.value.filter(p=>p.id!==h.id)})}},null)]);return()=>P(no,null,{default:h=>P(eo,{topBar:P(oo,{rightSlots:[P(Oo,{trigger:"click",placement:"bottom-end",options:[{key:"barcodeScan",label:e("pages.cell.topBar.rightSlots.barcodeScan"),icon:()=>P(Y,{name:"barcodeScan"},null)},{key:"manual",label:e("pages.cell.topBar.rightSlots.manual"),icon:()=>P(Y,{name:"memo"},null)}],onSelect:p=>{p==="barcodeScan"?h():p==="manual"&&g()}},{default:()=>[P(Ze,null,{default:()=>[P(Y,{name:"plus"},null)]})]})]},{default:()=>{var p;return[(p=t.value)==null?void 0:p.name]}})},{default:()=>[P("div",{class:Xe(Ao.cell)},[P(Je,{placeholder:e("pages.cell.search.placeholder"),disabled:a.value.length===0,value:f.value,onUpdateValue:p=>{f.value=p},onKeyup:p=>{p.key==="Enter"&&(f.value=f.value.trim(),I())}},null),N()])]}),decker:()=>P(to,{onBarcodeDetect:l},null)})}});export{Zo as default};
//# sourceMappingURL=Cell-D0UlNO47.js.map
