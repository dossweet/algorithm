const obj = {
    name: 'sweet',
    friend: [
        {
            name: 'hello',
            age: 18,
            sex: '女'
        },
        {
            name: 'world',
            age: 18,
            sex: '男'
        }
    ],
    test: {
        name: 'hello',
        age: 18,
        sex: '女'
    }
}

const obj01 = ['sweet', ['hello', 'world']];

function deepCopy(obj) {
    let ret = obj instanceof Array ? [] : {};
    for (let i in obj) {
        if (obj[i] instanceof Array || obj[i] instanceof Object) {
        // if (i instanceof Array || i instanceof Object) {
            // deepCopy(obj[i]);// 这里记得把值给赋值给ret[i]呀
            ret[i] = deepCopy(obj[i]);
        } else {
            ret[i] = obj[i];
        }
    }
    return ret;
}

console.log(deepCopy(obj));
console.log(deepCopy(obj01));
