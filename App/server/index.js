require('dotenv').config() // stores all key value pairs in dotenv in process.env

const express = require ('express'); 
const mongoose = require ('mongoose'); 
const session = require('express-session');
const mongoStore = require("connect-mongo"); 

const routes = require ("./routes"); 

const { PORT=3000, MONGO_URI, SESSION_SECRET } = process.env; // provide default value in case if not available in .env file

const app = express (); 

app.use (express.json()); 
app.use (express.urlencoded({ extended: true })); // replace certain invalid characters for the url // %20 -> space

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: mongoStore.create({
        mongoUrl: MONGO_URI, 
    })
}));

app.use (routes); 

mongoose.set('strictQuery', false);
mongoose.connect (MONGO_URI)
    .then(() => console.log("CONNECTED TO DB"))
    .catch((error) => console.error(error));

app.listen (PORT, () => 
{
    console.log ("LISTENING ON PORT " + PORT); 
})