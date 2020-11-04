'use strict';
const Encounter = require('../models/encounter.model');

exports.findAll = function(req, res) {
    Encounter.findAll(function(err, encounter) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', encounter);
    res.send(encounter);
    });
};

exports.create = function(req, res) {
const new_encounter = new Encounter(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Encounter.create(new_encounter, function(err, encounter) {
        if (err)
        res.send(err);
        res.json({error:false,message:"Encounter added successfully!",data:encounter});
        });
    }
};

exports.findById = function(req, res) {
Encounter.findById(req.params.id, function(err, encounter) {
  if (err)
  res.send(err);
  res.json(encounter);
});
};

exports.findByPatientId = function(req, res) {
  Encounter.findByPatientId(req.params.id, function(err, encounter) {
    if (err)
    res.send(err);
    res.json(encounter);
  });
  };

exports.findByUserId = function(req, res) {
    Encounter.findByUserId(req.params.id, function(err, encounter) {
      if (err)
      res.send(err);
      res.json(encounter);
    });
    };
  

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Encounter.update(req.params.id, new Encounter(req.body), function(err, encounter) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'encounter successfully updated' });
});
}
};

exports.delete = function(req, res) {
Encounter.delete( req.params.id, function(err, encounter) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'encounter successfully deleted' });
});
};