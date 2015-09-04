/**
 * Created by kcarl on 15/9/4.
 */
//this:行为的主体    直接执行  this  ＝ 全局     对象执行他自己的属性函数  this＝ 这个对象     call apply this = 第一个参数

var number = 2;

var obj = {
    number: 4,
    fn1:(function(){
    this.number *= 2;
    number = number * 2;//
    var number = 3;
    return function(){
        this.number *= 2;// 8
        number *= 3;//9
        console.log(number);
    }

    })()
}

//浏览器下
var fn1 = obj.fn1;
console.log(number);//4

fn1();// 9

obj.fn1();  //  27

//node下    2  9 27
