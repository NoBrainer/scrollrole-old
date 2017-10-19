var ExportedClass = module.exports = Backbone.Model.extend();

var AdjustmentCollection = require('../../collection/rules/parts/adjustmentCollection');
var ChoiceCollection = require('../../collection/rules/parts/choiceCollection');
var FeatureCollection = require('../../collection/rules/parts/featureCollection');
var ProficiencyCollection = require('../../collection/rules/parts/proficiencyCollection');
var SubRaceCollection = require('../../collection/rules/parts/subRaceCollection');

var RaceModel = Backbone.Model.extend({
    defaults: {
        abilityScoreAdjustments: null,  //AdjustmentCollection
        age: null,                      //String
        alignment: null,                //String
        choices: null,                  //ChoiceCollection
        description: [],                //List of Strings
        features: null,                 //FeatureCollection
        name: null,                     //String
        proficiencies: null,            //ProficiencyCollection
        size: null,                     //String
        speed: null,                    //Number
        subraces: null                  //SubRaceCollection
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var adjustmentModels = _.map(attrs.abilityScoreAdjustments,
                AdjustmentCollection.model) || [];
        this.set(RaceModel.fields.ADJUSTMENTS,
                new AdjustmentCollection(adjustmentModels));

        var choiceModels = _.map(attrs.choices, ChoiceCollection.model) || [];
        this.set(RaceModel.fields.CHOICES, new ChoiceCollection(choiceModels));

        var featureModels = _.map(attrs.features, FeatureCollection.model) || [];
        this.set(RaceModel.fields.FEATURES, new FeatureCollection(featureModels));

        var proficiencyModels = _.map(attrs.proficiencies, ProficiencyCollection.model) || [];
        this.set(RaceModel.fields.PROFICIENCIES, new ProficiencyCollection(proficiencyModels));

        var subRaceModels = _.map(attrs.subraces, SubRaceCollection.model) || [];
        this.set(RaceModel.fields.SUBRACES, new SubRaceCollection(subRaceModels));
    },

    getAdjustments: function() {
        return this.get(RaceModel.fields.ADJUSTMENTS);
    },

    setAdjustments: function(adjustmentModels) {
        this.getAdjustments().reset(adjustmentModels || []);
        return this;
    },

    getAge: function() {
        return this.get(RaceModel.fields.AGE);
    },

    getAlignment: function() {
        return this.get(RaceModel.fields.ALIGNMENT);
    },

    getChoices: function() {
        return this.get(RaceModel.fields.CHOICES);
    },

    setChoices: function(choiceModels) {
        this.getChoices().reset(choiceModels || []);
        return this;
    },

    getDescription: function() {
        return this.get(RaceModel.fields.DESCRIPTION);
    },

    getFeatures: function() {
        return this.get(RaceModel.fields.FEATURES);
    },

    setFeatures: function(featureModels) {
        this.getFeatures().reset(featureModels || []);
        return this;
    },

    getName: function() {
        return this.get(RaceModel.fields.NAME);
    },

    getProficiencies: function() {
        return this.get(RaceModel.fields.PROFICIENCIES);
    },

    setProficiencies: function(proficiencyModels) {
        this.getProficiencies().reset(proficiencyModels || []);
        return this;
    },

    getSize: function() {
        return this.get(RaceModel.fields.SIZE);
    },

    getSpeed: function() {
        return this.get(RaceModel.fields.SPEED);
    },

    getSubraces: function() {
        return this.get(RaceModel.fields.SUBRACES);
    },

    setSubraces: function(subraces) {
        this.getSubraces().reset(subraces || []);
        return this;
    }
},{
    fields: {
        ADJUSTMENTS: 'abilityScoreAdjustments',
        AGE: 'age',
        ALIGNMENT: 'alignment',
        CHOICES: 'choices',
        DESCRIPTION: 'description',
        FEATURES: 'features',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies',
        SIZE: 'size',
        SPEED: 'speed',
        SUBRACES: 'subraces'
    }
});

_.extend(ExportedClass, RaceModel);
ExportedClass.prototype = RaceModel.prototype;