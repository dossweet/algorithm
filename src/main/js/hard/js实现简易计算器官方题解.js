/**
 * @desc 这个解法比较巧妙，一次遍历就得出了最后要运算的栈，
 * 作者的思路就是标记上一次的运算符，然后遇到数字的话，就先赋值给n，然后遍历到下一个运算符时，就用上一次的做运算
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let sign = '+', n = 0, c, stack = [];
    for (let i = 0; i <= s.length; i++) {
        c = s.charAt(i);
        if (c === ' ') continue;
        if (c <= '9' && c >= '0') {
            n = n * 10 + parseInt(c);// 这里需要乘以10的原因是，每次输入的数不一定是个位数
            continue;
        }
        if (sign === '+') {
            stack.push(n);
        } else if (sign === '-') {
            stack.push(-n);
        } else if (sign === '*') {
            stack.push(stack.pop() * n)
        } else if (sign === '/') {
            stack.push(Math.trunc(stack.pop() / n))
        }
        sign = c;
        n = 0;
    }
    return stack.reduce((prev, cur) => prev + cur, 0);
};

let str = '4*2*3-1/2-2';
let ret = calculate(str);
console.log(ret);
