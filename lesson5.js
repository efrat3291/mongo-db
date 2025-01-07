db.getCollection("books").find({})

//1
db.books.find({title:{$in:[/c#/i,/java/i,/pyton/i]}});
//2
db.books.find({isdn:{$nin:[/^19/,1884777384,/0/]}});
//3
db.books.find({$nor:[{isdn:/^19/},{title:/mongo/},{pageCount:{$gt:600}}]});
//4
db.books.find({status:{$not:[PUBLIST]}})
//5
db.books.countDocument({pageCount:{$mod:[10,0]}})
//7
db.books.find({thumbnailUrl:{$exits:false}})