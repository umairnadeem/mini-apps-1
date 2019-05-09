const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root',
    password: 'Umairnadeem_1',
    database: 'signups'
});

connection.connect();

module.exports = connection;