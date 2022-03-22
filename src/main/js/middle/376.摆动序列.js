/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    // 思路：先把所有的差值给求出来，然后用双指针来判断--这个解法不对，问的是子序列，而不是子数组
    // let temp = [];
    // for(let i = 1; i < nums.length; i++){
    //     let DValue = nums[i] - nums[i - 1];
    //     temp.push(DValue);
    // }
    // let slowIndex = 0, fastIndex = 1;
    // let count = 0;
    // while(fastIndex < nums.length){
    //     let symbol = (temp[fastIndex] > 0 && temp[fastIndex - 1] < 0) ||
    //     (temp[fastIndex] < 0 && temp[fastIndex - 1] > 0) ;
    //     if(symbol){
    //         fastIndex++;
    //     }else{
    //         let len = fastIndex = slowIndex + 1;
    //         slowIndex++;
    //         fastIndex = slowIndex + 1;
    //         count = count > len ? count : len;
    //     }
    // }
    // return count;
    // 正确做法：先把所有的差值给求出来，然后从第一个元素开始，进行摆动序列的长度计算，如果遇到了同号的话，就直接跳过
    // 上面这个思路有点问题，不需要先把所有的差值给计算出来，用一个变量来存前一个的差值就可以了。
    if (nums.length === 1) return 1;
    let slowIndex = 0;
    let fastIndex = 1;
    let previous = nums[fastIndex] - nums[fastIndex - 1] > 0;
    let count = nums[fastIndex] === nums[fastIndex - 1] ? 1 : 2;
    let ret = count;
    fastIndex++;
    while (slowIndex + ret < nums.length) {
        while (fastIndex < nums.length) {
            let cur = nums[fastIndex] - nums[fastIndex - 1] > 0;
            if (cur != previous) {
                count++;
                ret = ret < count ? count : ret;
                previous = cur;
            }
            fastIndex++;
        }
        count = nums[slowIndex] === nums[slowIndex - 1] ? 1 : 2;
        slowIndex++;
    }
    return ret;
};

// let nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let nums = [0, 0];
// let nums = [0, 1];
// let nums = [3, 3, 3, 2, 5];
// console.log(wiggleMaxLength02(nums));

let wiggleMaxLength01 = function (nums) {
    if (nums.length <= 1) return nums.length;
    let result = 1;
    let preDiff = 0;
    let curDiff = 0;
    for (let i = 0; i < nums.length; i++) {
        curDiff = nums[i + 1] - nums[i];
        if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
            result++;
            preDiff = curDiff;
        }
    }
    return result;
}

let wiggleMaxLength02 = function (nums) {
    if (nums.length <= 1) return nums.length;
    // 初始为1
    let ret = 1;
    let preDiff = 0;
    let curDiff = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i];
        // if ((curDiff > 0 && preDiff < 0) || (curDiff < 0 && preDiff > 0)){
        // preDiff是有可能为零的，
        if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
            ret++;
            preDiff = curDiff;
        }
    }
    return ret;
}

// let nums = [3, 3, 3, 2, 5];
// console.log(wiggleMaxLength02(nums));

// 这个题也可以用动态规划状态来解
// 用动态规划解题，首先需要明确dp代表的是什么，在本题中，dp的每个元素就代表当前的最长摆动序列
// 那么dp的值应该如何求呢？
// 在本题中，最长摆动序列的值是由前一个可能是山峰，可能是山谷的值以及当前值的状态来决定的
// 本题中dp是一个二维数组，dp[i][0]代表山峰，dp[i][1]代表山谷
let wiggleMaxLength03 = function (nums) {
    if (nums.length === 1) return 1;
    // 考虑前i个数，当第i个值作为峰谷时的情况(则第i-1是峰顶)
    let down = 1;
    // 考虑前i个数，当第i个值作为峰顶时的情况（则第i-1是峰谷）
    let up = 1;
    for (let i = 1; i < nums.length; i++) {// 通过for循环，我们可以找出所有的山峰的山谷，最后一个元素可能是山峰，也可能是山谷
        if (nums[i] < nums[i - 1]) {// 这个有可能是山谷
            down = Math.max(up + 1, down);// 这里的up就是前一个山峰，down表明当前i不是山峰，也不是山谷
        }
        if (nums[i] > nums[i - 1]) {// 这个有可能是山峰
            up = Math.max(down + 1, up);// up为up表明是当前去往山峰路上的一个局部山峰
        }
    }
    // 最后返回山峰和山谷的最大值即可。因为最后一个元素即可能是山峰，也可能是山谷
    return Math.max(down, up);
}
let nums = [3, 3, 3, 2, 5, 6, 4, 7, 2];
console.log(wiggleMaxLength03(nums));
