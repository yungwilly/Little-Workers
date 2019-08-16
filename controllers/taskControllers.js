const express = require('express');
const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('taskPage/landingPage');
});

router.get('/addOrEdit', (req,res) => {
    res.render('taskPage/addOrEdit');
});

router.get('/loginPage', (req, res) => {
    res.render('taskPage/loginPage');
}); 

router.get('/registerPage', (req, res) => {
    res.render('taskPage/registerPage');
}); 

router.post('/', (req, res) => {
    if(req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res){ //For creating Tasks
    var task = new Task();
    task.title = req.body.title;
    task.text = req.body.text;
    task.subject = req.body.subject;

    task.save((err, doc) => {
        if(!err){
            res.redirect('/project/dashboard');
        }
        else{
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render('/taskPage/addOrEdit',{
                    viewTitle: 'Insert Task',
                    task: req.body
                })
            }else
            console.log('Error during insertion: ' + err);
        }
    });
}



router.get('/dashboard', (req, res) => {
    Task.find((err, docs)=>{
        if (!err){
            res.render('taskPage/dashboard', {
                list: docs
            });
        }else{
            console.log('Error in recreating employee list: ' + err);
        }
    });
});

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

function updateRecord(req, res){
    Task.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(!err){
            res.redirect('project/dashboard'); 
        }else{
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render('taskPage/addOrEdit',{
                    viewTitle: 'Update',
                    task: req.body
                })
            }else{
                console.log('Error during update: ' + err);
            }
        }
    });
}

router.get('/:id', (req, res)=>{
    Task.findById(req.params.id, (err, doc)=>{
        if(!err){
            res.render('taskPage/addOrEdit',{
                viewTitle: "Update Employee",
                task: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Task.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/project/dashboard');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});



module.exports = router;

