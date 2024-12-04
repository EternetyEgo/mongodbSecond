const express = require("express");

let apis = (app) => {
    app.use(express.json());
    app.use('/api/new-coder', require('../routers/Coders'));
    app.use('/api/new-hobby', require('../routers/Hobby'));
    app.use('/api/new-home', require('../routers/Home'));
    app.use('/api/new-job', require('../routers/Job'));
    app.use('/api/new-phone', require('../routers/Phone'));
    app.use('/api/new-skills', require('../routers/Skills'));
    app.use('/api/new-technology', require('../routers/Technology'));
};

module.exports = apis;