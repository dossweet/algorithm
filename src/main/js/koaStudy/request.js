module.exports = {
    get query() {
        const arr = this.req.url.split('?');
        // 如果有参数的话，就取参数
        if (arr[1]) {
            const obj = {};
            arr[1].split('&').forEach(str => {
                const param = str.split('=');
                obj[param[0]] = param[1];
            });
            return obj;
        }
        return {};
    }
}