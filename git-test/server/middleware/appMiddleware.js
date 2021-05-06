var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//setup global middleware here

module.exports = function(app){
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(cookieParser());
}