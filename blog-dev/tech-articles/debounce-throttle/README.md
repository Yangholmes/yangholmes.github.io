### 消抖和节流

**2018-08-24**

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
            fn.call(this, args);
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
        timeout ? clearTimeout(timeout) : fn.call(this, args);
        timeout = setTimeout(() => {
            clearTimeout(timeout);
            timeout = null;
        }, duration);
    };
};
```

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
            timeout && fn.call(this, args);
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
        !timeout && fn.call(this, args);
        timeout = timeout || setTimeout(() => {
            clearTimeout(timeout);
            timeout = null;
        }, duration);
    };
};
```
