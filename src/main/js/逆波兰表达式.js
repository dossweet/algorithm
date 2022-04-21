let opeStack = [];
let suffixExpression = [];

// 这里传入的strArr必须是一个数组，不然没法处理大于等于10的数
function calcExpression(str) {
    let numReg = /^[0-9]$/;
    for (let i of str) {
        if (numReg.test(i)) {
            suffixExpression.push(i);
        } else if (['*', '/'].indexOf(i) >= 0) {
            if (['*', '/'].indexOf(opeStack[opeStack.length - 1])) {// 如果运算符里有优先级相同的，就先弹栈，再压栈
                suffixExpression.push(opeStack.pop());
                opeStack.push(i);
                continue;
            }
            opeStack.push(i);
        } else if ([')'].indexOf(i) >= 0) {
            // 弹栈，直到弹出来的是左括号为止
            let ele = opeStack.pop();
            while (ele !== '(') {
                suffixExpression.push(ele);
                ele = opeStack.pop();
            }
        } else if (i === '(') {
            opeStack.push(i);
        } else if (opeStack.length > 0) {
            suffixExpression.push(opeStack.pop());
            opeStack.push(i);
        }
    }
}
