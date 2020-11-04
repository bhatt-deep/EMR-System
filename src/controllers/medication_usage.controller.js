'use strict';
const Medication_usage = require('../models/medication_usage.model');

exports.findAll = function(req, res) {
    Medication_usage.findAll(function(err, medication_usage) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', medication_usage);
    res.send(medication_usage);
    });
};

exports.create = function(req, res) {
const new_medication_usage = new Medication_usage(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Medication_usage.create(new_medication_usage, function(err, medication_usage) {
        if (err)
        res.send(err);
        res.json({error:false,message:"Medication_usage added successfully!",data:medication_usage});
        });
    }
};

exports.findById = function(req, res) {
Medication_usage.findById(req.params.id, function(err, medication_usage) {
  if (err)
  res.send(err);
  res.json(medication_usage);
});
};

exports.findByHistoryId = function(req, res) {
  Medication_usage.findByHistoryId(req.params.id, function(err, medication_usage) {
    if (err)
    res.send(err);
    res.json(medication_usage);
  });
  };


exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Medication_usage.update(req.params.id, new Medication_usage(req.body), function(err, medication_usage) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'medication_usage successfully updated' });
});
}
};

exports.delete = function(req, res) {
Medication_usage.delete( req.params.id, function(err, medication_usage) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'medication_usage successfully deleted' });
});
};