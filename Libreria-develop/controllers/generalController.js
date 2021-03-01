const Book = require('../models/Book');
const Disc = require('../models/Disc');

let generalController = {};

generalController.listAll = async (req,res)=>{

    const books =await Book.find({}).lean();
    const discs =await Disc.find({}).lean();

    res.render('templates/homeTemplate',{bookList:books,discList:discs});

};

generalController.findAll = async (req,res)=>{
    
    const books = await Book.find({$text: {$search: req.body.search, $caseSensitive: false}}).lean();
    const discs = await Disc.find({$text: {$search: req.body.search, $caseSensitive: false}}).lean();

    return res.render('templates/homeTemplate',{bookList:books,discList:discs});
}
module.exports = generalController;