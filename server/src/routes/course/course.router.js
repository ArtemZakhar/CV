const express = require("express");

const {
  httpAddNewCourse,
  httpGetAllCourses,
  httpUpdateCourse,
} = require("./course.controller");

const courseRouter = express.Router();

courseRouter.post("/", httpAddNewCourse);
courseRouter.get("/", httpGetAllCourses);
courseRouter.put("/", httpUpdateCourse);

module.exports = courseRouter;
