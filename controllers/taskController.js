import Task from "../models/task.js";

export const createTask = async (req, res) => {
  try {
    const task = new Task({ ...req.body, user: req.user.id });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id)
      return res.status(404).json({ msg: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const updateTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id)
      return res.status(404).json({ msg: "Task not found" });

    task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const deleteTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id)
      return res.status(404).json({ msg: "Task not found" });

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "Task removed" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
