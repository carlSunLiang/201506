/**
 * http  超文本传输协议
 *
 * 从服务器传输文本到本地浏览器  uri 统一资源表示符
 *
 *
 */

var http = require('http');
var url = require('url');
var querystring = require('querystring');
var util = require('util');

/*
*
* */
var server = http.createServer(function(req, res){
    //console.log(req.url);
    //console.log(req.method);
    //console.log(req.httpVersion);
    //console.log(req.headers);
    var urlObj = url.parse(req.url, true);


    console.log(urlObj);
    //res.setHeader('age', '6');
    //res.statusCode = 200;
    //
    //res.end(http.STATUS_CODES[404]);

    res.end();
})



server.listen(8080);


