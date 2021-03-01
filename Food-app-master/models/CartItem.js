const{Schema,model} = require('mongoose');

const cartItemSchema = new Schema({

    img_url:String,
    img_alt:String,
    price:Number,
    name:String,
    description:String,
    qty:Number,
    category:String


})

module.exports = model('CartItem', cartItemSchema, 'cart');