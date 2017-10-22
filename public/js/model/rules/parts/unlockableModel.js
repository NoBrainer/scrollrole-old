var ExportedClass = module.exports = Backbone.Model.extend();

var AdjustmentCollection = require('../../../collection/rules/parts/adjustmentCollection');
var ChoiceCollection = require('../../../collection/rules/parts/choiceCollection');
var ConditionModel = require('./conditionModel');
var FeatureCollection = require('../../../collection/rules/parts/featureCollection');
var ProficiencyCollection = require('../../../collection/rules/parts/proficiencyCollection');

var UnlockableModel = UnlockableModel = Backbone.Model.extend({
    defaults: {
        abilityScoreAdjustments: null,  //AdjustmentCollection
        choices: null,                  //ChoiceCollection
        condition: null,                //ConditionModel
        features: null,                 //FeatureCollection
        proficiencies: null,            //ProficiencyCollection
        speed: null                     //Number
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var adjustmentModels = _.map(attrs.abilityScoreAdjustments,
            AdjustmentCollection.create) || [];
        this.set(UnlockableModel.fields.ADJUSTMENTS,
            new AdjustmentCollection(adjustmentModels));

        var choiceModels = _.map(attrs.choices, ChoiceCollection.create) || [];
        this.set(UnlockableModel.fields.CHOICES, new ChoiceCollection(choiceModels));

        if (!_.isEmpty(attrs.condition)) {
            var conditionModel = new ConditionModel(attrs.condition);
            this.set(UnlockableModel.fields.CONDITION, conditionModel);
        }

        var featureModels = _.map(attrs.features, FeatureCollection.create) || [];
        this.set(UnlockableModel.fields.FEATURES, new FeatureCollection(featureModels));

        var proficiencyModels = _.map(attrs.proficiencies, ProficiencyCollection.create) || [];
        this.set(UnlockableModel.fields.PROFICIENCIES, new ProficiencyCollection(proficiencyModels));
    },

    getAdjustments: function() {
        return this.get(UnlockableModel.fields.ADJUSTMENTS);
    },

    setAdjustments: function(adjustmentModels) {
        this.getAdjustments().reset(adjustmentModels || []);
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
        ADJUSTMENTS: 'abilityScoreAdjustments',
        CHOICES: 'choices',
        CONDITION: 'condition',
        FEATURES: 'features',
        PROFICIENCIES: 'proficiencies',
        SPEED: 'speed'
    }
});

_.extend(ExportedClass, UnlockableModel);
ExportedClass.prototype = UnlockableModel.prototype;