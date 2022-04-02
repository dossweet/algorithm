let arr=[4,2,7,5,6,0,8];
let sleepSort=function(arr,callback){
    let res=[];
    arr.forEach(item=>{
        setTimeout(()=>{
            res.push(item)
            // 如果执行完毕，回调
            if(res.length===arr.length) callback(res);
        },item)
    });
}
sleepSort(arr,res=>{console.log(res)})
