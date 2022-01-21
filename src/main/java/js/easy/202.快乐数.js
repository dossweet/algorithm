/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // 解题思路，如果一个数是快乐数，那么它经过有限次循环可以到1，
    // 否则，它会进入一个循环之中，这个循环永远也到不了1，
    // 因此只需要判断sum是否在set中存在
    // 如果存在，则代表会进入循环，永远到不了1
    // 如果不存在，就加入set，同时继续求和，进一步判断。
    // 能到1的，就不会进入循环
    let set = new Set();
    let arr = (''+n).split('');
    let sum = 0;
    arr.forEach((item) => {
        sum += item * item;
    })
    while(sum > 1 ){
        sum = 0;
        arr.forEach((item) => {
            sum += parseInt(item) * parseInt(item);
        })
        if(set.has(sum)){
            return false;
        }else{
            set.add(sum);
            n = sum;
        }
        arr = (''+n).split('');
    }
    return true;
};
