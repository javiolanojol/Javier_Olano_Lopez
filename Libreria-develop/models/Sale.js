const {Schema, model} = require('mongoose');
const saleSchema = new Schema({
    product_id:{
        type:String,
        required:true
    },
    import:String,
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = model('Sale', saleSchema);