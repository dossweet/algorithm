let result = [];
let path = [];
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    result = [];
    backTracking(n, k, 1);
    return result;
};

// function backTracking(n, k, startIndex) {
//     // 每次添加的是一个副本，如果添加的是原来的，每次添加的实际上只是一个引用，因此path一变，之前加进去的也会变
//     if (path.length === k) {
//         result.push([...path]);
//         // result.push(path);
//         return;
//     }
//     for (let i = startIndex; i <= n; i++) {
//         path.push(i);
//         backTracking(n, k, i + 1);
//         path.pop();
//     }
// }

// console.log(combine(4, 2));

// 剪枝优化版本，如果从当前节点开始，下面的都不会满足条件的话，就不用继续遍历了
function backTracking(n, k, startIndex) {
    // 每次添加的是一个副本，如果添加的是原来的，每次添加的实际上只是一个引用，因此path一变，之前加进去的也会变
    if (path.length === k) {
        result.push([...path]);
        // result.push(path);
        return;
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
        path.push(i);
        backTracking(n, k, i + 1);
        path.pop();
    }
}

console.log(combine(4, 2));