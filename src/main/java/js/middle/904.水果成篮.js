/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    //3.0 版本，用双指针法，即滑动窗口法,下面写法有点问题,还是看暴力的吧
    if (fruits.length === 1 || fruits.length === 0) {
        return fruits.length;
    }
    let left = 0;
    let key = 0;
    let firstEle = fruits[left];
    let secondEle = 'hello';
    let total = 0;
    for (let right = 0; right < fruits.length; right++) {
        if (fruits[right] !== firstEle && secondEle === 'hello') {
            secondEle = fruits[right];
            key = right;
        } else if ((fruits[right - 1] === firstEle && fruits[right] !== firstEle) ||
            (fruits[right - 1] === secondEle && fruits[right] === firstEle)) {
            key = right;
            if (key !== fruits.length - 1) {
                left = key;
            }
        } else if (fruits[right] !== firstEle && fruits[right] !== secondEle) {
            let sum = right - left;
            total = total > sum ? total : sum;
            left = key;
            key = right;
            firstEle = fruits[left];
            secondEle = fruits[right];
        }
    }
    let sum = (fruits.length - 1) - left + 1;
    total = total > sum ? total : sum;
    return total;

    // 1.0版本的错误之处在于，把第二个元素当做第二类元素，但是第二个元素可能是第一类的，因此报错
    // 正确写法是：把第一个不等于第一个元素的元素当做第二类元素
    // 2.0 版本
    // if (fruits.length === 1) {
    //     return 1;
    // }
    // let total = 0;
    // for (let i = 0; i < fruits.length - 1; i++) {
    //     let firstType = fruits[i];
    //     let secondType = 'hello';
    //     let firstTotal = 1;
    //     let secondTotal = 0;
    //     for (let j = i + 1; j < fruits.length; j++) {
    //         if (fruits[j] === firstType) {
    //             firstTotal++;
    //         } else if (secondType === 'hello') {
    //             secondType = fruits[j];
    //             secondTotal++;
    //         } else if (fruits[j] === secondType) {
    //             secondTotal++;
    //         } else {
    //             let sum = firstTotal + secondTotal;
    //             total = total < sum ? sum : total;
    //             break;
    //         }
    //     }
    //     let sum = firstTotal + secondTotal;
    //     total = total < sum ? sum : total;
    // }
    // return total;

    // 1.0版本。下面代码是错的
    // if (fruits.length === 1) {
    //     return 1;
    // }
    // let total = 0;
    // for (let i = 0; i < fruits.length - 1; i++) {
    //     let firstType = fruits[i];
    //     let secondType = fruits[i + 1];
    //     let typeArray = [firstType, secondType];
    //     let totalTemp = 2;
    //     for (let j = i + 2; j < fruits.length; j++) {
    //         if (typeArray.includes(fruits[j])) {
    //             totalTemp++;
    //         } else {
    //             break;
    //         }
    //     }
    //     total = totalTemp > total ? totalTemp : total;
    // }
    // return total;
};

let fruits = [1, 2, 3, 2, 2];
// let fruits = [0, 1, 0, 2];
// let fruits = [1, 0, 2, 3, 4];
// let fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
console.log(totalFruit(fruits));