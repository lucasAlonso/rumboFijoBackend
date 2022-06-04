import { Router } from "express";
const router = Router();
import {
  createUser,
  authenticateUserWithemail,
} from "../controllers/user.controller.js";

router.post("/", createUser);
router.post("/login", authenticateUserWithemail);
export default router;
