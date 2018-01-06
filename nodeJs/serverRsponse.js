/*
* 搭建一个服务器的信息http模块
* */

//加载一个http模块
var http = require('http');
//通过http模块下的createServer创建并返回一个web服务器对象
var server = http.createServer();

server.on('error', function(err){
    console.log(err);
});
//服务器监听
server.on('listening', function() {
    console.log('listening...');
})
//客户端请求
server.on('request', function(req, res) {
    console.log('有客户端请求了');

    //console.log(req);

    //res.write('hello');
//设置头部信息，这个头部信息并不符合http协议引用的头信息，是非标准的。头信息必须在res.end()之前做的。
    res.setHeader('dfgeg', 'me');

    res.writeHead(200, 'dfgeg', {
        //'content-type' : 'text/plain'

        'content-type' : 'text/html;charset=utf-8'
    });

    res.write('<h1>hello</h1>');
    //写入的内容
    res.end();
    //每次请求结束必须添加res.end()
})

server.listen(8080, 'localhost');

//console.log(server.address());

