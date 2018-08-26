### 消抖和节流

**2018-08-24**

浏览器对于用户事件得捕捉是灵敏而且迅速的，用一个键盘术语来讲，浏览器的事件捕捉还是“全键无冲”的。我们在设计Web系统时毋须考虑系统会不会漏掉用户事件的问题，只要简单粗暴地为事件注册回调函数，一旦事件触发，马上会调用回调进行处理。

灵敏迅速的事件响应有时候会对系统的体验带来一些问题，主要体现在过于频繁的用户事件触发上：回调函数的执行需要一段时间，频繁触发事件导致系统卡顿；频繁触发同一个事件造成资源浪费；当回调执行过程中存在网络通信时，频繁调用函数导致了网络卡顿。

为了解决上述问题，我们可以借鉴一下硬件开发的一些技巧。使用单片机中断设计按键功能时，也会遇到相似的问题——当用户开始按下按键到稳定接通这个过程中，由于机械按键连接尚不稳定，会出现跳动的纹波，这个过程和浏览器过于频繁的用户事件触发类似。单片机的解决方法就是消抖，也就是通过一段延时消除抖动的波纹。和硬件消抖不一样的地方是，Web端不存在连接不稳定的因素（其实计算机I/O确实也会有抖动，只不过操作系统已经帮我们处理好了），我们消抖的目的只是消除过于频繁的事件触发。所以，我们既可以先消抖再触发事件，也可以先触发事件再消抖。

如果长时间持续触发事件，消抖方式会合并所有频繁操作，只触发一次，这种方法不能适用于所有场合，例如刷票操作，用户频繁触发按键click事件，系统应该周期地将事件合并，而不是将所有事件合并成一次click。这种场景的操作称为“节流”。

#### 消抖

消抖的原理就是延时触发，并且延时是可叠加的——再延时结束之前重复触发事件会重新计算延时。消抖有两种方案，一种是先消抖再触发，一种是先触发再消抖。

```js
/**
 * 消抖方法，先消抖，再执行回调
 * @param  {Function} fn       事件回调
 * @param  {Number}   duration 抖动时间
 * @param  {any}      args     回调入参
 * @return {Function}          closeure
 */
let debounce = (fn, duration, ...args) => {
    let timeout = null;
    return () => {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, duration);
    };
};
```

```js
/**
 * 消抖方法，先执行回调，再消抖
 * @param  {Function} fn       事件回调
 * @param  {Number}   duration 抖动时间
 * @param  {any}      args     回调入参
 * @return {Function}          closeure
 */
let debounce = (fn, duration, ...args) => {
    let timeout = null;
    return () => {
        timeout ? clearTimeout(timeout) : fn.apply(this, args);
        timeout = setTimeout(() => {
            clearTimeout(timeout);
            timeout = null;
        }, duration);
    };
};
```

#### 节流

```js
/**
 * 节流方法，先节流，再执行回调
 * @param  {Function} fn       事件回调
 * @param  {Number}   duration 抖动时间
 * @param  {any}      args     回调入参
 * @return {Function}          closeure
 */
let throttle = (fn, duration, ...args) => {
    let timeout = null;
    return () => {
        timeout = timeout || setTimeout(() => {
            timeout && fn.apply(this, args);
            clearTimeout(timeout);
            timeout = null;
        }, duration);
    };
};
```

```js
/**
 * 节流方法，先执行回调，再节流
 * @param  {Function} fn       事件回调
 * @param  {Number}   duration 抖动时间
 * @param  {any}      args     回调入参
 * @return {Function}          closeure
 */
let throttle = (fn, duration, ...args) => {
    let timeout = null;
    return () => {
        !timeout && fn.apply(this, args);
        timeout = timeout || setTimeout(() => {
            clearTimeout(timeout);
            timeout = null;
        }, duration);
    };
};
```
