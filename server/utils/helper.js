var uuid = require("uuid/v4");
var logger = require('./logger');

var helper = function() {

    var generateRandomId = module.exports.generateRandomId  = function ()
    {
        return uuid.v4();
    };


    return {
        generateRandomId: generateRandomId
    }
};

module.exports = helper();