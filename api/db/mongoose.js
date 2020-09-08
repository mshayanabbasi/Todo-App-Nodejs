const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Chosemenow2018@cluster0.1puf8.mongodb.net/todos?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
