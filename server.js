/**
 * Created by eliasmj on 25/01/2017.
 */
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./build'));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, './build', 'index.html'));
// });

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, './build', 'index.html'));

});

app.listen(process.env.PORT || 9000);