const express = require('express')
const app = express()
const pool = require('./db')
const cors = require('cors')
const bcrypt = require('bcrypt')

app.use(cors())
app.use(express.json())

//ROUTES//

app.get('/users', (req, res) => {
    res.json(users)
})

//create a user

app.post('/users', async (req, res) => {
    const inputs = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }
    const hashedPassword = await bcrypt.hash(inputs.password, 12)
    const users = [inputs.email, inputs.username, hashedPassword]
    try {
        const createUser = await pool.query(
            'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *',
            users
        )
        res.json(createUser.rows[0])
    } catch {
        res.status(500).send()
    }
})

//login a user

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.username)
    if (user === null) {
        return res.status(400).send("User doesn't exist")
    }
    try {
        if(await bcrypt.compare(req.body.password, )) {
            res.send('Login Successful')
        } else {
            res.send ('Not allowed')
        }
    } catch {
        res.status(500).send()
    }
})

//create a subsciption setup

//only allow certain people to access this piece of the website

app.post('/names', async (req, res) => {
    try {
        const inputs = {
            firstname: req.body.firstname,
            lastname: req.body.lastname
        }
        const names = [inputs.firstname, inputs.lastname]
        const newFullName = await pool.query(
            "INSERT INTO names (firstname, lastname) VALUES ($1, $2)",
            names
        )

        res.json(newFullName)

    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.post('/names2', async (req, res) => {
    try {
        const { firstname } = req.body
        const newFullName = await pool.query(
            "INSERT INTO names (firstname) VALUES ($1)",
            [firstname]
        )

        res.json(newFullName)
    } catch (err) {
        res.status(500).send(err.message)
    }
})


app.listen(5000, () => {
    console.log('server has started on port 5000')
})