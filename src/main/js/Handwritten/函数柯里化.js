function curry() {
    // 这是一个闭包，args用于获取第一次接收进来的参数
    let args = [...arguments];

    // 只要一直有新参数，就一直添加
    let inner = function () {
        args.push(...arguments);
        return inner;
    }

    // 这里来做加法操作，toString是inner原型链上的方法
    inner.toString = function () {
        return args.reduce((prev, cur) => {
            return prev + cur;
        }, 0);
    }
    return inner;
}

console.log(+curry(1, 2, 3)(4));
