/**
 * Created by kcarl on 15/9/12.
 */



/*
* readFile writeFile  将文件作为一个整体
*
* read write   需要精确控制大小
*
*
* 不关心文件的大小，只关注是否读到了数据
*
 *   一组有序的，有起点和终点
 *
 *   网络传输要将对象转成字节流， 在经过流的传输，到达目的地，在将字节流转成对象
 *
 *   流由很多种类型  方法  事件
  *
  * */

var  fs = require('fs');

var file  = fs.createReadStream('./1.txt',{start: 1, end: 3});


file.on('open', function(){
    console.log('file opened');


})

//获取读到的数据

file.on('data', function(data){
    console.log(data);
})

file.on('end',function(){
    console.log('file read');
})

file.on('close', function(){
    console.log('file close');
})

file.on('error', function(err){
    console.log(err);
})




