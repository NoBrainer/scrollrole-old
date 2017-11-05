var express = require('express');
var router = express.Router();

/* GET YAML file for backgrounds */
router.get('/backgrounds', function(req, res, next) {
    res.download('./public/resources/config/backgrounds.yaml');
});

/* GET YAML file for classes */
router.get('/classes', function(req, res, next) {
    res.download('./public/resources/config/classes.yaml');
});

/* GET YAML file for races */
router.get('/races', function(req, res, next) {
    res.download('./public/resources/config/races.yaml');
});

module.exports = router;