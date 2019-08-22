const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
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
});

mongoose.model('Task', taskSchema);
