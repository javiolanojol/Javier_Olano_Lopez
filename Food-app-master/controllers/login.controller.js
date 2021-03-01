const userModel = require('../models/User');

const loginController = {};

loginController.formLogin = (req, res) => {
    res.render('login');
}

module.exports = loginController;