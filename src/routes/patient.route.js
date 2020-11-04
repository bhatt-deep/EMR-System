const express = require('express')
const router = express.Router()
const patientController =   require('../controllers/patient.controller');
// Retrieve all patients
router.get('/', patientController.findAll);
// Create a new patient
router.post('/', patientController.create);
// Retrieve a single patient with id
router.get('/:id', patientController.findById);
// Update a patient with id
router.put('/:id', patientController.update);
// Delete a patient with id
router.delete('/:id', patientController.delete);
module.exports = router