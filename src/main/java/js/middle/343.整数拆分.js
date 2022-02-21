/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0);// 注意：这里记得初始数据容量设置为n+1
    dp[2] = 1;
    for (let i = 3; i <= n; i++){
        for (let j= 1; j < i; j++){
            dp[i] = Math.max(dp[i],dp[i - j]*j,(i - j) * j);//之所以是dp[i-j]*j是因为（i-j)+j就是i呀
        }
    }
    return dp[n];
};

// 采用数学方法解整数规划的题
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if( n <= 3){
        return n - 1;
    }
    let quotient = Math.floor(n / 3);
    let remainder = n % 3;
    if(remainder === 0){// 代表是3的倍数
        return Math.pow(3,quotient);
    }else if(remainder === 1){
        return Math.pow(3, quotient - 1) * 4;// 把最后一个3变成3+1=4;然后3^(n-1)再乘以最后的4即可
    }else{
        return Math.pow(3,quotient) * 2;// 最后的结果就是3的quotient再乘以2
    }
};

console.log(integerBreak(3));
