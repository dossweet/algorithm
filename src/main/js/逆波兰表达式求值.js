//1.创建一个栈结构
function Stack() {
    var arr = [];
    this.push  = function (item) {
        arr.push(item);
    };
    this.pop  = function (item) {
        return  arr.pop(item);
    };
    this.size = function () {
        return  arr.length;
    };
    return arr;
};
//2.计算逆波兰表达式
function calc_exp(exp) {
    var stack = new Stack();
    for(var i = 0;i< exp.length;i++){
        var item = exp[i];
        if(["+","-","*","/"].indexOf(item)>= 0){
            var str1 = stack.pop();
            var str2 = stack.pop();
            var str3= str2 + item + str1;
            stack.push(parseInt(eval(str3)))
        }else {
            stack.push(item);
        }
    }
    console.log(stack[0])
};
//3.参数
var arr1= [2,8,'*',16,2,'/','+'];//普通表达式为 2*8+16/2
var arr2=[28,16,2,'-','+'];//普通表达式为 28+(16-2)
//4.验证
calc_exp(arr1);//24
calc_exp(arr2);//42
