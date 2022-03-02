const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    name: String,
    shipIsBroken: Boolean,
    entry: String
}, {timestamps: true})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;