// 思路： 需要一个变量来记录当前的最大值，需要一个变量来记录当前的子序和
// 计算子序和的过程，其实是一个滑动窗口的过程，
// 从当前元素开始，如果和之前的结果相加是正数，那么就加上当前元素的值
// 反之就直接置为0，从下一个元素开始，继续滑动窗口

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxResult = -Infinity;
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        if (curSum > maxResult) { // 顺序很重要，maxResult的赋值判断必须在curSum的赋值前面
            maxResult = curSum;
        }
        if (curSum <= 0) {
            curSum = 0;
        }
    }
    return maxResult;

    // let maxResult = nums[0];// 这种写法是错误的，因为如果nums[0]小于0的话，就应该curSum置空。
    // let curSum = nums[0];// 这句需要改一下：let curSum = nums[0] > 0 ? nums[0] : 0;
    // for (let i = 1; i < nums.length; i++) {
    //     curSum += nums[i];
    //     if (curSum > maxResult) { // 顺序很重要，maxResult的赋值判断必须在curSum的赋值前面
    //         maxResult = curSum;
    //     }
    //     if (curSum <= 0) {
    //         curSum = 0;
    //     }
    // }
    // return maxResult;
};

let nums = [-3, -2];
console.log(maxSubArray(nums));
