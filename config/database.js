require('dotenv').config();
const mysql = require('mysql2');

module.exports = {
    mongodb : {
        uri : process.env.MONGOSE_DB_PARAMETER
    },
    sql : mysqlPoolConnect(process.env.HOST, process.env.USER, process.env.PASSWORD, process.env.DB_NAME1),
    sql : mysqlPoolConnect(process.env.HOST, process.env.USER, process.env.PASSWORD, process.env.DB_NAME2),
}


function mysqlPoolConnect(HOST, USER, PASSWORD = '', DB_NAME1){
    var conPool  = mysql.createPool({
        connectTimeout  : 60*60*1000,
        // acquireTimeout  : 60*60*1000,
        // timeout : 60*60*1000,
        connectionLimit : 10,
        host            : HOST,
        user            : USER,
        password        : PASSWORD,
        database        : DB_NAME1,
        waitForConnections: true,
    });

    conPool.getConnection((err, conn)=>{
        if(err){
            console.log(err);
            throw err;
        }else{
            console.log("Database is connected to : ",DB_NAME1);
        }
    });

    return conPool;
}



