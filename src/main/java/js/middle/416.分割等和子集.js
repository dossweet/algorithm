/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((prev,cur)=> prev+cur);
    if(sum & 1) return false;// 如果是奇数的话，就肯定不能分成两个相等的子集
    const len = nums.length;
    let dp = Array(sum/2 + 1).fill(0);
    for(let i = 0; i < len; i++){
        for(let j= sum/2; j >= nums[i]; j-- ){
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if(dp[j] === sum/2) return true;
        }
    }
    return dp[sum / 2] === sum / 2;
};
