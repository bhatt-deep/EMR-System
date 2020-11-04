const express = require('express')
const router = express.Router()
const diagnostic_reportController =   require('../controllers/diagnostic_report.controller');
// Retrieve all diagnostic_reports
router.get('/', diagnostic_reportController.findAll);
// Create a new diagnostic_report
router.post('/', diagnostic_reportController.create);
// Retrieve a single diagnostic_report with id
router.get('/:id', diagnostic_reportController.findById);
// Update a diagnostic_report with id
router.put('/:id', diagnostic_reportController.update);
// Delete a diagnostic_report with id
router.delete('/:id', diagnostic_reportController.delete);
// Retrieve all diagnostic_reports by patient id
router.get('/patient/:id', diagnostic_reportController.findByPatientId);
module.exports = router