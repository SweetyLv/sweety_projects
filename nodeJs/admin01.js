var express = require('express');
var router = express.Router();
router.get('/user',function(req,res,next){
  res.send('User');
});
module.exports = router;
//该文件配合根目录下对应的app01.js使用，便能实现首页的路由绑定配置
