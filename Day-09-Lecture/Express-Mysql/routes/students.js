// 1. Importing
const express = require(`express`)
const pool = require(`../db/pool`)
const result = require(`../utils/result`)

// 2. Create Router
const router  = express.Router();

// 4. Routes

/*===============
    Students
=================*/

// 1. Get students
router.get("/",(req,res) => {
    const sql = `select * from students`;
    pool.query(sql,(error,data) =>{
        res.send(result.createResult(error,data))
    })
})

//2. Add Student
router.post("/",(req,res)=>{
    //Destructuring
    const {name, email, course} = req.body;
    const sql = `insert into students(name,email,course) values(?,?,?)`
        pool.query(sql,[name, email,course],(error,data) =>{
        res.send(result.createResult(error,data))
    })
})

// Request Parameters

// 3. Update Student (PUT)
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, course } = req.body;

    const sql = `
        update students 
        set name = ?, email = ?, course = ?
        where id = ?
    `;

    pool.query(sql, [name, email, course, id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})


// 4. Delete Student (DELETE)
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const sql = `delete from students where id = ?`;

    pool.query(sql, [id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

// 3. Export Router
module.exports = router;