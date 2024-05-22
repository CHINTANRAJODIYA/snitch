var express = require('express');
var router = express.Router();

var user = require('../controller/usercontoller')

router.post('/register',user.register)
router.post('/login',user.login)
router.post('/gettoken',user.gettoken)
router.get('/viewallproduct',user.viewallproduct)
router.get('/viewoneproduct/:id',user.viewoneproduct)
router.get('/viewrecentlystalk',user.viewrecentlystalk)
router.get('/viewlatestproduct',user.viewlatestproduct)
router.get('/viewonecategory/:id',user.viewonecategory)
router.get('/viewcategoryproduct/:id',user.viewcategoryproduct)
router.get('/viewallcategory',user.viewallcategory)
router.post('/addcart/:id',user.addcart)
router.get('/viewcart',user.viewcart)
router.get('/deletecart/:id',user.deletecart)
router.post('/buyitem',user.buyitem)
router.get('/orderdetail',user.orderdetail)

module.exports = router;
