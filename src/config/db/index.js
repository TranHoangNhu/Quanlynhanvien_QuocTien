const mongoose = require("mongoose");

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
    
    console.log("Connect database successfully!!!");
  } catch (error) {
    console.log("Connect database failed!!!");
    // console.log(process.env.MONGODBSRV);
  }
}

module.exports = { connect };
