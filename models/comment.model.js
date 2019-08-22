const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    _taskID: mongoose.Schema.Types.ObjectId,
    commentOwner: String,
    commentText: String,
    nestedComments:[mongoose.Schema.Types.ObjectId]
});

mongoose.model('Comment', commentSchema);