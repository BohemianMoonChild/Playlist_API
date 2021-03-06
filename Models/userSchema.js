const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email:    {
        type: String,
        required: true
    },

    birthday: {
        type: Date,
        required: true
    },

    age:      {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('user', userSchema)