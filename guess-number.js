//The number of guesses can either be stored in-memory, or you can use a Mongo database

var mongoose = require('mongoose');

var GuessesSchema = new mongoose.Schema({
name: { type: String, required: true }
});

var Guesses = mongoose.model('Guess', GuessesSchema);

module.exports = Guesses;