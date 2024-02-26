const express = require('express');
const router = express.Router();
const logOutController = require('./logOutController');

router.get('/', logOutController.handleLogout);

module.exports = router;
