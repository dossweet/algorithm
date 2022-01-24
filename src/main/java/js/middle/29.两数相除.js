/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend === 0 ||Math.abs(dividend) < Math.abs(divisor)){
        return 0;
    }
    if(dividend === -2147483648 && divisor === -1){
        return Math.pow(2,31) - 1;
    }
    if(divisor === 1){
        return dividend;
    }
    if(divisor === -1){
        return -dividend;
    }
    let count = 1;
    let mul = Math.abs(divisor);
    while(mul <= Math.abs(dividend)){
        count++;
        mul += Math.abs(divisor);
    }
    if((divisor > 0 && dividend < 0)|| (divisor < 0 && dividend > 0)){
        return count - 1 > 1?-(count - 1): -1;
    }
    return count - 1 > 1?(count - 1): 1;
    // if(dividend === 0){
    //     return 0;
    // }
    // if(divisor === 1){
    //     return dividend;
    // }
    // if(divisor === -1){
    //     if(dividend > Math.pow(2,-31)) return -dividend;
    //     return Math.pow(2,31) - 1;
    // }
    // let a = divisor < 0 ? -divisor : divisor;
    // let b = dividend < 0 ? -dividend : dividend;
    // let result = div(b, a);
    // if((divisor > 0 && dividend < 0) || (divisor < 0 && dividend > 0) ){ // 异号
    //     return -result;
    // }
    // return result;

    // function div(dividend, divisor){
    //     if(a < b) return 0;
    //     let count = 1;
    //     let mul = divisor;
    //     while(mul <= dividend){
    //         count += count;
    //         mul += mul;
    //     }
    //     return count + div(dividend - mul, divisor);
    // }
};

console.log(divide(-2147483648,-1));
