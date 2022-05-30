// core module
const HomeController = require('../../controllers/frontend/HomeController');

// npm module
const express = require('express');
const router = express.Router();

// routing
router.get('/', HomeController.homepage);
router.get('/index', HomeController.index);

module.exports = router;