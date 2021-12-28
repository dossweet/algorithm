/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 思路二分查找，判断每次折半的那个元素的平方是否等于该整数
    // 如果不等于，判断是大于还是小于
    // 如果是小于，就是右半部分
    // 如果是大于，就是左半部分
    let left = 1;
    let right = x;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let multiply = mid * mid; // 乘积
        if (multiply > x) {
            right = mid - 1;
        } else if (multiply < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    if (left * left > x) {
        return left - 1;
    } else {
        return left;
    }
};