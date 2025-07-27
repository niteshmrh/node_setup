const customResponse = require('../../../utils/customResponse');
const isValid = require('../../../utils/customValidation');
const registration = {};

registration.create_user = async(req, res)=>{
    console.log("******************** API FOR CREATE USER ******************");
    let bodyData = req.body;
    console.log("BodyData-------->>>>>>>>",bodyData);
    
    let resObj = customResponse.initializeResponseObj();
    let input_data = {};

    resObj.statusCode = 200;
    resObj.message = '';
    resObj.status = false;
    resObj.result ='';
    resObj.totalCount = 0;
    resObj.ref_id ='';
    resObj.type ='USER_REGISTRATION';
    resObj.action_type = '';
    resObj.error_key = '';

    try {
        // operation perform
        // 1. data validation (Not Null, Not Empty, Every thing is required);
        input_data.email = bodyData.email ? bodyData.email : '';
        input_data.password = bodyData.password ? bodyData.password : '';
        input_data.first_Name = bodyData.first_Name ? bodyData.first_Name : '';
        input_data.last_Name = bodyData.last_Name ? bodyData.last_Name : '';
        // if(!bodyData.email){
        //     resObj.message = 'Email Required'
        //     return resObj;
        // }
        // if(!bodyData.password){
        //     resObj.message = 'password Required'
        //     return resObj;
        // }
        // if(!bodyData.first_Name){
        //     resObj.message = 'first_Name Required'
        //     return resObj;
        // }
        // if(!bodyData.last_Name){
        //     resObj.message = 'last_Name Required'
        //     return resObj;
        // }

        let data_validate = await isValid.checkProperties(input_data);
        if(data_validate.status){
            // write your code here
            // 2. sql injection
            // 3. password encryption
            
            // if all the operations are successfully completed then 
            resObj.status = true;
            resObj.message = "User Successfully Registred.";
        }else{
            console.log("data_validate----->>>>>>>>>",data_validate);
            resObj.status = data_validate.status;
            resObj.message = data_validate.message;
        }
        return resObj;
    } catch (error) {
        console.log("Error in Catch ",error);
        resObj.error_key = error.message;
        resObj.error = error;
        return resObj;
    }
}

registration.user_Login = async(req, res)=>{

}


module.exports = registration;