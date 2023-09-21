const path = require('path');
const fs = require('fs');
const express = require('express');
const PORT = 3000;
const app = express();




app.get('/', async (req, res) => {
   return res.send('hello')
})







app.listen(PORT);