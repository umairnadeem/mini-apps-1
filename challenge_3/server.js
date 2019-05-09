const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db_config.js');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

var dataParser = (array, object) => {
    var arr = [];
    for (let elem of array) {
        arr.push(object[elem]);
    }
    return arr;
}

app.post('/purchased', (req, res) => {
    var columnNames = ['name', 'email', 'password', 'line1', 'line2', 'city', 'state', 'zip', 'cc', 'expiry', 'cvv', 'billing_zip'];

    var data = req.body.data;
    var sql = `INSERT INTO all_users(${columnNames.join(', ')}) VALUES(${Array(Object.keys(data).length+1).join('?').split('').join(',')})`;
    var values = dataParser(columnNames, data);
    db.query(sql, values,(err) => {
        if (err) {
            return;
        }
        res.send(JSON.stringify(data));
    });
});

app.listen(port);