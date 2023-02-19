const express = require("express");
const router = express.Router();

const salaryController = require("../app/controllers/SalaryController");

/*
   router về tính lương  
*/
router.get("/", salaryController.index);
router.put("/:id/salaryEdit", salaryController.update);

module.exports = router;
