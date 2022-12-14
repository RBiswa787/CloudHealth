module.exports = app => {
    const doctor = require("../controllers/doctor.controller");

    let router = require("express").Router();

    app.use("/api/doctor", router);

    router.post("/create", doctor.create);

    router.post("/update", doctor.update);

    router.post("/get", doctor.get);

    router.get("/findAll", doctor.findAll);

    router.post("/updateBooking", doctor.updateBooking);

};