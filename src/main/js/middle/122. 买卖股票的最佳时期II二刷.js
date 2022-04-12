/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let result = 0;
    let buy = -1;
    let sell = 0;
    for (let i = 0; i < prices.length; i++) {
        // 找卖出的点
        if ((i === prices.length - 1 && prices[i] > prices[i - 1]) || (prices[i] >= prices[i + 1])) {
            if (buy === -1) {
                continue;
            }
            sell = i;
            result += prices[sell] - prices[buy];
            buy = -1;
        }
        // 找买入的节点
        if (prices[i] <= prices[i + 1]) {
            if (buy === -1) {
                buy = i;
                continue;
            }
            continue;
        }
    }
    return result;
}

// let prices = [7,1,5,3,6,4];
let prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));
