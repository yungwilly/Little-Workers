const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    username: {
        type: String 
    },
    password: {
        type: String
    },
    displayPicture: {
        type: String, required: true
    }
});

mongoose.model('User', userSchema);
