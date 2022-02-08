/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {// 还是没懂怎么做出来的
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++){
        for(let j = 1; j <= i; j++){
            //dp[i] += dp[以j为头结点左子树节点数量] * dp[以j为头结点右子树节点数量]
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};
