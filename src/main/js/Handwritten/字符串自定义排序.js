// a,b 都是小写字母， b中无重复字符，按照b中的字符顺序对a进行排序
// 约束：a中元素可能重复也可能在b中未出现，未出现按照字典序升序排序，放在最后
// 举例：
// a = 'hhcccaaffgbade'
// b = 'acdbe'
// 结果：'aaacccdbeffghh'
// 思路： 先统计出a中每个元素出现的频率，然后按照b中的顺序来生成a中对应存在的元素，对于剩下的元素，按照字典顺序来生成
let a = 'hhcccaaffgbade'.split('');
let b = 'acdbe'.split('');
// 统计出a在b中没有的元素
let remain = [];
// 统计出频率
let obj = a.reduce((prev, cur) => {
    if (!b.includes(cur) && !remain.includes(cur)){
        remain.push(cur);
    }
    if (prev[cur]) {
        prev[cur]++;
    } else {
        prev[cur] = 1;
    }
    return prev;
}, {});

// 让剩余元素按字典顺序排序
remain.sort();

let ret = '';
for (let i = 0; i < b.length; i++) {
    ret += b[i].repeat(obj[b[i]]);
}

for (let i of remain){
    ret += i.repeat(obj[i]);
}
console.log(ret);
