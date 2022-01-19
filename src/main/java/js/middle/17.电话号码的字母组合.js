// var letterCombinations = function(digits) {
//     const k = digits.length;
//     const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
//     if(!k) return [];
//     if(k === 1) return map[digits].split("");
//
//     const res = [], path = [];
//     backtracking(digits, k, 0);
//     return res;
//
//     function backtracking(n, k, a) {
//         if(path.length === k) {
//             res.push(path.join(""));
//             return;
//         }
//         for(const v of map[n[a]]) {
//             path.push(v);
//             backtracking(n, k, a + 1);
//             path.pop();
//         }
//
//     }
// };

// sweet实现
var letterCombinations = function(digits) {
    const k = digits.length;
    const map = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    const result = [];
    const path = [];
    if (!k){
        return result;
    }
    if (k === 1){
        return map[digits].split('');
    }

    backTracking(digits,k,0);

    return result;

    function backTracking(n,k,index){
        if( path.length === k){
            result.push([...path].join(''));
            return;
        }
        for (const ele of map[n[index]]){
            path.push(ele);
            backTracking(n,k,index + 1);
            path.pop();
        }
    }
};

console.log(letterCombinations('233'));

