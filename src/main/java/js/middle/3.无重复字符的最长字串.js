/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 1){
        return 1;
    }
    let count = 0;
    let arr = s.split('');
    let slowIndex = 0;
    let fastIndex = 1;
    let len = arr.length;
    let set = new Set();
    set.add(arr[slowIndex]);
    while(fastIndex < len){
        if(!set.has(arr[fastIndex])){
            set.add(arr[fastIndex]);
            fastIndex++;
        }else{
            let length = set.size;
            count = count > length ? count:length;
            slowIndex++;
            fastIndex = slowIndex + 1;
            set.clear();
            set.add(arr[slowIndex])
        }
    }
    if (set.size > 1){
        let length = set.size;
        count = count > length ? count:length;
    }
    return count;
};
console.log(lengthOfLongestSubstring("au"));