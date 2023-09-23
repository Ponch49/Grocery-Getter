const path = require('path');
const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static('./public'))



app.get('/', (req, res) => {
   return res.send('hello')
})







app.listen(PORT);