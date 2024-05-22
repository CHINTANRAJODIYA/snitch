var mongoose = require('mongoose');

var offerschema = new mongoose.Schema({
    productid:[{
        type:mongoose.Schema.Types.ObjectId ,   
        ref:'product'
    }],
    discount:{
        type:Number
    }
})

module.exports = mongoose.model('offer',offerschema)