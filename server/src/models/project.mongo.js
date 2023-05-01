const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    en: {
      language: {
        type: String,
        require: true,
      },
      descr: {
        type: String,
        require: true,
      },
    },
    ua: {
      language: {
        type: String,
        require: true,
      },
      descr: {
        type: String,
        require: true,
      },
    },
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  gDiskLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
