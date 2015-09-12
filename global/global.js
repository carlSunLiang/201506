/**
 * Created by kcarl on 15/9/12.
 *
 *
 * 全局变量的宿主
 *
 * 全局对象的属性
 *
 */


var a = 10;
// 反模式
//global.b = 10;
//c = 12;
exports.a = a;


console.log(__dirname);
console.log(__filename);


console.log()
console.error()
console.info()
console.warn()


console.dir()



console.trace();//输出当前的堆栈信息

console.assert();//断言   单元测试

console.assert(1==2,'buzhengque')