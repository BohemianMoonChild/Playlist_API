//===IMPORT IN EXPRESS===
const express = require('express')
//===IMPORT SCHEMA===
const userModel = require("../Models/userSchema")

//===PULL FUNCTION FROM EXPRESS VALIDATOR===
const {check, validationResult} = require('express-validator')

//===HASHING ALGORITHM TO SECURE PW===
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')



///===CREATE ROUTER===
const router = express.Router()


//===GET ALL USERS===
router.get('/', async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        
    }
})

//===REGISTER NEW USER===
router.post('/', [
    check("username", "A Username is required from the Middleware!!!").notEmpty(),
    check("email", "Please use a valid email address from the Middleware!!!").isEmail(),
    check("password", "Please enter a password").notEmpty(),
    check("password", "Please enter a password with six or more characters").isLength({min: 6}),

] , async (req, res) => {
    const userData = req.body

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.json(errors.array())
    }

    try {
        const userExist = await userModel.findOne({email: userData.email})

        if (userExist) {
            return res.json({msg: "User already exists!!!"})
        }
    


//===CREATE NEW USER/SALT===
const SALT = await bcrypt.genSalt(12)
const hashedpassword = await bcrypt.hash(userData.password, SALT)
userData.password = hashedpassword

const user = await userModel.create(userData) //create new user


//===CREATE NEW JWT TOKEN===
const payload ={
    id: user._id,
    email: user.email
}

//===SECRET KEY===
const TOKEN = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "3 Days"})

res.status(201).json({
    user: user,
    token: TOKEN
})
} catch (error) {
        console.log(error)
        res.status(400).json("Bad Request!!!")
        
    }
})





module.exports = router