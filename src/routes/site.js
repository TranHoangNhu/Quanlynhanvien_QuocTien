var express = require('express');
var router = express.Router();

const siteController = require('../app/controllers/siteController');

// NewsController.index
router.get('/home', siteController.index2);
router.get('/search', siteController.index3);
router.get('/', siteController.index);

module.exports = router;