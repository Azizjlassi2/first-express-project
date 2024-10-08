const express = require("express")
const fs = require("fs") 



const app = express()
app.use(express.json())

const port = 3000



app.listen(port,()=>{
    console.log("Server is running on port : " + port)
})

const products = JSON.parse(fs.readFileSync("./products.json","utf-8"));

app.get("/products",(req,res)=>{
    res.status(200).json({
        status:"success",
        results:products.length,
        data:products
    })
    res.status(200).json(products);

})

app.post("/products",(req,res)=>{
    // création d'un id incrémenté automatiquement 
    const id = products[products.length - 1 ].id + 1;
    
    const newProduct  = Object.assign({"id":id} , req.body);

    products.push(newProduct);
    fs.writeFile("./products.json",JSON.stringify(products),"utf-8",(err)=>{
        res.status(201).json({
            status: "success",
            message: "Product created !",
            data:[newProduct]
        })
    })




   
})
    
    


