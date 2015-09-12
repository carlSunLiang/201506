/**
 *udp  : 非链接  不要求安顺序  资源少，  处理速度快
 */


var dgram = require('dgram');


var server = dgram.createSocket('udp4');

server.on('message', function(msg, rinfo){
    console.log('接收到的'+ msg);
    console.log('客户端地址'+ rinfo);

    var buf = new Buffer('确认信息'+ msg);
    server.send(buf, 0, buf.length, rinfo.port, rinfo.address);



})
server.on('listening', function(){
    console.log('开始监听'+ server.address());
})
server.bind(41234,'localhost');