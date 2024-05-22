var express = require('express');
const multer  = require('multer');
var router = express.Router();

var seller = require('../controller/sellercontoller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage })

router.post('/register',seller.register)
router.post('/login',seller.login)
router.get('/gettoken',seller.gettoken)
router.post('/addproduct',upload.array('product_img',7),seller.addproduct)
router.post('/updateproduct/:id',upload.array('product_img',7),seller.updateproduct)
router.get('/deleteproduct/:id',seller.deleteproduct)
router.get('/viewproduct',seller.viewproduct)
router.get('/viewoneproduct/:id',seller.viewoneproduct)
router.post('/addcategory',upload.single('category_img'),seller.addcategory)
router.post('/updatecategory/:id',upload.single('category_img'),seller.updatecategory)
router.get('/viewonecategory/:id',seller.viewonecategory)
router.get('/viewallcategory',seller.viewallcategory)
router.post('/addoffers',seller.addoffers)

module.exports = router;
