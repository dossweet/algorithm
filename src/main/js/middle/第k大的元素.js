function main(arr, k) {
    let dui = [];
    for (let i = 0; i < arr.length; i++) {
        if (dui.length < k) {// 直接添加
            dui.push(arr[i]);
        } else if (arr[i] > dui[k - 1]) {
            dui[k - 1] = arr[i];
        }
        // 并调整堆为有序堆
        dui.sort((a, b) => b - a);
    }
    return dui.pop();
}

let arr = [6, 1, 2, 3, 4, 5];
console.log(main(arr, 2));
