var logger = require('../../util/logger');

 exports.get = function(req, res, next){
 	logger.log('Hey from user');
	res.send({ok: true});
 };
