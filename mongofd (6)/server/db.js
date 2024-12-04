const mongoose = require("mongoose");

let serverDB = () => {
  mongoose.connect("mongodb://localhost:27017/project")
    .then(() => {
      console.log("working");
    })
    .catch(() => {
      console.log("not working");
    });
};

module.exports = serverDB;
