// 这篇题解写的好
// https://leetcode-cn.com/problems/repeated-substring-pattern/solution/jian-dan-ming-liao-guan-yu-javaliang-xing-dai-ma-s/
var repeatedSubstringPattern = function(s) {
    if(s == null || s.length < 1) return false;
    let len = s.length;
    let str  = s;
    // 这种方式就是循环移动最后一位至最前，从而形成新的字符串，判断新的字符串是否等于输入字符串，
    // 如果相等，就说明可以由重复子字符串得到，
    // 循环最多走len-1次，原本算一次，因此len == 1时代表走了len-1次，从而结束循环
    while(len > 1){
        str = str.charAt(s.length - 1) + str.substring(0, s.length - 1);
        //if(str.contains(s)) return true;
        if(str === s) return true;
        len--;
    }
    return false;

    // // 投机取巧法，利用set集合找出字符串包含的元素，然后判断字符串的长度是否是子串的整数倍
    // let arr = s.split('');
    // let set = new Set(arr);
    // let len = arr.length;
    // let setLen = set.size;
    // if(len % setLen === 0 && len > setLen){
    //     return true;
    // }
    // return false;
};

console.log(repeatedSubstringPattern('ababba'));