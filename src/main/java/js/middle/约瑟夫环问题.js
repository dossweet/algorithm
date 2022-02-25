// 约瑟夫环问题指的是假设有n个人，这n个人依次报数，报到指定数的人就退出报数，找出最后一个报数的人的下标
// 解决方法就是用一个哈希表来存每个人的下标和状态，参与报数的都置状态为true，不参与报数的都置状态为false
// n表示人数，number表示报的数
function main(n, target) {
    // let map = new Map();
    let arr = new Array(n).fill(true);
    let count = 0;
    while (count < n - 1) {// 等于n-1时，是最后一个元素
        let num = 0;// 用来每次报数的计数
        for (let i = 0; i < n; i++) {
            if (arr[i] === true) {// 表示当前元素可以参与报数
                num++;
                if (num === target) {// 如果计数等于报数值，则当前元素置为false，本次报数结束
                    arr[i] = false;
                    count++;
                    break;
                }
            }
            if (i === n - 1) {
                if (num < target) {// 从第一个元素开始继续报数
                    i = -1;//因为本轮循环之后，会执行一个++操作，因此需要i置为-1
                }
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {// 找出那个唯一为true的元素就好啦
        if (arr[i] === true) return i + 1;
    }
}

console.log(main(5, 4));
