/**
 *  目录
 */

var fs = require('fs');

makeP('test/testChild', function (err) {
    if(err){
        console.log('create failled');
    }else{
        console.log('create  success');
    }
})

// mkdir -p test/test
// fs.statSync()  获取文件的状态  fs.exist()



function  makeP(path){
    var path = path || '/';
    var paths = path.split('/');
    if(paths && paths.length > 0){
        for(var i =1; i<= paths.length; i++){
            var p = paths.slice(0, i).join('/');
            var exists = fs.existsSync(p);
            if(exists){
                continue
            }else{
                fs.mkdirSync(p);
            }
        }
    }
}

//集联删除   如果文件夹由文件要先删除文件     删除文件夹   fs.rmdirSync('test/testChild')  删除文件  fs.unlinkSync('./1.txt')
//fs.realpath('./1.txt',function(err, path){});获取绝对路径  resolve()

deleteP('test2');

//function delP(path) {
//    var path = path || '';
//    var paths = paths.split('/');
//}
//递归了



/*
* 监控文件和文件夹的变化
*
* */

var fs = require('fs');  //stat

function exec(current, previous){
    //fs.watchFile('2.txt');
    if(Date.parse(previous.ctime) != Date.parse(previous.mtime)){
        console.log('修改');

    }else if(Date.parse(current.ctime) == 0){
        console.log('删除');
    }else{
        console.log('新创建');

    }
}

fs.watchFile('2.txt',{interval: 0}, function () {

})
