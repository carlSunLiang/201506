/**
 * Created by kcarl on 15/9/5.
 */
/*
*
* 读取一部分数据
* */

var fs = require('fs');

// read 4 write 2 execute  1
// 所有人  所属组  其他
var buffer = new Buffer(3);
fs.open('./1.txt', 'r+', 438, function(err, fd){
    console.log(fd);

    fs.write(fd, new Buffer([8]), 0, 1, 1, function(){
        fs.read(fd, buffer, 0,1,1, function(err, byteLength){
            console.log(buffer.toString());
        })
    })




})

//0 stdin    1 stdout  2 stderr

process.stdin.on('data', function () {
    console.log(data.toString());
});