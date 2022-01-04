/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // f(n) = f(n-1) + f(n-2);
    if (n === 0 || n === 1) {
        return n;
    }
    let f = new Array(2);
    f[0] = 1; // 从1开始算起，因为f(0)就为0
    f[1] = 1; // 从2开始算起
    for (let i = 3; i <= n; i++) {
        let temp = f[0]; // 先存储原来的f(0)
        f[0] = f[1]; // 再把原来的f(1)赋给f(0)
        f[1] = f[0] + temp; // 然后现在计算的值即为原来的f(0)+现在的f(0),计算完毕后就变成f(1)
    }
    // 最后返回f[1]即可
    return f[1];
};

console.log(fib(4));