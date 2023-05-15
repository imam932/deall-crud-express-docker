const config = require("../../config/auth.config");
const db = require("../models");
const User = db.users;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.register = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    if (!req.body.roles, req.body.roles.length == 0) {
        res.status(400).send({ message: "Role can not be empty!" });
        return;
    }

    user.save(user).then(() => {
        Role.find({name: req.body.roles})
        .then(roles => {
            user.roles = roles.map(role => role._id);
            user.save(user).then(() => {
                res.send({
                  data: user,
                  message: "User was registered successfully!" 
                });
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message
        });
    });
};

exports.login = (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .select("+password")
        .populate("roles", "-__v")
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        name: user.name,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
    })
    .catch(err => {
        res.status(500).send({
            message: "cek "+ err.message
        });
    });
};