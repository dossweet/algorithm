// 封装ajax
export function ajax(opt) {
    let defaultParam = {
        type: 'GET',
        url: '#',
        data: {},
        dataType: 'json',
        async: false,
        success: function () {
        },
        error: function (){

        }
    }

    for (var key in opt) {
        defaultParam[key] = opt[key];
    }

    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    var paramStr = "";
    for (var k in defaultParam.data) {
        paramStr += k + '=' + defaultParam.data[k] + '&';
    }
    paramStr = paramStr.substr(0, paramStr.length - 1);

    if (defaultParam.type === 'GET') {
        xhr.open(defaultParam.type, defaultParam.url + "?" + paramStr, defaultParam.async);
        xhr.send();
    } else {
        xhr.open(defaultParam.type, defaultParam.url, defaultParam.async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(paramStr);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let res = JSON.parse(xhr.responseText);
                defaultParam.success(res);
            }
        }
    }
}


function ajaxNew(opt) {
    let defaultParam = {
        type: 'GET',
        url: '#',
        data: {},
        dataType: 'json',
        async: false,
        success: function () {
        }
    }

    for (let key in opt) {
        defaultParam[key] = opt[key];
    }

    // 首先需要声明XMLHttpRequest对象
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    let paramStr = ''
    for (let k in defaultParam.data) {
        paramStr += k + '=' + defaultParam.data[k] + '&';
    }
    paramStr = paramStr.substr(0, paramStr.length - 1);

    if (defaultParam.type === 'GET') {
        xhr.open(defaultParam.type, defaultParam.url + "?" + paramStr, defaultParam.async);
        xhr.send();
    } else {
        xhr.open(defaultParam.type, defaultParam.url, defaultParam.async);
        if (defaultParam.contentType === 'application/json') {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(dafaultParam.data));//调用ajax时传递进来的参数
        } else if (defaultParam.contentType === 'application/x-www-form-urlencoded') {
            // 设置请求类型为formData
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(paramStr);//调用ajax时传递进来的参数，
        }

    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let res = JSON.parse(xhr.responseText);
                defaultParam.success(res);
            }
        }
    }
}

function ajaxNew02(opt) {
    let defaultParam = {
        type: 'GET',
        url: '#',
        async: 'false',
        data: {},
        dataType: 'json',
        success: function () {

        }
    }
    // 替换默认参数
    for (let key in opt) {
        defaultParam[key] = opt[key];
    }

    let xhr;
    if (window.XMLHttpRequest) {// 现在的主流浏览器基本上都已经支持了
        xhr = new XMLHttpRequest();
    } else { //IE5和IE6
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    let dataStr = '';
    for (let i in defaultParam.data) {
        dataStr += i + '=' + defaultParam[i] + '&';
    }
    dataStr = dataStr.substr(0, dataStr.length - 1);
    // 建立连接
    // 因为GET和POST传递参数的方式不同，一个是跟在url后面，一个是以对象的形式传递
    // 因此需要做区分
    if (defaultParam.type.toUpperCase() === 'GET') {// 为GET请求
        xhr.open(defaultParam.type, defaultParam.url + '?' + dataStr, defaultParam.async);
        xhr.send();
    } else {// 为POST请求
        xhr.open(defaultParam.type, defaultParam.url, defaultParam.async);
        if (defaultParam.contentType === 'application/json') {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(dafaultParam.data));//调用ajax时传递进来的参数
        } else if (defaultParam.contentType === 'application/x-www-form-urlencoded') {
            // 设置请求类型为formData
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(dataStr);//调用ajax时传递进来的参数，
        }
    }

    //监听响应
    xhr.onreadystatechange = function () {
        //到达4的时候就表示请求发送成功了
        if (xhr.readyState === 4) {
            // 200表明请求成功得到响应
            if (xhr.status === 200) {
                // 就从xhr.responseText里获取返回内容
                let res = JSON.parse(xhr.responseText);
                defaultParam.success(res);
            }
        }
    }

}


