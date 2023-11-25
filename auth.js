const express=require('express');
const router = express.Router();
const authControllers = require('./authControllers');



router.post('/',  authControllers.handleLogin);

module.exports = router;