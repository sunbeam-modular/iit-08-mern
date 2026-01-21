//1. Import express app
const express = require(`express`)

//2. Create Router
const router = express.Router();

// 4. Adding Routes

//1. Get all users
router.get("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Get all users`);
});

//2. Users Profile
router.get("/profile", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Users Profile`);
});

//3. Users signup
router.post("/signup", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Users successfully signup`);
});

//4. Users signin
router.post("/signin", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Users successfully signin`);
});

//5. Update users
router.put("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Users Updated`);
});

//6. Delete users
router.delete("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Users deleted`);
});

//3. Export Router
module.exports = router;