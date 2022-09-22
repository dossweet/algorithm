// 题目描述：统计数组的最大深度
// 举例来说：
// (1) [1, 2, [2, 3], [2, [5, [6]]]] 深度为3
// (2) [1, 2, [2, [3]]] 深度为2；
// (3) [1, 2, 3] 深度为0;

const arrayDeepNew = function (input) {
    var num = [];
    var flag = false;
    for (let i = 0; i < input.length; i++) {
        if (input[i] instanceof Array) {
            flag = true;
            num.push(arrayDeepNew(input[i]));
        }
    }
    if (flag) {
        return Math.max.apply(null, num) + 1;
    } else {
        return 1;
    }
}

let input = [1, 2, [2, 3], [2, [5, [6]]]];
console.log(arrayDeepNew(input) - 1);
