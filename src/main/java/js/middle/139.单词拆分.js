// 初始解题思路，没有办法解'aaaaaaa'与wordDict为['aaaa','aaa'];的解
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//     // 我的思路：依次遍历字符串，因为题目中已经说了字典中的是单词嘛，因此我们通过遍历一遍字符串，然后判断在字典中能否找到，如果可以，那么就继续，否则一直增加这个单词直到字符串结束
//     let word = '';
//     let len = 0;
//     for(let i = 0; i < s.length; i++){
//         word += s[i];
//         if(wordDict.includes(word)){
//             //记录一下单词的长度，最后判断一下总和是否等于s,就知道是否可以全查出了
//             len += word.length;
//             word = '';
//         }
//     }
//     if(len === s.length){
//         return true;
//     }else{
//         return false;
//     }
// };

// 正确解法是用动态规划
// 动态规划采用的方式就是我字符串的每个字符的累加，我都判断一下在字典中遍历能不能找到，而不是把字符串进行分割
const wordBreak = (s, wordDict) => {
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for(let i = 0; i <= s.length; i++){
        for(let j = 0; j < wordDict.length; j++){
            if(i >= wordDict[j].length){// 如果当前字符大于字典中每个元素的长度
                // （当前字符串所在的元素位置-字典中遍历的这个元素的长度）=该字典中遍历的这个元素的长度
                // &&
                // dp[当前字符串所在的元素位置-字典中遍历的这个元素的长度]为true
                // 保证两个都为true，即代表背包的当前元素可以为true
                if(s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]){
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return dp[s.length];
}

let s = 'aaaa';
let wordDict = ['aaaa', 'aaa'];
console.log(wordBreak(s, wordDict));

// const wordBreak = (s, wordDict) => {
//
//     let dp = Array(s.length + 1).fill(false);
//     dp[0] = true;
//
//     for(let i = 0; i <= s.length; i++){
//         for(let j = 0; j < wordDict.length; j++) {
//             if(i >= wordDict[j].length) {
//                 if(s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
//                     dp[i] = true
//                 }
//             }
//         }
//     }
//
//     return dp[s.length];
// }
