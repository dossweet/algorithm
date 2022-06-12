const http = require('http');
const fs = require('fs');
const queryString =require('querystring');
const port = 3000;

// 2. 创建服务器对象
const server = http.createServer();

// 3. 开启服务器
server.listen(port, () => {
    console.log(`端口正在${port}端口上运行`)
})

// 4. 监听服务器
server.on((req, res) => {
    // let url = req.pathname;
    let pathname = req.url;

    if(pathname === '/'){
        fs.readFile('./src/html/index.html','utf-8', (err,data) => {
            if(err){
                return console.log(err);
            }
            res.end(data);
        })
    }else if (pathname.startsWith('/public')){
        fs.readFile('./src/html/index.html', (err,data) => {
            if(err){
                return console.log(err);
            }
            res.end(data);
        })
    }else if(pathname.startsWith('/api')){
        let body = '';
        req.on('data', function (chunk){
            body += chunk;
        })
        req.on('end', () => {
            //...处理数据
            res.setHeader('Content-type', 'application/json;charset=utf-8');
            let data = {
                name:'sweet'
            }
            res.end(JSON.stringify(data));
        })
    }
})
