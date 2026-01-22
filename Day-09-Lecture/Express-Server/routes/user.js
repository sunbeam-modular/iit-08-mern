// 1.Importing express
const express = require(`express`);
const cryptojs = require(`crypto-js`);

const pool = require(`../db/pool`);
const result = require(`../utils/result`)

// 2. Create Router
const router = express.Router();

// 4. Routes

// Signup
router.post("/signup",(req,res) =>{
    const {name, email, password, mobile} = req.body;
    const sql = `Insert into users (name, email, password, mobile) values(?,?,?,?)`
    const hashedPassword = cryptojs.SHA256(password).toString();
    pool.query(sql, [name, email, hashedPassword, mobile], (error,data) =>{
        res.send(result.createResult(error,data))
    })
})

// Signin
router.post("/signin",(req,res) => {
    const {email, password} = req.body;
    const hashedPassword = cryptojs.SHA256(password).toString();
    const sql = `select * from users where email = ? and password = ?`
    pool.query(sql,[email,hashedPassword],(error,data)=>{
        if(error){
            res.send(result.createResult(error))
        } else if(data.length == 0){
            res.send(result.createResult("Invalid email or password"))
        } else {
            res.send(result.createResult(null,data))
        }
    })

})

// Query Parameters
router.get("/", (req,res) =>{
    const {email} = req.query;
    const sql = `select * from users where email = ?`;
    pool.query(sql,[email],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

// 3. Exporting Router
module.exports = router;