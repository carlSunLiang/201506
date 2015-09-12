var path = require('path');

/*
* 将非标准转化成标准路径
*
* 1解析 . ..
* 2.多个杠转成一个杠
* 3.window 下反杠//转成正杠\\
* 4.如果已杠结尾，则保留
* */

path.normalize();

path.join();  // 多个参数值转成一个路径字符串
//读取当前文件夹下面的子文件
fs.readdir(__dirname,function(err, files){
    fs.stat(path.join(__dirname, files[0]), function (err,stat) {
        if(stat.isFile()){// stat.isDirectory()
            fs.readFile(path.join(__dirname, files[0]), function () {
                console.log(data.toString());
            });
        }
    })
})

/*
* basename  获取一个路径中的文件名
* */

console.log(path.basename('./path.js', '.js'));
console.log(path.extname('./path.js'));//扩展名
console.log(path.sep);//文件路径分隔符