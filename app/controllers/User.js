const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Name can not be empty!" });
        return;
    }
    if (!req.body.email) {
        res.status(400).send({ message: "Email can not be empty!" });
        return;
    }

    // Create a User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        address: req.body.address,
        phone: req.body.phone,
        description: req.body.description,
    });

    // Save User in the database
    user.save(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
        });
    });
};

// Retrieve all Users from the database.
// can search name by param: name
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    User.find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findById(id)
    .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found User with id" + id});
        else res.send(data);
    })
    .catch(err => {
        res.status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
        } else {
            res.send({
                message: "User was deleted successfully!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    });
};
