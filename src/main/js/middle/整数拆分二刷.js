/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    for (let i = 3; i <= n; i++){
        for (let j = 1; j < i - 1; j++){
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
};
