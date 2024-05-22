var mongoose = require('mongoose')

var productschema = new mongoose.Schema({
    productname:{
        type:String
    },
    category:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    }],
    description:{
        type:String
    },
    ratings:{
        type:String
    },
    product_img:[{
        type : String
    }],
    size:{
        type:Array
    },
    color:{
        type:Array
    },
    price:{
        type:String
    },

})

module.exports = mongoose.model('product',productschema)