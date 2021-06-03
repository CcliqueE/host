const express = require('express')
const app = express()
const pool = require('./db')
const cors = require('cors')
const bcrypt = require('bcrypt')
const { Query } = require('pg')
const stripe = require('stripe')('sk_test_51IvyUYA2kpe3q8neCFvqVDg4M3bFovtBmOgG3dt8dYXLhgwnvjMkez7ZMhO8LtyWx2caP68TR8O8QRKJLDJd5vWA00wOT3e3xs');

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
    const exist = ((query.rows).map(({ email }) => email)).toString()
    const compare = ((query_two.rows).map(({ password }) => password)).toString()

    const query_yo = await pool.query('SELECT id FROM users WHERE email = $1', [req.body.email])
    const boo = ((query_yo.rows).map(({ id }) => id)).toString()
    res.set('user_id', boo)
    const user = res.getHeader('user_id')
    console.log(exist)

    if (exist !== req.body.email) {
        return res.status(400).send('User does not exist with this email')
    } else {
        try {
            if (await bcrypt.compare(req.body.password, compare)) {
                res.status(201).send(user)
            } else {
                res.status(404).send("User with this password doesn't exist")
            }
        } catch(err) {
            res.status(500).send(err.message)
        }
    }
})

//get username

app.post('/username', async (req, res) => {
    const query = await pool.query('SELECT username FROM users WHERE id = $1', [req.body.user_id])
    const username = ((query.rows).map(({ username }) => username)).toString()
    console.log(username)
    console.log(query.rows)
    try {
        res.status(201).send(username)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

//create product

app.post('/create-product', async (req, res) => {
    try {
        await stripe.products.create({
            name: req.body.name
        })
        res.status(201).send('Product Created')
        console.log(res.statusCode)
        console.log(res.statusMessage)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

//delete product

app.post('/delete-product', async (req, res) => {
    try {
        await stripe.products.del(
            req.body.name
        )
        console.log(res.statusCode)
        console.log(res.statusMessage)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

//create price for product

app.post('/create-product/price', async (req, res) => {
    try {
        await stripe.prices.create({
            product: req.body.name,
            currency: 'usd',
            unit_amount: req.body.price,
            recurring: {interval: req.body.recurring}
        })
        res.status(201).send('Price Created')
        console.log(res.statusCode)
        console.log(res.statusMessage)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

//create a subscription

app.post('/create-subscription', async (req, res) => {
    const query = await pool.query('SELECT email FROM users WHERE id = $1', [req.body.user_id])
    const customer_email = ((query.rows).map(({ email }) => email)).toString()

    const exist = await pool.query('SELECT email FROM customers WHERE email = $1', [customer_email])
    const exist_email = ((exist.rows).map(({ email }) => email)).toString()

    if (exist_email !== ''){
        res.status(400).send('Customer with this email already exists')
    } else {
    const customer = await stripe.customers.create({ 
        email: customer_email
    })

    const token = await stripe.tokens.create(
        {card: {
        name: req.body.name,
        number: req.body.cardNumber,
        cvc: req.body.cvc,
        exp_month: req.body.exp_month,
        //two digit number
        exp_year: req.body.exp_year
        //two digit number
        }}
    )

    const card = await stripe.customers.createSource(
        customer.id,
        {source: token.id}
    )

    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{
            price: req.body.price_id
        }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent']
    })

    const paymentIntent = await stripe.paymentIntents.confirm(
        subscription.latest_invoice.payment_intent.id,
        {payment_method: card.id}
    )

    const insert = [
        customer_email, 
        subscription.customer, 
        subscription.id,
        paymentIntent.payment_method,
        subscription.plan.product,
        paymentIntent.amount_received,
        paymentIntent.status
    ]
    
    console.log(paymentIntent.status)

    try{
        const createCustomer = await pool.query(
            'INSERT INTO customers (email, customer_id, sub_id, card_id, product_id, price, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', insert)
        res.json(createCustomer.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
});

//delete subscription

app.post('/cancel-subscription', async (req, res) => {
    const cancel_col = await pool.query("UPDATE customers SET status = 'cancelled' WHERE sub_id = $1", [req.body.sub_id])

    const delete_sub = await stripe.subscriptions.update(
        req.body.sub_id,
        {cancel_at_period_end: true}
    )

    console.log(delete_sub)
    try {
        res.status(201).send('user deleted')
    } catch (err) {
        res.status(500).send(err.message)
    }

})

app.post('/delete-expired', async (req, res) => {
    const check = await pool.query("SELECT status FROM customers WHERE status = 'cancelled'")
    const exist_check = ((exist.rows).map(({ email }) => email)).toString()
    if (exist_check !== '') {
      const delete_col = await pool.query("DELETE FROM customers WHERE date = DATE(NOW() - INTERVAL '1' MONTH)")  
    }
    

    console.log(check)
    try {
        res.status(201).send('checked')
    } catch (err) {
        res.status(500).send(err.message)
    }

})

//change default payment

app.listen(5000, () => {console.log('server has started on port 5000')})