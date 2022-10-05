module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();

    router.post("/", user.create);

    router.get("/", user.findAll);

    router.get("/signin", user.findOne);

    router.post("/signout", user.signOut);
  
    app.use("/api/user", router);
  };