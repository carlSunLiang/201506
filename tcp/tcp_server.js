/**
 * Created by kcarl on 15/9/12.
 */
//端到端  完整有序  延迟和丢包不高
var net  =  require('net');
var fs = require('fs');
var util = require('util');
//发送方将字节流转成报文
//传输前要进行三次握手
// 回话种，服务器和客户端个提供一个scoket  ，两个socket形成

var server = net.createServer(function(socket){
    util.inspect(socket.address());//将对象转成一个字符串
    server.getConnections(function(err, count){
        console.log(count)
        server.maxConnection  = 10;

    })

    socket.setEncoding('utf8');
    socket.on('data', function(chunk){
        console.log('读到字节数'+socket.bytesRead);
    });

    socket.on('end', function(){
        console.log('客户端链接已经关闭');
    })
});

server.listen(8080,'localhost', function(){
    console.log('链接已经创建');
});



