var ExportedClass = module.exports = Backbone.Model.extend();

var AdjustmentCollection = require('../../../collection/rules/parts/adjustmentCollection');
var ChoiceCollection = require('../../../collection/rules/parts/choiceCollection');
var FeatureCollection = require('../../../collection/rules/parts/featureCollection');
var ProficiencyCollection = require('../../../collection/rules/parts/proficiencyCollection');

var SubRaceModel = Backbone.Model.extend({
    defaults: {
        abilityScoreAdjustments: null,  //AdjustmentCollection
        choices: null,                  //ChoiceCollection
        description: [],                //List of Strings
        features: null,                 //FeatureCollection
        name: null,                     //String
        proficiencies: null             //ProficiencyCollection
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var adjustmentModels = _.map(attrs.abilityScoreAdjustments,
                AdjustmentCollection.create) || [];
        this.set(SubRaceModel.fields.ADJUSTMENTS,
                new AdjustmentCollection(adjustmentModels));

        var choiceModels = _.map(attrs.choices, ChoiceCollection.create) || [];
        this.set(SubRaceModel.fields.CHOICES, new ChoiceCollection(choiceModels));

        var featureModels = _.map(attrs.features, FeatureCollection.create) || [];
        this.set(SubRaceModel.fields.FEATURES, new FeatureCollection(featureModels));

        var proficiencyModels = _.map(attrs.proficiencies, ProficiencyCollection.create) || [];
        this.set(SubRaceModel.fields.PROFICIENCIES, new ProficiencyCollection(proficiencyModels));
    },

    getAdjustments: function() {
        return this.get(SubRaceModel.fields.ADJUSTMENTS);
    },

    setAdjustments: function(adjustmentModels) {
        this.getAdjustments().reset(adjustmentModels || []);
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
        ADJUSTMENTS: 'abilityScoreAdjustments',
        CHOICES: 'choices',
        DESCRIPTION: 'description',
        FEATURES: 'features',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies'
    }
});

_.extend(ExportedClass, SubRaceModel);
ExportedClass.prototype = SubRaceModel.prototype;