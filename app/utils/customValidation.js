const customValidation = {};


customValidation.checkProperties = async(data)=>{
    let value = {
        status : false,
        message : '',
    };
    // console.log("data",data);
    return new Promise((resolve, reject) =>{
        try {
            if(data.doc){
                data.doc = 'exist'
            }
            for(var key in data){
                if(data[key] != null && data[key] != '' && typeof data[key] != 'undefined'){
                    // pass
                }else{
                    value.message = key + ' value required';
                    value.status = false;
                    return resolve(value);
                }
            }
            value.status = true
            return resolve(value)
        } catch (error) {
            console.log("error", error);
            value.message = key + 'value required';
            value.status = false;
            return resolve(value)
        }
    });
}


module.exports = customValidation;