/**
 * @param {number} n
 * @return {number}
 */
// 动态规划普通版
var climbStairs = function(n) {
    if (n === 1) {
        return n;
    }
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

// 动态规划简化版
var climbStairs = function(n) {
    if (n === 1) {
        return n;
    }
    let dp = new Array(2);
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 3; i <= n; i++) {
        let temp = dp[1];
        dp[1] = dp[1] + dp[0];
        dp[0] = temp;
    }
    return dp[1];
};