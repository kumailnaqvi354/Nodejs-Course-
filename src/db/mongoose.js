const mongoose = require("mongoose");
const validator = require("validator");
const mongoURI = require("../../Mongo_URI");

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
