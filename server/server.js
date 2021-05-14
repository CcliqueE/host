const express = require('express')
const app = express()
const pool = require('./db')

app.use(cors())
app.use(express.json())

//ROUTES//

//create a user

//login a user

//create a subsciption back-end

//only allow certain people to access this piece of the website

app.listen(5000, () => {
    console.log('server has started on port 5000')
})