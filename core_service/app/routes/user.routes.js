const user = require("../controllers/user.controller");
module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();

    app.use("/api/user", router);

    router.post("/create", user.create);

    router.post("/updatetoken", user.updateToken);
  
    
  };