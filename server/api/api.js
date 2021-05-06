var router = require('express').Router();

router.use('/greenhouseClient', require('./greenhouseClient/greenhouseClientRoutes'));

module.exports = router;
