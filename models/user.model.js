const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String, 
    password: String,
    helpNumber: Number,
    rating: Number,
    task: [{
        taskTitle: String,
        taskText: String,
        taskSubject: String,
        taskDate: String,
        commentNumber: Number,
        comment: [{
            _taskID: mongoose.Schema.Types.ObjectId,
            commentOwner: String,
            commentText: String,
            nestedComments:[mongoose.Schema.Types.ObjectId]
        }]
    }],
    comment: [{
        _taskID: mongoose.Schema.Types.ObjectId,
        commentOwner: String,
        commentText: String,
        nestedComments:[mongoose.Schema.Types.ObjectId]
    }]
});

mongoose.model('User', userSchema);
