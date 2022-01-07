let result = [];
let path = [];
let set = new Set();

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort(function (n1, n2) {
        return n1 - n2;
    });
    backTracking(candidates, 0, 0, target);
    return result;
};

function backTracking(candidates, startIndex, sum, target) {
    // 终止条件，sum === target或者sum >== target
    if (sum === target) {
        result.push([...path]);
        return;
    }

    for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) { // 有剪枝优化
        if (i > startIndex && candidates[i] === candidates[i - 1]){// 这一步很妙，使得同一层的元素不能重复，同时同一树杈的元素push进数组的也不会重复，debug一下就懂了
            continue;
        }
        sum += candidates[i];
        path.push(candidates[i]);
        backTracking(candidates, i + 1, sum, target);
        path.pop();
        sum -= candidates[i];
    }
}

let candidates = [2, 5, 2, 1, 2];
let target = 5;
console.log(combinationSum(candidates, target));