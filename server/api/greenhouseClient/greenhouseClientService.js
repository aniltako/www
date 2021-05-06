var logger = require('../../utils/logger');
var helper = require('../../utils/helper');
var Promise = require('bluebird');
var N1qlQuery = require('couchbase').N1qlQuery;
var db = require('../../config/cdb');

var greenhouseClientService = function greenhouseClientService() {

    var save = function (data) {

        return new Promise(function (resolve, reject) {

            var key = helper.generateRandomId();

            var greenhouseClientDetails = {
                id: key,
                type:'client',
                companyName: data.companyName,
                domainUrl:data.domainUrl,
                careersUrl:data.careersUrl,
                boardToken: data.boardToken,
                totalJobs: 0,
                linkedLinkUrl: data.linkedLinkUrl
            }

            db.bucket.upsert(key, greenhouseClientDetails, function(error, result) {
                if(error) {

                    reject(err);
                }else {

                    resolve(result);
                }

            });

        });
    };

    var getAll = function (data) {

        return new Promise(function (resolve, reject) {

            var statement = "SELECT * FROM default";
            var query = N1qlQuery.fromString(statement);
            db.bucket.query(query, function(err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }

            });

        });
    };


    var getById = function (id) {

        return new Promise(function (resolve, reject) {

            db.bucket.get(id, function(err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }

            });

        });
    };



    return {

        save: save,
        getAll: getAll,
        getById: getById

    }
};

module.exports = greenhouseClientService();
