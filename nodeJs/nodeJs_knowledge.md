* MongoDB中，update使用$ne只能改变结果集中第一个文档吗？
> 仔细阅读一下文档，update方法历史上默认只修改一个文档，如果想修改符合条件的多个文档应该使用参数{multi: true}:

> db.nums.update(query,{$set:{n:5}}, {multi: true});
> 后来为了防止混淆，又加入了updateOne/updateMany方法，所以也可以写成：

> db.nums.updateMany(query,{$set:{n:5}});
