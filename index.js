require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const PORT = process.env.PORT

//Creamos el servidor
const app = express()

//Conectamos a la BD
connectDB()

app.use(cors())

app.use(express.json())

app.use('/api/productos', require('./routes/producto'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})