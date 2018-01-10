/**
 * 配合调用admin01.js一起使用，app.get()的单个内容于app01.js的html结构内容的请求。
 * 应用程序的启动（入口）文件
 */

//加载express模块
var express = require('express');
//加载模板处理模块
var swig = require('swig');
//加载数据库模块
var mongoose = require('mongoose');
//加载body-parser，用来处理post提交过来的数据
//var bodyParser = require('body-parser');
//加载cookies模块
//var Cookies = require('cookies');
//创建app应用 => NodeJS Http.createServer();
var app = express();
//关键首页的路由绑定，下面69行调用首页admin.js
app.get('/',function(req,res,next){
  res.send('<h1>Welcome!</h1>');
})
//var User = require('./models/User');

//设置静态文件托管
//当用户访问的url以/public开始，那么直接返回对应__dirname + '/public'下的文件
app.use( '/public', express.static( __dirname + '/public') );

//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数：模板引擎的名称，同时也是模板文件的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine('html', swig.renderFile);
//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set('views', './views');
//注册所使用的模板引擎，第一个参数必须是 view engine，第二个参数和app.engine这个方法中定义的模板引擎的名称（第一个参数）是一致的
app.set('view engine', 'html');
//在开发过程中，需要取消模板缓存
swig.setDefaults({cache: false});

//bodyparser设置
//app.use( bodyParser.urlencoded({extended: true}) );

//设置cookie
/*app.use( function(req, res, next) {
    req.cookies = new Cookies(req, res);

    //解析登录用户的cookie信息
    req.userInfo = {};
    if (req.cookies.get('userInfo')) {
        try {
            req.userInfo = JSON.parse(req.cookies.get('userInfo'));

            //获取当前登录用户的类型，是否是管理员
            User.findById(req.userInfo._id).then(function(userInfo) {
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                next();
            })
        }catch(e){
            next();
        }

    } else {
        next();
    }
} );*/

/*
* 根据不同的功能划分模块
* */
//与上面的18行对应,还需要与外面的admin01.js里面输入相应的路由绑定的内容。详情见admin01.js
app.use('/admin', require('./routers/admin'));
/*app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));*/

//监听http请求
/*mongoose.connect('mongodb://localhost:27018/blog', function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
        //app.listen(8081);
    }
});*/
app.listen(8081);
