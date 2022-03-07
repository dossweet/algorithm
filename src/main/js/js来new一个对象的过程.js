function main(name){
    this.name = name;
}

// 首先声明该构造函数的对象
let a = new main('hello');
// 把该对象的_proto_绑定到构造函数的prototype上
a._proto_ = main.prototype;
// 修改this指向为当前对象
main.call(a,'hello');
// 执行对象里的方法
console.log(a.name);
// 如果函数没有返回值，那么就会自动返回这个新对象
a;
