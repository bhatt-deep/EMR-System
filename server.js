const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require routes
const patientRoutes = require('./src/routes/patient.route')
const userRoutes = require('./src/routes/user.route')
const diagnostic_reportRoutes = require('./src/routes/diagnostic_report.route')
const encounterRoutes = require('./src/routes/encounter.route')
const patient_historyRoutes = require('./src/routes/patient_history.route')
const medication_usageRoutes = require('./src/routes/medication_usage.route')
// using as middleware
app.use('/api/v1/patient', patientRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/diagnostic_report', diagnostic_reportRoutes)
app.use('/api/v1/encounter', encounterRoutes)
app.use('/api/v1/patient_history', patient_historyRoutes)
app.use('/api/v1/medication_usage', medication_usageRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});