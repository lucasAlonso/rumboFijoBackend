import Project from "../models/Projects.js";

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();
    res.json({
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function createProject(req, res) {
  const { name, priority, description, startdate } = req.body;
  try {
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
        startdate,
      },
      {
        fields: ["name", "priority", "description", "startdate"],
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

  res.send("received");
}

export async function getOneProject(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: { id },
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
    const { id } = req.params;
    const deleteRowCount = await Project.destroy({
      where: { id },
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
    const { name, priority, description, startdate } = req.body;
    const projects = await Project.findAll({
      attributes: ["id", "name", "priority", "description", "startdate"],
      where: { id },
    });
    if (projects.length > 0) {
      projects.forEach(async (project) => {
        await project.update({
          name,
          priority,
          description,
          startdate,
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
