const Session = require('../models/sessionModel');

const sessionController = {};


sessionController.isLoggedIn = async (req, res, next) => {
    try {
        const session = await Session.find({ cookieId: req.cookies.ssid });

        if(!session[0] || !req.cookies.ssid) return res.redirect('/login');
    }

    catch (err) {
        return next(`Error in sessionController.isLoggedIn middleware ${err}`);
    }
};

sessionController.startSession = async (req, res, next) => {
    await Session.create({ cookieId: res.locals.userId })
        .catch((err) => next(err));

    return next();
};


module.exports = sessionController;