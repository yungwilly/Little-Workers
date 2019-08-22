const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const path = require('path');
var router = express.Router();


router.get('/', (req, res) => {
    res.render('taskPage/loginPage');
})

router.post('/', (req,res) => {
    checkingUserInformation(req, res);
})


function checkingUserInformation(req, res){
    var username = req.body.username
    var password = req.body.password
    console.log(username);
    console.log(password);

    User.findOne({username : username, password : password}).then((user)=>{
        if(user){
            console.log('account found!')
            res.redirect('/project/dashboard');
        }
        else(!user)
            res.redirect('/project/loginPage');
        
        return res.status(200).send();
    });
}


module.exports = router;

