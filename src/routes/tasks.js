import { Router } from "express";
const router = Router();
import {
  createTask,
  deleteTask,
  getOneTask,
  getTaskByProject,
  //getTasks,
  updateTask,
} from "../controllers/task.controller.js";
import { validateToken } from "../middlewares/validations.js";

router.post("/", validateToken, createTask);
//router.get("/", validateToken, getTasks);
router.delete("/:id", validateToken, deleteTask);
router.put("/:id", validateToken, updateTask);
router.get("/:id", validateToken, getOneTask);
router.get(
  "/project/:projectid",
  validateToken,

  getTaskByProject
);

export default router;
