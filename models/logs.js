const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    name: String,
    date: String,
    shipIsBroken: Boolean,
    entry: String
})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;