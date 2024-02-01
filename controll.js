const User = require("./model");

const getUsers = (req, res) => {
  User.find()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

const addUsers = (req, res) => {
  const user = User({
    name: req.query.name,
    password: req.query.pass,
  });

  user
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteUsers = (req, res) => {
  const id = req.query.id;
  User.deleteOne({ _id: id })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

const findUserName = (req, res) => {
  // const id = req.query.id;
  const name = req.query.name;
  const pass = req.query.pass;
  User.findOne({ name })
    .then((response) => {
      console.log(response);
      if (response.name == name) {
        if (response.password == pass) {
          console.log("find user name");
          res.send("find user name");
        }
      } else {
        res.send("not find user name");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
const updateUsers = (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  const pass = req.query.pass;
  User.updateOne(
    { _id: id },
    {
      name:name,
      password: pass,
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getUsers, addUsers, deleteUsers, findUserName, updateUsers };
