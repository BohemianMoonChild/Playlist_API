//===IMPORT===
const express = require('express')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../Models/userSchema')


const router = express.Router()

//===USER LOGIN===
router.post('/', [
    check("email", "Please provide a valid email").isEmail(),
    check("password", "check your password!").notEmpty()

] , async (req, res) => {
    const userData = req.body

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.json(errors.array())
    }

try {
    const user = await userModel.findOne({email: userData.email})

    if (!user) {
        return res.json('user does not exist!')
    }

    const isMatch = await bcrypt.compare(userData.password, user.password)
    if (!isMatch) {
        return res.json("Your password does not match!")
    }

    //===CREATE NEW JWT TOKEN===
    const payload = {
        id: user._id,
        email: user.email
    }

    const TOKEN = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "3 Days"})
    res.status(201).json({
        user: user,
        token: TOKEN
    })
} catch (error) {
    console.log(error);
    res.status(500).json("Server Error; no token found!")
}
})


module.exports = router