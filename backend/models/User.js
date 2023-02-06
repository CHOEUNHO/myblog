const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        min: 3,
        max: 10,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},

{ timestamps: true } // 데이터를 입력한 날짜를 자동으로 입력

);

module.exports = mongoose.model('User', userSchema);