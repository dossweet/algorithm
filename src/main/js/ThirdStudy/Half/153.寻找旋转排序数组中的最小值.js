/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 因为当前数组是经过多次旋转后得到的，
    // 因此我们可以通过多次比较第一个元素和最后一个元素的大小来找出最小的元素
    // 这种解法的时间复杂度是n
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < nums[nums.length - 1] || i === nums.length - 1){
            return nums[i];
        }
    }
    return nums[0];
};
console.log(findMin([3, 4, 5, 1, 2]));

var findMin01 = function (nums){
    if (!nums.length) return null;
    if (nums.length === 1) return nums[0];
    let left = 0, right = nums.length - 1,mid;
    if (nums[right] > nums[left]) return nums[0];
    while (left <= right){
        mid = left + ((right - left) >> 1);
        // 比右边的元素大，那么右边的这个元素就是最小的
        if (nums[mid] > nums[mid + 1]){
            return nums[mid + 1];
        }
        // 比左边的元素小，那么当前的这个元素就是最小的
        if(nums[mid] < nums[mid - 1]){
            return nums[mid];
        }
        // 如果nums[mid]大于nums[0],表明左边是升序的，因此left = mid + 1;否则right = mid - 1;表明最小值在左边
        if (nums[mid] > nums[0]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return null;
}
