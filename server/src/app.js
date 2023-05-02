const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const api = require("./routes/api");

const app = express();

app.use(cors({ origin: "tps://cv-git-main-artemzakhar.vercel.app" }));

app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));

app.use("/v1", api);
app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

module.exports = app;
