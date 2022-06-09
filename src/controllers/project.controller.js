import Project from "../models/Projects.js";

export async function getProjects(req, res) {
  try {
    const user_id = req.body.user.userId;
    const projects = await Project.findAll({
      where: { user_id },
    });
    res.json({
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function createProject(req, res) {
  try {
    const { name, priority, description } = req.body;
    const user_id = req.body.user.userId;
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
        user_id,
      },
      {
        fields: ["name", "priority", "description", "user_id"],
      }
    );
    if (newProject) {
      return res.json({
        message: "Project created successfully",
        data: newProject,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
  }
}

export async function getOneProject(req, res) {
  const user_id = req.body.user.userId;
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: { id, user_id },
    });
    res.json({
      project,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProject(req, res) {
  try {
    const user_id = req.body.user.userId;

    const { id } = req.params;
    const deleteRowCount = await Project.destroy({
      where: { id, user_id },
    });
    res.json({
      message: "Project Deleted succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateProject(req, res) {
  try {
    const { id } = req.params;
    const user_id = req.body.user.userId;

    const { name, priority, description } = req.body;
    const projects = await Project.findAll({
      attributes: ["id", "name", "priority", "description"],
      where: { id, user_id },
    });
    if (projects.length > 0) {
      projects.forEach(async (project) => {
        await project.update({
          name,
          priority,
          description,
        });
      });
    }
    return res.json({
      message: "Project Updated",
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
}
