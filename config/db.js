const mysql = require("mysql2")
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "ecommerce"
})
db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed", err)
        return
    }
})
module.exports = db