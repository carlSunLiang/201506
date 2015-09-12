/**
 * Created by kcarl on 15/9/12.
 */


var dgram = require('dgram');
var server = dgram.createSocket('udp4');



var message = new Buffer('你好');

socket.send(buf,0, message.length, 41234, 'localhost', function(err){
    if(err){
        console.log('发送失败');
    }else{
        console.log('发送');

    }
})

socker.on('message', function(msg, rinfo){

})
