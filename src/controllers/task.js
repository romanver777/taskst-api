const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const resp = await Task.find();
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const resp = await Task.findById(req.params.id);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const resp = await Task.create(req.body);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const patchTask = async (req, res) => {
  try {
    const resp = await Task.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeTask = async (req, res) => {
  try {
    const resp = await Task.deleteOne({ _id: req.params.id });
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  patchTask,
  removeTask,
};
