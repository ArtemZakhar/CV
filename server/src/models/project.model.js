const projectDB = require("./project.mongo");

async function addNewProject(project) {
  const existingProject = await projectDB.findOne({
    name: project.name,
  });

  if (!existingProject) {
    const newProject = projectDB({ ...project });
    const savedProject = await newProject.save();
    return savedProject;
  } else {
    return "The project is existing. Please rename";
  }
}

async function getAllProjects() {
  const listProjects = await projectDB.find().populate("course");
  return listProjects;
}

async function findProjectByID(id) {
  const findProject = await projectDB.findById(id);
  return findProject;
}

async function updateProject(data) {
  await projectDB.findOneAndUpdate({ name: data.name }, data, { upsert: true });
  const updatedProject = await projectDB.find({ name: data.name });
  return updatedProject;
}

module.exports = {
  addNewProject,
  getAllProjects,
  findProjectByID,
  updateProject,
};
