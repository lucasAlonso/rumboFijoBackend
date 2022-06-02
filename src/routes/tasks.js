import { Router } from "express";
const router = Router();
import {
  createTask,
  deleteTask,
  getOneTask,
  getTaskByProject,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";

router.post("/", createTask);
router.get("/", getTasks);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.get("/:id", getOneTask);
router.get("/project/:projectid", getTaskByProject);

export default router;
