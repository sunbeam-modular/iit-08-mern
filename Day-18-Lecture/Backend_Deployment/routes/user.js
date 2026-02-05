// 1.Importing express
const express = require(`express`);
// Importing crypto-js
const cryptojs = require(`crypto-js`);
// Importing jsonwebtoken
const jwt = require(`jsonwebtoken`);

const pool = require(`../db/pool`);
const result = require(`../utils/result`)
const config =require(`../utils/config`)

// 2. Create Router
const router = express.Router();

// 4. Routes

//Health
router.get("/health", (req, res) => {
  res.status(200).send("OK");
});


// Signup
router.post("/signup", async (req, res) => {
  try {
    const { id, name, email, password, mobile } = req.body;

    const hashedPassword = cryptojs.SHA256(password).toString();

    const sql =
      "INSERT INTO users (id, name, email, password, mobile) VALUES (?,?,?,?,?)";

    const [data] = await pool.query(sql, [
      id,
      name,
      email,
      hashedPassword,
      mobile
    ]);

    res.send(result.createResult(null, data));
  } catch (error) {
    console.error(error);
    res.status(500).send(result.createResult(error.message));
  }
});


// Signin
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = cryptojs.SHA256(password).toString();

    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    const [data] = await pool.query(sql, [email, hashedPassword]);

    if (data.length === 0) {
      return res.send(result.createResult("Invalid email or password"));
    }

    const user = data[0];
    //Payload => ID & email
    const payload = {
      id: user.id,
      email: user.email
    };

    const token = jwt.sign(payload, config.SECRET);
    //Token is sent to user
    const userData = {
      name: user.name,
      mobile: user.mobile,
      token: token
    };

    res.send(result.createResult(null, userData));
  } catch (error) {
    console.error(error);
    res.status(500).send(result.createResult(error.message));
  }
});


// Get User Profile
router.get("/", async (req, res) => {
  try {
    const email = req.headers.email;
    const sql = "select * from users where email = ?";

    const [data] = await pool.query(sql, [email]);

    res.send(result.createResult(null, data));
  } catch (error) {
    res.send(result.createResult(error));
  }
});



// Update User Profile
router.put("/", async (req, res) => {
  try {
    const id = req.headers.id;
    const { name, email, mobile } = req.body;

    const sql = "update users set name = ?, email = ?, mobile = ? where id = ?";

    const [data] = await pool.query(sql, [name, email, mobile, id]);

    res.send(result.createResult(null, data));
  } catch (error) {
    res.send(result.createResult(error));
  }
});




// 3. Exporting Router
module.exports = router;
