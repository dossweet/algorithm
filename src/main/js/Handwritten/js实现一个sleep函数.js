function sleep(time) {
    return new Promise((resolve, reject) => { // 这里的resolve就是一个要执行的函数
        setTimeout(resolve, time);
    });
}

function init() {
    return sleep(1000);
}
init().then(() => { console.log('hello') });