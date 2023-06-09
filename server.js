const express = require('express');
require("dotenv").config();

const cors = require("cors");
const db = require("./app/models");
const bcrypt = require("bcryptjs");
const app = express();
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerFile = YAML.load('swagger.yml');
const Role = db.role;
const User = db.users

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Database
db.mongoose
  .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(() => {
      console.log("Connected to the database!");
      initial();
  })
  .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
  });

function initial() {
    Role.estimatedDocumentCount()
    .then(count => {
        if (count === 0) {
            const roleUser = new Role({name: "user"});

            roleUser.save(roleUser).then(data => {
                console.log("added 'user' to roles collection");
            })
            .catch(err => {
                console.log("error role create user", err.message);
            });

            const roleAdmin = new Role({name: "admin"});
            const newUser = new User({
                "name": "Admin CRUD",
                "email": "admin@gmail.com",
                "password": bcrypt.hashSync("rahasia123")
            });

            roleAdmin.save(roleAdmin).then(dataAdmin => {
                console.log("added 'admin' to roles collection");
                newUser.save(newUser).then(() => {
                    newUser.roles = dataAdmin._id;
                    newUser.save(newUser).then(() => {
                        console.log("User was registered successfully!");
                    });
                })
                .catch(err => {
                    console.log("error role create user", err.message);
                });
            })
            .catch(err => {
                console.log("error role create admin", err.message);
            });
        }
    })
    .catch(err => {
        console.log("error role create", err.message);
    });
}

// Route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to CRUD application." });
});
// import route
require("./app/routes/user")(app)
require("./app/routes/auth")(app)
require("./app/routes/role")(app)

// swagger
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))
 
// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});