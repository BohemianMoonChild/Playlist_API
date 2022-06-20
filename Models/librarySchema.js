const mongoose = require('mongoose')


const librarySchema = mongoose.Schema({
    
    songs: [
        {
                       
        songTitle: {
            type: String,
            required: true
        },
    
        artist: {
            type: String,
            required: true
        },
    
        year: {
            type: Number,
            required: true
        },
    
        genre: {
            type: String,
            required: true,
        },
    
        duration: {
            type: Number,
            required: false
        }, 
    
        fileType: {
            type: String,
            required: true
        },
    }
    ]
})






module.exports = mongoose.model('Library', librarySchema)