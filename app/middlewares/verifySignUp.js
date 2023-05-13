const db = require("../models")
const ROLES = db.ROLES;
const User = db.users;

checkDuplicateEmail = (req, res, next) => {
    // Email
    User.find({
      email: req.body.email
    }).then(user => {
      if (user.length > 0) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message
        });
    });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateEmail,
  checkRolesExisted
};

module.exports = verifySignUp;