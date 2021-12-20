/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    // 使用左闭右闭区间--个人推荐这种方式
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] > target){
            right = mid - 1;// 去左面闭区间寻找
        }else if(nums[mid] < target){
            left = mid + 1;// 去右边闭区间寻找
        }else{
            return mid;
        }
    }
    return -1;
    // // 使用左闭右开区间
    // while(left < right){
    //     let mid = left + Math.floor((right - left) / 2);
    //     if(nums[mid] > target){
    //         right = mid;// 因为是右开，因此mid作为right，是不会被遍历到的
    //     }else if(nums[mid] < target){
    //         left = mid + 1;// 因为是左闭&mid已经被排除了，因此left = mid + 1;
    //     }else{
    //         return mid;
    //     }
    // }
    // if(nums[left] === target){
    //     return left;
    // }
    // return -1;
};