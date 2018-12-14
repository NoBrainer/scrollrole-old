var ExportedClass = module.exports = Backbone.Model.extend();

var ChoiceCollection = require('../../collection/rules/parts/choiceCollection');
var FeatureCollection = require('../../collection/rules/parts/featureCollection');
var IconIdUtil = require('../../util/iconIdUtil');
var ProficiencyCollection = require('../../collection/rules/parts/proficiencyCollection');

var BackgroundModel = Backbone.Model.extend({
    defaults: {
        choices: null,                  //ChoiceCollection
        description: [],                //List of Strings
        equipment: [],                  //List of Strings
        features: null,                 //FeatureCollection
        iconId: null,                   //String
        name: null,                     //String
        proficiencies: null,            //ProficiencyCollection
        suggestedCharacteristics: null  //SuggestedCharacteristicsModel
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var setupCollection = _.bind(function(fieldName, CollectionClass) {
            this.set(fieldName, new CollectionClass(attrs[fieldName] || [], {parse: true}));
        }, this);

        setupCollection(BackgroundModel.fields.CHOICES, ChoiceCollection);
        setupCollection(BackgroundModel.fields.FEATURES, FeatureCollection);
        setupCollection(BackgroundModel.fields.PROFICIENCIES, ProficiencyCollection);

        this.set(this.parse(attrs, options));
    },

    parse: function(attrs, options) {
        attrs = attrs || {};
        attrs[BackgroundModel.fields.ICON_ID] = IconIdUtil.normalize(attrs[BackgroundModel.fields.ICON_ID],
            BackgroundModel.defaultIconId);
        return attrs;
    },

    getChoices: function() {
        return this.get(BackgroundModel.fields.CHOICES);
    },

    setChoices: function(choiceModels) {
        this.getChoices().reset(choiceModels || []);
        return this;
    },

    getDescription: function() {
        return this.get(BackgroundModel.fields.DESCRIPTION);
    },

    getEquipment: function() {
        return this.get(BackgroundModel.fields.EQUIPMENT);
    },

    getFeatures: function() {
        return this.get(BackgroundModel.fields.FEATURES);
    },

    setFeatures: function(featureModels) {
        this.getFeatures().reset(featureModels || []);
        return this;
    },

    getIconId: function() {
        return this.get(BackgroundModel.fields.ICON_ID);
    },

    setIconId: function(iconId) {
        this.set(BackgroundModel.fields.ICON_ID, iconId);
        return this;
    },

    getName: function() {
        return this.get(BackgroundModel.fields.NAME);
    },

    getProficiencies: function() {
        return this.get(BackgroundModel.fields.PROFICIENCIES);
    },

    setProficiencies: function(proficiencyModels) {
        this.getProficiencies().reset(proficiencyModels || []);
        return this;
    },

    getSuggestedCharacteristics: function() {
        return this.get(BackgroundModel.fields.SUGGESTED_CHARACTERISTICS);
    }
},{
    fields: {
        CHOICES: 'choices',
        DESCRIPTION: 'description',
        EQUIPMENT: 'equipment',
        FEATURES: 'features',
        ICON_ID: 'iconId',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies',
        SUGGESTED_CHARACTERISTICS: 'suggestedCharacteristics'
    },

    defaultIconId: 'background-custom'
});

_.extend(ExportedClass, BackgroundModel);
ExportedClass.prototype = BackgroundModel.prototype;