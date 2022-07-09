/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let count = 0;
    let tempArr = [];
    for (let i = 0; i < s.length; i++) {
        // 如果数组里包含当前元素，那么数组中出现当前元素之前的元素，包含当前元素都应该删除
        if (tempArr.includes(s[i])) {
            let index = tempArr.indexOf(s[i]);
            tempArr.splice(0, index + 1);
        }
        // 然后把当前元素加入数组，或者代表当前元素在数组里没有重复过
        tempArr.push(s[i]);
        count = count > tempArr.length ? count : tempArr.length;
    }
    return count;
};
console.log(lengthOfLongestSubstring('abbaab!ba'));
