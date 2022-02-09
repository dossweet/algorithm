// class Commitent {
//     static PENDING = '待定';
//     static FUIFILLED = '成功';
//     static REJECTED = '失败';

//     constructor(func) {
//         this.status = Commitent.PENDING;
//         this.result = null;
//         this.resolveCallbacks = [];
//         this.rejectCallbacks = [];
//         try {
//             func(this.resolve.bind(this), this.reject.bind(this));
//         } catch (error) {
//             this.reject(error);
//         }
//     }

//     then(onFUIFILLED, onREJECTED) {
//         return new Commitent((resolve, reject) => {
//             onFUIFILLED = typeof onFUIFILLED === 'function' ? onFUIFILLED : () => {};
//             onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {};

//             if (this.status === Commitent.PENDING) {
//                 this.resolveCallbacks.push(onFUIFILLED);
//                 this.rejectCallbacks.push(onREJECTED);
//             }

//             if (this.status === Commitent.FUIFILLED) {
//                 setTimeout(() => {
//                     onFUIFILLED(this.result);
//                 });
//             }
//             if (this.status === Commitent.REJECTED) {
//                 setTimeout(() => {
//                     onREJECTED(this.result);
//                 });
//             }
//         });
//     }

//     resolve(result) {
//         setTimeout(() => {
//             if (this.status === Commitent.PENDING) {
//                 this.status = Commitent.FUIFILLED;
//                 this.result = result;
//                 this.resolveCallbacks.forEach(callback => {
//                     callback(result);
//                 });
//             }
//         });
//     }
//     reject(result) {
//         setTimeout(() => {
//             if (this.status === Commitent.PENDING) {
//                 this.status = Commitent.REJECTED;
//                 this.result = result;
//                 this.rejectCallbacks.forEach(callback => {
//                     callback(result);
//                 })
//             }
//         });
//     }
// }

// console.log('第一步');
// let obj = new Commitent((resolve, reject) => {
//     console.log('第二步');
//     setTimeout(() => {
//         resolve('这次一定');
//         reject('下次一定');
//         console.log('第四步');
//     });
// });
// obj.then(result => {
//     console.log(result);
// }, result => {
//     console.log(result);
// });
// console.log('第三步');

// const dealResolve = true;
// // 我们先写出一个promise，然后来仿照它
// let foo = new Promise(function(resolve, reject) {
//     if (dealResolve) {
//         resolve('hello');
//     } else {
//         reject('world');
//     }
// });
// foo.then((resolve) => {
//     console.log(resolve);
// }).catch((reject) => {
//     console.log(reject);
// }).finally(() => {
//     console.log('yyy');
// })

class NPromise {
    static PENDING = '待定';
    static FUIFILL = '成功';
    static REJECTED = '失败';
    constructor(func) {
        this.status = NPromise.PENDING;
        this.result = null;
        func(this.resolve.bind(this), this.reject.bind(this));
    }

    then(func) {
        new NPromise((resolve, reject) => {
            if (this.status === NPromise.FUIFILL) {
                func(this.result); // 传递参数进去
            }
        });
    }

    resolve(result) {
        this.status = NPromise.FUIFILL;
        this.result = result;
    }

    reject(reject) {
        this.status = NPromise.REJECTED;
        this.reject = reject;
    }
}

let obj = new NPromise((resolve, reject) => {
    resolve('hello');
});
obj.then((resolve) => {
    console.log(resolve);
})