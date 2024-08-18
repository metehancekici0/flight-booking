const axios = require('axios');
const config = require('../config/config');
const Flight = require("../models/flight");

exports.fetchFlights = async (req, res) => {

    try {
        const response = await axios.get(`https://${config.api.hostname}/public-flights/flights`, {
            headers: {
                resourceversion: config.api.resourceVersion,
                app_id: config.api.appId,
                app_key: config.api.appKey
            }
        });
        const filteredFlights = response.data.flights
            .filter(flight => flight.serviceType === 'J')  // serviceType kontrolü
            .filter(flight => flight.estimatedLandingTime); // estimatedLandingTime kontrolü
        res.json(filteredFlights);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
};

exports.getFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.addFlight = async (req, res) => {
    const flight = new Flight({
        flightName: req.body.flightName,
        airlineName: req.body.airlineName,
        arrivalCity: req.body.arrivalCity,
        arrivalIATA: req.body.arrivalIATA,
        arrivalTime: req.body.arrivalTime,
        departureCity: req.body.departureCity,
        departureIATA: req.body.departureIATA,
        departureTime: req.body.departureTime,
        flightDirection: req.body.flightDirection
    });

    try {
        const newFlight = await flight.save();
        res.status(201).json(newFlight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}