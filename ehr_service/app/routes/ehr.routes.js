module.exports = app => {
    const ehr = require("../controllers/ehr.controller");
  
    var router = require("express").Router();

    app.use("/api/ehr", router);

    router.post("/create", ehr.create);

    router.post("/get", ehr.get);

    
  };