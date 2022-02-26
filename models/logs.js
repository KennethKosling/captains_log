const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
    name: String,
    date: String,
    entry: String,
    shipIsBroken: Boolean
})

const Log = mongoose.model('Log', logsSchema);

module.exports = Log;