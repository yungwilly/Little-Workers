const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    text: {
        type: String
    }
});

mongoose.model('Comment', commentSchema);