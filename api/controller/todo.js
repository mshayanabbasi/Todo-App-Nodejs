const Todo = require("../models/todo");
const mongoose = require("mongoose");

exports.add_todo = async (req, res) => {
  try {
    const todo = new Todo({
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
    });
    await todo.save();
    res.status(201).json({
      todo,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

exports.get_all_todo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      todos,
    });
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

exports.get_one_todo = async (req, res) => {
  const id = req.params.todoId;
  try {
    const todo = await Todo.findById(id);
    if (todo) {
      res.status(200).json({
        todo,
      });
    } else {
      res.status(404).json({
        message: "No valid entry found for provided ID",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

exports.update_todo = async (req, res) => {
  const id = req.params.todoId;
  try {
    const todo = await Todo.findOne({ _id: id });
    todo.completed = true;
    await todo.save();
    // console.log(todo);
    if (todo) {
      res.status(201).json({
        message: "Update Successfully",
        todo,
      });
    }
    // } else {
    //   res.status(404).json({
    //     message: "Not update entry",
    //   });
    // }
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};

exports.delete_todo = async (req, res) => {
  const id = req.params.todoId;
  try {
    const todo = await Todo.remove({ _id: id });
    if (todo) {
      res.status(204).json({
        message: "Deleted Successfully",
      });
    } else {
      res.status(400).json({
        message: "No entries found",
      });
    }
  } catch (e) {
    res.status(500).json({
      error: e,
    });
  }
};
