// let count = 0;

// let timer;
// timer = setInterval(() => {
//     test();
//     clearInterval(timer);
//     count++;
//     timer = setInterval(() => {
//         test();
//         clearInterval(timer);
//         timer = setInterval(() => {
//             test();
//             clearInterval(timer);
//         },1000 + count * 1000);
//     }, 1000 + count * 1000);
// }, 1000);

let count = 0;
let stop = false;
function test() {
    console.log(new Date());
}

// 多个定时器setTimeout之间是并行的
setTimeout(() => {
    stop = true;
},5000);

function fn() {
    if (stop === true) {
        return;
    }
    let delay = 1000 + 1000 * count++;
    let timer = setTimeout(() => {
        test();
        clearTimeout(timer);
        fn();
    }, delay);
}

fn();
