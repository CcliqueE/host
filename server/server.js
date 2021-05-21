const express = require('express')
const app = express()
const pool = require('./db')
const client = require('./db')
const cors = require('cors')
const bcrypt = require('bcrypt')

client.connect()

app.use(cors())
app.use(express.json())

//ROUTES//

app.get('/users', (req, res) => {
    res.json(arr)
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
    const query = {
        text: 'SELECT username FROM users',
        rowMode: 'array'
    }
    const query_two = {
        text: 'SELECT password FROM users WHERE username = $1',
        values: [req.body.username],
        rowMode: 'array'
    }
    const user = (req.body.username === pool.query(query))
    if (user === false) {
        return res.status(400).send("User doesn't exist")
    }
    try {
        if (await bcrypt.compare(req.body.password, pool.query(query_two).toString())) {
            res.status(201).send('Login Successful')
        } else {
            res.send ('Not allowed')
        }
    } catch (err){
        res.status(500).send(err.message)
    }
})

const query = {
    text: 'SELECT username FROM users',
        rowMode: 'array'
}

pool.query(query, (err, res) => {
    if (err) {
      console.error(err.stack)
    } else {
      console.log(res.rows)
    }
  })

console.log('jake' === pool.query(query))

//create a subsciption setup

//only allow certain people to access this piece of the website

app.listen(5000, () => {
    console.log('server has started on port 5000')
})