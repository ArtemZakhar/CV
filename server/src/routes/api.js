const express = require("express");

const projectsRouter = require("./project/project.router");
const courseRouter = require("./course/course.router");

const api = express.Router();

api.use("/projects", projectsRouter);
api.use("/courses", courseRouter);

module.exports = api;
