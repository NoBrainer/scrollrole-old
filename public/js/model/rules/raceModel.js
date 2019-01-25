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

        this.set(this.parse(attrs, options));

        var setupCollection = _.bind(function(fieldName, CollectionClass) {
            this.set(fieldName, new CollectionClass(attrs[fieldName] || [], {parse: true}));
        }, this);

        setupCollection(RaceModel.fields.ADJUSTMENTS, AdjustmentCollection);
        setupCollection(RaceModel.fields.CHOICES, ChoiceCollection);
        setupCollection(RaceModel.fields.FEATURES, FeatureCollection);
        setupCollection(RaceModel.fields.PROFICIENCIES, ProficiencyCollection);
        setupCollection(RaceModel.fields.SUBRACES, SubRaceCollection);
    },

    parse: function(attrs, options) {
        attrs = attrs || {};
        attrs[RaceModel.fields.ICON_ID] = IconIdUtil.normalize(attrs[RaceModel.fields.ICON_ID], RaceModel.defaultIconId);
        return attrs;
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

    defaultIconId: 'race-custom'
});

_.extend(ExportedClass, RaceModel);
ExportedClass.prototype = RaceModel.prototype;