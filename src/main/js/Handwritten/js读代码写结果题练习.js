// // let sym = {};
// // sym['blue'] = Symbol.for('yellow');
// // console.log(sym);
// // console.log(sym['blue']);
// // console.log(Symbol.keyFor(sym['blue']));
// // console.log(Reflect.ownKeys(sym));
// // console.log(Reflect.ownKeys(sym)[0]);
// // console.log(Object.getOwnPropertySymbols(sym));
// // console.log(Object.getOwnPropertyDescriptors(sym));
//
// let s1 = Symbol('hello');
// let obj = {
//     [s1]: 'foo bar'
// };
// console.log(obj);
// Object.defineProperty(obj, s1, {
//     value: 'world'
// })
// console.log(obj);
// obj[s1] = 'hello'
// console.log(obj);
//

// const a = 20;
// const obj = {
//     a: 10,
//     c: this.a + 20,
//     fn: function () {
//         return this.a;
//     }
// };
// console.log(obj.a);
// console.log(obj.c);// obj.c返回的是this.a + 20,但是this的指向不明确，因此返回NaN
// console.log(obj.fn());

// const c = new Array(1, 2, 3);
// console.log(Array.isArray(c));

// console.log(new Date().getMonth()+1);
// let arr = [1,2,3];
// let arrCopy = arr.clone();

// console.log(assets([]===[]));

// let urlString = 'https://www.jb51.net/article/f?p=1&e=2#/hash';
// let url = new URL(urlString);
// let param = new URLSearchParams(url.search);
// let ret = {};
// let queryParam ={};
// param.forEach((value, key) => {
//     queryParam[key] = value;
// });
// ret.origin = url.origin;
// ret.protocol = url.protocol;
// ret.host = url.host;
// ret.port = url.port;
// ret.pathname = url.pathname;
// ret.query = queryParam;
// ret.hash = url.hash;
// console.log(ret);

// debug一下就懂了
Promise.resolve().then(() => {
    console.log('promise1');
    setTimeout(() => {
        console.log('setTimeout1');
    });
});

setTimeout(() => {
    console.log('setTimeout2');
    Promise.resolve().then(() => {
        console.log('promise2');
    });
})
