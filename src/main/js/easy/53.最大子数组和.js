/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // let result = 0; // result初始值不能为0，因为可能有负数
    let result = -Infinity;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        if (count > result) {
            result = count;
        }
        if (count < 0) {
            count = 0;
        }
    }
    return result;
};

// 第二种解法是用动态规划来解
// 确定dp，dp就是最大的字段和，dp的长度就是数组的长度
// dp[0]就是nums[0]
// 确定状态转移方程：dp[i] = max(nums[i],dp[i-1]+nums[i]);
// 但是此时返回结果并不是dp的最后一个元素了，我们需要一个result来维护最后的返回结果。
var maxSubArray = function (nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        if (dp[i] > result) {
            result = dp[i];
        }
    }
    return result;
}

