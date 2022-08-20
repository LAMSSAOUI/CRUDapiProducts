const { default: mongoose } = require('mongoose')
const Product = require('../models/productsSchema')


// Create Products 
const createProduct = async (req, res) => {
    const {name,price} = req.body  // postman u give value from posteman 
     
    try{
      const  product100 = await Product.create({name,price})
        res.status(200).json(product100)
    }catch(err) {
       res.status(400).json({err : err.message})
    }
}
// Get all products 
const GetProducts = async (req,res) => {
   const products = await Product.find({}).sort({createdAt: -1})
   res.status(200).json(products)
}


// Get a single Product 
const GetProduct = async (req,res) => {
    const { id } = req.params
    const product = await Product.findById(id)

    if(!product) {
        res.status(404).json({err : 'no such product exist'})
    }
    res.status(200).json(product)
}

// delete a product 
const DeleteProduct = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({err : 'no such product '})
    }

    const product = await Product.findByIdAndDelete({_id: id})

    if(!product){
        return res.status(404).json({ err : 'no such product'})
    }

    res.status(200).json(product)
}

// update a product

const updateProduct = async (req , res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({err : 'no such product '})
    }

    const product = await Product.findByIdAndUpdate({_id : id} , {
        ...req.body 
    })

    if(!product){
        res.status(400).json({ err : 'no such product '})
    }

    res.status(200).json(product)
}





module.exports = {
    createProduct,
    GetProducts,
    GetProduct,
    DeleteProduct,
    updateProduct
}
