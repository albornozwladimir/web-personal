const bcrypt = require("bcryptjs");
const User = require("../models/user");
const saltRounds = 10;

function signUp(require, response) {
  const user = new User();
  const { name, lastname, email, password, repeatPassword } = require.body;

  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.role = "admin";
  user.active = false;

  if (!password || !repeatPassword) {
    response.status(404).send({ message: "Invalid password" });
  } else {
    if (password !== repeatPassword) {
      response.status(404).send({ message: "different password" });
    } else {
      //response.status(200).send({ message: "It's oK!" });
      bcrypt.hash(password, saltRounds, (error, result) => {
        if (error) {
          response.status(500).send({ message: "Error with brcypt" });
        } else {
          user.password = result;
          user.save((error, userStored) => {
            if (error) {
              response.status(500).send({ message: "User exists" });
            } else {
              if (!userStored) {
                response.status(404).send({ message: "Error with new User" });
              } else {
                response.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
  }
}

module.exports = {
  signUp,
};
