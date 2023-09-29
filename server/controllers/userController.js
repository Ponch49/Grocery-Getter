const db = require('../../db');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};
const missingInfo =  {error: 'Invalid Username or Password'}
const missingUser = {error: 'User not found'}
const wrongPass = {error: 'Incorrect Password'}

userController.createUser = async (req, res, next) => {
    const { username, password, firstName, lastName } = req.body;
    

    if(!username || !password) {
        return res.redirect(301, '/signup');
    };

    await User.create({username: username, password: password, firstName: firstName, lastName: lastName})
        .then((newUser) => {
            res.locals.userId = newUser.id;
            console.log(newUser)
            return next();
        })
        .catch((err) => next({error: 'Error in createUser middleware'}));

}

userController.verifyUser = async (req, res, next) => {
    const { username, password } = req.body;
    


    if(!username || !password) {
        return res.redirect(301, '/signup/')
    };
    

    await User.findOne({username: username})
        .then ((foundUser) => {
            if(!foundUser) return res.redirect(301, '/signup')

        bcrypt.compare(password, foundUser.password)
            .then((result) => {
                if(!result) return next({error: 'Invalid username or password'});

                res.locals.userId = foundUser.id;

                return next();
            })
        })
        .catch((err) => next(err))

}

module.exports = userController;