function newAjax(opt) {
    // 设置一些默认参数
    let defaultParam = {
        url: '#',
        type: 'GET',
        data: {},
        contentType: 'application/json',
        async: false,
        success: function () {

        },
        error: function () {

        }
    }

    // 用新值替换默认参数
    for (let key in opt) {
        defaultParam[key] = opt[key];
    }

    // 先声明xhr对象
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // 将JSON转换为string，供contentType为application/x-www-form-urlencoded的传递参数
    let strParam = '';
    for (let i in defaultParam.data) {
        strParam += i + '=' + defaultParam.data[i] + '&';
    }
    strParam = strParam.substring(0, strParam.length - 1);

    // 打开连接
    if (defaultParam.type === 'GET') {
        xhr.open(defaultParam.type, defaultParam.url + "?" + strParam, defaultParam.async);
        xhr.send();
    } else {
        xhr.open(defaultParam.type, defaultParam.url, defaultParam.async);
        if (defaultParam.contentType === 'application/json') {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(defaultParam.data));
        } else {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(strParam);
        }
    }

    // 监听请求
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let res = JSON.parse(xhr.responseText);
                defaultParam.success(res);
            }
        }
    }
}
