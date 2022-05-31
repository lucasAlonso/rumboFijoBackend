import Sequelize from "sequelize";
import { sequelize } from "../database/database.js";

const Task = sequelize.define(
  "task",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    done: {
      type: Sequelize.BOOLEAN,
    },
    description: {
      type: Sequelize.TEXT,
    },
    projectid: {
      type: Sequelize.INTEGER,
    },
  },
  { timestamps: false }
);

export default Task;
