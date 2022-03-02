let arr = [5, 1, 2, 3];

function main(arr) {
    let ret = [];
    let path = [];

    function backTracking(arr, startIndex) {
        if (path.length === 3) {
            ret.push([...path]);
            return;
        }
        for (let i = startIndex; i < arr.length; i++) {
            let len = path.length;
            if (arr[i] > path[len - 1] || path.length === 0) {
                path.push(arr[i]);
            }
            backTracking(arr, i + 1);
            path.pop();
        }
    }

    backTracking(arr, 0);
    return ret;
}

// function main(arr){
//     // let key = arr[0];
//     // let ret = [];
//     // ret.push(key);
//     // for (let i = 1; i < arr.length; i++){
//     //     let len = ret.length - 1;
//     //     if(arr[i] < ret[len]){
//     //         let temp = [];
//     //         for(let j = 0; j < ret.length; j++){
//     //             if(ret[j] < arr[i]){
//     //                 temp.push(ret[j]);
//     //             }else{
//     //                 if(j === len || j === 0){
//     //                     temp.push(arr[i]);
//     //                 }
//     //                 break;
//     //             }
//     //         }
//     //         ret = temp;
//     //     }else if(len < 2){
//     //         ret.push(arr[i]);
//     //     }else{
//     //         return ret;
//     //     }
//     // }
//     // return ret;
// }
console.log(main(arr));
