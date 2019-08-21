const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    text: {
        type: String
    }
});

mongoose.model('Comment', commentSchema);