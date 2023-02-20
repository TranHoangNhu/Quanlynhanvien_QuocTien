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
      currency: (c, d) =>
        (c * d).toLocaleString("vi", { style: "currency", currency: "VND" }),
      netSalary: (basic, gift, adv, weekend, off, day) => {
        //basic: lương cơ bản, gift: lương thưởng, adv: lương trừ, weekend: số ngày thêm cuối tuần, off: số ngày nghỉ
        const salaryPerDay = Number(basic / day) * 100;
        const netSalary =
          basic * 100 +
          (gift * 100 -
            adv * 100 -
            (salaryPerDay * off) / 100 +
            (salaryPerDay * weekend) / 100);
        // Math.pow(salaryPerDay, weekend) / 100 -
        // Math.pow(salaryPerDay, adv) / 100 -
        // Math.pow(salaryPerDay, off) / 100;
        const netSalary_tmp = Number(netSalary) / 100; //.toFixed(0)
        return netSalary_tmp.toLocaleString("vi", {
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
