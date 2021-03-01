const Meal = require('../models/Meal');
const Category = require('../models/Category')
const mealController = {}

mealController.list = async (req,res)=>{

    const meals = await Meal.find({});
    const categories = await Category.find({});
    res.render('index',{categories:categories,meals:meals});

}
mealController.list_meals = async (req,res)=>{

    const meals = await Meal.find({category:req.params.name});
    const categories = await Category.find({});
    res.render('index',{categories:categories,meals:meals});
}

mealController.save = async(req,res)=>{

    const {img_url,img_alt,name,description,qty,category} = req.body;
    const meal = new Meal ({img_url,img_alt,name,description,qty,category});
    await meal.save();
    console.log('Plato guardado')
    res.redirect('/');

}

mealController.edit = async(req,res)=>{

    const {img_url,img_alt,name,description,qty,category} = req.body; 
    const meal = await Meal.findOneAndUpdate(req.params.id,{img_url,img_alt,name,description,qty,category});
    console.log('Plato editado y guardado')
    res.redirect('/');
}
mealController.delete = async(req,res)=>{

    await Meal.deleteOne({_id:req.params.id});
    res.send('Plato borrado');
    res.redirect('/');
}

module.exports = mealController;

