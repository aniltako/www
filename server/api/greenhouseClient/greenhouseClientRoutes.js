var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./greenhouseClientController');

var createRoutes = require('../controller');
createRoutes(controller, router);

	
module.exports = router;