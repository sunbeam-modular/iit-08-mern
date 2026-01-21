//1. Importing
const express = require(`express`)

//2. Create router
const router = express.Router();

// 4. Adding Routes

//1. Get product
router.get("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Get all products`);
});

// 2. Add product
router.post("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Product added`);
});

//3. Update product
router.put("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Product updated`);
});

//4. Delete Product
router.delete("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Product deleted`);
});

// 3. Export Router
module.exports = router;