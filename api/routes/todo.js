const express = require("express");
const router = express.Router();
const Todo_Controller = require("../controller/todo");

router.post("/", Todo_Controller.add_todo);
router.get("/", Todo_Controller.get_all_todo);
router.get("/:todoId", Todo_Controller.get_one_todo);
router.delete("/:todoId", Todo_Controller.delete_todo);
router.patch("/:todoId", Todo_Controller.update_todo);

module.exports = router;
