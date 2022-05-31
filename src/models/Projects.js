import Sequelize from "sequelize";
import { sequelize } from "../database/database.js";
import Task from "./Tasks.js";

const Project = sequelize.define(
  "project",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    priority: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.TEXT,
    },
    startdate: {
      type: Sequelize.DATE,
    },
  },
  { timestamps: false }
);

Project.hasMany(Task, {
  foreignKey: { name: "projectid", sourceKey: "id" },
});
Task.belongsTo(Project, {
  foreignKey: { name: "projectid", targetId: "id" },
});

export default Project;
