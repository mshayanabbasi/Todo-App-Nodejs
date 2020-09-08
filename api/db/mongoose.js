const mongoose = require("mongoose");

const DATABASE_NAME = "todos";

mongoose.connect(
  "mongodb+srv://admin:Chosmeenow2018@cluster0.1puf8.mongodb.net/" +
    DATABASE_NAME +
    "?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
