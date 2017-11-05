var ExportedClass = module.exports = Backbone.Model.extend();

var ChoiceCollection = require('../../collection/rules/parts/choiceCollection');
var FeatureCollection = require('../../collection/rules/parts/featureCollection');
var IconIdUtil = require('../../util/iconIdUtil');
var ProficiencyCollection = require('../../collection/rules/parts/proficiencyCollection');
var SpellCastingModel = require('../../model/rules/parts/spellCastingModel');
var UnlockableCollection = require('../../collection/rules/parts/unlockableCollection');

var ClassModel = Backbone.Model.extend({
    defaults: {
        baseHitPoints: null,    //Number
        choices: null,          //ChoiceCollection
        description: [],        //List of Strings
        equipment: [],          //List of Strings
        features: null,         //FeatureCollection
        hitDice: null,          //String
        iconId: null,           //String
        name: null,             //String
        proficiencies: null,    //ProficiencyCollection
        proficiencyBonus: null, //Number
        spellCasting: null,     //SpellCastingModel
        unlockables: null       //UnlockableCollection
    },

    initialize: function(attrs, options) {
        attrs = attrs || {};

        var choiceModels = _.map(attrs.choices, ChoiceCollection.create) || [];
        this.set(ClassModel.fields.CHOICES, new ChoiceCollection(choiceModels));

        var featureModels = _.map(attrs.features, FeatureCollection.create) || [];
        this.set(ClassModel.fields.FEATURES, new FeatureCollection(featureModels));

        var proficiencyModels = _.map(attrs.proficiencies, ProficiencyCollection.create) || [];
        this.set(ClassModel.fields.PROFICIENCIES, new ProficiencyCollection(proficiencyModels));

        var spellCastingModel = new SpellCastingModel(attrs.spellCasting);
        this.set(ClassModel.fields.SPELL_CASTING, spellCastingModel);

        var unlockableModels = _.map(attrs.unlockables, UnlockableCollection.create) || [];
        this.set(ClassModel.fields.UNLOCKABLES, new UnlockableCollection(unlockableModels));

        this.setIconId(IconIdUtil.normalize(this.getIconId(), ClassModel.validIconIds, ClassModel.defaultIconId,
            this.getName()));
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

    defaultIconId: 'custom',
    validIconIds: ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer',
        'warlock', 'wizard']
});

_.extend(ExportedClass, ClassModel);
ExportedClass.prototype = ClassModel.prototype;