var path = require('path');

/*
* 将非标准转化成标准路径
*
* 1解析
* 2.多个杠转成一个杠
* 3.window 下反杠//转成正杠\\
* 4.如果已杠结尾，则保留
* */

path.normalize();