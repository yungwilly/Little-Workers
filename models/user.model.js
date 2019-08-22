const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String, 
    password: String,
    rating: int,
    Task: [{
        title: String,
        text: String,
        subject: String,
        Comment: [{
            firstName: String,
            text: String
        }]
    }],
    Comment: [{
        firstName: String,
        text: String
    }]
});

mongoose.model('User', userSchema);
