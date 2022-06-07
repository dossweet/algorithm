// 思路：首先计算前两个元素的差值，计为初始差值。
// 同时记录当前的差值是整数还是负数，默认为null，当为null时，不计count
// 同时还需要一个记录正负的标记。
// 如果当前差值和前一个符号相反，则count++&更新标记的值。
// 如果当前差值和前一个符号相同，则contine;
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let count = 1;
    let flag = null;// 0 表示 差值是正数， 1 表示差值是负数
    if (nums.length === 0 ){
        return 0;
    }
    if (nums.length === 1){
        return count;
    }
    let diff = nums[1] - nums[0];
    if (diff > 0){
        flag = 0;
        count = 2;
    }else if(diff < 0){
        flag = 1;
        count = 2;
    }
    for (let i = 2; i < nums.length; i++){
        let diff = nums[i] - nums[i - 1];
        if (diff > 0 && flag != 0){// 当前差值为正数，前一个差值等于1或者null
            count++;
            flag = 0;// 更新差值为正数
        }else if(diff < 0 && (flag != 1)){ // 当前差值为负数， 前一个差值为正数或者null
            count++;
            flag = 1;// 更新差值为负数
        }
    }
    return count;
};
