module.exports = app => {
    const Appointment = require("../controllers/appointments.controller");

    let router = require("express").Router();

    app.use("/api/appointment", router);

    router.post("/create", Appointment.create);

    router.post("/get", Appointment.get);

    router.post("/filter", Appointment.filter);
    
    router.post("/updateRequest", Appointment.updateRequest);
};