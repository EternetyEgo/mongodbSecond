const mongoose = require("mongoose")

const jobScheme = mongoose.Schema({
    name: String,
})

const Job = mongoose.model('Job', jobScheme)

module.exports.Job = Job
