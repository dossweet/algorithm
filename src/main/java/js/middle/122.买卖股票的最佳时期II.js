/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    // 用result来记录股票收益之和
    let result = 0;
    // 用temp来记录单次收益，是取连续区间的终止和起始位置
    let temp = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i - 1]){
            temp = prices[i] - buy;
            if(i === prices.length - 1){
                result += temp;
            }
        }else{
            buy = prices[i];
            result += temp;
            temp = 0;
        }
    }
    return result;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
