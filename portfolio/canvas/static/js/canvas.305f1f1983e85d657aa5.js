webpackJsonp([2],{"2hwW":function(t,e){},"n/98":function(t,e){},sUxS:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={name:"hello-canvas",computed:{canvas:function(){return this.$refs.canvas},ctx:function(){return this.canvas.getContext("2d")},viewport:function(){var t=document.getElementById(this.id),e=window.getComputedStyle(t);return{width:1*e.width.slice(0,-2),height:1*e.height.slice(0,-2)}}},data:function(){return{id:"canvas-container-"+Math.ceil(1e5*Math.random()),pointQueue:[],color:0,maxR:20}},mounted:function(){this.init()},methods:{init:function(){this.resizeCtx(),this.addListener(),this.animate()},resizeCtx:function(){this.canvas.width=this.viewport.width,this.canvas.height=this.viewport.height},addListener:function(){this.canvas.addEventListener("touchmove",function(t){this.enqueue({x:t.touches[0].clientX,y:t.touches[0].clientY,r:0,increase:!0})}.bind(this))},enqueue:function(t){this.pointQueue.push(t)},animate:function(){this.color+=.3,this.ctx.clearRect(0,0,this.viewport.width,this.viewport.height);for(var t=0;t<this.pointQueue.length;t++)this.ctx.fillStyle="hsla("+this.color+", 100%, 80%, .7)",this.ctx.beginPath(),this.ctx.arc(this.pointQueue[t].x,this.pointQueue[t].y,this.pointQueue[t].r,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill(),this.pointQueue[t].r=this.pointQueue[t].increase?this.pointQueue[t].r+.3:this.pointQueue[t].r-.9,this.pointQueue[t].r>this.maxR&&(this.pointQueue[t].increase=!1),this.pointQueue[t].r<0&&this.pointQueue.splice(t,1);window.requestAnimationFrame(this.animate)}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello-canvas",attrs:{id:this.id}},[e("canvas",{ref:"canvas"})])},staticRenderFns:[]};var o=i("VU/8")(s,h,!1,function(t){i("n/98")},null,null).exports;i("2hwW");n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:o},template:"<App/>"})}},["sUxS"]);
//# sourceMappingURL=canvas.305f1f1983e85d657aa5.js.map