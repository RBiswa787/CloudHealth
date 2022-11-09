module.exports = app => {
    const patient = require("../controllers/patient.controller");

    let router = require("express").Router();

    app.use("/api/patient", router);

    router.post("/create", patient.create);

    router.post("/update", patient.update);

};