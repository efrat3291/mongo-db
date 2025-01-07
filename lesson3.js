//mongoimport --db catalog --collection books --file books.json

//use bookShop   
//ex11
db.books.find({name:/data/i});
//ex12
db.books.find({name:/e^/})
//ex13
db.books.find().sort({name:-1});
//ex14
db.books.find().sort({name:1});
//ex15
db.books.find({name:/^j/i}).count()
db.books.countDocuments({name:/^j/i})
//ex16
db.books.find().sort({price:-1}).limit(5);
//ex17
db.books.find({categories:{$exists:true}})
//ex18
db.books.find({short_desc:{$exists:true}})
//ex19
db.books.countDocuments({short_desc:{$exists:true}})