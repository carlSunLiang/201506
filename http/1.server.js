var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var url = req.url;
    if(url == '/'){
        fs.readFile('./hello.html',function(err, data){
            res.write(data);
            //console.log(data.toString());
            res.end();
        })
    }else if(url == '/style.css'){
        fs.readFile('./style.css', function(err, data){
            res.write(data);
            res.end();
        })
    }
}).listen(8080);

//一个真实的http来往流程
//1.浏览器像服务器发送http请求
//2.经过域名解析成ip地址   查看浏览器缓冲  -> 查看操作系统缓存 -> host -> dns递归搜索
//3.经过随机端口,与服务器进行3次握手建立tcp链接
//4.服务器端需要解析请求的路径和参数，经过后台处理生成响应页面
//
//
//
//