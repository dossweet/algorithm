function debounce(delay, fn) {
    let timer = null;
    return function (...args) {// ...args用于将参数解构，因为不是每一个函数都像apply函数那样是以一个数组的形式传递的
        let that = this;
        if (timer) {// 代表不为空
            clearTimeout(timer);// 清空计时器
        }
        timer = setTimeout(() => {
            fn.apply(that, args);
        }, delay);// 然后重新计时
    }
}
