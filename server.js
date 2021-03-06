const Koa = require('koa');
const cors =  require('@koa/cors');
var serve = require('koa-static');
// var app = express();
// const cors = require("cors");
const router = require('./router.js')
const app = new Koa();
var PORT = process.env.PORT || 3000;
app
    .use(cors())
    .use(serve('./images'))
    .use(router.routes());

// app.get('/', function(req, res) {
//     res.status(200).send('Hello world');
// });

app.listen(PORT, function() {
        console.log('Server is running on PORT:',PORT);
    });