const Todo = require("../models/todo");
const mongoose = require("mongoose");

exports.add_todo = async (req, res) => {
  try {
    const todo = new Todo({
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
    });
    await todo.save();
    res.send({ todo });
  } catch (error) {
    res.status(400).send();
  }
};
