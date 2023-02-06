const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        max: 50,
        required: true,
    },
    body: {
        type: String,
        max: 500,
    },
},

{ timestamps: true }

);

module.exports = mongoose.model("Post", PostSchema);