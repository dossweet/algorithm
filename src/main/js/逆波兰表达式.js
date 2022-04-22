let opeStack = [];
let suffixExp = [];
let numReg = /^[0-9]+$/;

// 把表达式的字符串转换为数组
function str2arr(str) {
    let arr = [];
    let frontNum = 0;
    for (let i = 0; i < str.length; i++) {
        if (numReg.test(str[i])) {
            frontNum = frontNum * 10 + parseInt(str[i]);
            if (i === str.length - 1) {
                arr.push(frontNum);
            }
            continue;
        }
        if (['('].indexOf(str[i]) > -1) {
            arr.push(str[i]);
            continue;
        }
        // 处理当前符号以及当前符号之前的元素
        if (str[i - 1] !== ')') {
            arr.push(frontNum);
        }
        arr.push(str[i]);
        frontNum = 0;
    }
    return arr;
}

// 这里传入的strArr必须是一个数组，不然没法处理大于等于10的数
function createSuffixExp(str) {
    for (let i of str) {
        if (numReg.test(i)) {
            suffixExp.push(i);
        } else if (['*', '/'].indexOf(i) >= 0) {
            if (['*', '/'].indexOf(opeStack[opeStack.length - 1]) > -1) {// 如果运算符里有优先级相同的，就先弹栈，再压栈
                suffixExp.push(opeStack.pop());
                opeStack.push(i);
                continue;
            }
            opeStack.push(i);
        } else if ([')'].indexOf(i) >= 0) {
            // 弹栈，直到弹出来的是左括号为止
            let ele = opeStack.pop();
            while (ele !== '(') {
                suffixExp.push(ele);
                ele = opeStack.pop();
            }
        } else if (i === '(') {
            opeStack.push(i);
        } else if (opeStack.length > 0) {
            // 如果没有括号隔着，不会有*在+的下面
            while (opeStack.length > 0 && opeStack[opeStack.length - 1] !== '(') {
                suffixExp.push(opeStack.pop());
            }
            opeStack.push(i);
        } else {
            opeStack.push(i);
        }
    }
    while (opeStack.length > 0) {
        suffixExp.push(opeStack.pop());
    }
}

// 计算逆波兰表达式
function calcExp(str) {
    while (str.length > 1) {
        for (let i = 0; i < str.length; i++) {
            if (['+', '-', '*', '/'].indexOf(str[i]) > -1) {
                let num1 = parseInt(str[i - 2]);
                let num2 = parseInt(str[i - 1]);
                let ret = 0;
                switch (str[i]) {
                    case '+':
                        ret = num1 + num2;
                        break;
                    case '-':
                        ret = num1 - num2;
                        break;
                    case '*':
                        ret = num1 * num2;
                        break;
                    case '/':
                        ret = num1 / num2;
                        break;
                }
                str.splice(i - 2, 3, ret);
                break;
            }
        }
    }
    // 使用pop是为了置空str，从而让js的垃圾回收机制收回内存。
    return str.pop();
}

// let str = ['1', '+', '(', '2', '*', '3', '-', '4', '/', '2', ')'];
// let str = ['1', '*', '2', '*', '3', '-', '4', '/', '2'];

let str = '1+(12*3-1)';
// let str = '1+(12*3-4/2)-1';
str = str2arr(str);
console.log(str);
// 先把中缀表达式转换为后缀表达式
createSuffixExp(str);
console.log(suffixExp);
// 接下来是对逆波兰表达式做运算了
console.log(calcExp(suffixExp));
