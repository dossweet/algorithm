// 题目描述：实现一个简易计算器，只有数字和+-*/，不含括号
// let str = '4 + 2*3-1 / 2-2';
// let str = '3+ 2 * 2';
// let str = '3+2*2';
// let str = '3/2';
// let str = '3';
// let str = "0-2147483647";
let str = "12 + 3 * 8 - 7 / 2";
let ret = calculate(str);
console.log(ret);
// 这个题其实就是逆波兰表达式
// 实现思路：就是利用两个栈,
// 一个是数字栈，一个是运算符栈
// *和/的优先级高于+和-，
// 优先级的顺序是* = / > + = -
// 遇到*和/就弹数字栈，然后和运算符后面的元素做运算
// 遇到+和-就继续压栈
// 最后按队列顺序依次取出数字栈和运算栈做运算即可，之所以使用队列的方式而不是用栈的方式是因为从后往前连续运算会出问题，比如负数变成了正数
// 更有难度一点的是加括号的版本，不过思路大同小异，如果有括号的话，左括号表明括号内的计算开始，右括号表明括号内的计算结束，然后把运算结果压入栈即可
function calculate(str) {
    str = str.trim();
    let len = str.length;
    if (str.includes('+') === false && str.includes('-') === false &&
        str.includes('/') === false && str.includes('*') === false) {
        return parseInt(str);
    }
    if (isNaN(parseInt(str[0])) || isNaN(parseInt(str[len - 1]))) {
        return '输入内容非法';
    }
    let numberStack = [];
    let opeStack = [];
    let index = 0;
    let opeResult = 0;
    let result = 0;
    while (index < len) {
        if (str[index] === '+' || str[index] === '-') {
            opeStack.push(str[index]);
            index++;
        } else if (str[index] === '*' || str[index] === '/') {
            // 需要弹栈
            let firstNum = numberStack.pop();
            let ope = str[index];
            let secondNum = str[++index];
            while (isNaN(parseInt(secondNum))) {
                secondNum = str[++index];
            }
            // 做运算
            opeResult = doCalc(ope, parseInt(firstNum), parseInt(secondNum));
            if (numberStack.length > 0) {
                // 把结果压入数字栈
                numberStack.push(opeResult);
            } else {
                return opeResult;
            }
            index++;
        } else if (!isNaN(parseInt(str[index]))) {
            let strTemp = parseInt(str[index]);
            index++;
            while (!isNaN(parseInt(str[index]))) {
                strTemp = strTemp * 10 + parseInt(str[index]); // 数字不一定是0-9之间的数
                index++;
            }
            numberStack.push(strTemp);
        } else {
            index++;
        }
    }
    while (numberStack.length > 0) {
        // 按队列出两个数字
        let firstNum = numberStack.shift();
        let secondNum = numberStack.shift();
        let ope = opeStack.shift();
        result = doCalc(ope, parseInt(firstNum), parseInt(secondNum));
        if (numberStack.length > 0) {
            numberStack.unshift(result);
        }
    }
    return result;
}

/*
* doCalc:做运算
* params:{
*   type: 运算类型
*   firstNum: 第一个数字
*   secondNum: 第二个数字
* }
* */
function doCalc(type, firstNum, secondNum) {
    let result = 0;
    switch (type) {
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = Math.trunc(firstNum / secondNum);
            break;
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
    }
    return result;
}
