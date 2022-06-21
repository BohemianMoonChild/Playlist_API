//===IMPORT EXPRESS===
const express = require('express')

//===IMPORT SCHEMA===
// const playlistModel = require('../Models/playListSchema')
const authMiddleware = require('../Middleware/authMiddleware')
const libraryModel = require('../Models/librarySchema')


//===CREATE ROUTER===
const router = express.Router()


//===GET/LIBRARY FROM THE ROUTE===
router.get('/', async (req, res) => {
    try {
        const library = await libraryModel.find()
        res.status(200).json(library)
    } catch (error) {
        console.log(error)
        
    }
})


//===CREATE LIBRARY===
router.post('/', async (req, res) => {
    const libraryData = req.body
    console.log(libraryData);

    try {
        const library = await libraryModel.create(libraryData)

        res.status(201).json(library)
        
    } catch (error) {
        console.error(error)
        res.status(400).json('Warning; Bad request!!!')
        
    }
})


//===ADD SONG TO LIBRARY DATABASE===
router.post('/addSong/:id', async (req, res) => {
    const id = req.params.id
    const newSongData = req.body

    try {
        const library = await libraryModel.findById(id)
        library.songs.push(newSongData)
        await library.save()
        res.json(library)
    } catch (error) {
        console.log(error)
        
    }
})


//===DELETE A SONG WITHIN A PLAYLIST===
router.delete('/deleteSong/:id', async (req, res) => {
    const id = req. params.id

    try {
        const library = await libraryModel.findByIdAndDelete(id)
        res.status(200).json({msg: "song was deleted from the Library!"})
    } catch (error) {
        console.log(error);

    }
})




module.exports = router