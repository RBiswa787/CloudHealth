module.exports = app => {
    const doctorAppointment = require("../controllers/doctorAppointment.controller");

    let router = require("express").Router();

    app.use("/api/doctorAppointment", router);

    router.post("/createUpdate", doctorAppointment.createUpdate);

    router.post("/get", doctorAppointment.get);
};