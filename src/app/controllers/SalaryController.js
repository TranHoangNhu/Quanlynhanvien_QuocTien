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
}

module.exports = new salaryController();
