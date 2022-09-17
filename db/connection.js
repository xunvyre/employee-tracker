//connect to database
const mysql = require('mysql2');
const db = mysql.createConnection
(
    {
        host: 'localhost',
        user: 'root',
        password: 'stinkman',
        database: 'pigCompany_DB'
    },
    console.log('Connected to the company database. Welcome to Employee Tracker!')
);

module.exports = db;