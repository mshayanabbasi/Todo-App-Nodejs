const express = require("express");
const router = express.Router();
const Todo_Controller = require("../controller/todo");

router.post("/", Todo_Controller.add_todo);

module.exports = router;
