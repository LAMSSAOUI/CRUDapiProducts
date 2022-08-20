const express = require('express')
const router = express.Router()
const {
    createProduct,
    GetProducts,
    GetProduct,
    DeleteProduct,
    updateProduct
} = require('../controllers/productsController')



// my routes 


// get all products
router.get('/', GetProducts) 

// get a single product 
router.get('/allProducts/:id', GetProduct) 

// post a product
router.post('/allProducts', createProduct)

// delete a product
router.delete('/allProducts/:id', DeleteProduct)


// update a product 
router.patch('/allProducts/:id', updateProduct )


module.exports = router ; 