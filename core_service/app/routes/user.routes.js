module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    let router = require("express").Router();

    app.use("/api/user", router);

    router.post("/create", user.create);

    router.post("/updatetoken", user.updateToken);

  };