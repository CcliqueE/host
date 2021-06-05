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

    const query_three = await pool.query('SELECT id FROM users WHERE email = $1', [req.body.email])
    const boo = ((query_three.rows).map(({ id }) => id)).toString()

    console.log('user_id: ' + boo)

    const checkSub = await pool.query('SELECT sub_id FROM customers WHERE email = $1', [req.body.email])
    var subExist = ((checkSub.rows).map(({ sub_id }) => sub_id)).toString()

    if (subExist === '') {
        subExist = null
    }

    console.log('subscribed: ' + subExist)

    const check_status = await pool.query('SELECT status FROM customers WHERE email = $1', [req.body.email])
    var exist_status = ((check_status.rows).map(({ status }) => status)).toString()

    if (exist_status === 'cancelled' || exist_status === '') {
        exist_status = false
    } else {
        exist_status = true
    }

    console.log('status: ' + exist_status)

    const card_id = await pool.query('SELECT card_id FROM customers WHERE email = $1', [req.body.email])
    var exist_card = ((card_id.rows).map(({ card_id }) => card_id)).toString()

    if (exist_card === '') {
        exist_card = false
    } else {
        exist_card = true
    }

    console.log('Does card exist: ' + exist_card)

    if (exist !== req.body.email) {
        return res.status(400).send('User does not exist with this email')
    } else {
        try {
            if (await bcrypt.compare(req.body.password, compare)) {
                res.status(201).send([boo, subExist, exist_status, exist_card])
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

    const check_status = await pool.query('SELECT status FROM customers WHERE email = $1', [customer_email])
    var exist_status = ((check_status.rows).map(({ status }) => status)).toString()

    if (exist_status === 'cancelled' || exist_status === '') {
        exist_status = false
    } else {
        exist_status = true
    }

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
    
    var method = paymentIntent.payment_method_types.toString()

    if (method === 'card') {
        method = true
    } else {
        method = false
    }

    console.log('status: ' + paymentIntent.status)

    try{
        await pool.query(
            'INSERT INTO customers (email, customer_id, sub_id, card_id, product_id, price, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', insert)
        res.status(201).send([subscription.id, method, true])
    } catch (err) {
        res.status(500).send(err.message)
    }
}
});

//cancel subscription

app.post('/cancel-subscription', async (req, res) => {
    const cancel_col = await pool.query("UPDATE customers SET status = 'cancelled' WHERE sub_id = $1", [req.body.sub_id])

    const delete_sub = await stripe.subscriptions.update(
        req.body.sub_id,
        {cancel_at_period_end: true}
    )
    
    console.log('cancel at end of month: ' + delete_sub.cancel_at_period_end)

    try {
        res.status(201).send(delete_sub)
    } catch (err) {
        res.status(500).send(err.message)
    }

})

//resume subscription

app.post('/resume-subscription', async (req, res) => {
    const cancel_col = await pool.query("UPDATE customers SET status = 'succeeded' WHERE sub_id = $1", [req.body.sub_id])

    const resume_sub = await stripe.subscriptions.update(
        req.body.sub_id,
        {cancel_at_period_end: false}
    )

    console.log('cancel at end of month: ' + resume_sub.cancel_at_period_end)

    try {
        res.status(201).send('Subcription Resumed')
    } catch (err) {
        res.status(500).send(err.message)
    }

})

//delete expired subscription

app.post('/delete-expired', async (req, res) => {
    const check = await pool.query("SELECT status FROM customers WHERE sub_id = 'cancelled'")
    const exist_check = ((check.rows).map(({ status }) => status)).toString()
    if (exist_check !== '') {
      const delete_col = await pool.query("DELETE FROM customers WHERE date = DATE(NOW() - INTERVAL '1' MONTH)")  
    }
    
    console.log('empty string if no cancelled: ' + exist_check)
    
    try {
        res.status(201).send(['checked', exist_check])
    } catch (err) {
        res.status(500).send(err.message)
    }

})

