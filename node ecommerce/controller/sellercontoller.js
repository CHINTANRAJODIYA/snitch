const categorymodel = require('../model/categorymodel')
const offermodel = require('../model/offermodel')
const productmodel = require('../model/productmodel')
var sellermodel = require('../model/sellermodel')
var jwt = require('jsonwebtoken')

exports.register = async (req,res)=>{
    var data = await sellermodel.create(req.body)

    res.status(200).json({
        status: "register success",
        data
    })
}
var token;
exports.login = async (req,res) =>{
    var data = await sellermodel.find({"email": req.body.email})

    if(data.length > 0){
        if(data[0].password==req.body.password){
             token = jwt.sign(data[0].id,'token')
            res.status(200).json({
                status: "login success",
                token
            })
        }else{
            res.status(200).json({
                status: "Check Your Email And Password"
            })
        }
    }else
    {
        res.status(200).json({
            status: "Check Your Email And Password"
        })
    }
}

exports.gettoken = async (req,res) =>{
    var uid = jwt.verify(req.headers.auth,'token')
    console.log(uid)
}

exports.addproduct = async (req,res) =>{
    // req.body.product_img = req.files;
    console.log(req.files)

    // // var category = ['SHIRT','T-SHIRT','JEANS','CARGO PANTS','TROUSERS','OVERSHIRT','CHINOS','SHORTS','PERFUMES']

    // var size = ['S','M','L','X','L','XL','XXL','3XL','28','30','32','34','36','38']

    // var color = ['BLACK','WHITE','BLUE','GRAY','GREEN','NAVY','OLIVE','BEIGE','CREAM','BROWN','PINK','RED','MAROON','PEACH','PURPLE','ORANGE','LAVENDER']

    // // var price = ['UNDER RS 999','RS 999','RS 999 - 1499','RS 1499-1999','ABOVE RS 1999']

    // req.body.category = category;
    // req.body.size = size;
    // req.body.color = color;
    // req.body.price = price;

    var product = await productmodel.create(req.body);

    res.status(200).json({
        status: "product added",
        product
    })
}

exports.updateproduct = async (req,res) =>{

    // console.log(req.files)

    var data = req.files
    var images =[]
    for(item of data){
        var img_name = item.originalname
        images.push(img_name)
    }

    console.log(images)
    req.body.product_img = images;
    var id = req.params.id;
    var product = await productmodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status: "product updated",
        product
    })
}

exports.deleteproduct = async (req,res) =>{

    var id = req.params.id;
    var product = await productmodel.findByIdAndDelete(id);

    res.status(200).json({
        status: "product deleted",
    })
}

exports.viewproduct = async (req,res) =>{

    var product = await productmodel.find();

    res.status(200).json({
        status: "all products",
        product
    })
}

exports.viewoneproduct = async (req,res) =>{

    var id = req.params.id;
    var product = await productmodel.findById(id);

    res.status(200).json({
        status: "one product",
        product
    })
}

exports.addcategory = async (req,res) =>{

    req.body.category_img = req.file.originalname;

    var category = await categorymodel.create(req.body);

    res.status(200).json({
        status: "categody added",
        category
    })
}

exports.updatecategory = async (req,res) =>{

    req.body.category_img = req.file.originalname;

    var id = req.params.id;

    var category = await categorymodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status: "categody updated",
        category
    })
}

exports.viewallcategory = async (req,res) =>{

    var category = await categorymodel.find();

    res.status(200).json({
        status: "view all category",
        category
    })
}

exports.viewonecategory = async (req,res) =>{

    var id = req.params.id;
    var category = await productmodel.findById({categoryname:productcategory});

    res.status(200).json({
        status: "category one selected",
        category
    })
}

exports.addoffers = async (req,res) =>{

    var category = await offermodel.create(req.body);

    res.status(200).json({
        status: "valid offer product selected",
        category
    })
}