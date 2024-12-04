const mongoose = require("mongoose")

const skillsScheme = mongoose.Schema({
    skills: String,
})

const Skills = mongoose.model('Skills', skillsScheme)

module.exports.Skills = Skills