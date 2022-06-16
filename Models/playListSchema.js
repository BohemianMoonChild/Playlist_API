const mongoose = require('mongoose')


const playlistSchema = mongoose.Schema({
    PlaylistName: {
        type: String,
        require: true
    },

songs: [
    {
        playlist:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"PLAYLIST_API"
        },
        
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
        required: false
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
],

    private: {
        type: Boolean,
        default:false
    },

    created_at: {
        type: Date,
        default: Date.now()
    }


})

module.exports = mongoose.model('PLAYLIST_API', playlistSchema)