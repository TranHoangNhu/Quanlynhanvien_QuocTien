const User = require("../models/Users");
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require("../../util/mongoose");

class salaryController {
  index(req, res, next) {
    User.find({})
      .then((users) => {
        res.render("salary", {
          users: multipleMongooseToObject(users),
        });
      })
      .catch(next);
  }
  update(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/salary"))
      .catch(next);
  }
}

module.exports = new salaryController();