function ajaxNew0212(option) {
    let defaultParam = {
        methodType: 'GET',
        url: '#',
        data: {},
        async: true,
        contentType: 'application/json',
        success: function () {// 回调函数可千万别忘了

        }
    }

    for (let key in option) {
        defaultParam[key] = option[key];
    }

    let xhr;
    let str = '';
    if (window.XMLHttpRequest) {// 浏览器兼容性测试
        xhr = new XMLHttpRequest();
    } else {
        // xhr = new ActiveXObject();要传参数
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    for (let i in defaultParam.data) {
        str += i + '=' + defaultParam.data[i] + '&';
    }
    str = str.substring(0, str.length);
    if (defaultParam.methodType.toUpperCase() === 'GET') {
        xhr.open(defaultParam.methodType, defaultParam.url + '?' + str, defaultParam.async);
        xhr.send();
    } else {
        xhr.open(defaultParam.methodType, defaultParam.url, defaultParam.async);
        if (defaultParam.contentType === 'application/json') {
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.send(JSON.stringify(defaultParam.data));
        } else {
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(str);
        }
    }

    // xhr.onreadystatechange(() => {// 是赋值操作而不是传参
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                defaultParam.success = JSON.parse(xhr.responseText);
            }
        }
    };
}

function ajax(obj) {
    let defaultParam = {
        type: 'GET',
        url: '#',
        data: {},
        contentType: 'application/json',
        async: false,
        success: function () {

        }
    }
    for (let key in obj) {
        defaultParam[key] = obj[key];
    }

    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    let dataStr = '';
    for (let i in defaultParam.data) {
        dataStr += i + '=' + defaultParam.data[i] + '&';
    }
    dataStr.substring(0,dataStr.length-1);

    if (defaultParam.type.toUpperCase() === 'GET') {
        xhr.open(defaultParam.type, defaultParam.url+'?'+dataStr, defaultParam.async);
        xhr.send();
    }else{
        if (defaultParam.contentType === 'application/json'){
            xhr.open(defaultParam.type, defaultParam.url, defaultParam.async);
            xhr.setRequestHeader('content-type','application/json;charset=utf-8');
            xhr.send(JSON.stringify(defaultParam.data));
        }else{
            xhr.open(defaultParam.type, defaultParam.url, defaultParam.async);
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
            xhr.send(dataStr);
        }
    }
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4){
            if(xhr.status === 200){
                let result = JSON.parse(xhr.responseText);
                defaultParam.success(result);
            }
        }
    }
}

function ajax0309(obj){
    let defaultParam = {
        type:'GET',
        url:'#',
        data:{},
        async: true,
        contentType:'application/json',
        success:function (){

        },
        error:function (){

        }
    }

    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    for (let key in obj){
        defaultParam[key] = obj[key];
    }

    let str = '';
    // for (let i in defaultParam.data){
    for (let i of defaultParam.data){
        str += i + '=' + defaultParam.data[i] +'&';
    }
    str = str.substring(0, str.length-1);

    if (defaultParam.type.toUpperCase() === 'GET'){
        xhr.open(defaultParam.type, defaultParam.url + '&' + str, defaultParam.async);
        xhr.send()
    }else if (defaultParam.type.toUpperCase() === 'POST'){
        if (defaultParam.contentType === 'application/json'){
            xhr.open(defaultParam.type, defaultParam.url, defaultParam.async);
            xhr.send(JSON.stringify(defaultParam.data));
        }else if (defaultParam.contentType === 'application/x-www-form-urlencode'){
            xhr.open(defaultParam.type, defaultParam.url, defaultParam.async);
            xhr.send(str);
        }
    }

    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4){
            if(xhr.status === 200){
                defaultParam.success(JSON.parse(xhr.responseText));
            }
        }
    }
}
