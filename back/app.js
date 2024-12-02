const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: `http://${process.env.CLIENT}`,
    credentials: true
}))

app.use('/users', userRoutes)

app.listen(3000)
