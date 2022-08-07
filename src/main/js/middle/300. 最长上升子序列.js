/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++){
        for (let j = 0; j < i; j++){
            if (nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1);//之所以要取最大值是因为可能有多个dp[j]>dp[i],因此dp[i]会被赋多个值
            }
        }
    }
};
