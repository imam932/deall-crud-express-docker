module.exports = app => {
    const role = require("../controllers/Role");

    var router = require("express").Router();

    // Retrieve all users
    router.get("/", role.findAll);

    app.use('/api/roles', router);
}