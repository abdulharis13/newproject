const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 4,
        maxlength: 12,
        required: true,
    },
    namalengkap: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,
    },
    email: {
        type: String,
        minlength: 6,
        maxlength: 30,
        required: true,
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 20,
        required: true,
    },
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;