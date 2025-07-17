require('dotenv').config();
const express = require('express');
const mysql = require('./config/datsbase');




const app = express();


const server = app.listen(process.env.PORT, ()=>{
    const address = server.address();
    console.log('server is Starting on port : ',address.port);
});



process.on('uncaughtException', ()=>{
    console.log("Error in starting in server");
    console.log("Node not existing.....");
})

