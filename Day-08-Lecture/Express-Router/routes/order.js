//1. Importing
const express = require(`express`)

//2. Create Router
const router = express.Router();

//4. Adding Routes

//1. Get order
router.get("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Get all order`);
});

// 2. Add order
router.post("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`order added`);
});

//3. Update order
router.put("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`order updated`);
});

//4. Delete order
router.delete("/", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`order deleted`);
});

//3. Export Router
module.exports = router;