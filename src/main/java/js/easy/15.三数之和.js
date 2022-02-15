/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];
    let path = [];
    nums = nums.sort(function (a,b){return a-b});
    const backTracking = function (nums, target, sum, startIndex) {
        if (path.length >= 3) {
            if (sum === 0) {
                if (result.length === 0) {
                    result.push([...path]);
                    return;
                }
                for (let i = 0; i < result.length; i++) {
                    // 先排序
                    result[i] = result[i].sort(function (a, b) {
                        return a - b
                    });
                    let pathCopy = Array.from(path);
                    pathCopy = pathCopy.sort(function (a, b) {
                        return a - b
                    });
                    for (let k = 0; k < result[i].length; k++) {
                        if (result[i][k] === pathCopy[k]) {
                            if (k === result[i].length -1){
                                return;
                            }
                            continue;
                        }
                    }
                    result.push([...path]);
                }
            }
            return;

        }
        for (let i = startIndex; i < nums.length; i++) {
            sum += nums[i];
            path.push(nums[i]);
            backTracking(nums, target, sum, startIndex + 1);
            path.pop();
            sum -= nums[i];
        }
    }
    backTracking(nums, 0, 0, 0);

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
