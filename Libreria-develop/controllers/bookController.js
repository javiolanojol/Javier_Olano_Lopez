const Book = require('../models/Book');

let bookController = {};

bookController.list = (req,res)=>{

    Book.find({}).lean().exec((err, books)=>{
        if( err ){ console.log('Error: ', err); return; }

        res.render('templates/catalogTemplate',{bookList:books,decision:true});   
        
    });

};

bookController.show = (req,res)=>{

    Book.findOne({_id: req.params.id}).lean().exec((err, book)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('templates/editTemplate', {bookReq:book});
    });

};



bookController.edit = async (req,res)=>{

    const filter = { _id: req.params.id};
    const update = { title: req.body.title , author:req.body.author, genre:req.body.genre,
        label_publisher:req.body.label_publisher, img_url:req.body.img_url,img_alt:req.body.img_alt,
        stock:req.body.stock,price:req.body.price,availability:req.body.availability};

    await Book.findOneAndUpdate(filter,update);
    res.redirect('/bookCatalog');

};

bookController.save = (req, res)=>{
    let book = new Book( req.body );
    
    book.save((err)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Libro guardado con exito");
        res.redirect("/bookShow/"+book._id);
        
    });
};

bookController.delete = (req, res)=>{
    
    Book.deleteOne({_id: req.params.id}, (err)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Libro eliminado!");
        res.redirect('/bookCatalog');
    });
    
};

bookController.sell = (req,res)=>{};

module.exports = bookController;

