// 选择排序
let arr = [2, 4, 3, 7, 6, 5, 9, 1, 8]
for (let j = 0; j < arr.length - 1; j++) {
    var min = j//min为最小值得角标
    for (let i = j; i < arr.length; i++) {// 每一趟都选择出当前index开始最小的元素
        if (arr[min] > arr[i]) {
            min = i;
        }
    }
    //需要判断min的值改变了没有,改变了就需要进行交换
    if (min !== j) {
        let newarr = arr[min]
        arr[min] = arr[j]
        arr[j] = newarr
    }

}
console.log(arr)