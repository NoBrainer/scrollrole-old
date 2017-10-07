var AbilityScoreAdjustmentModel = require('../model/abilityScoreAdjustmentModel');
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

    parseAbilityScoreAdjustment: function(attrs, options) {
        return new AbilityScoreAdjustmentModel(attrs, options);
    },

    parseBackground: function(attrs, options) {
        return new BackgroundModel(attrs, options);
    },

    parseChoice: function(attrs, options) {
        return new ChoiceModel(attrs, options);
    },

    parseClass: function(attrs, options) {
        return new ClassModel(attrs, options);
    },

    parseCondition: function(attrs, options) {
        return new ConditionModel(attrs, options);
    },

    parseFeature: function(attrs, options) {
        return new FeatureModel(attrs, options);
    },

    parseProficiency: function(attrs, options) {
        return new ProficiencyModel(attrs, options);
    },

    parseRace: function(attrs, options) {
        return new RaceModel(attrs, options);
    },

    parseSpellCasting: function(attrs, options) {
        return new SpellCastingModel(attrs, options);
    },

    parseSpell: function(attrs, options) {
        return new SpellModel(attrs, options);
    },

    parseSpellSlots: function(attrs, options) {
        return new SpellSlotsModel(attrs, options);
    },

    parseUnlockable: function(attrs, options) {
        return new UnlockableModel(attrs, options);
    }
};

module.exports = ModelParser;