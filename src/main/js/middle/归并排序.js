// 归并排序的思想就是：先拆分，后合并
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = arr.length / 2;
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const leftSplited = mergeSort(left);
    const rightSplited = mergeSort(right);
    return merge(leftSplited, rightSplited);
}

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left, right);
}

function merge01(left, right){
    let arr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            arr.push(left[leftIndex++]);
        }else{
            arr.push(right[rightIndex++]);
        }
    }
    if (leftIndex < left.length){
        arr.push(...left.slice(leftIndex));
    }else if (rightIndex < right.length){
        arr.push(...right.slice(rightIndex));
    }
    return arr;
}

let arr = [1, 5, 8, 2, 9, 3, 6];
console.log(mergeSort(arr));
