(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{55:function(t,a,s){t.exports=s.p+"assets/img/rongguang1.0d0103f9.gif"},56:function(t,a,s){t.exports=s.p+"assets/img/rongguang0.25a9ddb4.gif"},57:function(t,a,s){t.exports=s.p+"assets/img/car.e16e1dbd.gif"},62:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"“面向对象”的组件开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#“面向对象”的组件开发","aria-hidden":"true"}},[t._v("#")]),t._v(" “面向对象”的组件开发")]),n("p",[n("strong",[t._v("2018-05-17")])]),n("p",[t._v("适用范围："),n("code",[t._v("Vue.js")])]),n("p",[t._v("这里介绍一种组件扩展的方法，为什么要用引号标记“面向对象”呢？因为这中扩展方法有点像“继承”，但是又完全不一样，准确地说，只是一种组件的“混合”或者“扩展”。")]),n("h4",{attrs:{id:"情景设定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#情景设定","aria-hidden":"true"}},[t._v("#")]),t._v(" 情景设定")]),n("p",[t._v("假设我们有个项目，为各种不同的汽车建模，达到展示汽车各种性能特色的目的。")]),n("h4",{attrs:{id:"设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 设计")]),n("p",[t._v("按照面向对象思维设计，首先应该抽象出不同汽车的共同点，创建一个叫做"),n("code",[t._v("Car")]),t._v("的“父类”组件，其他汽车只需要“继承”"),n("code",[t._v("Car")]),t._v("组件，对自身进行个性化的配置。")]),n("p",[t._v("我们简单设计一个"),n("code",[t._v("Car")]),t._v("的组件，所有汽车都是车，我们为"),n("code",[t._v("Car")]),t._v("定义一个车型的属性叫做“车”。接下来，所有汽车都可以鸣喇叭，所以我们要为车定义一个方法叫做“鸣喇叭”。不同的车喇叭声音应该不一样，但是鸣喇叭的方式都是一样的：蜂鸣器，所以我们将“鸣喇叭”这个动作命名为“Buzzer”。我们为“Buzzer”编写一个"),n("code",[t._v("onBuzzer")]),t._v("的方法模拟喇叭响，将我们的车型打印出来。")]),n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Car.vue --\x3e")]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("html"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("car"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{model}}"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onBuzzer"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("鸣喇叭"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("data")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                model"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'车'")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        methods"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("onBuzzer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'我是'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("img",{attrs:{alt:"Car.vue",src:s(57)}}),n("p",[t._v("接下来我们来当一回车厂，生产一辆常见的汽车。选取一辆比较有特色的车子，比如五菱荣光。新建一个组件，命名为"),n("code",[t._v("Rongguang")]),t._v("。首先五菱荣光是汽车的一种，所以它应该继承了父类"),n("code",[t._v("Car")]),t._v("组件的优良传统（拥有型号、可以鸣喇叭），拥有自己的型号“五菱荣光”。然后五菱荣光是一款非常有特色的车子，它可以客货两用，因此我们为"),n("code",[t._v("Rongguang")]),t._v("定制一个专属的方法，用于切换车子客车和货车的状态。")]),n("p",[t._v("那么问题来了，在Vue的组件设计中，如何实现这种“继承”呢？查阅"),n("code",[t._v("Vue.js")]),t._v("的API文档，我们发现了组件具有"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#extends",target:"_blank",rel:"noopener noreferrer"}},[t._v("extends")]),t._v("的接口，参数是一个包含组件选项的对象。我们试着使用"),n("code",[t._v("extends")]),t._v("对"),n("code",[t._v("Car")]),t._v("进行扩展。")]),n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Rongguang.vue --\x3e")]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("html"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rongguang"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{model}}"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onBuzzer"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("鸣喇叭"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    import Car from './Car';\n    export default {\n        extends: Car,\n        data() {\n            return {\n                model: '五菱荣光'\n            };\n        },\n        methods: {}\n    };\n")])]),n("p",[t._v("看看效果")]),n("img",{attrs:{alt:"Rongguang.vue",src:s(56)}}),n("p",[t._v("这样就实现了“继承”。")]),n("h4",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理")]),n("p",[t._v("通过"),n("code",[t._v("extends")]),t._v("接口实现了组件的“继承”，我们来看一看原理是什么。")]),n("blockquote",[n("p",[t._v("extends")]),n("ul",[n("li",[n("p",[t._v("类型：Object | Function")])]),n("li",[n("p",[t._v("详细：")]),n("p",[t._v("允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend。这主要是为了便于扩展单文件组件。")]),n("p",[t._v("这和 mixins 类似。")])])])]),n("p",[t._v("其实就是通过"),n("code",[t._v("extends")]),t._v("扩展了组件，将“父类”的组件“继承”到“子类”中，包括"),n("code",[t._v("beforeCreate")]),n("code",[t._v("beforeDestory")]),n("code",[t._v("data")]),n("code",[t._v("methods")]),n("code",[t._v("render")]),t._v("内容。也就是说，“子类”组件“继承”之后，什么都不用做就具有了“父类”组件的"),n("code",[t._v("create")]),t._v("和"),n("code",[t._v("destory")]),t._v("钩子，数据"),n("code",[t._v("data")]),t._v("，和方法"),n("code",[t._v("methods")]),t._v("。如果“子类”组件中出现“父类”同名的属性，那么这个属性将会被“子类”的属性覆盖变成新值，但不会影响“父类”组件同名的属性。“继承”来的方法也是一样，方法名相同的时候“子类”方法将会被改写，但不会影响“父类”。")]),n("h4",{attrs:{id:"进一步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进一步","aria-hidden":"true"}},[t._v("#")]),t._v(" 进一步")]),n("p",[t._v("我们进一步对五菱荣光定制，为其增加状态切换方法，实现客车和货车的切换。")]),n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Rongguang.vue --\x3e")]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("html"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rongguang"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{model}}"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onBuzzer"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("鸣喇叭"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onTranslate(0)"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("变身客车"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onTranslate(1)"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("变身货车"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Car "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./Car'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Car"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("data")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                model"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'五菱荣光'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                types"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'客车'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'货车'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        methods"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("onTranslate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'我是'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("img",{attrs:{alt:"五菱荣光",src:s(55)}}),n("p",[t._v("这样就实现了定制。")])])}],o=s(0),c=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=c.exports}}]);