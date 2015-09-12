/**
 * Created by kcarl on 15/9/12.
 */


var EventEmitter = require('events').EventEmitter;

var util = require('util');

function Person(name){
    this.name = name;
}

util.inherits(Person, EventEmitter);


var xiaoming = new Person('xiao');

function sb(){
    console.log('xiaoming out');
}
xiaoming.addListener('dddd', sb);

xiaoming.emit('dddd')