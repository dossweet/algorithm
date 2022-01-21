var isPalindrome = function (s) {
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    while (leftIndex <= rightIndex) {
        if (s[leftIndex] !== s[rightIndex]){
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}

// console.log(isPalindrome('absaba'));

let c = console.log.bind(console);
c(isPalindrome('absaba'));
