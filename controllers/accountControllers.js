const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const path = require('path');
var router = express.Router();



router.get('/', (req, res) => {
    res.render('taskPage/registerPage');
});

router.post('/',(req,res) => {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.username = req.body.username;
    user.password = req.body.password;

    user.save((err, doc) => {
        if(!err){
            res.redirect('/project/dashboard');
        }
        else{
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render('/taskPage/registerPage',{
                    viewTitle: 'Insert Task',
                    user: req.body
                })
            }else
            console.log('Error during insertion: ' + err);
        }
    });
})

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

