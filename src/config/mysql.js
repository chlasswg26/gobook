const dotenv = require('dotenv')
dotenv.config()
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})

connection.connect(function (error) {
    if (error) throw error
    console.log("Database has connected...")
})

module.exports = connection