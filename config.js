const mysql = require('mysql');
// const connection = mysql.createConnection({
//    host:'localhost',
//    user:'root',
//    password:'Mugisha12!',
//    database:'dbPooling' 
// })

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Mugisha12!',
    database:'dbPooling' 
})

module.exports = pool;