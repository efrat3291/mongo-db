use catalog
//1
db.books.update({pageCount:1234},{$set:{title:"1,2,3,4 to javaprogramming",status:"publish"}},{multy:true,upsert:true});

//2
db.books.update({title:/^b/i},{$unset:{publishedDate:true}});

//3
db.books.update({status:"publish",$exists:{publishedDate:false}},{$currentDate:{publishedDate:true}});

//4

//5
db.books.update({categories:{$elemMatch:["java"]}},{$mul:{price:1.1}})