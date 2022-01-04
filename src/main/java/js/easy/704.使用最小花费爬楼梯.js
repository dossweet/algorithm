/**
 * @param {number[]} cost
 * @return {number}
 */
// 下列这种解法是直接返回的最后一项，并且最后一项是根据最后一项的前两项来特殊处理的，不推荐
// var minCostClimbingStairs = function(cost) {
//     if (cost.length === 1) {
//         return cost[0];
//     } else if (cost.length === 2) {
//         return Math.min(cost[0], cost[1]);
//     }

//     let len = cost.length - 1;
//     let dp = new Array(len + 1);
//     dp[0] = cost[0];
//     dp[1] = cost[1];
//     for (let i = 2; i < len; i++) {
//         dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
//     }
//     dp[len] = Math.min(dp[len - 1], dp[len - 2] + cost[len]);
//     return dp[len];
// };

// let cost = [10, 15, 20];
// console.log(minCostClimbingStairs(cost));

var minCostClimbingStairs = function(cost) {
    let len = cost.length - 1;
    let dp = new Array(len + 1);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    return Math.min(dp[len - 1], dp[len]);
};

let cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));