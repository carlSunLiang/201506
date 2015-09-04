/**
 * Created by kcarl on 15/9/4.
 */

//snapshot   frofile   看内存溢出没有  拍快照


//闭bao： 函数运行时产生的私有上下文


 var i =9;
function foo(){
    i = 0;
    return function(){
        return n+ i++;
    }
}

var f = foo();
var a = f(15);  console.log(a);//  15   i = 1;

var b = f()(15);  console.log(b); //15;
var c = f()(20);console.log(c); //20;
var d = f(20); console.log(d);  // 21;