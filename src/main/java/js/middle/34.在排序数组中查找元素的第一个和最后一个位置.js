/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const getLeftBorder = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let leftIndex = -2;
        // 利用二分思想先找其左边界，再找其右边界即可，注意找左边界的时候，由右侧逼近；找右边界的时候，由左侧逼近，即可
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
                leftIndex = right;
            } else {
                left = mid + 1;
            }
        }
        return leftIndex;
    };

    const getRightBorder = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let rightIndex = -2;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
                rightIndex = left;
            }
        }
        return rightIndex;
    };

    let leftBorder = getLeftBorder(nums, target); //在这里把值传进去
    let rightBorder = getRightBorder(nums, target);
    if (leftBorder === -2 || rightBorder === -2) {
        return [-1, -1];
    }
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
    return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));