const User = require('../models/User');

let userController = {};

userController.authentication = async (req,res)=>{

    const {username} = req.body;
    let userfind;

    if(!username == ""){

        userfind = await User.findOne({username:username});

    }

    if(userfind){

        return res.redirect('/home');

    }

    res.redirect('/');

};

module.exports = userController;