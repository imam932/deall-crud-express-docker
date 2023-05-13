const { authJwt } = require("../middlewares");

module.exports = app => {
    const users = require("../controllers/User");
  
    var router = require("express").Router();

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new user
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], users.create);
  
    // Retrieve all users
    router.get("/", [authJwt.verifyToken], users.findAll);
  
    // Retrieve a single user with id
    router.get("/:id", [authJwt.verifyToken], users.findSingle);
    router.get("/:id/password", [authJwt.verifyToken, authJwt.isAdmin], users.findSingleAndPassword);
  
    // Update a user with id
    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], users.update);
  
    // Delete a user with id
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], users.delete);

    app.use('/api/users', router);
};