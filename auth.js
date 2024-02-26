const express=require('express');
const router = express.Router();
const authControllers = require('./authControllers');



router.get('/',  authControllers.handleLogin);

module.exports = router;