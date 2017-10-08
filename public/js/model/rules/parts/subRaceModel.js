var AbilityScoreAdjustmentCollection = require('../../../collection/rules/parts/abilityScoreAdjustmentCollection');
var ChoiceCollection = require('../../../collection/rules/parts/choiceCollection');
var FeatureCollection = require('../../../collection/rules/parts/featureCollection');
var ProficiencyCollection = require('../../../collection/rules/parts/proficiencyCollection');

var SubRaceModel = Backbone.Model.extend({
    defaults: {
        abilityScoreAdjustments: null,  //AbilityScoreAdjustmentCollection
        choices: null,                  //ChoiceCollection
        description: [],                //List of Strings
        features: null,                 //FeatureCollection
        name: null,                     //String
        proficiencies: null             //ProficiencyCollection
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var abilityScoreAdjustmentModels = _.map(attrs.abilityScoreAdjustments,
                AbilityScoreAdjustmentCollection.parseModel) || [];
        this.set(SubRaceModel.fields.ABILITY_SCORE_ADJUSTMENTS,
                new AbilityScoreAdjustmentCollection(abilityScoreAdjustmentModels));

        var choiceModels = _.map(attrs.choices, ChoiceCollection.parseModel) || [];
        this.set(SubRaceModel.fields.CHOICES, new ChoiceCollection(choiceModels));

        var featureModels = _.map(attrs.features, FeatureCollection.parseModel) || [];
        this.set(SubRaceModel.fields.FEATURES, new FeatureCollection(featureModels));

        var proficiencyModels = _.map(attrs.proficiencies, ProficiencyCollection.parseModel) || [];
        this.set(SubRaceModel.fields.PROFICIENCIES, new ProficiencyCollection(proficiencyModels));
    },

    getAbilityScoreAdjustments: function() {
        return this.get(SubRaceModel.fields.ABILITY_SCORE_ADJUSTMENTS);
    },

    setAbilityScoreAdjustments: function(abilityScoreAdjustmentModels) {
        this.getAbilityScoreAdjustments().reset(abilityScoreAdjustmentModels || []);
        return this;
    },

    getChoices: function() {
        return this.get(SubRaceModel.fields.CHOICES);
    },

    setChoices: function(choiceModels) {
        this.getChoices().reset(choiceModels || []);
        return this;
    },

    getDescription: function() {
        return this.get(SubRaceModel.fields.DESCRIPTION);
    },

    getFeatures: function() {
        return this.get(SubRaceModel.fields.FEATURES);
    },

    setFeatures: function(featureModels) {
        this.getFeatures().reset(featureModels || []);
        return this;
    },

    getName: function() {
        return this.get(SubRaceModel.fields.NAME);
    },

    getProficiencies: function() {
        return this.get(SubRaceModel.fields.PROFICIENCIES);
    },

    setProficiencies: function(proficiencyModels) {
        this.getProficiencies().reset(proficiencyModels || []);
        return this;
    }
},{
    fields: {
        ABILITY_SCORE_ADJUSTMENTS: 'abilityScoreAdjustments',
        CHOICES: 'choices',
        DESCRIPTION: 'description',
        FEATURES: 'features',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies'
    }
});

module.exports = SubRaceModel;