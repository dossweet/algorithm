let result = [];
let path = [];
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 全排列，顾名思义，path的长度为nums.length
    backTracking(nums);
    return result;
};

function backTracking(nums){
    if(path.length === nums.length){
        result.push([...path]);
        return;
    }
    for (let i = 0; i < nums.length; i++){
        if (path.includes(nums[i])){
            continue;
        }
        path.push(nums[i]);
        backTracking(nums);
        path.pop();
    }
}

let nums = [0,1];
console.log(permute(nums));