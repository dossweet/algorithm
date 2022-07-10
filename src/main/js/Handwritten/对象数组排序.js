//对象数组排序
var arr = [
    {name:'syy', age:0},
    {name:'wxy', age:18},
    {name:'slj', age:8},
    {name:'wj', age:20}
];

function compare(property){
    return function (a, b){//这里的a和b是两个数组元素，都是对象
        let value1 = a[property];
        let value2 = b[property];
        return value1 - value2;
    }
}

console.log(arr.sort(compare('age')));
