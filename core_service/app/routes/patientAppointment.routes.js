module.exports = app => {
    const patientAppointment = require("../controllers/patientAppointment.controller");

    let router = require("express").Router();

    app.use("/api/patientAppointment", router);

    router.post("/createUpdate", patientAppointment.createUpdate);
    
    router.post("/get", patientAppointment.get);
};