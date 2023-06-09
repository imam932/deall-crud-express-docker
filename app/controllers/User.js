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
    const newuser = new User(req.body);

    // Save User in the database
    User.find({email:newuser.email})
    .then(data => {
        if (!data) {
            res.status(400).json({ message :"email exits"});
        }else{
            newuser.save(newuser)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while creating the User."
                });
            });
        }
    })
};

// Retrieve all Users from the database.
// can search name by param: name
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    User.paginate(condition)
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
exports.findSingle = (req, res) => {
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

// Find a single User with an id and show password (Admin role)
exports.findSingleAndPassword = (req, res) => {
    const id = req.params.id;

    User.findById(id)
    .select("+password")
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
            message: "Could not delete User with id=" + id + " " + res.message
        });
    });
};
