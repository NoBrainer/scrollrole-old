var ExportedClass = module.exports = Backbone.Model.extend();

var AdjustmentCollection = require('../../../collection/rules/parts/adjustmentCollection');
var ChoiceCollection = require('../../../collection/rules/parts/choiceCollection');
var ConditionModel = require('./conditionModel');
var FeatureCollection = require('../../../collection/rules/parts/featureCollection');
var ProficiencyCollection = require('../../../collection/rules/parts/proficiencyCollection');
var SpellCastingModel = require('../../../model/rules/parts/spellCastingModel');

var UnlockableModel = UnlockableModel = Backbone.Model.extend({
    defaults: {
        abilityScoreAdjustments: null,  //AdjustmentCollection
        choices: null,                  //ChoiceCollection
        condition: null,                //ConditionModel
        features: null,                 //FeatureCollection
        proficiencyBonus: null,         //Number
        proficiencies: null,            //ProficiencyCollection
        speed: null,                    //Number
        spellCasting: null              //SpellCastingModel
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var conditionModel = new ConditionModel(attrs.condition);
        this.set(UnlockableModel.fields.CONDITION, conditionModel);

        var setupCollection = _.bind(function(fieldName, CollectionClass) {
            this.set(fieldName, new CollectionClass(attrs[fieldName] || [], {parse: true}));
        }, this);

        setupCollection(UnlockableModel.fields.ADJUSTMENTS, AdjustmentCollection);
        setupCollection(UnlockableModel.fields.CHOICES, ChoiceCollection);
        setupCollection(UnlockableModel.fields.FEATURES, FeatureCollection);
        setupCollection(UnlockableModel.fields.PROFICIENCIES, ProficiencyCollection);

        if (attrs.spellCasting && !_.isEmpty(attrs.spellCasting)) {
            var spellCastingModel = new SpellCastingModel(attrs.spellCasting);
            this.set(UnlockableModel.fields.SPELL_CASTING, spellCastingModel);
        }
    },

    getAdjustments: function() {
        return this.get(UnlockableModel.fields.ADJUSTMENTS);
    },

    getChoices: function() {
        return this.get(UnlockableModel.fields.CHOICES);
    },

    getCondition: function() {
        return this.get(UnlockableModel.fields.CONDITION);
    },

    getFeatures: function() {
        return this.get(UnlockableModel.fields.FEATURES);
    },

    getProficiencies: function() {
        return this.get(UnlockableModel.fields.PROFICIENCIES);
    },

    getProficiencyBonus: function() {
        return this.get(UnlockableModel.fields.PROFICIENCY_BONUS);
    },

    getSpeed: function() {
        return this.get(UnlockableModel.fields.SPEED);
    },

    getSpellCasting: function() {
        return this.get(UnlockableModel.fields.SPELL_CASTING);
    }
},{
    fields: {
        ADJUSTMENTS: 'abilityScoreAdjustments',
        CHOICES: 'choices',
        CONDITION: 'condition',
        FEATURES: 'features',
        PROFICIENCIES: 'proficiencies',
        PROFICIENCY_BONUS: 'proficiencyBonus',
        SPEED: 'speed',
        SPELL_CASTING: 'spellCasting'
    }
});

_.extend(ExportedClass, UnlockableModel);
ExportedClass.prototype = UnlockableModel.prototype;