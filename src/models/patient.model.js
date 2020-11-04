'use strict';
var dbConn = require('./../../config/db.config');

// Patient Object
var Patient = function(patient){
this.fname = patient.fname;
this.lname = patient.lname;
this.prefix = patient.prefix;
this.gender = patient.gender;
this.dob = patient.dob;
this.streetaddress = patient.streetaddress;
this.city = patient.city;
this.zipcode = patient.zipcode;
this.state = patient.state;
this.cellphone = patient.cellphone;
this.email = patient.email;
this.last_updated = new Date();
}
 
Patient.create = function (newPatient, result) {
    dbConn.query("INSERT INTO patient set ?", newPatient, function (err, res) {
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

Patient.findById = function (id, result) {
    dbConn.query("Select * from patient where patient_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Patient.findAll = function (result) {
        dbConn.query("Select * from patient", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('patient : ', res);
                result(null, res);
            }
        });
};

Patient.update = function(id, patient, result){
    dbConn.query("UPDATE patient SET fname=?,lname=?, prefix=?, gender=?, dob=?, streetaddress=?, city=?, zipcode=?, state=?, cellphone=?, email=? WHERE patient_id = ?", 
    [patient.fname, patient.lname, patient.prefix, patient.gender, patient.dob, patient.streetaddress, patient.city, patient.zipcode,patient.state, patient.cellphone, patient.email ,id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }else{
        result(null, res);
        }
    });
};

Patient.delete = function(id, result){
    dbConn.query("DELETE FROM patient WHERE patient_id = ?", [id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        result(null, res);
        }
        });
    };

    module.exports= Patient;