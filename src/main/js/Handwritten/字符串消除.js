// 'ABCCBCCCAA'每两个一样的就字母消除，剩余组成新的字符串还要消除
// 比如： 'ABCCBCCCAA'消除后变成'AC'
// 这个题感觉用栈来解最合适，从后往前依次消除
const mergeWord = function (str){
    let stack = [str[0]];
    for (let i = 1; i < str.length; i++){
        let last = stack.pop();
        if (last !== str[i]){
            stack.push(last);
            stack.push(str[i]);
        }
    }
    return stack.join('');
}

let str = 'ABCCBCCCAA';
console.log(mergeWord(str));
