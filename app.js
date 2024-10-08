const express = require("express")
const products = require("./products.json")



const app = express()

const port = 3000



app.listen(port,()=>{
    console.log("Server is running on port : " + port)
})

app.get("/products",(req,res)=>{

    
    
    res.status(200).json(products);

})

