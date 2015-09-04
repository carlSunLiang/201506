var hello = function(){
    console.log('hello');
}

setTimeout(hello, 1000);

console.log('let\'s go');

//  非阻塞
//nodejs.org/api/

var fs = require('fs');
fs.readFile('./index.md',function(err, data){//回调的第一个参数永远都是err
    //console.info(arguments);
    console.error(err);
    console.info(data.toString());
});
var content = fs.readFileSync('./index.md');//表示同步的意思
console.log('next');

