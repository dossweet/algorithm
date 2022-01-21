// /**
//  * @param {string} s
//  * @return {string[][]}
//  */
// const isPalindrome = (s, l, r) => {
//     for (let i = l, j = r; i < j; i++, j--) {
//         if(s[i] !== s[j]) return false;
//     }
//     return true;
// }
//
// var partition = function(s) {
//     const res = [], path = [], len = s.length;
//     backtracking(0);
//     return res;
//     function backtracking(startIndex) {
//         let i = startIndex;
//         if(i >= len) {
//             res.push(Array.from(path));
//             return;
//         }
//         for(let j = i; j < len; j++) {
//             if(!isPalindrome(s, i, j)) continue;//判断当前位置到初始截点之间的字符串是否是回文串
//             path.push(s.substr(i, j - i + 1));//把当前回文串压入数组
//             backtracking(j + 1);
//             path.pop();
//         }
//     }
// };
//

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    let path = [];
    let len = s.length;
    backTracking(0);
    return result;

    function backTracking(startIndex) {
        let i = startIndex;
        if (startIndex >= len) {
            result.push(Array.from(path));
            return;
        }
        for (let j = i; j < len; j++) {
            // 如果字串不是回文串，则跳过，代表还未结束
            if (!isPalindrome(i, j, s)) {
                continue;
            }
            // substr和subString不一样,本题不能用subString，因为第二个参数可能会溢出
            path.push(s.substr(i, j - i + 1));
            backTracking(j + 1);
            path.pop();
        }
    }
};

const isPalindrome = function (i, j, s) {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(partition('abba'));
