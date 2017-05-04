var router = require('express').Router();
var logger = require('../../utils/logger');
var controller = require('./greenhouseClientController');

//using interface like controller for all common routes
var createRoutes = require('../controller');
createRoutes(controller, router);

module.exports = router;