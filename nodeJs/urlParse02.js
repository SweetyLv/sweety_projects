/*
url.parse的使用方式2
*/
var http = require('http');
var url = require('url');

var server = http.createServer();

/*var urlStr = url.parse( 'http://www.baidu.com:8080/a/index.html?b=2#p=1' );
console.log(urlStr);*/

server.on('request', function(req, res) {

    //req.url ： 访问路径
    //?后面的部分 query string
    //console.log(req.url);

    var urlStr = url.parse( req.url );
    //console.log(urlStr);

    switch (urlStr.pathname) {
        case '/':
            //首页
            res.writeHead(200, {
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end('<h1>This is index.</h1>');
            break;

        case '/user':
            //user center
            res.writeHead(200, {
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end('<h1>Here is user center.</h1>');
            break;

        default:
            //处理其他情况
            res.writeHead(404, {
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end('<h1>There are no webpage.</h1>');
            //该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。
            //每次响应都必须调用 response.end() 方法。
            break;
    }

});

server.listen(8080, 'localhost');
