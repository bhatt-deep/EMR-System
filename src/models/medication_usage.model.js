'use strict';
var dbConn = require('../../config/db.config');

// Medication_usage Object
var Medication_usage = function(medication_usage){
this.medication_name = medication_usage.medication_name;
this.medication_dose = medication_usage.medication_dose;
this.medication_frequency = medication_usage.medication_frequency;
this.history_id = medication_usage.history_id;
}
 
Medication_usage.create = function (newMedication_usage, result) {
    dbConn.query("INSERT INTO medication_usage set ?", newMedication_usage, function (err, res) {
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

Medication_usage.findById = function (id, result) {
    dbConn.query("Select * from medication_usage where medication_usage_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Medication_usage.findByHistoryId = function (id, result) {
    dbConn.query("Select * from medication_usage where history_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};



Medication_usage.findAll = function (result) {
        dbConn.query("Select * from medication_usage", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('medication_usage : ', res);
                result(null, res);
            }
        });
};

Medication_usage.update = function(id, medication_usage, result){
    dbConn.query("UPDATE medication_usage SET medication_name = ?, medication_dose=?, medication_frequency=?, history_id=? WHERE medication_usage_id = ?", 
    [medication_usage.medication_name, medication_usage.medication_dose, medication_usage.medication_frequency, medication_usage.history_id, id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }else{
        result(null, res);
        }
    });
};

Medication_usage.delete = function(id, result){
    dbConn.query("DELETE FROM medication_usage WHERE medication_usage_id = ?", [id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        result(null, res);
        }
        });
    };

module.exports= Medication_usage;