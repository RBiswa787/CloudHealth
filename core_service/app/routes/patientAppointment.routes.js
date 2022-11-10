module.exports = app => {
    const doctorAppointment = require("../controllers/patientAppointment.controller");

    let router = require("express").Router();

    app.use("/api/patientAppointment", router);

    router.post("/createUpdate", doctorAppointment.createUpdate);
};