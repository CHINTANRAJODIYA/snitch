var mongoose = require('mongoose');

var sellerschema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model('seller',sellerschema)