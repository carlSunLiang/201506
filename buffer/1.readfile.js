/**
 * Created by kcarl on 15/9/5.
 */
var fs = require('fs');

fs.readFile('./file.txt', function(err, data){
    console.log(data);
});

