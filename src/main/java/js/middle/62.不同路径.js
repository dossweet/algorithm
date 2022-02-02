//这是一道经典的动态规划题
//根据题目只能向右和向下行走，我们可以得出状态转移方程为：dp[i][j] = dp[i-1][j]+dp[i][j-1];
//接着我们需要确定状态初始值：dp[0][j] = 1;dp[i][0] = 1;
// 最后就可以返回结果了
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(item => new Array(n).fill(0));
    for (let i = 0; i < m; i++){
        dp[i][0] = 1;
    }
    for (let i = 0; i < n; i++){
        dp[0][i] = 1;
    }
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};

console.log(uniquePaths(3,2));
