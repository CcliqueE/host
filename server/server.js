const express = require('express')
const app = express()
const pool = require('./db')
const cors = require('cors')
const bcrypt = require('bcrypt')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//ROUTES//

app.get('/users', (req, res) => {
    res.json(arr)
})

//create a user

app.post('/register', async (req, res) => {
    const query = await pool.query('SELECT email FROM users WHERE email = $1', [req.body.email])

    const exist = ((query.rows).map(({ email }) => email)).toString()
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const users = [req.body.email, req.body.username, hashedPassword]
    console.log(req.body.username)
    if (exist === req.body.email) {
        res.status(400).send(console.log('User with this email already exists'))
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

app.post('/login', async (req, res) => {
    const query = await pool.query('SELECT email FROM users WHERE email = $1', [req.body.email])
    const query_two = await pool.query('SELECT password FROM users WHERE email = $1', [req.body.email])
    const query_three = await pool.query('SELECT username FROM users WHERE email = $1', [req.body.email])
    const exist = ((query.rows).map(({ email }) => email)).toString()
    const compare = ((query_two.rows).map(({ password }) => password)).toString()
    const username = ((query_three.rows).map(({ username }) => username)).toString()
    console.log(username)

    if (exist !== req.body.email) {
        return res.status(400).send('User does not exist with this email')
    } else if (username !== req.body.username) {
        return res.status(401).send('User does not exist with this username') 
    } else {
        try {
            if (await bcrypt.compare(req.body.password, compare)) {
                res.status(201).send('Login Successful')
            } else {
                res.status(404).send("User with this password doesn't exist")
            }
        } catch(err) {
            res.status(500).send(err.message)
        }
    }
})

//create a subsciption setup

//only allow certain people to access this piece of the website

app.listen(5000, () => {console.log('server has started on port 5000')})