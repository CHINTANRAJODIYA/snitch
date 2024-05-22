var mongoose = require('mongoose');
const productmodel = require('./productmodel');

var cartschema = new mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'product'
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId
    },
    offer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'offer'
    }
})

module.exports = mongoose.model('cart',cartschema)