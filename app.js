require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const database = require('./config/database');



const app = express();

// Mongoose Connection
mongoose.connect(database.mongodb.uri);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', ()=>{
    console.log("MongoDB is connected");
});

mongoose.connection.on('error', ()=>{
    console.log("Error in MongoDB ", error);
});

const server = app.listen(process.env.PORT, ()=>{
    const address = server.address();
    console.log('server is Starting on port : ',address.port);
});



process.on('uncaughtException', ()=>{
    console.log("Error in starting in server");
    console.log("Node not existing.....");
})

