/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let arr = (''+n).split('');
    let result = '';
    let count = 1;
    while(arr.length > 0){
        let cur = arr.pop();
        result = cur + result;
        count++;
        if(count === 4 && arr.length > 0){
            result = '.' + result;
            count = 1;
        }
    }
    return result;
};
