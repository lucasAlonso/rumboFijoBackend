import express from "express";
import morgan from "morgan";

import projectRoutes from "./routes/projects.js";
import taskRoutes from "./routes/tasks.js";
import userRoutes from "./routes/users.js";
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

export default app;
