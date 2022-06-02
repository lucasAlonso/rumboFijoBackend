import Project from "../models/Projects.js";
import Task from "../models/Tasks.js";

export async function createTask(req, res) {
  try {
    const { name, done, projectid, description } = req.body;
    console.log(req.body);
    const newTask = await Task.create(
      {
        projectid,
        name,
        done,
        description,
      },
      {
        //attributes: { exclude: ['projectIdproject'] }
        fields: ["name", "done", "description", "projectid"],
      }
    );
    res.json({ message: "New Task created" });
  } catch (error) {
    console.log(error);
  }
}
export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "projectid", "name", "done", "description"],
      order: [["id", "DESC"]],
    });
    res.json({
      tasks,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { projectid, name, done, description } = req.body;
  try {
    const task = await Task.findOne({
      attributes: ["name", "projectid", "done", "id", "description"],
      where: { id },
    });
    const updatedTask = await Task.update(
      { name, done, projectid, description },
      { where: { id } }
    );
    res.json({ message: "Task Updated", updatedTask });
  } catch (e) {
    console.log(e);
  }
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    const taskDeleted = await Task.destroy({
      where: { id },
    });
    res.json({
      message: "Task Deleted",
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getOneTask(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
      attributes: ["id", "projectid", "name", "done", "description"],
    });
    res.json({ task });
  } catch (e) {
    console.log(e);
  }
}

export async function getTaskByProject(req, res) {
  const { projectid } = req.params;
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "projectid", "name", "done", "description"],
      where: { projectid },
    });
    res.json({
      tasks,
    });
  } catch (e) {
    console.log(e);
  }
}
