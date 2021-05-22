const express = require('express')
const app = express()
const pool = require('./db')
const cors = require('cors')
const bcrypt = require('bcrypt')

app.use(cors())
app.use(express.json())

//ROUTES//

app.get('/users', (req, res) => {
    res.json(arr)
})

//create a user

app.post('/users/register', async (req, res) => {
    const query = await pool.query('SELECT email FROM users WHERE email = $1', [req.body.email])
    const exist = ((query.rows).map(({ email }) => email)).toString()
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const users = [req.body.email, req.body.username, hashedPassword]
    if (exist === req.body.email) {
        res.status(400).send("Account with this email already exists")
    } else {
        try {
        const createUser = await pool.query(
            'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *', users)
            res.json(createUser.rows[0])
        } catch(err) {
            res.status(500).send(err.message)
        }
    }
})

//login a user

app.post('/users/login', async (req, res) => {
    const query = await pool.query('SELECT username FROM users WHERE username = $1', [req.body.username])
    const query_two = await pool.query('SELECT password FROM users WHERE username = $1', [req.body.username])
    const exist = ((query.rows).map(({ username }) => username)).toString()
    const compare = ((query_two.rows).map(({ password }) => password)).toString()
    if (exist !== req.body.username) {
        return res.status(400).send("User doesn't exist")
    } else {
        try {
            if (await bcrypt.compare(req.body.password, compare)) {
                res.status(201).send('Login Successful')
            } else {
                res.send ("User with this password doesn't exist")
            }
        } catch(err) {
            res.status(500).send(err.message)
        }
    }
})

//create a subsciption setup

//only allow certain people to access this piece of the website

app.listen(5000, () => {console.log('server has started on port 5000')})