const express = require("express");
require("./db/mongoose");

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log("Todo Server is up on port " + port);
});
