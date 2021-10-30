var http = require('http');
var express = require('express');
var app = express();
const cors = require("cors");
const router = require('./router.js')

var PORT = 3000;
app.use(cors());

app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});