/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力解题这种思路不能全A
// var maxProfit = function(prices) {
//     let result = 0;
//     for(let i = 0; i < prices.length - 1; i++){
//         for(let j = i + 1; j < prices.length; j++){
//             if(prices[j] >= prices[i]){
//                 let sum = prices[j] - prices[i];
//                 result = sum > result? sum : result;
//             }
//         }
//     }
//     return result;
// };

// 贪心法--从左边找最小值，从右边找最大值
// var maxProfit = function (prices) {
//     let lowerPrice = prices[0];
//     let profit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         lowerPrice = Math.min(lowerPrice, prices[i]);
//         profit = Math.max(profit, prices[i] - lowerPrice);// 最大值肯定在最小值的右边，因为最大值是在当前最小值的右边开始计算的
//     }
//     return profit;
// }

// 动态规划版本
var maxProfit = prices => {
    const len = prices.length;
    // 创建dp数组
    const dp = new Array(len).fill([0, 0]);
    // dp数组初始化
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 更新dp[i]
        dp[i] = [
            Math.max(dp[i - 1][0], -prices[i]),
            Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
        ];
    }
    return dp[len - 1][1];

}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
