var mongoose = require('mongoose');

var billschema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    totalamount:{
        type:String
    },
    productid : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product'
    }]
})

module.exports = mongoose.model('bill',billschema)