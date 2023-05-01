const express = require("express");
const {
  httpAddNewProject,
  httpGetAllProjects,
  httpFindProjectByID,
  httpUpdateProject,
} = require("./project.controller");

const projectRouter = express.Router();

projectRouter.post("/", httpAddNewProject);
projectRouter.get("/", httpGetAllProjects);
projectRouter.get("/:id", httpFindProjectByID);
projectRouter.put("/", httpUpdateProject);

module.exports = projectRouter;
