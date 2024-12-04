const mongoose = require('mongoose')

const techScheme = mongoose.Schema({
    technology: String
})

const Technology = mongoose.model('Technology', techScheme)

module.exports.Technology = Technology