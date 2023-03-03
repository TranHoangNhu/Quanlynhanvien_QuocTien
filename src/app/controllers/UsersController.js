const User = require("../models/Users");
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require("../../util/mongoose");

class userController {
  // [GET] /
  index(req, res, next) {
    User.find({})
      .then((users) => {
        res.render("home", {
          users: multipleMongooseToObject(users),
        });
      })
      .catch(next);
  }

  show(req, res) {
    res.send("COURSE DETAIL");
  }

  create(req, res, next) {
    // res.json(req.body);
    let user = new User(req.body);
    user
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  edit(req, res, next) {
    User.findById(req.params.id)
      .then((user) =>
        res.render("users/edit", {
          user: mongooseToObject(user),
        })
      )
      .catch(next);
  }

  print(req, res, next) {
    User.findById(req.params.id)
      .then((user) =>
        res.render("users/print", {
          user: mongooseToObject(user),
        })
      )
      .catch(next);
  }

  update(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/"))
      .catch(next);
  }

  destroy(req, res, next) {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/"))
      .catch(next);
  }
}

module.exports = new userController();
