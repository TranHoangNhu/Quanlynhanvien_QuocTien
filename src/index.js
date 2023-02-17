const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
var methodOverride = require("method-override");
const route = require("./routes");
const db = require("./config/db");

//connect to DB
db.connect();

const app = express();
const port = 2500;

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));
//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      netSalary: (basic, gift, adv, weekend, off) => {
        return (
          basic +
          gift +
          (basic / 30) * weekend -
          adv -
          (basic / 30) * off
        ).toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        });
      },
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//routes init
route(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
