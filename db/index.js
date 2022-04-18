const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'nadi',
    password: '123456',
    database: 'my_db_01'
})

module.exports = db