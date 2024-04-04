const express = require('express');
const router = express.Router();
const { addProduct, getProducts, updateProduct, deleteProduct  } = require('../controller/productController'); 

router.get('/products', getProducts); 
router.post('/products', addProduct); 
router.put('/products/:productId', updateProduct)
router.delete('/products/:productId', deleteProduct);

module.exports = router;
