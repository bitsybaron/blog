require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();

const massive = require('massive');
const postCtrl = require('./postController');
const shopCtrl = require('./shopController');
const authCtrl = require('./authController');
const paymentCtrl = require('./paymentCtrl');


app.use(express.json());

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT, SECRET_KEY} = process.env


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






  

app.get('/api/posts', postCtrl.getAllPosts);
app.get('/api/filtered/posts/:tags', postCtrl.getFilteredPosts);
app.post('/api/payment', paymentCtrl.chargeCustomer);
app.get('/api/products', shopCtrl.getProducts);
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);
app.delete(`/api/item/:product_id/:userId`, shopCtrl.deleteItem);
app.post('/api/item', shopCtrl.addToCart);
app.get(`/api/cart/:userId`, shopCtrl.getCart);
app.put(`/api/item/:userId/:product_id`, shopCtrl.increase);
app.put('/api/items/:userId/:product_id', shopCtrl.decrease);
app.get('/api/total/:userId', shopCtrl.getTotal);



app.listen(SERVER_PORT, () => console.log('Server is running on ' + SERVER_PORT));