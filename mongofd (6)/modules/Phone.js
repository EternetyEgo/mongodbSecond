const mongoose = require("mongoose")

const phoneScheme = mongoose.Schema({
    phoneNum: Number,
})

const Phone = mongoose.model('Phone', phoneScheme)

module.exports.Phone = Phone