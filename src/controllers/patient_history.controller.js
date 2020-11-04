'use strict';
const Patient_history = require('../models/patient_history.model');

exports.findAll = function(req, res) {
    Patient_history.findAll(function(err, patient_history) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', patient_history);
    res.send(patient_history);
    });
};

exports.create = function(req, res) {
const new_patient_history = new Patient_history(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Patient_history.create(new_patient_history, function(err, patient_history) {
        if (err)
        res.send(err);
        res.json({error:false,message:"Patient_history added successfully!",data:patient_history});
        });
    }
};

exports.findById = function(req, res) {
Patient_history.findById(req.params.id, function(err, patient_history) {
  if (err)
  res.send(err);
  res.json(patient_history);
});
};

exports.findByPatientId = function(req, res) {
  Patient_history.findByPatientId(req.params.id, function(err, patient_history) {
    if (err)
    res.send(err);
    res.json(patient_history);
  });
  };

exports.findByUserId = function(req, res) {
    Patient_history.findByUserId(req.params.id, function(err, patient_history) {
      if (err)
      res.send(err);
      res.json(patient_history);
    });
    };
  

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Patient_history.update(req.params.id, new Patient_history(req.body), function(err, patient_history) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'patient_history successfully updated' });
});
}
};

exports.delete = function(req, res) {
Patient_history.delete( req.params.id, function(err, patient_history) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'patient_history successfully deleted' });
});
};