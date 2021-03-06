const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const path = require('path');
var router = express.Router();

const session = require('express-session');
router.use(session({
    name: 'User Session', 
    secret: 'session secret',
    resave: true,
    saveUninitialized: true,
}));


router.get('/', (req, res) => {
    res.render('taskPage/loginPage');
})

router.post('/', (req,res) => {
    var username = req.body.username
    var password = req.body.password
    console.log(username);
    console.log(password);

    User.findOne({username : username, password : password}).then((user)=>{
        if(user){
            console.log('account found!');
            req.session.firstName = User.firstName;
            req.session.lastName = User.lastName;
            req.session.username = username;
            req.session.password = password;
                
            res.redirect('/project/dashboard');
        }
        else if(!user){
            res.redirect('/project/loginPage');
        }
        else{
            res.redirect('/project/loginPage');
        }
            
        
    });
})


module.exports = router;

