// 1. Importing
const express = require(`express`)
const studentRouter = require(`./routes/students`)

// 2. Create app
const app = express();


// 4.Middleware
app.use(express.json())
app.use("/students",studentRouter)


// 3. Run the app
app.listen(3000, `localhost`, () =>{
    console.log(`Server started on port 3000`)
})