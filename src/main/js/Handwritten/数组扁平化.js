// let arr = [1, [1, 2, [3, 9]], 4, [5, 6], 7, 8];
// let newArr = [];

// 方法一：用递归
// function flatten(arr){
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] instanceof Array){
//             flatten(arr[i]);// 这是一个递归的过程
//         }else{
//             newArr.push(arr[i]);
//         }
//     }
// }
// flatten(arr);
// console.log(newArr);

// 方法二： 用reduce
// function fn(arr) {
//     return arr.reduce((prev, cur) => {
//         // concat不仅可以连接两个数组，也可以把新元素添加进数组并返回一个新数组
//         return prev.concat(Array.isArray(cur) ? fn(cur) : cur);
//         // return prev.concat(Array.isArray(cur)?fn(cur):cur)
//     }, []);
// }
//
// console.log(fn(arr));

// 方法三： 用flat(Infinity)方法
// console.log(arr.flat(Infinity));// flat参数为指定要提取嵌套数组的结构深度，默认值为1

// let arr1 = [1,2,3];
// console.log(arr1.concat(4));

// let newArr = [];
//
// function flatten(arr) {
//     for (let i of arr) {
//         i instanceof Array ? flatten(i) : newArr.push(i);
//     }
//     return newArr;
// }
//
// console.log(flatten([1, 2, [3, 4], 5]));
//
// let newArr02 = [];
// function flatten02(arr){
//     for (let i of arr){
//         if(i instanceof Array){
//             flatten02(i);
//         }else{
//             newArr02.push(i);
//         }
//     }
// }

let newArr03 = [];
function flatten03(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] instanceof Array){
            flatten03(arr[i]);
        }else{
            newArr03.push(arr[i]);
        }
    }
}

flatten03([1,2,[3,4],5])
console.log(newArr03);
