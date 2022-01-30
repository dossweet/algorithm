// 有一个细胞，每一个小时分裂一次，一次分裂出一个新细胞，第三个小时分裂后会自然死亡。那么M（M<=20）个小时后有多少细胞？
const bene = function (n) {
    if (n === 0) return 1;
    if (n === 1) return 2;
    if (n === 2) return 4;
    if (n === 3) return 7;
    if (n >= 4) return bene(n - 1) * 2 - bene(n - 4);
}

console.log(bene(6));