// delete subscription (dev only)

app.post('/delete-subscription', async (req, res) => {
    const cancel_col = await pool.query('DELETE FROM customers WHERE sub_id = $1', [req.body.sub_id])

    const delete_sub = await stripe.subscriptions.del(
        req.body.sub_id
    )

    console.log(delete_sub.status)

    try {
        res.status(201).send('User Deleted')
    } catch (err) {
        res.status(500).send(err.message)
    }

})

//retrieve card

app.post('/retrieve-card', async (req, res) => {
    const ret_card = await pool.query('SELECT card_id FROM customers WHERE sub_id = $1', [req.body.sub_id])
    const exist_card = ((ret_card.rows).map(({ card_id }) => card_id)).toString()

    const ret_cust = await pool.query('SELECT customer_id FROM customers WHERE sub_id = $1', [req.body.sub_id])
    const exist_cust = ((ret_cust.rows).map(({ customer_id }) => customer_id)).toString()

    const card = await stripe.customers.retrieveSource(
        exist_cust,
        exist_card
    )

    try {
        res.status(201).send([card.brand, card.name, card.last4])
    } catch (err) {
        res.status(500).send(err.message)
    }

})

//change default payment

app.post('/update-card', async (req, res) => {
    const up_card = await pool.query('SELECT card_id FROM customers WHERE sub_id = $1', [req.body.sub_id])
    const exist_card = ((up_card.rows).map(({ card_id }) => card_id)).toString()

    const up_cust = await pool.query('SELECT customer_id FROM customers WHERE sub_id = $1', [req.body.sub_id])
    const exist_cust = ((up_cust.rows).map(({ customer_id }) => customer_id)).toString()

    const check_status = await pool.query('SELECT status FROM customers WHERE sub_id = $1', [req.body.sub_id])
    var exist_status = ((check_status.rows).map(({ status }) => status)).toString()

    console.log(exist_status)

    if (exist_status === 'succeeded') {
        exist_status = true
    }

    if (exist_status === 'cancelled') {
        await pool.query("UPDATE customers SET status = 'succeeded' WHERE sub_id = $1", [req.body.sub_id])
    }

    if(exist_card !== '') {
    await stripe.customers.deleteSource(
        exist_cust,
        exist_card
    )
    }

    const token = await stripe.tokens.create({
        card: {
            name: req.body.name,
            number: req.body.cardNumber,
            exp_month: req.body.exp_month,
            exp_year: req.body.exp_year,
            cvc: req.body.cvc
        }
    })

    const card = await stripe.customers.createSource(
        exist_cust,
        {source: token.id}
    )

    const update = await pool.query('UPDATE customers SET card_id = $1 WHERE sub_id = $2', [card.id, req.body.sub_id])

    try {
        res.status(201).send([card.id, card.brand, card.name, card.last4, true])
    } catch (err) {
        res.status(500).send(err.message)
    }

})

//delete card

app.post('/delete-card', async (req, res) => {
    const ret_card = await pool.query('SELECT card_id FROM customers WHERE sub_id = $1', [req.body.sub_id])
    const exist_card = ((ret_card.rows).map(({ card_id }) => card_id)).toString()

    const ret_cust = await pool.query('SELECT customer_id FROM customers WHERE sub_id = $1', [req.body.sub_id])
    const exist_cust = ((ret_cust.rows).map(({ customer_id }) => customer_id)).toString()

    const card_update = await pool.query("UPDATE customers SET card_id = '' WHERE sub_id = $1", [req.body.sub_id])
    const cancel_col = await pool.query("UPDATE customers SET status = 'cancelled' WHERE sub_id = $1", [req.body.sub_id])

    const card = await stripe.customers.deleteSource(
        exist_cust,
        exist_card
    )
    
    try {
        res.status(201).send(false)
    } catch (err) {
        res.status(500).send(err.message)
    }

})

app.listen(5000, () => {console.log('server has started on port 5000')})