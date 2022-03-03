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
    ]
}

const obj01 = ['sweet', ['hello', 'world']];

function deepCopy(obj) {
    let ret = obj instanceof Array ? [] : {};
    for (let i in obj) {
        if (i instanceof Array) {
            deepCopy(obj[i])
        } else {
            ret[i] = obj[i];
        }
    }
    return ret;
}

console.log(deepCopy(obj));
console.log(deepCopy(obj01));
