
const express = require('express');
const app = express();

const bicycles = require('./data/data.json');

app.set('view engine', 'ejs');
app.use(express.static('public'));

let hostname = '127.0.0.1';
let port = process.env.PORT;

app.get('/', (req, res) => {

    if (req.url === '/favicon.ico') return

    return res.render('bicycles', {
        bicycles
    });
});

app.get('/bicycle', (req, res) => {

    const bicycle = bicycles.find(b => b.id === req.query.id);
    // console.log(bicycle)
    return res.render('overview', {
        bicycle
    });
});

if (port == null || port == "") {
    port = 3000
}

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});