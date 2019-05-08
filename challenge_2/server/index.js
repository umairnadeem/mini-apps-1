const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({ extended: true }));

var dataParser = (data) => {
    var values = '';
    var tempArr = [];

    for (let key in data) {
        if (key !== 'children') {
            tempArr.push(key);
        }
    }

    values += tempArr.join(',') + '\n';

    var helper = (node) => {
        var arr = [];
        for (let key in node) {
            if (key !== 'children') {
                arr.push(node[key]);
            }
        }
        values += arr.join(',') + '\n';

        if (node.children) {
            node.children.forEach(child => {
                helper(child);
            });
        }
    }
    helper(data);
    return values;
}

app.post('/', (req, res) => {
    var data = JSON.parse(req.body.file);
    res.end(dataParser(data));
});

app.listen(port, () => {
    console.log('Listening on ' + port);
});