// 二分法刷题总结：https://leetcode.cn/problems/search-in-rotated-sorted-array/solution/cong-ji-ben-de-er-fen-fa-shuo-qi-ru-he-a-hof5/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    return -1;
};

console.log(search([5], 5));
