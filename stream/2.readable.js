/**
 * Created by kcarl on 15/9/12.
 */


var fs = require('fs');

//非流式读取


var file = fs.createReadStream('1.txt');

file.on('readable', function(){
    var data = file.read(1024*64);
    if(data){
        console.log(data);
    }
})

file.on('end', function () {

})