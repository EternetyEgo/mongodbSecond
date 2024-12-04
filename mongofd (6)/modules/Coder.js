const mongoose = require("mongoose")

const coderScheme = mongoose.Schema({
    name: String, 
    home:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Home'
    },
    hobby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hobby'
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    },
    phone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Phone'
    },
    skills: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skills'
    },
    technology: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Technology'
    }
})

const Coder = mongoose.model('Coder', coderScheme)

module.exports.Coder = Coder