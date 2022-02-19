/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let queue = s.split('');
    let first = queue.shift();
    let stack = [];
    stack.push(first);
    while(queue.length){
        let cur = queue.shift();
        stack.push(cur);
        let len = stack.length;
        if((stack[len - 1] ===")" && stack[len -2]==="(") ||
            (stack[len - 1] ==="]" && stack[len -2]==="[") ||
            (stack[len - 1] ==="}" && stack[len -2]==="{")){
            stack.pop();
            stack.pop();
        }
    }
    if(stack.length === 0){
        return true;
    }else {
        return false;
    }

    // let arr = s.split('');
    // let obj = arr.reduce((prev,cur) => {
    //     if(cur in prev){
    //         prev[cur]++;
    //     }else{
    //         prev[cur] = 1;
    //     }
    //     return prev;
    // },{});
    // if((obj['('] !== obj[')']) || (obj['['] !== obj[']'])|| (obj['{'] !== obj['}'])){
    //     return false;
    // }

    // return true;
};
