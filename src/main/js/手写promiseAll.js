// 所谓promiseAll,就是等promise第一个参数里的所有任务都执行完了之后，在进行后续的操作。因此第一个参数传的是一个数组
function PromiseAll(arr){
    return new Promise((resolve, reject) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++){
            Promise.resolve(arr[i]).then(() => {// 这一步的目的是把我们执行的元素变成Promise的对象
                count++;
                if (count === arr.length){
                    resolve('执行完毕');
                }
            }).catch(() => {
                reject('执行失败');
            })
        }
    });
}

let a = PromiseAll([1,2]);
a.then((item) => console.log(item));
