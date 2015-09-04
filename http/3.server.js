var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
http.createServer(function(req, res){
    var url = req.url;
    var urls = url.split('?')
    var pathname = urls[0];
    var queryObj = {};
    var query = urls[1];
    if(query){
        var fields = query.split('&');
        fields.forEach(function(field){
            var vals = field.split('=');
            queryObj[vals[0]] = vals[1];
        })
    }


    if(pathname == '/'){
        res.setHeader('Content-type', 'text/html');
        fs.readFile('./hello.html',function(err, data){
            res.write(data);
            //console.log(data.toString());
            res.end();
        })
    }else if(pathname == 'favicon.ico'){
        res.end('404');

    }else if(pathname == '/ajax'){
        res.end('hehe');
    }else if(pathname == '/params'){
        res.end(JSON.stringify(queryObj));
    }else{
        var filename = '.'+pathname;
        //if(path.extname == '.mp3'){
        //
        //}else{
        //
        //}
        res.setHeader('Content-type', mime.lookup(pathname));
        fs.readFile(filename, function(err, data){
           
                console.log('data',data);
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