/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 从左往右找到第一个最小的元素，然后从当前最小元素位置开始找最大的元素，找到就抛出，依次循环
    let slowIndex = 0;
    let result = 0;
    while (slowIndex < prices.length - 1) {
        // 先找到最小的,如果当前元素比后一个元素大的话，证明当前元素不是最小的
        if (prices[slowIndex] > prices[slowIndex + 1]) {
            slowIndex++;
            continue;
        }
        // 接下来就要找最大的了
        let fastIndex = slowIndex;
        while (fastIndex < prices.length) {
            if (prices[fastIndex] < prices[fastIndex + 1]) {
                fastIndex++;
                continue;
            }
            result += prices[fastIndex] - prices[slowIndex];
            slowIndex = fastIndex + 1;
            break;
        }
    }
    return result;
};

// 其实上述这种解法比较常规，更好的解法是使用贪心算法。使用贪心算法取出每次的正向利润即可。
var maxProfit01 = function (prices) {
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        let diff = prices[i] - prices[i - 1];
        if (diff > 0) {
            result += diff;
        }
    }
    return result;
}

// 再进一步，这个题还可以用动态规划来解，
// dp数组的长度就是prices数组的长度
var maxProfit02 = function (prices) {
    let dp = new Array(prices.length).fill(0);
    for (let i = 1; i < prices.length; i++) {
        let diff = prices[i] - prices[i - 1];
        dp[i] = Math.max(dp[i - 1], dp[i - 1] + diff);
    }
    return dp[prices.length - 1];
}
