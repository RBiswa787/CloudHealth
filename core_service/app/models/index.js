const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model.js")(mongoose);
db.patient = require("./patient.model.js")(mongoose);
db.doctor = require("./doctor.model.js")(mongoose);
db.doctorAppointment = require("./doctorAppointment.model")(mongoose);

module.exports = db;