'use strict';
var dbConn = require('../../config/db.config');

// Encounter Object
var Encounter = function(encounter){
this.patient_id = encounter.patient_id;
this.reason = encounter.reason;
this.status = encounter.status;
this.note = encounter.note;
this.user_id = encounter.user_id;
this.last_updated = new Date();
}
 
Encounter.create = function (newEncounter, result) {
    dbConn.query("INSERT INTO encounter set ?", newEncounter, function (err, res) {
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

Encounter.findById = function (id, result) {
    dbConn.query("Select * from encounter where encounter_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Encounter.findByPatientId = function (id, result) {
    dbConn.query("Select * from encounter where patient_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Encounter.findByUserId = function (id, result) {
    dbConn.query("Select * from encounter where user_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Encounter.findAll = function (result) {
        dbConn.query("Select * from encounter", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('encounter : ', res);
                result(null, res);
            }
        });
};

Encounter.update = function(id, encounter, result){
    dbConn.query("UPDATE encounter SET patient_id = ?, reason=?, status=?, note=?, user_id=? WHERE encounter_id = ?", 
    [encounter.patient_id, encounter.reason, encounter.status, encounter.note, encounter.user_id, id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }else{
        result(null, res);
        }
    });
};

Encounter.delete = function(id, result){
    dbConn.query("DELETE FROM encounter WHERE encounter_id = ?", [id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        result(null, res);
        }
        });
    };

module.exports= Encounter;