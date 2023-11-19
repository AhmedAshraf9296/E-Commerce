const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, addToWishList, rating, uploadIMages, deleteIMages } = require('../controller/productController');
const { isAdmin,authMiddleware } = require('../middlewares/authMiddleware');
const { uploadPhoto, productImageResize } = require('../middlewares/uploadImages');
const router = express.Router();


router.post('/',authMiddleware,isAdmin,createProduct)
router.put('/upload',authMiddleware,isAdmin,uploadPhoto.array('images',10),productImageResize,uploadIMages)
router.get('/:id',getProduct)
router.put('/wishlist',authMiddleware,addToWishList)
router.put('/rating',authMiddleware,rating)
router.get('/',getAllProducts)
router.put('/:id',authMiddleware,isAdmin,updateProduct)
router.delete('/:id',authMiddleware,isAdmin,deleteProduct)
router.delete('/delete-img/:id',authMiddleware,isAdmin,deleteIMages)


module.exports = router;