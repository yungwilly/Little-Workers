const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    text: {
        type: String
    },
    subject: {
        type: String 
    }
});

mongoose.model('Task', taskSchema);
