var config = require('../config/config');
var _ = require('lodash');

var noop = function(){};


var consoleLog = config.logging ? console.log.bind(console): noop;

var logger = {
	log:function(){
		
		var args = _.toArray(arguments)
			.map(function(arg){
				if(typeof arg === 'object'){
					var string = JSON.stringify(arg, 2);
					return string.bold.green;
				}else{
					arg+= '';
					return arg.bold.green;
				}
			});
			consoleLog.apply(console, args);
	}
}

module.exports = logger;