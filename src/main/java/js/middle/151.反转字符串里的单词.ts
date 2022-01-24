// 如果是考虑空间复杂度为1，那么本题的解题思路应该是：
// 先反转字符串，反转过程中去除多余的空格，此时所有的单词也会被反转，
// 然后再把每一个单词进行一下反转就行了
// 对于去除字符串中多余的空格，可以看看我移除元素的那个代码的逻辑，遇到空格就count++，

function reverseWords(s: string): string {
    let arr:string[] = s.split(' ');
    let newArr:string[] = arr.filter((item,index) => {
        return item !== '';
    })
    let len: number = newArr.length;
    let left = 0;
    let right = len - 1;
    while(left < right){
        let temp = newArr[right];
        newArr[right] = newArr[left];
        newArr[left] = temp;
        left++;
        right--;
    }
    return newArr.join(' ');
};

console.log(reverseWords('hello  world'));

