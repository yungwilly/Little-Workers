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

    User.findOne({username : username, password : password}, (err, user) =>{
        if(err){
            alert('Account Found!');
            res.redirect('/project/dashboard');
            return res.status(500).send();
        }
        if(!user){
            return res.status(404).send();
        }
        return res.status(200).send();
    });
}

function handleValidationError(err, body){
    for(field in err.errors)
    {
        switch(err.errors[field].path){
            case 'fullName': 
                body['fullNameError'] = err.errors[field].message; 
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}




module.exports = router;

