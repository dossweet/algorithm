function throttle(fn, delay) {
    let timer = null;
    return function (...args) {
        let that = this;
        if (!timer) {// 如果timer不为空，就代表timer已经在计时了
            timer = setTimeout(() => {
                fn.apply(that, args);// 等timer计时结束后，再把timer置为null即可
                clearTimeout(timer);//清空计时器
            }, delay);
        }
    }
}
