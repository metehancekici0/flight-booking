const mongoose = require("mongoose")

const flightSchema = new mongoose.Schema({
    flightName: String,
    airlineName: String,
    arrivalCity: String,
    arrivalIATA: String,
    arrivalTime: String,
    departureCity: String,
    departureIATA: String,
    departureTime: String,
    flightDirection: String
})

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;