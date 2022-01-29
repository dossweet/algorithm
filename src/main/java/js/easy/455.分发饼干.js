/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 官方思路是：饼干从后往前遍历时，小孩的胃口也是从后往前遍历，这样资源就是最大化了
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let result = 0
    let index = s.length - 1
    for(let i = g.length - 1; i >= 0; i--) {
        if(index >= 0 && s[index] >= g[i]) {
            result++
            index--
        }
    }
    return result;
    //下面是我的思路
    // let count = 0;
    // g = g.sort((a,b) => a-b);
    // s = s.sort((a,b) => a-b);
    // let index = 0;
    // for(let i = 0; i < g.length; i++){
    //     if (index === s.length){
    //         return count++;
    //     }
    //     for(let j = index; j < s.length; j++){
    //         if(g[i]<=s[j]){
    //             count++;
    //             index = j+1;
    //             break;
    //         }
    //         index = j+1;
    //     }
    // }
    // return count;
};

console.log(findContentChildren([10,9,7,8],[5,6,1,7]));
