### 我的代码风格手册
**2018-08-07**

> All code in any code-base should look like a single person typed it, no matter how many people contributed.

#### 起源
第一次参与团队合作开发OA的经历让我感受到，阅读/修改别人写的代码居然会是痛苦的事情。当时还是在一个没有多少开发经验的小团队里面做搬运工，用的还是`ExtJS`4.x版本的前端框架，后端是著名的`Spring` + `Struts` + `Hibernate`，因为是搬砖岗位，所以前端后端都要做一些。当我在项目中看到类似下面这种代码的时候，眉头是紧皱的：

```java
// @file xxx.java
  for(i=0;i< Arr.size();i++)
{
temp =Arr.get(i);
}
println(   "++++++++++"+temp+"==========");
```

```js
// @file xxx.js
    var xiangmu
  ajax.get('http://xxx.action',function(a){
    xiangmu = a.data.project
    })
    console.log(xiangmu)
```

代码的缩进无法直视，有时2个空格，有时一个`tab`，有时又是4个空格；花括号换行非常随意，有时换行有时不换行；`JavaScript`变量声明不进行初始化，命名随意，拼音横行；不写分号；括号里空格随意，多打了几个空格视而不见……

写这种乱糟糟很随意的代码很轻松，但是过了几天发现问题回头review的时候就会发现难以阅读甚至无法阅读。尤其是阅读别人写的这种代码😭。

这种代码是不合格的，尤其是在项目中，极容易出bug，并且无法修复。

#### 初次尝试
这段经历过后我就决定要养成良好的编码习惯。终极目标是在团队中规定统一的代码风格，如果这个事情推不动，那么至少自己的代码应该是合格的。

第一次尝试，我在之后的一个项目中添加了代码风格的README.md文档，并在teamwork工具中告知了团队其他成员这个规范。类似这样：

```markdown
* `JavaScript`规范
    * 常量：全部大写，单词以下划线"\_"区分。
    * 变量（属性）：按照驼峰法命名，首字母小写。例如：firstVar 是正确的变量名，FirstVar 、firstvar 或者FIRVAR都是错误的。私有属性应在变量名前面加上下划线"\_"。例如_secondVar。
    * 函数（方法）：命名规则与变量名相同。
    * 类：类的命名按照帕斯卡命名法，为了和属性、方法有所区分，首字母应大写。例如FirstObject 是正确的命名。
    * 文件名：全部小写，单词以连接符"-"区分，切勿使用其他符号。
    * 必须且只可使用不带BOM的UTF-8编码。
```

团队的其他同事看完这个规范之后，用“are you kidding”的眼神看了我一眼，说着“为什么要这么麻烦”，“这样一天也做不了多少事情”之类的话，回去写他们自由的代码去了。

所以最后这个规范也就只有我一个人在遵守，直到我离开了这个团队。

初始尝试宣告失败。

