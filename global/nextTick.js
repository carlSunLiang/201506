/**
 * Created by kcarl on 15/9/12.
 */



function say(){
    console.log(1);
}


say();
//process.nextTick(say); 本次循环的尾部    优先级高一些

//process.setImmediate(say);  下次循环的头部
console.log(2);