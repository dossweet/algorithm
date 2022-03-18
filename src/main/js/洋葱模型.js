function f(next) {
    console.log(1);
    next();// next的作用就是执行下一个函数
    console.log(2);
}

function g(next) {
    console.log(3);
    next();
    console.log(4);
}

function h(next) {
    console.log(5);
    next();
    console.log(6);
}

function compose(...funcs) {
    return function () {
        function execute(index) {
            // 依次处理函数
            const fn = funcs[index];
            if (!fn) return null;// 代表遍历结束
            fn(function next() {// 遇到next，就进入下一个函数
                execute(index + 1);// 进入下一个函数
            })
        }

        execute(0);
    }
}

function composeNew(...func) {
    return function () {
        function execute(index) {
            const fn = func[index];
            if (!fn) return null;
            fn(function next() {
                execute(index + 1);
            })
        }

        execute(0);
    }
}

const fn = compose(f, g, h);
fn();


function compose(...funcs) {
    return function () {
        function execute(index) {
            const fn = funcs[index];
            if (!fn) return null;
            fn(function next() {
                execute(index + 1);
            })
        }

        execute(0);
    }
}

function compose(...fn) {// 接收的是函数
    return function () {// 返回的也是函数
        function execute(index) {// 这个函数里干的就是执行当前函数，并且修改func里next指向
            const func = fn[index];
            if (!func) return null;
            func(function next() {
                execute(index + 1);
            });// 这一步会执行func这个函数，同时改写了func这个函数里面的next方法，使得遇到next就转去执行下一个函数
        }

        execute(0);
    }
}

function composeNew01(...funcs) {
    return function () {
        function execute(index) {
            const func = funcs[index];
            if (!func) return null;
            func(function next() {
                execute(index + 1);
            });
        }

        execute(0);
    }
}
