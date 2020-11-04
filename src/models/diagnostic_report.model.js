'use strict';
var dbConn = require('../../config/db.config');

// Diagnostic Report Object
var Diagnostic_report = function(diagnostic_report){
this.patient_id = diagnostic_report.patient_id;
this.respiratory_rate = diagnostic_report.respiratory_rate;
this.oxygen_saturation = diagnostic_report.oxygen_saturation;
this.supplemental_oxygen = diagnostic_report.supplemental_oxygen;
this.body_temperature = diagnostic_report.body_temperature;
this.systolic_bp = diagnostic_report.systolic_bp;
this.heart_rate = diagnostic_report.heart_rate;
this.level_of_consciousness = diagnostic_report.level_of_consciousness;
this.last_updated = new Date();
}
 
Diagnostic_report.create = function (newDiagnostic_report, result) {
    dbConn.query("INSERT INTO diagnostic_report set ?", newDiagnostic_report, function (err, res) {
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

Diagnostic_report.findById = function (id, result) {
    dbConn.query("Select * from diagnostic_report where report_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Diagnostic_report.findByPatientId = function (id, result) {
    dbConn.query("Select * from diagnostic_report where patient_id = ? ", id, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        result(null, res);
        }
    });
};

Diagnostic_report.findAll = function (result) {
        dbConn.query("Select * from diagnostic_report", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('diagnostic_report : ', res);
                result(null, res);
            }
        });
};

Diagnostic_report.update = function(id, diagnostic_report, result){
    dbConn.query("UPDATE diagnostic_report SET patient_id = ?, respiratory_rate=?, oxygen_saturation=?, supplemental_oxygen=?, body_temperature=?, systolic_bp=?, heart_rate=?, level_of_consciousness=? WHERE report_id = ?", 
    [diagnostic_report.patient_id, diagnostic_report.respiratory_rate, diagnostic_report.oxygen_saturation, diagnostic_report.supplemental_oxygen, diagnostic_report.body_temperature, diagnostic_report.systolic_bp, diagnostic_report.heart_rate, diagnostic_report.level_of_consciousness,id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }else{
        result(null, res);
        }
    });
};

Diagnostic_report.delete = function(id, result){
    dbConn.query("DELETE FROM diagnostic_report WHERE report_id = ?", [id], function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        result(null, res);
        }
        });
    };

    module.exports= Diagnostic_report;