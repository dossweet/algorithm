/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) { // 滑动窗口求解法-双指针法
    let left = 0;
    let sum = 0;
    let result = Number.MAX_VALUE;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            result = Math.min(result, right - left + 1); //取长度最小的
            sum -= nums[left++];
        }
    }
    return result === Number.MAX_VALUE ? 0 : result;
};
// var minSubArrayLen = function(target, nums) { // 此种方式是暴力求解
//     let sum = 0;
//     let sonArray = new Array(nums.length).fill(0);
//     let tempArray = [];
//     let sonLen = 'hello';
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             if (sum < target) {
//                 sum += nums[j];
//                 tempArray.push(nums[j]);
//             } else {
//                 break;
//             }
//         }
//         // 从下一个元素开始计算总和时需要清零
//         if (sum >= target && tempArray.length <= sonArray.length) { // 要加等号，存在数组所有元素相加刚好等于目标元素
//             sonArray = [];
//             sonArray.push(...tempArray);
//             sonLen = sonArray.length;
//         }
//         sum = 0;
//         tempArray = [];
//     }
//     return sonLen === 'hello' ? 0 : sonLen;
// }

let target = 11;
let nums = [1, 1, 1, 1, 1, 1];
console.log(minSubArrayLen(target, nums));

// 下列这种做法废弃，不推荐，麻烦且毫无优化
// var minSubArrayLen = function(target, nums) {
//     // 先记录下自己的初步思路，当然时间复杂度和空间复杂度可能有点大
//     // 先将数组排序，然后用二分法查找出等于待比较元素的值，如果没找出来，则找出比待比较元素小的最大元素，然后看最小元素能否配对，若不能，左移，然后继续判断
//     quickSort(nums, 0, nums.length - 1);
//     let left = 0;
//     let right = nums.length - 1;
//     let targetIndex = 0;
//     while (left <= right) {
//         let mid = left + Math.floor((right - left) / 2);
//         if (nums[mid] > target) {
//             right = mid - 1;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             targetIndex = mid;
//             break;
//         }
//     }
//     if (targetIndex === 0 && nums[targetIndex] !== target) {
//         targetIndex = left;
//     }

//     if (nums[targetIndex] >= target && targetIndex === 0) {
//         return 0;
//     }
//     // 至此已经找到了待比较元素的下标
//     if (nums[targetIndex] === target) {
//         return 1;
//     } else {
//         //...
//     }
// };

// function quickSort(arr, low, high) {
//     if (low >= high) {
//         return;
//     }
//     let key = arr[low];
//     let i = low;
//     let j = high;
//     while (i < j) {
//         // while (arr[j] > key) {//没有i < j也不会报错，因为本次循环完了后会到第8行判断i和j
//         while (arr[j] >= key && i < j) {
//             j--;
//         }
//         arr[i] = arr[j];
//         while (arr[i] <= key && i < j) { //这里必须加i<j
//             i++;
//         }
//         arr[j] = arr[i];
//     }
//     arr[i] = key;
//     quickSort(arr, low, i - 1);
//     quickSort(arr, i + 1, high);
// }