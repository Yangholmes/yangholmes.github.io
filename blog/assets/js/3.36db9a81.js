(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{54:function(t,e,a){"use strict";a.r(e);var i=a(0),r=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"如何设计一个易用的tag组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设计一个易用的tag组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何设计一个易用的tag组件")]),a("p",[t._v("*** 2018-05-15 ***")]),a("p",[t._v("前一阵子，项目上有一个tag功能需求，要求实现标签的显示、修改和样式定制。我们的项目已经引入了"),a("a",{attrs:{href:"https://www.iviewui.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iView")]),t._v("作为UI组件，立即就想到直接使用iView的tag组件。")]),a("p",[t._v("但是问题来了，iView的tag组件只支持内容显示和样式定制，不支持内容编辑，考虑了一下，去修改iView的内容显得不经济，特别是团队合作的时候，第三方的"),a("code",[t._v("node_modules")]),t._v("还是不去做更改比较好。")]),a("p",[t._v("换个角度考虑，tag其实一种功能特别简单的前端元素，在处处组件化设计的今天，只需要设计出一个API良好的tag组件，便可在项目中随处使用，团队分享也就是顺理成章的事情了。")]),a("h5",{attrs:{id:"设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 设计")]),a("p",[t._v("设计组件，接口是最重要的。因为组件作为一个黑盒，使用的时候，用户不是特别关心组件的实现细节，他只关心组件怎么用，能收到什么效果。所以首先关心需求：")]),a("ol",[a("li",[t._v("标签内容可显示")]),a("li",[t._v("标签内容可编辑")]),a("li",[t._v("标签外观可以自定义")])]),a("p",[t._v("然后根据需求设计API")]),a("table",[a("thead",[a("tr",[a("th",[t._v("attribute")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),a("tbody",[a("tr",[a("td",[t._v("value")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("标签内容，双向绑定时使用"),a("code",[t._v("v-model")])])]),a("tr",[a("td",[t._v("v-model")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("Vue.js指令，用于数据双向绑定")])]),a("tr",[a("td",[t._v("editable")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否可编辑，默认"),a("code",[t._v("false")]),t._v("，不可编辑")])]),a("tr",[a("td",[t._v("closable")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否可关闭，默认"),a("code",[t._v("false")]),t._v("，不可关闭")])]),a("tr",[a("td",[t._v("bgColor")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("背景颜色，默认"),a("code",[t._v("#fff")])])]),a("tr",[a("td",[t._v("border")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("边框样式，默认"),a("code",[t._v("dashed")])])])])]),a("h5",{attrs:{id:"编写代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写代码")])])}],!1,null,null,null);e.default=r.exports}}]);