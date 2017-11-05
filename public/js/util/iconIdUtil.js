var ExportedClass = module.exports = {};

var IconIdUtil = {
    normalize: function(startValue, validArr, defaultValue, name) {
        if (!_.contains(validArr, startValue)) {
            var normalizedName = _.isString(name) ? name.toLowerCase() : name;
            if (_.contains(validArr, normalizedName)) {
                return normalizedName;
            } else {
                return defaultValue;
            }
        }
    }
};

_.extend(ExportedClass, IconIdUtil);