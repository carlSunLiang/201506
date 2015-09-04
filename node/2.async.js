var count = 0;
var eatBao =  function(){
    setTimeout(function(){
        console.log('eat bao');
        //eatHuangua();//回调陷阱    proimse
        if(++count == 2){
            done();
        }
    }, 1000)
}

var eatHuangua =  function(){
    setTimeout(function(){
        console.log('eat Huangua');
        if(++count == 2){
            done();
        }
    }, 1000)
}




var  done = function(){
    console.log('done');
}


eatBao();
eatHuangua();

