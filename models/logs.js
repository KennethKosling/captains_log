const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    name: String,
    date: String,
    entry: String,
    shipIsBroken: Boolean
})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;