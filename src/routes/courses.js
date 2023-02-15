var express = require('express');
const CourseController = require('../app/controllers/CourseController');
var router = express.Router();

router.get('/api', CourseController.list);
router.get('/:slug', CourseController.show);

module.exports = router;