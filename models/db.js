const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://littleworkers_DB:Krustykrab@littleworkersdb-nuuwn.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
    if(!err) {
        console.log('MongoDB connection success');
    }else{
        console.log('Error');
    }
});

require('./task.model');
require('./user.model');

