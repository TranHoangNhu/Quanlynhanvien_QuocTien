const usersRouter = require("./users");
const salaryRouter = require("./salary");

function route(app) {
  // app.use('/users', usersRouter);
  app.use("/home", usersRouter);
  app.use("/users", usersRouter);
  app.use("/", usersRouter);
  app.use("/salary", salaryRouter);
  // app.get("/search", (req, res) => {
  //   res.render("search");
  // });

  // app.post("/search", (req, res) => {
  //   res.send("");
  // });
}

module.exports = route;