#### 强制规范
后来离开了上面说的那个团队，去到百度地图，才知道大公司都有代码风格强制规范这个东西。百度内部进行代码托管和版本管理的系统是自家的icode，每一次push提交代码之后，必须通过线上机器评审和同事的人工评审才能合入分支，线上机器评审就包括代码风格检查。其中，前端的代码规范使用的是[`FECS`](http://fecs.baidu.com/)，也是出自百度自家的产品。

<a href="http://fecs.baidu.com/"><img src="./fecs-logo.png" alt="fecs-logo" style="filter: drop-shadow(0px 0px 10px black);"></a>

`FECS`是一套非常详细的代码规范，支持`html`、`css`、`less`和`JavaScript`四种格式检查。`FECS`定制了一套`ESLint`规范，结合了百度自定义的部分`JavaScript`编码规范（自定义规范用前缀`fecs-`区分），以检查代码中可能存在的质量问题。规范涵盖了众多场景，例如标签的规范、变量名命名规范、行尾逗号分号规范、缩进规范等等。

同时`FECS`也是基于`Node.js`的前端代码检查/修复工具，提供`Sublime Text`、`Atom`、`Visual Studio Code`等现代编辑器插件，支持`Gulp`、`Grunt`等构建化工具插件（好像还没有`webpack`插件）。其中`html`检查/格式化是基于`htmlcs`工具，`css`检查是基于`csshint`工具，`less`检查是基于`lesslint`工具，`JavaScript`修复是基于`jformatter`工具。修复功能其实就是代码美化，开发人员会更加随意地去编写代码，因为美化功能总能让提交通过机器评审。所以在实际使用中，我更倾向于代码风格检测，而不是修复，因为对于一个程序员来说，养成良好的习惯优于利用工具纠正错误。

文件内对于压缩过的脚本或者样式，我们可以添加`/* eslint-disable */`来跳过检测。另外icode的机器评审对于代码风格的限制提供了“豁免/标记误报”功能，对于单次提交的少量风格问题，是可以进行豁免操作的。但在项目中我发现有不少同事都会滥用“豁免/标记误报”功能，而且还开发了批量豁免的浏览器扩展😂。简直是道高一尺魔高一丈。

#### 好用的`ESLint`
`FECS`的经历让我认识了[`ESLint`](https://eslint.org/)。`ESLint`是“可插拔式的`JavaScript`和`JSX`检查工具”。实际上不只是`JavaScript`和`JSX`，通过配置插件，我们还可以实现`HTML`和`CSS`语法检查。

<img src="./eslint-logo.png" alt="ESLint logo">

市面上很多大厂现在都在使用`ESLint`规范自家前端的编码，比如百度、Airbnb，一些流行的框架脚手架也是用`ESLint`做代码规范，比如`Vue.js`。普及率还是很高的，对于个人开发者或者小团队，可以直接采用这些大厂和大社区的代码规范。当然，你也可以选择自己开发一套规则。

`ESLint`的使用方法可以参照官网的[Getting Start](https://eslint.org/docs/user-guide/getting-started)，要注意`ESLint`依赖`Node.js`和`npm`，在使用之前应该先安装好相应版本的`Node.js`环境。

在项目根目录下创建`.eslintrc.js`文件（或者使用`ESLint`指令`eslint --init`创建），用于设置编写规则。`.eslintrc.js`文件是一个标准的`JavaScript`脚本，也就是说，`.eslintrc.js`也需要严格按照自己指定的风格编写。规则编写是在`rules`对象中，格式是这样子的：

```JavaScript
    rules: {
        rulesname: [errorlevel, options]
    }
```

错误等级有三种，分别是`off`、`warn`和`error`，也可以用数字`0`、`1`和`2`标记。

> `off` 或者 `0`：关闭这条规则，不警告也不报错
>
> `warn` 或者 `1`：开启这条规则，只警告不报错
>
> `error` 或者 `2`：开启这条规则，违反这条规则将报错

在`.eslintrc.js`中指定

```JavaScript
    'extends': 'eslint:recommended'
```

便可使用`ESlint`默认的规则项配置；你也可以在`npm`的社区中搜索[eslint-congfig](https://www.npmjs.com/search?q=eslint-config)，可以找到许多“第三方”的规则配置，例如百度的`FECS`或者Airbnb的前端规范。

#### 我的代码风格手册
百度的`FECS`还是很不错的，但是对于`html`的限制，在当前组件化设计的浪潮中，显得过于严格，例如对自定义组件属性命名的限制，在各种前端框架中，驼峰应该是最佳实践，但是`FECS`却非得限制在‘-’分隔命名；`<button>`标签必须指定类型等。适用情景过于古老了。

在`FECS`的基础上，我修改了一版自己的代码风格，主要限制了`JavaScript`的编码规范，对`html`和`css`宽松，更加适合现如今组件化的设计潮流。

[我的代码风格手册](https://github.com/Yangholmes/yangholmes.github.io/blob/master/.eslintrc.js)
