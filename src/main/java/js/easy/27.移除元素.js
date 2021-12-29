/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @desc 时间复杂度为O(n),空间复杂度为O(1),第二种解法是双指针法
 */
var removeElement = function(nums, val) {
    let count = 0; //用一个计数器来判断后面的元素要移动几个位置
    let numsLength = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            count++;
        } else {
            numsLength++;
            if (count > 0) {
                // 当前元素需要向前移动count个位置
                nums[i - count] = nums[i];
            }
        }
    }
    return nums.slice(0, numsLength);
};

// 第二种解法：用双指针法，一个快指针和慢指针
var removeElement = function(nums, val) {
    let slowIndex = 0;
    let fastIndex;
    for (fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (fastIndex !== val) {
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex;
};


let nums = [3, 2, 2, 3];
let val = 3;

console.log(removeElement(nums, val));