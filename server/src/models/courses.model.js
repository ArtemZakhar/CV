const courseDB = require("./courses.mongo");

async function addNewCourse(course) {
  const existingCourse = await courseDB.findOne({
    name: course.name,
  });
  if (!existingCourse) {
    const newCourse = courseDB({ ...course });
    const savedCourse = await newCourse.save();
    return savedCourse;
  } else {
    return "The course is existing. Please rename";
  }
}

async function getAllCourses() {
  const courseList = await courseDB.find();
  return courseList;
}

async function updateCourse(data) {
  await courseDB.findOneAndUpdate({ name: data.name }, data, { upsert: true });
  const updatedCourse = await courseDB.find({ name: data.name});
  return updatedCourse;
}

module.exports = { addNewCourse, getAllCourses, updateCourse };
