const {
  addNewProject,
  getAllProjects,
  findProjectByID,
  updateProject,
} = require("../../models/project.model");

function checkData(data, res) {
  if (
    !data.name ||
    !data.description.en.language ||
    !data.description.en.descr ||   
    !data.description.ua.language ||
    !data.description.ua.descr ||
    !data.course ||
    !data.githubLink ||
    !data.gDiskLink
  ) {
    return res.status(400).json({
      error: "Missing required property. Please check",
    });
  }
}

async function httpAddNewProject(req, res) {
  const project = req.body;

  checkData(project, res);

  await addNewProject(project)
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((e) => {
      console.log(e);
    });
}

async function httpGetAllProjects(req, res) {
  await getAllProjects()
    .then((result) => {
      return res.status(200).json([...result]);
    })
    .catch((e) => {
      return res.status(500).json({ success: false, error: e });
    });
}

async function httpFindProjectByID(req, res) {
  const id = req.params.id;
  await findProjectByID(id)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
    });
}

async function httpUpdateProject(req, res) {
  const updatedInfo = req.body;

  checkData(updatedInfo, res);

  await updateProject(updatedInfo)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = {
  httpAddNewProject,
  httpGetAllProjects,
  httpFindProjectByID,
  httpUpdateProject,
};
