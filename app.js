const express = require("express");
const app = express();
const todo = require("./api/routes/todo");
const bodyParser = require("body-parser");
require("./api/db/mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/todo", todo);

module.exports = app;
