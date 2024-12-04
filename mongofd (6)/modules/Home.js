const mongoose = require("mongoose")

const homeScheme =  mongoose.Schema({
    name: String
})

const Home = mongoose.model('Home', homeScheme)

module.exports.Home = Home
