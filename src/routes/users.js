const express = require("express");
const router = express.Router();
const userController = require("../controller/usersController");

router.get("/user", userController.user_list);

router.post("/user", userController.user_create);

router.get("/user/:userId", userController.user_get_by_id);

router.put("/user/:userId", userController.user_update_by_id);

router.delete("/user/:userId", function (req, res) {
  res.send("Delete User: " + req.params.userId);
});

router.get("/user/:userId/collab", userController.user_get_collabs);

module.exports = router;
