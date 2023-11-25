const express=require('express');
const router = express.Router();
const registerController = require('./registerController');
const verifyJWT=require('./verifyJWT');



router.post('/', registerController.handleNewUser);

module.exports = router;
