var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Users");
});

router.post("/", function (req, res) {
  res.send("Create User");
});

router.get("/:userId", function (req, res) {
  res.send("User: " + req.params.userId);
});

router.put("/:userId", function (req, res) {
  res.send("Update User: " + req.params.userId);
});

router.delete("/:userId", function (req, res) {
  res.send("Delete User: " + req.params.userId);
});

module.exports = router;
