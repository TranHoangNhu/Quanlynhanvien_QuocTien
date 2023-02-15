const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
     process.env.MONGOSRVPARAM,
      {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect fairlure!!!");
  }
}

module.exports = { connect };
