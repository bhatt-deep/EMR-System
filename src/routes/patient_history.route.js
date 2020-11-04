const express = require('express')
const router = express.Router()
const patient_historyController =   require('../controllers/patient_history.controller');
// Retrieve all patient_historys
router.get('/', patient_historyController.findAll);
// Create a new patient_history
router.post('/', patient_historyController.create);
// Retrieve a single patient_history with id
router.get('/:id', patient_historyController.findById);
// Update a patient_history with id
router.put('/:id', patient_historyController.update);
// Delete a patient_history with id
router.delete('/:id', patient_historyController.delete);
// Retrieve all patient_historys by patient id
router.get('/patient/:id', patient_historyController.findByPatientId);
// Retrieve all patient_historys by user id
router.get('/user/:id', patient_historyController.findByUserId);
module.exports = router