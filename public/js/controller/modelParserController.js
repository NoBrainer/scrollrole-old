var BackgroundModel = require('../model/backgroundModel');
var ClassModel = require('../model/classModel');
var RaceModel = require('../model/raceModel');

var ModelParserController = {

    parseBackground: function(json) {
        return new BackgroundModel(json);
    },

    parseBackgrounds: function(json) {
        var arr = _.isObject(json) ? json.backgrounds : json;
        arr = _.isArray(arr) ? arr : [];
        var models = _.map(arr, ModelParserController.parseBackground);
        return { backgrounds: models };
    },

    parseClass: function(json) {
        return new ClassModel(json);
    },

    parseClasses: function(json) {
        var arr = _.isObject(json) ? json.classes : json;
        arr = _.isArray(arr) ? arr : [];
        var models = _.map(arr, ModelParserController.parseClass);
        return { classes: models };
    },

    parseRace: function(json) {
        return new RaceModel(json);
    },

    parseRaces: function(json) {
        var arr = _.isObject(json) ? json.races : json;
        arr = _.isArray(arr) ? arr : [];
        var models = _.map(arr, ModelParserController.parseRace);
        return { races: models };
    }
};

module.exports = ModelParserController;