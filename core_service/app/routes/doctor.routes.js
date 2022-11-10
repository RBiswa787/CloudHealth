module.exports = app => {
    const doctor = require("../controllers/doctor.controller");

    let router = require("express").Router();

    app.use("/api/doctor", router);

    router.post("/create", doctor.create);

    router.post("/update", doctor.update);

    router.post("/find", doctor.get);

};