var express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
var userController = require('../controller/user.controller');
router.use(expressValidator());

router.post('/createUser', userController.createUser);

module.exports = router;