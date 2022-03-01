class eventEmitter{
    // 其实发布者和订阅者模式就是对存在于类中的变量(实质是一个对象)进行统一操作，他们操作的都是同一个变量。
    // 订阅者会提前给对象中的变量绑定对应的方法
    // 那么当执行emit发布时，就会直接执行对象中这个键对应的方法了
    constructor() {
        this.subs = Object.create(null);//创建了一个对象
    }
    // 订阅者
    $on(eventType, fn){
        this.subs[eventType] = this.subs[eventType] || [];
        this.subs[eventType].push(fn);
    }
    // 发布者
    $emit(eventType){
       this.subs[eventType].forEach(fn => {
           fn();
       })
    }
}

let em = new eventEmitter();
em.$on('add',() => {
    console.log('hello');
})

em.$on('add', () => {
    console.log('world');
})

em.$emit('add');
