
const express = require('express')
require('dotenv').config()
const productsRoutes = require('./routes/Routes100')
const mongoose = require('mongoose')

    const app = express() ;
    const PORT =process.env.PORT

// middleware 
app.use(express.json())


// accessing to the routes of the api 
app.use( '/api/products',   productsRoutes) ; 



// connecting to database 
mongoose.connect(process.env.db_url)
    .then(() => {
        // listening for requests 
        app.listen(PORT, () => {
             console.log(`connected to db && app now is on server on the port ${PORT}`)
        })
    }).catch((err) => {
        console.log(err);
    })





