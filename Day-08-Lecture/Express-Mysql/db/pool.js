//1. Importing
const mysql2 = require(`mysql2`)

const pool = mysql2.createPool({
    host : "localhost",
    user : "root",
    password : "root",
    database : "internship_db"
})

// 2. Exporting
module.exports = pool;