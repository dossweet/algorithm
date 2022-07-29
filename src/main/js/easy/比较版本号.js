function test(versions){
    let res = versions[0].split('.');
    for(let i = 1; i < versions.length; i++){
        let cur = versions[i].split('.');
        let index = 0;
        while( index < cur.length && index < res.length){
            if(parseInt(cur[index]) > parseInt(res[index])){
                res = [...cur];
                break;
            }else if(parseInt(cur[index]) < parseInt(res[index])){
                break;
            }
            index++;
        }
    }
    return res.join('.');
}

let versions = ["2.1.4.5", "3.1.5", "3.1.20.6", "2.20", "1.9.9"];
console.log(test(versions));
