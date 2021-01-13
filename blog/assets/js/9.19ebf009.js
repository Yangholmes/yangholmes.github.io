(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{89:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"什么是原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是原型链")]),n("p",[t._v("原型链是 JavaScript 最基本的概念，之一。想要讲明白什么是原型链也不是那么容易的事情，MDN 上有一篇关于"),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("继承和原型链的文章")]),t._v("，把原型链解释得很清楚，但是官方文档缺乏总结，看完之后可能只有一个模糊的概念，还是不能清晰地解释出，什么是原型链。")]),n("p",[t._v("那么，简单少字的总结他来了：")]),n("ol",[n("li",[n("strong",[t._v("原型链")]),t._v("用来描述对象之间的关系")]),n("li",[n("strong",[t._v("prototype")]),t._v(" 是函数的特殊属性，指向它的原型对象"),n("sup",[t._v("[1]")])]),n("li",[n("strong",[t._v("原型")]),t._v("是对象的一个属性，指向其构造函数的 prototype 属性，即构造函数的原型对象"),n("sup",[t._v("[2]")])]),n("li",[t._v("几乎所有对象都是位于原型链顶端的 Object 的实例，所以一个普通对象的原型就像一根"),n("strong",[t._v("链")]),t._v("一样，最终会指向 Object 的原型对象")]),n("li",[t._v("Object 的原型对象也有原型，指向 null ，根据定义，null 没有原型，所以原型链的"),n("strong",[t._v("终点")]),t._v("就是 null "),n("sup",[t._v("[3]")])])]),n("hr"),n("p",[n("strong",[t._v("show me ur code：")])]),n("p",[t._v("[1]：我们可以看看字符串对象的例子")]),n("p",[t._v("执行代码")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("p",[t._v("可以得到类似的输出")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("ƒ "),n("span",{attrs:{class:"token function"}},[t._v("String")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("native code"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nString "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constructor"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ƒ"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" anchor"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ƒ"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" big"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ƒ"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" blink"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ƒ"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" …"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("[2]：继续看字符串的例子")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("String")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'str'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getPrototypeOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getPrototypeOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" String"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("p",[t._v("可以得到类似的输出")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("String "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token string"}},[t._v('"str"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nString "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" constructor"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ƒ"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" anchor"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ƒ"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" big"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ƒ"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" blink"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ƒ"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" …"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])]),n("p",[t._v("[3]：直接访问一下 "),n("code",[t._v("Object")]),t._v(" 原型对象的原型")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getPrototypeOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);