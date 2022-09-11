/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;
    let left = 1, right = Math.floor(x / 2);
    while (left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return right;

    // if (x === 0) return 0;
    // if (x < 4) return 1;
    // let mid = Math.floor(x / 2);
    // for (let i = 0; i <= mid; i++) {
    //     if (i * i === x) {
    //         return i;
    //     }else if (i * i > x){
    //         return i - 1;
    //     }
    // }
};

console.log(mySqrt(5));
