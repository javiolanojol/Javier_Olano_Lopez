const Disc = require('../models/Disc');

let discController = {};

discController.list = (req,res)=>{

    Disc.find({}).lean().exec((err, discs)=>{
        if( err ){ console.log('Error: ', err); return; }

        res.render('templates/catalogTemplate',{discList:discs,decision:false});   
        
    });

};

discController.show = (req,res)=>{

    Disc.findOne({_id: req.params.id}).lean().exec((err, disc)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('templates/editTemplate', {discReq:disc} );
    });

};

discController.edit = async (req,res)=>{

    const filter = { _id: req.params.id};
    const update = { title: req.body.title , author:req.body.author, genre:req.body.genre,
        label_publisher:req.body.label_publisher, img_url:req.body.img_url,img_alt:req.body.img_alt,
        stock:req.body.stock,price:req.body.price,availability:req.body.availability};

    await Disc.findOneAndUpdate(filter,update);
    res.redirect('/discCatalog');

};

discController.save = (req, res)=>{
    let disc = new Disc( req.body );
    
    disc.save((err)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Disco guardado con exito");
        res.redirect("/discShow/"+disc._id);
        
    });
};

discController.delete = (req, res)=>{
    
    Disc.deleteOne({_id: req.params.id}, (err)=>{
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Disco eliminado!");
        res.redirect('/discCatalog');
    });
    
};

discController.sell = (req,res)=>{}

module.exports = discController;