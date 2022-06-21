//===IMPORT EXPRESS===
const express = require('express')

//===IMPORT SCHEMA===
const playlistModel = require('../Models/playListSchema')
const authMiddleware = require('../Middleware/authMiddleware')
// const libraryModel = require('../Models/librarySchema')


//===CREATE ROUTER===
const router = express.Router()

//===GET PLAYLIST FROM ROUTE (get playlist)===
router.get('/', authMiddleware, async (req, res) => {
    try {
        const playList = await playlistModel.find()
        res.status(200).json(playList)
    } catch (error) {
        console.log(error)
        
    }
})

// //===(TEST)===GET/CREATE LIBRARY===
// router.get('/', authMiddleware, async (req, res) => {
//     try {
//         const library = await libraryModel.find()
//         res.status(200).json(library)
//     } catch (error) {
//         console.log(error)
//     }
// })



//===CREATE/POST PLAYLIST===
router.post('/', authMiddleware, async (req, res) => {
    const playListData = req.body
    console.log(playListData);

    try {
        const playList = await playlistModel.create(playListData)

        res.status(201).json(playList)
        
    } catch (error) {
        console.error(error)
        res.status(400).json('Warning; Bad request!!!')
        
    }
})

//===GET PLAYLIST BY ID===
router.get('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id

    try {
        const playList = await playlistModel.findById(id)
        res.status(201).json(playList)

        
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg: 'Unable to locate ID'
        })
        
    }
})


//===UPDATE PLAYLIST BY ID===
router.put('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id
    const newplayListData = req.body
    try {
        const playList = await playlistModel.findByIdAndUpdate(id, newplayListData, {new: true})
        res.status(201).json(playList)
    } catch (error) {
        console.log(error)
        
    }
})

//===ADD SONG TO PLAYLIST===
router.post('/addSong/:id', authMiddleware, async (req, res) => {
    const id = req.params.id
    const newSongData = req.body

    try {
        const playList = await playlistModel.findById(id)
        playList.songs.push(newSongData)
        await playList.save()
        res.json(playList)
    } catch (error) {
        console.log(error)
        
    }
})

//===DELETE A SONG FROM PLAYLIST===
router.delete('/deleteSong/:id', authMiddleware, async (req, res) => {
    const id = req.params.id
    console.log('from delete', req.user);

    try {
        const playList = await playlistModel.findByIdAndDelete(id)
        res.status(202).json(playList,{msg: "Song was removed from playlist!"})
    } catch (error) {
        console.log(error);
        
    }
})

// //===DELETE A SONG WITHIN A PLAYLIST===
// router.delete('/:id', authMiddleware, async (req, res) => {
//     const id = req. params.id

//     try {
//         const playList = await playlistModel.findByIdAndRemove(id)
//         res.status(202).json({msg: "song was deleted!"})
//     } catch (error) {
//         console.log(error);
        
//     }
// })

module.exports =  router