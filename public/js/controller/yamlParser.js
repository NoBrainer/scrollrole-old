var yaml = require('js-yaml');

var YamlParser = {
    parseYaml: function(text) {
        var deferred = $.Deferred();
        try {
            var json = yaml.safeLoad(text);
            deferred.resolve(json);
        } catch(e) {
            deferred.reject(e);
        }
        return deferred.promise();
    },

    writeYaml: function(json) {
        var deferred = $.Deferred();
        try {
            var text = yaml.safeDump(json);
            deferred.resolve(text);
        } catch(e) {
            deferred.reject(e);
        }
        return deferred.promise();
    }
};

module.exports = YamlParser;