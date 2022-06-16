//===IMPORT===
const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const helmet = require('helmet')

const mongoConfig = require('./Config/mongoConfig')
const playListRouter = require('./Routes/playlistRouter')
const userRouter = require('./Routes/userRouter')
const authRouter = require('./Routes/authRouter')
const libraryRouter = require('./Routes/libraryRouter')


//===IMPORT ROUTER===
const app = express()
const PORT = 6000
console.log("hello world")


//===MIDDLEWARE===
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

//===TELL APP TO USE FOLLOWING ROUTER TO SEND BACK MSG===
app.use('/playlist', playListRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/library', libraryRouter)



//===ROOT ROUTE FOR APP===
app.get('/', (req, res) => {
    res.status(200).json("Welcome to my API that I haven't yet figured out!!!")
})




app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
})