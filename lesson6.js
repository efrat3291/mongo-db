use catalog
//6
db.books.find({categories:{$size:0}})
//7
db.books.find({thumbnailUrl:{$exists:false}})
//8
db.books.find({authors:{$all:["Robi Sen"]}},{title:1,longDescription:1})
//9
db.books.find({authors:/a/i},{title:1,longDescription:1})
//10
db.books.find({categories:['XML','Internet']})
//11
db.books.find({categories:{$all:["XML","XML"]}})
//12
db.books.count({authors:{$all:[""]}})
//13
db.books.count({"authors.3.0":{$all:[""]}})
//14
db.books.count({$not:{_id:{$type:7}}})