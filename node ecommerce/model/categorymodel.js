var mongoose  = require('mongoose');

var categoryschema =  new mongoose.Schema({
    categoryname:{
        type:String
    },
    category_img:{
        type:String
    }
})

module.exports = mongoose.model('category',categoryschema)