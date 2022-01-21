/**
 * @param {string} s
 * @return {string[]}
 */
// var restoreIpAddresses = function(s) {
//     // 和分割回文串写法一样,这个题和分割回文串都做的不太好
//     const res = [], path = [];
//     backtracking(0)
//     return res;
//     function backtracking(i) {
//         const len = path.length;
//         if(len > 4) return;
//         if(len === 4 && i === s.length) {
//             res.push(path.join("."));
//             return;
//         }
//         for(let j = i; j < s.length; j++) {
//             const str = s.substr(i, j - i + 1);
//             if(str.length > 3 || +str > 255) break;
//             if(str.length > 1 && str[0] === "0") break;
//             path.push(str);
//             backtracking(j + 1);
//             path.pop()
//         }
//     }
// };

console.log(restoreIpAddresses("25525511135"));

var restoreIpAddresses = function(s) {
    const result = [];
    const path = [];
    const len = s.length;
    backTracking(0);
    return result;
    function backTracking(i){
        if (path.length === 4){
            result.push(path.join('.'));
            return;
        }
        if (path.length >= 4){
            return;
        }
        for (let j = i; j < len; j++){
            const str = s.substr(i,j - i + 1);
            if (str.length > 3){
                break;
            }
            if (+str > 255){
                break;
            }
            if (str.length > 1 && str[0] === '0'){
                break;
            }
            path.push(str);
            backTracking(j+1);
            path.pop();
        }

    }
}

