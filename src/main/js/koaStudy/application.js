const http = require('http');
const _context = require('./context.js');
const _request = require('./request.js');
const _response = require('./response.js');
const { compose } = require('./utils.js');

class MyKoa {
    constructor() {
        this.middleware = [];
    }

    listen(...args) {
        const server = http.createServer((req, res) => {
            const ctx = this.createContext(req, res);
            const fn = compose(this.middleware);

            fn(ctx).then(() => { // 在这里传入的洋葱模型需要的参数ctx
                    res.end(ctx.body); // 等中间件执行完毕之后，再返回结果
                })
                .catch((err) => {
                    throw err;
                });
        });
        server.listen(...args);
    }

    // use函数是用来添加中间件的
    use(callback) {
        // this.callback = callback;
        this.middleware.push(callback);
    }

    // createContext函数是用来生成上下文的
    createContext(req, res) {
        const ctx = Object.assign(_context);
        const request = Object.assign(_request);
        const response = Object.assign(_response);
        ctx.request = request;
        ctx.response = response;
        ctx.req = request.req = req;
        ctx.res = request.res = res;
        return ctx;
    }
}

module.exports = MyKoa;