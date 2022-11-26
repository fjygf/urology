var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var config = require('./config');
var lessonConfig = require('./lesson');
var ipss = require('./routes/ipss');
var login = require('./routes/login');
var user = require('./routes/user');
var todos = require('./routes/todos');
var http = require('http');
var https = require('https');

var privateKey  = fs.readFileSync('../Nginx/2_www.sjtu-9hospital.top.key', 'utf8');
var certificate = fs.readFileSync('../Nginx/1_www.sjtu-9hospital.top_bundle.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

var PORT = 2000;
var SSLPORT = 3000;

/*
//创建http服务器
httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
*/

//创建https服务器
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

//var port = config.port;

app.use(bodyParser.json());

app.get('/', function(req, res) {
    if(req.protocol === 'https') {
        res.status(200).send('Welcome to Safety Land!');
    }
    else {
        res.status(200).send('Welcome!');
    }
});

/*
app.get('/', function (req, res) {
    console.log("hello")
    res.send("<h1>Hello World! This Class is called '" + lessonConfig.lesson + "'. Teacher is " + lessonConfig.teacher + ".</h1>");
});
*/

app.use('/login', login);

app.use('/user', user);

app.use('/todos', todos);

app.use('/ipss', ipss);

app.use(function(req, res, next) {

    res.status(404).json({
        error: '资源未找到'
    });

});

app.use(function(error, req, res, next) {
    console.log("错误！！！")
    console.log(error);
    res.status(500).json({
        error: '服务器内部错误'
    });

});
/*
app.listen(port, function(error) {
    if(error) {
        console.log('error!');
    }
    else {
        console.log("Server start! Listening on localhost:" + port);
    }
});
*/


