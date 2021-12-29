/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 正确版本-改写版，减少内存占用
var sortedSquares = function(nums) {
    let n = nums.length;
    let sortNums = new Array(n).fill(0);
    let leftIndex = 0;
    let rightIndex = n - 1;
    let k = n - 1;

    while (rightIndex >= leftIndex) {
        if (Math.abs(nums[rightIndex]) > Math.abs(nums[leftIndex])) { // 右大于左
            sortNums[k--] = nums[rightIndex] * nums[rightIndex];
            rightIndex--;
        } else { // 左大于右
            sortNums[k--] = nums[leftIndex] * nums[leftIndex];
            leftIndex++;
        }
    }
    return sortNums;
};
// // 正确版本
// var sortedSquares = function(nums) {
//     let sortNums = []; // 这种耗时太长，每次执行unshift函数会遍历一遍数组，因此不推荐，建议初始化就生成为nums的数组长度
//     let leftIndex = 0;
//     let rightIndex = nums.length - 1;

//     while (rightIndex >= leftIndex) {
//         if (Math.abs(nums[rightIndex]) > Math.abs(nums[leftIndex])) { // 右大于左
//             sortNums.unshift(nums[rightIndex] * nums[rightIndex]);
//             rightIndex--;
//         } else { // 左大于右
//             sortNums.unshift(nums[leftIndex] * nums[leftIndex]);
//             leftIndex++;
//         }
//     }
//     return sortNums;
// };
// 有问题的版本
// var sortedSquares = function(nums) {
//     let sortNums = [];
//     let leftIndex = 0;
//     let rightIndex = nums.length - 1;

//     while (rightIndex > leftIndex) {
//         if (Math.abs(nums[rightIndex]) > Math.abs(nums[leftIndex])) { // 右大于左
//             sortNums.unshift(nums[rightIndex] * nums[rightIndex]);
//             rightIndex--;
//         } else if (Math.abs(nums[rightIndex]) < Math.abs(nums[leftIndex])) { // 左大于右
//             sortNums.unshift(nums[leftIndex] * nums[leftIndex]);
//             leftIndex++;
//         } else { // 相等，同时添加
//             sortNums.unshift(nums[rightIndex] * nums[rightIndex], nums[leftIndex] * nums[leftIndex]);
//             leftIndex++;
//             rightIndex--;
//         }
//     }
//     sortNums.unshift(nums[rightIndex] * nums[rightIndex]);
//     return sortNums;
// };

// 标准答案
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     let n = nums.length;
//     let res = new Array(n).fill(0);
//     let i = 0,
//         j = n - 1,
//         k = n - 1;
//     while (i <= j) {
//         let left = nums[i] * nums[i],
//             right = nums[j] * nums[j];
//         if (left < right) {
//             res[k--] = right;
//             j--;
//         } else {
//             res[k--] = left;
//             i++;
//         }
//     }
//     return res;
// };

let nums = [-4, -2, 0, 3, 5];
console.log(sortedSquares(nums));