// arr为数组
// m为要求解的和
// n为数组的长度
function solve(arr, m, n) {
    arr = arr.sort((a, b) => a - b);
    let left = 0;
    let right = n - 1;
    let count = 0;
    let sum = 0;
    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum < m) {
            left++;
        } else if (sum > m) {
            right--;
        } else {
            count++;
            left++;
            right--;
        }
    }
    return count;
}

// let arr = [1, 3];
// let result = solve(arr, 4, 2);
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = solve(arr, 7, 10);
let arr = [1, 2, 3];
let result = solve(arr, 9, 3);
console.log(result);
