//解题思路：其实，我们只要当前保证元素走对应的步数到达的那个下标对应的值不为0，就可以到达终点
// 上面这个思路是有问题的。不能每次跳着走，因为存在跳着走到的元素位置为0，但之前有元素可以避免这个
// 应该是找覆盖范围，如果走到结束仍然可以覆盖所有，就代表可以到达终点
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length <= 1) {
        return true;
    }
    let cover = 0;
    for (let i = 0; i <= cover; i++){
        cover = Math.max(cover, i + nums[i]);
        // if (i + cover >= nums.length - 1){// 这里错的主要原因是别的元素的cover，不能拿来给自己用
        //     return true;
        // }
        if ( cover >= nums.length - 1){ // 其实就是当前元素的下标 + 元素是否大于数组元素长度，如果大于，那肯定可以到达终点
            return true;
        }
    }
    return false;
};

// let nums = [2, 0, 0];
// let nums = [2, 5, 0, 0];
let nums = [3, 2, 1, 0, 4];
let result = canJump(nums);
console.log(result)
