//===IMPORT JWT===
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    //get token from headers object in postman
    const token = req.header('x-auth-token')
    //if NO token
    if (!token) {
        return res.json('No Token; Access Denied!!!')
    }

    //if token found; veriy validity 
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decoded);

    next()
    } catch (error) {
        console.log(error);
        res.status(400).json('Token not valid!!!')
    }
}