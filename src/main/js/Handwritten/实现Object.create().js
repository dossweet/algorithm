const create = (prop, props) => {
    if (!['object', 'function'].includes(typeof prop)) {
        throw new TypeError(`Object prototype may only be an Object or null: ${prop}`);
    }
    // 创建构造函数
    const Ctor = function () {
    }
    // 赋值原型
    Ctor.prototype = prop;
    // 创建实例
    const obj = new Ctor();
    // 支持自定义属性的传入，也就是第二个参数
    if (props) {
        Object.defineProperties(obj, props);
    }
    // 支持空原型
    if (prop === null) {
        obj._proto_ = null;
    }

    return obj;
}

// 1. Object.create常规使用
const person = {
    showName(){
        console.log(this.name);
    }
};

const me = Object.create(person);
const me2 = create(person);

me.name = 'sweet';
me2.name = 'sweet';

me.showName();
me2.showName();

// 2. 创建一个原型为null的空对象
const emptyObj = Object.create(null);
const emptyObj2 = create(null);

console.log(emptyObj);
console.log(emptyObj2);
