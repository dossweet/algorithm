/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    let set = new Set(nums1);
    // 先把一个数组全部放进set里
    // 然后依次判断第二个数组
    for(let i = 0; i < nums2.length; i++){
        if(set.has(nums2[i])){
            if(!result.includes(nums2[i])){
                result.push(nums2[i]);
            }
        }
    }
    return result;
};