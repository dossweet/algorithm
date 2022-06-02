const koa = require('./application.js')
const app = new koa();

app.listen(3000, () => {
    console.log('server is running on 3000...');
});

app.use((ctx, next) => {
    ctx.message = 'ok';
    console.log(1);
    next();
    console.log(2);
})

// app.use((ctx, next) => {
//     ctx.message = 'ok';
//     console.log(3);
//     next();
//     console.log(4);
// })

// app.use((ctx, next) => {
//     ctx.message = 'ok';
//     console.log(5);
//     next();
//     console.log(6);
// })

// app.use((ctx, next) => {
//     console.log(ctx.message);
//     console.log(ctx.query);
//     ctx.body = 'hello, myKoa';
// })