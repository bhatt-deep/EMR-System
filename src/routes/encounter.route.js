const express = require('express')
const router = express.Router()
const encounterController =   require('../controllers/encounter.controller');
// Retrieve all encounters
router.get('/', encounterController.findAll);
// Create a new encounter
router.post('/', encounterController.create);
// Retrieve a single encounter with id
router.get('/:id', encounterController.findById);
// Update a encounter with id
router.put('/:id', encounterController.update);
// Delete a encounter with id
router.delete('/:id', encounterController.delete);
// Retrieve all encounters by patient id
router.get('/patient/:id', encounterController.findByPatientId);
// Retrieve all encounters by user id
router.get('/user/:id', encounterController.findByUserId);
module.exports = router