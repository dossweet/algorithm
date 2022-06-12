// 一个高阶函数示例
function limit(fn) {
    let times = 6;
    return function (...args) {
        if (args < times) {
            fn.apply(this, args);
        }
    }
}

function fn(curTime) {
    console.log('hello:' + curTime);
}

let test = limit(fn);

for (let i = 0; i < 10; i++) {
    test(i);
}