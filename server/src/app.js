const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const api = require("./routes/api");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));

app.use("/v1", api);

app.get("/v1/*", (req, res) => {
  const path = `/v1/${api}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
app.get("/v1/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
