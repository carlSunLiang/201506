/**
 * Created by kcarl on 15/9/12.
 */

var EventEmitter = require('events').EventEmitter;
var fs  = require('fs');
var val1,val2,count = 0;

var e = new EventEmitter;

e.on('1', done);
e.on('2', done);

fs.readFile('1.txt','utf8' ,function(err,data){
    var1 = data;
    e.emit('1');
})

fs.readFile('2.txt','utf8', function(err,data){
    val2 = data;
    e.emit('2');
});


function done(){
    count ++;
    if(count ==2){
        console.log(val1 + val2);
    }
}