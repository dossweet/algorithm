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
    let temp = [];
    let ret = nums.length > 2 ? 1 : 0;
    for (let i = 1; i < nums.length; i++) {
        let DValue = nums[i] - nums[i - 1];
        temp.push(DValue);
    }
    let count = temp[0] != 0 ? 2 : 1;
    let slowIndex = 0;
    let fastIndex = 1;
    let previous = temp[slowIndex] > 0;
    while (slowIndex + ret < temp.length) {
        while (fastIndex < temp.length) {
            let cur = temp[fastIndex++] > 0;
            if (cur != previous) {
                count++;
                ret = ret < count ? count : ret;
                previous = cur;
            }
        }
        count = 1;
        slowIndex++;
    }
    return ret;
};

// let nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let nums = [0, 0];
let nums = [0, 1];
console.log(wiggleMaxLength(nums));
