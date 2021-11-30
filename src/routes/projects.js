const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectsController");

router.get("/project", projectController.project_list);

router.post("/project", projectController.project_create);

router.get("/project/:projectId", projectController.project_get_by_id);

router.get("/project/by-user/:userId", projectController.project_get_by_userId);

router.get(
  "/project/by-title/:projectTitle",
  projectController.project_get_by_title
);

router.put("/project/:projectId", projectController.project_update_by_id);

router.delete("/project/:projectId", projectController.project_delete_by_id);

router.get("/project/:projectId/links", projectController.project_get_links);

router.get(
  "/project/:projectId/collab",
  projectController.project_get_collaborators
);

router.get(
  "/project/:projectId/collab/:userId",
  projectController.project_contain_collaborators
);

router.post(
  "/project/:projectId/collab",
  projectController.project_add_collaborators
);

router.delete(
  "/project/:projectId/collab",
  projectController.project_remove_collaborators
);

module.exports = router;
