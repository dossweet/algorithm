/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 寻找包含e的单词的个数
 * @param string string字符串 输入字符串，不同单词用空格隔开
 * @return int整型
 */
function findEwordCount( string ) {
    let arr = string.split(' ');
    let count = 0;
    for(let i of arr){
        if(i.includes('e')){
            count++;
        }
    }
    return count;
}
module.exports = {
    findEwordCount : findEwordCount
};