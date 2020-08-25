require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const massive = require('massive');
const postCtrl = require('./postController');

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


app.get('/api/posts', postCtrl.getAllPosts);

app.listen(SERVER_PORT, () => console.log('Server is running on ' + SERVER_PORT));