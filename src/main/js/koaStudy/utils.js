module.exports.delegate = function Delegate(obj, property) {
    let setters = [];
    let getters = [];
    let listens = [];

    function listen(key) {
        Object.defineProperty(obj, key, {
            get() {
                return getters.includes(key) ? obj[property][key] : obj[key];
            },
            set(val) {
                if (setters.includes(key)) {
                    obj[property][key] = val;
                } else {
                    obj[key] = val;
                }
            }
        });
    }

    this.getter = function(key) {
        getters.push(key);
        if (!listens.includes(key)) {
            listen(key);
            listens.push(key);
        }
        return this;
    };

    this.setter = function(key) {
        setters.push(key);
        if (!listens.includes(key)) {
            listen(key);
            listens.push(key);
        }
        return this;
    };

    return this;
}

module.exports.compose = (middleware) => { // middleware 中间件函数数组, 数组中是一个个的中间件函数
    if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
    for (const fn of middleware) {
        if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
    }
    return function(context, next) {
        // last called middleware #
        let index = -1
        return dispatch(0)

        function dispatch(i) {
            if (i <= index) return Promise.reject(new Error('next() called multiple times'))
            index = i
            let fn = middleware[i]
            if (i === middleware.length) fn = next
            if (!fn) return Promise.resolve()
            try {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            } catch (err) {
                return Promise.reject(err)
            }
        }
    }
}


// // 洋葱模型本质上是一个回溯的过程
// module.exports.compose = (middleware) => {
//     return (ctx, next) => { // 这里的ctx是一个闭包
//         let index = -1;
//         return dispatch(0); // 从中间件的第一个元素开始处理

//         function dispatch(i) {
//             if (i <= index) return Promise.reject(new Error('error'));
//             index = i; // 记录下标
//             const cb = middleware[i] || next; // 中间件数组中的每一个元素都是一个函数,next是传递进来的第二个参数，一般我们只会传递第一个参数进来，所以next是null
//             if (!cb) return Promise.resolve(); // 如果最后一个都遍历完了，就依次向上回到54行cb函数那里执行next之后的代码
//             try {
//                 return Promise.resolve(
//                     cb(ctx, function next() { // 执行cb函数，cb函数中有next，遇到next，就执行下一个中间件
//                         return dispatch(i + 1);
//                     })
//                 );
//             } catch (error) {
//                 return Promise.reject(error);
//             }
//         }
//     };
// }