var ExportedClass = module.exports = Backbone.Model.extend();

var ChoiceCollection = require('../../collection/rules/parts/choiceCollection');
var FeatureCollection = require('../../collection/rules/parts/featureCollection');
var IconIdUtil = require('../../util/iconIdUtil');
var ProficiencyCollection = require('../../collection/rules/parts/proficiencyCollection');
var SpellCastingModel = require('../../model/rules/parts/spellCastingModel');
var UnlockableCollection = require('../../collection/rules/parts/unlockableCollection');

var ClassModel = Backbone.Model.extend({
    defaults: {
        abilityScoreImprovementLevels: [],  //Array
        baseHitPoints: null,                //Number
        choices: null,                      //ChoiceCollection
        description: [],                    //List of Strings
        equipment: [],                      //List of Strings
        features: null,                     //FeatureCollection
        hitDice: null,                      //String
        iconId: null,                       //String
        name: null,                         //String
        proficiencies: null,                //ProficiencyCollection
        proficiencyBonus: null,             //Number
        spellCasting: null,                 //SpellCastingModel
        unlockables: null                   //UnlockableCollection
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        this.set(this.parse(attrs, options));

        var setupCollection = _.bind(function(fieldName, CollectionClass) {
            this.set(fieldName, new CollectionClass(attrs[fieldName] || [], {parse: true}));
        }, this);

        setupCollection(ClassModel.fields.CHOICES, ChoiceCollection);
        setupCollection(ClassModel.fields.FEATURES, FeatureCollection);
        setupCollection(ClassModel.fields.PROFICIENCIES, ProficiencyCollection);
        setupCollection(ClassModel.fields.UNLOCKABLES, UnlockableCollection);

        var spellCastingModel = new SpellCastingModel(attrs.spellCasting, {className: this.getName()});
        this.set(ClassModel.fields.SPELL_CASTING, spellCastingModel);
    },

    parse: function(attrs, options) {
        attrs = attrs || {};
        attrs[ClassModel.fields.ICON_ID] = IconIdUtil.normalize(attrs[ClassModel.fields.ICON_ID], ClassModel.defaultIconId);
        return attrs;
    },

    getASILevels: function() {
        return this.get(ClassModel.fields.ASI_LEVELS);
    },

    getBaseHitPoints: function() {
        return this.get(ClassModel.fields.BASE_HIT_POINTS);
    },

    getChoices: function() {
        return this.get(ClassModel.fields.CHOICES);
    },

    setChoices: function(choiceModels) {
        this.getChoices().reset(choiceModels || []);
        return this;
    },

    getDescription: function() {
        return this.get(ClassModel.fields.DESCRIPTION);
    },

    getEquipment: function() {
        return this.get(ClassModel.fields.EQUIPMENT);
    },

    getFeatures: function() {
        return this.get(ClassModel.fields.FEATURES);
    },

    setFeatures: function(featureModels) {
        this.getFeatures().reset(featureModels || []);
        return this;
    },

    getHitDice: function() {
        return this.get(ClassModel.fields.HIT_DICE);
    },

    getIconId: function() {
        return this.get(ClassModel.fields.ICON_ID);
    },

    setIconId: function(iconId) {
        this.set(ClassModel.fields.ICON_ID, iconId);
        return this;
    },

    getName: function() {
        return this.get(ClassModel.fields.NAME);
    },

    getProficiencies: function() {
        return this.get(ClassModel.fields.PROFICIENCIES);
    },

    setProficiencies: function(proficiencyModels) {
        this.getProficiencies().reset(proficiencyModels || []);
        return this;
    },

    getProficiencyBonus: function() {
        return this.get(ClassModel.fields.PROFICIENCY_BONUS);
    },

    getSpellCasting: function() {
        return this.get(ClassModel.fields.SPELL_CASTING);
    },

    getUnlockables: function() {
        return this.get(ClassModel.fields.UNLOCKABLES);
    },

    setUnlockables: function(unlockableModels) {
        this.getUnlockables().reset(unlockableModels || []);
        return this;
    }
},{
    fields: {
        ASI_LEVELS: 'abilityScoreImprovementLevels',
        BASE_HIT_POINTS: 'baseHitPoints',
        CHOICES: 'choices',
        DESCRIPTION: 'description',
        EQUIPMENT: 'equipment',
        FEATURES: 'features',
        HIT_DICE: 'hitDice',
        ICON_ID: 'iconId',
        NAME: 'name',
        PROFICIENCIES: 'proficiencies',
        PROFICIENCY_BONUS: 'proficiencyBonus',
        SPELL_CASTING: 'spellCasting',
        UNLOCKABLES: 'unlockables'
    },

    defaultIconId: 'class-custom'
});

_.extend(ExportedClass, ClassModel);
ExportedClass.prototype = ClassModel.prototype;