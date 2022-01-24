/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = i + k > arr.length ? arr.length - 1 : i + k - 1;
        while (left < right) {
            let temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            right--;
            left++;
        }
    }
    return arr.join('');
};

console.log(reverseStr('abcdefghijk', 2));
