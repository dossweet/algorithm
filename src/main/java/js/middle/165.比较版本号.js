/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let arr01 = version1.split('.');
    let arr02 = version2.split('.');
    let len = Math.min(arr01.length, arr02.length);
    for(let i = 0; i < len; i++){
        if(parseInt(arr01[i]) < parseInt(arr02[i])){
            return -1;
        }else if(parseInt(arr01[i]) > parseInt(arr02[i])){
            return 1;
        }
    }
    if(arr02.length > arr01.length){
        for(let i = len; i < arr02.length; i++){
            if(parseInt(arr02[i]) > 0){
                return -1;
            }
        }
    }
    if(arr02.length < arr01.length){
        for(let i = len; i < arr01.length; i++){
            if(parseInt(arr01[i]) > 0){
                return 1;
            }
        }
    }
    return 0;
};

console.log(compareVersion('1.0.1','1'));