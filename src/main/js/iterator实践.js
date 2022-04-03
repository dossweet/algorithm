// 自定义一个iterator
function createIterator(items) {
    var i = 0;
    return {
        next: function () {
            var done = (i >= items.length);
            var value = !done ? items[i++] : undefined;
            return {
                done: done,
                value: value
            };
        }
    };
}

var iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next());  // "{ value: 2, done: false }"
console.log(iterator.next());  // "{ value: 3, done: false }"
console.log(iterator.next());  // "{ value: undefined, done: true }"
// 后续的所有调用返回的结果都一样
console.log(iterator.next());  // "{ value: undefined, done: true }"

// 使用系统的iterator
let arr = ['a','b','c'];

let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }
