let result = [];
let path = [];
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    backTracking(k, n, 0, 1);
    return result;
};

function backTracking(k, n, sum, startIndex) {
    if (sum > n) {
        return;
    }
    if (path.length === k || path.length > k) {
        if (sum === n) {
            result.push([...path]);
        }
        // let ifEqual = getSum(temp, n);
        // if (ifEqual) {
        //     result.push([...path]);
        // }
        return;
    }
    for (let i = startIndex; i <= 9; i++) { // i记得加Let，不然会变成全局变量
        path.push(i);
        sum += i;
        backTracking(k, n, sum, i + 1);
        sum -= i;
        path.pop();
    }
}

function getSum(path, aim) {
    let sum = 0;
    for (let i = 0; i < path.length; i++) {
        sum += path[i];
    }
    if (sum === aim) {
        return true;
    }
    return false;
}

console.log(combinationSum3(3, 9));