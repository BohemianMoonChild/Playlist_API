//===CONNECTION TO MONGOOSE===
const mongoose = require('mongoose')

//===EXPORT & CATCH ERRORS===
module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        await mongoose.connection
        console.log('MongoDB Connected!');
        
    } catch (error) {
        console.log(error)
        
    }
}