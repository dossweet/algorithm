function add(a, b) {
    a = parseInt(a, 36);
    b = parseInt(b, 36);
    let sum = a + b;
    return sum.toString(36);
}

console.log(add('abbbb', 1));
