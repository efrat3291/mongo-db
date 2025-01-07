db.getCollection("books").find({})
//1
db.books.distinct('title').map(t => t.toUpperCase());
//2
db.books.distinct('categories').map(c => {
    let count = db.books.countDocuments({ categories: c })
    return c + ' : ' + count
})
//3
db.books.aggregate([
    { $match: { title: /^A/ } },
    { $project: { title: 1, pageCount: 1 } },
    { $sort: { publishedDate: -1 } }
])
//4
db.books.aggregate([
    { $match: { status: 'PUBLISH' } },
    { $project: { status: 0 } },
    { $set: { is_publish: true } }
])
//5
db.books.aggregate([
    { $match: { pageCount: { $gt: 0 } } },
    { $skip: 10 },
    { $limit: 100 },
    { $project: { shortDescription: 0, longDescription: 0 } },
    { $out: 'ex5_collection' }
])
//6
db.books.aggregate([
    {
        $group: {
            _id: '$pageCount',
            sumB: { $sum: 1 }
        }
    },
    { $addFields: { thePageCount: '$_id' } },
    { $project: { _id: 0 } },
    { $sort: { pageCount: 1 } }
])
//7
db.books.aggregate([
    {
        $group: {
            _id: '$status',
            avgBooks: { $avg: '$pageCount' },
            minBooks: { $min: '$pageCount' },
            maxBooks: { $max: '$pageCount' },
            firstBooks: { $first: '$pageCount' },
            lastBooks: { $last: '$pageCount' }
        }
    }
])
//8
db.books.aggregate([
    {
        $group: {
            _id: '$status',
            disArrNames: { $addToSet: '$title' },
            ArrNames: { $push: '$title' }
        }
    }
])
//9
db.books.aggregate([
    {$unwind:'$authors'},
    {
        $group: {
            _id: '$authors',
            booksNum: { $sum: 1 },
            ArrBooks: { $push: '$title' },
        }
    },
    { $sort: { booksNum: -1 } }
])