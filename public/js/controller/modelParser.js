var BackgroundModel = require('../model/backgroundModel');
var ChoiceModel = require('../model/choiceModel');
var ClassModel = require('../model/classModel');
var ConditionModel = require('../model/conditionModel');
var FeatureModel = require('../model/featureModel');
var ProficiencyModel = require('../model/proficiencyModel');
var RaceModel = require('../model/raceModel');
var SpellCastingModel = require('../model/spellCastingModel');
var SpellModel = require('../model/spellModel');
var SpellSlotsModel = require('../model/spellSlotsModel');
var UnlockableModel = require('../model/unlockableModel');

var ModelParser = {

    parseBackground: function(json) {
        return new BackgroundModel(json);
    },

    parseBackgrounds: function(json) {
        var arr = _.isObject(json) ? json.backgrounds : json;
        arr = _.isArray(arr) ? arr : [];
        var models = _.map(arr, ModelParser.parseBackground);
        return { backgrounds: models };
    },

    parseChoice: function(json) {
        return new ChoiceModel(json);
    },

    parseClass: function(json) {
        return new ClassModel(json);
    },

    parseClasses: function(json) {
        var arr = _.isObject(json) ? json.classes : json;
        arr = _.isArray(arr) ? arr : [];
        var models = _.map(arr, ModelParser.parseClass);
        return { classes: models };
    },

    parseCondition: function(json) {
        return new ConditionModel(json);
    },

    parseFeature: function(json) {
        return new FeatureModel(json);
    },

    parseProficiency: function(json) {
        return new ProficiencyModel(json);
    },

    parseRace: function(json) {
        return new RaceModel(json);
    },

    parseRaces: function(json) {
        var arr = _.isObject(json) ? json.races : json;
        arr = _.isArray(arr) ? arr : [];
        var models = _.map(arr, ModelParser.parseRace);
        return { races: models };
    },

    parseSpellCasting: function(json) {
        return new SpellCastingModel(json);
    },

    parseSpell: function(json) {
        return new SpellModel(json);
    },

    parseSpellSlots: function(json) {
        return new SpellSlotsModel(json);
    },

    parseUnlockable: function(json) {
        return new UnlockableModel(json);
    }
};

module.exports = ModelParser;