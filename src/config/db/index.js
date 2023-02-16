const mongoose = require("mongoose");
// const dotenvParam = require("dotenv");
// dotenvParam.config();

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://ITQuocTien:QuocTien123@cluster0.gdvmxrg.mongodb.net/QuanLyNhanVien",
      {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
    
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect fairlure!!!");
    console.log(process.env.MONGODBSRV);
  }
}

module.exports = { connect };
