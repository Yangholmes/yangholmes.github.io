(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{68:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),a("p",[t._v("参数 argc 表示 命令行参数的个数，即参数 argv 的长度，argv 是一个字符串数组指针，argv 的元素就是参数的内容。envp 是系统环境变量列表，存放了一组进程运行过程中会用到的环境变量。")]),t._m(5),t._m(6),t._m(7),t._m(8),a("p",[t._v("接下来编译链接：")]),t._m(9),a("p",[t._v("得到可执行文件 main ，然后运行它")]),t._m(10),a("p",[t._v("程序运行正确。接下来用 strace 查看系统调用情况：")]),t._m(11),t._m(12),a("p",[t._v("了解系统调用 "),a("code",[t._v("execve()")]),t._v(" 函数可以查看"),a("router-link",{attrs:{to:"../how-gcc-works/"}},[t._v("这篇")]),t._v("了解")],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"linux-c-程序入口函数-main-小解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-c-程序入口函数-main-小解","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux C 程序入口函数 main() 小解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2019-10-27")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Linux 系统中，C 程序总是从 "),a("code",[t._v("main()")]),t._v(" 函数开始的，当用户编写好的程序在运行的时候，操作系统慧使用 "),a("code",[t._v("exec()")]),t._v(" 函数运行程序。在调用 "),a("code",[t._v("main()")]),t._v(" 之前，"),a("code",[t._v("exec()")]),t._v(" 系统调用会先调用一个特殊的启动例程，负责从操作系统内核读取程序的命令行参数，为 "),a("code",[t._v("main()")]),t._v(" 函数准备好工作环境。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("main()")]),this._v(" 函数的定义为")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" envp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ANSI 规定 "),s("code",[this._v("main()")]),this._v(" 函数只有前两个参数，而 POSIX 则使用了一个全局的环境变量 environ 来取代 envp ，应用程序可以通过 "),s("code",[this._v("getenv()")]),this._v(" 和 "),s("code",[this._v("putenv()")]),this._v(" 函数来读取或者设置一个环境变量。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"系统如何执行-main-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统如何执行-main-函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 系统如何执行 "),s("code",[this._v("main()")]),this._v(" 函数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("用 strace 来分析 "),s("code",[this._v("main()")]),this._v(" 的执行。我们先写一段测试用的程序：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" envp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Argument %d is %s.\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ gcc -o main mian.c\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./main "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arg2"')]),t._v(" arg3\nArgument "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" is ./main.\nArgument "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" is arg1.\nArgument "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" is arg2.\nArgument "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" is arg3.\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strace")]),t._v(" ./main "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arg2"')]),t._v(" arg3\nexecve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./main"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arg1"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arg2"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arg3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", 0x7fd6828c78 /* "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" vars */"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nbrk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x558ddaf000\nfaccessat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AT_FDCWD, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/ld.so.nohwcap"')]),t._v(", F_OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" -1 ENOENT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("No such "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" or directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfaccessat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AT_FDCWD, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/ld.so.preload"')]),t._v(", R_OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" -1 ENOENT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("No such "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" or directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nopenat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AT_FDCWD, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/ld.so.cache"')]),t._v(", O_RDONLY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("O_CLOEXEC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nfstat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("st_mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("S_IFREG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("0644, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("st_size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("89739")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NULL, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("89739")]),t._v(", PROT_READ, MAP_PRIVATE, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x7f81dba000\nclose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nfaccessat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AT_FDCWD, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/ld.so.nohwcap"')]),t._v(", F_OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" -1 ENOENT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("No such "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" or directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nopenat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AT_FDCWD, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/lib/aarch64-linux-gnu/libc.so.6"')]),t._v(", O_RDONLY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("O_CLOEXEC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\177"}},[t._v("\\177")]),t._v("ELF"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\2"}},[t._v("\\2")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[t._v("\\1")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[t._v("\\1")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\3"}},[t._v("\\3")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\3"}},[t._v("\\3")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\267"}},[t._v("\\267")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[t._v("\\1")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token entity",title:"\\10"}},[t._v("\\10")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\2"}},[t._v("\\2")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\0"}},[t._v("\\0")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("., "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("832")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("832")]),t._v("\nfstat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("st_mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("S_IFREG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("0755, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("st_size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1341080")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NULL, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v(", PROT_READ"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("PROT_WRITE, MAP_PRIVATE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("MAP_ANONYMOUS, -1, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x7f81df8000\nmmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NULL, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1409880")]),t._v(", PROT_READ"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("PROT_EXEC, MAP_PRIVATE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("MAP_DENYWRITE, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x7f81c61000\nmprotect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x7f81da1000, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("61440")]),t._v(", PROT_NONE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x7f81db0000, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24576")]),t._v(", PROT_READ"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("PROT_WRITE, MAP_PRIVATE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("MAP_FIXED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("MAP_DENYWRITE, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", 0x13f000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x7f81db0000\nmmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x7f81db6000, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13144")]),t._v(", PROT_READ"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("PROT_WRITE, MAP_PRIVATE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("MAP_FIXED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("MAP_ANONYMOUS, -1, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x7f81db6000\nclose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmprotect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x7f81db0000, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v(", PROT_READ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmprotect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x5585a3f000, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(", PROT_READ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmprotect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x7f81dfc000, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(", PROT_READ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmunmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x7f81dba000, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("89739")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nfstat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("st_mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("S_IFCHR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("0620, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("st_rdev")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("makedev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("136")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nbrk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                               "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x558ddaf000\nbrk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x558ddd0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0x558ddd0000\nwrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Argument 0 is ./main.'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v(", 22Argument "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" is ./main.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\nwrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Argument 1 is arg1.'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v(", 20Argument "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" is arg1.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\nwrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Argument 2 is arg2.'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v(", 20Argument "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" is arg2.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\nwrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Argument 3 is arg3.'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),t._v(", 20Argument "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" is arg3.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\nexit_group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ?\n+++ exited with "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" +++\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("运行程序，系统将会从 "),a("code",[t._v("mian()")]),t._v(" 函数开始执行，执行系统调用 "),a("code",[t._v("execve()")]),t._v(" 函数为程序开辟新的进程。执行 "),a("code",[t._v("execve()")]),t._v(" 函数的时候，系统将执行 "),a("code",[t._v("./main")]),t._v(" 命令中的所有参数以字符串指针的方式传递给了 "),a("code",[t._v("execve()")]),t._v(" 。执行参数包含可执行文件自身，所以我们可以看到 argv 的长度为4。")])}],!1,null,null,null);s.default=e.exports}}]);