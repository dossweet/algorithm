/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 从左往右找到第一个最小的元素，然后从当前最小元素位置开始找最大的元素，找到就抛出，依次循环
    let slowIndex = 0;
    let result = 0;
    while(slowIndex < prices.length - 1) {
        // 先找到最小的,如果当前元素比后一个元素大的话，证明当前元素不是最小的
        if(prices[slowIndex] > prices[slowIndex + 1]){
            slowIndex++;
            continue;
        }
        // 接下来就要找最大的了
        let fastIndex = slowIndex;
        while(fastIndex < prices.length){
            if(prices[fastIndex] < prices[fastIndex + 1]){
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
