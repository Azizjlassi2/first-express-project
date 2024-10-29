// Imports
const express = require("express")
const fs = require("fs") 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')

// App  
const app = express()
dotenv.config({path:"./.env"})
app.use(express.json())

// Config
const port = 3000
app.listen(port,()=>{
    console.log("Server is running on port : " + port)
})

// Routers
app.use('/users',userRoutes)


// DB Config 
const DB = process.env.DATABASE_URL.replace("<db_password>",process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => {
    console.log("DB Connection established");
}).catch( (err)=> {
    console.log(err)
})





