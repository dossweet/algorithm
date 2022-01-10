/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {// 这个题不是我做出来的，我之前的写法有误，while循环里又套了个循环，没必要
    let left = m - 1;
    let right = n - 1;
    let count = m + n - 1;
    let cur;
    while (left >= 0 || right >=0){
        if (left === -1){
            cur = nums2[right--];
        }else if (right === -1){
            cur = nums1[left--];
        }else if(nums1[left] > nums2[right]){
            cur = nums1[left--];
        }else {
            cur = nums2[right--];
        }
        nums1[count--] = cur;
    }
};

let nums1 = [0];
let nums2 = [1];
let m = 0;
let n = 1;

console.log(merge(nums1, m, nums2, n));