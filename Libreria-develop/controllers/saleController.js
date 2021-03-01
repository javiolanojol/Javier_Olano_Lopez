const Sale = require('../models/Sale');
const Book = require('../models/Book');

const saleController = {};

saleController.create = async(req,res)=>{

    const {_id,title,author,genre,label_publisher,img_url,img_alt,stock,price,availability} = await Book.findOne({_id: req.params.id}).lean();

    let sale = new Sale(_id,price);
    await sale.save((err)=>{
        if( err ){ console.log('Error: ', err); return; }
        console.log("Venta realizada");
        res.redirect("/home");
        
    });

}

module.exports = saleController;