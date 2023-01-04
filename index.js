const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const path = require('path')
const app = express()

// enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// set static folder for frontend
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/OpenAIRoutes'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})