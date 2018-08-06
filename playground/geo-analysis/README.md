### 经验教训

1. 使用`html`模板的时候，`tag`命名和`attribute`命名千万注意不要大写！因为`html`对大小写不敏感，浏览器在加载`html`模板的时候会转换成小写。

2. 千万不要写这种样式（或者类似的样式）
    ```css
    html * {
        width: 100%;
        height: 100%;
    }
    body * {
        width: 100%;
        height: 100%;
    }
    ```

    祸害无穷。

3. 无论是`<template>`标签还是`<script type="text/x-template">`标签，对于所有IE来说，都是未知标签，它会将标签内容直接显示出来，`Vue`也不能识别这些模板。
