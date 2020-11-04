'use strict';
const Diagnostic_report = require('../models/diagnostic_report.model');

exports.findAll = function(req, res) {
    Diagnostic_report.findAll(function(err, diagnostic_report) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', diagnostic_report);
    res.send(diagnostic_report);
    });
};

exports.create = function(req, res) {
const new_diagnostic_report = new Diagnostic_report(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Diagnostic_report.create(new_diagnostic_report, function(err, diagnostic_report) {
        if (err)
        res.send(err);
        res.json({error:false,message:"Diagnostic_report added successfully!",data:diagnostic_report});
        });
    }
};

exports.findById = function(req, res) {
Diagnostic_report.findById(req.params.id, function(err, diagnostic_report) {
  if (err)
  res.send(err);
  res.json(diagnostic_report);
});
};

exports.findByPatientId = function(req, res) {
  Diagnostic_report.findByPatientId(req.params.id, function(err, diagnostic_report) {
    if (err)
    res.send(err);
    res.json(diagnostic_report);
  });
  };

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Diagnostic_report.update(req.params.id, new Diagnostic_report(req.body), function(err, diagnostic_report) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'diagnostic_report successfully updated' });
});
}
};

exports.delete = function(req, res) {
Diagnostic_report.delete( req.params.id, function(err, diagnostic_report) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'diagnostic_report successfully deleted' });
});
};