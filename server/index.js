require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const massive = require('massive');
const postCtrl = require('./postController');
const shopCtrl = require('./shopController');
const authCtrl = require('./authController');
const stripe = require('stripe')('sk_test_51HK6w9Kt7srICsPZynNuWdhzGXOBs8d29WHU694THYXyxnJdp3b6ozLOr5KtOrr9Navm9TuyfxlBjeIYWPpfV5Wd00nOrEzDPl');

app.use(express.json());

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('connected to db')
}).catch(err => console.log(err))

const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };
  

app.get('/api/posts', postCtrl.getAllPosts);
app.get('/api/filtered/posts/:tags', postCtrl.getFilteredPosts);
app.post('/create-payment-intent', async (req, res) => {
    const {items} = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: 'usd'
    })
    res.send({
        clientSecret: paymentIntent.client_secret
    })
})
app.get('/api/products', shopCtrl.getProducts);
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);
app.post('/api/item', shopCtrl.addToCart);
app.get(`/api/cart/:userId`, shopCtrl.getCart);
app.delete(`/api/item/:order_id`, shopCtrl.deleteItem);


app.listen(SERVER_PORT, () => console.log('Server is running on ' + SERVER_PORT));