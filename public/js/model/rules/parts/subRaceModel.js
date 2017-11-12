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

        var setupCollection = _.bind(function(fieldName, CollectionClass) {
            this.set(fieldName, new CollectionClass(attrs[fieldName] || [], {parse: true}));
        }, this);

        setupCollection(SubRaceModel.fields.ADJUSTMENTS, AdjustmentCollection);
        setupCollection(SubRaceModel.fields.CHOICES, ChoiceCollection);
        setupCollection(SubRaceModel.fields.FEATURES, FeatureCollection);
        setupCollection(SubRaceModel.fields.PROFICIENCIES, ProficiencyCollection);
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