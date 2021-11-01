var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Projects");
});

router.post("/", function (req, res) {
  res.send("Create Project");
});

router.get("/:projectId", function (req, res) {
  res.send("Project: " + req.params.projectId);
});

router.put("/:projectId", function (req, res) {
  res.send("Update Project: " + req.params.projectId);
});

router.delete("/:projectId", function (req, res) {
  res.send("Delete Project: " + req.params.projectId);
});

module.exports = router;
