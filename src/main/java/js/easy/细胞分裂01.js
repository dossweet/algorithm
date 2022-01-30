// 初始时只有一个细胞，后面每隔一秒钟，该细胞就会分裂一次，到达第四秒时，第一秒分裂出的细胞就可以进行分裂，依次类推
const bene = function (n) {
    if (n === 0) return 1;
    if (n === 1) return 2;
    if (n === 2) return 3;
    if (n === 3) return 4;
    if (n >= 4) return bene(n - 1) + bene(n - 3);
}

// 基础版，每隔一秒钟，就会有一个细胞进行分裂
const bene01 = function (n) {
    return Math.pow(2, n);
}

console.log(bene01(5));
