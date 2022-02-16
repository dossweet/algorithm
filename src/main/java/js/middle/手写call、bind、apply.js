// 手写call
function person(a, b, c, d) {
    return {
        name: this.name,
        a: a,
        b: b,
        c: c,
        d: d
    }
}

var egg = {name: 'sweet'};

Function.prototype.newCall = function (objb, ...newArguments) {//以多个参数的形式传递
    let obj = objb || window;
    obj.p = this;
    let result = '';
    if (!newArguments) {
        result = obj.p();
    } else {
        result = obj.p(...newArguments);
    }
    delete obj.p;
    return result;
};

const res = person.newCall(egg, 'hello','world');
console.log(res);


// function person(a, b, c, d) {
//     return {
//         name: this.name,
//         a: a,
//         b: b,
//         c: c,
//         d: d
//     }
//     console.log(this.name);
//     console.log(a, b, c, d);
// }
//
// var egg = {
//     name: 'sweet'
// };
//
// // 手写apply
// Function.prototype.newApply = function (obj, newArguments) {// 以一个数组的形式传入
//     var obj = obj || window;
//     obj.p = this;
//     //console.log(newArguments);
//     // 此时newArguments中存储的就是除this指向外的所有参数
//     //obj.p();//这里p()方法相当于是person()方法；
//     let result;
//     if (!newArguments) {
//         result = obj.p();
//     } else {
//         result = obj.p(...newArguments);//以多个参数的形式传入
//     }
//     delete obj.p;
//     return result;
// };
//
// let res = person.newApply(egg, ['hello', 'world']);
// console.log(res);

function bar(a,b,c,d){
    return 'hello'+a,b,c,d;
}

let foo = {
    name:'world'
}

Function.prototype.newCall = function (obj,...arguments){
    // 修改this的指向
    let _obj = obj || window;
    _obj.p = this;
    let result;
    // 传参
    if (arguments){
        result = _obj.p(...arguments);
    }else{
        result = _obj.p();
    }
    delete _obj.p;
    return result;
}

bar.newCall(foo);

Function.prototype.newApply = function (obj,arguments){
    // 修改this的指向
    let _obj = obj || window;
    _obj.p = this;
    let result;
    // 传参
    if (arguments){
        result = _obj.p(...arguments);
    }else{
        result = _obj.p();
    }
    delete _obj.p;
    return result;
}

// Function.prototype.newBind = function (obj,arguments){
//     if (typeof this !== 'function'){
//         throw new TypeError('类型错误');
//     }
//     let that = this;
//     let sumArr = [...arguments];
//     let temp = function (){};
//     let newF = function (argument){
//         sumArr.concat(...argument);
//         if (this instanceof newF){
//             that.apply(this,sumArr);
//         }else{
//             that.apply(obj,sumArr);
//         }
//     }
//     temp.prototype = that.prototype;
//     newF.prototype = new temp;
//     return newF;
// }

Function.prototype.newBind = function (obj,arguments){
    if (typeof this !== 'function'){
        throw new TypeError('类型错误');
    }
    let that = this;
    let sumArr = [...arguments];
    let result = function (argument){
        sumArr = sumArr.concat(...argument);
        if (this instanceof result){
            that.apply(this,sumArr);
        }else{
            that.apply(obj,sumArr)
        }
    }
    let temp = function (){};
    temp.prototype = that.prototype;
    result.prototype = new temp;
    return result;
}

