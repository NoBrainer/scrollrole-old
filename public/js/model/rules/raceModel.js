var ExportedClass = module.exports = Backbone.Model.extend();

var AdjustmentCollection = require('../../collection/rules/parts/adjustmentCollection');
var ChoiceCollection = require('../../collection/rules/parts/choiceCollection');
var FeatureCollection = require('../../collection/rules/parts/featureCollection');
var IconIdUtil = require('../../util/iconIdUtil');
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
        iconId: null,                   //String
        name: null,                     //String
        proficiencies: null,            //ProficiencyCollection
        size: null,                     //String
        speed: null,                    //Number
        subraces: null                  //SubRaceCollection
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var adjustmentModels = _.map(attrs.abilityScoreAdjustments,
                AdjustmentCollection.create) || [];
        this.set(RaceModel.fields.ADJUSTMENTS,
                new AdjustmentCollection(adjustmentModels));

        var choiceModels = _.map(attrs.choices, ChoiceCollection.create) || [];
        this.set(RaceModel.fields.CHOICES, new ChoiceCollection(choiceModels));

        var featureModels = _.map(attrs.features, FeatureCollection.create) || [];
        this.set(RaceModel.fields.FEATURES, new FeatureCollection(featureModels));

        var proficiencyModels = _.map(attrs.proficiencies, ProficiencyCollection.create) || [];
        this.set(RaceModel.fields.PROFICIENCIES, new ProficiencyCollection(proficiencyModels));

        var subRaceModels = _.map(attrs.subraces, SubRaceCollection.create) || [];
        this.set(RaceModel.fields.SUBRACES, new SubRaceCollection(subRaceModels));

        this.setIconId(IconIdUtil.normalize(this.getIconId(), RaceModel.validIconIds, RaceModel.defaultIconId,
            this.getName()));
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

    getIconId: function() {
        return this.get(RaceModel.fields.ICON_ID);
    },

    setIconId: function(iconId) {
        this.set(RaceModel.fields.ICON_ID, iconId);
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
        ICON_ID: 'iconId',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies',
        SIZE: 'size',
        SPEED: 'speed',
        SUBRACES: 'subraces'
    },

    defaultIconId: 'custom',
    validIconIds: ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling']
});

_.extend(ExportedClass, RaceModel);
ExportedClass.prototype = RaceModel.prototype;