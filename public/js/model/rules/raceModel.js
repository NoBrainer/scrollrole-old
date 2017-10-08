var AbilityScoreAdjustmentCollection = require('../../collection/rules/parts/abilityScoreAdjustmentCollection');
var ChoiceCollection = require('../../collection/rules/parts/choiceCollection');
var FeatureCollection = require('../../collection/rules/parts/featureCollection');
var ProficiencyCollection = require('../../collection/rules/parts/proficiencyCollection');
var SubRaceCollection = require('../../collection/rules/parts/subRaceCollection');

var RaceModel = Backbone.Model.extend({
    defaults: {
        abilityScoreAdjustments: null,  //AbilityScoreAdjustmentCollection
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

        var abilityScoreAdjustmentModels = _.map(attrs.abilityScoreAdjustments,
                AbilityScoreAdjustmentCollection.parseModel) || [];
        this.set(RaceModel.fields.ABILITY_SCORE_ADJUSTMENTS,
                new AbilityScoreAdjustmentCollection(abilityScoreAdjustmentModels));

        var choiceModels = _.map(attrs.choices, ChoiceCollection.parseModel) || [];
        this.set(RaceModel.fields.CHOICES, new ChoiceCollection(choiceModels));

        var featureModels = _.map(attrs.features, FeatureCollection.parseModel) || [];
        this.set(RaceModel.fields.FEATURES, new FeatureCollection(featureModels));

        var proficiencyModels = _.map(attrs.proficiencies, ProficiencyCollection.parseModel) || [];
        this.set(RaceModel.fields.PROFICIENCIES, new ProficiencyCollection(proficiencyModels));

        var subRaceModels = _.map(attrs.subraces, SubRaceCollection.parseModel) || [];
        this.set(RaceModel.fields.SUBRACES, new SubRaceCollection(subRaceModels));
    },

    getAbilityScoreAdjustments: function() {
        return this.get(RaceModel.fields.ABILITY_SCORE_ADJUSTMENTS);
    },

    setAbilityScoreAdjustments: function(abilityScoreAdjustmentModels) {
        this.getAbilityScoreAdjustments().reset(abilityScoreAdjustmentModels || []);
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
        ABILITY_SCORE_ADJUSTMENTS: 'abilityScoreAdjustments',
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

module.exports = RaceModel;