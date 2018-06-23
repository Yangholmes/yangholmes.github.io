/**
 * 根据fecs规则编写lint
 * All code in any code-base should look like a single person typed it, no matter how many people contributed. — idiomatic.js
 * @author Yangholmes 2017-10-18
 * @file .eslintrc.js
 */
/* eslint comma-dangle: [0] */
// https://eslint.org/docs/user-guide/configuring
module.exports = {
    'root': true,
    'parser': 'babel-eslint',
    'parserOptions': {
        sourceType: 'module'
    },
    'env': {
        browser: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'extends': 'standard',
    // required to lint *.vue files
    'plugins': ['html'],
    /**
     * error level:
     * 'off' or 0 - turn the rule off
     * 'warn' or 1 - turn the rule on as a warning (doesn’t affect exit code)
     * 'error' or 2 - turn the rule on as an error (exit code will be 1)
     */
    // ↓↓↓ 我的规则 ↓↓↓
    'rules': {
        // 箭头含树中参数允许不带括号
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 语句强制分号结尾
        'semi': [2, 'always'],
        // 缩进风格: 4个空格
        // 'indent': [2, 4],
        'indent': [2, 4, {SwitchCase: 1}],
        // `方法/属性` 以驼峰命名
        'camelcase': [2, {properties: 'always'}],
        // 大括号内是否允许不必要的空格
        'object-curly-spacing': [2, 'never'],
        // 函数声明、具名函数表达式、函数调用中，函数名和 `(` 之间不允许有空格；匿名含树 `function` 和 `(` 之间必须存在空格
        'space-before-function-paren': [2, {anonymous: 'always', named: 'never', asyncArrow: 'always'}],
        // 小括号里面要不要有空格
        'space-in-parens': [2, 'never'],
        // sth is defined but never used
        'no-unused-vars': 0,
        // 不允许空的函数
        // 'no-empty-function': 0,
        // 不允许使用未定义变量
        'no-use-before-define': 2,
        // 允许对函数使用bind
        'no-extra-bind': 0,
        // enforces Stroustrup style 强制使用Stroustrup风格
        'brace-style': [1, 'stroustrup'],
        // 运算符置于行首
        'operator-linebreak': [2, 'before'],
        // 不要带逗号小尾巴
        'comma-dangle': [2, 'never'],
        // 不允许使用 `var` 声明变量，只允许使用 `let` 和 `const`
        'no-var': 2
    }
};
