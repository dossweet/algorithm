/*
* @param {*} obj 实例对象
* @param {*} func 构造函数
* @returns true false
* */
const _instanceOf = (obj, func) => {
    if (!(obj && ['object', 'function'].includes(typeof obj))) {
        return false;
    }
    let proto = Object.getPrototypeOf(obj);

    if (proto === func.prototype) {
        return true;
    } else if (proto === null) {
        return false;
    } else {
        return _instanceOf(proto, func);
    }
}

let Fn = function () {

}
let p1 = new Fn();

console.log(_instanceOf({}, Object));
console.log(Fn.prototype);
console.log(Object.getPrototypeOf(p1));
console.log(_instanceOf(p1, Fn));
console.log(_instanceOf({}, Fn));// 空对象没有绑定到Fn上，所以是false
console.log(_instanceOf(null, Fn));
console.log(_instanceOf(1, Fn));

// function instanceOf(leftValue, rightValue) {
//     let rightProto = rightValue.prototype;
//     leftValue = leftValue._proto_;
//     // Object.prototype已经是最顶层的对象，其__proto__属性指向null
//     if (leftValue === null) {
//         return false;
//     }
//     if (leftValue = rightProto) {
//         return true;
//     }
//     return instanceOf(leftValue._proto_, rightValue)
// }
//
// console.log(instanceOf(new String('hello'), String));
