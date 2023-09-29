const User = require('../models/userModel');

const cookieController = {};


cookieController.setCookie = (req, res, next) => {
    res.cookie('cookie', Math.floor((Math.random(99) * 1000)));
    return next();
};

cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie('ssid', res.locals.userId, {httpOnly: true})
    return next();
}

module.exports = cookieController;