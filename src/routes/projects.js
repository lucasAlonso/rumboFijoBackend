import { Router } from "express";
const router = Router();

import {
  createProject,
  deleteProject,
  getOneProject,
  getProjects,
  updateProject,
} from "../controllers/project.controller.js";
import { validateToken } from "../middlewares/validations.js";

// /api/projects
router.post("/", validateToken, createProject);
router.get("/", validateToken, getProjects);

// /api/projects/:projectID
router.get("/:id", validateToken, getOneProject);
router.delete("/:id", validateToken, deleteProject);
router.put("/:id", validateToken, updateProject);

export default router;
