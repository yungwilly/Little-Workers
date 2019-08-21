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
        data: Buffer, contentType: String
    }
});

mongoose.model('User', userSchema);
