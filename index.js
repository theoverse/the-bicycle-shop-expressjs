
const express = require('express');
const app = express();

let hostname = '127.0.0.1'
let port = 3000

app.get('/', (req, res) => {
    return res.send(`Server is running on ${hostname} at port ${port}`)
});

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});