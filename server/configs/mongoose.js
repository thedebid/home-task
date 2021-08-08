const mongoose = require("mongoose");
const config = require("./config.json");

const conxn = config.url + "/" + config.dbname;
mongoose.connect(
  conxn,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, done) {
    if (err) {
      console.log("Error connecting to db >>" + err);
    } else {
      console.log("db connection success");
    }
  }
);
