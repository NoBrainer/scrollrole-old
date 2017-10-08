var AbilityScoreAdjustmentCollection = require('../../../collection/rules/parts/abilityScoreAdjustmentCollection');
var ChoiceCollection = require('../../../collection/rules/parts/choiceCollection');
var ConditionModel = require('./conditionModel');
var FeatureCollection = require('../../../collection/rules/parts/featureCollection');
var ProficiencyCollection = require('../../../collection/rules/parts/proficiencyCollection');

var UnlockableModel = UnlockableModel = Backbone.Model.extend({
    defaults: {
        abilityScoreAdjustments: null,  //AbilityScoreAdjustmentCollection
        choices: null,                  //ChoiceCollection
        condition: null,                //ConditionModel
        features: null,                 //FeatureCollection
        proficiencies: null,            //ProficiencyCollection
        speed: null                     //Number
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var abilityScoreAdjustmentModels = _.map(attrs.abilityScoreAdjustments,
            AbilityScoreAdjustmentCollection.parseModel) || [];
        this.set(UnlockableModel.fields.ABILITY_SCORE_ADJUSTMENTS,
            new AbilityScoreAdjustmentCollection(abilityScoreAdjustmentModels));

        var choiceModels = _.map(attrs.choices, ChoiceCollection.parseModel) || [];
        this.set(UnlockableModel.fields.CHOICES, new ChoiceCollection(choiceModels));

        if (!_.isEmpty(attrs.condition)) {
            var conditionModel = new ConditionModel(attrs.condition);
            this.set(UnlockableModel.fields.CONDITION, conditionModel);
        }

        var featureModels = _.map(attrs.features, FeatureCollection.parseModel) || [];
        this.set(UnlockableModel.fields.FEATURES, new FeatureCollection(featureModels));

        var proficiencyModels = _.map(attrs.proficiencies, ProficiencyCollection.parseModel) || [];
        this.set(UnlockableModel.fields.PROFICIENCIES, new ProficiencyCollection(proficiencyModels));
    },

    getAbilityScoreAdjustments: function() {
        return this.get(UnlockableModel.fields.ABILITY_SCORE_ADJUSTMENTS);
    },

    setAbilityScoreAdjustments: function(abilityScoreAdjustmentModels) {
        this.getAbilityScoreAdjustments().reset(abilityScoreAdjustmentModels || []);
        return this;
    },

    getChoices: function() {
        return this.get(UnlockableModel.fields.CHOICES);
    },

    setChoices: function(choiceModels) {
        this.getChoices().reset(choiceModels || []);
        return this;
    },

    getCondition: function() {
        return this.get(UnlockableModel.fields.CONDITION);
    },

    getFeatures: function() {
        return this.get(UnlockableModel.fields.FEATURES);
    },

    setFeatures: function(featureModels) {
        this.getFeatures().reset(featureModels || []);
        return this;
    },

    getProficiencies: function() {
        return this.get(UnlockableModel.fields.PROFICIENCIES);
    },

    setProficiencies: function(proficiencyModels) {
        this.getProficiencies().reset(proficiencyModels || []);
        return this;
    },

    getSpeed: function() {
        return this.get(UnlockableModel.fields.SPEED);
    }
},{
    fields: {
        ABILITY_SCORE_ADJUSTMENTS: 'abilityScoreAdjustments',
        CHOICES: 'choices',
        CONDITION: 'condition',
        FEATURES: 'features',
        PROFICIENCIES: 'proficiencies',
        SPEED: 'speed'
    }
});

module.exports = UnlockableModel;