const express = require('express');
const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const Comment = mongoose.model('Comment');
const path = require('path');
var router = express.Router();


router.post('/taskPage', (req, res) => {
    insertComment(req, res);
});

function insertComment(req, res){ //For creating Comments
var comment = new Comment();
comment.firstName = req.body.firstName;
comment.text = req.body.text;

comment.save((err, doc) => {
    if(!err){
            res.redirect('/comment/taskPage/' + comment._id);
    }
    else{
        if(err.name == 'ValidationError'){
            handleValidationError(err, req.body);
            res.render('/taskPage/taskPage',{
                comment: req.body
            })
        }else
        console.log('Error during insertion: ' + err);
    }
});
}

router.get('/taskPage', (req, res) => {
    res.render('taskPage/taskPage');
}); 

router.get('/taskPage/:id', (req, res)=>{
    Comment.findById(req.params.id, (err, doc)=>{
        if(!err){
            res.render('taskPage/taskPage',{
                task: doc
            });
        }
    });
});

module.exports = router;