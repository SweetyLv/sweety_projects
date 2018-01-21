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
