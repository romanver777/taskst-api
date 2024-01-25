const express = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  patchTask,
  removeTask,
} = require("../controllers/task");

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/task/:id", getTaskById);
router.post("/task", createTask);
router.patch("/task/:id", patchTask);
router.delete("/task/:id", removeTask);

module.exports = router;
