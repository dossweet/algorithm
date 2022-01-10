/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return0;
    if(nums.length === 1) return nums[0];
    // 这个题我感觉就是最后一个元素和倒数第二个元素取哪个的问题，
    if(nums.length === 3 || nums.length === 2){
        // 取最大值
        return Math.max(...nums);
    }

    // 情况一：取了第一个元素，那么就不能取最后一个元素
    // 情况三：首尾都没取，取了倒数第二个数
    let result01 = robRange(nums,0,nums.length - 2);
    // 情况二：没去第一个元素，那么就可以取最后一个元素
    let result02 = robRange(nums,1, nums.length - 1);
    return Math.max(result01,result02);
};

function robRange(nums, start, end){
    let dp = new Array(nums).fill(0);
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start], nums[start + 1]);
    for(let i = start + 2; i <= end; i++){
        dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1]);
    }
    return dp[end];
}