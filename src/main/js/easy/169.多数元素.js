/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = nums.reduce((prev, cur) => {
        if(cur in prev){
            prev[cur]++;
        }else{
            prev[cur] = 1;
        }
        return prev;
    }, {});
    let ret = [];
    for(let i in obj){
        if(obj[i] > Math.floor(nums.length / 2)){
            ret.push(i);
        }
    }
    return ret;
};

let nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));
