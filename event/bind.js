/**
 * Created by kcarl on 15/9/12.
 */


var person = {
    name: 'hhe',
    say: function(words){
        console.log(this.name+'say'+ words);
    }
}


person.say('hello');


var p = {
    name : 'node.js'
}

person.say.call(p, 'hello11111');


//永久绑定上下文
var newSay = person.say.bind(p, 'hello');

newSay();


Function.prototype.b = function(obj){
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    return  function(){
        self.apply(obj,args );
    }
}