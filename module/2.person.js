/**
 * Created by kcarl on 15/9/5.
 */
//var person = require('./1.person.js');
//
//console.log(person.age);
//console.log(person.name);


function Person(name){
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}


Person.prototype.setName = function () {
   this.name = name;
}


Person.prototype.name = 'xn';


module.exports = Person;