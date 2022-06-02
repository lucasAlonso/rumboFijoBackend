import { Router } from "express";
const router = Router();
import { createUser } from "../controllers/user.controller.js";

router.post("/", createUser);
export default router;
