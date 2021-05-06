var config = require('./config');
var couchbase = require('couchbase');
var endPoint = config.couchbase.endPoint;
var bucketName = config.couchbase.bucketName;
var cluster = new couchbase.Cluster(endPoint);
var logger = require('../utils/logger');

var db = function () {

    logger.log('initialising db service');

    var bucket = cluster.openBucket(bucketName, function (err) {

        if (err) {
            logger.log('ERROR OPENING BUCKET', {bucket:bucket, config: config.couchbase });

        } else {
            logger.log('OPENING BUCKET', {bucket:bucket, config: config.couchbase });

            bucket.on('error', function (err) {
                logger.log('BUCKET ERROR:', err);
            });
        }
    });



    return {
        bucket: bucket
    }
};

module.exports = db();

