const express=require('express');
const util = require('../utils/customResponse');
const response = require('./Controller/Response');

const router=express.Router();

router.get('/', (req, res)=>{
    util.getSuccessResponse(res, req, 200, 'under routes', true, 'Ok', 0, '','type','NODE_SETUP','');   
})

// create user
router.post('/create_user', response.create_user);

module.exports=router;