/**
 * Created by kcarl on 15/9/5.
 */

//创建对象，提供长度
var buf1 = new Buffer(12);
console.log(buf1);
buf1.fill(0, 1, 3)

// 传入一个数组

var but2 = new Buffer([1,2,3]);
console.info(but2);


//直接通过字符串来创建


var but3 = new Buffer('hahhahah');
console.log(but3);


//一个汉子占3个子节


//修改性

//slice()
//var subs = str.slice(1,2);  峰    //截取位数  记住一个汉子占三个子节
//var subb = buf.slice(1,2);  8f   subb[0] = 0xff;

//subb.toString('utf8')  //转化位字符串

var buf5 = new Buffer(12);
buf5.write('zhufeng',0, 3);

var buff1 = new Buffer('zhufeng');
var buff2 = new Buffer('peixun');

console.log(Buffer.concat([buff1,buff2], 6));  //合并


var buff3 = new Buffer(6);

buff2.copy(buff3, 0, 0, 6);

console.log(buff3 instanceof  Buffer);

console.log(Buffer.isBuffer(buff3));

console.log(Buffer.byteLength('a'));
console.log(Buffer.isEncoding('utf-8'));