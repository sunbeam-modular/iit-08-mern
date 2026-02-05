// 1.Importing express
const express = require(`express`);

const userRouter = require(`./routes/user`)
const auth = require(`./utils/auth`)
const cors = require(`cors`)

// 2.Create express app
const app = express();

app.use(cors()); //Enable cors

// 4.Middleware
app.use(express.json());
app.use(auth.authUser) //Middleware
app.use("/users",userRouter)

// 3.Run app
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
