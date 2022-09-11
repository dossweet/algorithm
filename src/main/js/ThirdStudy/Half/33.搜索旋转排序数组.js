/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 用二分法，以mid为分界线，判断mid是否等于target，如果mid等于target，返回当前mid，
    // 否则判断mid左右两边的排序关系，
    // 如果mid > mid - 1,说明左边是升序的，
    //   此时我们需要判断mid与target的关系。
    //      如果mid大于target，说明target在左边。right = mid - 1;
    //      否则说明target在mid的右边。left = mid - 1;
    // 如果mid > mid + 1， 说明右边是升序的，
    //   此时我们需要判断mid与target的关系。
    //      如果mid大于target，说明target在左边。right = mid - 1;
    //      否则说明target在mid的右边。left = mid - 1;
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right){
        mid = left + ((right - left) >> 1);
        if (nums[mid] === target){
            return mid;
        }
        if (nums[mid] > nums[left]){// 左边升序
            if(nums[left] <= target && nums[mid] >= target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else if (nums[mid] < nums[right]){//右边升序
            if (nums[right] >= target && nums[mid] <= target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else{
            if (nums[mid] > target && nums[left] <= target ){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
    }
    return -1;
};

let nums = [3, 1], target = 1;
console.log(search(nums, target));
