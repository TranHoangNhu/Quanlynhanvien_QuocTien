const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/UsersController");

/*
   router về quản lý nhân sự
*/
router.get("/", userController.index);
router.post("/create", userController.create);
router.get("/:id/edit", userController.edit);
router.put("/:id", userController.update);
router.delete('/:id', userController.destroy);
// router.get("/:slug", userController.show);

module.exports = router;
