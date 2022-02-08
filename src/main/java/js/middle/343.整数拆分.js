/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0);// 注意：这里记得初始数据容量设置为n+1
    dp[2] = 1;
    for (let i = 3; i <= n; i++){
        for (let j= 1; j < i; j++){
            dp[i] = Math.max(dp[i],dp[i - j]*j,(i - j) * j);//之所以是dp[i-j]*j是因为（i-j)+j就是i呀
        }
    }
    return dp[n];
};

console.log(integerBreak(3));
