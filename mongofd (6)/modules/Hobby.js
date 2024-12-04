const mongoose = require("mongoose")
const hobbyScheme = mongoose.Schema({
    name: String,
})

const Hobby = mongoose.model('Hobby', hobbyScheme) 

module.exports.Hobby = Hobby