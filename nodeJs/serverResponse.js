var http = require('http');
var server = http.createServer();
server.on('error',function(err){
    console.log(err);
});
server.on('listening',function(){
    console.log('listening......');
});
//http.STATUS_CODES
server.on('request',function(req,res){
    //console.log('req');
    res.writeHead(200,'OK',{
        //'content-type':'text/plain'
        'content-type':'text/html；charset=utf-8'
        //Response Header:plain纯文本格式:document
    });
    //status:200,OK
    res.write('<h1>hello</h1>');
    res.end();
});
server.listen(8080,'localhost');
//console.log(server.address());
