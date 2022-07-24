// 这是基础版
function PromiseAll(arr){
    return new Promise(((resolve, reject) => {
        let count = 0;
        for (let i of arr){
            // 只要有一个执行不成功，就返回reject
             Promise.resolve(i).then(() => {
                 count++;
                 if (count === arr.length){
                     resolve('执行成功');
                 }
             }).catch(() => {
                 reject('执行失败');
             });
        }
    }))
}

// 还可以再完善一下，比如：如果输入的不是一个数组怎么办
function PromiseAll01(arr){
    return new Promise(((resolve, reject) => {
        if (!(arr instanceof Array)){
            reject('请输入数组');
        }

        if (arr === []){
            resolve('执行成功');
        }

        let count = 0;
        for (let i of arr){
            // 只要有一个执行不成功，就返回reject
            Promise.resolve(i).then(() => {
                count++;
                if (count === arr.length){
                    resolve('执行成功');
                }
            }).catch(() => {
                reject('执行失败');
            });
        }
    }))
}

const a = 1;
const b = Promise.reject('不符合要求');
const c = Promise.resolve(3);
PromiseAll([a, b, c]).then((e) => console.log(e)).catch((e) => console.log(e));
