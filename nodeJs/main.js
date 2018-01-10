/*
* 前台首页的展示main
*/
var express = require('express');
var router = express.Router();
router.get('/',function(req,res,next){
    res.send('首页');
});
module.exports = router;
