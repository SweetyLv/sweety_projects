## website
*[三分钟了解json](http://blog.csdn.net/slwbcsdn/article/details/53458352)
*[nodejs前端模板引擎swig入门]0(https://www.jianshu.com/p/f0bffc42c1ce)
*[mongodb](https://www.mongodb.com)

## 相关mongoDB
* win+R  -> CMD里面 打开存放mongo.exe的安装路径，如：c:\> cd MongoDb\Server\3.6\bin, 在该目录下，输入数据库的存储路径，以及端口，设置后回车。
* 命令方式连接mongo：数据库存储的路径命令：mongod --dbpath=E:\nodeJs\Blog2\db port=27018
* 工具方式连接mongo:Robomongo 0.9.0-RC7
* [mongoose操作数据库文档](http://mongoosejs.com/)
* 连接数据库，mongoose.connect('mongdb://localhost:27018/blog',function(){}); 其中，connect(协议://)，这里利用的协议为mongdb协议，后面的function(){}为回调函数。
* 安装swig模板，在项目根目录下，通过npm安装：npm i -S swig
* 安装express-mongoose,需要在项目根目录下运行命令：npm install express-mongoose --save
* [mongoose 安装及配置](http://yunkus.com/mongoose-install-config/)
* 安装mongoose,需要在项目根目录下运行命令：npm install mongoose --save
* [形象描述schema与database等的区别](https://zhidao.baidu.com/question/1863152252753215947.html)
* [启动mongodb时候弹出系统api-ms-win-crt-runtime-l1-1-0.dll 丢失文件修复方法](https://jingyan.baidu.com/article/ab0b563067358ac15afa7dc5.html)

## node.js项目部署到云服务
* 安装node.js时记得修改系统变量参数的参考：https://www.cnblogs.com/learnings/p/7372718.html
* >[node.js项目部署到云服务](http://blog.csdn.net/chenlinIT/article/details/73343793)
* >[node.js部署到阿里云全过程](http://blog.csdn.net/moumaobuchiyu/article/details/55004430)
* >[xshell登陆云服务](https://jingyan.baidu.com/album/75ab0bcbc40b39d6864db23c.html?picindex=2)
* >[部署项目完整版](http://blog.csdn.net/u013263917/article/details/79037770)

## demo page
* [demo_teaching canvas](https://segmentfault.com/a/1190000008278925)
* [demo_code](https://demo.luckyw.cn/)


## 疑难问题
* [experts和module.exports的区别](http://cnodejs.org/topic/5231a630101e574521e45ef8)

## cmd & npm  
* 注释：$为指令符号，输入指令时不需要写$此符号
* cd ..  返回上一层目录
* cd \ 返回根目录
* d: 打开d盘
* npm -v  看npm版本
* node -v 看node版本
* npm install npm -g 通过npm命令升级为npm的新版本for Windows
* npm install <Module Name>  通过npm安装Node.js模块语法。
  例如  Node.js web框架模块 express。则表达为：  npm install express  
  安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。
  例如：var express = require('express');
* npm list -g  查看所有全局安装的模块
* npm iist grunt  查看某个模块的版本号
* npm uninstall express   卸载 Node.js 模块
* npm ls  你可以到 /node_modules/ 目录下查看包是否还存在，或者使用该命令查看
* npm update express   更新模块
* npm search express   搜索模块
* 创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。
  npm init
* 在 npm 资源库中注册用户（使用邮箱注册）
  npm adduser
  Username: mcmohd
  Password:
  Email: (this IS public) mcmohd@gmail.com
* npm publish  发布模块
* NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
* 使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
* 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
* 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
* 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
* 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
* 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。
  
  ## Node.js REPL(交互式解释器)
* Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。
* Node 自带了交互式解释器，可以执行以下任务：
* 读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
* 执行 - 执行输入的数据结构
* 打印 - 输出结果
* 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出
* 启动node的终端指令  $ node
* 下划线(_)获取表达式的运算结果：[具体案例](http://www.runoob.com/nodejs/nodejs-repl.html)
* REPL 命令
* ctrl + c - 退出当前终端。
* ctrl + c 按下两次 - 退出 Node REPL。
* ctrl + d - 退出 Node REPL.
* 向上/向下 键 - 查看输入的历史命令
* tab 键 - 列出当前命令
* .help - 列出使用命令
* .break - 退出多行表达式
* .clear - 退出多行表达式
* .save filename - 保存当前的 Node REPL 会话到指定文件
* .load filename - 载入当前 Node REPL 会话的文件内容。

Node.js 回调函数(期待11.23)

## 语法
* flags 可以是：
* 'r' - 以读取模式打开文件。如果文件不存在则发生异常。
* 'r+' - 以读写模式打开文件。如果文件不存在则发生异常。
* 'rs+' - 以同步读写模式打开文件。命令操作系统绕过本地文件系统缓存。




* MongoDB中，update使用$ne只能改变结果集中第一个文档吗？
我现在有一个nums集合，里面元素如下：

\> db.nums.find()
{ "_id" : ObjectId("599c3f530686a4fe90ef5a6f"), "n" : 1 }
{ "_id" : ObjectId("599c3f530686a4fe90ef5a70"), "n" : 2 }
定义一个查询文档，找到所有n不等于5的文档：

> var query={n:{$ne:5}}
然后尝试使用find函数查询：

> db.nums.find(query)
{ "_id" : ObjectId("599c3f530686a4fe90ef5a6f"), "n" : 1 }
{ "_id" : ObjectId("599c3f530686a4fe90ef5a70"), "n" : 2 }
查出来结果有两个，这是正常的。
但是接下来我想把符合要求的n都改为5，按照我的想法，使用$ne应该能筛选出两个结果，这样这两个文档的n都应该是5才对，但是:

> db.nums.update(query,{$set:{n:5}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.nums.find()
{ "_id" : ObjectId("599c3f530686a4fe90ef5a6f"), "n" : 5 }
{ "_id" : ObjectId("599c3f530686a4fe90ef5a70"), "n" : 2 }
好像只有第一个的n被改成了5，而第二个没有，但是第二个也满足query的查询条件呀？
update只能改变第一个结果嘛？
> 仔细阅读一下文档，update方法历史上默认只修改一个文档，如果想修改符合条件的多个文档应该使用参数{multi: true}:

> db.nums.update(query,{$set:{n:5}}, {multi: true});
> 后来为了防止混淆，又加入了updateOne/updateMany方法，所以也可以写成：

> db.nums.updateMany(query,{$set:{n:5}});
