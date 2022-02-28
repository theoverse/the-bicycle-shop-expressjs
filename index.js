
const express = require('express');
const app = express();

const bicycles = require('./data/data.json');

app.set('view engine', 'ejs');
app.use(express.static('public'))

let hostname = '127.0.0.1';
let port = 3000;

app.get('/', (req, res) => {
    return res.render('bicycles')
});

app.get('/bicycle', (req, res) => {
    // console.log(req.query.id)
    const bicycle = bicycles.find(b => b.id === req.query.id)
    return res.render('overview');
});

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});