/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    if(nums.length < 3) return result;
    // 先将数组进行排序
    nums = nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) break;// 如果当前数组元素大于0，后面的就不用看了
        if(i > 0 && nums[i] === nums[i - 1]) continue;// 去重
        let l = i + 1;
        let r = nums.length - 1;
        while(l < r){
            let sum = nums[l] + nums[i] + nums[r];
            if(sum === 0){
                result.push([nums[i],nums[l],nums[r]]);
                while(l < r && nums[l] === nums[l+1]) l++;// 因为以当前节点进行遍历的可能有多个解都满足sum=0
                while(l < r && nums[r] === nums[r-1]) r--;// 因为以当前节点进行遍历的可能有多个解都满足sum=0
                l++;// 上面只是移动到了重复的那个元素，但我们需要真正使用的是重复元素的下一个元素
                r--;
            }else if(sum < 0){
                l++;
            }else if(sum > 0){
                r--;
            }
        }
    }
    return result;
};
