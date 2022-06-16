//===IMPORT EXPRESS===
const express = require('express')

//===IMPORT SCHEMA===
// const playlistModel = require('../Models/playListSchema')
// const authMiddleware = require('../Middleware/authMiddleware')
const libraryModel = require('../Models/librarySchema')


//===CREATE ROUTER===
const router = express.Router()


//===GET/LIBRARY FROM THE ROUTE===
router.get('/', authMiddleware, async (req, res) => {
    try {
        const library = await libraryModel.find()
        res.status(200).json(library)
    } catch (error) {
        console.log(error)
        
    }
})


//===CREATE LIBRARY===
router.post('/', authMiddleware, async (req, res) => {
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





module.exports = router