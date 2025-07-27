const registration = require('./Apis/registration');
const util = require('../../utils/customResponse');
const response = {};


response.create_user = async(req, res)=>{
    try {
        const data = await registration.create_user(req, res);
        util.getSuccessResponse(res, req, data.statusCode, data.message, data.status, data.result, data.totalCount, data.ref_id, data.type, data.action_type,data.error_key);
    } catch (error) {
        util.getSuccessResponse(res, req, 200, error.message, false, null, 0, '', 'MNRL', 'MNRL_API','MNRL_API');
    }
}



module.exports = response;