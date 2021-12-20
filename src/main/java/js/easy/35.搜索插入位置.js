/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] > target){
            right = mid - 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else {
            return mid;
        }
    }
    // 分别处理如下四种情况
    // 目标值在数组所有元素之前  [0, -1]
    // 目标值等于数组中某一个元素  return middle;
    // 目标值插入数组中的位置 [left, right]，return  right + 1
    // 目标值在数组所有元素之后的情况 [left, right]， return right + 1
    return right + 1;


    //  let index = 0;
    //  for (let i=0;i<nums.length;i++){
    //      if(nums[i]==target||nums[i]>target){//等于或者大于都返回当前index
    //          return index;
    //      }else{
    //          index++;
    //          if((nums[i]<target&&nums[i+1]>target)||(i==nums.length-1&&nums[i]<target)){//数组当前元素小于目标值，数组下一个元素大于目标值，则该数组中不存在该元素，后面也不用比了
    //             return index;
    //          }
    //      }
    //  }
};