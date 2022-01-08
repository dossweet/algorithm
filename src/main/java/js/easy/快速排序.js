function quickSort(arr, low, high) {
    if (low >= high) {
        return;
    }
    let key = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
        // while (arr[j] > key) {//没有i < j也不会报错，因为本次循环完了后会到第8行判断i和j
        //while (arr[j] > key && i < j) { // 如果不加等号，则无法对有重复元素的数组排序，会陷入死循环
        while (arr[j] >= key && i < j) {
            j--;
        }
        arr[i] = arr[j];
        //while (arr[i] < key && i < j) { // 如果不加等号，则无法对有重复元素的数组排序，会陷入死循环
        while (arr[i] <= key && i < j) { //这里必须加i<j
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = key;
    quickSort(arr, low, i - 1);
    quickSort(arr, i + 1, high);
};

let arr = [5, 3, 2, 6, 8, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);