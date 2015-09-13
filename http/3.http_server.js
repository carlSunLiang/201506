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
var fs = require('fs');

/*
 *
 * */
var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url, true);

    var pathname = urlObj.pathname;

    if(pathname == "/"){
        fs.createReadStream('./post.html').pipe(res);
    }else if (pathname == '/post'){
        var result = [];
         req.on('data',function(chunk){
             result.push(chunk);
         })

        req.on('end',function(){
            var body =  Buffer.concat(result).toString();

            var bodyObj =  querystring.parse(body);
            var obj = JSON.stringify(bodyObj)
            res.end(obj);
        })
    }


})



server.listen(8080);


