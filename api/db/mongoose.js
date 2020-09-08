const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shayan:Chosemenow2018@cluster0.kbgvx.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
