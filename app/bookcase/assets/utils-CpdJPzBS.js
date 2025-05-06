import{y as _,v as g,E as B,H as w,_ as C,G as R,Z as T,d as $,K as E,J as F,a0 as U,r as S,ax as j,$ as O,L as y,M as H,bb as P,ak as D,a1 as V,a3 as K,at as W,c as b,b as k,I as X,e as G,h as J}from"./index-DWdSJ7w-.js";function Z(e){const{railColor:o}=e;return{itemColor:o,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}const q={name:"Rate",common:_,self:Z},Q=()=>g("svg",{viewBox:"0 0 512 512"},g("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),Y=B("rate",{display:"inline-flex",flexWrap:"nowrap"},[w("&:hover",[C("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),C("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[w("&:not(:first-child)",`
 margin-left: 6px;
 `),R("active",`
 color: var(--n-item-color-active);
 `)]),T("readonly",`
 cursor: pointer;
 `,[C("item",[w("&:hover",`
 transform: scale(1.05);
 `),w("&:active",`
 transform: scale(0.96);
 `)])]),C("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[R("active",`
 color: var(--n-item-color-active);
 `)])]),ee=Object.assign(Object.assign({},F.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ne=$({name:"Rate",props:ee,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=E(e),a=F("Rate","-rate",Y,q,e,o),n=U(e,"value"),u=S(e.defaultValue),c=S(null),l=j(e),f=O(n,u);function d(t){const{"onUpdate:value":r,onUpdateValue:i}=e,{nTriggerFormChange:p,nTriggerFormInput:h}=l;r&&V(r,t),i&&V(i,t),u.value=t,p(),h()}function m(t,r){return e.allowHalf?r.offsetX>=Math.floor(r.currentTarget.offsetWidth/2)?t+1:t+.5:t+1}let x=!1;function L(t,r){x||(c.value=m(t,r))}function I(){c.value=null}function A(t,r){var i;const{clearable:p}=e,h=m(t,r);p&&h===f.value?(x=!0,(i=e.onClear)===null||i===void 0||i.call(e),c.value=null,d(null)):d(h)}function N(){x=!1}const z=y(()=>{const{size:t}=e,{self:r}=a.value;return typeof t=="number"?`${t}px`:r[K("size",t)]}),M=y(()=>{const{common:{cubicBezierEaseInOut:t},self:r}=a.value,{itemColor:i,itemColorActive:p}=r,{color:h}=e;return{"--n-bezier":t,"--n-item-color":i,"--n-item-color-active":h||p,"--n-item-size":z.value}}),v=s?H("rate",y(()=>{const t=z.value,{color:r}=e;let i="";return t&&(i+=t[0]),r&&(i+=W(r)),i}),M,e):void 0;return{mergedClsPrefix:o,mergedValue:f,hoverIndex:c,handleMouseMove:L,handleClick:A,handleMouseLeave:I,handleMouseEnterSomeStar:N,cssVars:s?void 0:M,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{readonly:e,hoverIndex:o,mergedValue:s,mergedClsPrefix:a,onRender:n,$slots:{default:u}}=this;return n==null||n(),g("div",{class:[`${a}-rate`,{[`${a}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},P(this.count,(c,l)=>{const f=u?u({index:l}):g(D,{clsPrefix:a},{default:Q}),d=o!==null?l+1<=o:l+1<=(s||0);return g("div",{key:l,class:[`${a}-rate__item`,d&&`${a}-rate__item--active`],onClick:e?void 0:m=>{this.handleClick(l,m)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:m=>{this.handleMouseMove(l,m)}},f,this.allowHalf?g("div",{class:[`${a}-rate__half`,{[`${a}-rate__half--active`]:!d&&o!==null?l+.5<=o:l+.5<=(s||0)}]},f):null)}))}}),te=e=>{const o=e.replace(/^#/,""),s=parseInt(o,16),a=s>>16&255,n=s>>8&255,u=s>>0&255;return(.299*a+.587*n+.114*u)/255};function oe(e,o,s,a="#FFFFFF"){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("width",e.toString()),n.setAttribute("height",o.toString()),n.style.backgroundColor=a;const u=te(a)>.5?"#000000":"#ffffff",c=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");c.setAttribute("width","100%"),c.setAttribute("height","100%");const l=document.createElementNS("http://www.w3.org/1999/xhtml","div");l.style.cssText=`
    width: 100%;
    height: 100%;
    padding: 0 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: Arial;
    font-size: 14px;
    color: ${u};
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    white-space: pre-wrap;
    word-break: break-all;
  `,l.textContent=s,c.appendChild(l),n.appendChild(c);const f=new XMLSerializer().serializeToString(n),d=new Blob([f],{type:"image/svg+xml"});return URL.createObjectURL(d)}function re(e,o,s,a){return e!=null&&e.length?e.map(n=>b("span",{class:k(s)},[n])):b("span",{class:k(a)},[o])}function le(e){return[()=>b("div",{style:{textAlign:"center"}},[b(X,{scope:"global",keypath:"pages.book.utils.askForBookInfo"},{default:()=>[b("div",null,[b("a",{href:`mailto://bookcase.rb@gmail.com?subject=scrape-isbn&body=[${e}]`},[G("bookcase.rb@gmail.com")])])]})]),{showIcon:!1,closable:!0,duration:5e3}]}function se(e,o){return e?URL.createObjectURL(e):oe(200,300,o||J("pages.book.utils.defaultCoverTitle"),"#FECB23")}export{ne as N,se as g,re as l,le as s};
//# sourceMappingURL=utils-CpdJPzBS.js.map
