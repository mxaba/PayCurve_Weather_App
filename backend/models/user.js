const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    role: {
        type: Boolean,
        require: false,
        default: false,
    },
    password: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('User', userSchema);
