var BackgroundModel = require('../model/backgroundModel');
var ClassModel = require('../model/classModel');
var RaceModel = require('../model/raceModel');

var ModelParserController = {
    parseBackgrounds: function(json) {
        var models = _.map(json.backgrounds, function(modelJson) {
            return new BackgroundModel(modelJson);
        });
        return { backgrounds: models };
    },

    parseClasses: function(json) {
        var models = _.map(json.classes, function(modelJson) {
            return new ClassModel(modelJson);
        });
        return { classes: models };
    },

    parseRaces: function(json) {
        var models = _.map(json.races, function(modelJson) {
            return new RaceModel(modelJson);
        });
        return { races: models };
    }
};

module.exports = ModelParserController;