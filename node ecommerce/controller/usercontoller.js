var jwt = require('jsonwebtoken')
var usermodel = require('../model/usermodel');
const productmodel = require('../model/productmodel');
const cartmodel = require('../model/cartmodel');
const billmodel = require('../model/billmodel');
const categorymodel = require('../model/categorymodel');

exports.register = async (req,res)=>{
    var data = await usermodel.create(req.body);

    res.status(200).json({
        status: "register success",
        data
    })
}

exports.login = async (req,res) =>{
    var data = await usermodel.find({"email": req.body.email})

    if(data.length > 0){
        if(data[0].password==req.body.password){
            token = jwt.sign(data[0].id,'tokenuser')
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
    var uid = jwt.verify(req.headers.auth,'tokenuser')
    console.log(uid)
}

exports.viewallproduct = async (req,res) =>{
    var product = await productmodel.find();

    res.status(200).json({
        status:"all products",
        product
    })
}

exports.viewoneproduct = async (req,res) =>{

    var id = req.params.id;
    var product = await productmodel.findById(id);

    res.status(200).json({
        status:"one product",
        product
    })
}

exports.viewrecentlystalk = async (req,res) =>{

    // var product = await productmodel.findById(id);
    const product = await productmodel.find().sort({ _id: -1 }).limit(12);

    res.status(200).json({
        status:"one product",
        product
    })
}

exports.viewlatestproduct = async (req,res) =>{

    const product = await productmodel.find().sort({ _id: -1 }).limit(5);

    res.status(200).json({
        status:"latest five",
        product
    })
}

exports.viewallcategory = async (req,res) =>{

    var category = await categorymodel.find();

    res.status(200).json({
        status: "view all category",
        category
    })
}

exports.viewcategoryproduct = async (req,res) =>{

    var id = req.params.id;
    var category = await productmodel.find({category:id}).populate('category');

    res.status(200).json({
        status: "category all product",
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

exports.addcart = async (req,res) =>{

    var id = req.params.id;
    var uid = jwt.verify(req.headers.auth,'tokenuser')
    console.log(uid)
    req.body.userid=uid;
    req.body.productid=id;
    var product = await cartmodel.create(req.body);

    res.status(200).json({
        status:"cart added",
        product
    })
}

exports.viewcart = async (req,res) =>{

    var uid = jwt.verify(req.headers.auth,'tokenuser')
    var product = await cartmodel.find({userid:uid}).populate('productid');

    res.status(200).json({
        status:"view all cart",
        product
    })
}

exports.deletecart = async (req,res) =>{

    var id = req.params.id;
    var product = await cartmodel.findByIdAndDelete(id);

    res.status(200).json({
        status:"one product delete",
        product
    })
}

exports.buyitem = async (req,res) =>{

    var uid = jwt.verify(req.headers.auth,'tokenuser')
    req.body.userid=uid;
    var product = await cartmodel.find({userid:uid}).populate(['productid','offer'])
    var pid=[]
    var total_amount=0;
    var discount = 0;
    for(products of product){

        if(products.offer!=null){

            var offerproducts = products.offer.productid

            for(prod of offerproducts)

            {
                if(prod==products.productid.id)
                {
                    discount += products.productid.price/products.offer.discount
                }
            }
        }

        var productid = products.productid
        total_amount += productid.price
         pid.push(products.productid)
    }
    req.body.totalamount = total_amount - discount
    req.body.productid = pid

    var bill = await billmodel.create(req.body)
    var remove = await cartmodel.deleteMany({userid : uid})
    res.status(200).json({
        status:"bill generate",
        bill
    })
}

exports.orderdetail = async (req,res) =>{

    var uid = jwt.verify(req.headers.auth,'tokenuser')

    var order = await billmodel.find({userid:uid}).populate(['productid','userid'])

    res.status(200).json({
        status:"order detail",
        order
    })
}
