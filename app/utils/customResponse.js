const Crypto = require('crypto');
const customResponse = {};

customResponse.getSuccessResponse = async(res, req, code = "200", message = "", value = true, result = "", totalCount = 0, ref_id='', type='', action_type='', error_key = '')=>{
    if(code == 200 && value == true){
        value = true;
    }else{
        value = false;
    }

    const responseId=await customResponse.randomString(24)
    
    res.status(parseInt(code)).json({
        message: message,
        error_key: error_key, 
        success: value,
        result: result ? result : null,
        count: totalCount,
        responseId:responseId
    });
}


// Return random number any digit 
customResponse.randomString=async(size = 16)=>{  
  return Crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size)
}


customResponse.initializeResponseObj = () => ({
  statusCode: 200,
  message:'',
  status:false,
  result: '',
  totalCount: 0,
  ref_id:'',
  type:'NODE_SETUP',
  action_type: '',
  error_key: ''
});



module.exports = customResponse;






// let res_data = {};
// res_data.result = result;
// res_data.message = message;

// let req_data = {};
// req_data.headers = req.headers;
// req_data.url = req.originalUrl;
// req_data.body = req.body;