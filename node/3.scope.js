/**
 * Created by kcarl on 15/9/4.
 */
var n = 1;
var s = 'hello';
var f = 'global';

function fn(){
    console.info(n);//undefined
    console.info(s);//hello
    n = 2;
    var n = 3;
    var f = 'f';
    function inner(){
        console.log(n);// 3
        console.log(s);// hello
        console.log(f);// f
    }
    inner();
}

