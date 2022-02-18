/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = [];
    if (nums.length < 4) return result;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let L = j + 1;
            let R = nums.length - 1;
            while (L < R) {
                let sum = nums[i] + nums[j] + nums[L] + nums[R];// 一定记得这个sum要写在里面
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[L], nums[R]]);
                    while (L < R && nums[L] === nums[L + 1]) L++;
                    while (L < R && nums[R] === nums[R - 1]) R--;
                    L++;
                    R--;
                } else if (sum > target) {
                    R--;
                } else if (sum < target) {
                    L++;
                }
            }
        }
    }
    return result;
};
