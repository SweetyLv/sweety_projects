/*
* url的处理方式：解析一
* */
var http = require('http');
var url = require('url');

var server = http.createServer();

var urlStr = url.parse( 'http://www.baidu.com:8080/a/index.html?b=2#p=1' );
console.log(urlStr);

server.on('request', function(req, res) {

    var urlStr = url.parse( req.url );
    console.log(urlStr);
});
server.listen(8080, 'localhost');
