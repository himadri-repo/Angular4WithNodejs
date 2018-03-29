var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    'id': Number,
    'name': {
        'firstName': String,
        'lastName': String
    },
    'userName': String,
    'password': String,
    'email': String,
    'token': String,
    'isactive': Boolean
});

var userModel = mongoose.model('users', userSchema);

module.exports = userModel;