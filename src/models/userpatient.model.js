'use strict';
var dbConn = require('../../config/db.config');

// User Object
var Userpatient = function(userpatient){
    this.patient_id = userpatient.patient_id;
    this.user_id = userpatient.user_id;
}


Userpatient.create = function (newUserpatient, result) {
    dbConn.query("INSERT INTO userpatients set ?", newUserpatient, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        console.log(res.insertId);
        result(null, res.insertId);
        }
    });
};



module.exports=  Userpatient;