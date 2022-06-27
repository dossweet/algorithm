let result = [];
let path = [];

var permute = function (nums){
    backTracking(nums);
    return result;
}

function backTracking(nums){
    if (path.length === nums.length){
        result.push([...path]);
        return;
    }
    // 全排列每次都是从0开始遍历
    for (let i = 0; i < nums.length; i++){
        if (path.includes(nums[i])){
            continue;
        }
        path.push(nums[i]);
        backTracking(nums);
        path.pop();
    }
}

let nums = [1,2,3];
console.log(permute(nums));
