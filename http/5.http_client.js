/**
 * Created by kcarl on 15/9/13.
 */


var http = require('http');

var options = {
    host: 'localhost',
    port: 8080,
    method: 'post',
    path: '/posts',
    headers: {name:'china'}
}


var req = http.request(options, function(res){
    console.log(res.statusCode);
    console.log(res.headers);
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('响应内容', chunk);
    })

})

req.end();