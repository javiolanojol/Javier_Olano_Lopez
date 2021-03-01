const{Schema,model} = require('mongoose');

const categorySchema = new Schema({

    img_url:String,
    img_alt:String,
    name:String,
    url_find:String

})

module.exports = model('Category',categorySchema,'categories');