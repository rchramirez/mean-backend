const mongoose = require('mongoose')
//require('dotenv').config({ path: 'variables.env' })

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log('Connect to MongoDB successfully')
    } catch (error) {
        console.log('Connect failed ' + error.message)
        process.exit(1) //Detenemos la app
    }
}

module.exports = connectDB