'use strict';
const input = require("../../data/input.json");
const Car = require('../../models/usedCars');

const carController = {};

carController.formCreateUsedCar = (req, res) => { 
    res.render('templates/usedCars/car_new',{formNewUsedCars:input.formNewUsedCars})  
};
carController.createUsedCar = async (req, res) =>{ 
    let {carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType} = req.body; 
    console.log(carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType);
    let newCar = new Car({carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType}); 
    console.log(req.body);
    await newCar.save();     
    res.redirect('/usedCars/usedCarCatalog'); 

};

carController.list = async (req,res)=>{

    const cars = await Car.find({}).lean();
    console.log(cars);
    res.render('templates/usedCars/car_list',{carList:cars});
};

carController.deleteCar = async (req,res) => { 
    await Car.findByIdAndDelete(req.params.id) 
    res.redirect('/usedCars/usedCarCatalog') 
};

carController.details = async (req, res) =>{
    const car = await Car.findById(req.params.id);
    res.render('templates/usedCars/car_detail',{car})
};

carController.renderUpdate = async (req,res) => {
    const car = await Car.findById(req.params.id)
    res.render('templates/usedCars/car_edit', car)
}

carController.editCar = async (req, res) => {
    const id = req.params.id;
    const { carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType} = req.body;
    await Car.findOneAndUpdate({ _id: id }, { carBrand, carModel, modelYear, nextItvDate, sellingPrice, carImage, carColor, seatsNumber, doorNumber, transmissionType, motorType}, { new: true });
    res.redirect('/usedCars/usedCarCatalog')
    

};

module.exports = carController;