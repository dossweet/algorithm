// 题目描述：实现一个简易计算器，只有数字和+-*/，不含括号
let str = '4+2*3-1/2-2';
let ret = calculate(str);
console.log(ret);
// 实现思路：就是利用两个栈,
// 一个是数字栈，一个是运算符栈
// *和/的优先级高于+和-，
// 优先级的顺序是* == / > + == -
// 遇到*和/就弹数字栈，然后和运算符后面的元素做运算
// 遇到+和-就继续压栈
// 最后弹数字栈和运算栈做运算即可
function calculate(str) {
    let numberStack = [];
    let opeStack = [];
    let index = 0;
    let len = str.length;
    let opeResult = 0;
    let result = 0;
    while (index < len) {
        if (str[index] === '+' || str[index] === '-') {
            opeStack.push(str[index]);
        } else if (str[index] === '*' || str[index] === '/') {
            // 需要弹栈
            let firstNum = numberStack.pop();
            let ope = str[index];
            let secondNum = str[++index];
            // 做运算
            opeResult = doCalc(ope, parseFloat(firstNum), parseFloat(secondNum));
            // 把结果压入数字栈
            numberStack.push(opeResult);
        } else {
            numberStack.push(str[index]);
        }
        index++;
    }
    while (numberStack.length > 0) {
        // 按队列出两个数字
        let firstNum = numberStack.shift();
        let secondNum = numberStack.shift();
        let ope = opeStack.shift();
        result = doCalc(ope, parseFloat(firstNum), parseFloat(secondNum));
        if (numberStack.length > 0){
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
            result = firstNum / secondNum;
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
