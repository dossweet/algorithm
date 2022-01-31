// 'a.b.c' -> {a: {b: {c: null }}}
function main(a){
    let obj = {};
    let arr = a.split('.').reverse();
    let temp = `{ ${arr[0]} : null }`;
    for(let i = 1; i < arr.length; i++) {
        obj = `{ ${arr[i]} : ${temp} }`;
        temp = obj;
    }
    return obj;
}

console.log(main('a.b.c.d'));

// function main(a){
//     let obj = {};
//     let arr = a.split('.').reverse();
//     let temp = JSON.parse(JSON.stringify(`{ ${arr[0]} : null }`))
//     for(let i = 1; i < arr.length; i++) {
//         obj = JSON.parse(JSON.stringify(`{ ${arr[i]} : ${temp} }`))
//         temp = obj;
//     }
//     return obj;
// }
//
// console.log(main('a.b.c.d'));
