// 思路：这个题其实也是找上升和下降的过程，但是只累计上升，不累计下降
// 如果当前的值，比前一个的值小，那么就
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    let preItem = prices[0];
    for (let i = 0; i < prices.length; i++){
        let diff = prices[i] - preItem;
        if (diff > 0){
            sum += diff;
        }
        preItem = prices[i];
    }
    return sum;
};
