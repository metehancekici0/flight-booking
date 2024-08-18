const express = require('express');
const router = express.Router();
const { fetchFlights, addFlight, getFlights } = require('../controllers/flightController');

router.post('/flights', addFlight);
router.get('/flights', fetchFlights);
router.get('/my-flights', getFlights);

module.exports = router;