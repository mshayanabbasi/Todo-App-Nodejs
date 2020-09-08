const Todo = require("../models/todo");
const mongoose = require("mongoose");

exports.add_todo = async (req, res) => {
  try {
    const todo = new Todo({
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
    });
    await todo.save();
    res.status(201).send(todo);
    // console.log(todo);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

exports.get_all_todo = async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log(todos);
    res.status(200).send(todos);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.get_one_todo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    console.log(todo);
    if (todo) {
      return res.status(200).json(todo);
    } else {
      return res.status(404).json({
        message: "No valid entry found for provided ID",
      });
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

exports.update_todo = async (req, res) => {};

exports.delete_todo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      res.status(400).send();
    }
    res.send(todo);
  } catch (e) {
    res.status(400).send(e);
  }
};
