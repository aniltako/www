var greenhouseClientService = require('./greenhouseClientService');

exports.get = function(req, res, next){

    greenhouseClientService.getAll(req.body)
        .then(function (result) {

            return res.send(result);
        }).catch(function (err) {
            return res.status(400).send(err);
        });
};

exports.getOne = function(req, res, next){

    greenhouseClientService.getById(req.params.id)
        .then(function (result) {

            return res.send(result);
        }).catch(function (err) {
        return res.status(400).send(err);
    });
};


exports.post = function(req, res, next){

    greenhouseClientService.save(req.body)
        .then(function (result) {

            return res.send(result);
        }).catch(function (err) {
           return res.status(400).send(err);
        });
};


