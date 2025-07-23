require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./config/database');
const util = require('./app/utils/customResponse');
const routes= require('./app/Http/routes');


const app = express();

// cors - Cross-Origin Resource Sharing
app.use(cors());

// Mongoose Connection
mongoose.connect(database.mongodb.uri);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', ()=>{
    console.log("MongoDB is connected");
});

mongoose.connection.on('error', (error)=>{
    console.log("Error in MongoDB ", error);
});

// type of middleware
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));

// app.get(path, [middleware...], handler) 
// Error-handling middleware (4 arguments)   (err, req, res, next)
// A route that throws an error  (req, res, next)
app.get('/node_setup/health', (req, res, next)=>{
    util.getSuccessResponse(res, req, 200, 'Node Setup Health is 100%', true, 'Ok', 0, '','type','NODE_SETUP','');
});

app.use('/node_setup', routes);


const server = app.listen(process.env.PORT, ()=>{
    const address = server.address();
    console.log('server is Starting on port : ',address.port);
});



process.on('uncaughtException', (error)=>{
    console.log("Error in starting in server", error);
    console.log("Node not existing.....");
});


app.use((req, res, next) => {
    util.getSuccessResponse(res,req,404,'Sorry Unable to find this page',true,'Ok',0,'ref_id','type','action_type','PAGE_NOT_FOUND');
});

