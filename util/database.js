const mysql=require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'db_coffee-shop',
    password:'rootroot'
});

module.exports = pool.promise();