/**
 * Created by kcarl on 15/9/5.
 */
var fs = require('fs');

fs.writeFile('./1.txt', 'this is file1', {encoding: 'utf8', flag: 'a'}, function(){
    console.info('write done');
});



fs.writeFile('./1.txt', new Buffer('this is file2'), {encoding: 'utf8', flag: 'a'}, function(){
    console.info('write done');
})

