const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')

require('dotenv').config();


const userController = require('./controllers/userController');
const sessionController = require('../server/controllers/sessionController');
const cookieController = require('../server/controllers/cookieController');

const PORT = 3000;
const app = express();


const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/27017' : 'mongodb://localhost/unit11dev';
mongoose.connect(mongoURI)


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded())
app.use('/dist', express.static(path.join(__dirname, '../dist')))


//Go to signup right away
app.get('/', (req, res) => {
   return res.status(200).sendFile(path.resolve(__dirname, '../public/signup.html'))
})

//sign up page
app.get('/signup', (req, res) => {
   return res.status(200).sendFile(path.resolve(__dirname, '../public/signup.html'))
})

//Attempting to signup
app.post('/signup', userController.createUser, sessionController.startSession, cookieController.setSSIDCookie, (req, res) => {
   return res.redirect(301, '/home')
})

//login page
app.get('/login', (req, res) => {
   return res.status(200).sendFile(path.resolve(__dirname, '../public/login.html'))
})

//Attempting to login
app.post('/login', userController.verifyUser, sessionController.startSession, cookieController.setSSIDCookie, (req, res) => {
   return res.redirect(301, '/home')
})


//Going straight to home if client has correct cookie
app.get('/home', (req, res) => {
   return res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.use('*', (req, res) => {
   res.status(404).send('Not Found')
})


app.use((err, req, res, next) => {
   console.log(err);
   res.status(500).send({ error: err})
})

app.listen(PORT, () => {
   console.log(`Listening on port: ${PORT}`)
});