const express = require('express')
const app = express()
const port = 4040
const userRouter = require('./routes/users')
const mongoose = require('mongoose')

//importing dot env
require('dotenv').config()
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database successfully'))
app.get('/', (request, response) => {
    response.status(200)
    response.send('welcome to homepage')
})

app.use(userRouter)

app.use(express.json())
app.listen(port, () => {
    console.log('server started successfully');
})