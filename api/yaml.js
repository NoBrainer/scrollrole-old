var _ = require('underscore');
var express = require('express');
var yaml = require('js-yaml');

var router = express.Router();

/* POST a string of YAML and get JSON. */
router.post('/parse', function(req, res, next) {
    try {
        var yamlStr = req.body.text;
        if (!_.isString(yamlStr)) {
            res.status(400).send("Must provide 'yaml' in POST body");
            return;
        }
        var doc = yaml.safeLoad(yamlStr);
        res.json(doc);
    } catch(e) {
        res.status(500).json(e);
    }
});

module.exports = router;
