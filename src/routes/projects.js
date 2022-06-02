import { Router } from "express";
const router = Router();

import {
  createProject,
  deleteProject,
  getOneProject,
  getProjects,
  updateProject,
} from "../controllers/project.controller.js";

// /apir/projects
router.post("/", createProject);
router.get("/", getProjects);

// /apir/projects/:projectID
router.get("/:id", getOneProject);
router.delete("/:id", deleteProject);
router.put("/:id", updateProject);

export default router;
