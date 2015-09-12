/**
 * Created by kcarl on 15/9/12.
 */
var fs = require('fs');

//var out = fs.createWriteStream('./write2.txt');

//for(var i = 0; i< 10240; i++){
//    var flag = out.write(i.toString());
//    console.log(flag);
//}
//
//out.on('drain', function () {
//    console.log('缓存区');
//});


//
//
//out.on('error', function(){
//    console.log('error');
//})
//
//
//out.write('123');
//out.end('34566');


var file = fs.createReadStream('write2.txt');
var out = fs.createWriteStream('write3.txt');
file.on('data', function(data){
    var flag = out.write(data)
    if(!flag){
        read.pause();
    }
})

//




out.on('drain', function () {
    read.resume();
});

file.on('end', function(data){
    //console.log(file.read());
    out.end(data);
})


//file.pipe(out)



