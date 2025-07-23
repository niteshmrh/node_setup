const express=require('express');
const util = require('../utils/customResponse');

const router=express.Router();

router.get('/', (req, res)=>{
    util.getSuccessResponse(res, req, 200, 'under routes', true, 'Ok', 0, '','type','NODE_SETUP','');   
})

module.exports=router;