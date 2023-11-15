const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct } = require('../controller/productController');
const { isAdmin,authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/',authMiddleware,isAdmin,createProduct)
router.get('/:id',getProduct)
router.get('/',getAllProducts)
router.put('/:id',authMiddleware,isAdmin,updateProduct)
router.delete('/:id',authMiddleware,isAdmin,deleteProduct)


module.exports = router;