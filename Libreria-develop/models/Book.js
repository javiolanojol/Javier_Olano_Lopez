const {Schema, model} = require('mongoose');
const bookSchema = new Schema({
    title:{
        type: String,
        required:true

    }, 
    author: String,
    genre: String,
    label_publisher: String,
    img_url: String,
    img_alt:String,
    stock:   Number,
    price: String,
    availability:String
});

bookSchema.index({title:"text"});

module.exports = model('Book', bookSchema);