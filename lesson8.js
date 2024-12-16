use test
//1
db.books.distinct('title',{} ).map(x=>x.upperCase())
//2
db.books.distinct('categories').map(x=>{
    const result = db.books.countDocuments({categories:x})
    return x+" "+result
})
//4
db.books.aggregate({$match:{status:'publish'},
                    $set:{is_publish:true},
                    $project:{status:0}
})
//4

