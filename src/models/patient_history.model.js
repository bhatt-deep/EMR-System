'use strict';
var dbConn = require('../../config/db.config');

// Patient_history Object
var Patient_history = function(patient_history){
this.immunisations = patient_history.immunisations;
this.medical_issues = patient_history.medical_issues;
this.surgical_operations = patient_history.surgical_operations;
this.allergies = patient_history.allergies;
this.exercise_frequency = patient_history.exercise_frequency;
this.drinks_alcohol = patient_history.drinks_alcohol;
this.tobacco_used_past_5_years = patient_history.tobacco_used_past_5_years;
this.uses_recreational_drugs = patient_history.uses_recreational_drugs;
this.mental_health_history = patient_history.mental_health_history;
this.family_history = patient_history.family_history;
this.patient_id = patient_history.patient_id;
this.user_id = patient_history.user_id;
this.date = new Date();
}
 
Patient_history.create = function (newPatient_history, result) {
    dbConn.query("INSERT INTO patient_history set ?", newPatient_history, function (err, res) {
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

Patient_history.findById = function (id, result) {
    dbConn.query("Select * from patient_history where history_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Patient_history.findByPatientId = function (id, result) {
    dbConn.query("Select * from patient_history where patient_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Patient_history.findByUserId = function (id, result) {
    dbConn.query("Select * from patient_history where user_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Patient_history.findAll = function (result) {
        dbConn.query("Select * from patient_history", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('patient_history : ', res);
                result(null, res);
            }
        });
};

Patient_history.update = function(id, patient_history, result){
    dbConn.query("UPDATE patient_history SET immunisations = ?, medical_issues=?, surgical_operations=?, allergies=?, exercise_frequency=?, drinks_alcohol=?, tobacco_used_past_5_years=?, uses_recreational_drugs=?, mental_health_history=?, family_history=?, patient_id=?, user_id=? WHERE history_id = ?", 
    [patient_history.immunisations, patient_history.medical_issues, patient_history.surgical_operations, patient_history.allergies, patient_history.exercise_frequency, patient_history.drinks_alcohol, patient_history.tobacco_used_past_5_years, patient_history.mental_health_history, patient_history.family_history, patient_history.patient_id, patient_history.user_id, id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }else{
        result(null, res);
        }
    });
};

Patient_history.delete = function(id, result){
    dbConn.query("DELETE FROM patient_history WHERE history_id = ?", [id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        result(null, res);
        }
        });
    };

module.exports= Patient_history;