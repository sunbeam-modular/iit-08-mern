//1. Importing
const express = require(`express`)
const userRouter = require(`./routes/user`)
const productRouter = require(`./routes/product`)
const orderRouter = require(`./routes/order`)

//2. Create express app
const app = express()

//4. Middleware
app.use("/users",userRouter)
app.use("/products",productRouter)
app.use("/orders",orderRouter)


//3. Run express app
app.listen(`3000`, `localhost`, ()=>{
    console.log(`Server started on port 3000`);
    
})